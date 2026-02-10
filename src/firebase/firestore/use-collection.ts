'use client';

import { useState, useEffect } from 'react';
import { onSnapshot, Query, DocumentData, QuerySnapshot } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export function useCollection<T>(query: Query<DocumentData> | null) {
    const [data, setData] = useState<T[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!query) {
            setData([]);
            setIsLoading(false);
            return;
        };

        const unsubscribe = onSnapshot(query, 
            (snapshot: QuerySnapshot<DocumentData>) => {
                const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) as T[];
                setData(data);
                setIsLoading(false);
            },
            async (error) => {
                const permissionError = new FirestorePermissionError({
                    path: query.path,
                    operation: 'list',
                });
                errorEmitter.emit('permission-error', permissionError);
                setIsLoading(false);
            }
        );

        return () => unsubscribe();
    }, [query]);

    return { data, isLoading };
}

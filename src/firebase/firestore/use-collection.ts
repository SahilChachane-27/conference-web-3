'use client';

import { useState, useEffect } from 'react';
import { onSnapshot, Query, DocumentData, QuerySnapshot, CollectionReference } from 'firebase/firestore';
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
                // A Query may not have a .path property, but a CollectionReference does.
                // We try to access it but fallback to a generic message if it's a complex query.
                const path = (query as CollectionReference<DocumentData>).path ?? 'a collection';
                const permissionError = new FirestorePermissionError({
                    path,
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

'use client';

import { useState, useEffect } from 'react';
import { onSnapshot, DocumentReference, DocumentData } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export function useDoc<T>(ref: DocumentReference<DocumentData> | null) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!ref) {
            setData(null);
            setIsLoading(false);
            return;
        }

        const unsubscribe = onSnapshot(ref, 
            (doc) => {
                if (doc.exists()) {
                    setData({ ...doc.data(), id: doc.id } as T);
                } else {
                    setData(null);
                }
                setIsLoading(false);
            },
            async (error) => {
                const permissionError = new FirestorePermissionError({
                    path: ref.path,
                    operation: 'get',
                });
                errorEmitter.emit('permission-error', permissionError);
                console.error("Error fetching document:", error);
                setIsLoading(false);
            }
        );

        return () => unsubscribe();
    }, [ref]);

    return { data, isLoading };
}

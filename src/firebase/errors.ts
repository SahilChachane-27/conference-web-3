export type SecurityRuleContext = {
    path: string;
    operation: 'get' | 'list' | 'create' | 'update' | 'delete';
    requestResourceData?: any;
};

export class FirestorePermissionError extends Error {
    constructor(public context: SecurityRuleContext) {
        const { path, operation } = context;
        super(`Firestore: Insufficient permissions to ${operation} at ${path}.`);
        this.name = 'FirestorePermissionError';
    }
}

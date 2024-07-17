/**
 * Adds key-value context to the error.
 * @param err The error to add context to.
 * @param contextKey Key for the context to be added.
 * @param contextValue Value for the context to be added.
 */
export declare function addErrorContext(err: Error, contextKey: string, contextValue: string): void;
/**
 *
 * @param err The error to get context from.
 * @return The context of the provided error.
 */
export declare function getErrorContext(err: Error): {
    [key: string]: string;
};

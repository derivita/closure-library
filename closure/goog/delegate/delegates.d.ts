/**
 * Calls the first delegate, or returns undefined if none are given.
 */
export declare let callFirst: R | undefined | null;
/**
 * Calls delegates until one returns a defined, non-null result.  Returns
 * undefined if no such element is found.
 */
export declare let callUntilDefinedAndNotNull: R | undefined | null;
/**
 * Calls delegates until one returns a truthy result.  Returns false if no such
 * element is found.
 */
export declare let callUntilTruthy: boolean | R | null;

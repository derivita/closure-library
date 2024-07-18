export declare var PBCHECK: boolean;
/**
 * Asserts that the given condition is true, if and only if the PBCHECK
 * flag is on.
 * @param condition The condition to check.
 * @param opt_message Error message in case of failure.
 */
export declare function assert(condition: any, opt_message?: string): void;
/**
 * Returns true if debug assertions (checks) are on.
 * @return The value of the PBCHECK constant.
 */
export declare function conductChecks(): boolean;

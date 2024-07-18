export declare function determineVersion_(): string;
/**
 * The version of the user agent. This is a string because it might contain
 * 'b' (as in beta) as well as multiple dots.
 */
export declare var VERSION: string;
/**
 * Whether the user agent product version is higher or the same as the given
 * version.
 * @param version The version to check.
 * @return Whether the user agent product version is higher or the same as the given version.
 */
export declare function isVersion(version: string | number): boolean;

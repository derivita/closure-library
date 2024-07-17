/**
 * Detects the version of the OS/platform the browser is running in. Not
 * supported for Linux, where an empty string is returned.
 * @return The platform version.
 */
export declare function determineVersion_(): string;
/**
 * The version of the platform. We don't determine the version of Linux.
 * For Windows, we only look at the NT version. Non-NT-based versions
 * (e.g. 95, 98, etc.) are given version 0.0.
 */
export declare var VERSION: string;
/**
 * Whether the user agent platform version is higher or the same as the given
 * version.
 * @param version The version to check.
 * @return Whether the user agent platform version is higher or the same as the given version.
 */
export declare function isVersion(version: string | number): boolean;

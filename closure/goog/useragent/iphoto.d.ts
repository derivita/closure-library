/**
 * Whether we can detect that the user has iPhoto installed.
 */
export declare var HAS_IPHOTO: boolean;
/**
 * The version of iPhoto installed if found.
 */
export declare var VERSION: string;
/**
 * Whether the installed version of iPhoto is as new or newer than a given
 * version.
 * @param version The version to check.
 * @return Whether the installed version of iPhoto is as new or newer than a given version.
 */
export declare function isVersion(version: string): boolean;

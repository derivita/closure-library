export declare var ASSUME_NO_JSCRIPT: boolean;
/**
 * Whether we detect that the user agent is using Microsoft JScript.
 */
export declare var HAS_JSCRIPT: boolean;
/**
 * The installed version of JScript.
 */
export declare var VERSION: string;
/**
 * Initializer for   Detects if the user agent is using
 * Microsoft JScript and which version of it.
 *
 * This is a named function so that it can be stripped via the jscompiler
 * option for stripping types.
 */
export declare function init(): void;
/**
 * Whether the installed version of JScript is as new or newer than a given
 * version.
 * @param version The version to check.
 * @return Whether the installed version of JScript is as new or newer than the given version.
 */
export declare function isVersion(version: string): boolean;

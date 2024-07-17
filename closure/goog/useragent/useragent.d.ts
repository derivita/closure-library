export declare var ASSUME_IE: boolean;
export declare var ASSUME_EDGE: boolean;
export declare var ASSUME_GECKO: boolean;
export declare var ASSUME_WEBKIT: boolean;
export declare var ASSUME_MOBILE_WEBKIT: boolean;
export declare var ASSUME_OPERA: boolean;
export declare var ASSUME_ANY_VERSION: boolean;
/**
 * Returns the userAgent string for the current browser.
 * @return The userAgent string.
 */
export declare function getUserAgentString(): string;
export declare function getNavigatorTyped(): Navigator | null;
/**
 * TODO(nnaze): Change type to "Navigator" and update compilation targets.
 * @return The native navigator object.
 */
export declare function getNavigator(): object | null;
/**
 * Whether the user agent is Presto-based Opera.
 */
export declare var OPERA: boolean;
/**
 * Whether the user agent is Internet Explorer.
 */
export declare var IE: boolean;
/**
 * Whether the user agent is Microsoft Edge (EdgeHTML based).
 */
export declare var EDGE: boolean;
/**
 * Whether the user agent is MS Internet Explorer or MS Edge (EdgeHTML based).
 */
export declare var EDGE_OR_IE: boolean;
/**
 * Whether the user agent is Gecko. Gecko is the rendering engine used by
 * Mozilla, Firefox, and others.
 */
export declare var GECKO: boolean;
/**
 * Whether the user agent is WebKit. WebKit is the rendering engine that
 * Safari, Edge Chromium, Opera Chromium, Android and others use.
 */
export declare var WEBKIT: boolean;
/**
 * Whether the user agent is running on a mobile device.
 *
 * This is a separate function so that the logic can be tested.
 *
 * TODO(nnaze): Investigate swapping in goog.labs.userAgent.device.isMobile().
 * @return Whether the user agent is running on a mobile device.
 */
export declare function isMobile_(): boolean;
/**
 * Whether the user agent is running on a mobile device.
 *
 * TODO(nnaze): Consider deprecating MOBILE when labs.userAgent
 * is promoted as the gecko/webkit logic is likely inaccurate.
 */
export declare var MOBILE: boolean;
/**
 * Used while transitioning code to use WEBKIT instead.
 */
export declare var SAFARI: boolean;
export declare function determinePlatform_(): string;
/**
 * The platform (operating system) the user agent is running on. Default to
 * empty string because navigator.platform may not be defined (on Rhino, for
 * example).
 */
export declare var PLATFORM: string;
export declare var ASSUME_MAC: boolean;
export declare var ASSUME_WINDOWS: boolean;
export declare var ASSUME_LINUX: boolean;
export declare var ASSUME_ANDROID: boolean;
export declare var ASSUME_IPHONE: boolean;
export declare var ASSUME_IPAD: boolean;
export declare var ASSUME_IPOD: boolean;
export declare var ASSUME_KAIOS: boolean;
/**
 * Whether the user agent is running on a Macintosh operating system.
 */
export declare var MAC: boolean;
/**
 * Whether the user agent is running on a Windows operating system.
 */
export declare var WINDOWS: boolean;
/**
 * Whether the user agent is Linux per the legacy behavior of
 * LINUX, which considered ChromeOS to also be
 * Linux.
 */
export declare function isLegacyLinux_(): boolean;
/**
 * Whether the user agent is running on a Linux operating system.
 *
 * Note that LINUX considers ChromeOS to be Linux,
 * while platform considers ChromeOS and
 * Linux to be different OSes.
 */
export declare var LINUX: boolean;
/**
 * Whether the user agent is running on Android.
 */
export declare var ANDROID: boolean;
/**
 * Whether the user agent is running on an iPhone.
 */
export declare var IPHONE: boolean;
/**
 * Whether the user agent is running on an iPad.
 */
export declare var IPAD: boolean;
/**
 * Whether the user agent is running on an iPod.
 */
export declare var IPOD: boolean;
/**
 * Whether the user agent is running on iOS.
 */
export declare var IOS: boolean;
/**
 * Whether the user agent is running on KaiOS.
 */
export declare var KAIOS: boolean;
export declare function determineVersion_(): string;
export declare function getDocumentMode_(): number | undefined;
/**
 * The version of the user agent. This is a string because it might contain
 * 'b' (as in beta) as well as multiple dots.
 */
export declare var VERSION: string;
/**
 * Compares two version numbers.
 * @param v1 Version of first item.
 * @param v2 Version of second item.
 * @return 1 if first argument is higher 0 if arguments are equal -1 if second argument is higher.
 */
export declare function compare(v1: string, v2: string): number;
/**
 * Cache for {@link isVersionOrHigher}.
 * Calls to compareVersions are surprisingly expensive and, as a browser's
 * version number is unlikely to change during a session, we cache the results.
 */
export declare var isVersionOrHigherCache_: {};
/**
 * Whether the user agent version is higher or the same as the given version.
 * NOTE: When checking the version numbers for Firefox and Safari, be sure to
 * use the engine's version, not the browser's version number.  For example,
 * Firefox 3.0 corresponds to Gecko 1.9 and Safari 3.0 to Webkit 522.11.
 * Opera and Internet Explorer versions match the product release number.<br>
 * @param version The version to check.
 * @return Whether the user agent version is higher or the same as the given version.
 */
export declare function isVersionOrHigher(version: string | number): boolean;
/**
 * Whether the IE effective document mode is higher or the same as the given
 * document mode version.
 * NOTE: Only for IE, return false for another browser.
 * @param documentMode The document mode version to check.
 * @return Whether the IE effective document mode is higher or the same as the given version.
 */
export declare function isDocumentModeOrHigher(documentMode: number): boolean;
/**
 * Deprecated alias to `isDocumentModeOrHigher`.
 * @param version The version to check.
 * @return Whether the IE effective document mode is higher or the same as the given version.
 */
export declare function isDocumentMode(a: number): boolean;
/**
 * For IE version < 7, documentMode is undefined, so attempt to use the
 * CSS1Compat property to see if we are in standards mode. If we are in
 * standards mode, treat the browser version as the document mode. Otherwise,
 * IE is emulating version 5.
 *
 * NOTE(user): Support for IE < 7 is long gone, so this is now simplified.
 * It returns document.documentMode for IE and undefined for everything else.
 */
export declare var DOCUMENT_MODE: number | undefined;

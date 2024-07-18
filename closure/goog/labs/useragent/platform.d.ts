import { AsyncValue, Version } from './highentropy/highentropyvalue.js';
declare function isAndroid(): boolean;
declare function isIpod(): boolean;
declare function isIphone(): boolean;
/**
 * Returns whether the platform is iPad.
 * Note that iPadOS 13+ spoofs macOS Safari by default in its user agent, and in
 * this scenario the platform will not be recognized as iPad. If you must have
 * iPad-specific behavior, use
 * {@link goog.labs.userAgent.extra.isSafariDesktopOnMobile}.
 * @return Whether the platform is iPad.
 */
declare function isIpad(): boolean;
/**
 * Returns whether the platform is iOS.
 * Note that iPadOS 13+ spoofs macOS Safari by default in its user agent, and in
 * this scenario the platform will not be recognized as iOS. If you must have
 * iPad-specific behavior, use
 * {@link goog.labs.userAgent.extra.isSafariDesktopOnMobile}.
 * @return Whether the platform is iOS.
 */
declare function isIos(): boolean;
declare function isMacintosh(): boolean;
/**
 * Note: ChromeOS is not considered to be Linux as it does not report itself
 * as Linux in the user agent string.
 * @return Whether the platform is Linux.
 */
declare function isLinux(): boolean;
declare function isWindows(): boolean;
declare function isChromeOS(): boolean;
declare function isChromecast(): boolean;
declare function isKaiOS(): boolean;
/**
 * The version of the platform. We only determine the version for Windows,
 * Mac, and Chrome OS. It doesn't make much sense on Linux. For Windows, we only
 * look at the NT version. Non-NT-based versions (e.g. 95, 98, etc.) are given
 * version 0.0.
 * @return The platform version or empty string if version cannot be determined.
 */
declare function getVersion(): string;
/**
 *
 * @param version The version to check.
 * @return Whether the browser version is higher or the same as the given version.
 */
declare function isVersionOrHigher(version: string | number): boolean;
/**
 * Represents a high-entropy version string.
 */
declare class PlatformVersion implements AsyncValue<Version> {
    constructor();
    getIfLoaded(): Version | undefined;
    load(): Promise<Version>;
}
declare const _default: {
    getVersion: typeof getVersion;
    isAndroid: typeof isAndroid;
    isChromeOS: typeof isChromeOS;
    isChromecast: typeof isChromecast;
    isIos: typeof isIos;
    isIpad: typeof isIpad;
    isIphone: typeof isIphone;
    isIpod: typeof isIpod;
    isKaiOS: typeof isKaiOS;
    isLinux: typeof isLinux;
    isMacintosh: typeof isMacintosh;
    isVersionOrHigher: typeof isVersionOrHigher;
    isWindows: typeof isWindows;
    version: PlatformVersion;
};
export default _default;

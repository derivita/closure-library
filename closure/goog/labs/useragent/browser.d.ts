import { AsyncValue, Version } from './highentropy/highentropyvalue.js';
import { ChromiumRebrand } from './chromium_rebrands.js';
/**
 * A browser brand represents an opaque string that is used for making
 * brand-specific version checks in userAgentData.
 */
declare enum Brand {
    ANDROID_BROWSER = "Android Browser",
    CHROMIUM = "Chromium",
    EDGE = "Microsoft Edge",
    FIREFOX = "Firefox",
    IE = "Internet Explorer",
    OPERA = "Opera",
    SAFARI = "Safari",
    SILK = "Silk"
}
export { Brand };
type AllBrandsInternal = Brand | ChromiumRebrand;
/**
 * All possible valid values to pass to various UACH Brand-accepting functions.
 */
export type AllBrands = Brand | ChromiumRebrand;
declare function isOpera(...args: any[]): boolean;
export { isOpera };
declare function isIE(...args: any[]): boolean;
export { isIE };
declare function isEdge(...args: any[]): boolean;
export { isEdge };
declare function isEdgeChromium(...args: any[]): boolean;
export { isEdgeChromium };
declare function isOperaChromium(...args: any[]): boolean;
export { isOperaChromium };
declare function isFirefox(...args: any[]): boolean;
export { isFirefox };
declare function isSafari(...args: any[]): boolean;
export { isSafari };
declare function isCoast(...args: any[]): boolean;
export { isCoast };
declare function isIosWebview(...args: any[]): boolean;
export { isIosWebview };
declare function isChrome(...args: any[]): boolean;
export { isChrome };
declare function isAndroidBrowser(...args: any[]): boolean;
export { isAndroidBrowser };
/**
 * For more information, see:
 * http://docs.aws.amazon.com/silk/latest/developerguide/user-agent.html
 * @return Whether the user's browser is Silk.
 */
declare function isSilk(): boolean;
export { isSilk };
/**
 * Returns the browser version.
 *
 * Note that for browsers with multiple brands, this function assumes a primary
 * brand and returns the version for that brand.
 *
 * Additionally, this function is not userAgentData-aware and will return
 * incorrect values when the User Agent string is frozen. The current status of
 * User Agent string freezing is available here:
 * https://www.chromestatus.com/feature/5704553745874944
 *
 * To mitigate both of these potential issues, use
 * getVersionStringForLogging() or fullVersionOf() instead.
 * @return The browser version or empty string if version cannot be determined. Note that for Internet Explorer, this returns the version of the browser, not the version of the rendering engine. (IE 8 in compatibility mode will return 8.0 rather than 7.0. To determine the rendering engine version, look at document.documentMode instead. See http://msdn.microsoft.com/en-us/library/cc196988(v=vs.85).aspx for more details.)
 */
declare function getVersion(): string;
export { getVersion };
/**
 * Returns whether the current browser's version is at least as high as the
 * given one.
 *
 * Note that for browsers with multiple brands, this function assumes a primary
 * brand and checks the version for that brand.
 *
 * Additionally, this function is not userAgentData-aware and will return
 * incorrect values when the User Agent string is frozen. The current status of
 * User Agent string freezing is available here:
 * https://www.chromestatus.com/feature/5704553745874944
 *
 * To mitigate both of these potential issues, use isAtLeast()/isAtMost() or
 * fullVersionOf() instead.
 * @param version The version to check.
 * @return Whether the browser version is higher or the same as the given version.
 */
declare function isVersionOrHigher(version: string | number): boolean;
export { isVersionOrHigher };
/**
 * Returns true if the current browser matches the given brand and is at least
 * the given major version. The major version must be a whole number (i.e.
 * decimals should not be used to represent a minor version).
 * @param brand The brand whose version should be returned.
 * @param majorVersion The major version number to compare against. This must be a whole number.
 * @return Whether the current browser both matches the given brand and is at least the given version.
 */
declare function isAtLeast(brand: AllBrandsInternal, majorVersion: number): boolean;
export { isAtLeast };
/**
 * Returns true if the current browser matches the given brand and is at most
 * the given version. The major version must be a whole number (i.e. decimals
 * should not be used to represent a minor version).
 * @param brand The brand whose version should be returned.
 * @param majorVersion The major version number to compare against. This must be a whole number.
 * @return Whether the current browser both matches the given brand and is at most the given version.
 */
declare function isAtMost(brand: AllBrandsInternal, majorVersion: number): boolean;
export { isAtMost };
/**
 * Requests all full browser versions to be cached.  When the returned promise
 * resolves, subsequent calls to `fullVersionOf(...).getIfLoaded()` will return
 * a value.
 *
 * This method should be avoided in favor of directly awaiting
 * `fullVersionOf(...).load()` where it is used.
 */
declare function loadFullVersions(): Promise<undefined>;
export { loadFullVersions };
/**
 * Resets module-local caches used by functionality in this module.
 * This is only for use by goog.labs.userAgent.testUtil.resetUserAgent (and
 * labs.userAgent tests).
 */
export declare let resetForTesting: () => void;
/**
 * Returns an object that provides access to the full version string of the
 * current browser -- or undefined, based on whether the current browser matches
 * the requested browser brand. Note that the full version string is a
 * high-entropy value, and must be asynchronously loaded before it can be
 * accessed synchronously.
 * @param browser The brand whose version should be returned.
 * @return An object that can be used to get or load the full version string as a high-entropy value, or undefined if the current browser doesn't match the given brand.
 */
declare function fullVersionOf(browser: AllBrandsInternal): AsyncValue<Version> | undefined;
export { fullVersionOf };
/**
 * Returns a version string for the current browser or undefined, based on
 * whether the current browser is the one specified.
 * This value should ONLY be used for logging/debugging purposes. Do not use it
 * to branch code paths. For comparing versions, use isAtLeast()/isAtMost() or
 * fullVersionOf() instead.
 * @param browser The brand whose version should be returned.
 * @return The version as a string.
 */
declare function getVersionStringForLogging(browser: AllBrandsInternal): string;
export { getVersionStringForLogging };

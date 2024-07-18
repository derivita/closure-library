export declare var ASSUME_FIREFOX: boolean;
export declare var ASSUME_IPHONE: boolean;
export declare var ASSUME_IPAD: boolean;
export declare var ASSUME_ANDROID: boolean;
export declare var ASSUME_CHROME: boolean;
export declare var ASSUME_SAFARI: boolean;
/**
 * Whether the code is running on the Opera web browser.
 */
export declare var OPERA: boolean;
/**
 * Whether the code is running on an IE web browser.
 */
export declare var IE: boolean;
/**
 * Whether the code is running on an Edge web browser (EdgeHTML based).
 */
export declare var EDGE: boolean;
/**
 * Whether the code is running on the Firefox web browser.
 */
export declare var FIREFOX: boolean;
/**
 * Whether the user agent is an iPhone or iPod (as in iPod touch).
 */
export declare function isIphoneOrIpod_(): boolean;
/**
 * Whether the code is running on an iPhone or iPod touch.
 *
 * iPod touch is considered an iPhone for legacy reasons.
 */
export declare var IPHONE: boolean;
/**
 * Whether the code is running on an iPad.
 */
export declare var IPAD: boolean;
/**
 * Whether the code is running on AOSP browser or WebView inside
 * a pre KitKat Android phone or tablet.
 */
export declare var ANDROID: boolean;
/**
 * Whether the code is running on any Chromium-based web browser on any platform
 * or AOSP browser or WebView in a KitKat+ Android phone or tablet.
 */
export declare var CHROME: boolean;
export declare function isSafariDesktop_(): boolean;
/**
 * Whether the code is running on the desktop Safari web browser.
 * Note: the legacy behavior here is only true for Safari not running
 * on iOS.
 */
export declare var SAFARI: boolean;

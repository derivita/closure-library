/**
 * Detect the current IE version using runtime behavior, returns 0 if a version
 * of IE is not detected.
 */
declare function detectIeVersionByBehavior(): number;
/**
 * Detect the current IE version using MSIE version presented in the user agent
 * string (This will not detected IE 11 which does not present a MSIE version),
 * or zero if IE is not detected.
 */
declare function detectIeVersionByNavigator(): number;
/**
 * Correct the actual IE version based on the Trident version in the user agent
 * string.  This adjusts for IE's "compatiblity modes".
 */
declare function getCorrectedIEVersionByNavigator(): number;
declare const _default: {
    NOT_IE: number;
    detectIeVersionByBehavior: typeof detectIeVersionByBehavior;
    detectIeVersionByNavigator: typeof detectIeVersionByNavigator;
    getCorrectedIEVersionByNavigator: typeof getCorrectedIEVersionByNavigator;
};
export default _default;

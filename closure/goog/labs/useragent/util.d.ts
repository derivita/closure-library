/**
 * Gets the native userAgent string from navigator if it exists.
 * If navigator or navigator.userAgent string is missing, returns an empty
 * string.
 */
declare function getNativeUserAgentString(): string;
/**
 * Override the user agent string with the given value.
 * This should only be used for testing within the goog.labs.userAgent
 * namespace.
 * Pass `null` to use the native browser object instead.
 * @param userAgent The userAgent override.
 */
declare function setUserAgent(userAgent?: string | null): void;
declare function getUserAgent(): string;
/**
 * Override the user agent data object with the given value.
 * This should only be used for testing within the goog.labs.userAgent
 * namespace.
 * Pass `null` to specify the absence of userAgentData. Note that this behavior
 * is different from setUserAgent.
 * @param userAgentData The userAgentData override.
 */
declare function setUserAgentData(userAgentData: NavigatorUAData | null): void;
/**
 * If the user agent data object was overridden using setUserAgentData,
 * reset it so that it uses the native browser object instead, if it exists.
 */
declare function resetUserAgentData(): void;
declare function getUserAgentData(): NavigatorUAData | null;
/**
 * Checks if any string in userAgentData.brands matches str.
 * Returns false if userAgentData is not supported.
 * @return Whether any brand string from userAgentData contains the given string.
 */
declare function matchUserAgentDataBrand(str: string): boolean;
/**
 *
 * @return Whether the user agent contains the given string.
 */
declare function matchUserAgent(str: string): boolean;
/**
 *
 * @return Whether the user agent contains the given string, ignoring case.
 */
declare function matchUserAgentIgnoreCase(str: string): boolean;
/**
 * Parses the user agent into tuples for each section.
 * @return Tuples of key, version, and the contents of the parenthetical.
 */
declare function extractVersionTuples(userAgent: string): string[][];
declare const _default: {
    ASSUME_CLIENT_HINTS_SUPPORT: boolean;
    extractVersionTuples: typeof extractVersionTuples;
    getNativeUserAgentString: typeof getNativeUserAgentString;
    getUserAgent: typeof getUserAgent;
    getUserAgentData: typeof getUserAgentData;
    matchUserAgent: typeof matchUserAgent;
    matchUserAgentDataBrand: typeof matchUserAgentDataBrand;
    matchUserAgentIgnoreCase: typeof matchUserAgentIgnoreCase;
    resetUserAgentData: typeof resetUserAgentData;
    setUserAgent: typeof setUserAgent;
    setUserAgentData: typeof setUserAgentData;
};
export default _default;

/**
 * Override the user agent with the given values.
 * @param userAgent The userAgent override.
 * @param userAgentData The userAgentData override. Pass `null` to specify the absence of userAgentData.
 */
declare function setUserAgent(userAgent: string, userAgentData: NavigatorUAData | null): void;
export { setUserAgent };
/**
 * If the user agent string or user agent data object was overridden using
 * setUserAgent, reset it so that native browser values are used instead.
 */
declare function resetUserAgent(): void;
export { resetUserAgent };

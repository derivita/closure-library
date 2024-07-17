/**
 * Rerun the initialization code to set all of the userAgent constants.
 */
export declare function reinitializeUserAgent(): void;
/**
 * Browser definitions.
 */
export declare enum UserAgents {
    GECKO = "GECKO",
    IE = "IE",
    OPERA = "OPERA",
    WEBKIT = "WEBKIT",
    EDGE = "EDGE"
}
/**
 * Return whether a given user agent has been detected.
 * @param agent Value in UserAgents.
 * @return Whether the user agent has been detected.
 */
export declare function getUserAgentDetected(agent: string): boolean;

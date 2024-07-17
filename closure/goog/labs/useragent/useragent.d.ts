/**
 * Sets whether to use client hints APIs in tests for codepaths that
 * - were originally implemented as checks against the navigator.userAgent
 * string.
 * - have an alternative implementation that uses Client Hints APIs.
 *
 * See the jsdoc on useClientHints for cases where this flag will be
 * ineffective, and the Client Hints APIs would be used regardless.
 * DO NOT call this function in production code - it will cause de-optimization.
 * @param use Whether or not to use Client Hints API codepaths in goog.labs.useragent.* modules.
 */
export declare let setUseClientHintsForTesting: (use: boolean) => void;
/**
 * Whether to use UserAgent-Client Hints API surfaces in parts of the
 * labs.userAgent package that previously only relied on the navigator.userAgent
 * string. Newer labs.userAgent API surfaces may ignore the result of this
 * function as they are considered opt-in API surfaces.
 */
export declare let useClientHints: () => boolean;

/**
 * Whether to use the native API for time zone detection (if the runtime
 * supports it). You might turn this off if a downstream system can't handle a
 * user's timezone as reported by the browser.
 */
export declare var USE_NATIVE_TIMEZONE_DETECTION: boolean;
/**
 * Whether to include the fingerprint algorithm so it can be used as a fallback.
 * Without this, the code may be stripped for modern browsers that can be
 * assumed to support the native API.
 */
export declare var INCLUDE_FINGERPRINT_DETECTION: boolean;
/**
 * Allows disabling the use of native APIs so that the fingerprinting algorithm
 * can be tested.
 */
export declare function useNativeTimezoneDetectionForTesting(useNative: boolean): void;
/**
 * Calculates time zone fingerprint by poking time zone offsets for 13
 * preselected time points.
 * See {@link TZ_POKE_POINTS_}
 * @param date Date for calculating the fingerprint.
 * @return Fingerprint of user's time zone setting.
 */
export declare function getFingerprint(date: Date | null): number;
/**
 * Detects browser's time zone setting. If user's country is known, a better
 * time zone choice could be guessed. Note that in many browsers this is
 * available natively as `new Intl.DateTimeFormat().resolvedOptions().timeZone`.
 * @param opt_country Two-letter ISO 3166 country code.
 * @param opt_date Date for calculating the fingerprint. Defaults to the current date.
 * @return Time zone ID of best guess.
 */
export declare function detectTimeZone(opt_country?: string, opt_date?: Date | null): string;
/**
 * Returns an array of time zones that are consistent with user's platform
 * setting. If user's country is given, only the time zone for that country is
 * returned.
 * @param opt_country 2 letter ISO 3166 country code. Helps in making a better guess for user's time zone.
 * @param opt_date Date for retrieving timezone list. Defaults to the current date.
 * @return Array of time zone IDs.
 */
export declare function getTimeZoneList(opt_country?: string, opt_date?: Date | null): string[];

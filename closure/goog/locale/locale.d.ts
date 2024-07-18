/**
 * Set current locale to the specified one.
 * @param localeName Locale name string. We are following the usage in CLDR, but can make a few compromise for existing name compatibility.
 */
export declare function setLocale(localeName: string): void;
/**
 * Retrieve the current locale
 * @return Current locale name string.
 */
export declare function getLocale(): string;
/**
 * Enum of resources that can be registered.
 */
export declare enum Resource {
    DATE_TIME_CONSTANTS = "DateTimeConstants",
    NUMBER_FORMAT_CONSTANTS = "NumberFormatConstants",
    TIME_ZONE_CONSTANTS = "TimeZoneConstants",
    LOCAL_NAME_CONSTANTS = "LocaleNameConstants",
    TIME_ZONE_SELECTED_IDS = "TimeZoneSelectedIds",
    TIME_ZONE_SELECTED_SHORT_NAMES = "TimeZoneSelectedShortNames",
    TIME_ZONE_SELECTED_LONG_NAMES = "TimeZoneSelectedLongNames",
    TIME_ZONE_ALL_LONG_NAMES = "TimeZoneAllLongNames"
}
/**
 * Returns the language-subtag of the given language code.
 * @param languageCode Language code to extract language subtag from.
 * @return Language subtag (in lowercase).
 */
export declare function getLanguageSubTag(languageCode: string): string;
/**
 * Returns the region-sub-tag of the given language code.
 * @param languageCode Language code to extract region subtag from.
 * @return Region sub-tag (in uppercase).
 */
export declare function getRegionSubTag(languageCode: string): string;
/**
 * Returns the script subtag of the locale with the first alphabet in uppercase
 * and the rest 3 characters in lower case.
 * @param languageCode Language Code to extract script subtag from.
 * @return Script subtag.
 */
export declare function getScriptSubTag(languageCode: string): string;
/**
 * Returns the variant-sub-tag of the given language code.
 * @param languageCode Language code to extract variant subtag from.
 * @return Variant sub-tag.
 */
export declare function getVariantSubTag(languageCode: string): string;
/**
 * Returns the country name of the provided language code in its native
 * language.
 *
 * This method depends on nativeNameConstants available from
 * nativenameconstants.js. User of this method has to add dependency to this.
 * @param countryCode Code to lookup the country name for.
 * @return Country name for the provided language code.
 */
export declare function getNativeCountryName(countryCode: string): string;
/**
 * Returns the localized country name for the provided language code in the
 * current or provided locale symbols set.
 *
 * This method depends on `LocaleNameConstants__<locale>` available
 * from http://go/js_locale_data. User of this method has to add dependency to
 * this.
 * @param languageCode Language code to lookup the country name for.
 * @param opt_localeSymbols If omitted the current locale symbol set is used.
 * @return Localized country name.
 */
export declare function getLocalizedCountryName(languageCode: string, opt_localeSymbols?: object | null): string;
/**
 * Returns the localized country name for the provided language code in the
 * current or provided locale symbols set.
 *
 * This method depends on `LocaleNameConstants__<locale>` available
 * from http://go/js_locale_data. User of this method has to add dependency to
 * this.
 * @param regionCode Two character country code or three digit region code to look up the country name for.
 * @param opt_localeSymbols If omitted the current locale symbol set is used.
 * @return Localized region name.
 */
export declare function getLocalizedRegionNameFromRegionCode(regionCode: string, opt_localeSymbols?: object | null): string;
/**
 * Returns the language name of the provided language code in its native
 * language.
 *
 * This method depends on nativeNameConstants available from
 * nativenameconstants.js. User of this method has to add dependency to this.
 * @param languageCode Language code to lookup the language name for.
 * @return Language name for the provided language code.
 */
export declare function getNativeLanguageName(languageCode: string): string;
/**
 * Returns the localized language name for the provided language code in
 * the current or provided locale symbols set.
 *
 * This method depends on `LocaleNameConstants__<locale>` available
 * from http://go/js_locale_data. User of this method has to add dependency to
 * this.
 * @param languageCode Language code to lookup the language name for.
 * @param opt_localeSymbols locale symbol set if given.
 * @return Localized language name of the provided language code.
 */
export declare function getLocalizedLanguageName(languageCode: string, opt_localeSymbols?: object | null): string;
/**
 * Register a resource object for certain locale.
 * @param dataObj The resource object being registered.
 * @param resourceName String that represents the type of resource.
 * @param localeName Locale ID.
 */
export declare function registerResource(dataObj: object | null, resourceName: Resource | string | null, localeName: string): void;
/**
 * Returns true if the required resource has already been registered.
 * @param resourceName String that represents the type of resource.
 * @param localeName Locale ID.
 * @return Whether the required resource has already been registered.
 */
export declare function isResourceRegistered(resourceName: Resource | string | null, localeName: string): boolean;
/**
 * Registers the timezone constants object for a given locale name.
 * @param dataObj The resource object.
 * @param localeName Locale ID.
 */
export declare function registerTimeZoneConstants(dataObj: object | null, localeName: string): void;
/**
 * Registers the LocaleNameConstants constants object for a given locale name.
 * @param dataObj The resource object.
 * @param localeName Locale ID.
 */
export declare function registerLocaleNameConstants(dataObj: object | null, localeName: string): void;
/**
 * Registers the TimeZoneSelectedIds constants object for a given locale name.
 * @param dataObj The resource object.
 * @param localeName Locale ID.
 */
declare function registerTimeZoneSelectedIds_(dataObj: object | null, localeName: string): void;
export { registerTimeZoneSelectedIds_ as registerTimeZoneSelectedIds };
/**
 * Registers the TimeZoneSelectedShortNames constants object for a given
 * locale name.
 * @param dataObj The resource object.
 * @param localeName Locale ID.
 */
declare function registerTimeZoneSelectedShortNames_(dataObj: object | null, localeName: string): void;
export { registerTimeZoneSelectedShortNames_ as registerTimeZoneSelectedShortNames };
/**
 * Registers the TimeZoneSelectedLongNames constants object for a given locale
 * name.
 * @param dataObj The resource object.
 * @param localeName Locale ID.
 */
declare function registerTimeZoneSelectedLongNames_(dataObj: object | null, localeName: string): void;
export { registerTimeZoneSelectedLongNames_ as registerTimeZoneSelectedLongNames };
/**
 * Registers the TimeZoneAllLongNames constants object for a given locale name.
 * @param dataObj The resource object.
 * @param localeName Locale ID.
 */
declare function registerTimeZoneAllLongNames_(dataObj: object | null, localeName: string): void;
export { registerTimeZoneAllLongNames_ as registerTimeZoneAllLongNames };
/**
 * Retrieve specified resource for certain locale.
 * @param resourceName String that represents the type of resource.
 * @param opt_locale Locale ID, if not given, current locale will be assumed.
 * @return The resource object that hold all the resource data, or undefined if not available.
 */
export declare function getResource(resourceName: string, opt_locale?: string): object | undefined | null;
/**
 * Retrieve specified resource for certain locale with fallback. For example,
 * request of 'zh_CN' will be resolved in following order: zh_CN, zh, en.
 * If none of the above succeeds, of if the resource as indicated by
 * resourceName does not exist at all, undefined will be returned.
 * @param resourceName String that represents the type of resource.
 * @param opt_locale locale ID, if not given, current locale will be assumed.
 * @return The resource object for desired locale.
 */
export declare function getResourceWithFallback(resourceName: string, opt_locale?: string): object | undefined | null;

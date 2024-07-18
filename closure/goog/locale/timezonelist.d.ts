/**
 * Returns the displayable list of short timezone names paired with its id for
 * the current locale, selected based on the region or language provided.
 *
 * This method depends on `googLocale.TimeZone*__<locale>` available
 * from http://go/js_locale_data. Users of this method must add a dependency on
 * this.
 * @param opt_regionOrLang If region tag is provided, timezone ids specific this region are considered. If language is provided, all regions for which this language is defacto official is considered. If this parameter is not speficied, current locale is used to extract this information.
 * @return Localized and relevant list of timezone names and ids.
 */
export declare function getTimeZoneSelectedShortNames(opt_regionOrLang?: string): (object | null)[];
/**
 * Returns the displayable list of long timezone names paired with its id for
 * the current locale, selected based on the region or language provided.
 *
 * This method depends on `googLocale.TimeZone*__<locale>` available
 * from http://go/js_locale_data. Users of this method must add a dependency on
 * this.
 * @param opt_regionOrLang If region tag is provided, timezone ids specific this region are considered. If language is provided, all regions for which this language is defacto official is considered. If this parameter is not speficied, current locale is used to extract this information.
 * @return Localized and relevant list of timezone names and ids.
 */
export declare function getTimeZoneSelectedLongNames(opt_regionOrLang?: string): (object | null)[];
/**
 * Returns the displayable list of long timezone names paired with its id for
 * the current locale.
 *
 * This method depends on `googLocale.TimeZoneAllLongNames__<locale>` available
 * from http://go/js_locale_data. Users of this method must add a dependency on
 * this.
 * @return localized and relevant list of timezone names and ids.
 */
export declare function getTimeZoneAllLongNames(): (object | null)[] | null;

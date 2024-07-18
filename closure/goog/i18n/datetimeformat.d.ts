import * as googDate from '../date/date.js';
/**
 * IMPORTANT: Datetime formatting results different between JavaScript and
 * native ECMAScript implementations.
 *
 * Native mode accepts a set of options for styles and also for specifying
 * a small set of choices for each individual field of a formatted output. These
 * effectively specify skeletons which direct the formatting according to
 * formats built into the ECMAScript DateTime implementation of
 * Intl.DateTimeFormat.
 *
 * The ECMAScript DateTimeFormat constructor and options are defined here:
 * {@link
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat}
 *
 * Datetime formatting functions in JavaScript mode are provided with
 * options to use standard styles, predefined patterns such as YEAR_FULL,
 * and other values in DateTimeFormat.Format.
 *
 * Native mode date/time formatting is supported only for these standard
 * patterns because they can be directly mapped to native mode options.
 *
 * Native mode does not support custom patterns, which are discouraged.
 * Using such custom pattern strings will call the JavaScript (polyfill)
 * version of DateTimeFormat rather than native ECMAScript.
 *
 * Custom patterns can be used using the symbols below for date/time.
 * Other text can be included. However, standard patterns are preferred
 * because native EMCAScript code is more efficient in download size and time.
 *
 * The following symbols may be used in pattern specification, as defined
 * in JDK, ICU and CLDR, with minor modification for typical usage in JS.
 *
 * Pattern specification:
 * {@link
 * https://unicode-org.github.io/icu/userguide/format_parse/datetime/#date-field-symbol-table}
 * <pre>
 * Symbol   Meaning                    Presentation       Example
 * ------   -------                    ------------       -------
 * G#       era designator             (Text)             AD
 * y#       year                       (Number)           1996
 * Y        year (week of year)        (Number)           1997
 * u*       extended year              (Number)           4601
 * Q#       quarter                    (Text)             Q3 & 3rd quarter
 * M        month in year              (Text & Number)    July & 07
 * L        month in year (standalone) (Text & Number)    July & 07
 * d        day in month               (Number)           10
 * h        hour in am/pm (1~12)       (Number)           12
 * H        hour in day (0~23)         (Number)           0
 * m        minute in hour             (Number)           30
 * s        second in minute           (Number)           55
 * S        fractional second          (Number)           978
 * E#       day of week                (Text)             Tue & Tuesday
 * e*       day of week (local 1~7)    (Number)           2
 * c#       day of week (standalone)   (Text & Number)    2 & Tues & Tuesday & T
 * D*       day in year                (Number)           189
 * F*       day of week in month       (Number)           2 (2nd Wed in July)
 * w        week in year               (Number)           27
 * W*       week in month              (Number)           2
 * a        am/pm marker               (Text)             PM
 * b        am/pm/noon/midnight        (Text)             Noon
 * B        flexible day periods        (Text)             de laprs-midi'
 * k        hour in day (1~24)         (Number)           24
 * K        hour in am/pm (0~11)       (Number)           0
 * z        time zone                  (Text)             Pacific Standard Time
 * Z#       time zone (RFC 822)        (Number)           -0800
 * v#       time zone (generic)        (Text)             America/Los_Angeles
 * V#       time zone                  (Text)             Los Angeles Time
 * g*       Julian day                 (Number)           2451334
 * A*       milliseconds in day        (Number)           69540000
 * '        escape for text            (Delimiter)        'Date='
 * ''       single quote               (Literal)          'o''clock'
 *
 * Item marked with '*' are not supported yet.
 * Item marked with '#' works different than java
 *
 * The count of pattern letters determine the format.
 * (Text): 4 or more, use full form, <4, use short or abbreviated form if it
 * exists. (e.g., "EEEE" produces "Monday", "EEE" produces "Mon")
 *
 * (Number): the minimum number of digits. Shorter numbers are zero-padded to
 * this amount (e.g. if "m" produces "6", "mm" produces "06"). Year is handled
 * specially; that is, if the count of 'y' is 2, the Year will be truncated to
 * 2 digits. (e.g., if "yyyy" produces "1997", "yy" produces "97".) Unlike other
 * fields, fractional seconds are padded on the right with zero.
 *
 * :(Text & Number) 3 or over, use text, otherwise use number. (e.g., "M"
 * produces "1", "MM" produces "01", "MMM" produces "Jan", and "MMMM" produces
 * "January".)
 *
 * Any characters in the pattern that are not in the ranges of ['a'..'z'] and
 * ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
 * '.', ' ', '#' and '@' will appear in the resulting time text even they are
 * not embraced within single quotes.
 * </pre>
 */
export declare function DateTimeFormat(pattern: any, opt_dateTimeSymbols: any): void;
export declare namespace DateTimeFormat {
    /**
     * Enum to identify predefined Date/Time format pattern. The format pattern to
     * output mapping can be found at go/closure-localization#fconst.
     */
    enum Format {
        FULL_DATE = 0,
        LONG_DATE = 1,
        MEDIUM_DATE = 2,
        SHORT_DATE = 3,
        FULL_TIME = 4,
        LONG_TIME = 5,
        MEDIUM_TIME = 6,
        SHORT_TIME = 7,
        FULL_DATETIME = 8,
        LONG_DATETIME = 9,
        MEDIUM_DATETIME = 10,
        SHORT_DATETIME = 11,
        WEEKDAY_MONTH_DAY_FULL = 12,
        MONTH_DAY_MEDIUM = 13
    }
    /**
     * regular expression pattern for parsing pattern string
     */
    const TOKENS_: RegExp[];
    /**
     * These are token types, corresponding to above token definitions.
     */
    enum PartTypes_ {
        QUOTED_STRING = 0,
        FIELD = 1,
        LITERAL = 2
    }
    /**
     *
     */
    var getHours_: number;
    /**
     *
     */
    var getMinutes_: number;
    /**
     * Parameters to Intl.DateTimeFormat constructor
     */
    type IntlOptions = {
        'calendar': string | undefined;
        'dateStyle': string | undefined;
        'timeStyle': string | undefined;
        'era': string | undefined;
        'formatMatcher': string | undefined;
        'localeMatcher': string | undefined;
        'year': string | undefined;
        'month': string | undefined;
        'day': string | undefined;
        'weekday': string | undefined;
        'hour': string | undefined;
        'hour12': boolean | undefined;
        'minute': string | undefined;
        'second': string | undefined;
        'timeZone': string | undefined;
        'numberingSystem': string | undefined;
        'timeZoneName': string | undefined;
    };
    /**
     * If the usage of Ascii digits should be enforced regardless of locale.
     */
    var enforceAsciiDigits_: boolean;
    /**
     * Records if ASCII digits was set after formatter construction.
     */
    var resetEnforceAsciiDigits_: boolean;
    /**
     * If RLM unicode characters should be removed from date/time patterns (useful
     * when enforcing ASCII digits for Arabic). See `#setEnforceAsciiDigits`.
     */
    var removeRlmInPatterns_: boolean;
    /**
     * Sets if the usage of Ascii digits in formatting should be enforced in
     * formatted date/time even for locales where native digits are indicated.
     * Also sets whether to remove RLM unicode control characters when using
     * standard enumerated patterns (they exist e.g. in standard d/M/y for Arabic).
     * Production code should call this once before any `DateTimeFormat`
     * object is instantiated.
     * Caveats:
     * * Enforcing ASCII digits affects all future formatting by new or existing
     * `DateTimeFormat` objects.
     * * Removal of RLM characters only applies to `DateTimeFormat` objects
     * instantiated after this call.
     * @param enforceAsciiDigits Whether Ascii digits should be enforced.
     */
    var setEnforceAsciiDigits: (enforceAsciiDigits: boolean) => void;
    var isEnforceAsciiDigits: boolean;
    /**
     * Localizes a string potentially containing numbers, replacing ASCII digits
     * with native digits if specified so by the locale. Leaves other characters.
     * @param input the string to be localized, using ASCII digits.
     * @param opt_dateTimeSymbols Optional symbols to use rather than the global symbols.
     * @return localized string, potentially using native digits.
     */
    var localizeNumbers: string;
    /**
     * Validates is the googDate.DateLike object to format has a time.
     * DateLike means Date|googDate.Date, and googDate.DateTime inherits
     * from googDate.Date. But googDate.Date does not have time related
     * members (getHours, getMinutes, getSeconds).
     * Formatting can be done, if there are no time placeholders in the pattern.
     * @param date the object to validate.
     */
    var validateDateHasTime_: (date: googDate.DateLike) => void;
}

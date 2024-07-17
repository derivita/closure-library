/**
 * Enum for all Grapheme Cluster Break properties.
 * These enums directly corresponds to Grapheme_Cluster_Break property values
 * mentioned in http://unicode.org/reports/tr29 table 2. VIRAMA and
 * INDIC_LETTER are for the Virama  Base tailoring mentioned in the notes.
 */
export declare enum property {
    OTHER = 0,
    CONTROL = 1,
    EXTEND = 2,
    PREPEND = 3,
    SPACING_MARK = 4,
    INDIC_LETTER = 5,
    VIRAMA = 6,
    L = 7,
    V = 8,
    T = 9,
    LV = 10,
    LVT = 11,
    CR = 12,
    LF = 13,
    REGIONAL_INDICATOR = 14,
    ZWJ = 15,
    E_BASE = 16,
    GLUE_AFTER_ZWJ = 17,
    E_MODIFIER = 18,
    E_BASE_GAZ = 19
}
/**
 * Indicates if there is a grapheme cluster boundary between a and b.
 *
 * Legacy function. Does not cover cases where a sequence of code points is
 * required in order to decide if there is a grapheme cluster boundary, such as
 * emoji modifier sequences and emoji flag sequences. To cover all cases please
 * use `hasGraphemeBreakStrings`.
 *
 * There are two kinds of grapheme clusters: 1) Legacy 2) Extended. This method
 * is to check for both using a boolean flag to switch between them. If no flag
 * is provided rules for the extended clusters will be used by default.
 * @param a The code point value of the first character.
 * @param b The code point value of the second character.
 * @param opt_extended If true, indicates extended grapheme cluster; If false, indicates legacy cluster. Default value is true.
 * @return True if there is a grapheme cluster boundary between a and b; False otherwise.
 */
export declare function hasGraphemeBreak(a: number, b: number, opt_extended?: boolean): boolean;
/**
 * Indicates if there is a grapheme cluster boundary between a and b.
 *
 * There are two kinds of grapheme clusters: 1) Legacy 2) Extended. This method
 * is to check for both using a boolean flag to switch between them. If no flag
 * is provided rules for the extended clusters will be used by default.
 * @param a String with the first sequence of characters.
 * @param b String with the second sequence of characters.
 * @param opt_extended If true, indicates extended grapheme cluster; If false, indicates legacy cluster. Default value is true.
 * @return True if there is a grapheme cluster boundary between a and b; False otherwise.
 */
export declare function hasGraphemeBreakStrings(a: string, b: string, opt_extended?: boolean): boolean;

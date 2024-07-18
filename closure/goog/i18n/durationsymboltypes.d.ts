/**
 * A collection of formatting patterns describing how to format each time unit
 * in different styles for a locale. There is one of these per locale in
 * durationsysmbols.js or durationsu,bolsext.js.
 */
export type DurationSymbols = {
    'YEAR': DurationSymbolsFormatStyles;
    'MONTH': DurationSymbolsFormatStyles;
    'WEEK': DurationSymbolsFormatStyles;
    'DAY': DurationSymbolsFormatStyles;
    'HOUR': DurationSymbolsFormatStyles;
    'MINUTE': DurationSymbolsFormatStyles;
    'SECOND': DurationSymbolsFormatStyles;
};
/**
 * A collection of duration formatting display styles.
 */
export type DurationSymbolsFormatStyles = {
    'LONG': string | undefined;
    'SHORT': string;
    'NARROW': string | undefined;
};

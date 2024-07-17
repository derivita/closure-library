import { DateLike, Interval } from '../date/date.js';
import { DateRange } from '../date/daterange.js';
import { DateTimeSymbolsType } from './datetimesymbols.js';
import { TimeZone } from './timezone.js';
import * as dateIntervalSymbols from './dateintervalsymbols.js';
/**
 * Constructs a DateIntervalFormat object based on the current locale.
 */
declare class DateIntervalFormat {
    /**
     * Constructs a DateIntervalFormat object based on the current locale.
     * @param pattern Pattern specification or pattern object.
     * @param opt_dateIntervalSymbols Optional DateIntervalSymbols to use for this instance rather than the global symbols.
     * @param opt_dateTimeSymbols Optional DateTimeSymbols to use for this instance rather than the global symbols.
     */
    constructor(pattern: number | dateIntervalSymbols.DateIntervalPatternMap, opt_dateIntervalSymbols?: dateIntervalSymbols.DateIntervalSymbols, opt_dateTimeSymbols?: DateTimeSymbolsType);
    private noStructuralTyping_closure_goog_i18n_dateintervalformat_DateIntervalFormat;
    /**
     * Formats the given date or date interval objects according to the present
     * pattern and current locale.
     *
     * Parameter combinations:
     * * StartDate: {@link goog.date.DateLike}, EndDate: {@link goog.date.DateLike}
     * * StartDate: {@link goog.date.DateLike}, Interval: {@link goog.date.Interval}
     * @param startDate Start date of the date range.
     * @param endDate End date of the date range or an interval object.
     * @param opt_timeZone Timezone to be used in the target representation.
     * @return Formatted date interval.
     */
    format(startDate: DateLike, endDate: DateLike | Interval, opt_timeZone?: TimeZone): string;
    /**
     * Formats the given date range object according to the present pattern
     * and current locale.
     * @param opt_timeZone Timezone to be used in the target representation.
     * @return Formatted date interval.
     */
    formatRange(dateRange: DateRange, opt_timeZone?: TimeZone): string;
}
export { DateIntervalFormat };

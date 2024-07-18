/**
 * Fields for each day period
 * formatNames 1-3 styles: wide (default), narrow, & abbreviated
 * standaloneNames 1-3 styles:  wide (default), narrow, & abbreviated
 */
export type DayPeriodInfo = {
    'at': string | undefined;
    'from': string | undefined;
    'before': string | undefined;
    'periodName': string;
    'formatNames': string[] | undefined;
    'standaloneNames': string[] | undefined;
};
/**
 * Information on periods of the day for a locale
 */
export type DayPeriods = {
    'midnight': DayPeriodInfo | undefined | null;
    'noon': DayPeriodInfo | undefined | null;
    'morning1': DayPeriodInfo | undefined | null;
    'morning2': DayPeriodInfo | undefined | null;
    'afternoon1': DayPeriodInfo | undefined | null;
    'afternoon2': DayPeriodInfo | undefined | null;
    'evening1': DayPeriodInfo | undefined | null;
    'evening2': DayPeriodInfo | undefined | null;
    'night1': DayPeriodInfo | undefined | null;
    'night2': DayPeriodInfo | undefined | null;
};
/**
 * Data for dayperiods by locale.
 */
export declare let DayPeriods_zh_Hant: DayPeriods;
/**
 * Returns the DayPeriod for the given locale. This may be undefined or null.
 */
export declare function getDayPeriods(): DayPeriods | null;
/**
 * Sets the default ListFormatSymbols
 */
export declare function setDayPeriods(newDayPeriods: DayPeriods | null): void;

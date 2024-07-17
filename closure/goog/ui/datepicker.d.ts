import { Date } from '../date/date.js';
import { DateRange } from '../date/daterange.js';
import * as dom from '../dom/dom.js';
import { Event } from '../events/event.js';
import { Component } from './component.js';
import type { DatePickerRenderer } from './datepickerrenderer.js';
/**
 * DatePicker widget. Allows a single date to be selected from a calendar like
 * view.
 */
export declare class DatePicker extends Component {
    /**
     * DatePicker widget. Allows a single date to be selected from a calendar like
     * view.
     * @param opt_date Date to initialize the date picker with, defaults to the current date.
     * @param opt_dateTimeSymbols Date and time symbols to use. Defaults to DateTimeSymbols if not set.
     * @param opt_domHelper Optional DOM helper.
     * @param opt_renderer Optional Date picker renderer.
     */
    constructor(opt_date?: Date | Date | null, opt_dateTimeSymbols?: object | null, opt_domHelper?: dom.DomHelper | null, opt_renderer?: DatePickerRenderer | null);
    private noStructuralTyping_closure_goog_ui_datepicker_DatePicker;
    /**
     * TODO(tbreisacher): Remove external references to this field,
     * and make it private.
     */
    tableBody_: Element | null;
    isCreated: () => boolean;
    getFirstWeekday(): number;
    /**
     * Returns the class name associated with specified weekday.
     * @param wday The week day number to get the class name for.
     * @return The class name associated with specified weekday.
     */
    getWeekdayClass(wday: number): string;
    getShowFixedNumWeeks(): boolean;
    getShowOtherMonths(): boolean;
    getExtraWeekAtEnd(): boolean;
    getShowWeekNum(): boolean;
    getShowWeekdayNames(): boolean;
    getAllowNone(): boolean;
    getShowToday(): boolean;
    /**
     * Returns base CSS class. This getter is used to get base CSS class part.
     * All CSS class names in component are created as:
     * goog.getCssName(this.getBaseCssClass(), 'CLASS_NAME')
     * @return Base CSS class.
     */
    getBaseCssClass(): string;
    /**
     * Sets the first day of week
     * @param wday Week day, 0 = Monday, 6 = Sunday.
     */
    setFirstWeekday(wday: number): void;
    /**
     * Sets class name associated with specified weekday.
     * @param wday Week day, 0 = Monday, 6 = Sunday.
     * @param className Class name.
     */
    setWeekdayClass(wday: number, className: string): void;
    /**
     * Sets whether a fixed number of weeks should be showed. If not only weeks
     * for the current month will be showed.
     * @param b Whether a fixed number of weeks should be showed.
     */
    setShowFixedNumWeeks(b: boolean): void;
    /**
     * Sets whether a days from the previous and/or next month should be shown.
     * @param b Whether a days from the previous and/or next month should be shown.
     */
    setShowOtherMonths(b: boolean): void;
    /**
     * Sets the range of dates which may be selected by the user.
     * @param dateRange The range of selectable dates.
     */
    setUserSelectableDateRange(dateRange: DateRange): void;
    /**
     * Gets the range of dates which may be selected by the user.
     * @return The range of selectable dates.
     */
    getUserSelectableDateRange(): DateRange;
    /**
     * Sets whether the picker should use a simple navigation menu that only
     * contains controls for navigating to the next and previous month. The default
     * navigation menu contains controls for navigating to the next/previous month,
     * next/previous year, and menus for jumping to specific months and years.
     * @param b Whether to use a simple navigation menu.
     */
    setUseSimpleNavigationMenu(b: boolean): void;
    /**
     * Sets whether a the extra week(s) added always should be at the end. Only
     * applicable if a fixed number of weeks are shown.
     * @param b Whether a the extra week(s) added always should be at the end.
     */
    setExtraWeekAtEnd(b: boolean): void;
    /**
     * Sets whether week numbers should be shown.
     * @param b Whether week numbers should be shown.
     */
    setShowWeekNum(b: boolean): void;
    /**
     * Sets whether weekday names should be shown.
     * @param b Whether weekday names should be shown.
     */
    setShowWeekdayNames(b: boolean): void;
    /**
     * Sets whether the picker uses narrow weekday names ('M', 'T', 'W', ...).
     *
     * The default behavior is to use short names ('Mon', 'Tue', 'Wed', ...).
     * @param b Whether to use narrow weekday names.
     */
    setUseNarrowWeekdayNames(b: boolean): void;
    /**
     * Sets whether none is a valid selection.
     * @param b Whether none is a valid selection.
     */
    setAllowNone(b: boolean): void;
    /**
     * Sets whether the today button should be shown.
     * @param b Whether the today button should be shown.
     */
    setShowToday(b: boolean): void;
    /**
     * Sets the decorator function. The function should have the interface of
     * {string} f({Date});
     * and return a String representing a CSS class to decorate the cell
     * corresponding to the date specified.
     * @param f The decorator function.
     */
    setDecorator(f: Function | null): void;
    /**
     * Sets whether the date will be printed in long format. In long format, dates
     * such as '1' will be printed as '01'.
     * @param b Whethere dates should be printed in long format.
     */
    setLongDateFormat(b: boolean): void;
    /**
     * Changes the active month to the previous one.
     */
    previousMonth(): void;
    /**
     * Changes the active month to the next one.
     */
    nextMonth(): void;
    /**
     * Changes the active year to the previous one.
     */
    previousYear(): void;
    /**
     * Changes the active year to the next one.
     */
    nextYear(): void;
    /**
     * Selects the current date.
     */
    selectToday(): void;
    /**
     * Clears the selection.
     */
    selectNone(): void;
    getActiveMonth(): Date;
    getDate(): Date | null;
    /**
     *
     * @param row The row in the grid.
     * @param col The column in the grid.
     * @return The date in the grid or null if there is none.
     */
    getDateAt(row: number, col: number): Date | null;
    /**
     * Returns a date element given a row and column. In elTable_, the elements that
     * represent dates are 1 indexed because of other elements such as headers.
     * This corrects for the offset and makes the API 0 indexed.
     * @param row The row in the element table.
     * @param col The column in the element table.
     * @return The element in the grid or null if there is none.
     */
    protected getDateElementAt(row: number, col: number): Element | null;
    /**
     * Sets the selected date. Will always fire the SELECT event.
     * @param date Date to select or null to select nothing.
     */
    setDate(date: Date | Date | null): void;
    decorateInternal(el: any): void;
    createDom(): void;
    enterDocument(): void;
    exitDocument(): void;
    create: (element: Element | null) => void;
    disposeInternal(): void;
}
export declare namespace DatePicker {
    /**
     * Constants for event names
     */
    enum Events {
        CHANGE = "change",
        CHANGE_ACTIVE_MONTH = "changeActiveMonth",
        GRID_SIZE_INCREASE = "gridSizeIncrease",
        SELECT = "select"
    }
}
/**
 * Object representing a date picker event.
 */
export declare class DatePickerEvent extends Event {
    /**
     * Object representing a date picker event.
     * @param type Event type.
     * @param target Date picker initiating event.
     * @param date Selected date.
     */
    constructor(type: string, target: DatePicker | null, date: Date | null);
    private noStructuralTyping_closure_goog_ui_datepicker_DatePickerEvent;
    /**
     * The selected date
     */
    date: Date | null;
}

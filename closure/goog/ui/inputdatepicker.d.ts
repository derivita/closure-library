import { DateTime, Date, DateLike } from '../date/date.js';
import * as dom from '../dom/dom.js';
import { DateTimeParse } from '../i18n/datetimeparse.js';
import { Component } from './component.js';
import { DatePicker } from './datepicker.js';
import { PopupDatePicker } from './popupdatepicker.js';
/**
 * Input date picker widget.
 */
export declare class InputDatePicker extends Component {
    /**
     * Input date picker widget.
     * @param dateTimeFormatter A formatter instance used to format the date picker's date for display in the input element.
     * @param dateTimeParser A parser instance used to parse the input element's string as a date to set the picker.
     * @param opt_datePicker Optional DatePicker.  This enables the use of a custom date-picker instance.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(dateTimeFormatter: InputDatePicker.DateFormatter, dateTimeParser: InputDatePicker.DateParser, opt_datePicker?: DatePicker | null, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_inputdatepicker_InputDatePicker;
    /**
     * Returns the PopupDatePicker's internal DatePicker instance.  This can be
     * used to customize the date picker's styling.
     * @return The internal DatePicker instance.
     */
    getDatePicker(): DatePicker | null;
    /**
     * Returns the PopupDatePicker instance.
     * @return Popup instance.
     */
    getPopupDatePicker(): PopupDatePicker | null;
    /**
     * Returns the selected date, if any.  Compares the dates from the date picker
     * and the input field, causing them to be synced if different.
     * @return The selected date, if any.
     */
    getDate(): DateTime | null;
    /**
     * Sets the selected date.  See PopupDatePicker.setDate().
     * @param date The date to set.
     */
    setDate(date: Date | null): void;
    /**
     * Sets the value of the input element.  This can be overridden to support
     * alternative types of input setting.
     * @param value The value to set.
     */
    setInputValue(value: string): void;
    /**
     * Returns the value of the input element.  This can be overridden to support
     * alternative types of input getting.
     * @return The input value.
     */
    getInputValue(): string;
    /**
     * Creates an input element for use with the popup date picker.
     */
    createDom(): void;
    /**
     * Sets the element that the PopupDatePicker should be parented to. If not set,
     * defaults to the body element of the page.
     * @param el The element that the PopupDatePicker should be parented to.
     */
    setPopupParentElement(el: Element | null): void;
    enterDocument(): void;
    exitDocument(): void;
    decorateInternal(element: any): void;
    disposeInternal(): void;
    /**
     * See PopupDatePicker.showPopup().
     * @param element Reference element for displaying the popup -- popup will appear at the bottom-left corner of this element.
     */
    showForElement(element: Element | null): void;
    /**
     * See PopupDatePicker.hidePopup().
     */
    hidePopup(): void;
}
export declare namespace InputDatePicker {
    /**
     * A DateFormatter implements functionality to convert a Date into
     * human-readable text. text into a Date. This interface is expected to accept
     * an instance of goog.i18n.DateTimeFormat directly, and as such the method
     * signatures directly match those found on that class.
     */
    interface DateFormatter {
        /**
         *
         * @param date The Date object that is being formatted.
         * @return The formatted date value.
         */
        format(date: DateLike): string;
    }
    /**
     * A DateParser implements functionality to parse text into a Date. This
     * interface is expected to accept an instance of DateTimeParse
     * directly, and as such the method signatures directly match those found on
     * that class.
     */
    interface DateParser {
        /**
         *
         * @param text The string being parsed.
         * @param date The Date object to hold the parsed date.
         * @param options The options object.
         * @return How many characters parser advanced.
         */
        parse(text: string, date: DateLike, options?: DateTimeParse.ParseOptions): number;
    }
}

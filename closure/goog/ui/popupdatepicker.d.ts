import { Component } from './component.js';
import { DatePicker } from './datepicker.js';
import { Popup } from './popup.js';
import type { Date } from '../date/date.js';
import type { DomHelper } from '../dom/dom.js';
/**
 * Popup date picker widget. Fires PopupBase.EventType.SHOW or HIDE
 * events when its visibility changes.
 */
export declare class PopupDatePicker extends Component {
    /**
     * Popup date picker widget. Fires PopupBase.EventType.SHOW or HIDE
     * events when its visibility changes.
     * @param opt_datePicker Optional DatePicker.  This enables the use of a custom date-picker instance.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(opt_datePicker?: DatePicker | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_popupdatepicker_PopupDatePicker;
    createDom(): void;
    isVisible(): boolean;
    enterDocument(): void;
    disposeInternal(): void;
    /**
     * DatePicker cannot be used to decorate pre-existing html, since they're
     * not based on Components.
     * @param element Element to decorate.
     * @return Returns always false.
     */
    canDecorate(element: Element | null): boolean;
    getDatePicker(): DatePicker | null;
    getPopup(): Popup | null;
    getDate(): Date | null;
    /**
     * Sets the selected date.  See DatePicker.setDate().
     * @param date The date to select.
     */
    setDate(date: Date | null): void;
    getLastTarget(): Element | null;
    /**
     * Attaches the popup date picker to an element.
     * @param element The element to attach to.
     */
    attach(element: Element | null): void;
    /**
     * Detatches the popup date picker from an element.
     * @param element The element to detach from.
     */
    detach(element: Element | null): void;
    /**
     * Sets whether the date picker can automatically move focus to its key event
     * target when it is set to visible.
     * @param allow Whether to allow auto focus.
     */
    setAllowAutoFocus(allow: boolean): void;
    getAllowAutoFocus(): boolean;
    /**
     * Sets whether to reposition the popup when the date picker size changes so
     * that all weeks are visible in the viewport.
     */
    setKeepAllWeeksInViewport(keepAllWeeksInViewport: boolean): void;
    getKeepAllWeeksInViewport(): boolean;
    /**
     * Show the popup at the bottom-left corner of the specified element.
     * @param element Reference element for displaying the popup -- popup will appear at the bottom-left corner of this element.
     * @param opt_keepDate Whether to keep the date picker's current date. If false, the date is set to null. Defaults to false.
     */
    showPopup(element: Element | null, opt_keepDate?: boolean): void;
    /**
     * Hides this popup.
     */
    hidePopup(): void;
}

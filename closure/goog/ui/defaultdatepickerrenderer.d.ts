import * as dom from '../dom/dom.js';
import { DatePickerRenderer } from './datepickerrenderer.js';
/**
 * Default renderer for {@link goog.ui.DatePicker}. Renders the date picker's
 * navigation header and footer.
 */
export declare class DefaultDatePickerRenderer implements DatePickerRenderer {
    /**
     * Default renderer for {@link goog.ui.DatePicker}. Renders the date picker's
     * navigation header and footer.
     * @param baseCssClass Name of base CSS class of the date picker.
     * @param opt_domHelper DOM helper.
     */
    constructor(baseCssClass: string, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_defaultdatepickerrenderer_DefaultDatePickerRenderer;
    /**
     * Returns the dom helper that is being used on this component.
     * @return The dom helper used on this component.
     */
    getDomHelper(): dom.DomHelper;
    /**
     * Returns base CSS class. This getter is used to get base CSS class part.
     * All CSS class names in component are created as:
     * goog.getCssName(this.getBaseCssClass(), 'CLASS_NAME')
     * @return Base CSS class.
     */
    getBaseCssClass(): string;
    /**
     * Render the navigation row (navigating months and maybe years).
     * @param row The parent element to render the component into.
     * @param simpleNavigation Whether the picker should render a simple navigation menu that only contains controls for navigating to the next and previous month. The default navigation menu contains controls for navigating to the next/previous month, next/previous year, and menus for jumping to specific months and years.
     * @param showWeekNum Whether week numbers should be shown.
     * @param fullDateFormat The full date format. {@see goog.i18n.DateTimeSymbols}.
     */
    renderNavigationRow(row: Element, simpleNavigation: boolean, showWeekNum: boolean, fullDateFormat: string): any;
    /**
     * Render the footer row (with select buttons).
     * @param row The parent element to render the component into.
     * @param showWeekNum Whether week numbers should be shown.
     */
    renderFooterRow(row: Element, showWeekNum: boolean): any;
}

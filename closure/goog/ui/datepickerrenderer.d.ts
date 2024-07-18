/**
 * The renderer for {@link goog.ui.DatePicker}. Renders the date picker's
 * navigation header and footer.
 */
export interface DatePickerRenderer {
    /**
     * Render the navigation row.
     * @param row The parent element to render the component into.
     * @param simpleNavigation Whether the picker should render a simple navigation menu that only contains controls for navigating to the next and previous month. The default navigation menu contains controls for navigating to the next/previous month, next/previous year, and menus for jumping to specific months and years.
     * @param showWeekNum Whether week numbers should be shown.
     * @param fullDateFormat The full date format. {@see goog.i18n.DateTimeSymbols}.
     */
    renderNavigationRow(row: Element, simpleNavigation: boolean, showWeekNum: boolean, fullDateFormat: string): any;
    /**
     * Render the footer row.
     * @param row The parent element to render the component into.
     * @param showWeekNum Whether week numbers should be shown.
     */
    renderFooterRow(row: Element, showWeekNum: boolean): any;
}

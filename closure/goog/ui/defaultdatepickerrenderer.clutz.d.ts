//!! generated by clutz.
// Generated from ui/defaultdatepickerrenderer.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Default renderer for {@link goog.ui.DatePicker}. Renders the date picker's
   * navigation header and footer.
   */
  class DefaultDatePickerRenderer implements ಠ_ಠ.clutz.goog.ui.DatePickerRenderer {
    private noStructuralTyping_goog_ui_DefaultDatePickerRenderer : any;
    /**
     * Default renderer for {@link goog.ui.DatePicker}. Renders the date picker's
     * navigation header and footer.
     * @param baseCssClass Name of base CSS class of the date picker.
     * @param opt_domHelper DOM helper.
     */
    constructor (baseCssClass : string , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    /**
     * Returns base CSS class. This getter is used to get base CSS class part.
     * All CSS class names in component are created as:
     * goog.getCssName(this.getBaseCssClass(), 'CLASS_NAME')
     */
    getBaseCssClass ( ) : string ;
    /**
     * Returns the dom helper that is being used on this component.
     */
    getDomHelper ( ) : ಠ_ಠ.clutz.goog.dom.DomHelper ;
    /**
     * Render the footer row (with select buttons).
     * @param row The parent element to render the component into.
     * @param showWeekNum Whether week numbers should be shown.
     */
    renderFooterRow (row : GlobalElement , showWeekNum : boolean ) : void ;
    /**
     * Render the navigation row (navigating months and maybe years).
     * @param row The parent element to render the component into.
     * @param simpleNavigation Whether the picker should render a simple navigation menu that only contains controls for navigating to the next and previous month. The default navigation menu contains controls for navigating to the next/previous month, next/previous year, and menus for jumping to specific months and years.
     * @param showWeekNum Whether week numbers should be shown.
     * @param fullDateFormat The full date format. {@see goog.i18n.DateTimeSymbols}.
     */
    renderNavigationRow (row : GlobalElement , simpleNavigation : boolean , showWeekNum : boolean , fullDateFormat : string ) : void ;
  }
}
declare module 'goog:goog.ui.DefaultDatePickerRenderer' {
  import DefaultDatePickerRenderer = ಠ_ಠ.clutz.goog.ui.DefaultDatePickerRenderer;
  export default DefaultDatePickerRenderer;
}

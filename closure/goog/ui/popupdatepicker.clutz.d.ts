//!! generated by clutz.
// Generated from ui/popupdatepicker.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Popup date picker widget. Fires goog.ui.PopupBase.EventType.SHOW or HIDE
   * events when its visibility changes.
   */
  class PopupDatePicker extends ಠ_ಠ.clutz.goog.ui.Component {
    private noStructuralTyping_goog_ui_PopupDatePicker : any;
    /**
     * Popup date picker widget. Fires goog.ui.PopupBase.EventType.SHOW or HIDE
     * events when its visibility changes.
     * @param opt_datePicker Optional DatePicker.  This enables the use of a custom date-picker instance.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor (opt_datePicker ? : ಠ_ಠ.clutz.goog.ui.DatePicker | null , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    /**
     * Attaches the popup date picker to an element.
     * @param element The element to attach to.
     */
    attach (element : GlobalElement | null ) : void ;
    /**
     * DatePicker cannot be used to decorate pre-existing html, since they're
     * not based on Components.
     * @param element Element to decorate.
     */
    canDecorate (element : GlobalElement | null ) : boolean ;
    createDom ( ) : void ;
    /**
     * Detatches the popup date picker from an element.
     * @param element The element to detach from.
     */
    detach (element : GlobalElement | null ) : void ;
    disposeInternal ( ) : void ;
    enterDocument ( ) : void ;
    getAllowAutoFocus ( ) : boolean ;
    getDate ( ) : ಠ_ಠ.clutz.goog.date.Date | null ;
    getDatePicker ( ) : ಠ_ಠ.clutz.goog.ui.DatePicker | null ;
    getKeepAllWeeksInViewport ( ) : boolean ;
    getLastTarget ( ) : GlobalElement | null ;
    getPopup ( ) : ಠ_ಠ.clutz.goog.ui.Popup | null ;
    hidePopup ( ) : void ;
    isVisible ( ) : boolean ;
    /**
     * Sets whether the date picker can automatically move focus to its key event
     * target when it is set to visible.
     * @param allow Whether to allow auto focus.
     */
    setAllowAutoFocus (allow : boolean ) : void ;
    /**
     * Sets the selected date.  See goog.ui.DatePicker.setDate().
     * @param date The date to select.
     */
    setDate (date : ಠ_ಠ.clutz.goog.date.Date | null ) : void ;
    /**
     * Sets whether to reposition the popup when the date picker size changes so
     * that all weeks are visible in the viewport.
     */
    setKeepAllWeeksInViewport (keepAllWeeksInViewport : boolean ) : void ;
    /**
     * Show the popup at the bottom-left corner of the specified element.
     * @param element Reference element for displaying the popup -- popup will appear at the bottom-left corner of this element.
     * @param opt_keepDate Whether to keep the date picker's current date. If false, the date is set to null. Defaults to false.
     */
    showPopup (element : GlobalElement | null , opt_keepDate ? : boolean ) : void ;
  }
}
declare module 'goog:goog.ui.PopupDatePicker' {
  import PopupDatePicker = ಠ_ಠ.clutz.goog.ui.PopupDatePicker;
  export default PopupDatePicker;
}

//!! generated by clutz.
// Generated from ui/popupbase.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * The PopupBase class provides functionality for showing and hiding a generic
   * container element. It also provides the option for hiding the popup element
   * if the user clicks outside the popup or the popup loses focus.
   */
  class PopupBase extends ಠ_ಠ.clutz.goog.events.EventTarget {
    private noStructuralTyping_goog_ui_PopupBase : any;
    /**
     * The PopupBase class provides functionality for showing and hiding a generic
     * container element. It also provides the option for hiding the popup element
     * if the user clicks outside the popup or the popup loses focus.
     * @param opt_element A DOM element for the popup.
     * @param opt_type Type of popup.
     */
    constructor (opt_element ? : GlobalElement | null , opt_type ? : ಠ_ಠ.clutz.goog.ui.PopupBase.Type ) ;
    /**
     * Mouse events that occur within an autoHide partner will not hide a popup
     * set to autoHide.
     * @param partner The auto hide partner element.
     */
    addAutoHidePartner (partner : GlobalElement ) : void ;
    disposeInternal ( ) : void ;
    /**
     * Returns whether the Popup dismisses itself when the user clicks outside of
     * it.
     */
    getAutoHide ( ) : boolean ;
    /**
     * Returns the region inside which the Popup dismisses itself when the user
     * clicks, or null if it's the entire document.
     */
    getAutoHideRegion ( ) : GlobalElement | null ;
    /**
     * Returns the dom element that should be used for the popup.
     */
    getElement ( ) : GlobalElement | null ;
    getEnableCrossIframeDismissal ( ) : boolean ;
    /**
     * Returns the event handler for the popup. All event listeners belonging to
     * this handler are removed when the tooltip is hidden. Therefore,
     * the recommended usage of this handler is to listen on events in
     * {@link #onShow}.
     */
    protected getHandler < T = any > (this : T ) : ಠ_ಠ.clutz.goog.events.EventHandler < T > | null ;
    getHideOnEscape ( ) : boolean ;
    /**
     * Returns the time when the popup was last hidden.
     */
    getLastHideTime ( ) : number ;
    /**
     * Returns the time when the popup was last shown.
     */
    getLastShowTime ( ) : number ;
    getType ( ) : ಠ_ಠ.clutz.goog.ui.PopupBase.Type ;
    /**
     * Hides the popup element.
     */
    protected hidePopupElement ( ) : void ;
    /**
     * Returns whether the popup is currently visible or was visible within about
     * 150 ms ago. This is used by clients to handle a very specific, but common,
     * popup scenario. The button that launches the popup should close the popup
     * on mouse down if the popup is already open. The problem is that the popup
     * closes itself during the capture phase of the mouse down and thus the button
     * thinks it's hidden and this should show it again. This method provides a
     * good heuristic for clients. Typically in their event handler they will have
     * code that is:
     *
     * if (menu.isOrWasRecentlyVisible()) {
     * menu.setVisible(false);
     * } else {
     * ... // code to position menu and initialize other state
     * menu.setVisible(true);
     * }
     */
    isOrWasRecentlyVisible ( ) : boolean ;
    /**
     * Returns whether the popup is currently visible.
     */
    isVisible ( ) : boolean ;
    /**
     * Called before the popup is hidden. Derived classes can override to hook this
     * event but should make sure to call the parent class method.
     * @param opt_target Target of the event causing the hide.
     */
    protected onBeforeHide (opt_target ? : Node | null ) : boolean ;
    /**
     * Called before the popup is shown. Derived classes can override to hook this
     * event but should make sure to call the parent class method.
     */
    protected onBeforeShow ( ) : boolean ;
    /**
     * Called after the popup is hidden. Derived classes can override to hook this
     * event but should make sure to call the parent class method.
     * @param opt_target Target of the event causing the hide.
     */
    protected onHide (opt_target ? : Node | null ) : void ;
    /**
     * Called after the popup is shown. Derived classes can override to hook this
     * event but should make sure to call the parent class method.
     */
    protected onShow ( ) : void ;
    /**
     * Removes a previously registered auto hide partner.
     * @param partner The auto hide partner element.
     */
    removeAutoHidePartner (partner : GlobalElement ) : void ;
    reposition ( ) : void ;
    /**
     * Sets whether the Popup dismisses itself when the user clicks outside of it.
     * @param autoHide Whether to autohide on an external click.
     */
    setAutoHide (autoHide : boolean ) : void ;
    /**
     * Sets the region inside which the Popup dismisses itself when the user
     * clicks.
     * @param element The DOM element for autohide.
     */
    setAutoHideRegion (element : GlobalElement | null ) : void ;
    /**
     * Specifies the dom element that should be used for the popup.
     * @param elt A DOM element for the popup.
     */
    setElement (elt : GlobalElement | null ) : void ;
    /**
     * Sets whether clicks in other iframes should dismiss this popup.  In some
     * cases it should be disabled, because it can cause spurious
     * @param enable Whether to enable cross iframe dismissal.
     */
    setEnableCrossIframeDismissal (enable : boolean ) : void ;
    /**
     * Sets whether the Popup dismisses itself on the escape key.
     * @param hideOnEscape Whether to autohide on the escape key.
     */
    setHideOnEscape (hideOnEscape : boolean ) : void ;
    /**
     * Sets whether the popup should hide itself asynchronously using a timeout
     * instead of synchronously.
     * @param b Whether to hide async.
     */
    setShouldHideAsync (b : boolean ) : void ;
    /**
     * Sets transition animation on showing and hiding the popup.
     * @param opt_showTransition Transition to play on showing the popup.
     * @param opt_hideTransition Transition to play on hiding the popup.
     */
    setTransition (opt_showTransition ? : ಠ_ಠ.clutz.goog.fx.Transition | null , opt_hideTransition ? : ಠ_ಠ.clutz.goog.fx.Transition | null ) : void ;
    /**
     * Specifies the type of popup to use.
     * @param type Type of popup.
     */
    setType (type : ಠ_ಠ.clutz.goog.ui.PopupBase.Type ) : void ;
    /**
     * Sets whether the popup should be visible. After this method
     * returns, isVisible() will always return the new state, even if
     * there is a transition.
     * @param visible Desired visibility state.
     */
    setVisible (visible : boolean ) : void ;
    /**
     * Returns whether the popup should hide itself asynchronously using a timeout
     * instead of synchronously.
     */
    shouldHideAsync ( ) : boolean ;
    /**
     * Shows the popup element.
     */
    protected showPopupElement ( ) : void ;
    /**
     * A time in ms used to debounce events that happen right after each other.
     *
     * A note about why this is necessary. There are two cases to consider.
     * First case, a popup will usually see a focus event right after it's launched
     * because it's typical for it to be launched in a mouse-down event which will
     * then move focus to the launching button. We don't want to think this is a
     * separate user action moving focus. Second case, a user clicks on the
     * launcher button to close the menu. In that case, we'll close the menu in the
     * focus event and then show it again because of the mouse down event, even
     * though the intention is to just close the menu. This workaround appears to
     * be the least intrusive fix.
     */
    static DEBOUNCE_DELAY_MS : number ;
  }
}
declare module 'goog:goog.ui.PopupBase' {
  import PopupBase = ಠ_ಠ.clutz.goog.ui.PopupBase;
  export default PopupBase;
}
// Generated from ui/popupbase.js
declare namespace ಠ_ಠ.clutz.goog.ui.PopupBase {
  /**
   * Constants for event type fired by Popup
   */
  /**
   * Constants for event type fired by Popup
   */
  enum EventType {
    BEFORE_HIDE = 'beforehide' ,
    BEFORE_SHOW = 'beforeshow' ,
    HIDE = 'hide' ,
    SHOW = 'show' ,
  }
}
declare module 'goog:goog.ui.PopupBase.EventType' {
  import EventType = ಠ_ಠ.clutz.goog.ui.PopupBase.EventType;
  export default EventType;
}
// Generated from ui/popupbase.js
declare namespace ಠ_ಠ.clutz.goog.ui.PopupBase {
  /**
   * Constants for type of Popup
   */
  /**
   * Constants for type of Popup
   */
  enum Type {
    MOVE_OFFSCREEN = 'move_offscreen' ,
    TOGGLE_DISPLAY = 'toggle_display' ,
  }
}
declare module 'goog:goog.ui.PopupBase.Type' {
  import Type = ಠ_ಠ.clutz.goog.ui.PopupBase.Type;
  export default Type;
}

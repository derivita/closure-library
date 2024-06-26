//!! generated by clutz.
// Generated from ui/menuitem.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Class representing an item in a menu.
   */
  class MenuItem extends ಠ_ಠ.clutz.goog.ui.Control {
    private noStructuralTyping_goog_ui_MenuItem : any;
    /**
     * Class representing an item in a menu.
     * @param content Text caption or DOM structure to display as the content of the item (use to add icons or styling to menus).
     * @param opt_model Data/model associated with the menu item.
     * @param opt_domHelper Optional DOM helper used for document interactions.
     * @param opt_renderer Optional renderer.
     */
    constructor (content : ಠ_ಠ.clutz.goog.ui.ControlContent | null , opt_model ? : any , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null , opt_renderer ? : ಠ_ಠ.clutz.goog.ui.MenuItemRenderer | null ) ;
    getAccelerator ( ) : string | null ;
    /**
     * Returns the text caption of the component while ignoring accelerators.
     */
    getCaption ( ) : any ;
    /**
     * Gets the mnemonic key code. The mnemonic is the key associated with this
     * action.
     */
    getMnemonic ( ) : ಠ_ಠ.clutz.goog.events.KeyCodes | null ;
    getParent ( ) : ಠ_ಠ.clutz.goog.ui.Menu | null ;
    getParentEventTarget ( ) : ಠ_ಠ.clutz.goog.ui.Menu | null ;
    getPreferredAriaRole ( ) : any ;
    /**
     * Returns the value associated with the menu item.  The default implementation
     * returns the model object associated with the item (if any), or its caption.
     */
    getValue ( ) : any ;
    handleKeyEventInternal (e ? : any ) : any ;
    handleMouseUp (e ? : any ) : void ;
    /**
     * Sets the menu item to be checkable or not.  Set to true for menu items
     * that represent checkable options.
     * @param checkable Whether the menu item is checkable.
     */
    setCheckable (checkable : boolean ) : void ;
    /**
     * Sets the mnemonic key code. The mnemonic is the key associated with this
     * action.
     * @param key The key code.
     */
    setMnemonic (key : ಠ_ಠ.clutz.goog.events.KeyCodes | null ) : void ;
    /**
     * Sets the menu item to be selectable or not.  Set to true for menu items
     * that represent selectable options.
     * @param selectable Whether the menu item is selectable.
     */
    setSelectable (selectable : boolean ) : void ;
    setSupportedState (state ? : any , support ? : any ) : void ;
    /**
     * Sets the value associated with the menu item.  The default implementation
     * stores the value as the model of the menu item.
     * @param value Value to be associated with the menu item.
     */
    setValue (value : any ) : void ;
    /**
     * The class set on an element that contains a keyboard accelerator hint.
     */
    static ACCELERATOR_CLASS : string ;
  }
}
declare module 'goog:goog.ui.MenuItem' {
  import MenuItem = ಠ_ಠ.clutz.goog.ui.MenuItem;
  export default MenuItem;
}

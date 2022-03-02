//!! generated by clutz.
// Generated from ui/dialog.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Class for showing simple dialog boxes.
   * The Html structure of the dialog box is:
   * <pre>
   * Element         Function                Class-name, modal-dialog = default
   * ----------------------------------------------------------------------------
   * - iframe         Iframe mask              modal-dialog-bg
   * - div            Background mask          modal-dialog-bg
   * - div            Dialog area              modal-dialog
   * - div        Title bar                modal-dialog-title
   * - span                             modal-dialog-title-text
   * - text  Title text               N/A
   * - span                             modal-dialog-title-close
   * - ??    Close box                N/A
   * - div        Content area             modal-dialog-content
   * - ??      User specified content   N/A
   * - div        Button area              modal-dialog-buttons
   * - button                           N/A
   * - button
   * - ...
   * </pre>
   */
  class Dialog extends ಠ_ಠ.clutz.goog.ui.ModalPopup {
    private noStructuralTyping_goog_ui_Dialog : any;
    /**
     * Class for showing simple dialog boxes.
     * The Html structure of the dialog box is:
     * <pre>
     * Element         Function                Class-name, modal-dialog = default
     * ----------------------------------------------------------------------------
     * - iframe         Iframe mask              modal-dialog-bg
     * - div            Background mask          modal-dialog-bg
     * - div            Dialog area              modal-dialog
     * - div        Title bar                modal-dialog-title
     * - span                             modal-dialog-title-text
     * - text  Title text               N/A
     * - span                             modal-dialog-title-close
     * - ??    Close box                N/A
     * - div        Content area             modal-dialog-content
     * - ??      User specified content   N/A
     * - div        Button area              modal-dialog-buttons
     * - button                           N/A
     * - button
     * - ...
     * </pre>
     * @param opt_class CSS class name for the dialog element, also used as a class name prefix for related elements; defaults to modal-dialog. This should be a single, valid CSS class name.
     * @param opt_useIframeMask Work around windowed controls z-index issue by using an iframe instead of a div for bg element.
     * @param opt_domHelper Optional DOM helper; see {@link goog.ui.Component} for semantics.
     */
    constructor (opt_class ? : string , opt_useIframeMask ? : boolean , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    createDom ( ) : void ;
    /**
     * Returns a dragger for moving the dialog and adds a class for the move cursor.
     * Defaults to allow dragging of the title only, but can be overridden if
     * different drag targets or dragging behavior is desired.
     */
    protected createDragger ( ) : ಠ_ಠ.clutz.goog.fx.Dragger ;
    decorateInternal (element ? : any ) : void ;
    disposeInternal ( ) : void ;
    enterDocument ( ) : void ;
    exitDocument ( ) : void ;
    /**
     * Returns the background mask element so that more complicated things can be
     * done with the background region.  Renders if the DOM is not yet created.
     */
    getBackgroundElement ( ) : GlobalElement | null ;
    /**
     * Gets the opacity of the background mask.
     */
    getBackgroundElementOpacity ( ) : number ;
    /**
     * Returns the button element so that more complicated things can be done with
     * the button area.  Renders if the DOM is not yet created.
     */
    getButtonElement ( ) : GlobalElement | null ;
    /**
     * Returns the button set being used.
     */
    getButtonSet ( ) : ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet | null ;
    getClass ( ) : string ;
    /**
     * Gets the content HTML of the content element as a plain string.
     *
     * Note that this method returns the HTML markup that was previously set via
     * setSafeHtmlContent() or setTextContent(). In particular, the HTML returned by
     * this method does not reflect any changes to the content element's DOM that
     * were made by other means.
     */
    getContent ( ) : string ;
    /**
     * Returns the content element so that more complicated things can be done with
     * the content area.  Renders if the DOM is not yet created.  Overrides
     * {@link goog.ui.Component#getContentElement}.
     */
    getContentElement ( ) : GlobalElement | null ;
    getCssClass ( ) : any ;
    /**
     * Get the dialog close message.
     */
    protected getDialogCloseMessage ( ) : string ;
    /**
     * Returns the dialog element so that more complicated things can be done with
     * the dialog box.  Renders if the DOM is not yet created.
     */
    getDialogElement ( ) : GlobalElement | null ;
    getDisposeOnHide ( ) : boolean ;
    getDraggable ( ) : boolean ;
    getHasTitleCloseButton ( ) : boolean ;
    getModal ( ) : boolean ;
    /**
     * Returns the dialog's preferred ARIA role. This can be used to override the
     * default dialog role, e.g. with an ARIA role of ALERTDIALOG for a simple
     * warning or confirmation dialog.
     */
    getPreferredAriaRole ( ) : ಠ_ಠ.clutz.goog.a11y.aria.Role | null ;
    /**
     * Gets the content HTML of the content element.
     */
    getSafeHtmlContent ( ) : ಠ_ಠ.clutz.goog.html.SafeHtml | null ;
    /**
     * Gets the title.
     */
    getTitle ( ) : string ;
    /**
     * Returns the title close element so that more complicated things can be done
     * with the close area of the title.  Renders if the DOM is not yet created.
     */
    getTitleCloseElement ( ) : GlobalElement | null ;
    /**
     * Returns the title element so that more complicated things can be done with
     * the title.  Renders if the DOM is not yet created.
     */
    getTitleElement ( ) : GlobalElement | null ;
    /**
     * Returns the title text element so that more complicated things can be done
     * with the text of the title.  Renders if the DOM is not yet created.
     */
    getTitleTextElement ( ) : GlobalElement | null ;
    isAriaDescribedByContent ( ) : boolean ;
    isEscapeToCancel ( ) : boolean ;
    onHide ( ) : void ;
    onShow ( ) : void ;
    /**
     * Sets the opacity of the background mask.
     * @param opacity Background mask opacity.
     */
    setBackgroundElementOpacity (opacity : number ) : void ;
    /**
     * Sets the button set to use.
     * Note: Passing in null will cause no button set to be rendered.
     * @param buttons The button set to use.
     */
    setButtonSet (buttons : ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet | null ) : void ;
    /**
     * Sets whether the dialog should be disposed when it is hidden.  By default
     * dialogs are not disposed when they are hidden.
     * @param b Whether the dialog should get disposed when it gets hidden.
     */
    setDisposeOnHide (b : boolean ) : void ;
    /**
     * Sets whether the dialog can be dragged.
     * @param draggable Whether the dialog can be dragged.
     */
    setDraggable (draggable : boolean ) : void ;
    setEscapeToCancel (b : boolean ) : void ;
    /**
     * Sets whether the dialog should have a close button in the title bar. There
     * will always be an element for the title close button, but setting this
     * parameter to false will cause it to be hidden and have no active listener.
     * @param b Whether this dialog should have a title close button.
     */
    setHasTitleCloseButton (b : boolean ) : void ;
    /**
     * Sets whether the dialog sets the aria-describedby element to point to the
     * content element. This must be set prior to `createDom`.
     */
    setIsAriaDescribedByContent (isAriaDescribedByContent : boolean ) : void ;
    /**
     * Sets the modal property of the dialog. In case the dialog is already
     * inDocument, renders the modal background elements according to the specified
     * modal parameter.
     *
     * Note that non-modal dialogs cannot use an iframe mask.
     * @param modal Whether the dialog is modal.
     */
    setModal (modal : boolean ) : void ;
    /**
     * Sets the dialog's preferred ARIA role. This can be used to override the
     * default dialog role, e.g. with an ARIA role of ALERTDIALOG for a simple
     * warning or confirmation dialog.
     * @param role This dialog's preferred ARIA role.
     */
    setPreferredAriaRole (role : ಠ_ಠ.clutz.goog.a11y.aria.Role | null ) : void ;
    /**
     * Allows arbitrary HTML to be set in the content element.
     * @param html Content HTML.
     */
    setSafeHtmlContent (html : ಠ_ಠ.clutz.goog.html.SafeHtml ) : void ;
    /**
     * Allows plain text to be set in the content element.
     * @param text Content plain text. Newlines are preserved.
     */
    setTextContent (text : string ) : void ;
    /**
     * Sets the title.
     * @param title The title text.
     */
    setTitle (title : string ) : void ;
    /**
     * Sets the visibility of the dialog box and moves focus to the
     * default button. Lazily renders the component if needed. After this
     * method returns, isVisible() will always return the new state, even
     * if there is a transition.
     * @param visible Whether the dialog should be visible.
     */
    setVisible (visible : boolean ) : void ;
    /**
     * Event type constant for dialog events.
     * TODO(attila): Change this to goog.ui.Dialog.EventType.SELECT.
     */
    static SELECT_EVENT : string ;
  }
}
declare module 'goog:goog.ui.Dialog' {
  import Dialog = ಠ_ಠ.clutz.goog.ui.Dialog;
  export default Dialog;
}
// Generated from ui/dialog.js
declare namespace ಠ_ಠ.clutz.goog.ui.Dialog {
  /**
   * A button set defines the behaviour of a set of buttons that the dialog can
   * show.  Uses the {@link goog.structs.Map} interface.
   */
  class ButtonSet extends ಠ_ಠ.clutz.goog.ui.Map {
    private noStructuralTyping_goog_ui_Dialog_ButtonSet : any;
    /**
     * A button set defines the behaviour of a set of buttons that the dialog can
     * show.  Uses the {@link goog.structs.Map} interface.
     * @param opt_domHelper Optional DOM helper; see {@link goog.ui.Component} for semantics.
     */
    constructor (opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    dom_ : any ;
    /**
     * Adds a button (an object with a key and caption) to this button set. Buttons
     * will be displayed in the order they are added.
     * @param button The button key and caption.
     * @param opt_isDefault Whether this button is the default button. Dialog will dispatch for this button if enter is pressed.
     * @param opt_isCancel Whether this button has the same behavior as cancel. If escape is pressed this button will fire.
     */
    addButton (button : { caption : string , key : string } , opt_isDefault ? : boolean , opt_isCancel ? : boolean ) : ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet ;
    /**
     * Attaches the button set to an element, rendering it inside.
     * @param el Container.
     */
    attachToElement (el : GlobalElement | null ) : void ;
    clear ( ) : void ;
    /**
     * Decorates the given element by adding any `button` elements found
     * among its descendants to the button set.  The first button found is assumed
     * to be the default and will receive focus when the button set is rendered.
     * If a button with a name of {@link goog.ui.Dialog.DefaultButtonKeys.CANCEL}
     * is found, it is assumed to have "Cancel" semantics.
     * TODO(attila):  ButtonSet should be a goog.ui.Component.  Really.
     * @param element The element to decorate; should contain buttons.
     */
    decorate (element : GlobalElement | null ) : void ;
    /**
     * Returns all the HTML Button elements in the button set container.
     */
    getAllButtons ( ) : ArrayLike < GlobalElement > ;
    /**
     * Returns the HTML Button element.
     * @param key The button to return.
     */
    getButton (key : string ) : GlobalElement | null ;
    /**
     * Returns the cancel button.
     */
    getCancel ( ) : string | null ;
    /**
     * Returns the default button.
     */
    getDefault ( ) : string | null ;
    /**
     * Returns the dom helper that is being used on this component.
     */
    getDomHelper ( ) : ಠ_ಠ.clutz.goog.dom.DomHelper ;
    /**
     * Gets the component's element.
     */
    getElement ( ) : GlobalElement | null ;
    render ( ) : void ;
    /**
     * Adds a button to the button set.  Buttons will be displayed in the order they
     * are added.
     * @param key Key used to identify the button in events.
     * @param caption A string caption or a DOM node that can be appended to a button element.
     * @param opt_isDefault Whether this button is the default button, Dialog will dispatch for this button if enter is pressed.
     * @param opt_isCancel Whether this button has the same behaviour as cancel.  If escape is pressed this button will fire.
     */
    set (key : any , caption : any , opt_isDefault ? : boolean , opt_isCancel ? : boolean ) : ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet ;
    /**
     * Enables or disables all of the buttons in this set.
     * @param enabled True to enable; false to disable.
     */
    setAllButtonsEnabled (enabled : boolean ) : void ;
    /**
     * Enables or disables a button in this set by key. If the button is not found,
     * does nothing.
     * @param key The button to enable or disable.
     * @param enabled True to enable; false to disable.
     */
    setButtonEnabled (key : string , enabled : boolean ) : void ;
    /**
     * Sets the cancel button.
     * @param key The cancel button.
     */
    setCancel (key : string | null ) : void ;
    /**
     * Sets the default button.
     * @param key The default button.
     */
    setDefault (key : string | null ) : void ;
    static CONTINUE_SAVE_CANCEL : ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet ;
    static OK : ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet ;
    static OK_CANCEL : ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet ;
    static YES_NO : ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet ;
    static YES_NO_CANCEL : ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet ;
    /**
     * Creates a new ButtonSet with 'Continue', 'Save', and 'Cancel' (default)
     * buttons.
     */
    static createContinueSaveCancel ( ) : ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet ;
    /**
     * Creates a new ButtonSet with a single 'OK' button, which is also set with
     * cancel button semantics so that pressing escape will close the dialog.
     */
    static createOk ( ) : ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet ;
    /**
     * Creates a new ButtonSet with 'OK' (default) and 'Cancel' buttons.
     */
    static createOkCancel ( ) : ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet ;
    /**
     * Creates a new ButtonSet with 'Yes' (default) and 'No' buttons.
     */
    static createYesNo ( ) : ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet ;
    /**
     * Creates a new ButtonSet with 'Yes', 'No' (default), and 'Cancel' buttons.
     */
    static createYesNoCancel ( ) : ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet ;
  }
}
declare module 'goog:goog.ui.Dialog.ButtonSet' {
  import ButtonSet = ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet;
  export default ButtonSet;
}
// Generated from ui/dialog.js
declare namespace ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet {
  /**
   * The standard buttons (keys associated with captions).
   */
  type DefaultButtons = { caption : string , key : string } &{clutzEnumBrand: never} ;
  let DefaultButtons : {
    CANCEL : DefaultButtons ,
    CONTINUE : DefaultButtons ,
    NO : DefaultButtons ,
    OK : DefaultButtons ,
    SAVE : DefaultButtons ,
    YES : DefaultButtons ,
  };
}
declare module 'goog:goog.ui.Dialog.ButtonSet.DefaultButtons' {
  import DefaultButtons = ಠ_ಠ.clutz.goog.ui.Dialog.ButtonSet.DefaultButtons;
  export default DefaultButtons;
}
// Generated from ui/dialog.js
declare namespace ಠ_ಠ.clutz.goog.ui.Dialog {
  /**
   * The default captions for the default buttons.
   */
  type DefaultButtonCaptions = string &{clutzEnumBrand: never} ;
  let DefaultButtonCaptions : {
    CANCEL : DefaultButtonCaptions ,
    CONTINUE : DefaultButtonCaptions ,
    NO : DefaultButtonCaptions ,
    OK : DefaultButtonCaptions ,
    SAVE : DefaultButtonCaptions ,
    YES : DefaultButtonCaptions ,
  };
}
declare module 'goog:goog.ui.Dialog.DefaultButtonCaptions' {
  import DefaultButtonCaptions = ಠ_ಠ.clutz.goog.ui.Dialog.DefaultButtonCaptions;
  export default DefaultButtonCaptions;
}
// Generated from ui/dialog.js
declare namespace ಠ_ಠ.clutz.goog.ui.Dialog {
  /**
   * The keys used to identify standard buttons in events.
   */
  /**
   * The keys used to identify standard buttons in events.
   */
  enum DefaultButtonKeys {
    CANCEL = 'cancel' ,
    CONTINUE = 'continue' ,
    NO = 'no' ,
    OK = 'ok' ,
    SAVE = 'save' ,
    YES = 'yes' ,
  }
}
declare module 'goog:goog.ui.Dialog.DefaultButtonKeys' {
  import DefaultButtonKeys = ಠ_ಠ.clutz.goog.ui.Dialog.DefaultButtonKeys;
  export default DefaultButtonKeys;
}
// Generated from ui/dialog.js
declare namespace ಠ_ಠ.clutz.goog.ui.Dialog {
  /**
   * Dialog event class.
   */
  class Event extends ಠ_ಠ.clutz.goog.events.Event {
    private noStructuralTyping_goog_ui_Dialog_Event : any;
    /**
     * Dialog event class.
     * @param key Key identifier for the button.
     * @param caption Caption on the button (might be i18nlized).
     */
    constructor (key : string , caption : string | GlobalElement | null ) ;
    caption : string | GlobalElement | null ;
    key : string ;
    type : ಠ_ಠ.clutz.goog.ui.Dialog.EventType ;
  }
}
declare module 'goog:goog.ui.Dialog.Event' {
  import Event = ಠ_ಠ.clutz.goog.ui.Dialog.Event;
  export default Event;
}
// Generated from ui/dialog.js
declare namespace ಠ_ಠ.clutz.goog.ui.Dialog {
  /**
   * Events dispatched by dialogs.
   */
  /**
   * Events dispatched by dialogs.
   */
  enum EventType {
    AFTER_HIDE = 'afterhide' ,
    AFTER_SHOW = 'aftershow' ,
    SELECT = 'dialogselect' ,
  }
}
declare module 'goog:goog.ui.Dialog.EventType' {
  import EventType = ಠ_ಠ.clutz.goog.ui.Dialog.EventType;
  export default EventType;
}

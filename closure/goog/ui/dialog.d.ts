import { Role } from '../a11y/aria/roles.js';
import * as googDom from '../dom/dom.js';
import { Dragger } from '../fx/dragger.js';
import { SafeHtml } from '../html/safehtml.js';
import { UiMap as Map } from './map.js';
import { ModalPopup } from './modalpopup.js';
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
export declare class Dialog extends ModalPopup {
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
    constructor(opt_class?: string, opt_useIframeMask?: boolean, opt_domHelper?: googDom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_dialog_Dialog;
    getCssClass(): string;
    /**
     * Sets the title.
     * @param title The title text.
     */
    setTitle(title: string): void;
    /**
     * Gets the title.
     * @return The title.
     */
    getTitle(): string;
    /**
     * Allows plain text to be set in the content element.
     * @param text Content plain text. Newlines are preserved.
     */
    setTextContent(text: string): void;
    /**
     * Allows arbitrary HTML to be set in the content element.
     * @param html Content HTML.
     */
    setSafeHtmlContent(html: SafeHtml): void;
    /**
     * Gets the content HTML of the content element as a plain string.
     *
     * Note that this method returns the HTML markup that was previously set via
     * setSafeHtmlContent() or setTextContent(). In particular, the HTML returned by
     * this method does not reflect any changes to the content element's DOM that
     * were made by other means.
     * @return Content HTML.
     */
    getContent(): string;
    /**
     * Gets the content HTML of the content element.
     * @return Content HTML.
     */
    getSafeHtmlContent(): SafeHtml | null;
    /**
     * Returns the dialog's preferred ARIA role. This can be used to override the
     * default dialog role, e.g. with an ARIA role of ALERTDIALOG for a simple
     * warning or confirmation dialog.
     * @return This dialog's preferred ARIA role.
     */
    getPreferredAriaRole(): Role | null;
    /**
     * Sets the dialog's preferred ARIA role. This can be used to override the
     * default dialog role, e.g. with an ARIA role of ALERTDIALOG for a simple
     * warning or confirmation dialog.
     * @param role This dialog's preferred ARIA role.
     */
    setPreferredAriaRole(role: Role | null): void;
    isAriaDescribedByContent(): boolean;
    /**
     * Sets whether the dialog sets the aria-describedby element to point to the
     * content element. This must be set prior to `createDom`.
     */
    setIsAriaDescribedByContent(isAriaDescribedByContent: boolean): void;
    /**
     * Returns the content element so that more complicated things can be done with
     * the content area.  Renders if the DOM is not yet created.  Overrides
     * {@link goog.ui.Component#getContentElement}.
     * @return The content element.
     */
    getContentElement(): Element | null;
    /**
     * Returns the title element so that more complicated things can be done with
     * the title.  Renders if the DOM is not yet created.
     * @return The title element.
     */
    getTitleElement(): Element | null;
    /**
     * Returns the title text element so that more complicated things can be done
     * with the text of the title.  Renders if the DOM is not yet created.
     * @return The title text element.
     */
    getTitleTextElement(): Element | null;
    /**
     * Returns the title close element so that more complicated things can be done
     * with the close area of the title.  Renders if the DOM is not yet created.
     * @return The close box.
     */
    getTitleCloseElement(): Element | null;
    /**
     * Get the dialog close message.
     */
    protected getDialogCloseMessage(): string;
    /**
     * Returns the button element so that more complicated things can be done with
     * the button area.  Renders if the DOM is not yet created.
     * @return The button container element.
     */
    getButtonElement(): Element | null;
    /**
     * Returns the dialog element so that more complicated things can be done with
     * the dialog box.  Renders if the DOM is not yet created.
     * @return The dialog element.
     */
    getDialogElement(): Element | null;
    /**
     * Returns the background mask element so that more complicated things can be
     * done with the background region.  Renders if the DOM is not yet created.
     * @return The background mask element.
     */
    getBackgroundElement(): Element | null;
    /**
     * Gets the opacity of the background mask.
     * @return Background mask opacity.
     */
    getBackgroundElementOpacity(): number;
    /**
     * Sets the opacity of the background mask.
     * @param opacity Background mask opacity.
     */
    setBackgroundElementOpacity(opacity: number): void;
    /**
     * Sets the modal property of the dialog. In case the dialog is already
     * inDocument, renders the modal background elements according to the specified
     * modal parameter.
     *
     * Note that non-modal dialogs cannot use an iframe mask.
     * @param modal Whether the dialog is modal.
     */
    setModal(modal: boolean): void;
    getModal(): boolean;
    getClass(): string;
    /**
     * Sets whether the dialog can be dragged.
     * @param draggable Whether the dialog can be dragged.
     */
    setDraggable(draggable: boolean): void;
    /**
     * Sets whether the dialog keeps track of its surrounding space.
     */
    setTrackSurroundingSpace(trackSurroundingSpace: boolean): void;
    /**
     * Handles the dialog being dragged.
     */
    handleDrag(): void;
    /**
     * Updates the surrounding space fields if that behavior is enabled.
     */
    maybeUpdateSurroundingSpace_(): void;
    /**
     * Gets an object containing fields for how many pixels of space there are on
     * each side of the dialog, or null if this dialog isn't keeping track of that
     * information.
     */
    getSurroundingSpace(): {
        'left': number;
        'right': number;
        'top': number;
        'bottom': number;
    };
    /**
     * Returns a dragger for moving the dialog and adds a class for the move cursor.
     * Defaults to allow dragging of the title only, but can be overridden if
     * different drag targets or dragging behavior is desired.
     * @return The created dragger instance.
     */
    protected createDragger(): Dragger;
    getDraggable(): boolean;
    createDom(): void;
    decorateInternal(element: any): void;
    enterDocument(): void;
    exitDocument(): void;
    /**
     * Sets the visibility of the dialog box. Lazily renders the component if
     * needed. After this method returns, isVisible() will always return the new
     * state, even if there is a transition.
     * @param visible Whether the dialog should be visible.
     */
    setVisible(visible: boolean): void;
    onShow(): void;
    onHide(): void;
    getHasTitleCloseButton(): boolean;
    /**
     * Sets whether the dialog should have a close button in the title bar. There
     * will always be an element for the title close button, but setting this
     * parameter to false will cause it to be hidden and have no active listener.
     * @param b Whether this dialog should have a title close button.
     */
    setHasTitleCloseButton(b: boolean): void;
    isEscapeToCancel(): boolean;
    /**
     *
     * @param b Whether the escape key should close this dialog.
     */
    setEscapeToCancel(b: boolean): void;
    /**
     * Sets whether the dialog should be disposed when it is hidden.  By default
     * dialogs are not disposed when they are hidden.
     * @param b Whether the dialog should get disposed when it gets hidden.
     */
    setDisposeOnHide(b: boolean): void;
    getDisposeOnHide(): boolean;
    disposeInternal(): void;
    /**
     * Sets the button set to use.
     * Note: Passing in null will cause no button set to be rendered.
     * @param buttons The button set to use.
     */
    setButtonSet(buttons: Dialog.ButtonSet | null): void;
    /**
     * Returns the button set being used.
     * @return The button set being used.
     */
    getButtonSet(): Dialog.ButtonSet | null;
    /**
     * Event type constant for dialog events.
     * TODO(attila): Change this to Dialog.EventType.SELECT.
     */
    static SELECT_EVENT: string;
}
export declare namespace Dialog {
    /**
     * Dialog event class.
     */
    class Event extends Event {
        /**
         * Dialog event class.
         * @param key Key identifier for the button.
         * @param caption Caption on the button (might be i18nlized).
         */
        constructor(key: string, caption: string | Element | null);
        private noStructuralTyping_closure_goog_ui_dialog_Event;
        type: Dialog.EventType;
        key: any;
        caption: any;
    }
    /**
     * Events dispatched by dialogs.
     */
    enum EventType {
        SELECT = "dialogselect",
        AFTER_HIDE = "afterhide",
        AFTER_SHOW = "aftershow"
    }
    /**
     * A button set defines the behaviour of a set of buttons that the dialog can
     * show.  Uses the {@link goog.structs.Map} interface.
     */
    class ButtonSet extends Map {
        /**
         * A button set defines the behaviour of a set of buttons that the dialog can
         * show.  Uses the {@link goog.structs.Map} interface.
         * @param opt_domHelper Optional DOM helper; see {@link goog.ui.Component} for semantics.
         */
        constructor(opt_domHelper?: googDom.DomHelper | null);
        private noStructuralTyping_closure_goog_ui_dialog_ButtonSet;
        clear(): void;
        /**
         * Adds a button to the button set.  Buttons will be displayed in the order they
         * are added.
         * @param key Key used to identify the button in events.
         * @param caption A string caption or a DOM node that can be appended to a button element.
         * @param opt_isDefault Whether this button is the default button, Dialog will dispatch for this button if enter is pressed.
         * @param opt_isCancel Whether this button has the same behaviour as cancel.  If escape is pressed this button will fire.
         * @return The button set, to make it easy to chain "set" calls and build new ButtonSets.
         */
        set(key: any, caption: any, opt_isDefault?: boolean, opt_isCancel?: boolean): Dialog.ButtonSet;
        /**
         * Adds a button (an object with a key and caption) to this button set. Buttons
         * will be displayed in the order they are added.
         * @param button The button key and caption.
         * @param opt_isDefault Whether this button is the default button. Dialog will dispatch for this button if enter is pressed.
         * @param opt_isCancel Whether this button has the same behavior as cancel. If escape is pressed this button will fire.
         * @return The button set, to make it easy to chain "addButton" calls and build new ButtonSets.
         */
        addButton(button: {
            'key': string;
            'caption': string;
        }, opt_isDefault?: boolean, opt_isCancel?: boolean): Dialog.ButtonSet;
        /**
         * Attaches the button set to an element, rendering it inside.
         * @param el Container.
         */
        attachToElement(el: Element | null): void;
        /**
         * Renders the button set inside its container element.
         */
        render(): void;
        /**
         * Decorates the given element by adding any `button` elements found
         * among its descendants to the button set.  The first button found is assumed
         * to be the default and will receive focus when the button set is rendered.
         * If a button with a name of {@link Dialog.DefaultButtonKeys.CANCEL}
         * is found, it is assumed to have "Cancel" semantics.
         * TODO(attila):  ButtonSet should be a goog.ui.Component.  Really.
         * @param element The element to decorate; should contain buttons.
         */
        decorate(element: Element | null): void;
        /**
         * Gets the component's element.
         * @return The element for the component. TODO(user): Remove after refactoring to goog.ui.Component.
         */
        getElement(): Element | null;
        /**
         * Returns the dom helper that is being used on this component.
         * @return The dom helper used on this component. TODO(user): Remove after refactoring to goog.ui.Component.
         */
        getDomHelper(): googDom.DomHelper;
        /**
         * Sets the default button.
         * @param key The default button.
         */
        setDefault(key: string | null): void;
        /**
         * Returns the default button.
         * @return The default button.
         */
        getDefault(): string | null;
        /**
         * Sets the cancel button.
         * @param key The cancel button.
         */
        setCancel(key: string | null): void;
        /**
         * Returns the cancel button.
         * @return The cancel button.
         */
        getCancel(): string | null;
        /**
         * Returns the HTML Button element.
         * @param key The button to return.
         * @return The button, if found else null.
         */
        getButton(key: string): Element | null;
        /**
         * Returns all the HTML Button elements in the button set container.
         * @return A live NodeList of the buttons.
         */
        getAllButtons(): ArrayLike<Element>;
        /**
         * Enables or disables a button in this set by key. If the button is not found,
         * does nothing.
         * @param key The button to enable or disable.
         * @param enabled True to enable; false to disable.
         */
        setButtonEnabled(key: string, enabled: boolean): void;
        /**
         * Enables or disables all of the buttons in this set.
         * @param enabled True to enable; false to disable.
         */
        setAllButtonsEnabled(enabled: boolean): void;
        /**
         * Creates a new ButtonSet with a single 'OK' button, which is also set with
         * cancel button semantics so that pressing escape will close the dialog.
         * @return The created ButtonSet.
         */
        static createOk(): Dialog.ButtonSet;
        /**
         * Creates a new ButtonSet with 'OK' (default) and 'Cancel' buttons.
         * @return The created ButtonSet.
         */
        static createOkCancel(): Dialog.ButtonSet;
        /**
         * Creates a new ButtonSet with 'Yes' (default) and 'No' buttons.
         * @return The created ButtonSet.
         */
        static createYesNo(): Dialog.ButtonSet;
        /**
         * Creates a new ButtonSet with 'Yes', 'No' (default), and 'Cancel' buttons.
         * @return The created ButtonSet.
         */
        static createYesNoCancel(): Dialog.ButtonSet;
        /**
         * Creates a new ButtonSet with 'Continue', 'Save', and 'Cancel' (default)
         * buttons.
         * @return The created ButtonSet.
         */
        static createContinueSaveCancel(): Dialog.ButtonSet;
    }
    namespace ButtonSet {
        /**
         * The standard buttons (keys associated with captions).
         */
        type DefaultButtons = {
            'key': string;
            'caption': string;
        };
        const DefaultButtons: {
            OK: {
                key: DefaultButtonKeys;
                caption: any;
            };
            CANCEL: {
                key: DefaultButtonKeys;
                caption: any;
            };
            YES: {
                key: DefaultButtonKeys;
                caption: any;
            };
            NO: {
                key: DefaultButtonKeys;
                caption: any;
            };
            SAVE: {
                key: DefaultButtonKeys;
                caption: any;
            };
            CONTINUE: {
                key: DefaultButtonKeys;
                caption: any;
            };
        };
    }
    /**
     * The keys used to identify standard buttons in events.
     */
    enum DefaultButtonKeys {
        OK = "ok",
        CANCEL = "cancel",
        YES = "yes",
        NO = "no",
        SAVE = "save",
        CONTINUE = "continue"
    }
    /**
     * The default captions for the default buttons.
     */
    type DefaultButtonCaptions = string;
    const DefaultButtonCaptions: {
        OK: any;
        CANCEL: any;
        YES: any;
        NO: any;
        SAVE: any;
        CONTINUE: any;
    };
}

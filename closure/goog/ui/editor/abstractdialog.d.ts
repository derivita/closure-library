import * as dom from '../../dom/dom.js';
import { EventTarget } from '../../events/eventtarget.js';
import { Dialog } from '../dialog.js';
import type { Event } from '../../events/event.js';
/**
 * Creates an object that represents a dialog box.
 */
export declare class AbstractDialog extends EventTarget {
    /**
     * Creates an object that represents a dialog box.
     * @param domHelper DomHelper to be used to create the dialog's dom structure.
     */
    constructor(domHelper: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_editor_abstractdialog_AbstractDialog;
    /**
     * Causes the dialog box to appear, centered on the screen. Lazily creates the
     * dialog if needed.
     */
    show(): void;
    /**
     * Hides the dialog, causing AFTER_HIDE to fire.
     */
    hide(): void;
    isOpen(): boolean;
    /**
     * Runs the handler registered on the OK button event and closes the dialog if
     * that handler succeeds.
     * This is useful in cases such as double-clicking an item in the dialog is
     * equivalent to selecting it and clicking the default button.
     */
    protected processOkAndClose(): void;
    /**
     * The DOM helper for the parent document.
     */
    protected dom: dom.DomHelper | null;
    /**
     * Creates and returns the Dialog control that is being wrapped
     * by this object.
     * @return Created Dialog control.
     */
    protected createDialogControl(): Dialog;
    /**
     * Returns the HTML Button element for the OK button in this dialog.
     * @return The button element if found, else null.
     */
    protected getOkButtonElement(): Element | null;
    /**
     * Returns the HTML Button element for the Cancel button in this dialog.
     * @return The button element if found, else null.
     */
    protected getCancelButtonElement(): Element | null;
    /**
     * Returns the HTML Button element for the button added to this dialog with
     * the given button id.
     * @param buttonId The id of the button to get.
     * @return The button element if found, else null.
     */
    protected getButtonElement(buttonId: string): Element | null;
    /**
     * Creates and returns the event object to be used when dispatching the OK
     * event to listeners, or returns null to prevent the dialog from closing.
     * Subclasses should override this to return their own subclass of
     * Event that includes all data a plugin would need from the dialog.
     * @param e The event object dispatched by the wrapped dialog.
     * @return The event object to be used when dispatching the OK event to listeners.
     */
    protected createOkEvent(e: Event | null): Event | null;
    /**
     * Handles the event dispatched by the wrapped dialog control when the user
     * clicks the OK button. Attempts to create the OK event object and dispatches
     * it if successful.
     * @param e wrapped dialog OK event object.
     * @return Whether the default action (closing the dialog) should still be executed. This will be false if the OK event could not be created to be dispatched, or if any listener to that event returs false or calls preventDefault.
     */
    protected handleOk(e: Dialog.Event | null): boolean;
    /**
     * Handles the event dispatched by the wrapped dialog control when the user
     * clicks the Cancel button. Simply dispatches a CANCEL event.
     * @return Returns false if any of the handlers called prefentDefault on the event or returned false themselves.
     */
    protected handleCancel(): boolean;
    /**
     * Disposes of the dialog. If the dialog is open, it will be hidden and
     * AFTER_HIDE will be dispatched.
     */
    disposeInternal(): void;
}
export declare namespace AbstractDialog {
    /**
     * Event type constants for events the dialog fires.
     */
    enum EventType {
        AFTER_HIDE = "afterhide",
        CANCEL = "cancel",
        OK = "ok"
    }
    /**
     * A builder class for the dialog control. All methods except build return this.
     */
    class Builder {
        /**
         * A builder class for the dialog control. All methods except build return this.
         * @param editorDialog Editor dialog object that will wrap the wrapped dialog object this builder will create.
         */
        constructor(editorDialog: AbstractDialog | null);
        private noStructuralTyping_closure_goog_ui_editor_abstractdialog_Builder;
        /**
         * Sets the title of the dialog.
         * @param title Title HTML (escaped).
         * @return This.
         */
        setTitle(title: string): AbstractDialog.Builder;
        /**
         * Adds an OK button to the dialog. Clicking this button will cause {@link
         * handleOk} to run, subsequently dispatching an OK event.
         * @param opt_label The caption for the button, if not "OK".
         * @return This.
         */
        addOkButton(opt_label?: string): AbstractDialog.Builder;
        /**
         * Adds a Cancel button to the dialog. Clicking this button will cause {@link
         * handleCancel} to run, subsequently dispatching a CANCEL event.
         * @param opt_label The caption for the button, if not "Cancel".
         * @return This.
         */
        addCancelButton(opt_label?: string): AbstractDialog.Builder;
        /**
         * Adds a custom button to the dialog.
         * @param label The caption for the button.
         * @param handler Function called when the button is clicked. It is recommended that this function be a method in the concrete subclass of AbstractDialog using this Builder, and that it dispatch an event (see {@link handleOk}).
         * @param opt_buttonId Identifier to be used to access the button when calling AbstractDialog.getButtonElement().
         * @return This.
         */
        addButton(label: string, handler: () => any, opt_buttonId?: string): AbstractDialog.Builder;
        /**
         * Puts a CSS class on the dialog's main element.
         * @param className The class to add.
         * @return This.
         */
        addClassName(className: string): AbstractDialog.Builder;
        /**
         * Sets the content element of the dialog.
         * @param contentElem An element for the main body.
         * @return This.
         */
        setContent(contentElem: Element | null): AbstractDialog.Builder;
        /**
         * Builds the wrapped dialog control. May only be called once, after which
         * no more methods may be called on this builder.
         * @return The wrapped dialog control.
         */
        build(): Dialog;
    }
}

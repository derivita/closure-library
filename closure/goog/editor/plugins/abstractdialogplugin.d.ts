import * as dom from '../../dom/dom.js';
import { Plugin } from '../plugin.js';
import { AbstractDialog } from '../../ui/editor/abstractdialog.js';
import type { Event } from '../../events/event.js';
/**
 * An abstract superclass for a Trogedit plugin that creates exactly one
 * dialog. By default dialogs are not reused -- each time execCommand is called,
 * a new instance of the dialog object is created (and the old one disposed of).
 * To enable reusing of the dialog object, subclasses should call
 * setReuseDialog() after calling the superclass constructor.
 */
export declare class AbstractDialogPlugin extends Plugin {
    /**
     * An abstract superclass for a Trogedit plugin that creates exactly one
     * dialog. By default dialogs are not reused -- each time execCommand is called,
     * a new instance of the dialog object is created (and the old one disposed of).
     * To enable reusing of the dialog object, subclasses should call
     * setReuseDialog() after calling the superclass constructor.
     * @param command The command that this plugin handles.
     */
    constructor(command: string);
    private noStructuralTyping_closure_goog_editor_plugins_abstractdialogplugin_AbstractDialogPlugin;
    isSupportedCommand(command: any): boolean;
    /**
     * Handles execCommand. Dialog plugins don't make any changes when they open a
     * dialog, just when the dialog closes (because only modal dialogs are
     * supported). Hence this method does not dispatch the change events that the
     * superclass method does.
     * @param command The command to execute.
     * @param var_args Any additional parameters needed to execute the command.
     * @return The result of the execCommand, if any.
     */
    execCommand(command: string, ...var_args: any[]): any;
    /**
     * Creates a new instance of this plugin's dialog. Must be overridden by
     * subclasses.
     * Implementations should expect that the editor is inactive and cannot be
     * focused, nor will its caret position (or selection) be determinable until
     * after the dialogs goog.ui.PopupBase.EventType.HIDE event has been handled.
     * @param dialogDomHelper The dom helper to be used to create the dialog.
     * @param opt_arg The dialog specific argument. Concrete subclasses should declare a specific type.
     * @return The newly created dialog.
     */
    protected createDialog(dialogDomHelper: dom.DomHelper, opt_arg?: any): AbstractDialog | null;
    /**
     * Returns the current dialog that was created and opened by this plugin.
     * @return The current dialog that was created and opened by this plugin.
     */
    protected getDialog(): AbstractDialog | null;
    /**
     * Sets whether this plugin should reuse the same instance of the dialog each
     * time execCommand is called or create a new one. This is intended for use by
     * subclasses only, hence protected.
     * @param reuse Whether to reuse the dialog.
     */
    protected setReuseDialog(reuse: boolean): void;
    /**
     * Handles execCommand by opening the dialog. Dispatches
     * {@link AbstractDialogPlugin.EventType.OPENED} after the
     * dialog is shown.
     * @param command The command to execute.
     * @param opt_arg The dialog specific argument. Should be the same as {@link createDialog}.
     * @return Always returns true, indicating the dialog was shown.
     */
    execCommandInternal(command: string, opt_arg?: any): any;
    /**
     * Cleans up after the dialog has closed, including restoring the selection to
     * what it was before the dialog was opened. If a subclass modifies the editable
     * field's content such that the original selection is no longer valid (usually
     * the case when the user clicks OK, and sometimes also on Cancel), it is that
     * subclass' responsibility to place the selection in the desired place during
     * the OK or Cancel (or other) handler. In that case, this method will leave the
     * selection in place.
     * @param e The AFTER_HIDE event object.
     */
    protected handleAfterHide(e: Event | null): void;
    /**
     * Restores the selection in the editable field to what it was before the dialog
     * was opened. This is not guaranteed to work if the contents of the field
     * have changed.
     */
    protected restoreOriginalSelection(): void;
    /**
     * Cleans up the structure used to save the original selection before the dialog
     * was opened. Should be used by subclasses that don't restore the original
     * selection via restoreOriginalSelection.
     */
    protected disposeOriginalSelection(): void;
    disposeInternal(): void;
}
export declare namespace AbstractDialogPlugin {
    /**
     * Event type constants for events the dialog plugins fire.
     */
    enum EventType {
        OPENED = "dialogOpened",
        CLOSED = "dialogClosed"
    }
}

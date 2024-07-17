import { Field } from '../field.js';
import { Plugin } from '../plugin.js';
import { UndoRedoManager } from './undoredomanager.js';
import { UndoRedoState } from './undoredostate.js';
import * as log from '../../log/log.js';
/**
 * Encapsulates undo/redo logic using a custom undo stack (i.e. not browser
 * built-in). Browser built-in undo stacks are too flaky (e.g. IE's gets
 * clobbered on DOM modifications). Also, this allows interleaving non-editing
 * commands into the undo stack via the UndoRedoManager.
 */
export declare class UndoRedo extends Plugin {
    /**
     * Encapsulates undo/redo logic using a custom undo stack (i.e. not browser
     * built-in). Browser built-in undo stacks are too flaky (e.g. IE's gets
     * clobbered on DOM modifications). Also, this allows interleaving non-editing
     * commands into the undo stack via the UndoRedoManager.
     * @param opt_manager An undo redo manager to be used by this plugin. If none is provided one is created.
     */
    constructor(opt_manager?: UndoRedoManager | null);
    private noStructuralTyping_closure_goog_editor_plugins_undoredo_UndoRedo;
    /**
     * The logger for this class.
     */
    logger: log.Logger | null;
    /**
     * Set the max undo stack depth (not the real memory usage).
     * @param depth Depth of the stack.
     */
    setMaxUndoDepth(depth: number): void;
    /**
     * Set the undo-redo manager used by this plugin. Any state on a previous
     * undo-redo manager is lost.
     * @param manager The undo-redo manager.
     */
    setUndoRedoManager(manager: UndoRedoManager | null): void;
    /**
     * Whether the string corresponds to a command this plugin handles.
     * @param command Command string to check.
     * @return Whether the string corresponds to a command this plugin handles.
     */
    isSupportedCommand(command: string): boolean;
    /**
     * Unregisters and disables the fieldObject with this plugin. Thie does *not*
     * clobber the undo stack for the fieldObject though.
     * TODO(user): For the multifield version, we really should add a way to
     * ignore undo actions on field's that have been made uneditable.
     * This is probably as simple as skipping over entries in the undo stack
     * that have a hashcode of an uneditable field.
     * @param fieldObject The field to register with the plugin.
     */
    unregisterFieldObject(fieldObject: Field | null): void;
    /**
     * This is so subclasses can deal with multifield undo-redo.
     * @return The active field object for this field. This is the one registered field object for the single-plugin case and the focused field for the multi-field plugin case.
     */
    getCurrentFieldObject(): Field | null;
    /**
     * This is so subclasses can deal with multifield undo-redo.
     * @param fieldHashCode The Field's hashcode.
     * @return The field object with the hashcode.
     */
    getFieldObjectForHash(fieldHashCode: string): Field | null;
    /**
     * This is so subclasses can deal with multifield undo-redo.
     * @return Target for COMMAND_VALUE_CHANGE events.
     */
    getCurrentEventTarget(): Field | null;
    enable(fieldObject: any): void;
    disable(fieldObject: any): void;
    isEnabled(fieldObject: any): boolean;
    disposeInternal(): void;
    getTrogClassId(): string;
    execCommand(command: any, var_args: any): any;
    queryCommandValue(command: any): any;
    handleKeyboardShortcut(e: any, key: any, isModifierPressed: any): boolean;
    /**
     * Clear the undo/redo stack.
     */
    clearHistory(): void;
    /**
     * Refreshes the current state of the editable field as maintained by undo-redo,
     * without adding any undo-redo states to the stack.
     * @param fieldObject The editable field.
     */
    refreshCurrentState(fieldObject: Field | null): void;
}
export declare namespace UndoRedo {
    /**
     * Commands implemented by this plugin.
     */
    enum COMMAND {
        UNDO = "+undo",
        REDO = "+redo"
    }
    /**
     * This object encapsulates the state of an editable field.
     */
    class UndoState_ extends UndoRedoState {
        /**
         * This object encapsulates the state of an editable field.
         * @param fieldHashCode String the id of the field we're saving the content of.
         * @param content String the actual text we're saving.
         * @param cursorPosition CursorPosLite object for the cursor position in the field.
         * @param restore The function used to restore editable field state.
         */
        constructor(fieldHashCode: string, content: string, cursorPosition: UndoRedo.CursorPosition_ | null, restore: Function | null);
        private noStructuralTyping_closure_goog_editor_plugins_undoredo_UndoState_;
        /**
         * The hash code for the field whose content is being saved.
         */
        fieldHashCode: string;
        /**
         * Get the content to restore on undo.
         */
        getUndoContent(): string;
        /**
         * Get the content to restore on redo.
         */
        getRedoContent(): string | undefined;
        /**
         * Performs the undo operation represented by this state.
         */
        undo(): void;
        /**
         * Performs the redo operation represented by this state.
         */
        redo(): void;
        /**
         * Updates the undo portion of this state. Should only be used to update the
         * current state of an editable field, which is not yet on the undo stack after
         * an undo or redo operation. You should never be modifying states on the stack!
         * @param content The current content.
         * @param cursorPosition The current cursor position.
         */
        setUndoState(content: string, cursorPosition: UndoRedo.CursorPosition_ | null): void;
        /**
         * Adds redo information to this state. This method should be called before the
         * state is added onto the undo stack.
         * @param content The content to restore on a redo.
         * @param cursorPosition The cursor position to restore on a redo.
         */
        setRedoState(content: string, cursorPosition: UndoRedo.CursorPosition_ | null): void;
        /**
         * Checks if the *contents* of two
         * `UndoRedo.UndoState_`s are the same.  We don't
         * bother checking the cursor position (that's not something we'd want to save
         * anyway).
         * @param rhs The state to compare.
         * @return Whether the contents are the same.
         */
        equals(rhs: UndoRedoState | null): boolean;
    }
    /**
     * Stores the state of the selection in a way the survives DOM modifications
     * that don't modify the user-interactable content (e.g. making something bold
     * vs. typing a character).
     *
     * TODO(user): Completely get rid of this and use dom.SavedCaretRange.
     */
    class CursorPosition_ {
        /**
         * Stores the state of the selection in a way the survives DOM modifications
         * that don't modify the user-interactable content (e.g. making something bold
         * vs. typing a character).
         *
         * TODO(user): Completely get rid of this and use dom.SavedCaretRange.
         * @param field The field the selection is in.
         */
        constructor(field: Field | null);
        private noStructuralTyping_closure_goog_editor_plugins_undoredo_CursorPosition_;
        isValid(): boolean;
        toString(): string;
        /**
         * Makes the browser's selection match the cursor position.
         */
        select(): void;
    }
}

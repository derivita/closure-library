import { EventTarget } from '../events/eventtarget.js';
import * as log from '../log/log.js';
import type { DomHelper } from '../dom/dom.js';
import type { Field } from './field.js';
import type { BrowserEvent } from '../events/browserevent.js';
/**
 * Abstract API for trogedit plugins.
 */
export declare class PluginImpl extends EventTarget {
    /**
     * Abstract API for trogedit plugins.
     */
    constructor();
    private noStructuralTyping_closure_goog_editor_plugin_impl_PluginImpl;
    /**
     * The field object this plugin is attached to.
     */
    protected fieldObject: Field | null;
    /**
     * The logger for this plugin.
     */
    protected logger: log.Logger | null;
    getFieldDomHelper(): DomHelper | null;
    /**
     * Sets the field object for use with this plugin.
     * @return The editable field object.
     */
    protected getFieldObject(): Field | null;
    /**
     * Sets the field object for use with this plugin.
     * @param fieldObject The editable field object.
     */
    protected setFieldObject(fieldObject: Field | null): void;
    /**
     * Registers the field object for use with this plugin.
     * @param fieldObject The editable field object.
     */
    registerFieldObject(fieldObject: Field | null): void;
    /**
     * Unregisters and disables this plugin for the current field object.
     * @param fieldObj The field object. For single-field plugins, this parameter is ignored.
     */
    unregisterFieldObject(fieldObj: Field | null): void;
    /**
     * Enables this plugin for the specified, registered field object. A field
     * object should only be enabled when it is loaded.
     * @param fieldObject The field object.
     */
    enable(fieldObject: Field | null): void;
    /**
     * Disables this plugin for the specified, registered field object.
     * @param fieldObject The field object.
     */
    disable(fieldObject: Field | null): void;
    /**
     * Returns whether this plugin is enabled for the field object.
     * @param fieldObject The field object.
     * @return Whether this plugin is enabled for the field object.
     */
    isEnabled(fieldObject: Field | null): boolean;
    /**
     * Set if this plugin should automatically be disposed when the registered
     * field is disposed.
     * @param autoDispose Whether to autoDispose.
     */
    setAutoDispose(autoDispose: boolean): void;
    isAutoDispose(): boolean;
    activeOnUneditableFields(...args: any[]): boolean;
    /**
     *
     * @param command The command to check.
     * @return If true, field will not dispatch change events for commands of this type. This is useful for "seamless" plugins like dialogs and lorem ipsum.
     */
    isSilentCommand(a: string): boolean;
    disposeInternal(): void;
    getTrogClassId(): string;
    /**
     * A map from plugin operations to the names of the methods that
     * invoke those operations.
     */
    static OPCODE: object;
    /**
     * A set of op codes that run even on disabled plugins.
     */
    static IRREPRESSIBLE_OPS: object;
    /**
     * Handles keydown. It is run before handleKeyboardShortcut and if it returns
     * true handleKeyboardShortcut will not be called.
     * @param e The browser event.
     * @return Whether the event was handled and thus should *not* be propagated to other plugins or handleKeyboardShortcut.
     */
    handleKeyDown(e: BrowserEvent): boolean;
    /**
     * Handles keypress. It is run before handleKeyboardShortcut and if it returns
     * true handleKeyboardShortcut will not be called.
     * @param e The browser event.
     * @return Whether the event was handled and thus should *not* be propagated to other plugins or handleKeyboardShortcut.
     */
    handleKeyPress(e: BrowserEvent): boolean;
    /**
     * Handles keyup.
     * @param e The browser event.
     * @return Whether the event was handled and thus should *not* be propagated to other plugins.
     */
    handleKeyUp(e: BrowserEvent): boolean;
    /**
     * Handles selection change.
     * @param opt_e The browser event.
     * @param opt_target The node the selection changed to.
     * @return Whether the event was handled and thus should *not* be propagated to other plugins.
     */
    handleSelectionChange(opt_e?: BrowserEvent, opt_target?: Node): boolean;
    /**
     * Handles keyboard shortcuts.  Preferred to using handleKey* as it will use
     * the proper event based on browser and will be more performant. If
     * handleKeyPress/handleKeyDown returns true, this will not be called. If the
     * plugin handles the shortcut, it is responsible for dispatching appropriate
     * events (change, selection change at the time of this comment). If the plugin
     * calls execCommand on the editable field, then execCommand already takes care
     * of dispatching events.
     * NOTE: For performance reasons this is only called when any key is pressed
     * in conjunction with ctrl/meta keys OR when a small subset of keys (defined
     * in Field.POTENTIAL_SHORTCUT_KEYCODES_) are pressed without
     * ctrl/meta keys. We specifically don't invoke it when altKey is pressed since
     * alt key is used in many i18n UIs to enter certain characters.
     * @param e The browser event.
     * @param key The key pressed.
     * @param isModifierPressed Whether the ctrl/meta key was pressed or not.
     * @return Whether the event was handled and thus should *not* be propagated to other plugins. We also call preventDefault on the event if the return value is true.
     */
    handleKeyboardShortcut(e: BrowserEvent, key: string, isModifierPressed: boolean): boolean;
    /**
     * Handles execCommand. This default implementation handles dispatching
     * BEFORECHANGE, CHANGE, and SELECTIONCHANGE events, and calls
     * execCommandInternal to perform the actual command. Plugins that want to
     * do their own event dispatching should override execCommand, otherwise
     * it is preferred to only override execCommandInternal.
     *
     * This version of execCommand will only work for single field plugins.
     * Multi-field plugins must override execCommand.
     * @param command The command to execute.
     * @param var_args Any additional parameters needed to execute the command.
     * @return The result of the execCommand, if any.
     */
    execCommand(command: string, ...var_args: any[]): any;
    /**
     * Handles execCommand. This default implementation does nothing, and is
     * called by execCommand, which handles event dispatching. This method should
     * be overriden by plugins that don't need to do their own event dispatching.
     * If custom event dispatching is needed, execCommand shoul be overriden
     * instead.
     *
     * TODO(user): This pattern makes accurate typing impossible.
     * @param command `extends string` The command to execute.
     * @param var_args Any additional parameters needed to execute the command.
     * @return The result of the execCommand, if any.
     */
    protected execCommandInternal(command: any, ...var_args: any[]): any;
    /**
     * Gets the state of this command if this plugin serves that command.
     * @param command The command to check.
     * @return The value of the command.
     */
    queryCommandValue(command: string): any;
    /**
     * Prepares the given HTML for editing. Strips out content that should not
     * appear in an editor, and normalizes content as appropriate. The inverse
     * of cleanContentsHtml.
     *
     * This op is invoked even on disabled plugins.
     * @param originalHtml The original HTML.
     * @param styles A map of strings. If the plugin wants to add any styles to the field element, it should add them as key-value pairs to this object.
     * @return New HTML that's ok for editing.
     */
    prepareContentsHtml(originalHtml: string, styles: object | null): string;
    /**
     * Cleans the contents of the node passed to it. The node contents are modified
     * directly, and the modifications will subsequently be used, for operations
     * such as saving the innerHTML of the editor etc. Since the plugins act on
     * the DOM directly, this method can be very expensive.
     *
     * This op is invoked even on disabled plugins.
     * @param fieldCopy The copy of the editable field which needs to be cleaned up.
     */
    cleanContentsDom(fieldCopy: Element): void;
    /**
     * Cleans the html contents of Trogedit. Both cleanContentsDom and
     * and cleanContentsHtml will be called on contents extracted from Trogedit.
     * The inverse of prepareContentsHtml.
     *
     * This op is invoked even on disabled plugins.
     * @param originalHtml The trogedit HTML.
     * @return Cleaned-up HTML.
     */
    cleanContentsHtml(originalHtml: string): string;
    /**
     * Whether the string corresponds to a command this plugin handles.
     * @param command Command string to check.
     * @return Whether the plugin handles this type of command.
     */
    isSupportedCommand(command: string): boolean;
    /**
     * Saves the field's scroll position.  See b/7279077 for context.
     * Currently only does anything in Edge, since all other browsers
     * already seem to work correctly.
     * @return A function to restore the current scroll position.
     */
    protected saveScrollPosition(): () => any;
}
export declare namespace PluginImpl {
    /**
     * An enum of operations that plugins may support.
     */
    enum Op {
        KEYDOWN = 1,
        KEYPRESS = 2,
        KEYUP = 3,
        SELECTION = 4,
        SHORTCUT = 5,
        EXEC_COMMAND = 6,
        QUERY_COMMAND = 7,
        PREPARE_CONTENTS_HTML = 8,
        CLEAN_CONTENTS_HTML = 10,
        CLEAN_CONTENTS_DOM = 11
    }
}

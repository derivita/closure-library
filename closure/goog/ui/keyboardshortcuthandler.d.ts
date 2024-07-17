import { EventTarget } from '../events/eventtarget.js';
/**
 * Component for handling keyboard shortcuts. A shortcut is registered and bound
 * to a specific identifier. Once the shortcut is triggered an event is fired
 * with the identifier for the shortcut. This allows keyboard shortcuts to be
 * customized without modifying the code that listens for them.
 *
 * Supports keyboard shortcuts triggered by a single key, a stroke stroke (key
 * plus at least one modifier) and a sequence of keys or strokes.
 */
export declare class KeyboardShortcutHandler extends EventTarget {
    /**
     * Component for handling keyboard shortcuts. A shortcut is registered and bound
     * to a specific identifier. Once the shortcut is triggered an event is fired
     * with the identifier for the shortcut. This allows keyboard shortcuts to be
     * customized without modifying the code that listens for them.
     *
     * Supports keyboard shortcuts triggered by a single key, a stroke stroke (key
     * plus at least one modifier) and a sequence of keys or strokes.
     * @param keyTarget Event target that the key event listener is attached to, typically the applications root container.
     */
    constructor(keyTarget: EventTarget | EventTarget | null);
    private noStructuralTyping_closure_goog_ui_keyboardshortcuthandler_KeyboardShortcutHandler;
    /**
     * Maximum allowed delay, in milliseconds, allowed between the first and second
     * key in a key sequence.
     */
    static MAX_KEY_SEQUENCE_DELAY: number;
    /**
     * Static method for getting the key code for a given key.
     * @param name Name of key.
     * @return The key code.
     */
    static getKeyCode(name: string): number;
    /**
     * Sets whether to always prevent the default action when a shortcut event is
     * fired. If false, the default action is prevented only if preventDefault is
     * called on either of the corresponding SHORTCUT_TRIGGERED or SHORTCUT_PREFIX
     * events. If true, the default action is prevented whenever a shortcut event
     * is fired. The default value is true.
     * @param alwaysPreventDefault Whether to always call preventDefault.
     */
    setAlwaysPreventDefault(alwaysPreventDefault: boolean): void;
    /**
     * Returns whether the default action will always be prevented when a shortcut
     * event is fired. The default value is true.
     * @return Whether preventDefault will always be called.
     */
    getAlwaysPreventDefault(): boolean;
    /**
     * Sets whether to always stop propagation for the event when fired. If false,
     * the propagation is stopped only if stopPropagation is called on either of the
     * corresponding SHORT_CUT_TRIGGERED or SHORTCUT_PREFIX events. If true, the
     * event is prevented from propagating beyond its target whenever it is fired.
     * The default value is false.
     * @param alwaysStopPropagation Whether to always call stopPropagation.
     */
    setAlwaysStopPropagation(alwaysStopPropagation: boolean): void;
    /**
     * Returns whether the event will always be stopped from propagating beyond its
     * target when a shortcut event is fired. The default value is false.
     * @return Whether stopPropagation will always be called.
     */
    getAlwaysStopPropagation(): boolean;
    /**
     * Sets whether to treat all shortcuts (including modifier shortcuts) as if the
     * keys had been passed to the setGlobalKeys function.
     * @param allShortcutsGlobal Whether to treat all shortcuts as global.
     */
    setAllShortcutsAreGlobal(allShortcutsGlobal: boolean): void;
    /**
     * Returns whether all shortcuts (including modifier shortcuts) are treated as
     * if the keys had been passed to the setGlobalKeys function.
     * @return Whether all shortcuts are treated as globals.
     */
    getAllShortcutsAreGlobal(): boolean;
    /**
     * Sets whether to treat shortcuts with modifiers as if the keys had been
     * passed to the setGlobalKeys function.  Ignored if you have called
     * setAllShortcutsAreGlobal(true).  Applies only to form elements (not
     * content-editable).
     * @param modifierShortcutsGlobal Whether to treat shortcuts with modifiers as global.
     */
    setModifierShortcutsAreGlobal(modifierShortcutsGlobal: boolean): void;
    /**
     * Returns whether shortcuts with modifiers are treated as if the keys had been
     * passed to the setGlobalKeys function.  Ignored if you have called
     * setAllShortcutsAreGlobal(true).  Applies only to form elements (not
     * content-editable).
     * @return Whether shortcuts with modifiers are treated as globals.
     */
    getModifierShortcutsAreGlobal(): boolean;
    /**
     * Sets whether to treat space key as a shortcut when the focused element is a
     * checkbox, radiobutton or button.
     * @param allowSpaceKeyOnButtons Whether to treat space key as a shortcut when the focused element is a checkbox, radiobutton or button.
     */
    setAllowSpaceKeyOnButtons(allowSpaceKeyOnButtons: boolean): void;
    /**
     * Registers a keyboard shortcut.
     * @param identifier Identifier for the task performed by the keyboard combination. Multiple shortcuts can be provided for the same task by specifying the same identifier.
     * @param var_args See below. param {number} keyCode Numeric code for key param {number=} opt_modifiers Bitmap indicating required modifier keys. KeyboardShortcutHandler.Modifiers.SHIFT, CTRL, ALT, or META. The last two parameters can be repeated any number of times to create a shortcut using a sequence of strokes. Instead of varargs the second parameter could also be an array where each element would be regarded as a parameter. A string representation of the shortcut can be supplied instead of the last two parameters. In that case the method only takes two arguments, the identifier and the string. Examples: up              registerShortcut(str, KeyCodes.UP) Ctrl+g          registerShortcut(str, G_KEYCODE, CTRL) Ctrl+Shift+g    registerShortcut(str, G_KEYCODE, CTRL | SHIFT) Ctrl+g a        registerShortcut(str, G_KEYCODE, CTRL, A_KEYCODE) Ctrl+g Shift+a  registerShortcut(str, G_KEYCODE, CTRL, A_KEYCODE, SHIFT) Examples using string representation for shortcuts: up              registerShortcut(str, 'up') Ctrl+g          registerShortcut(str, 'ctrl+g') Ctrl+Shift+g    registerShortcut(str, 'ctrl+shift+g') Ctrl+g a        registerShortcut(str, 'ctrl+g a') Ctrl+g Shift+a  registerShortcut(str, 'ctrl+g shift+a')
     */
    registerShortcut(identifier: string, ...var_args: (number | string | number[] | null)[]): void;
    /**
     * Unregisters a keyboard shortcut by keyCode and modifiers or string
     * representation of sequence.
     *
     * param {number} keyCode Numeric code for key
     * param {number=} opt_modifiers Bitmap indicating required modifier keys.
     * KeyboardShortcutHandler.Modifiers.SHIFT, CTRL, ALT,
     * or META.
     *
     * The two parameters can be repeated any number of times to create a shortcut
     * using a sequence of strokes.
     *
     * A string representation of the shortcut can be supplied instead see
     * {@link #registerShortcut} for syntax. In that case the method only takes one
     * argument.
     * @param var_args String representation, or array or list of alternating key codes and modifiers.
     */
    unregisterShortcut(...var_args: (number | string | number[] | null)[]): void;
    /**
     * Verifies if a particular keyboard shortcut is registered already. It has
     * the same interface as the unregistering of shortcuts.
     *
     * param {number} keyCode Numeric code for key
     * param {number=} opt_modifiers Bitmap indicating required modifier keys.
     * KeyboardShortcutHandler.Modifiers.SHIFT, CTRL, ALT,
     * or META.
     *
     * The two parameters can be repeated any number of times to create a shortcut
     * using a sequence of strokes.
     *
     * A string representation of the shortcut can be supplied instead see
     * {@link #registerShortcut} for syntax. In that case the method only takes one
     * argument.
     * @param var_args String representation, or array or list of alternating key codes and modifiers.
     * @return Whether the specified keyboard shortcut is registered.
     */
    isShortcutRegistered(...var_args: (number | string | number[] | null)[]): boolean;
    /**
     * Unregisters all keyboard shortcuts.
     */
    unregisterAll(): void;
    /**
     * Sets the global keys; keys that are safe to always regarded as shortcuts,
     * even if entered in a textarea or input field.
     * @param keys List of keys.
     */
    setGlobalKeys(keys: number[] | null): void;
    getGlobalKeys(): string[];
    disposeInternal(): void;
    /**
     * Returns event type for a specific shortcut.
     * @param identifier Identifier for the shortcut task.
     * @return The event type.
     */
    getEventType(identifier: string): string;
    /**
     * Builds stroke array from string representation of shortcut.
     * @param s String representation of shortcut.
     * @return The stroke array.  A null keyCode means no non-modifier key was part of the stroke.
     */
    static parseStringShortcut(s: string): {
        'key': string | null;
        'keyCode': number | null;
        'modifiers': number;
    }[];
    /**
     * Adds a key event listener that triggers {@link #handleKeyDown_} when keys
     * are pressed.
     * @param keyTarget Event target that the event listener should be attached to.
     */
    protected initializeKeyListener(keyTarget: EventTarget | EventTarget | null): void;
    /**
     * Removes the listener that was added by link {@link #initializeKeyListener}.
     */
    protected clearKeyListener(): void;
}
export declare namespace KeyboardShortcutHandler {
    /**
     * A node in a keyboard shortcut sequence tree. A node is either:
     * 1. A terminal node with a non-nullable shortcut string which is the
     * identifier for the shortcut triggered by traversing the tree to that node.
     * 2. An internal node with a null shortcut string and a
     * `KeyboardShortcutHandler.SequenceTree_` representing the
     * continued stroke sequences from this node.
     * For clarity, the static factory methods for creating internal and terminal
     * nodes below should be used rather than using this constructor directly.
     */
    class SequenceNode_ {
        /**
         * A node in a keyboard shortcut sequence tree. A node is either:
         * 1. A terminal node with a non-nullable shortcut string which is the
         * identifier for the shortcut triggered by traversing the tree to that node.
         * 2. An internal node with a null shortcut string and a
         * `KeyboardShortcutHandler.SequenceTree_` representing the
         * continued stroke sequences from this node.
         * For clarity, the static factory methods for creating internal and terminal
         * nodes below should be used rather than using this constructor directly.
         * @param opt_shortcut The shortcut identifier, for terminal nodes.
         */
        constructor(opt_shortcut?: string);
        private noStructuralTyping_closure_goog_ui_keyboardshortcuthandler_SequenceNode_;
        shortcut: string | null;
        next: KeyboardShortcutHandler.SequenceTree_ | null;
    }
    /**
     * A map of strokes (represented as strings) to the nodes reached by those
     * strokes.
     */
    type SequenceTree_ = {
        [key: string]: KeyboardShortcutHandler.SequenceNode_ | null;
    } | null;
    /**
     * Bit values for modifier keys.
     */
    enum Modifiers {
        NONE = 0,
        SHIFT = 1,
        CTRL = 2,
        ALT = 4,
        META = 8
    }
    /**
     * Events.
     */
    enum EventType {
        SHORTCUT_TRIGGERED = "shortcut",
        SHORTCUT_PREFIX = "shortcut_"
    }
}

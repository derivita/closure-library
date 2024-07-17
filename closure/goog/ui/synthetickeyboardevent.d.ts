import { Event } from '../events/event.js';
/**
 * Synthetic keyboard event that can be handled by `KeyboardShortcutHandler`.
 *
 * Prefer using the available `createKeyUp`, `createKeyDown`, `createKeyPress`
 * helpers over using this constructor.
 */
export declare class SyntheticKeyboardEvent extends Event {
    /**
     * Synthetic keyboard event that can be handled by `KeyboardShortcutHandler`.
     *
     * Prefer using the available `createKeyUp`, `createKeyDown`, `createKeyPress`
     * helpers over using this constructor.
     */
    constructor(type: SyntheticKeyboardEvent.Type, keyCode: number, shiftKey: boolean, altKey: boolean, ctrlKey: boolean, metaKey: boolean, target: Node, preventDefaultFn: any, stopPropagationFn: any);
    private noStructuralTyping_closure_goog_ui_synthetickeyboardevent_SyntheticKeyboardEvent;
    /**
     * Creates a synthetic keydown event.
     */
    static createKeyDown(keyCode: number, shiftKey: boolean, altKey: boolean, ctrlKey: boolean, metaKey: boolean, target: Node, preventDefaultFn: any, stopPropagationFn: any): SyntheticKeyboardEvent;
    /**
     * Creates a synthetic keyup event.
     */
    static createKeyUp(keyCode: number, shiftKey: boolean, altKey: boolean, ctrlKey: boolean, metaKey: boolean, target: Node, preventDefaultFn: any, stopPropagationFn: any): SyntheticKeyboardEvent;
    /**
     * Creates a synthetic keypress event.
     */
    static createKeyPress(keyCode: number, shiftKey: boolean, altKey: boolean, ctrlKey: boolean, metaKey: boolean, target: Node, preventDefaultFn: any, stopPropagationFn: any): SyntheticKeyboardEvent;
}
export declare namespace SyntheticKeyboardEvent {
    /**
     * Synthetic event types.
     */
    enum Type {
        KEYDOWN = "synthetic-keydown",
        KEYUP = "synthetic-keyup",
        KEYPRESS = "synthetic-keypress"
    }
}

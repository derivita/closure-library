import { Event } from '../events/event.js';
import { EventTarget } from '../events/eventtarget.js';
/**
 * Object representing a keyboard shortcut event.
 */
export declare class KeyboardShortcutEvent extends Event {
    /**
     * Object representing a keyboard shortcut event.
     * @param type Event type.
     * @param identifier Task identifier for the triggered shortcut.
     * @param target Target the original key press event originated from.
     */
    constructor(type: string, identifier: string, target: Node | EventTarget | null);
    private noStructuralTyping_closure_goog_ui_keyboardshortcutevent_KeyboardShortcutEvent;
    /**
     * Task identifier for the triggered shortcut
     */
    identifier: string;
}

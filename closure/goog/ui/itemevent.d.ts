import { Event } from '../events/event.js';
/**
 * Generic ui event class for events that take a single item like a menu click
 * event.
 */
export declare class ItemEvent extends Event {
    /**
     * Generic ui event class for events that take a single item like a menu click
     * event.
     * @param type Event Type.
     * @param target Reference to the object that is the target of this event.
     * @param item The item that was clicked.
     */
    constructor(type: string, target: object | null, item: object | null);
    private noStructuralTyping_closure_goog_ui_itemevent_ItemEvent;
    /**
     * Item for the event. The type of this object is specific to the type
     * of event. For a menu, it would be the menu item that was clicked. For a
     * listbox selection, it would be the listitem that was selected.
     */
    item: object | null;
}

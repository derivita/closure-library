import { BrowserEvent } from './browserevent.js';
import { EventTarget } from './eventtarget.js';
/**
 * A wrapper around an element that you want to listen to ACTION events on.
 */
export declare class ActionHandler extends EventTarget {
    /**
     * A wrapper around an element that you want to listen to ACTION events on.
     * @param element The element or document to listen on.
     */
    constructor(element: Element | Document | null);
    private noStructuralTyping_closure_goog_events_actionhandler_ActionHandler;
    disposeInternal(): void;
}
export declare namespace ActionHandler {
    /**
     * Enum type for the events fired by the action handler
     */
    enum EventType {
        ACTION = "action",
        BEFOREACTION = "beforeaction"
    }
}
/**
 * This class is used for the ActionHandler.EventType.ACTION event.
 */
export declare class ActionEvent extends BrowserEvent {
    /**
     * This class is used for the ActionHandler.EventType.ACTION event.
     * @param browserEvent Browser event object.
     */
    constructor(browserEvent: BrowserEvent);
    private noStructuralTyping_closure_goog_events_actionhandler_ActionEvent;
}
/**
 * This class is used for the ActionHandler.EventType.BEFOREACTION
 * event. BEFOREACTION gives a chance to the application so the keyboard focus
 * can be restored back, if required.
 */
export declare class BeforeActionEvent extends BrowserEvent {
    /**
     * This class is used for the ActionHandler.EventType.BEFOREACTION
     * event. BEFOREACTION gives a chance to the application so the keyboard focus
     * can be restored back, if required.
     * @param browserEvent Browser event object.
     */
    constructor(browserEvent: BrowserEvent);
    private noStructuralTyping_closure_goog_events_actionhandler_BeforeActionEvent;
}

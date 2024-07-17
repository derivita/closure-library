import { BrowserEvent } from './browserevent.js';
/**
 * A common class for wheel events. This is used with the WheelHandler.
 */
export declare class WheelEvent extends BrowserEvent {
    /**
     * A common class for wheel events. This is used with the WheelHandler.
     * @param browserEvent Browser event object.
     * @param deltaMode The delta mode units of the wheel event.
     * @param deltaX The number of delta units the user in the X axis.
     * @param deltaY The number of delta units the user in the Y axis.
     * @param deltaZ The number of delta units the user in the Z axis.
     */
    constructor(browserEvent: Event | null, deltaMode: WheelEvent.DeltaMode | null, deltaX: number, deltaY: number, deltaZ: number);
    private noStructuralTyping_closure_goog_events_wheelevent_WheelEvent;
    type: WheelEvent.EventType | null;
    /**
     * An enum corresponding to the units of this event.
     */
    deltaMode: WheelEvent.DeltaMode | null;
    /**
     * The number of delta units in the X axis.
     */
    deltaX: number;
    /**
     * The number of delta units in the Y axis.
     */
    deltaY: number;
    /**
     * The number of delta units in the Z axis.
     */
    deltaZ: number;
    /**
     * The number of delta pixels in the X axis. Code that doesn't want to handle
     * different deltaMode units can just look here.
     */
    pixelDeltaX: number;
    /**
     * The number of pixels in the Y axis. Code that doesn't want to
     * handle different deltaMode units can just look here.
     */
    pixelDeltaY: number;
    /**
     * The number of pixels scrolled in the Z axis. Code that doesn't want to
     * handle different deltaMode units can just look here.
     */
    pixelDeltaZ: number;
}
export declare namespace WheelEvent {
    /**
     * Enum type for the events fired by the wheel handler.
     */
    enum EventType {
        WHEEL = "wheel"
    }
    /**
     * Units for the deltas in a WheelEvent.
     */
    enum DeltaMode {
        PIXEL = 0,
        LINE = 1,
        PAGE = 2
    }
}

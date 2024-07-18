/**
 * An interface for programmatic transition. Must extend
 * `goog.events.EventTarget`.
 */
export interface Transition {
    play(): any;
    stop(): any;
}
export declare namespace Transition {
    /**
     * Transition event types.
     */
    enum EventType {
        PLAY = "play",
        BEGIN = "begin",
        RESUME = "resume",
        END = "end",
        STOP = "stop",
        FINISH = "finish",
        PAUSE = "pause"
    }
}

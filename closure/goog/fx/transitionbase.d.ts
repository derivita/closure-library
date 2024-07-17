import { EventTarget } from '../events/eventtarget.js';
import { Transition } from './transition.js';
/**
 * Constructor for a transition object.
 */
export declare class TransitionBase extends EventTarget implements Transition {
    /**
     * Constructor for a transition object.
     */
    constructor();
    private noStructuralTyping_closure_goog_fx_transitionbase_TransitionBase;
    /**
     * Timestamp for when the animation was started.
     */
    protected startTime: number | null;
    /**
     * Timestamp for when the animation finished or was stopped.
     */
    protected endTime: number | null;
    /**
     * Plays the animation.
     * @param opt_restart Optional parameter to restart the animation.
     * @return True iff the animation was started.
     */
    play(a?: boolean): boolean;
    /**
     * Pauses the animation.
     */
    pause(): void;
    /**
     * Returns the current state of the animation.
     * @return State of the animation.
     */
    getStateInternal(): TransitionBase.State | null;
    /**
     * Sets the current state of the animation to playing.
     */
    protected setStatePlaying(): void;
    /**
     * Sets the current state of the animation to paused.
     */
    protected setStatePaused(): void;
    /**
     * Sets the current state of the animation to stopped.
     */
    protected setStateStopped(): void;
    isPlaying(): boolean;
    isPaused(): boolean;
    isStopped(): boolean;
    /**
     * Dispatches the BEGIN event. Sub classes should override this instead
     * of listening to the event, and call this instead of dispatching the event.
     */
    protected onBegin(): void;
    /**
     * Dispatches the END event. Sub classes should override this instead
     * of listening to the event, and call this instead of dispatching the event.
     */
    protected onEnd(): void;
    /**
     * Dispatches the FINISH event. Sub classes should override this instead
     * of listening to the event, and call this instead of dispatching the event.
     */
    protected onFinish(): void;
    /**
     * Dispatches the PAUSE event. Sub classes should override this instead
     * of listening to the event, and call this instead of dispatching the event.
     */
    protected onPause(): void;
    /**
     * Dispatches the PLAY event. Sub classes should override this instead
     * of listening to the event, and call this instead of dispatching the event.
     */
    protected onPlay(): void;
    /**
     * Dispatches the RESUME event. Sub classes should override this instead
     * of listening to the event, and call this instead of dispatching the event.
     */
    protected onResume(): void;
    /**
     * Dispatches the STOP event. Sub classes should override this instead
     * of listening to the event, and call this instead of dispatching the event.
     */
    protected onStop(): void;
    /**
     * Dispatches an event object for the current animation.
     * @param type Event type that will be dispatched.
     */
    protected dispatchAnimationEvent(type: string): void;
}
export declare namespace TransitionBase {
    /**
     * Enum for the possible states of an animation.
     */
    type State = number;
    const State: {
        STOPPED: number;
        PAUSED: number;
        PLAYING: number;
    };
}

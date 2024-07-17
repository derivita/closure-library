import { Event } from '../events/event.js';
import { Transition } from './transition.js';
import { TransitionBase } from './transitionbase.js';
import { Animated } from './anim/anim.js';
/**
 * Constructor for an animation object.
 */
export declare class Animation extends TransitionBase implements Animated, Transition {
    /**
     * Constructor for an animation object.
     * @param start Array for start coordinates.
     * @param end Array for end coordinates.
     * @param duration Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(start: number[] | null, end: number[] | null, duration: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_animation_Animation;
    /**
     * Start point.
     */
    protected startPoint: number[] | null;
    /**
     * End point.
     */
    protected endPoint: number[] | null;
    /**
     * Duration of animation in milliseconds.
     */
    protected duration: number;
    /**
     * Current coordinate for animation.
     */
    protected coords: number[] | null;
    /**
     * Percent of the way through the animation.
     */
    protected progress: number;
    /**
     * Timestamp for when last frame was run.
     */
    protected lastFrame: number | null;
    getDuration(): number;
    /**
     * Sets whether the animation should use "right" rather than "left" to position
     * elements.  This is a temporary flag to allow clients to transition
     * to the new component at their convenience.  At some point "right" will be
     * used for RTL elements by default.
     * @param useRightPositioningForRtl True if "right" should be used for positioning, false if "left" should be used for positioning.
     */
    enableRightPositioningForRtl(useRightPositioningForRtl: boolean): void;
    /**
     * Whether the animation should use "right" rather than "left" to position
     * elements.  This is a temporary flag to allow clients to transition
     * to the new component at their convenience.  At some point "right" will be
     * used for RTL elements by default.
     * @return True if "right" should be used for positioning, false if "left" should be used for positioning.
     */
    isRightPositioningForRtlEnabled(): boolean;
    static TIMEOUT: number;
    /**
     *
     * @param animationWindow The window in which to animate elements.
     */
    static setAnimationWindow(animationWindow: Window | null): void;
    /**
     * Starts or resumes an animation.
     * @param opt_restart Whether to restart the animation from the beginning if it has been paused.
     * @return Whether animation was started.
     */
    play(opt_restart?: boolean): boolean;
    /**
     * Stops the animation.
     * @param opt_gotoEnd If true the animation will move to the end coords.
     */
    stop(opt_gotoEnd?: boolean): any;
    /**
     * Pauses the animation (iff it's playing).
     */
    pause(): void;
    getProgress(): number;
    /**
     * Sets the progress of the animation.
     * @param progress The new progress of the animation.
     */
    setProgress(progress: number): void;
    /**
     * Disposes of the animation.  Stops an animation, fires a 'destroy' event and
     * then removes all the event handlers to clean up memory.
     */
    disposeInternal(): void;
    /**
     * Stops an animation, fires a 'destroy' event and then removes all the event
     * handlers to clean up memory.
     */
    destroy(): void;
    onAnimationFrame(now: any): any;
    /**
     * Handles the actual iteration of the animation in a timeout
     * @param now The current time.
     */
    cycle(now: number): void;
    /**
     * Dispatches the ANIMATE event. Sub classes should override this instead
     * of listening to the event.
     */
    protected onAnimate(): void;
    /**
     * Dispatches the DESTROY event. Sub classes should override this instead
     * of listening to the event.
     */
    protected onDestroy(): void;
    dispatchAnimationEvent(type: any): void;
}
export declare namespace Animation {
    /**
     * Events fired by the animation.
     */
    type EventType = string;
    const EventType: {
        PLAY: Transition.EventType;
        BEGIN: Transition.EventType;
        RESUME: Transition.EventType;
        END: Transition.EventType;
        STOP: Transition.EventType;
        FINISH: Transition.EventType;
        PAUSE: Transition.EventType;
        ANIMATE: string;
        DESTROY: string;
    };
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
/**
 * Class for an animation event object.
 */
export declare class AnimationEvent extends Event {
    /**
     * Class for an animation event object.
     * @param type Event type.
     * @param anim An animation object.
     */
    constructor(type: string, anim: Animation | null);
    private noStructuralTyping_closure_goog_fx_animation_AnimationEvent;
    /**
     * The current coordinates.
     */
    coords: number[] | null;
    /**
     * The x coordinate.
     */
    x: number;
    /**
     * The y coordinate.
     */
    y: number;
    /**
     * The z coordinate.
     */
    z: number;
    /**
     * The current duration.
     */
    duration: number;
    /**
     * The current progress.
     */
    progress: number;
    /**
     * Frames per second so far.
     */
    fps: any;
    /**
     * The state of the animation.
     */
    state: number;
    /**
     * The animation object.
     */
    anim: Animation | null;
    /**
     * Returns the coordinates as integers (rounded to nearest integer).
     * @return An array of the coordinates rounded to the nearest integer.
     */
    coordsAsInts(): number[];
}

import { Animation } from './animation.js';
import { TransitionBase } from './transitionbase.js';
import type { Event } from '../events/event.js';
/**
 * Constructor for AnimationQueue object.
 */
export declare class AnimationQueue extends TransitionBase {
    /**
     * Constructor for AnimationQueue object.
     */
    constructor();
    private noStructuralTyping_closure_goog_fx_animationqueue_AnimationQueue;
    /**
     * An array holding all animations in the queue.
     */
    protected queue: (TransitionBase | null)[] | null;
    /**
     * Pushes an Animation to the end of the queue.
     * @param animation The animation to add to the queue.
     */
    add(animation: TransitionBase | null): void;
    /**
     * Removes an Animation from the queue.
     * @param animation The animation to remove.
     */
    remove(animation: Animation | null): void;
    /**
     * Handles the event that an animation has finished.
     * @param e The finishing event.
     */
    protected onAnimationFinish(e: Event | null): void;
    /**
     * Disposes of the animations.
     */
    disposeInternal(): void;
}
/**
 * Constructor for AnimationParallelQueue object.
 */
export declare class AnimationParallelQueue extends AnimationQueue {
    /**
     * Constructor for AnimationParallelQueue object.
     */
    constructor();
    private noStructuralTyping_closure_goog_fx_animationqueue_AnimationParallelQueue;
    play(opt_restart: any): boolean;
    pause(): void;
    stop(opt_gotoEnd: any): any;
    onAnimationFinish(e: any): void;
}
/**
 * Constructor for AnimationSerialQueue object.
 */
export declare class AnimationSerialQueue extends AnimationQueue {
    /**
     * Constructor for AnimationSerialQueue object.
     */
    constructor();
    private noStructuralTyping_closure_goog_fx_animationqueue_AnimationSerialQueue;
    play(opt_restart: any): boolean;
    pause(): void;
    stop(opt_gotoEnd: any): any;
    onAnimationFinish(e: any): void;
}

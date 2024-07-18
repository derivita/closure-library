/**
 * An interface for programatically animated objects. I.e. rendered in
 * javascript frame by frame.
 */
export interface Animated {
    /**
     * Function called when a frame is requested for the animation.
     * @param now Current time in milliseconds.
     */
    onAnimationFrame(now: number): any;
}
/**
 * Default wait timeout for animations (in milliseconds).  Only used for timed
 * animation, which uses a timer (setTimeout) to schedule animation.
 */
export declare var TIMEOUT: number;
/**
 * A map of animations which should be cycled on the global timer.
 */
export declare var activeAnimations_: {
    [key: number]: Animated | null;
};
export declare function getAnimationDelay_(): void;
/**
 * Registers an animation to be cycled on the global timer.
 * @param animation The animation to register.
 */
export declare function registerAnimation(animation: Animated | null): void;
/**
 * Removes an animation from the list of animations which are cycled on the
 * global timer.
 * @param animation The animation to unregister.
 */
export declare function unregisterAnimation(animation: Animated | null): void;
/**
 * Tears down this module. Useful for testing.
 */
export declare function tearDown(): void;
/**
 * Registers an animation window. This allows usage of the timing control API
 * for animations. Note that this window must be visible, as non-visible
 * windows can potentially stop animating. This window does not necessarily
 * need to be the window inside which animation occurs, but must remain visible.
 * See: https://developer.mozilla.org/en/DOM/window.mozRequestAnimationFrame.
 * @param animationWindow The window in which to animate elements.
 */
export declare function setAnimationWindow(animationWindow: Window | null): void;
/**
 * Cycles through all registered animations.
 * @param now Current time in milliseconds.
 */
export declare function cycleAnimations_(now: number): void;

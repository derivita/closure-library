import { Transition } from './transition.js';
/**
 * Creates a transition to fade the element.
 * @param element The element to fade.
 * @param duration Duration in seconds.
 * @param timing The CSS3 timing function.
 * @param startOpacity Starting opacity.
 * @param endOpacity Ending opacity.
 * @return The transition object.
 */
export declare function fade(element: Element | null, duration: number, timing: string, startOpacity: number, endOpacity: number): Transition;
/**
 * Creates a transition to fade in the element.
 * @param element The element to fade in.
 * @param duration Duration in seconds.
 * @return The transition object.
 */
export declare function fadeIn(element: Element | null, duration: number): Transition;
/**
 * Creates a transition to fade out the element.
 * @param element The element to fade out.
 * @param duration Duration in seconds.
 * @return The transition object.
 */
export declare function fadeOut(element: Element | null, duration: number): Transition;

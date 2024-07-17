import { TransitionBase } from '../transitionbase.js';
import * as transition from '../../style/transition.js';
/**
 * A class to handle targeted CSS3 transition. This class
 * handles common features required for targeted CSS3 transition.
 *
 * Browser that does not support CSS3 transition will still receive all
 * the events fired by the transition object, but will not have any transition
 * played. If the browser supports the final state as set in setFinalState
 * method, the element will ends in the final state.
 *
 * Transitioning multiple properties with the same setting is possible
 * by setting Css3Property's property to 'all'. Performing multiple
 * transitions can be done via setting multiple initialStyle,
 * finalStyle and transitions. Css3Property's delay can be used to
 * delay one of the transition. Here is an example for a transition
 * that expands on the width and then followed by the height:
 *
 * <pre>
 * var animation = new Transition(
 * element,
 * duration,
 * {width: 10px, height: 10px},
 * {width: 100px, height: 100px},
 * [
 * {property: width, duration: 1, timing: 'ease-in', delay: 0},
 * {property: height, duration: 1, timing: 'ease-in', delay: 1}
 * ]
 * );
 * </pre>
 */
export declare class Transition extends TransitionBase {
    /**
     * A class to handle targeted CSS3 transition. This class
     * handles common features required for targeted CSS3 transition.
     *
     * Browser that does not support CSS3 transition will still receive all
     * the events fired by the transition object, but will not have any transition
     * played. If the browser supports the final state as set in setFinalState
     * method, the element will ends in the final state.
     *
     * Transitioning multiple properties with the same setting is possible
     * by setting Css3Property's property to 'all'. Performing multiple
     * transitions can be done via setting multiple initialStyle,
     * finalStyle and transitions. Css3Property's delay can be used to
     * delay one of the transition. Here is an example for a transition
     * that expands on the width and then followed by the height:
     *
     * <pre>
     * var animation = new Transition(
     * element,
     * duration,
     * {width: 10px, height: 10px},
     * {width: 100px, height: 100px},
     * [
     * {property: width, duration: 1, timing: 'ease-in', delay: 0},
     * {property: height, duration: 1, timing: 'ease-in', delay: 1}
     * ]
     * );
     * </pre>
     * @param element The element to be transitioned.
     * @param duration The duration of the transition in seconds. This should be the longest of all transitions, including any delay.
     * @param initialStyle Initial style properties of the element before animating. Set using `style.setStyle`.
     * @param finalStyle Final style properties of the element after animating. Set using `style.setStyle`.
     * @param transitions A single CSS3 transition property or an array of it.
     */
    constructor(element: Element | null, duration: number, initialStyle: object | null, finalStyle: object | null, transitions: transition.Css3Property | (transition.Css3Property | null)[] | null);
    private noStructuralTyping_closure_goog_fx_css3_transition_Transition;
    play(): boolean;
    stop(): any;
    disposeInternal(): void;
    /**
     * Pausing CSS3 Transitions in not supported.
     */
    pause(): void;
}

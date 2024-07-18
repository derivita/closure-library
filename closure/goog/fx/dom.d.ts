import { Animation } from './animation.js';
import type { EventHandler } from '../events/eventhandler.js';
/**
 * Abstract class that provides reusable functionality for predefined animations
 * that manipulate a single DOM element
 */
export declare class PredefinedEffect extends Animation {
    /**
     * Abstract class that provides reusable functionality for predefined animations
     * that manipulate a single DOM element
     * @param element Dom Node to be used in the animation.
     * @param start Array for start coordinates.
     * @param end Array for end coordinates.
     * @param time Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(element: Element | null, start: number[] | null, end: number[] | null, time: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_dom_PredefinedEffect;
    /**
     * DOM Node that will be used in the animation
     */
    element: Element | null;
    /**
     * Called to update the style of the element.
     */
    protected updateStyle(): void;
    /**
     * Whether the DOM element being manipulated is rendered right-to-left.
     * @return True if the DOM element is rendered right-to-left, false otherwise.
     */
    isRightToLeft(): boolean;
    onAnimate(): void;
    onEnd(): void;
    onBegin(): void;
}
/**
 * Creates an animation object that will slide an element from A to B.  (This
 * in effect automatically sets up the onanimate event for an Animation object)
 *
 * Start and End should be 2 dimensional arrays
 */
export declare class Slide extends PredefinedEffect {
    /**
     * Creates an animation object that will slide an element from A to B.  (This
     * in effect automatically sets up the onanimate event for an Animation object)
     *
     * Start and End should be 2 dimensional arrays
     * @param element Dom Node to be used in the animation.
     * @param start 2D array for start coordinates (X, Y).
     * @param end 2D array for end coordinates (X, Y).
     * @param time Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(element: Element | null, start: number[] | null, end: number[] | null, time: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_dom_Slide;
    updateStyle(): void;
}
/**
 * Slides an element from its current position.
 */
export declare class SlideFrom extends Slide {
    /**
     * Slides an element from its current position.
     * @param element DOM node to be used in the animation.
     * @param end 2D array for end coordinates (X, Y).
     * @param time Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(element: Element | null, end: number[] | null, time: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_dom_SlideFrom;
    startPoint: number[] | null;
    onBegin(): void;
}
/**
 * Creates an animation object that will slide an element into its final size.
 * Requires that the element is absolutely positioned.
 */
export declare class Swipe extends PredefinedEffect {
    /**
     * Creates an animation object that will slide an element into its final size.
     * Requires that the element is absolutely positioned.
     * @param element Dom Node to be used in the animation.
     * @param start 2D array for start size (W, H).
     * @param end 2D array for end size (W, H).
     * @param time Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(element: Element | null, start: number[] | null, end: number[] | null, time: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_dom_Swipe;
    /**
     * Animation event handler that will resize an element by setting its width,
     * height and clipping.
     */
    updateStyle(): void;
}
/**
 * Creates an animation object that will scroll an element from A to B.
 *
 * Start and End should be 2 dimensional arrays
 */
export declare class Scroll extends PredefinedEffect {
    /**
     * Creates an animation object that will scroll an element from A to B.
     *
     * Start and End should be 2 dimensional arrays
     * @param element Dom Node to be used in the animation.
     * @param start 2D array for start scroll left and top.
     * @param end 2D array for end scroll left and top.
     * @param time Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(element: Element | null, start: number[] | null, end: number[] | null, time: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_dom_Scroll;
    /**
     * Animation event handler that will set the scroll position of an element.
     */
    updateStyle(): void;
}
/**
 * Creates an animation object that will resize an element between two widths
 * and heights.
 *
 * Start and End should be 2 dimensional arrays
 */
export declare class Resize extends PredefinedEffect {
    /**
     * Creates an animation object that will resize an element between two widths
     * and heights.
     *
     * Start and End should be 2 dimensional arrays
     * @param element Dom Node to be used in the animation.
     * @param start 2D array for start width and height.
     * @param end 2D array for end width and height.
     * @param time Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(element: Element | null, start: number[] | null, end: number[] | null, time: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_dom_Resize;
    /**
     * Animation event handler that will resize an element by setting its width and
     * height.
     */
    updateStyle(): void;
}
/**
 * Creates an animation object that will resize an element between two widths
 *
 * Start and End should be numbers
 */
export declare class ResizeWidth extends PredefinedEffect {
    /**
     * Creates an animation object that will resize an element between two widths
     *
     * Start and End should be numbers
     * @param element Dom Node to be used in the animation.
     * @param start Start width.
     * @param end End width.
     * @param time Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(element: Element | null, start: number, end: number, time: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_dom_ResizeWidth;
    /**
     * Animation event handler that will resize an element by setting its width.
     */
    updateStyle(): void;
}
/**
 * Creates an animation object that will resize an element between two heights
 *
 * Start and End should be numbers
 */
export declare class ResizeHeight extends PredefinedEffect {
    /**
     * Creates an animation object that will resize an element between two heights
     *
     * Start and End should be numbers
     * @param element Dom Node to be used in the animation.
     * @param start Start height.
     * @param end End height.
     * @param time Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(element: Element | null, start: number, end: number, time: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_dom_ResizeHeight;
    /**
     * Animation event handler that will resize an element by setting its height.
     */
    updateStyle(): void;
}
/**
 * Creates an animation object that fades the opacity of an element between two
 * limits.
 *
 * Start and End should be floats between 0 and 1
 */
export declare class Fade extends PredefinedEffect {
    /**
     * Creates an animation object that fades the opacity of an element between two
     * limits.
     *
     * Start and End should be floats between 0 and 1
     * @param element Dom Node to be used in the animation.
     * @param start 1D Array or Number with start opacity.
     * @param end 1D Array or Number for end opacity.
     * @param time Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(element: Element | null, start: number[] | number | null, end: number[] | number | null, time: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_dom_Fade;
    /**
     * Animation event handler that will set the opacity of an element.
     */
    updateStyle(): void;
    onBegin(): void;
    onEnd(): void;
    /**
     * Animation event handler that will show the element.
     */
    show(): void;
    /**
     * Animation event handler that will hide the element
     */
    hide(): void;
}
/**
 * Fades an element out from full opacity to completely transparent.
 */
export declare class FadeOut extends Fade {
    /**
     * Fades an element out from full opacity to completely transparent.
     * @param element Dom Node to be used in the animation.
     * @param time Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(element: Element | null, time: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_dom_FadeOut;
}
/**
 * Fades an element in from completely transparent to fully opacity.
 */
export declare class FadeIn extends Fade {
    /**
     * Fades an element in from completely transparent to fully opacity.
     * @param element Dom Node to be used in the animation.
     * @param time Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(element: Element | null, time: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_dom_FadeIn;
}
/**
 * Fades an element out from full opacity to completely transparent and then
 * sets the display to 'none'
 */
export declare class FadeOutAndHide extends Fade {
    /**
     * Fades an element out from full opacity to completely transparent and then
     * sets the display to 'none'
     * @param element Dom Node to be used in the animation.
     * @param time Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(element: Element | null, time: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_dom_FadeOutAndHide;
    onBegin(): void;
    onEnd(): void;
}
/**
 * Sets an element's display to be visible and then fades an element in from
 * completely transparent to fully opaque.
 */
export declare class FadeInAndShow extends Fade {
    /**
     * Sets an element's display to be visible and then fades an element in from
     * completely transparent to fully opaque.
     * @param element Dom Node to be used in the animation.
     * @param time Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(element: Element | null, time: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_dom_FadeInAndShow;
    onBegin(): void;
}
/**
 * Provides a transformation of an elements background-color.
 *
 * Start and End should be 3D arrays representing R,G,B
 */
export declare class BgColorTransform extends PredefinedEffect {
    /**
     * Provides a transformation of an elements background-color.
     *
     * Start and End should be 3D arrays representing R,G,B
     * @param element Dom Node to be used in the animation.
     * @param start 3D Array for RGB of start color.
     * @param end 3D Array for RGB of end color.
     * @param time Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(element: Element | null, start: number[] | null, end: number[] | null, time: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_dom_BgColorTransform;
    /**
     * Animation event handler that will set the background-color of an element
     */
    setColor(): void;
    updateStyle(): void;
}
/**
 * Fade elements background color from start color to the element's current
 * background color.
 *
 * Start should be a 3D array representing R,G,B
 * @param element Dom Node to be used in the animation.
 * @param start 3D Array for RGB of start color.
 * @param time Length of animation in milliseconds.
 * @param opt_eventHandler Optional event handler to use when listening for events.
 */
export declare function bgColorFadeIn(element: Element | null, start: number[] | null, time: number, opt_eventHandler?: EventHandler | null): void;
/**
 * Provides a transformation of an elements color.
 */
export declare class ColorTransform extends PredefinedEffect {
    /**
     * Provides a transformation of an elements color.
     * @param element Dom Node to be used in the animation.
     * @param start 3D Array representing R,G,B.
     * @param end 3D Array representing R,G,B.
     * @param time Length of animation in milliseconds.
     * @param opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     */
    constructor(element: Element | null, start: number[] | null, end: number[] | null, time: number, opt_acc?: Function | null);
    private noStructuralTyping_closure_goog_fx_dom_ColorTransform;
    /**
     * Animation event handler that will set the color of an element.
     */
    updateStyle(): void;
}

import * as dom from '../dom/dom.js';
import { Coordinate } from '../math/coordinate.js';
import { Component } from './component.js';
import { RangeModel } from './rangemodel.js';
import type { Event } from '../events/event.js';
import type { TransitionBase } from '../fx/transitionbase.js';
/**
 * This creates a SliderBase object.
 */
export declare class SliderBase extends Component {
    /**
     * This creates a SliderBase object.
     * @param opt_domHelper Optional DOM helper.
     * @param opt_labelFn An optional function mapping slider values to a description of the value.
     */
    constructor(opt_domHelper?: dom.DomHelper | null, opt_labelFn?: () => (string | null));
    private noStructuralTyping_closure_goog_ui_sliderbase_SliderBase;
    /**
     * The model for the range of the slider.
     */
    protected rangeModel: RangeModel;
    /**
     * The minThumb dom-element, pointing to the start of the selected range.
     */
    protected valueThumb: HTMLDivElement | null;
    /**
     * The maxThumb dom-element, pointing to the end of the selected range.
     */
    protected extentThumb: HTMLDivElement | null;
    /**
     * The dom-element highlighting the selected range.
     */
    protected rangeHighlight: HTMLDivElement | null;
    /**
     * Enables/disables true RTL behavior.  This should be called immediately after
     * construction.  This is a temporary flag to allow clients to transition
     * to the new behavior at their convenience.  At some point it will be the
     * default.
     * @param flipForRtl True if the slider should be flipped for RTL, false otherwise.
     */
    enableFlipForRtl(flipForRtl: boolean): void;
    /**
     * Returns the CSS class applied to the slider element for the given
     * orientation. Subclasses must override this method.
     * @param orient The orientation.
     * @return The CSS class applied to slider elements.
     */
    protected getCssClass(orient: SliderBase.Orientation | null): string;
    createDom(): void;
    /**
     * Subclasses must implement this method and set the valueThumb and
     * extentThumb to non-null values. They can also set the rangeHighlight
     * element if a range highlight is desired.
     */
    protected createThumbs(): void;
    decorateInternal(element: any): void;
    /**
     * Called when the DOM for the component is for sure in the document.
     * Subclasses should override this method to set this element's role.
     */
    enterDocument(): void;
    exitDocument(): void;
    /**
     * Returns the value to use for the current mouse position
     * @param e The mouse event object.
     * @return The value that this mouse position represents.
     */
    getValueFromMousePosition(e: Event | null): number;
    /**
     * Returns whether a thumb is currently being dragged with the mouse (or via
     * touch). Note that changing the value with keyboard, mouswheel, or via
     * move-to-point click immediately sends a CHANGE event without going through a
     * dragged state.
     * @return Whether a dragger is currently being dragged.
     */
    isDragging(): boolean;
    /**
     * Moves the thumbs by the specified delta as follows
     * - as long as both thumbs stay within [min,max], both thumbs are moved
     * - once a thumb reaches or exceeds min (or max, respectively), it stays
     * - at min (or max, respectively).
     * In case both thumbs have reached min (or max), no change event will fire.
     * If the specified delta is smaller than the step size, it will be rounded
     * to the step size.
     * @param delta The delta by which to move the selected range.
     */
    moveThumbs(delta: number): void;
    /**
     * Sets the value and extent of the underlying range model. We enforce that
     * getMinimum() <= value <= getMaximum() - extent and
     * getMinExtent <= extent <= getMaximum() - getValue()
     * If this is not satisfied for the given extent, the call is ignored and no
     * CHANGE event fires. This is a utility method to allow setting the thumbs
     * simultaneously and ensuring that only one event fires.
     * @param value The value to which to set the value.
     * @param extent The value to which to set the extent.
     */
    setValueAndExtent(value: number, extent: number): void;
    getMinimum(): number;
    /**
     * Sets the minimum number.
     * @param min The minimum value.
     */
    setMinimum(min: number): void;
    getMaximum(): number;
    /**
     * Sets the maximum number.
     * @param max The maximum value.
     */
    setMaximum(max: number): void;
    getValueThumb(): HTMLDivElement | null;
    getExtentThumb(): HTMLDivElement | null;
    /**
     * Call back when the internal range model changes. Sub-classes may override
     * and re-enter this method to update a11y state. Consider protected.
     * @param e The event object.
     */
    protected handleRangeModelChange(e: Event | null): void;
    /**
     * Returns the position to move the handle to for a given value
     * @param val The value to get the coordinate for.
     * @return Coordinate with either x or y set.
     */
    getThumbCoordinateForValue(val: number): Coordinate;
    /**
     * Sets the value and starts animating the handle towards that position.
     * @param v Value to set and animate to.
     */
    animatedSetValue(v: number): void;
    isAnimating(): boolean;
    /**
     * Sets the factory that will be used to create additional animations to be
     * played when animating to a new value.  These animations can be for any
     * element and the animations will be played in addition to the default
     * animation(s).  The animations will also be played in the same parallel queue
     * ensuring that all animations are played at the same time.
     * @param factory The animation factory to use.  This will not change the default animations played by the slider. It will only allow for additional animations.
     */
    setAdditionalAnimations(factory: SliderBase.AnimationFactory | null): void;
    /**
     * Changes the orientation.
     * @param orient The orientation.
     */
    setOrientation(orient: SliderBase.Orientation | null): void;
    getOrientation(): SliderBase.Orientation | null;
    disposeInternal(): void;
    getBlockIncrement(): number;
    /**
     * Sets the amount to increment/decrement for page up/down as well as when
     * holding down the mouse button on the background.
     * @param value The value to set the block increment to.
     */
    setBlockIncrement(value: number): void;
    /**
     * Sets the minimal value that the extent may have.
     * @param value The minimal value for the extent.
     */
    setMinExtent(value: number): void;
    getUnitIncrement(): number;
    /**
     * Sets the amount to increment/decrement for up, down, left and right arrow
     * keys and mouse wheel events.
     * @param value The value to set the unit increment to.
     */
    setUnitIncrement(value: number): void;
    getStep(): number | null;
    /**
     * Sets the step value. The step value is used to determine how to round the
     * value.
     * @param step The step size.
     */
    setStep(step: number | null): void;
    getMoveToPointEnabled(): boolean;
    /**
     * Sets whether clicking on the background should move directly to that point.
     * @param val Whether clicking on the background should move directly to that point.
     */
    setMoveToPointEnabled(val: boolean): void;
    getValue(): number;
    /**
     * Sets the value of the underlying range model. We enforce that
     * getMinimum() <= value <= getMaximum() - getExtent()
     * If this is not satisifed for the given value, the call is ignored and no
     * CHANGE event fires.
     * @param value The value.
     */
    setValue(value: number): void;
    getExtent(): number;
    /**
     * Sets the extent of the underlying range model. We enforce that
     * getMinExtent() <= extent <= getMaximum() - getValue()
     * If this is not satisifed for the given extent, the call is ignored and no
     * CHANGE event fires.
     * @param extent The value to which to set the extent.
     */
    setExtent(extent: number): void;
    /**
     * Change the visibility of the slider.
     * You must call this if you had set the slider's value when it was invisible.
     * @param visible Whether to show the slider.
     */
    setVisible(visible: boolean): void;
    /**
     * Set a11y roles and state.
     */
    protected setAriaRoles(): void;
    /**
     * Set a11y roles and state when values change.
     */
    protected updateAriaStates(): void;
    /**
     * Enables or disables mouse wheel handling for the slider. The mouse wheel
     * handler enables the user to change the value of slider using a mouse wheel.
     * @param enable Whether to enable mouse wheel handling.
     */
    setHandleMouseWheel(enable: boolean): void;
    isHandleMouseWheel(): boolean;
    /**
     * Enables or disables the slider. A disabled slider will ignore all
     * user-initiated events. Also fires Component.ComponentEventType.ENABLE/DISABLE
     * event as appropriate.
     * @param enable Whether to enable the slider or not.
     */
    setEnabled(enable: boolean): void;
    isEnabled(): boolean;
    getTextValue(): string | null;
    /**
     * Sets whether focus will be moved to the top-level element when the slider is
     * dragged.
     */
    setFocusElementOnSliderDrag(focusElementOnSliderDrag: boolean): void;
}
export declare namespace SliderBase {
    /**
     * Event types used to listen for dragging events. Note that extent drag events
     * are also sent for single-thumb sliders, since the one thumb controls both
     * value and extent together; in this case, they can simply be ignored.
     */
    type EventType = string;
    const EventType: {
        DRAG_VALUE_START: string;
        DRAG_VALUE_END: string;
        DRAG_EXTENT_START: string;
        DRAG_EXTENT_END: string;
        DRAG_START: string;
        DRAG_END: string;
        ANIMATION_END: string;
    };
    /**
     * Enum for representing the orientation of the slider.
     */
    enum Orientation {
        VERTICAL = "vertical",
        HORIZONTAL = "horizontal"
    }
    /**
     * The factory for creating additional animations to be played when animating to
     * a new value.
     */
    interface AnimationFactory {
        /**
         * Creates an additional animation to play when animating to a new value.
         * @param previousValue The previous value (before animation).
         * @param newValue The new value (after animation).
         * @param interval The animation interval.
         * @return The additional animations to play.
         */
        createAnimations(previousValue: number, newValue: number, interval: number): TransitionBase[];
    }
}

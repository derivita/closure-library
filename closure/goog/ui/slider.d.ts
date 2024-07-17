import * as dom from '../dom/dom.js';
import { SliderBase } from './sliderbase.js';
/**
 * This creates a slider object.
 */
export declare class Slider extends SliderBase {
    /**
     * This creates a slider object.
     * @param opt_domHelper Optional DOM helper.
     * @param opt_labelFn An optional function mapping slider values to a description of the value.
     */
    constructor(opt_domHelper?: dom.DomHelper | null, opt_labelFn?: () => (string | null));
    private noStructuralTyping_closure_goog_ui_slider_Slider;
    /**
     * The prefix we use for the CSS class names for the slider and its elements.
     */
    static CSS_CLASS_PREFIX: string;
    /**
     * CSS class name for the single thumb element.
     */
    static THUMB_CSS_CLASS: string;
    /**
     * Returns CSS class applied to the slider element.
     * @param orient Orientation of the slider.
     * @return The CSS class applied to the slider element.
     */
    getCssClass(orient: SliderBase.Orientation | null): string;
    /**
     * Returns CSS class applied to the slider's thumb element.
     * @return The CSS class applied to the slider's thumb element.
     */
    protected getThumbCssClass(): string;
    createThumbs(): void;
}
export declare namespace Slider {
    /**
     * Expose Enum of superclass (representing the orientation of the slider) within
     * Slider namespace.
     */
    type Orientation = string;
    const Orientation: typeof SliderBase.Orientation;
}

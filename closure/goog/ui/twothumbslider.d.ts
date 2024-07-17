import * as dom from '../dom/dom.js';
import { SliderBase } from './sliderbase.js';
/**
 * This creates a TwoThumbSlider object.
 */
export declare class TwoThumbSlider extends SliderBase {
    /**
     * This creates a TwoThumbSlider object.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_twothumbslider_TwoThumbSlider;
    /**
     * The prefix we use for the CSS class names for the slider and its elements.
     */
    static CSS_CLASS_PREFIX: string;
    /**
     * CSS class name for the value thumb element.
     */
    static VALUE_THUMB_CSS_CLASS: string;
    /**
     * CSS class name for the extent thumb element.
     */
    static EXTENT_THUMB_CSS_CLASS: string;
    /**
     * CSS class name for the range highlight element.
     */
    static RANGE_HIGHLIGHT_CSS_CLASS: string;
    /**
     *
     * @param orient orientation of the slider.
     * @return The CSS class applied to the twothumbslider element.
     */
    getCssClass(orient: SliderBase.Orientation | null): string;
    /**
     * Creates the thumb members for a twothumbslider. If the
     * element contains a child with a class name 'goog-twothumbslider-value-thumb'
     * (or 'goog-twothumbslider-extent-thumb', respectively), then that will be used
     * as the valueThumb (or as the extentThumb, respectively). If the element
     * contains a child with a class name 'goog-twothumbslider-rangehighlight',
     * then that will be used as the range highlight.
     */
    createThumbs(): void;
}

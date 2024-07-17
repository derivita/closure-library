import { Stroke } from '../graphics/stroke.js';
import type { Fill } from '../graphics/fill.js';
/**
 * A class for the default color theme for a Gauge.
 * Users can extend this class to provide a custom color theme, and apply the
 * custom color theme by calling  {@link goog.ui.Gauge#setTheme}.
 */
export declare class GaugeTheme {
    /**
     * A class for the default color theme for a Gauge.
     * Users can extend this class to provide a custom color theme, and apply the
     * custom color theme by calling  {@link goog.ui.Gauge#setTheme}.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_gaugetheme_GaugeTheme;
    /**
     * Returns the stroke for the external border of the gauge.
     * @return The stroke to use.
     */
    getExternalBorderStroke(): Stroke;
    /**
     * Returns the fill for the external border of the gauge.
     * @param cx X coordinate of the center of the gauge.
     * @param cy Y coordinate of the center of the gauge.
     * @param r Radius of the gauge.
     * @return The fill to use.
     */
    getExternalBorderFill(cx: number, cy: number, r: number): Fill;
    /**
     * Returns the stroke for the internal border of the gauge.
     * @return The stroke to use.
     */
    getInternalBorderStroke(): Stroke;
    /**
     * Returns the fill for the internal border of the gauge.
     * @param cx X coordinate of the center of the gauge.
     * @param cy Y coordinate of the center of the gauge.
     * @param r Radius of the gauge.
     * @return The fill to use.
     */
    getInternalBorderFill(cx: number, cy: number, r: number): Fill;
    /**
     * Returns the stroke for the major ticks of the gauge.
     * @return The stroke to use.
     */
    getMajorTickStroke(): Stroke;
    /**
     * Returns the stroke for the minor ticks of the gauge.
     * @return The stroke to use.
     */
    getMinorTickStroke(): Stroke;
    /**
     * Returns the stroke for the hinge at the center of the gauge.
     * @return The stroke to use.
     */
    getHingeStroke(): Stroke;
    /**
     * Returns the fill for the hinge at the center of the gauge.
     * @param cx X coordinate of the center of the gauge.
     * @param cy Y coordinate of the center of the gauge.
     * @param r Radius of the hinge.
     * @return The fill to use.
     */
    getHingeFill(cx: number, cy: number, r: number): Fill;
    /**
     * Returns the stroke for the gauge needle.
     * @return The stroke to use.
     */
    getNeedleStroke(): Stroke;
    /**
     * Returns the fill for the hinge at the center of the gauge.
     * @param cx X coordinate of the center of the gauge.
     * @param cy Y coordinate of the center of the gauge.
     * @param r Radius of the gauge.
     * @return The fill to use.
     */
    getNeedleFill(cx: number, cy: number, r: number): Fill;
    /**
     * Returns the color for the gauge title.
     * @return The color to use.
     */
    getTitleColor(): string;
    /**
     * Returns the color for the gauge value.
     * @return The color to use.
     */
    getValueColor(): string;
    /**
     * Returns the color for the labels (formatted values) of tick marks.
     * @return The color to use.
     */
    getTickLabelColor(): string;
}

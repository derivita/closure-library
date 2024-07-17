import { Component } from './component.js';
import { Font } from '../graphics/font.js';
import { GaugeTheme } from './gaugetheme.js';
import type { DomHelper } from '../dom/dom.js';
/**
 * A UI component that displays a gauge.
 * A gauge displayes a current value within a round axis that represents a
 * given range.
 * The gauge is built from an external border, and internal border inside it,
 * ticks and labels inside the internal border, and a needle that points to
 * the current value.
 */
declare class Gauge extends Component {
    constructor(width: number, height: number, opt_domHelper?: DomHelper);
    getMinimum(): number;
    /**
     * Sets the minimum value of the range
     */
    setMinimum(min: number): void;
    getMaximum(): number;
    /**
     * Sets the maximum number of the range
     */
    setMaximum(max: number): void;
    /**
     * Sets the current value range displayed by the gauge.
     */
    setValue(value: number, opt_formattedValue?: string): void;
    /**
     * Sets the number of major tick sections and minor tick sections.
     */
    setTicks(majorUnits: number, minorUnits: number): void;
    /**
     * Sets the labels of the major ticks.
     */
    setMajorTickLabels(tickLabels: string[] | null): void;
    /**
     * Sets the top title of the gauge.
     * The top title is displayed above the center.
     */
    setTitleTop(text: string): void;
    /**
     * Sets the bottom title of the gauge.
     * The top title is displayed below the center.
     */
    setTitleBottom(text: string): void;
    /**
     * Sets the font for displaying top and bottom titles.
     */
    setTitleFont(font: Font | null): void;
    /**
     * Sets the font for displaying the formatted value.
     */
    setValueFont(font: Font | null): void;
    /**
     * Sets the color theme for drawing the gauge.
     */
    setTheme(theme: GaugeTheme | null): void;
    /**
     * Set the background color for a range of values on the gauge.
     */
    addBackgroundColor(fromValue: number, toValue: number, color: string): void;
    /**
     * Creates the DOM representation of the graphics area.
     */
    createDom(): void;
    /**
     * Redraws the entire gauge.
     * Should be called after theme colors have been changed.
     */
    redraw(): void;
    enterDocument(): void;
    exitDocument(): void;
    disposeInternal(): void;
}
export { Gauge };

import * as dom from '../dom/dom.js';
import { Component } from './component.js';
/**
 * This creates a progress bar object.
 */
export declare class ProgressBar extends Component {
    /**
     * This creates a progress bar object.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_progressbar_ProgressBar;
    thumbElement_: HTMLDivElement | null;
    /**
     * Creates the DOM nodes needed for the progress bar
     */
    createDom(): void;
    enterDocument(): void;
    exitDocument(): void;
    /**
     * Decorates an existing HTML DIV element as a progress bar input. If the
     * element contains a child with a class name of 'progress-bar-thumb' that will
     * be used as the thumb.
     * @param element The HTML element to decorate.
     */
    decorateInternal(element: Element | null): void;
    getValue(): number;
    /**
     * Sets the value
     * @param v The value.
     */
    setValue(v: number): void;
    getMinimum(): number;
    /**
     * Sets the minimum number
     * @param v The minimum value.
     */
    setMinimum(v: number): void;
    getMaximum(): number;
    /**
     * Sets the maximum number
     * @param v The maximum value.
     */
    setMaximum(v: number): void;
    /**
     * Changes the orientation
     * @param orient The orientation.
     */
    setOrientation(orient: ProgressBar.Orientation | null): void;
    getOrientation(): ProgressBar.Orientation | null;
    disposeInternal(): void;
    getStep(): number | null;
    /**
     * Sets the step value. The step value is used to determine how to round the
     * value.
     * @param step The step size.
     */
    setStep(step: number | null): void;
}
export declare namespace ProgressBar {
    /**
     * Enum for representing the orientation of the progress bar.
     */
    enum Orientation {
        VERTICAL = "vertical",
        HORIZONTAL = "horizontal"
    }
}

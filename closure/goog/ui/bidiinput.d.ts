import * as dom from '../dom/dom.js';
import { Component } from './component.js';
/**
 * Default implementation of BidiInput.
 */
export declare class BidiInput extends Component {
    /**
     * Default implementation of BidiInput.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_bidiinput_BidiInput;
    /**
     * Decorates the given HTML element as a BidiInput. The HTML element can be an
     * input element with type='text', a textarea element, or any contenteditable.
     * Overrides {@link Component#decorateInternal}.  Considered protected.
     * @param element Element to decorate.
     */
    decorateInternal(element: Element | null): void;
    getElement(): HTMLInputElement | null;
    /**
     * Creates the element for the text input.
     */
    createDom(): void;
    /**
     * Returns the direction of the input element.
     * @return Return 'rtl' for right-to-left text, 'ltr' for left-to-right text, or null if the value itself is not enough to determine directionality (e.g. an empty value), and the direction is inherited from a parent element (typically the body element).
     */
    getDirection(): string | null;
    /**
     * Sets the value of the underlying input field, and sets the direction
     * according to the given value.
     * @param value The Value to set in the underlying input field.
     */
    setValue(value: string): void;
    /**
     * Returns the value of the underlying input field.
     * @return Value of the underlying input field.
     */
    getValue(): string;
    disposeInternal(): void;
}

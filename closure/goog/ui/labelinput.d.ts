import * as dom from '../dom/dom.js';
import { Component } from './component.js';
/**
 * This creates the label input object.
 */
export declare class LabelInput extends Component {
    /**
     * This creates the label input object.
     * @param opt_label The text to show as the label.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(opt_label?: string, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_labelinput_LabelInput;
    /**
     * The label restore delay after leaving the input.
     */
    protected labelRestoreDelayMs: number;
    /**
     * Creates the DOM nodes needed for the label input.
     */
    createDom(): void;
    /**
     * Decorates an existing HTML input element as a label input. If the element
     * has a "label" attribute then that will be used as the label property for the
     * label input object.
     * @param element The HTML input element to decorate.
     */
    decorateInternal(element: Element | null): void;
    enterDocument(): void;
    exitDocument(): void;
    disposeInternal(): void;
    /**
     * The CSS class name to add to the input when the user has not entered a
     * value.
     */
    labelCssClassName: string;
    hasFocus(): boolean;
    hasChanged(): boolean;
    /**
     * Clears the value of the input element without resetting the default text.
     */
    clear(): void;
    /**
     * Clears the value of the input element and resets the default text.
     */
    reset(): void;
    /**
     * Use this to set the value through script to ensure that the label state is
     * up to date
     * @param s The new value for the input.
     */
    setValue(s: string): void;
    /**
     * Returns the current value of the text box, returning an empty string if the
     * search box is the default value
     * @return The value of the input box.
     */
    getValue(): string;
    /**
     * Sets the label text as aria-label, and placeholder when supported.
     * @param label The text to show as the label.
     */
    setLabel(label: string): void;
    getLabel(): string;
    /**
     * This method focuses the input and selects all the text. If the value hasn't
     * changed it will set the value to the label so that the label text is
     * selected.
     */
    focusAndSelect(): void;
    /**
     * Enables/Disables the label input.
     * @param enabled Whether to enable (true) or disable (false) the label input.
     */
    setEnabled(enabled: boolean): void;
    isEnabled(): boolean;
}

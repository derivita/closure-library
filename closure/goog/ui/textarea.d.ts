import * as dom from '../dom/dom.js';
import { Control } from './control.js';
import { TextareaRenderer } from './textarearenderer.js';
/**
 * A textarea control to handle growing/shrinking with textarea.value.
 */
export declare class Textarea extends Control {
    /**
     * A textarea control to handle growing/shrinking with textarea.value.
     * @param content Text to set as the textarea's value.
     * @param opt_renderer Renderer used to render or decorate the textarea. Defaults to {@link TextareaRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(content: string, opt_renderer?: TextareaRenderer | null, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_textarea_Textarea;
    /**
     * Sets the default text for the textarea.
     * @param text The default text for the textarea.
     */
    setPlaceholder(text: string): void;
    getMinHeight(): number;
    /**
     * Sets a minimum height for the textarea, and calls resize if rendered.
     * @param height New minHeight value.
     */
    setMinHeight(height: number): void;
    getMaxHeight(): number;
    /**
     * Sets a maximum height for the textarea, and calls resize if rendered.
     * @param height New maxHeight value.
     */
    setMaxHeight(height: number): void;
    /**
     * Sets the textarea's value.
     * @param value The value property for the textarea, will be cast to a string by the browser when setting textarea.value.
     */
    setValue(value: any): void;
    /**
     * Gets the textarea's value.
     * @return value The value of the textarea.
     */
    getValue(): string;
    setContent(content: any): void;
    setEnabled(enable: any): void;
    /**
     * Resizes the textarea vertically.
     */
    resize(): void;
    enterDocument(): void;
    /**
     * The CSS class name to add to the input when the user has not entered a
     * value.
     */
    static TEXTAREA_PLACEHOLDER_CLASS: string;
}
export declare namespace Textarea {
    /**
     * Constants for event names.
     */
    enum EventType {
        RESIZE = "resize"
    }
}

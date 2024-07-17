import * as dom from '../dom/dom.js';
import { SafeHtml } from '../html/safehtml.js';
import { Dialog } from './dialog.js';
/**
 * Creates an object that represents a prompt (used in place of javascript's
 * prompt). The html structure of the prompt is the same as the layout for
 * dialog.js except for the addition of a text box which is placed inside the
 * "Content area" and has the default class-name 'modal-dialog-userInput'
 */
export declare class Prompt extends Dialog {
    /**
     * Creates an object that represents a prompt (used in place of javascript's
     * prompt). The html structure of the prompt is the same as the layout for
     * dialog.js except for the addition of a text box which is placed inside the
     * "Content area" and has the default class-name 'modal-dialog-userInput'
     * @param promptTitle The title of the prompt.
     * @param promptBody The body of the prompt. String is treated as plain text and it will be HTML-escaped.
     * @param callback The function to call when the user selects Ok or Cancel. The function should expect a single argument which represents what the user entered into the prompt. If the user presses cancel, the value of the argument will be null.
     * @param opt_defaultValue Optional default value that should be in the text box when the prompt appears.
     * @param opt_class Optional prefix for the classes.
     * @param opt_useIframeForIE For IE, workaround windowed controls z-index issue by using a an iframe instead of a div for bg element.
     * @param opt_domHelper Optional DOM helper; see {@link Component} for semantics.
     */
    constructor(promptTitle: string, promptBody: string | SafeHtml, callback: Function | null, opt_defaultValue?: string, opt_class?: string, opt_useIframeForIE?: boolean, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_prompt_Prompt;
    /**
     * Sets the validation function that takes a string and returns true if the
     * string is accepted, false otherwise.
     * @param fn The validation function to use on user input.
     */
    setValidationFunction(fn: () => boolean): void;
    enterDocument(): void;
    getInputElement(): HTMLInputElement | HTMLTextAreaElement | null;
    /**
     * Sets an input decorator function.  This function will be called in
     * #enterDocument and will be passed the input element.  This is useful for
     * attaching handlers to the input element for specific change events,
     * for example.
     * @param inputDecoratorFn A function to call on the input element on #enterDocument.
     */
    setInputDecoratorFn(inputDecoratorFn: () => any): void;
    /**
     * Set the number of rows in the user input element.
     * A values of 1 means use an `<input>` element.  If the prompt is already
     * rendered then you cannot change from `<input>` to `<textarea>` or vice versa.
     * @param rows Number of rows for user input element.
     */
    setRows(rows: number): void;
    getRows(): number;
    /**
     * Set the number of cols in the user input element.
     * @param cols Number of cols for user input element.
     */
    setCols(cols: number): void;
    getCols(): number;
    /**
     * Create the initial DOM representation for the prompt.
     */
    createDom(): void;
    /**
     * Causes the prompt to appear, centered on the screen, gives focus
     * to the text box, and selects the text
     * @param visible Whether the dialog should be visible.
     */
    setVisible(visible: boolean): void;
    /**
     * Overrides setFocus to put focus on the input element.
     */
    focus(): void;
    /**
     * Sets the default value of the prompt when it is displayed.
     * @param defaultValue The default value to display.
     */
    setDefaultValue(defaultValue: string): void;
    disposeInternal(): void;
}

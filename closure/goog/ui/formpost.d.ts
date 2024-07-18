import { Component } from './component.js';
import type { DomHelper } from '../dom/dom.js';
/**
 * Creates a formpost object.
 */
export declare class FormPost extends Component {
    /**
     * Creates a formpost object.
     * @param opt_dom The DOM helper.
     */
    constructor(opt_dom?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_formpost_FormPost;
    createDom(): void;
    /**
     * Constructs a POST request and directs the browser as if a form were
     * submitted.
     * @param parameters Object with parameter values. Values can be strings, numbers, or arrays of strings or numbers.
     * @param opt_url The destination URL. If not specified, uses the current URL for window for the DOM specified in the constructor.
     * @param opt_target An optional name of a window in which to open the URL. If not specified, uses the window for the DOM specified in the constructor.
     */
    post(parameters: object | null, opt_url?: string, opt_target?: string): void;
}

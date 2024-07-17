import { AutoComplete } from './autocomplete.js';
import { InputHandler } from './inputhandler.js';
import type { Map } from '../../structs/map.js';
/**
 * Factory class for building a remote autocomplete widget that autocompletes
 * an inputbox or text area from a data array provided via ajax.
 */
export declare class Remote extends AutoComplete {
    /**
     * Factory class for building a remote autocomplete widget that autocompletes
     * an inputbox or text area from a data array provided via ajax.
     * @param url The Uri which generates the auto complete matches.
     * @param input Input element or text area.
     * @param opt_multi Whether to allow multiple entries; defaults to false.
     * @param opt_useSimilar Whether to use similar matches; e.g. "gost" => "ghost".
     */
    constructor(url: string, input: Element | null, opt_multi?: boolean, opt_useSimilar?: boolean);
    private noStructuralTyping_closure_goog_ui_ac_remote_Remote;
    /**
     * Set whether or not standard highlighting should be used when rendering rows.
     * @param useStandardHighlighting true if standard highlighting used.
     */
    setUseStandardHighlighting(useStandardHighlighting: boolean): void;
    /**
     * Gets the attached InputHandler object.
     * @return The input handler.
     */
    getInputHandler(): InputHandler | null;
    /**
     * Set the send method ("GET", "POST") for the matcher.
     * @param method The send method; default: GET.
     */
    setMethod(method: string): void;
    /**
     * Set the post data for the matcher.
     * @param content Post data.
     */
    setContent(content: string): void;
    /**
     * Set the HTTP headers for the matcher.
     * @param headers Map of headers to add to the request.
     */
    setHeaders(headers: object | Map | null): void;
    /**
     * Set the timeout interval for the matcher.
     * @param interval Number of milliseconds after which an incomplete request will be aborted; 0 means no timeout is set.
     */
    setTimeoutInterval(interval: number): void;
}

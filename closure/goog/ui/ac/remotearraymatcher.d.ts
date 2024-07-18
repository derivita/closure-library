import { Disposable } from '../../disposable/disposable.js';
import type { Event } from '../../events/event.js';
import type { XmlHttpFactory } from '../../net/xmlhttpfactory.js';
import type { Map } from '../../structs/map.js';
/**
 * An array matcher that requests matches via ajax.
 */
export declare class RemoteArrayMatcher extends Disposable {
    /**
     * An array matcher that requests matches via ajax.
     * @param url The Uri which generates the auto complete matches.  The search term is passed to the server as the 'token' query param.
     * @param opt_noSimilar If true, request that the server does not do similarity matches for the input token against the dictionary. The value is sent to the server as the 'use_similar' query param which is either "1" (opt_noSimilar==false) or "0" (opt_noSimilar==true).
     * @param opt_xmlHttpFactory Specify the XmlHttpFactory used to retrieve the matches.
     */
    constructor(url: string, opt_noSimilar?: boolean, opt_xmlHttpFactory?: XmlHttpFactory | null);
    private noStructuralTyping_closure_goog_ui_ac_remotearraymatcher_RemoteArrayMatcher;
    /**
     * Set the send method ("GET", "POST").
     * @param method The send method; default: GET.
     */
    setMethod(method: string): void;
    /**
     * Set the post data.
     * @param content Post data.
     */
    setContent(content: string): void;
    /**
     * Set the HTTP headers.
     * @param headers Map of headers to add to the request.
     */
    setHeaders(headers: object | Map | null): void;
    /**
     * Set the timeout interval.
     * @param interval Number of milliseconds after which an incomplete request will be aborted; 0 means no timeout is set.
     */
    setTimeoutInterval(interval: number): void;
    /**
     * Builds a complete GET-style URL, given the base URI and autocomplete related
     * parameter values.
     * <b>Override this to build any customized lookup URLs.</b>
     * <b>Can be used to change request method and any post content as well.</b>
     * @param uri The base URI of the request target.
     * @param token Current token in autocomplete.
     * @param maxMatches Maximum number of matches required.
     * @param useSimilar A hint to the server.
     * @param opt_fullString Complete text in the input element.
     * @return The complete url. Return null if no request should be sent.
     */
    protected buildUrl(uri: string, token: string, maxMatches: number, useSimilar: boolean, opt_fullString?: string): string | null;
    /**
     * Returns whether the suggestions should be updated?
     * <b>Override this to prevent updates eg - when token is empty.</b>
     * @param uri The base URI of the request target.
     * @param token Current token in autocomplete.
     * @param maxMatches Maximum number of matches required.
     * @param useSimilar A hint to the server.
     * @param opt_fullString Complete text in the input element.
     * @return Whether new matches be requested.
     */
    protected shouldRequestMatches(uri: string, token: string, maxMatches: number, useSimilar: boolean, opt_fullString?: string): boolean;
    /**
     * Parses and retrieves the array of suggestions from XHR response.
     * <b>Override this if the response is not a simple JSON array.</b>
     * @param responseText The XHR response text.
     * @return The array of suggestions.
     */
    protected parseResponseText(responseText: string): string[] | null;
    /**
     * Handles the XHR response.
     * @param token The XHR autocomplete token.
     * @param matchHandler The AutoComplete match handler.
     * @param event The XHR success event.
     */
    xhrCallback(token: string, matchHandler: Function | null, event: Event | null): void;
    /**
     * Retrieve a set of matching rows from the server via ajax.
     * @param token The text that should be matched; passed to the server as the 'token' query param.
     * @param maxMatches The maximum number of matches requested from the server; passed as the 'max_matches' query param.  The server is responsible for limiting the number of matches that are returned.
     * @param matchHandler Callback to execute on the result after matching.
     * @param opt_fullString The full string from the input box.
     */
    requestMatchingRows(token: string, maxMatches: number, matchHandler: Function | null, opt_fullString?: string): void;
    disposeInternal(): void;
}

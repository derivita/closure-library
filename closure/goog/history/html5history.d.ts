import { EventTarget } from '../events/eventtarget.js';
/**
 * An implementation compatible with goog.History that uses the HTML5
 * history APIs.
 */
export declare class Html5History extends EventTarget {
    /**
     * An implementation compatible with goog.History that uses the HTML5
     * history APIs.
     * @param opt_win The window to listen/dispatch history events on.
     * @param opt_transformer The token transformer that is used to create URL from the token when storing token without using hash fragment.
     */
    constructor(opt_win?: Window | null, opt_transformer?: Html5History.TokenTransformer | null);
    private noStructuralTyping_closure_goog_history_html5history_Html5History;
    /**
     * Returns whether Html5History is supported.
     * @param opt_win Optional window to check.
     * @return Whether html5 history is supported.
     */
    static isSupported(opt_win?: Window | null): boolean;
    /**
     * Starts or stops the History.  When enabled, the History object
     * will immediately fire an event for the current location. The caller can set
     * up event listeners between the call to the constructor and the call to
     * setEnabled.
     * @param enable Whether to enable history.
     */
    setEnabled(enable: boolean): void;
    /**
     * Returns the current token.
     * @return The current token.
     */
    getToken(): string;
    /**
     * Sets the history state.
     * @param token The history state identifier.
     * @param opt_title Optional title to associate with history entry.
     */
    setToken(token: string, opt_title?: string): void;
    /**
     * Replaces the current history state without affecting the rest of the history
     * stack.
     * @param token The history state identifier.
     * @param opt_title Optional title to associate with history entry.
     */
    replaceToken(token: string, opt_title?: string): void;
    disposeInternal(): void;
    getUseFragment(): boolean;
    /**
     * Sets whether to use the fragment to store tokens.
     * @param useFragment Whether to use the fragment.
     */
    setUseFragment(useFragment: boolean): void;
    /**
     * Sets the path prefix to use if storing tokens in the path. The path
     * prefix should start and end with slash.
     * @param pathPrefix Sets the path prefix.
     */
    setPathPrefix(pathPrefix: string): void;
    /**
     * Gets the path prefix.
     * @return The path prefix.
     */
    getPathPrefix(): string;
}
export declare namespace Html5History {
    /**
     * A token transformer that can create a URL from a history
     * token. This is used by `Html5History` to create
     * URL when storing token without the hash fragment.
     *
     * Given a `window.location` object containing the location
     * created by `createUrl`, the token transformer allows
     * retrieval of the token back via `retrieveToken`.
     */
    interface TokenTransformer {
        /**
         * Retrieves a history token given the path prefix and
         * `window.location` object.
         * @param pathPrefix The path prefix to use when storing token in a path; always begin with a slash.
         * @param location The `window.location` object. Treat this object as read-only.
         * @return token The history token.
         */
        retrieveToken(pathPrefix: string, location: Location | null): string;
        /**
         * Creates a URL to be pushed into HTML5 history stack when storing
         * token without using hash fragment.
         * @param token The history token.
         * @param pathPrefix The path prefix to use when storing token in a path; always begin with a slash.
         * @param location The `window.location` object. Treat this object as read-only.
         * @return url The complete URL string from path onwards (without {@code protocol://host:port} part); must begin with a slash.
         */
        createUrl(token: string, pathPrefix: string, location: Location | null): string;
    }
}

import { AbstractBubblePlugin } from './abstractbubbleplugin.js';
/**
 * Property bubble plugin for links.
 */
export declare class LinkBubble extends AbstractBubblePlugin {
    /**
     * Property bubble plugin for links.
     * @param var_args List of extra actions supported by the bubble.
     */
    constructor(...var_args: LinkBubble.Action[]);
    private noStructuralTyping_closure_goog_editor_plugins_linkbubble_LinkBubble;
    /**
     * Tells the plugin to stop leaking the page's url via the referrer header when
     * the link text link is clicked. When the user clicks on a link, the
     * browser makes a request for the link url, passing the url of the current page
     * in the request headers. If the user wants the current url to be kept secret
     * (e.g. an unpublished document), the owner of the url that was clicked will
     * see the secret url in the request headers, and it will no longer be a secret.
     * Calling this method will not send a referrer header in the request, just as
     * if the user had opened a blank window and typed the url in themselves.
     */
    stopReferrerLeaks(): void;
    /**
     * Tells the plugin whether to block URLs with schemes not in the whitelist.
     * If blocking is enabled, this plugin will not linkify the link in the bubble
     * popup.
     * @param blockOpeningUnsafeSchemes Whether to block non-whitelisted schemes.
     */
    setBlockOpeningUnsafeSchemes(blockOpeningUnsafeSchemes: boolean): void;
    /**
     * Sets a whitelist of allowed URL schemes that are safe to open.
     * Schemes should all be in lowercase. If the plugin is set to block opening
     * unsafe schemes, user-entered URLs will be converted to lowercase and checked
     * against this list. The whitelist has no effect if blocking is not enabled.
     * @param schemes String array of URL schemes to allow (http, https, etc.).
     */
    setSafeToOpenSchemes(schemes: string[] | null): void;
    getTrogClassId(): string;
    isSupportedCommand(command: any): boolean;
    execCommandInternal(command: any, var_args: any): any;
    getBubbleTargetFromSelection(selectedElement: any): Element;
    /**
     * Set the optional function for getting the "test" link of a url.
     * @param func The function to use.
     */
    setTestLinkUrlFn(func: () => string): void;
    /**
     * Returns the target element url for the bubble.
     * @return The url href.
     */
    protected getTargetUrl(): string;
    getBubbleType(): string;
    getBubbleTitle(): string;
    /**
     * Returns the message to display for testing a link.
     * @return The message for testing a link.
     */
    protected getTestLinkMessage(): string;
    handleSelectionChangeInternal(selectedElement: any): boolean;
    createBubbleContents(bubbleContainer: any): void;
    /**
     * Tests the link by opening it in a new tab/window. Should be used as the
     * click event handler for the test pseudo-link.
     * @param opt_event If passed in, the event will be stopped.
     */
    protected testLink(opt_event?: Event): void;
    /**
     * Returns whether the URL should be considered invalid.  This always returns
     * false in the base class, and should be overridden by subclasses that wish
     * to impose validity rules on URLs.
     * @param url The url to check.
     * @return Whether the URL should be considered invalid.
     */
    isInvalidUrl(a: string): boolean;
    /**
     * Sets the proper state for the action links.
     */
    onShow(): void;
    /**
     * Checks whether the plugin should open the given url in a new window.
     * @param url The url to check.
     * @return If the plugin should open the given url in a new window.
     */
    protected shouldOpenUrl(url: string): boolean;
}
export declare namespace LinkBubble {
    /**
     * Constructor for extra actions that can be added to the link bubble.
     */
    class Action {
        /**
         * Constructor for extra actions that can be added to the link bubble.
         * @param spanId The ID for the span showing the action.
         * @param linkId The ID for the link showing the action.
         * @param message The text for the link showing the action.
         * @param toShowFn Test function to determine whether to show the action for the given URL.
         */
        constructor(spanId: string, linkId: string, message: string, toShowFn: () => boolean, actionFn: any);
        private noStructuralTyping_closure_goog_editor_plugins_linkbubble_Action;
    }
}

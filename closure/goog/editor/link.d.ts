import { Field } from './field.js';
/**
 * Wrap an editable link.
 */
export declare class Link {
    /**
     * Wrap an editable link.
     * @param anchor The anchor element.
     * @param isNew Whether this is a new link.
     */
    constructor(anchor: HTMLAnchorElement | null, isNew: boolean);
    private noStructuralTyping_closure_goog_editor_link_Link;
    getAnchor(): HTMLAnchorElement | null;
    getExtraAnchors(): (HTMLAnchorElement | null)[];
    getCurrentText(): string;
    isNew(): boolean;
    /**
     * Set the url without affecting the isNew() status of the link.
     * @param url A URL.
     */
    initializeUrl(url: string): void;
    /**
     * Removes the link, leaving its contents in the document.  Note that this
     * object will no longer be usable/useful after this call.
     */
    removeLink(): void;
    /**
     * Change the link.
     * @param newText New text for the link. If the link contains all its text in one descendant, newText will only replace the text in that one node. Otherwise, we'll change the innerHTML of the whole link to newText.
     * @param newUrl A new URL.
     */
    setTextAndUrl(newText: string, newUrl: string): void;
    /**
     * Places the cursor to the right of the anchor.
     * Note that this is different from range's placeCursorNextTo
     * in that it specifically handles the placement of a cursor in browsers
     * that trap you in links, by adding a space when necessary and placing the
     * cursor after that space.
     */
    placeCursorRightOf(): void;
    getValidLinkFromText(): string | null;
    /**
     * After link creation, finish creating the link depending on the type
     * of link being created.
     * @param field The field where this link is being created.
     */
    finishLinkCreation(field: Field | null): void;
    /**
     * Initialize a new link.
     * @param anchor The anchor element.
     * @param url The initial URL.
     * @param opt_target The target.
     * @param opt_extraAnchors Extra anchors created by the browser when parsing a selection.
     * @return The link.
     */
    static createNewLink(anchor: HTMLAnchorElement | null, url: string, opt_target?: string, opt_extraAnchors?: (HTMLAnchorElement | null)[] | null): Link;
    /**
     * Initialize a new link using text in anchor, or empty string if there is no
     * likely url in the anchor.
     * @param anchor The anchor element with likely url content.
     * @param opt_target The target.
     * @return The link.
     */
    static createNewLinkFromText(anchor: HTMLAnchorElement | null, opt_target?: string): Link;
    /**
     * Returns true if str could be a URL, false otherwise
     *
     * Ex: TR_Util.isLikelyUrl_("http://www.google.com") == true
     * TR_Util.isLikelyUrl_("www.google.com") == true
     * @param str String to check if it looks like a URL.
     * @return Whether str could be a URL.
     */
    static isLikelyUrl(str: string): boolean;
    /**
     * Returns true if str could be an email address, false otherwise
     *
     * Ex: Link.isLikelyEmailAddress_("some word") == false
     * Link.isLikelyEmailAddress_("foo@foo.com") == true
     * @param str String to test for being email address.
     * @return Whether "str" looks like an email address.
     */
    static isLikelyEmailAddress(str: string): boolean;
    /**
     * Determines whether or not a url is an email link.
     * @param url A url.
     * @return Whether the url is a mailto link.
     */
    static isMailto(url: string): boolean;
}

/**
 * Creates an emoji.
 *
 * A simple wrapper for an emoji.
 */
export declare class Emoji {
    /**
     * Creates an emoji.
     *
     * A simple wrapper for an emoji.
     * @param url URL pointing to the source image for the emoji.
     * @param id The id of the emoji, e.g., 'std.1'.
     * @param opt_height The height of the emoji, if undefined the natural height of the emoji is used.
     * @param opt_width The width of the emoji, if undefined the natural width of the emoji is used.
     * @param opt_altText The alt text for the emoji image, eg. the unicode character representation of the emoji.
     */
    constructor(url: string, id: string, opt_height?: number, opt_width?: number, opt_altText?: string);
    private noStructuralTyping_closure_goog_ui_emoji_emoji_Emoji;
    /**
     * The name of the goomoji attribute, used for emoji image elements.
     */
    static ATTRIBUTE: string;
    /**
     * The name of the goomoji data-attribute, used for emoji image elements. Data
     * attributes are the preferred way in HTML5 to set custom attributes.
     */
    static DATA_ATTRIBUTE: string;
    getUrl(): string;
    getId(): string;
    getHeight(): number | null;
    getWidth(): number | null;
    getAltText(): string | null;
}

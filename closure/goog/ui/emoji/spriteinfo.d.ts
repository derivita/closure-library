/**
 * Creates a SpriteInfo object with the specified properties. If the image is
 * sprited via CSS, then only the first parameter needs a value. If the image
 * is sprited via metadata, then the first parameter should be left null.
 */
export declare class SpriteInfo {
    /**
     * Creates a SpriteInfo object with the specified properties. If the image is
     * sprited via CSS, then only the first parameter needs a value. If the image
     * is sprited via metadata, then the first parameter should be left null.
     * @param cssClass CSS class to properly display the sprited image.
     * @param opt_url Url of the sprite image.
     * @param opt_width Width of the image being sprited.
     * @param opt_height Height of the image being sprited.
     * @param opt_xOffset Positive x offset of the image being sprited within the sprite.
     * @param opt_yOffset Positive y offset of the image being sprited within the sprite.
     * @param opt_animated Whether the sprite is animated.
     */
    constructor(cssClass: string | null, opt_url?: string, opt_width?: number, opt_height?: number, opt_xOffset?: number, opt_yOffset?: number, opt_animated?: boolean);
    private noStructuralTyping_closure_goog_ui_emoji_spriteinfo_SpriteInfo;
    /**
     * Returns the css class of the sprited image.
     * @return Name of the CSS class to properly display the sprited image.
     */
    getCssClass(): string | null;
    /**
     * Returns the url of the sprite image.
     * @return Url of the sprite image.
     */
    getUrl(): string | null;
    /**
     * Returns whether the emoji specified by this sprite is animated.
     * @return Whether the emoji is animated.
     */
    isAnimated(): boolean;
    /**
     * Returns the width of the image being sprited, appropriate for a CSS value.
     * @return The width of the image being sprited.
     */
    getWidthCssValue(): string;
    /**
     * Returns the height of the image being sprited, appropriate for a CSS value.
     * @return The height of the image being sprited.
     */
    getHeightCssValue(): string;
    /**
     * Returns the x offset of the image being sprited within the sprite,
     * appropriate for a CSS value.
     * @return The x offset of the image being sprited within the sprite.
     */
    getXOffsetCssValue(): string;
    /**
     * Returns the positive y offset of the image being sprited within the sprite,
     * appropriate for a CSS value.
     * @return The y offset of the image being sprited within the sprite.
     */
    getYOffsetCssValue(): string;
}

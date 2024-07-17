import { PaletteRenderer } from '../paletterenderer.js';
import type { DomHelper } from '../../dom/dom.js';
import type { Palette } from '../palette.js';
import type { SpriteInfo } from './spriteinfo.js';
/**
 * Renders an emoji palette.
 */
export declare class EmojiPaletteRenderer extends PaletteRenderer {
    /**
     * Renders an emoji palette.
     * @param defaultImgUrl Url of the img that should be used to fill up the cells in the emoji table, to prevent jittering. Will be stretched to the emoji cell size. A good image is a transparent dot.
     */
    constructor(defaultImgUrl: string | null);
    private noStructuralTyping_closure_goog_ui_emoji_emojipaletterenderer_EmojiPaletteRenderer;
    static getCssClass(): any;
    /**
     * Creates a palette item from the given emoji data.
     * @param dom DOM helper for constructing DOM elements.
     * @param id Goomoji id for the emoji.
     * @param spriteInfo Spriting info for the emoji.
     * @param displayUrl URL of the image served for this cell, whether an individual emoji image or a sprite.
     * @return The palette item for this emoji.
     */
    createPaletteItem(dom: DomHelper | null, id: string, spriteInfo: SpriteInfo | null, displayUrl: string): HTMLDivElement;
    /**
     * Modifies a palette item containing an animated emoji, in response to the
     * animated emoji being successfully downloaded.
     * @param item The palette item to update.
     * @param animatedImg An Image object containing the animated emoji.
     */
    updateAnimatedPaletteItem(item: Element | null, animatedImg: Image | null): void;
    /**
     * Builds the inner contents of a palette item out of sprite metadata.
     * @param dom DOM helper for constructing DOM elements.
     * @param spriteInfo The metadata to create the css for the sprite.
     * @param displayUrl The URL of the image for this cell.
     * @return The inner element for a palette item.
     */
    buildElementFromSpriteMetadata(dom: DomHelper | null, spriteInfo: SpriteInfo | null, displayUrl: string): HTMLDivElement;
    createCell(node: any, dom: any): Element;
    /**
     * Returns the item corresponding to the given node, or null if the node is
     * neither a palette cell nor part of a palette item.
     * @param palette Palette in which to look for the item.
     * @param node Node to look for.
     * @return The corresponding palette item (null if not found).
     */
    getContainingItem(palette: Palette | null, node: Node | null): Node | null;
}

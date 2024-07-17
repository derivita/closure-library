import { EmojiPaletteRenderer } from './emojipaletterenderer.js';
/**
 * Progressively renders an emoji palette. The progressive renderer tries to
 * use img tags instead of background-image for sprited emoji, since most
 * browsers render img tags progressively (i.e., as the data comes in), while
 * only very new browsers render background-image progressively.
 */
export declare class ProgressiveEmojiPaletteRenderer extends EmojiPaletteRenderer {
    /**
     * Progressively renders an emoji palette. The progressive renderer tries to
     * use img tags instead of background-image for sprited emoji, since most
     * browsers render img tags progressively (i.e., as the data comes in), while
     * only very new browsers render background-image progressively.
     * @param defaultImgUrl Url of the img that should be used to fill up the cells in the emoji table, to prevent jittering. Will be stretched to the emoji cell size. A good image is a transparent dot.
     */
    constructor(defaultImgUrl: string);
    private noStructuralTyping_closure_goog_ui_emoji_progressiveemojipaletterenderer_ProgressiveEmojiPaletteRenderer;
    buildElementFromSpriteMetadata(dom: any, spriteInfo: any, displayUrl: any): HTMLDivElement;
    updateAnimatedPaletteItem(item: any, animatedImg: any): void;
}

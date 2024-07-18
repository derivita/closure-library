import { ImageLoader } from '../../net/imageloader.js';
import { Palette } from '../palette.js';
import { Emoji } from './emoji.js';
import type { DomHelper } from '../../dom/dom.js';
import type { PaletteRenderer } from '../paletterenderer.js';
/**
 * A page of emoji to be displayed in an EmojiPicker.
 */
export declare class EmojiPalette extends Palette {
    /**
     * A page of emoji to be displayed in an EmojiPicker.
     * @param emoji List of emoji for this page.
     * @param opt_urlPrefix Prefix that should be prepended to all URL.
     * @param opt_renderer Renderer used to render or decorate the palette; defaults to {@link PaletteRenderer}.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(emoji: (any[] | null)[] | null, opt_urlPrefix?: string | null, opt_renderer?: PaletteRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_emoji_emojipalette_EmojiPalette;
    /**
     * Sends off requests for all the animated emoji and replaces their static
     * sprites when the images are done downloading.
     */
    loadAnimatedEmoji(): void;
    /**
     * Returns the image loader that this palette uses. Used for testing.
     * @return the image loader.
     */
    getImageLoader(): ImageLoader | null;
    disposeInternal(): void;
    getSelectedEmoji(): Emoji | null;
    getNumberOfEmoji(): number;
    /**
     * Returns the index of the specified emoji within this palette.
     * @param id Id of the emoji to look up.
     * @return The index of the specified emoji within this palette.
     */
    getEmojiIndex(id: string): number;
}

/**
 * This class represents a font to be used with a renderer.
 */
export declare class Font {
    /**
     * This class represents a font to be used with a renderer.
     * @param size The font size.
     * @param family The font family.
     */
    constructor(size: number, family: string);
    private noStructuralTyping_closure_goog_graphics_font_Font;
    /**
     * Font size.
     */
    size: number;
    /**
     * The name of the font family to use, can be a comma separated string.
     */
    family: string;
    /**
     * Indication if text should be bolded
     */
    bold: boolean;
    /**
     * Indication if text should be in italics
     */
    italic: boolean;
}

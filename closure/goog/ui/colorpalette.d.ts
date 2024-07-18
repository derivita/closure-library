import { Palette } from './palette.js';
import { PaletteRenderer } from './paletterenderer.js';
import type { DomHelper } from '../dom/dom.js';
/**
 * A color palette is a grid of color swatches that the user can highlight or
 * select via the keyboard or the mouse.  The selection state of the palette is
 * controlled by a selection model.  When the user makes a selection, the
 * component fires an ACTION event.  Event listeners may retrieve the selected
 * color using the {@link #getSelectedColor} method.
 */
export declare class ColorPalette extends Palette {
    /**
     * A color palette is a grid of color swatches that the user can highlight or
     * select via the keyboard or the mouse.  The selection state of the palette is
     * controlled by a selection model.  When the user makes a selection, the
     * component fires an ACTION event.  Event listeners may retrieve the selected
     * color using the {@link #getSelectedColor} method.
     * @param opt_colors Array of colors in any valid CSS color format.
     * @param opt_renderer Renderer used to render or decorate the palette; defaults to {@link PaletteRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(opt_colors?: string[] | null, opt_renderer?: PaletteRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_colorpalette_ColorPalette;
    /**
     * Returns the array of colors represented in the color palette.
     * @return Array of colors.
     */
    getColors(): string[] | null;
    /**
     * Returns the array of tooltip labels for the colors in the color palette.
     * @return Array of labels.
     */
    protected getLabels(): string[] | null;
    /**
     * Sets the colors that are contained in the palette.
     * @param colors Array of colors in any valid CSS color format.
     * @param opt_labels The array of labels to be used as tooltips. When not provided, the color value will be used.
     */
    setColors(colors: string[] | null, opt_labels?: string[] | null): void;
    getSelectedColor(): string | null;
    /**
     * Sets the selected color.  Clears the selection if the argument is null or
     * can't be parsed as a color.
     * @param color The color to set as selected; null clears the selection.
     */
    setSelectedColor(color: string | null): void;
    protected createColorNodes(): Node[];
}

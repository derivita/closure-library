import * as dom from '../dom/dom.js';
import { ColorPalette } from './colorpalette.js';
import type { Event } from '../events/event.js';
import type { PaletteRenderer } from './paletterenderer.js';
/**
 * A custom color palette is a grid of color swatches and a button that allows
 * the user to add additional colors to the palette
 */
export declare class CustomColorPalette extends ColorPalette {
    /**
     * A custom color palette is a grid of color swatches and a button that allows
     * the user to add additional colors to the palette
     * @param initColors Array of initial colors to populate the palette with.
     * @param opt_renderer Renderer used to render or decorate the palette; defaults to {@link PaletteRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(initColors: string[] | null, opt_renderer?: PaletteRenderer | null, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_customcolorpalette_CustomColorPalette;
    /**
     * Returns an array of DOM nodes for each color, and an additional cell with a
     * '+'.
     */
    createColorNodes(): Node[];
    /**
     *
     * @param e Mouse or key event that triggered the action.
     * @return True if the action was allowed to proceed, false otherwise.
     */
    performActionInternal(e: Event | null): boolean;
    /**
     * Prompts the user to enter a custom color.  Currently uses a window.prompt
     * but could be updated to use a dialog box with a WheelColorPalette.
     */
    promptForCustomColor(): void;
}

import { ControlRenderer } from './controlrenderer.js';
import type { Control } from './control.js';
import type { DimensionPicker } from './dimensionpicker.js';
/**
 * Default renderer for {@link DimensionPicker}s.  Renders the
 * palette as two divs, one with the un-highlighted background, and one with the
 * highlighted background.
 */
export declare class DimensionPickerRenderer extends ControlRenderer {
    /**
     * Default renderer for {@link DimensionPicker}s.  Renders the
     * palette as two divs, one with the un-highlighted background, and one with the
     * highlighted background.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_dimensionpickerrenderer_DimensionPickerRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Overrides {@link ControlRenderer#canDecorate} to allow decorating
     * empty DIVs only.
     * @param element The element to check.
     * @return Whether if the element is an empty div.
     */
    canDecorate(element: Element | null): boolean;
    /**
     * Overrides {@link ControlRenderer#decorate} to decorate empty DIVs.
     * @param control DimensionPicker to decorate.
     * @param element The element to decorate.
     * @return The decorated element.
     */
    decorate(control: Control | null, element: Element | null): Element | null;
    /**
     * Scales various elements in order to update the palette's size.
     * @param palette The palette object.
     * @param element The element to set the style of.
     */
    updateSize(palette: DimensionPicker | null, element: Element | null): void;
    /**
     * Creates a div and adds the appropriate contents to it.
     * @param control Picker to render.
     * @return Root element for the palette.
     */
    createDom(control: Control | null): Element;
    /**
     * Initializes the control's DOM when the control enters the document.  Called
     * from {@link Control#enterDocument}.
     * @param control Palette whose DOM is to be initialized as it enters the document.
     */
    initializeDom(control: Control | null): void;
    /**
     * Get the element to listen for mouse move events on.
     * @param palette The palette to listen on.
     * @return The element to listen for mouse move events on.
     */
    getMouseMoveElement(palette: DimensionPicker | null): Element | null;
    /**
     * Returns the x offset in to the grid for the given mouse x position.
     * @param palette The table size palette.
     * @param x The mouse event x position.
     * @return The x offset in to the grid.
     */
    getGridOffsetX(palette: DimensionPicker | null, x: number): number;
    /**
     * Returns the y offset in to the grid for the given mouse y position.
     * @param palette The table size palette.
     * @param y The mouse event y position.
     * @return The y offset in to the grid.
     */
    getGridOffsetY(palette: DimensionPicker | null, y: number): number;
    /**
     * Sets the highlighted size. Does nothing if the palette hasn't been rendered.
     * @param palette The table size palette.
     * @param columns The number of columns to highlight.
     * @param rows The number of rows to highlight.
     */
    setHighlightedSize(palette: DimensionPicker | null, columns: number, rows: number): void;
    /**
     * Position the mouse catcher such that it receives mouse events past the
     * selectedsize up to the maximum size.  Takes care to not introduce scrollbars.
     * Should be called on enter document and when the window changes size.
     * @param palette The table size palette.
     */
    positionMouseCatcher(palette: DimensionPicker | null): void;
    /**
     * Returns the CSS class to be applied to the root element of components
     * rendered using this renderer.
     * @return Renderer-specific CSS class.
     */
    getCssClass(): string;
}

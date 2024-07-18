import { ColorPalette } from './colorpalette.js';
import { Component } from './component.js';
import type { DomHelper } from '../dom/dom.js';
import type { Size } from '../math/size.js';
/**
 * Create a new, empty color picker.
 */
export declare class ColorPicker extends Component {
    /**
     * Create a new, empty color picker.
     * @param opt_domHelper Optional DOM helper.
     * @param opt_colorPalette Optional color palette to use for this color picker.
     */
    constructor(opt_domHelper?: DomHelper | null, opt_colorPalette?: ColorPalette | null);
    private noStructuralTyping_closure_goog_ui_colorpicker_ColorPicker;
    /**
     * Default number of columns in the color palette. May be overridden by calling
     * setSize.
     */
    static DEFAULT_NUM_COLS: number;
    /**
     * Gets the array of colors displayed by the color picker.
     * Modifying this array will lead to unexpected behavior.
     * @return The colors displayed by this widget.
     */
    getColors(): string[] | null;
    /**
     * Sets the array of colors to be displayed by the color picker.
     * @param colors The array of colors to be added.
     */
    setColors(colors: string[] | null): void;
    /**
     * Sets the array of colors to be displayed by the color picker.
     * @param colors The array of colors to be added.
     */
    addColors(colors: string[] | null): void;
    /**
     * Sets the size of the palette.  Will throw an error after the picker has been
     * rendered.
     * @param size The size of the grid.
     */
    setSize(size: Size | number | null): void;
    /**
     * Gets the number of columns displayed.
     * @return The size of the grid.
     */
    getSize(): Size | null;
    /**
     * Sets the number of columns.  Will throw an error after the picker has been
     * rendered.
     * @param n The number of columns.
     */
    setColumnCount(n: number): void;
    getSelectedIndex(): number;
    /**
     * Sets which color is selected. A value that is out-of-range means that no
     * color is selected.
     * @param ind The index in this.colors_ of the selected color.
     */
    setSelectedIndex(ind: number): void;
    /**
     * Gets the color that is currently selected in this color picker.
     * @return The hex string of the color selected, or null if no color is selected.
     */
    getSelectedColor(): string | null;
    /**
     * Sets which color is selected.  Noop if the color palette hasn't been created
     * yet.
     * @param color The selected color.
     */
    setSelectedColor(color: string): void;
    /**
     * Returns true if the component is focusable, false otherwise.  The default
     * is true.  Focusable components always have a tab index and allocate a key
     * handler to handle keyboard events while focused.
     * @return True iff the component is focusable.
     */
    isFocusable(): boolean;
    /**
     * Sets whether the component is focusable.  The default is true.
     * Focusable components always have a tab index and allocate a key handler to
     * handle keyboard events while focused.
     * @param focusable True iff the component is focusable.
     */
    setFocusable(focusable: boolean): void;
    /**
     * ColorPickers cannot be used to decorate pre-existing html, since the
     * structure they build is fairly complicated.
     * @param element Element to decorate.
     * @return Returns always false.
     */
    canDecorate(element: Element | null): boolean;
    /**
     * Renders the color picker inside the provided element. This will override the
     * current content of the element.
     */
    enterDocument(): void;
    disposeInternal(): void;
    /**
     * Sets the focus to the color picker's palette.
     */
    focus(): void;
    /**
     * Returns an unrendered instance of the color picker.  The colors and layout
     * are a simple color grid, the same as the old Gmail color picker.
     * @param opt_domHelper Optional DOM helper.
     * @return The unrendered instance.
     */
    static createSimpleColorGrid(opt_domHelper?: DomHelper | null): ColorPicker;
    /**
     * Array of colors for a 7-cell wide simple-grid color picker.
     */
    static SIMPLE_GRID_COLORS: string[] | null;
}
export declare namespace ColorPicker {
    /**
     * Constants for event names.
     */
    enum EventType {
        CHANGE = "change"
    }
}

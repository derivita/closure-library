import { BrowserEvent } from '../events/browserevent.js';
import { Size } from '../math/size.js';
import { Control } from './control.js';
import { DimensionPickerRenderer } from './dimensionpickerrenderer.js';
import type { DomHelper } from '../dom/dom.js';
import type { Event } from '../events/event.js';
import type { KeyEvent } from '../events/keyevent.js';
/**
 * A dimension picker allows the user to visually select a row and column
 * count using their mouse and keyboard.
 *
 * The currently selected dimension is controlled by an ACTION event.  Event
 * listeners may retrieve the selected item using the
 * {@link #getValue} method.
 */
export declare class DimensionPicker extends Control {
    /**
     * A dimension picker allows the user to visually select a row and column
     * count using their mouse and keyboard.
     *
     * The currently selected dimension is controlled by an ACTION event.  Event
     * listeners may retrieve the selected item using the
     * {@link #getValue} method.
     * @param opt_renderer Renderer used to render or decorate the palette; defaults to {@link DimensionPickerRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(opt_renderer?: DimensionPickerRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_dimensionpicker_DimensionPicker;
    /**
     * Minimum number of columns to show in the grid.
     */
    minColumns: number;
    /**
     * Minimum number of rows to show in the grid.
     */
    minRows: number;
    /**
     * Maximum number of columns to show in the grid.
     */
    maxColumns: number;
    /**
     * Maximum number of rows to show in the grid.
     */
    maxRows: number;
    enterDocument(): void;
    exitDocument(): void;
    disposeInternal(): void;
    /**
     * Handles mousemove events. Determines which palette size was moused over and
     * highlights it.
     * @param e Mouse event to handle.
     */
    protected handleMouseMove(e: BrowserEvent | null): void;
    /**
     * Override `handleMouseDown` for pointer events.
     */
    handleMouseDown(e: any): void;
    /**
     * Override `handleMouseUp` for pointer events.
     */
    handleMouseUp(e: any): void;
    /**
     * Handles window resize events.  Ensures no scrollbars are introduced by the
     * renderer's mouse catcher.
     * @param e Resize event to handle.
     */
    protected handleWindowResize(e: Event | null): void;
    /**
     * Handle key events if supported, so the user can use the keyboard to
     * manipulate the highlighted rows and columns.
     * @param e The key event object.
     * @return Whether the key event was handled.
     */
    handleKeyEvent(e: KeyEvent | null): boolean;
    getSize(): Size | null;
    getValue(): Size;
    /**
     * Sets the currently highlighted dimensions. If the dimensions are not valid
     * (not between 1 and the maximum number of columns/rows to show), they will
     * be changed to the closest valid value.
     * @param columns The number of columns to highlight, or a Size object containing both.
     * @param opt_rows The number of rows to highlight.  Can be omitted when columns is a good.math.Size object.
     */
    setValue(columns: number | Size, opt_rows?: number): void;
}

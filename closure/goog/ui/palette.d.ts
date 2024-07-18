import * as dom from '../dom/dom.js';
import { Size } from '../math/size.js';
import { Control } from './control.js';
import { PaletteRenderer } from './paletterenderer.js';
import type { BrowserEvent } from '../events/browserevent.js';
import type { Event } from '../events/event.js';
import type { KeyEvent } from '../events/keyevent.js';
import type { ControlContent } from './controlcontent.js';
/**
 * A palette is a grid of DOM nodes that the user can highlight or select via
 * the keyboard or the mouse.  The selection state of the palette is controlled
 * an ACTION event.  Event listeners may retrieve the selected item using the
 * {@link #getSelectedItem} or {@link #getSelectedIndex} method.
 *
 * Use this class as the base for components like color palettes or emoticon
 * pickers.  Use {@link #setContent} to set/change the items in the palette
 * after construction.  See palette.html demo for example usage.
 */
export declare class Palette extends Control {
    /**
     * A palette is a grid of DOM nodes that the user can highlight or select via
     * the keyboard or the mouse.  The selection state of the palette is controlled
     * an ACTION event.  Event listeners may retrieve the selected item using the
     * {@link #getSelectedItem} or {@link #getSelectedIndex} method.
     *
     * Use this class as the base for components like color palettes or emoticon
     * pickers.  Use {@link #setContent} to set/change the items in the palette
     * after construction.  See palette.html demo for example usage.
     * @param items Array of DOM nodes to be displayed as items in the palette grid (limited to one per cell).
     * @param opt_renderer Renderer used to render or decorate the palette; defaults to {@link PaletteRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(items: (Node | null)[] | null, opt_renderer?: PaletteRenderer | null, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_palette_Palette;
    disposeInternal(): void;
    /**
     * Overrides {@link Control#setContentInternal} by also updating the
     * grid size and the selection model.  Considered protected.
     * @param content Array of DOM nodes to be displayed as items in the palette grid (one item per cell).
     */
    setContentInternal(content: ControlContent | null): void;
    /**
     * Overrides {@link Control#getCaption} to return the empty string,
     * since palettes don't have text captions.
     * @return The empty string.
     */
    getCaption(): string;
    /**
     * Overrides {@link Control#setCaption} to be a no-op, since palettes
     * don't have text captions.
     * @param caption Ignored.
     */
    setCaption(caption: string): void;
    /**
     * Handles mouseover events.  Overrides {@link Control#handleMouseOver}
     * by determining which palette item (if any) was moused over, highlighting it,
     * and un-highlighting any previously-highlighted item.
     * @param e Mouse event to handle.
     */
    handleMouseOver(e: BrowserEvent | null): void;
    /**
     * Handles mousedown events.  Overrides {@link Control#handleMouseDown}
     * by ensuring that the item on which the user moused down is highlighted.
     * @param e Mouse event to handle.
     */
    handleMouseDown(e: Event | null): void;
    /**
     * Selects the currently highlighted palette item (triggered by mouseup or by
     * keyboard action).  Overrides {@link Control#performActionInternal}
     * by selecting the highlighted item and dispatching an ACTION event.
     * @param e Mouse or key event that triggered the action.
     * @return True if the action was allowed to proceed, false otherwise.
     */
    performActionInternal(e: Event | null): boolean;
    /**
     * Handles keyboard events dispatched while the palette has focus.  Moves the
     * highlight on arrow keys, and selects the highlighted item on Enter or Space.
     * Returns true if the event was handled, false otherwise.  In particular, if
     * the user attempts to navigate out of the grid, the highlight isn't changed,
     * and this method returns false; it is then up to the parent component to
     * handle the event (e.g. by wrapping the highlight around).  Overrides {@link
     * Control#handleKeyEvent}.
     * @param e Key event to handle.
     * @return True iff the key event was handled by the component.
     */
    handleKeyEvent(e: KeyEvent | null): boolean;
    /**
     * Handles selection change events dispatched by the selection model.
     * @param e Selection event to handle.
     */
    handleSelectionChange(e: Event | null): void;
    /**
     * Returns the size of the palette grid.
     * @return Palette size (columns x rows).
     */
    getSize(): Size | null;
    /**
     * Sets the size of the palette grid to the given size.  Callers can either
     * pass a single {@link Size} or a pair of numbers (first the number
     * of columns, then the number of rows) to this method.  In both cases, the
     * number of rows is optional and will be calculated automatically if needed.
     * It is an error to attempt to change the size of the palette after it has
     * been rendered.
     * @param size Either a size object or the number of columns.
     * @param opt_rows The number of rows (optional).
     */
    setSize(size: Size | number | null, opt_rows?: number): void;
    /**
     * Returns the 0-based index of the currently highlighted palette item, or -1
     * if no item is highlighted.
     * @return Index of the highlighted item (-1 if none).
     */
    getHighlightedIndex(): number;
    /**
     * Returns the currently highlighted palette item, or null if no item is
     * highlighted.
     * @return The highlighted item (undefined if none).
     */
    getHighlightedItem(): Node | null;
    /**
     * Highlights the item at the given 0-based index, or removes the highlight
     * if the argument is -1 or out of range.  Any previously-highlighted item
     * will be un-highlighted.
     * @param index 0-based index of the item to highlight.
     */
    setHighlightedIndex(index: number): void;
    /**
     * Highlights the given item, or removes the highlight if the argument is null
     * or invalid.  Any previously-highlighted item will be un-highlighted.
     * @param item Item to highlight.
     */
    setHighlightedItem(item: Node | undefined | null): void;
    /**
     * Returns the 0-based index of the currently selected palette item, or -1
     * if no item is selected.
     * @return Index of the selected item (-1 if none).
     */
    getSelectedIndex(): number;
    /**
     * Returns the currently selected palette item, or null if no item is selected.
     * @return The selected item (null if none).
     */
    getSelectedItem(): Node | null;
    /**
     * Selects the item at the given 0-based index, or clears the selection
     * if the argument is -1 or out of range.  Any previously-selected item
     * will be deselected.
     * @param index 0-based index of the item to select.
     */
    setSelectedIndex(index: number): void;
    /**
     * Selects the given item, or clears the selection if the argument is null or
     * invalid.  Any previously-selected item will be deselected.
     * @param item Item to select.
     */
    setSelectedItem(item: Node | null): void;
    setHighlighted(highlight: any): void;
}
export declare namespace Palette {
    /**
     * Events fired by the palette object
     */
    type EventType = string;
    const EventType: {
        AFTER_HIGHLIGHT: string;
    };
    /**
     * A component to represent the currently highlighted cell.
     */
    class CurrentCell_ extends Control {
        /**
         * A component to represent the currently highlighted cell.
         */
        constructor();
        private noStructuralTyping_closure_goog_ui_palette_CurrentCell_;
        /**
         *
         * @param highlight Whether to highlight or unhighlight the component.
         * @return Whether it was successful.
         */
        tryHighlight(highlight: boolean): boolean;
    }
}

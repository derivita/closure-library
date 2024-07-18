import * as googDom from '../dom/dom.js';
import { Component } from './component.js';
import { Menu } from './menu.js';
import type { BrowserEvent } from '../events/browserevent.js';
import type { KeyEvent } from '../events/keyevent.js';
import type { Control } from './control.js';
import type { MenuRenderer } from './menurenderer.js';
/**
 * Filtered menu class.
 */
export declare class FilteredMenu extends Menu {
    /**
     * Filtered menu class.
     * @param opt_renderer Renderer used to render filtered menu; defaults to {@link MenuRenderer}.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(opt_renderer?: MenuRenderer | null, opt_domHelper?: googDom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_filteredmenu_FilteredMenu;
    createDom(): void;
    setVisible(show: any, opt_force: any, opt_e: any): boolean;
    disposeInternal(): void;
    /**
     * Sets the filter label (the label displayed in the filter input element if no
     * text has been entered).
     * @param label Label text.
     */
    setFilterLabel(label: string | null): void;
    getFilterLabel(): string;
    /**
     * Sets the filter string.
     * @param str Filter string.
     */
    setFilter(str: string | null): void;
    /**
     * Returns the filter string.
     * @return Current filter or an an empty string.
     */
    getFilter(): string;
    /**
     * Sets the index of first item that should be affected by the filter. Menu
     * items with a lower index will not be affected by the filter.
     * @param index Index of first item that should be affected by filter.
     */
    setFilterFromIndex(index: number): void;
    /**
     * Returns the index of first item that is affected by the filter.
     * @return Index of first item that is affected by filter.
     */
    getFilterFromIndex(): number;
    /**
     * Gets a list of items entered in the search box.
     * @return The entered items.
     */
    getEnteredItems(): string[];
    /**
     * Sets whether multiple items can be entered comma separated.
     * @param b Whether multiple items can be entered.
     */
    setAllowMultiple(b: boolean): void;
    getAllowMultiple(): boolean;
    /**
     * Sets whether the specified child should be affected (shown/hidden) by the
     * filter criteria.
     * @param child Child to change.
     * @param persistent Whether the child should be persistent.
     */
    setPersistentVisibility(child: Component | null, persistent: boolean): void;
    /**
     * Returns whether the specified child should be affected (shown/hidden) by the
     * filter criteria.
     * @param child Menu item to check.
     * @return Whether the menu item is persistent.
     */
    hasPersistentVisibility(child: Component | null): boolean;
    /**
     * Handles filter input events.
     * @param e The event object.
     */
    handleFilterEvent(e: BrowserEvent | null): void;
    /**
     * Updates the content of the given menu item, bolding the part of its caption
     * from start and through the next len characters.
     * @param child The control to bold content on.
     * @param start The index at which to start bolding.
     * @param len How many characters to bold.
     */
    protected boldContent(child: Control, start: number, len: number): void;
    /**
     * Handles the menu's behavior for a key event. The highlighted menu item will
     * be given the opportunity to handle the key behavior.
     * @param e A browser event.
     * @return Whether the event was handled.
     */
    handleKeyEventInternal(e: KeyEvent | null): boolean;
    /**
     * Sets the highlighted index, unless the HIGHLIGHT event is intercepted and
     * cancelled.  -1 = no highlight. Also scrolls the menu item into view.
     * @param index Index of menu item to highlight.
     */
    setHighlightedIndex(index: number): void;
    getContentElement(): Element;
    /**
     * Returns the filter input element.
     * @return Input element.
     */
    getFilterInputElement(): Element | null;
    decorateInternal(element: any): void;
}
export declare namespace FilteredMenu {
    /**
     * Events fired by component.
     */
    enum EventType {
        FILTER_CHANGED = "filterchange"
    }
    /**
     * Filter menu element ids.
     */
    enum Id_ {
        CONTENT_ELEMENT = "content-el"
    }
}

import { Coordinate } from '../math/coordinate.js';
import { Component } from './component.js';
import { Container } from './container.js';
import { MenuHeader } from './menuheader.js';
import { MenuItem } from './menuitem.js';
import { MenuRenderer } from './menurenderer.js';
import { MenuSeparator } from './menuseparator.js';
import type { DomHelper } from '../dom/dom.js';
import type { Event } from '../events/event.js';
/**
 * A basic menu class.
 */
export declare class Menu extends Container {
    /**
     * A basic menu class.
     * @param opt_domHelper Optional DOM helper.
     * @param opt_renderer Renderer used to render or decorate the container; defaults to {@link MenuRenderer}.
     */
    constructor(opt_domHelper?: DomHelper | null, opt_renderer?: MenuRenderer | null);
    private noStructuralTyping_closure_goog_ui_menu_Menu;
    /**
     * CSS class for menus.
     */
    static CSS_CLASS: string;
    /**
     * Coordinates of the mousedown event that caused this menu to be made visible.
     * Used to prevent the consequent mouseup event due to a simple click from
     * activating a menu item immediately. Considered protected; should only be used
     * within this package or by subclasses.
     */
    openingCoords: Coordinate | undefined | null;
    /**
     * Returns the CSS class applied to menu elements, also used as the prefix for
     * derived styles, if any.  Subclasses should override this method as needed.
     * Considered protected.
     * @return The CSS class applied to menu elements.
     */
    protected getCssClass(): string;
    /**
     * Returns whether the provided element is to be considered inside the menu for
     * purposes such as dismissing the menu on an event.  This is so submenus can
     * make use of elements outside their own DOM.
     * @param element The element to test for.
     * @return Whether the provided element is to be considered inside the menu.
     */
    containsElement(element: Element | null): boolean;
    /**
     * Adds a new menu item at the end of the menu.
     * @param item Menu item to add to the menu.
     */
    addItem(item: MenuHeader | MenuItem | MenuSeparator | null): void;
    /**
     * Adds a new menu item at a specific index in the menu.
     * @param item Menu item to add to the menu.
     * @param n Index at which to insert the menu item.
     */
    addItemAt(item: MenuHeader | MenuItem | MenuSeparator | null, n: number): void;
    /**
     * Removes an item from the menu and disposes of it.
     * @param item The menu item to remove.
     */
    removeItem(item: MenuHeader | MenuItem | MenuSeparator | null): void;
    /**
     * Removes a menu item at a given index in the menu and disposes of it.
     * @param n Index of item.
     */
    removeItemAt(n: number): void;
    /**
     * Returns a reference to the menu item at a given index.
     * @param n Index of menu item.
     * @return Reference to the menu item.
     */
    getItemAt(n: number): MenuHeader | MenuItem | MenuSeparator | null | null;
    /**
     * Returns the number of items in the menu (including separators).
     * @return The number of items in the menu.
     */
    getItemCount(): number;
    /**
     * Returns an array containing the menu items contained in the menu.
     * @return An array of menu items.
     */
    getItems(): (MenuItem | null)[];
    /**
     * Sets the position of the menu relative to the view port.
     * @param x Left position or coordinate obj.
     * @param opt_y Top position.
     */
    setPosition(x: number | Coordinate | null, opt_y?: number): void;
    /**
     * Gets the page offset of the menu, or null if the menu isn't visible
     * @return Object holding the x-y coordinates of the menu or null if the menu is not visible.
     */
    getPosition(): Coordinate | null;
    /**
     * Sets whether the menu can automatically move focus to its key event target
     * when it is set to visible.
     * @param allow Whether the menu can automatically move focus to its key event target when it is set to visible.
     */
    setAllowAutoFocus(allow: boolean): void;
    getAllowAutoFocus(): boolean;
    /**
     * Sets whether the menu will highlight disabled menu items or skip to the next
     * active item.
     * @param allow Whether the menu will highlight disabled menu items or skip to the next active item.
     */
    setAllowHighlightDisabled(allow: boolean): void;
    getAllowHighlightDisabled(): boolean;
    /**
     *
     * @param show Whether to show or hide the menu.
     * @param opt_force If true, doesn't check whether the menu already has the requested visibility, and doesn't dispatch any events.
     * @param opt_e Mousedown event that caused this menu to be made visible (ignored if show is false).
     */
    setVisible(show: boolean, opt_force?: boolean, opt_e?: Event | null): boolean;
    handleEnterItem(e: any): boolean;
    /**
     * Highlights the next item that begins with the specified string.  If no
     * (other) item begins with the given string, the selection is unchanged.
     * @param charStr The prefix to match.
     * @return Whether a matching prefix was found.
     */
    highlightNextPrefix(charStr: string): boolean;
    canHighlightItem(item: any): boolean;
    decorateInternal(element: any): void;
    handleKeyEventInternal(e: any): boolean;
    setHighlightedIndex(index: any): void;
    /**
     * Decorate menu items located in any descendant node which as been explicitly
     * marked as a 'content' node.
     * @param element Element to decorate.
     */
    protected decorateContent(element: Element | null): void;
}
export declare namespace Menu {
    /**
     * Event types dispatched by the menu.
     */
    type EventType = string;
    const EventType: {
        BEFORE_SHOW: Component.ComponentEventType;
        SHOW: Component.ComponentEventType;
        BEFORE_HIDE: Component.ComponentEventType;
        HIDE: Component.ComponentEventType;
    };
}

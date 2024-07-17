import * as dom from '../dom/dom.js';
import { Component } from './component.js';
import { Menu } from './menu.js';
import { MenuItem } from './menuitem.js';
import type { BrowserEvent } from '../events/browserevent.js';
import type { Event } from '../events/event.js';
import type { KeyEvent } from '../events/keyevent.js';
import type { ControlContent } from './controlcontent.js';
import type { MenuHeader } from './menuheader.js';
import type { MenuItemRenderer } from './menuitemrenderer.js';
import type { MenuSeparator } from './menuseparator.js';
/**
 * Class representing a submenu that can be added as an item to other menus.
 */
export declare class SubMenu extends MenuItem {
    /**
     * Class representing a submenu that can be added as an item to other menus.
     * @param content Text caption or DOM structure to display as the content of the submenu (use to add icons or styling to menus).
     * @param opt_model Data/model associated with the menu item.
     * @param opt_domHelper Optional dom helper used for dom interactions.
     * @param opt_renderer Renderer used to render or decorate the component; defaults to {@link SubMenuRenderer}.
     */
    constructor(content: ControlContent | null, opt_model?: any, opt_domHelper?: dom.DomHelper | null, opt_renderer?: MenuItemRenderer | null);
    private noStructuralTyping_closure_goog_ui_submenu_SubMenu;
    /**
     * The delay before opening the sub menu in milliseconds.
     */
    static MENU_DELAY_MS: number;
    enterDocument(): void;
    exitDocument(): void;
    disposeInternal(): void;
    /**
     *
     * @param highlight Whether item should be highlighted.
     * @param opt_btnPressed Whether the mouse button is held down.
     */
    setHighlighted(highlight: boolean, opt_btnPressed?: boolean): void;
    /**
     * Show the submenu and ensure that all siblings are hidden.
     */
    showSubMenu(): void;
    /**
     * Dismisses the menu and all further submenus.
     */
    dismissSubMenu(): void;
    /**
     * Clears the show and hide timers for the sub menu.
     */
    clearTimers(): void;
    /**
     * Sets the menu item to be visible or invisible.
     * @param visible Whether to show or hide the component.
     * @param opt_force If true, doesn't check whether the component already has the requested visibility, and doesn't dispatch any events.
     * @return Whether the visibility was changed.
     */
    setVisible(visible: boolean, opt_force?: boolean): boolean;
    /**
     * Handles a key event that is passed to the menu item from its parent because
     * it is highlighted.  If the arrow keys or enter key is pressed the sub menu
     * takes control and delegates further key events to its menu until it is
     * dismissed.
     * @param e A key event.
     * @return Whether the event was handled.
     */
    handleKeyEvent(e: KeyEvent | null): boolean;
    /**
     *
     * @param e Mouse event to handle.
     */
    handleMouseOver(e: BrowserEvent | null): void;
    /**
     * Returns the delay before opening or closing the menu in milliseconds.
     */
    protected getMenuDelay(): number;
    /**
     * Overrides the default mouseup event handler, so that the ACTION isn't
     * dispatched for the submenu itself, instead the submenu is shown instantly.
     * @param e The browser event.
     * @return True if the action was allowed to proceed, false otherwise.
     */
    performActionInternal(e: Event | null): boolean;
    /**
     * Sets whether the submenu is aligned at the end of the parent menu.
     * @param alignToEnd True to align to end, false to align to start.
     */
    setAlignToEnd(alignToEnd: boolean): void;
    /**
     * Determines whether the submenu is aligned at the end of the parent menu.
     * @return True if aligned to the end (the default), false if aligned to the start.
     */
    isAlignedToEnd(): boolean;
    /**
     * Positions the submenu. This method should be called if the sub menu is
     * opened and the menu element's size changes (e.g., when adding/removing items
     * to an opened sub menu).
     */
    positionSubMenu(): void;
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
     * Removes an item from the menu and disposes it.
     * @param item The menu item to remove.
     */
    removeItem(item: MenuItem | null): void;
    /**
     * Removes a menu item at a given index in the menu and disposes it.
     * @param n Index of item.
     */
    removeItemAt(n: number): void;
    /**
     * Returns a reference to the menu item at a given index.
     * @param n Index of menu item.
     * @return Reference to the menu item.
     */
    getItemAt(n: number): Component | null;
    /**
     * Returns the number of items in the sub menu (including separators).
     * @return The number of items in the menu.
     */
    getItemCount(): number;
    /**
     * Returns the menu items contained in the sub menu.
     * @return An array of menu items.
     */
    getItems(): MenuItem[];
    /**
     * Gets a reference to the submenu's actual menu.
     * @return Reference to the object representing the sub menu.
     */
    getMenu(): Menu;
    /**
     * Sets the submenu to a specific menu.
     * @param menu The menu to show when this item is selected.
     * @param opt_internal Whether this menu is an "internal" menu, and should be disposed of when this object is disposed of.
     */
    setMenu(menu: Menu | null, opt_internal?: boolean): void;
    /**
     * Returns true if the provided element is to be considered inside the menu for
     * purposes such as dismissing the menu on an event.  This is so submenus can
     * make use of elements outside their own DOM.
     * @param element The element to test for.
     * @return Whether or not the provided element is contained.
     */
    containsElement(element: Element | null): boolean;
    /**
     *
     * @param isAdjustable Whether this submenu is adjustable.
     */
    setPositionAdjustable(isAdjustable: boolean): void;
    isPositionAdjustable(): boolean;
}

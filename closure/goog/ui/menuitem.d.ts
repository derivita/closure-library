import { Role } from '../a11y/aria/roles.js';
import * as googDom from '../dom/dom.js';
import { Control } from './control.js';
import { MenuItemRenderer } from './menuitemrenderer.js';
import type { KeyCodes } from '../events/keycodes.js';
import type { ControlContent } from './controlcontent.js';
import type { Menu } from './menu.js';
/**
 * Class representing an item in a menu.
 */
export declare class MenuItem extends Control {
    /**
     * Class representing an item in a menu.
     * @param content Text caption or DOM structure to display as the content of the item (use to add icons or styling to menus).
     * @param opt_model Data/model associated with the menu item.
     * @param opt_domHelper Optional DOM helper used for document interactions.
     * @param opt_renderer Optional renderer.
     */
    constructor(content: ControlContent | null, opt_model?: any, opt_domHelper?: googDom.DomHelper | null, opt_renderer?: MenuItemRenderer | null);
    private noStructuralTyping_closure_goog_ui_menuitem_MenuItem;
    /**
     * The class set on an element that contains a keyboard accelerator hint.
     */
    static ACCELERATOR_CLASS: string;
    /**
     * Returns the value associated with the menu item.  The default implementation
     * returns the model object associated with the item (if any), or its caption.
     * @return Value associated with the menu item, if any, or its caption.
     */
    getValue(): any;
    /**
     * Sets the value associated with the menu item.  The default implementation
     * stores the value as the model of the menu item.
     * @param value Value to be associated with the menu item.
     */
    setValue(value: any): void;
    setSupportedState(state: any, support: any): void;
    /**
     * Sets the menu item to be selectable or not.  Set to true for menu items
     * that represent selectable options.
     * @param selectable Whether the menu item is selectable.
     */
    setSelectable(selectable: boolean): void;
    /**
     * Sets the menu item to be checkable or not.  Set to true for menu items
     * that represent checkable options.
     * @param checkable Whether the menu item is checkable.
     */
    setCheckable(checkable: boolean): void;
    /**
     * Returns the text caption of the component while ignoring accelerators.
     */
    getCaption(): string;
    getAccelerator(): string | null;
    handleMouseUp(e: any): void;
    handleKeyEventInternal(e: any): boolean;
    /**
     * Sets the mnemonic key code. The mnemonic is the key associated with this
     * action.
     * @param key The key code.
     */
    setMnemonic(key: KeyCodes | null): void;
    /**
     * Gets the mnemonic key code. The mnemonic is the key associated with this
     * action.
     * @return The key code of the mnemonic key.
     */
    getMnemonic(): KeyCodes | null;
    getPreferredAriaRole(): Role;
    getParent(): Menu | null;
    getParentEventTarget(): Menu | null;
}

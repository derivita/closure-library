import * as dom from '../dom/dom.js';
import { Component } from './component.js';
import { LabelInput } from './labelinput.js';
import { Menu } from './menu.js';
import { MenuItem } from './menuitem.js';
import type { KeyEvent } from '../events/keyevent.js';
import type { ControlContent } from './controlcontent.js';
import type { MenuItemRenderer } from './menuitemrenderer.js';
/**
 * A ComboBox control.
 */
export declare class ComboBox extends Component {
    /**
     * A ComboBox control.
     * @param opt_domHelper Optional DOM helper.
     * @param opt_menu Optional menu component. This menu is disposed of by this control.
     * @param opt_labelInput Optional label input. This label input is disposed of by this control.
     */
    constructor(opt_domHelper?: dom.DomHelper | null, opt_menu?: Menu | null, opt_labelInput?: LabelInput | null);
    private noStructuralTyping_closure_goog_ui_combobox_ComboBox;
    /**
     * Number of milliseconds to wait before dismissing combobox after blur.
     */
    static BLUR_DISMISS_TIMER_MS: number;
    /**
     * Create the DOM objects needed for the combo box.  A span and text input.
     */
    createDom(): void;
    /**
     * Enables/Disables the combo box.
     * @param enabled Whether to enable (true) or disable (false) the combo box.
     */
    setEnabled(enabled: boolean): void;
    isEnabled(): boolean;
    enterDocument(): void;
    exitDocument(): void;
    /**
     * Combo box currently can't decorate elements.
     * @return The value false.
     */
    canDecorate(): boolean;
    disposeInternal(): void;
    /**
     * Dismisses the menu and resets the value of the edit field.
     */
    dismiss(): void;
    /**
     * Adds a new menu item at the end of the menu.
     * @param item Menu item to add to the menu.
     */
    addItem(item: MenuItem | null): void;
    /**
     * Adds a new menu item at a specific index in the menu.
     * @param item Menu item to add to the menu.
     * @param n Index at which to insert the menu item.
     */
    addItemAt(item: MenuItem | null, n: number): void;
    /**
     * Removes an item from the menu and disposes it.
     * @param item The menu item to remove.
     */
    removeItem(item: MenuItem | null): void;
    /**
     * Remove all of the items from the ComboBox menu
     */
    removeAllItems(): void;
    /**
     * Removes a menu item at a given index in the menu.
     * @param n Index of item.
     */
    removeItemAt(n: number): void;
    /**
     * Returns a reference to the menu item at a given index.
     * @param n Index of menu item.
     * @return Reference to the menu item.
     */
    getItemAt(n: number): MenuItem | null;
    /**
     * Returns the number of items in the list, including non-visible items,
     * such as separators.
     * @return Number of items in the menu for this combobox.
     */
    getItemCount(): number;
    getMenu(): Menu | null;
    getInputElement(): Element | null;
    getLabelInput(): LabelInput | null;
    /**
     * Sets the match function to be used when filtering the combo box menu.
     * @param matchFunction The match function to be used when filtering the combo box menu.
     */
    setMatchFunction(matchFunction: Function | null): void;
    getMatchFunction(): Function | null;
    /**
     * Sets the default text for the combo box.
     * @param text The default text for the combo box.
     */
    setDefaultText(text: string): void;
    getDefaultText(): string;
    /**
     * Sets the field name for the combo box.
     * @param fieldName The field name for the combo box.
     */
    setFieldName(fieldName: string): void;
    getFieldName(): string;
    /**
     * Set to true if a unicode inverted triangle should be displayed in the
     * dropdown button.
     * This option defaults to false for backwards compatibility.
     * @param useDropdownArrow True to use the dropdown arrow.
     */
    setUseDropdownArrow(useDropdownArrow: boolean): void;
    /**
     * Sets the current value of the combo box.
     * @param value The new value.
     */
    setValue(value: string): void;
    getValue(): string;
    getToken(): string;
    /**
     * Positions the menu.
     */
    protected positionMenu(): void;
    /**
     * Handles keyboard events from the input box.  Returns true if the combo box
     * was able to handle the event, false otherwise.
     * @param e Key event to handle.
     * @return Whether the event was handled by the combo box.
     */
    protected handleKeyEvent(e: KeyEvent | null): boolean;
}
/**
 * Class for combo box items.
 */
export declare class ComboBoxItem extends MenuItem {
    /**
     * Class for combo box items.
     * @param content Text caption or DOM structure to display as the content of the item (use to add icons or styling to menus).
     * @param opt_data Identifying data for the menu item.
     * @param opt_domHelper Optional dom helper used for dom interactions.
     * @param opt_renderer Optional renderer.
     */
    constructor(content: ControlContent | null, opt_data?: any, opt_domHelper?: dom.DomHelper | null, opt_renderer?: MenuItemRenderer | null);
    private noStructuralTyping_closure_goog_ui_combobox_ComboBoxItem;
    /**
     * Sets the menu item to be sticky or not sticky.
     * @param sticky Whether the menu item should be sticky.
     */
    setSticky(sticky: boolean): void;
    isSticky(): boolean;
    /**
     * Sets the format for a menu item based on a token, bolding the token.
     * @param token The token.
     */
    setFormatFromToken(token: string): void;
}

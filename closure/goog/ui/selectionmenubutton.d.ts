import { MenuButton } from './menubutton.js';
import type { DomHelper } from '../dom/dom.js';
import type { BrowserEvent } from '../events/browserevent.js';
import type { ButtonRenderer } from './buttonrenderer.js';
import type { MenuItemRenderer } from './menuitemrenderer.js';
/**
 * A selection menu button control.  Extends {@link MenuButton}.
 * Menu contains 'select all' and 'select none' MenuItems for selecting all and
 * no items by default. Other MenuItems can be added by user.
 *
 * The checkbox content fires the action events associated with the 'select all'
 * and 'select none' menu items.
 */
export declare class SelectionMenuButton extends MenuButton {
    /**
     * A selection menu button control.  Extends {@link MenuButton}.
     * Menu contains 'select all' and 'select none' MenuItems for selecting all and
     * no items by default. Other MenuItems can be added by user.
     *
     * The checkbox content fires the action events associated with the 'select all'
     * and 'select none' menu items.
     * @param opt_renderer Renderer used to render or decorate the menu button; defaults to {@link MenuButtonRenderer}.
     * @param opt_itemRenderer Optional menu item renderer.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(opt_renderer?: ButtonRenderer | null, opt_itemRenderer?: MenuItemRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_selectionmenubutton_SelectionMenuButton;
    /**
     * Select button state
     */
    protected selectionState: SelectionMenuButton.SelectionState | null;
    /**
     * Enables button and embedded checkbox.
     * @param enable Whether to enable or disable the button.
     */
    setEnabled(enable: boolean): void;
    /**
     * Enables the embedded checkbox.
     * @param enable Whether to enable or disable the checkbox.
     */
    protected setCheckboxEnabled(enable: boolean): void;
    handleMouseDown(e: any): void;
    /**
     * Gets the checkbox element. Needed because if decorating html, getContent()
     * may include and comment/text elements in addition to the input element.
     * @return Checkbox.
     */
    protected getCheckboxElement(): Element | null;
    /**
     * Checkbox click handler.
     * @param e Checkbox click event.
     */
    protected handleCheckboxClick(e: BrowserEvent | null): void;
    /**
     * Set up events related to the checkbox.
     */
    protected addCheckboxEvent(): void;
    /**
     * Adds the checkbox to the button, and adds 2 items to the menu corresponding
     * to 'select all' and 'select none'.
     */
    createDom(): void;
    /**
     * Creates and adds the checkbox to the button.
     */
    protected createCheckbox(): void;
    decorateInternal(element: any): void;
    setMenu(menu: any): import("./menu.js").Menu;
    /**
     * Set selection state and update checkbox.
     * @param state Selection state.
     */
    setSelectionState(state: SelectionMenuButton.SelectionState | null): void;
    /**
     * Get selection state.
     * @return Selection state.
     */
    getSelectionState(): SelectionMenuButton.SelectionState | null;
}
export declare namespace SelectionMenuButton {
    /**
     * Constants for menu action types.
     */
    enum SelectionState {
        ALL = 0,
        SOME = 1,
        NONE = 2
    }
}

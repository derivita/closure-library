import { MenuButton } from './menubutton.js';
import { MenuItem } from './menuitem.js';
import { MenuRenderer } from './menurenderer.js';
import { SelectionModel } from './selectionmodel.js';
import type { DomHelper } from '../dom/dom.js';
import type { Event } from '../events/event.js';
import type { ButtonRenderer } from './buttonrenderer.js';
import type { Control } from './control.js';
import type { ControlContent } from './controlcontent.js';
import type { Menu } from './menu.js';
import type { MenuSeparator } from './menuseparator.js';
/**
 * A selection control.  Extends {@link MenuButton} by composing a
 * menu with a selection model, and automatically updating the button's caption
 * based on the current selection.
 *
 * Select fires the following events:
 * CHANGE - after selection changes.
 */
export declare class Select extends MenuButton {
    /**
     * A selection control.  Extends {@link MenuButton} by composing a
     * menu with a selection model, and automatically updating the button's caption
     * based on the current selection.
     *
     * Select fires the following events:
     * CHANGE - after selection changes.
     * @param opt_caption Default caption or existing DOM structure to display as the button's caption when nothing is selected. Defaults to no caption.
     * @param opt_menu Menu containing selection options.
     * @param opt_renderer Renderer used to render or decorate the control; defaults to {@link MenuButtonRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     * @param opt_menuRenderer Renderer used to render or decorate the menu; defaults to {@link MenuRenderer}.
     */
    constructor(opt_caption?: ControlContent | null, opt_menu?: Menu | null, opt_renderer?: ButtonRenderer | null, opt_domHelper?: DomHelper | null, opt_menuRenderer?: MenuRenderer);
    private noStructuralTyping_closure_goog_ui_select_Select;
    enterDocument(): void;
    /**
     * Decorates the given element with this control.  Overrides the superclass
     * implementation by initializing the default caption on the select button.
     * @param element Element to decorate.
     */
    decorateInternal(element: Element | null): void;
    disposeInternal(): void;
    /**
     * Handles {@link Component.ComponentEventType.ACTION} events dispatched by
     * the menu item clicked by the user.  Updates the selection model, calls
     * the superclass implementation to hide the menu, stops the propagation of
     * the event, and dispatches an ACTION event on behalf of the select control
     * itself.  Overrides {@link MenuButton#handleMenuAction}.
     * @param e Action event to handle.
     */
    handleMenuAction(e: Event | null): void;
    /**
     * Handles {@link EventType.SELECT} events raised by the
     * selection model when the selection changes.  Updates the contents of the
     * select button.
     * @param e Selection event to handle.
     */
    handleSelectionChange(e: Event | null): void;
    /**
     * Replaces the menu currently attached to the control (if any) with the given
     * argument, and updates the selection model.  Does nothing if the new menu is
     * the same as the old one.  Overrides {@link MenuButton#setMenu}.
     * @param menu New menu to be attached to the menu button.
     * @return Previous menu (undefined if none).
     */
    setMenu(menu: Menu | null): Menu | undefined | null;
    /**
     * Returns the default caption to be shown when no option is selected.
     * @return Default caption.
     */
    getDefaultCaption(): ControlContent | null;
    /**
     * Sets the default caption to the given string or DOM structure.
     * @param caption Default caption to be shown when no option is selected.
     */
    setDefaultCaption(caption: ControlContent | null): void;
    /**
     * Adds a new menu item at the end of the menu.
     * @param item Menu item to add to the menu.
     */
    addItem(item: Control | null): void;
    /**
     * Adds a new menu item at a specific index in the menu.
     * @param item Menu item to add to the menu.
     * @param index Index at which to insert the menu item.
     */
    addItemAt(item: MenuItem | MenuSeparator | null, index: number): void;
    /**
     * Removes an item from the menu and disposes it.
     * @param item The menu item to remove.
     */
    removeItem(item: MenuItem | MenuSeparator | null): void;
    /**
     * Removes a menu item at a given index in the menu and disposes it.
     * @param index Index of item.
     */
    removeItemAt(index: number): void;
    /**
     * Selects the specified option (assumed to be in the select menu), and
     * deselects the previously selected option, if any.  A null argument clears
     * the selection.
     * @param item Option to be selected (null to clear the selection).
     */
    setSelectedItem(item: MenuItem | null): void;
    /**
     * Selects the option at the specified index, or clears the selection if the
     * index is out of bounds.
     * @param index Index of the option to be selected.
     */
    setSelectedIndex(index: number): void;
    /**
     * Selects the first option found with an associated value equal to the
     * argument, or clears the selection if no such option is found.  A null
     * argument also clears the selection.  Overrides {@link
     * goog.ui.Button#setValue}.
     * @param value Value of the option to be selected (null to clear the selection).
     */
    setValue(value: any): void;
    /**
     * Gets the value associated with the currently selected option (null if none).
     *
     * Note that unlike {@link goog.ui.Button#getValue} which this method overrides,
     * the "value" of a Select instance is the value of its selected menu item, not
     * its own value. This makes a difference because the "value" of a Button is
     * reset to the value of the element it decorates when it's added to the DOM
     * (via ButtonRenderer), whereas the value of the selected item is unaffected.
     * So while setValue() has no effect on a Button before it is added to the DOM,
     * it will make a persistent change to a Select instance (which is consistent
     * with any changes made by {@link Select#setSelectedItem} and
     * {@link Select#setSelectedIndex}).
     */
    getValue(): any;
    /**
     * Returns the currently selected option.
     * @return The currently selected option (null if none).
     */
    getSelectedItem(): MenuItem | null;
    /**
     * Returns the index of the currently selected option.
     * @return 0-based index of the currently selected option (-1 if none).
     */
    getSelectedIndex(): number;
    protected getSelectionModel(): SelectionModel | null;
    /**
     * Updates the caption to be shown in the select button.  If no option is
     * selected and a default caption is set, sets the caption to the default
     * caption; otherwise to the empty string.
     */
    protected updateCaption(): void;
    /**
     * Opens or closes the menu.  Overrides {@link MenuButton#setOpen} by
     * highlighting the currently selected option on open.
     * @param open Whether to open or close the menu.
     * @param opt_e Mousedown event that caused the menu to be opened.
     */
    setOpen(open: boolean, opt_e?: Event | null): void;
}

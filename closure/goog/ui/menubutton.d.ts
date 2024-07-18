import * as dom from '../dom/dom.js';
import { Box } from '../math/box.js';
import { Button } from './button.js';
import { Menu } from './menu.js';
import { MenuItem } from './menuitem.js';
import { MenuRenderer } from './menurenderer.js';
import type { BrowserEvent } from '../events/browserevent.js';
import type { Event } from '../events/event.js';
import type { AnchoredPosition } from '../positioning/anchoredposition.js';
import type { ButtonRenderer } from './buttonrenderer.js';
import type { Control } from './control.js';
import type { ControlContent } from './controlcontent.js';
import type { MenuSeparator } from './menuseparator.js';
/**
 * A menu button control.  Extends {@link Button} by composing a button
 * with a dropdown arrow and a popup menu.
 */
export declare class MenuButton extends Button {
    /**
     * A menu button control.  Extends {@link Button} by composing a button
     * with a dropdown arrow and a popup menu.
     * @param opt_content Text caption or existing DOM structure to display as the button's caption (if any).
     * @param opt_menu Menu to render under the button when clicked.
     * @param opt_renderer Renderer used to render or decorate the menu button; defaults to {@link MenuButtonRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     * @param opt_menuRenderer Renderer used to render or decorate the menu; defaults to {@link MenuRenderer}.
     */
    constructor(opt_content?: ControlContent | null, opt_menu?: Menu | null, opt_renderer?: ButtonRenderer | null, opt_domHelper?: dom.DomHelper | null, opt_menuRenderer?: MenuRenderer);
    private noStructuralTyping_closure_goog_ui_menubutton_MenuButton;
    /**
     * Sets up event handlers specific to menu buttons.
     */
    enterDocument(): void;
    /**
     * Removes event handlers specific to menu buttons, and ensures that the
     * attached menu also exits the document.
     */
    exitDocument(): void;
    disposeInternal(): void;
    /**
     * Handles mousedown events.  Invokes the superclass implementation to dispatch
     * an ACTIVATE event and activate the button.  Also toggles the visibility of
     * the attached menu.
     * @param e Mouse event to handle.
     */
    handleMouseDown(e: Event | null): void;
    /**
     * Handles mouseup events.  Invokes the superclass implementation to dispatch
     * an ACTION event and deactivate the button.
     * @param e Mouse event to handle.
     */
    handleMouseUp(e: Event | null): void;
    /**
     * Performs the appropriate action when the menu button is activated by the
     * user.  Overrides the superclass implementation by not dispatching an
     * `ACTION` event, because menu buttons exist only to reveal menus, not to
     * perform actions themselves.  Calls {@link #setActive} to deactivate the
     * button.
     * @param e Mouse or key event that triggered the action.
     * @return Whether the action was allowed to proceed.
     */
    performActionInternal(e: Event | null): boolean;
    /**
     * Handles mousedown events over the document.  If the mousedown happens over
     * an element unrelated to the component, hides the menu.
     * TODO(attila): Reconcile this with goog.ui.Popup (and handle frames/windows).
     * @param e Mouse event to handle.
     */
    protected handleDocumentMouseDown(e: BrowserEvent | null): void;
    /**
     * Returns true if the given element is to be considered part of the component,
     * even if it isn't a DOM descendant of the component's root element.
     * @param element Element to test (if any).
     * @return Whether the element is considered part of the component.
     */
    protected containsElement(element: Element | null): boolean;
    handleKeyEventInternal(e: any): boolean;
    /**
     * Handles `ACTION` events dispatched by an activated menu item.
     * @param e Action event to handle.
     */
    protected handleMenuAction(e: Event | null): void;
    /**
     * Handles `BLUR` events dispatched by the popup menu by closing it.
     * Only registered if the menu is focusable.
     * @param e Blur event dispatched by a focusable menu.
     */
    handleMenuBlur(e: Event | null): void;
    /**
     * Handles blur events dispatched by the button's key event target when it
     * loses keyboard focus by closing the popup menu (unless it is focusable).
     * Only registered if the button is focusable.
     * @param e Blur event dispatched by the menu button.
     */
    handleBlur(e: Event | null): void;
    /**
     * Returns the menu attached to the button.  If no menu is attached, creates a
     * new empty menu.
     * @return Popup menu attached to the menu button.
     */
    getMenu(): Menu | null;
    /**
     * Replaces the menu attached to the button with the argument, and returns the
     * previous menu (if any).
     * @param menu New menu to be attached to the menu button (null to remove the menu).
     * @return Previous menu (undefined if none).
     */
    setMenu(menu: Menu | null): Menu | undefined | null;
    /**
     * Specify which positioning algorithm to use.
     *
     * This method is preferred over the fine-grained positioning methods like
     * setPositionElement, setAlignMenuToStart, and setScrollOnOverflow. Calling
     * this method will override settings by those methods.
     * @param position The position of the Menu the button. If the position has a null anchor, we will use the menubutton element as the anchor.
     */
    setMenuPosition(position: AnchoredPosition | null): void;
    /**
     * Sets an element for anchoring the menu.
     * @param positionElement New element to use for positioning the dropdown menu.  Null to use the default behavior of positioning to this menu button.
     */
    setPositionElement(positionElement: Element | null): void;
    /**
     * Sets a margin that will be applied to the menu's position when it is shown.
     * If null, no margin will be applied.
     * @param margin Margin to apply.
     */
    setMenuMargin(margin: Box | null): void;
    /**
     * Sets whether the enter or space key should close the menu, if it is already
     * open. By default, only the ESC key will close an open menu.
     * @param close Whether pressing Enter or Space when the button has focus will close the menu if it is already open.
     */
    setCloseOnEnterOrSpace(close: boolean): void;
    /**
     * Sets whether to select the first item in the menu when it is opened using
     * enter or space. By default, the first item is selected only when
     * opened by a key up or down event. When this is on, the first item will
     * be selected due to any of the four events.
     */
    setSelectFirstOnEnterOrSpace(select: boolean): void;
    /**
     * Adds a new menu item at the end of the menu.
     * @param item Menu item to add to the menu.
     */
    addItem(item: MenuItem | MenuSeparator | Control | null): void;
    /**
     * Adds a new menu item at the specific index in the menu.
     * @param item Menu item to add to the menu.
     * @param index Index at which to insert the menu item.
     */
    addItemAt(item: MenuItem | MenuSeparator | null, index: number): void;
    /**
     * Removes the item from the menu and disposes of it.
     * @param item The menu item to remove.
     */
    removeItem(item: MenuItem | MenuSeparator | null): void;
    /**
     * Removes the menu item at a given index in the menu and disposes of it.
     * @param index Index of item.
     */
    removeItemAt(index: number): void;
    /**
     * Returns the menu item at a given index.
     * @param index Index of menu item.
     * @return Menu item (null if not found).
     */
    getItemAt(index: number): MenuItem | null;
    /**
     * Returns the number of items in the menu (including separators).
     * @return The number of items in the menu.
     */
    getItemCount(): number;
    /**
     * Shows/hides the menu button based on the value of the argument.  Also hides
     * the popup menu if the button is being hidden.
     * @param visible Whether to show or hide the button.
     * @param opt_force If true, doesn't check whether the component already has the requested visibility, and doesn't dispatch any events.
     * @return Whether the visibility was changed.
     */
    setVisible(visible: boolean, opt_force?: boolean): boolean;
    /**
     * Enables/disables the menu button based on the value of the argument, and
     * updates its CSS styling.  Also hides the popup menu if the button is being
     * disabled.
     * @param enable Whether to enable or disable the button.
     */
    setEnabled(enable: boolean): void;
    isAlignMenuToStart(): boolean;
    /**
     * Sets whether the menu is aligned to the start or the end of the button.
     * @param alignToStart Whether the menu is to be aligned to the start of the button (left if the render direction is left-to-right, right if the render direction is right-to-left).
     */
    setAlignMenuToStart(alignToStart: boolean): void;
    /**
     * Sets whether the menu should scroll when it's too big to fix vertically on
     * the screen.  The css of the menu element should have overflow set to auto.
     * Note: Adding or removing items while the menu is open will not work correctly
     * if scrollOnOverflow is on.
     * @param scrollOnOverflow Whether the menu should scroll when too big to fit on the screen.  If false, adjust logic will be used to try and reposition the menu to fit.
     */
    setScrollOnOverflow(scrollOnOverflow: boolean): void;
    isScrollOnOverflow(): boolean;
    isFocusablePopupMenu(): boolean;
    /**
     * Sets whether the attached popup menu is focusable.  If the popup menu is
     * focusable, it may steal keyboard focus from the menu button, so the button
     * will not hide the menu on blur.
     * @param focusable Whether the attached menu is focusable.
     */
    setFocusablePopupMenu(focusable: boolean): void;
    /**
     * Sets whether to render the menu as a sibling element of the button.
     * Normally, the menu is a child of document.body.  This option is useful if
     * you need the menu to inherit styles from a common parent element, or if you
     * otherwise need it to share a parent element for desired event handling.  One
     * example of the latter is if the parent is in a goog.ui.Popup, to ensure that
     * clicks on the menu are considered being within the popup.
     * @param renderMenuAsSibling Whether we render the menu at the end of the dom or as a sibling to the button/label that renders the drop down.
     */
    setRenderMenuAsSibling(renderMenuAsSibling: boolean): void;
    /**
     * Reveals the menu and hooks up menu-specific event handling.
     */
    showMenu(): void;
    /**
     * Hides the menu and cleans up menu-specific event handling.
     */
    hideMenu(): void;
    /**
     * Opens or closes the attached popup menu.
     * @param open Whether to open or close the menu.
     * @param opt_e Event that caused the menu to be opened.
     */
    setOpen(open: boolean, opt_e?: Event | null): void;
    /**
     * Resets the MenuButton's size.  This is useful for cases where items are added
     * or removed from the menu and scrollOnOverflow is on.  In those cases the
     * menu will not behave correctly and resize itself unless this is called
     * (usually followed by positionMenu()).
     */
    invalidateMenuSize(): void;
    /**
     * Positions the menu under the button.  May be called directly in cases when
     * the menu size is known to change.
     */
    positionMenu(): void;
    /**
     * Handles `HIGHLIGHT` events dispatched by the attached menu.
     * @param e Highlight event to handle.
     */
    handleHighlightItem(e: Event | null): void;
    /**
     * Handles UNHIGHLIGHT events dispatched by the associated menu.
     * @param e Unhighlight event to handle.
     */
    handleUnHighlightItem(e: Event | null): void;
    /**
     * Handles `CLOSE` events dispatched by the associated menu.
     * @param e Close event to handle.
     */
    handleCloseItem(e: Event | null): void;
}

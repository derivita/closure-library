import { Event } from '../events/event.js';
import { MenuBase } from './menubase.js';
import type { KeyEvent } from '../events/keyevent.js';
/**
 * An implementation of a menu that can attach itself to DOM element that
 * are annotated appropriately.
 *
 * The following attributes are used by the AttachableMenu
 *
 * menu-item - Should be set on DOM elements that function as items in the
 * menu that can be selected.
 * classNameSelected - A class that will be added to the element's class names
 * when the item is selected via keyboard or mouse.
 */
export declare class AttachableMenu extends MenuBase {
    /**
     * An implementation of a menu that can attach itself to DOM element that
     * are annotated appropriately.
     *
     * The following attributes are used by the AttachableMenu
     *
     * menu-item - Should be set on DOM elements that function as items in the
     * menu that can be selected.
     * classNameSelected - A class that will be added to the element's class names
     * when the item is selected via keyboard or mouse.
     * @param opt_element A DOM element for the popup.
     */
    constructor(opt_element?: Element | null);
    private noStructuralTyping_closure_goog_ui_attachablemenu_AttachableMenu;
    disposeInternal(): void;
    /**
     * Sets the class name to use for menu items
     * @return The class name to use for items.
     */
    getItemClassName(): string;
    /**
     * Sets the class name to use for menu items
     * @param name The class name to use for items.
     */
    setItemClassName(name: string): void;
    /**
     * Sets the class name to use for selected menu items
     * todo(jonp) - reevaluate if we can simulate pseudo classes in IE
     * @return The class name to use for selected items.
     */
    getSelectedItemClassName(): string;
    /**
     * Sets the class name to use for selected menu items
     * todo(jonp) - reevaluate if we can simulate pseudo classes in IE
     * @param name The class name to use for selected items.
     */
    setSelectedItemClassName(name: string): void;
    /**
     * Returns the selected item
     * @return The item selected or null if no item is selected.
     */
    getSelectedItem(): Element | null;
    setSelectedItem(obj: any): void;
    showPopupElement(): void;
    /**
     * Called after the menu is shown.
     */
    onShow(): void;
    /**
     * Returns the next or previous item. Used for up/down arrows.
     * @param prev True to go to the previous element instead of next.
     * @return The next or previous element.
     */
    protected getNextPrevItem(prev: boolean): Element | null;
    /**
     * Mouse over handler for the menu.
     * @param e The event object.
     */
    onMouseOver(e: Event | null): void;
    /**
     * Mouse out handler for the menu.
     * @param e The event object.
     */
    onMouseOut(e: Event | null): void;
    /**
     * Mouse down handler for the menu. Prevents default to avoid text selection.
     */
    onMouseDown: typeof Event.preventDefault;
    /**
     * Mouse up handler for the menu.
     * @param e The event object.
     */
    onMouseUp(e: Event | null): void;
    /**
     * Key down handler for the menu.
     * @param e The event object.
     */
    onKeyDown(e: KeyEvent | null): void;
}

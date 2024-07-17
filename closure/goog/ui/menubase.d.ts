import { Popup } from './popup.js';
import type { Event } from '../events/event.js';
import type { KeyEvent } from '../events/keyevent.js';
/**
 * The MenuBase class provides an abstract base class for different
 * implementations of menu controls.
 */
export declare class MenuBase extends Popup {
    /**
     * The MenuBase class provides an abstract base class for different
     * implementations of menu controls.
     * @param opt_element A DOM element for the popup.
     */
    constructor(opt_element?: Element | null);
    private noStructuralTyping_closure_goog_ui_menubase_MenuBase;
    /**
     * Events fired by the Menu
     */
    static Events: {};
    disposeInternal(): void;
    /**
     * Called after the menu is shown. Derived classes can override to hook this
     * event but should make sure to call the parent class method.
     */
    onShow(): void;
    /**
     * Called after the menu is hidden. Derived classes can override to hook this
     * event but should make sure to call the parent class method.
     * @param opt_target Target of the event causing the hide.
     */
    onHide(opt_target?: Node | null): void;
    /**
     * Returns the selected item
     * @return The item selected or null if no item is selected.
     */
    getSelectedItem(): object | null;
    /**
     * Sets the selected item
     * @param item The item to select. The type of this item is specific to the menu class.
     */
    setSelectedItem(item: object | null): void;
    /**
     * Mouse over handler for the menu. Derived classes should override.
     * @param e The event object.
     */
    protected onMouseOver(e: Event | null): void;
    /**
     * Mouse out handler for the menu. Derived classes should override.
     * @param e The event object.
     */
    protected onMouseOut(e: Event | null): void;
    /**
     * Mouse down handler for the menu. Derived classes should override.
     * @param e The event object.
     */
    protected onMouseDown(e: Event): void;
    /**
     * Mouse up handler for the menu. Derived classes should override.
     * @param e The event object.
     */
    protected onMouseUp(e: Event | null): void;
    /**
     * Key down handler for the menu. Derived classes should override.
     * @param e The event object.
     */
    protected onKeyDown(e: KeyEvent | null): void;
}

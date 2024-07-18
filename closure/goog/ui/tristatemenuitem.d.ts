import { MenuItem } from './menuitem.js';
import type { DomHelper } from '../dom/dom.js';
import type { ControlContent } from './controlcontent.js';
import type { MenuItemRenderer } from './menuitemrenderer.js';
/**
 * Class representing a three state checkbox menu item.
 */
export declare class TriStateMenuItem extends MenuItem {
    /**
     * Class representing a three state checkbox menu item.
     * @param content Text caption or DOM structure to display as the content of the item (use to add icons or styling to menus).
     * @param opt_model Data/model associated with the menu item.
     * @param opt_domHelper Optional DOM helper used for document interactions.
     * @param opt_renderer Optional renderer.
     * @param opt_alwaysAllowPartial If true, always allow partial state.
     */
    constructor(content: ControlContent | null, opt_model?: object | null, opt_domHelper?: DomHelper | null, opt_renderer?: MenuItemRenderer | null, opt_alwaysAllowPartial?: boolean);
    private noStructuralTyping_closure_goog_ui_tristatemenuitem_TriStateMenuItem;
    getCheckedState(): TriStateMenuItem.State | null;
    /**
     * Sets the checked state.
     * @param state The checked state.
     */
    setCheckedState(state: TriStateMenuItem.State | null): void;
    performActionInternal(e: any): boolean;
}
export declare namespace TriStateMenuItem {
    /**
     * Checked states for component.
     */
    enum State {
        NOT_CHECKED = 0,
        PARTIALLY_CHECKED = 1,
        FULLY_CHECKED = 2
    }
}

import { MenuItem } from './menuitem.js';
import type { DomHelper } from '../dom/dom.js';
import type { ControlContent } from './controlcontent.js';
/**
 * Class representing a checkbox menu item.  This is just a convenience class
 * that extends {@link MenuItem} by making it checkable.
 */
export declare class CheckBoxMenuItem extends MenuItem {
    /**
     * Class representing a checkbox menu item.  This is just a convenience class
     * that extends {@link MenuItem} by making it checkable.
     * @param content Text caption or DOM structure to display as the content of the item (use to add icons or styling to menus).
     * @param opt_model Data/model associated with the menu item.
     * @param opt_domHelper Optional DOM helper used for document interactions.
     */
    constructor(content: ControlContent | null, opt_model?: any, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_checkboxmenuitem_CheckBoxMenuItem;
}

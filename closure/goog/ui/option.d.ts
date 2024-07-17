import { MenuItem } from './menuitem.js';
import type { DomHelper } from '../dom/dom.js';
import type { Event } from '../events/event.js';
import type { ControlContent } from './controlcontent.js';
/**
 * Class representing a menu option.  This is just a convenience class that
 * extends {@link MenuItem} by making it selectable.
 */
export declare class Option extends MenuItem {
    /**
     * Class representing a menu option.  This is just a convenience class that
     * extends {@link MenuItem} by making it selectable.
     * @param content Text caption or DOM structure to display as the content of the item (use to add icons or styling to menus).
     * @param opt_model Data/model associated with the menu item.
     * @param opt_domHelper Optional DOM helper used for document interactions.
     */
    constructor(content: ControlContent | null, opt_model?: any, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_option_Option;
    /**
     * Performs the appropriate action when the option is activated by the user.
     * Overrides the superclass implementation by not changing the selection state
     * of the option and not dispatching any SELECTED events, for backwards
     * compatibility with existing uses of this class.
     * @param e Mouse or key event that triggered the action.
     * @return True if the action was allowed to proceed, false otherwise.
     */
    performActionInternal(e: Event | null): boolean;
}

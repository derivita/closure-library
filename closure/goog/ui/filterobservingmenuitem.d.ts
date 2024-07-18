import { MenuItem } from './menuitem.js';
import type { DomHelper } from '../dom/dom.js';
import type { ControlContent } from './controlcontent.js';
import type { MenuItemRenderer } from './menuitemrenderer.js';
/**
 * Class representing a filter observing menu item.
 */
export declare class FilterObservingMenuItem extends MenuItem {
    /**
     * Class representing a filter observing menu item.
     * @param content Text caption or DOM structure to display as the content of the item (use to add icons or styling to menus).
     * @param opt_model Data/model associated with the menu item.
     * @param opt_domHelper Optional DOM helper used for document interactions.
     * @param opt_renderer Optional renderer.
     */
    constructor(content: ControlContent | null, opt_model?: any, opt_domHelper?: DomHelper | null, opt_renderer?: MenuItemRenderer | null);
    private noStructuralTyping_closure_goog_ui_filterobservingmenuitem_FilterObservingMenuItem;
    enterDocument(): void;
    /**
     * Sets the observer functions.
     * @param f function(FilterObservingMenuItem, string).
     */
    setObserver(f: Function | null): void;
    /**
     * Calls the observer function if one has been specified.
     * @param opt_str Filter string.
     */
    callObserver(opt_str?: string | null): void;
}

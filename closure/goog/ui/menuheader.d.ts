import { Control } from './control.js';
import { MenuHeaderRenderer } from './menuheaderrenderer.js';
import type { DomHelper } from '../dom/dom.js';
import type { ControlContent } from './controlcontent.js';
/**
 * Class representing a menu header.
 */
export declare class MenuHeader extends Control {
    /**
     * Class representing a menu header.
     * @param content Text caption or DOM structure to display as the content of the item (use to add icons or styling to menus).
     * @param opt_domHelper Optional DOM helper used for document interactions.
     * @param opt_renderer Optional renderer.
     */
    constructor(content: ControlContent | null, opt_domHelper?: DomHelper | null, opt_renderer?: MenuHeaderRenderer | null);
    private noStructuralTyping_closure_goog_ui_menuheader_MenuHeader;
}

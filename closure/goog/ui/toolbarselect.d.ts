import { Select } from './select.js';
import type { DomHelper } from '../dom/dom.js';
import type { ControlContent } from './controlcontent.js';
import type { Menu } from './menu.js';
import type { MenuButtonRenderer } from './menubuttonrenderer.js';
/**
 * A select control for a toolbar.
 */
export declare class ToolbarSelect extends Select {
    /**
     * A select control for a toolbar.
     * @param caption Default caption or existing DOM structure to display as the button's caption when nothing is selected.
     * @param opt_menu Menu containing selection options.
     * @param opt_renderer Renderer used to render or decorate the control; defaults to {@link ToolbarMenuButtonRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(caption: ControlContent | null, opt_menu?: Menu | null, opt_renderer?: MenuButtonRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_toolbarselect_ToolbarSelect;
}

import { ToggleButton } from './togglebutton.js';
import { ToolbarButtonRenderer } from './toolbarbuttonrenderer.js';
import type { DomHelper } from '../dom/dom.js';
import type { ControlContent } from './controlcontent.js';
/**
 * A toggle button control for a toolbar.
 */
export declare class ToolbarToggleButton extends ToggleButton {
    /**
     * A toggle button control for a toolbar.
     * @param content Text caption or existing DOM structure to display as the button's caption.
     * @param opt_renderer Optional renderer used to render or decorate the button; defaults to {@link ToolbarButtonRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(content: ControlContent | null, opt_renderer?: ToolbarButtonRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_toolbartogglebutton_ToolbarToggleButton;
}

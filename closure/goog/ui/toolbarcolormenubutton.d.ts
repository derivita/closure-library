import { ColorMenuButton } from './colormenubutton.js';
import type { DomHelper } from '../dom/dom.js';
import type { ColorMenuButtonRenderer } from './colormenubuttonrenderer.js';
import type { ControlContent } from './controlcontent.js';
import type { Menu } from './menu.js';
/**
 * A color menu button control for a toolbar.
 */
export declare class ToolbarColorMenuButton extends ColorMenuButton {
    /**
     * A color menu button control for a toolbar.
     * @param content Text caption or existing DOM structure to display as the button's caption.
     * @param opt_menu Menu to render under the button when clicked; should contain at least one {@link goog.ui.ColorPalette} if present.
     * @param opt_renderer Optional renderer used to render or decorate the button; defaults to {@link ToolbarColorMenuButtonRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(content: ControlContent | null, opt_menu?: Menu | null, opt_renderer?: ColorMenuButtonRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_toolbarcolormenubutton_ToolbarColorMenuButton;
}

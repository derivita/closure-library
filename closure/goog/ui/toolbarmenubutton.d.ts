import { MenuButton } from './menubutton.js';
import type { DomHelper } from '../dom/dom.js';
import type { ButtonRenderer } from './buttonrenderer.js';
import type { ControlContent } from './controlcontent.js';
import type { Menu } from './menu.js';
/**
 * A menu button control for a toolbar.
 */
export declare class ToolbarMenuButton extends MenuButton {
    /**
     * A menu button control for a toolbar.
     * @param content Text caption or existing DOM structure to display as the button's caption.
     * @param opt_menu Menu to render under the button when clicked.
     * @param opt_renderer Optional renderer used to render or decorate the button; defaults to {@link ToolbarMenuButtonRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(content: ControlContent | null, opt_menu?: Menu | null, opt_renderer?: ButtonRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_toolbarmenubutton_ToolbarMenuButton;
}

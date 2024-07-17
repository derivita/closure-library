import { ToolbarMenuButtonRenderer } from './toolbarmenubuttonrenderer.js';
import type { DomHelper } from '../dom/dom.js';
import type { Control } from './control.js';
import type { ControlContent } from './controlcontent.js';
/**
 * Toolbar-style renderer for {@link ColorMenuButton}s.
 */
export declare class ToolbarColorMenuButtonRenderer extends ToolbarMenuButtonRenderer {
    /**
     * Toolbar-style renderer for {@link ColorMenuButton}s.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_toolbarcolormenubuttonrenderer_ToolbarColorMenuButtonRenderer;
    /**
     * Overrides the superclass implementation by wrapping the caption text or DOM
     * structure in a color indicator element.  Creates the following DOM structure:
     *
     * <div class="goog-inline-block goog-toolbar-menu-button-caption">
     * <div class="goog-color-menu-button-indicator">
     * Contents...
     * </div>
     * </div>
     * @param content Text caption or DOM structure.
     * @param dom DOM helper, used for document interaction.
     * @return Caption element.
     */
    createCaption(content: ControlContent | null, dom: DomHelper | null): Element;
    /**
     * Takes a color menu button control's root element and a value object
     * (which is assumed to be a color), and updates the button's DOM to reflect
     * the new color.  Overrides {@link ButtonRenderer#setValue}.
     * @param element The button control's root element (if rendered).
     * @param value New value; assumed to be a color spec string.
     */
    setValue(element: Element | null, value: any): void;
    /**
     * Initializes the button's DOM when it enters the document.  Overrides the
     * superclass implementation by making sure the button's color indicator is
     * initialized.
     * @param button ColorMenuButton whose DOM is to be initialized as it enters the document.
     */
    initializeDom(button: Control | null): void;
}

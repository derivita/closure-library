import { MenuButtonRenderer } from './menubuttonrenderer.js';
import type { DomHelper } from '../dom/dom.js';
import type { Control } from './control.js';
import type { ControlContent } from './controlcontent.js';
/**
 * Renderer for {@link goog.ui.ColorMenuButton}s.
 */
export declare class ColorMenuButtonRenderer extends MenuButtonRenderer {
    /**
     * Renderer for {@link goog.ui.ColorMenuButton}s.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_colormenubuttonrenderer_ColorMenuButtonRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Overrides the superclass implementation by wrapping the caption text or DOM
     * structure in a color indicator element.  Creates the following DOM structure:
     *
     * <div class="goog-inline-block goog-menu-button-caption">
     * <div class="goog-color-menu-button-indicator">
     * Contents...
     * </div>
     * </div>
     *
     * The 'goog-color-menu-button-indicator' style should be defined to have a
     * bottom border of nonzero width and a default color that blends into its
     * background.
     * @param content Text caption or DOM structure.
     * @param dom DOM helper, used for document interaction.
     * @return Caption element.
     */
    createCaption(content: ControlContent | null, dom: DomHelper | null): Element;
    /**
     * Wrap a caption in a div with the color-menu-button-indicator CSS class.
     * @param content Text caption or DOM structure.
     * @param dom DOM helper, used for document interaction.
     * @return Caption element.
     */
    static wrapCaption(content: ControlContent | null, dom: DomHelper | null): Element;
    /**
     * Takes a color menu button control's root element and a value object
     * (which is assumed to be a color), and updates the button's DOM to reflect
     * the new color.  Overrides {@link goog.ui.ButtonRenderer#setValue}.
     * @param element The button control's root element (if rendered).
     * @param value New value; assumed to be a color spec string.
     */
    setValue(element: Element | null, value: any): void;
    /**
     * Takes a control's content element and a value object (which is assumed
     * to be a color), and updates its DOM to reflect the new color.
     * @param caption A content element of a control.
     * @param value New value; assumed to be a color spec string.
     */
    static setCaptionValue(caption: Element | null, value: any): void;
    /**
     * Initializes the button's DOM when it enters the document.  Overrides the
     * superclass implementation by making sure the button's color indicator is
     * initialized.
     * @param button goog.ui.ColorMenuButton whose DOM is to be initialized as it enters the document.
     */
    initializeDom(button: Control | null): void;
}

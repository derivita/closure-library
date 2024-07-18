import { Container } from './container.js';
import { ContainerRenderer } from './containerrenderer.js';
import type { Control } from './control.js';
/**
 * Default renderer for {@link goog.ui.Toolbar}s, based on {@link
 * ContainerRenderer}.
 */
export declare class ToolbarRenderer extends ContainerRenderer {
    /**
     * Default renderer for {@link goog.ui.Toolbar}s, based on {@link
     * ContainerRenderer}.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_toolbarrenderer_ToolbarRenderer;
    /**
     * Default CSS class to be applied to the root element of toolbars rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Inspects the element, and creates an instance of {@link Control} or
     * an appropriate subclass best suited to decorate it.  Overrides the superclass
     * implementation by recognizing HR elements as separators.
     * @param element Element to decorate.
     * @return A new control suitable to decorate the element (null if none).
     */
    getDecoratorForChild(element: Element | null): Control | null;
    /**
     * Returns the CSS class to be applied to the root element of containers
     * rendered using this renderer.
     * @return Renderer-specific CSS class.
     */
    getCssClass(): string;
    /**
     * Returns the default orientation of containers rendered or decorated by this
     * renderer.  This implementation returns `HORIZONTAL`.
     * @return Default orientation for containers created or decorated by this renderer.
     */
    getDefaultOrientation(): Container.Orientation | null;
}

import { Container } from './container.js';
import { ContainerRenderer } from './containerrenderer.js';
/**
 * Default renderer for {@link goog.ui.menuBar}s, based on {@link
 * ContainerRenderer}.
 */
export declare class MenuBarRenderer extends ContainerRenderer {
    /**
     * Default renderer for {@link goog.ui.menuBar}s, based on {@link
     * ContainerRenderer}.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_menubarrenderer_MenuBarRenderer;
    /**
     * Default CSS class to be applied to the root element of elements rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    getCssClass(): string;
    /**
     * Returns the default orientation of containers rendered or decorated by this
     * renderer.  This implementation returns `HORIZONTAL`.
     * @return Default orientation for containers created or decorated by this renderer.
     */
    getDefaultOrientation(): Container.Orientation;
}

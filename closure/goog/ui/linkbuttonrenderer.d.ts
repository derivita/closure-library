import { FlatButtonRenderer } from './flatbuttonrenderer.js';
/**
 * Link renderer for {@link Button}s.  Link buttons can contain
 * almost arbitrary HTML content, will flow like inline elements, but can be
 * styled like block-level elements.
 */
export declare class LinkButtonRenderer extends FlatButtonRenderer {
    /**
     * Link renderer for {@link Button}s.  Link buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_linkbuttonrenderer_LinkButtonRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    getCssClass(): string;
}

import { Disposable } from '../../disposable/disposable.js';
import { Control } from '../../ui/control.js';
import { ControlRenderer } from '../../ui/controlrenderer.js';
/**
 * A driver for testing renderers.
 */
export declare class RendererHarness extends Disposable {
    /**
     * A driver for testing renderers.
     * @param renderer A renderer to test.
     * @param renderParent The parent of the element where controls will be rendered.
     * @param decorateParent The parent of the element where controls will be decorated.
     */
    constructor(renderer: ControlRenderer | null, renderParent: Element | null, decorateParent: Element | null);
    private noStructuralTyping_closure_goog_testing_ui_rendererharness_RendererHarness;
    /**
     * Attach a control and render its DOM.
     * @param control A control.
     * @return The element created.
     */
    attachControlAndRender(control: Control | null): Element | null;
    /**
     * Attach a control and decorate the element given in the constructor.
     * @param control A control.
     * @return The element created.
     */
    attachControlAndDecorate(control: Control | null): Element | null;
    /**
     * Assert that the rendered element and the decorated element match.
     */
    assertDomMatches(): void;
    /**
     * Destroy the harness, verifying that all assertions had been checked.
     */
    disposeInternal(): void;
}

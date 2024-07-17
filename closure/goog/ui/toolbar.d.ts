import { Container } from './container.js';
import { ToolbarRenderer } from './toolbarrenderer.js';
import type { DomHelper } from '../dom/dom.js';
/**
 * A toolbar class, implemented as a {@link Container} that defaults to
 * having a horizontal orientation and {@link ToolbarRenderer} as its
 * renderer.
 */
export declare class Toolbar extends Container {
    /**
     * A toolbar class, implemented as a {@link Container} that defaults to
     * having a horizontal orientation and {@link ToolbarRenderer} as its
     * renderer.
     * @param opt_renderer Renderer used to render or decorate the toolbar; defaults to {@link ToolbarRenderer}.
     * @param opt_orientation Toolbar orientation; defaults to `HORIZONTAL`.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(opt_renderer?: ToolbarRenderer | null, opt_orientation?: Container.Orientation | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_toolbar_Toolbar;
    handleFocus(e: any): void;
}

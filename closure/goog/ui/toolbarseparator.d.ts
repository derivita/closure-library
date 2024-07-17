import { Separator } from './separator.js';
import { ToolbarSeparatorRenderer } from './toolbarseparatorrenderer.js';
import type { DomHelper } from '../dom/dom.js';
/**
 * A separator control for a toolbar.
 */
export declare class ToolbarSeparator extends Separator {
    /**
     * A separator control for a toolbar.
     * @param opt_renderer Renderer to render or decorate the separator; defaults to {@link ToolbarSeparatorRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(opt_renderer?: ToolbarSeparatorRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_toolbarseparator_ToolbarSeparator;
}

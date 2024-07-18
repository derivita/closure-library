import { Control } from './control.js';
import { MenuSeparatorRenderer } from './menuseparatorrenderer.js';
import type { DomHelper } from '../dom/dom.js';
/**
 * Class representing a separator.  Although it extends {@link Control},
 * the Separator class doesn't allocate any event handlers, nor does it change
 * its appearance on mouseover, etc.
 */
export declare class Separator extends Control {
    /**
     * Class representing a separator.  Although it extends {@link Control},
     * the Separator class doesn't allocate any event handlers, nor does it change
     * its appearance on mouseover, etc.
     * @param opt_renderer Renderer to render or decorate the separator; defaults to {@link MenuSeparatorRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(opt_renderer?: MenuSeparatorRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_separator_Separator;
    /**
     * Configures the component after its DOM has been rendered.  Overrides
     * {@link Control#enterDocument} by making sure no event handler
     * is allocated.
     */
    enterDocument(): void;
}

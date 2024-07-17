import { Control } from './control.js';
import { TabRenderer } from './tabrenderer.js';
import type { DomHelper } from '../dom/dom.js';
import type { ControlContent } from './controlcontent.js';
/**
 * Tab control, designed to be hosted in a {@link TabBar}.  The tab's
 * DOM may be different based on the configuration of the containing tab bar,
 * so tabs should only be rendered or decorated as children of a tab bar.
 */
export declare class Tab extends Control {
    /**
     * Tab control, designed to be hosted in a {@link TabBar}.  The tab's
     * DOM may be different based on the configuration of the containing tab bar,
     * so tabs should only be rendered or decorated as children of a tab bar.
     * @param content Text caption or DOM structure to display as the tab's caption (if any).
     * @param opt_renderer Optional renderer used to render or decorate the tab.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(content: ControlContent | null, opt_renderer?: TabRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_tab_Tab;
    getTooltip(): string | undefined;
    /**
     * Sets the tab tooltip text.  If the tab has already been rendered, updates
     * its tooltip.
     * @param tooltip New tooltip text.
     */
    setTooltip(tooltip: string): void;
    /**
     * Sets the tab tooltip text.  Considered protected; to be called only by the
     * renderer during element decoration.
     * @param tooltip New tooltip text.
     */
    protected setTooltipInternal(tooltip: string): void;
}

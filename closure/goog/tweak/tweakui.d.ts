import * as dom from '../dom/dom.js';
import { BaseEntry } from './entries.js';
import type { Registry } from './registry.js';
/**
 * A UI for editing tweak settings / clicking tweak actions.
 */
export declare class TweakUi {
    /**
     * A UI for editing tweak settings / clicking tweak actions.
     * @param registry The registry to render.
     * @param opt_domHelper The DomHelper to render with.
     */
    constructor(registry: Registry, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_tweak_tweakui_TweakUi;
    /**
     * Creates a TweakUi if tweaks are enabled.
     * @param opt_domHelper The DomHelper to render with.
     * @return The root UI element or undefined if tweaks are not enabled.
     */
    static create(opt_domHelper?: dom.DomHelper | null): Element | undefined;
    /**
     * Creates a TweakUi inside of a show/hide link.
     * @param opt_domHelper The DomHelper to render with.
     * @return The root UI element or undefined if tweaks are not enabled.
     */
    static createCollapsible(opt_domHelper?: dom.DomHelper | null): Element | undefined;
    getRootElement(): Element;
    /**
     * Creates the element to display when the UI is visible.
     * @return The root element.
     */
    render(): Element;
}
/**
 * The body of the tweaks UI and also used for BooleanGroup.
 */
export declare class EntriesPanel {
    /**
     * The body of the tweaks UI and also used for BooleanGroup.
     * @param entries The entries to show in the panel.
     * @param opt_domHelper The DomHelper to render with.
     */
    constructor(entries: BaseEntry[], opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_tweak_tweakui_EntriesPanel;
    /**
     * Map of tweak ID -> EntriesPanel for child panels (BooleanGroups).
     */
    childPanels: {
        [key: string]: EntriesPanel;
    };
    getRootElement(): Element;
    /**
     * Creates and returns the expanded element.
     * The markup looks like:
     *
     * <div>
     * <a>Show Descriptions</a>
     * <div>
     * ...
     * {endElement}
     * </div>
     * </div>
     * @param opt_endElement Element to insert after all tweak entries.
     * @return The root element for the panel.
     */
    render(opt_endElement?: Element | DocumentFragment | null): Element;
    /**
     * Inserts the given entry into the panel.
     * @param entry The entry to insert.
     */
    insertEntry(entry: BaseEntry): void;
    /**
     * Show all entry descriptions (has the same effect as clicking on all ?'s).
     */
    toggleAllDescriptions(): void;
}

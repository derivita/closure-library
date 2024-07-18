import * as dom from '../dom/dom.js';
import { Event } from '../events/event.js';
import { EventTarget } from '../events/eventtarget.js';
/**
 * TabPane widget. All children already inside the tab pane container element
 * will be be converted to tabs. Each tab is represented by a TabPane.
 * TabPage object. Further pages can be constructed either from an existing
 * container or created from scratch.
 */
export declare class TabPane extends EventTarget {
    /**
     * TabPane widget. All children already inside the tab pane container element
     * will be be converted to tabs. Each tab is represented by a TabPane.
     * TabPage object. Further pages can be constructed either from an existing
     * container or created from scratch.
     * @param el Container element to create the tab pane out of.
     * @param opt_tabLocation Location of the tabs in relation to the content container. Default is top.
     * @param opt_domHelper Optional DOM helper.
     * @param opt_useMouseDown Whether to use MOUSEDOWN instead of CLICK for tab changes.
     */
    constructor(el: Element | null, opt_tabLocation?: TabPane.TabLocation | null, opt_domHelper?: dom.DomHelper | null, opt_useMouseDown?: boolean);
    private noStructuralTyping_closure_goog_ui_tabpane_TabPane;
    /**
     * DomHelper used to interact with the document, allowing components to be
     * created in a different window.  This property is considered protected;
     * subclasses of Component may refer to it directly.
     */
    protected dom_: dom.DomHelper | null;
    /**
     * Constants for event names
     */
    static Events: {
        CHANGE: string;
    };
    disposeInternal(): void;
    /**
     * Adds a page to the tab pane.
     * @param page Tab page to add.
     * @param opt_index Zero based index to insert tab at. Inserted at the end if not specified.
     */
    addPage(page: TabPane.TabPage | null, opt_index?: number): void;
    /**
     * Removes the specified page from the tab pane.
     * @param page Reference to tab page or zero based index.
     */
    removePage(page: TabPane.TabPage | number | null): void;
    /**
     * Gets the tab page by zero based index.
     * @param index Index of page to return.
     * @return page The tab page.
     */
    getPage(index: number): TabPane.TabPage | null;
    /**
     * Sets the selected tab page by object reference.
     * @param page Tab page to select.
     */
    setSelectedPage(page: TabPane.TabPage | null): void;
    /**
     * Sets the selected tab page by zero based index.
     * @param index Index of page to select.
     */
    setSelectedIndex(index: number): void;
    getSelectedIndex(): number;
    getSelectedPage(): TabPane.TabPage | null;
    getContentElement(): Element | null;
    getElement(): Element | null;
}
export declare namespace TabPane {
    /**
     * Enum for representing the location of the tabs in relation to the content.
     */
    enum TabLocation {
        TOP = 0,
        BOTTOM = 1,
        LEFT = 2,
        RIGHT = 3
    }
    /**
     * Object representing an individual tab pane.
     */
    class TabPage {
        /**
         * Object representing an individual tab pane.
         * @param opt_el Container element to create the pane out of.
         * @param opt_title Pane title or element to use as the title. If not specified the first element in the container is used as the title.
         * @param opt_domHelper Optional DOM helper The first parameter can be omitted.
         */
        constructor(opt_el?: Element | null, opt_title?: Element | string | null, opt_domHelper?: dom.DomHelper | null);
        private noStructuralTyping_closure_goog_ui_tabpane_TabPage;
        /**
         * DomHelper used to interact with the document, allowing components to be
         * created in a different window.  This property is considered protected;
         * subclasses of Component may refer to it directly.
         */
        protected dom_: dom.DomHelper | null;
        getTitle(): string;
        /**
         * Sets title for tab page.
         * @param title Title for tab page.
         */
        setTitle(title: string): void;
        getTitleElement(): Element | null;
        getContentElement(): Element | null;
        getIndex(): number | null;
        getParent(): TabPane | null;
        /**
         * Selects page in the associated tab pane.
         */
        select(): void;
        /**
         * Sets the enabled state.
         * @param enabled Enabled state.
         */
        setEnabled(enabled: boolean): void;
        /**
         * Returns if the page is enabled.
         * @return Whether the page is enabled or not.
         */
        isEnabled(): boolean;
    }
}
/**
 * Object representing a tab pane page changed event.
 */
export declare class TabPaneEvent extends Event {
    /**
     * Object representing a tab pane page changed event.
     * @param type Event type.
     * @param target Tab widget initiating event.
     * @param page Selected page in tab pane.
     */
    constructor(type: string, target: TabPane | null, page: TabPane.TabPage | null);
    private noStructuralTyping_closure_goog_ui_tabpane_TabPaneEvent;
    /**
     * The selected page.
     */
    page: TabPane.TabPage | null;
}

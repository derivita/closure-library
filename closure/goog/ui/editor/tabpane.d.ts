import * as googDom from '../../dom/dom.js';
import { Component } from '../component.js';
/**
 * Creates a new Editor-style tab pane.
 */
export declare class TabPane extends Component {
    /**
     * Creates a new Editor-style tab pane.
     * @param dom The dom helper for the window to create this tab pane in.
     * @param opt_caption Optional caption of the tab pane.
     */
    constructor(dom: googDom.DomHelper | null, opt_caption?: string);
    private noStructuralTyping_closure_goog_ui_editor_tabpane_TabPane;
    getCurrentTabId(): string;
    /**
     * Selects the tab with the given id.
     * @param id Id of the tab to select.
     */
    setSelectedTabId(id: string): void;
    /**
     * Adds a tab to the tab pane.
     * @param id The id of the tab to add.
     * @param caption The caption of the tab.
     * @param tooltip The tooltip for the tab.
     * @param groupName for the radio button group.
     * @param content The content element to show when this tab is selected.
     */
    addTab(id: string, caption: string, tooltip: string, groupName: string, content: Element | null): void;
    enterDocument(): void;
}

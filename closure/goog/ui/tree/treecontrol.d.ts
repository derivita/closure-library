import { SafeHtml } from '../../html/safehtml.js';
import { BaseNode } from './basenode.js';
import { TreeNode } from './treenode.js';
import type { DomHelper } from '../../dom/dom.js';
import type { BrowserEvent } from '../../events/browserevent.js';
/**
 * This creates a TreeControl object. A tree control provides a way to
 * view a hierarchical set of data.
 */
export declare class TreeControl extends BaseNode {
    /**
     * This creates a TreeControl object. A tree control provides a way to
     * view a hierarchical set of data.
     * @param content The content of the node label. Strings are treated as plain-text and will be HTML escaped.
     * @param opt_config The configuration for the tree. See TreeControl.defaultConfig. If not specified, a default config will be used.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(content: string | SafeHtml, opt_config?: object | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_tree_treecontrol_TreeControl;
    getTree(): TreeControl;
    getDepth(): number;
    /**
     * Expands the parent chain of this node so that it is visible.
     */
    reveal(): void;
    hasFocus(): boolean;
    getExpanded(): boolean;
    setExpanded(expanded: any): void;
    getExpandIconSafeHtml(): SafeHtml;
    getIconElement(): Element;
    getExpandIconElement(): Element;
    updateExpandIcon(): void;
    getRowClassName(): string;
    /**
     * Returns the source for the icon.
     * @return Src for the icon.
     */
    getCalculatedIconClass(): string;
    /**
     * Sets the selected item.
     * @param node The item to select.
     */
    setSelectedItem(node: BaseNode | null): void;
    /**
     * Returns the selected item.
     * @return The currently selected item.
     */
    getSelectedItem(): BaseNode | null;
    /**
     * Sets whether to show lines.
     * @param b Whether to show lines.
     */
    setShowLines(b: boolean): void;
    getShowLines(): boolean;
    /**
     * Sets whether to show root lines.
     * @param b Whether to show root lines.
     */
    setShowRootLines(b: boolean): void;
    getShowRootLines(): boolean;
    /**
     * Sets whether to show expand icons.
     * @param b Whether to show expand icons.
     */
    setShowExpandIcons(b: boolean): void;
    getShowExpandIcons(): boolean;
    /**
     * Sets whether to show the root node.
     * @param b Whether to show the root node.
     */
    setShowRootNode(b: boolean): void;
    getShowRootNode(): boolean;
    /**
     * Add roles and states.
     */
    initAccessibility(): void;
    enterDocument(): void;
    exitDocument(): void;
    /**
     * Handles key down on the tree.
     * @param e The browser event.
     * @return The handled value.
     */
    handleKeyEvent(e: BrowserEvent): boolean;
    /**
     * Creates a new tree node using the same config as the root.
     * @param opt_content The content of the node label. Strings are treated as plain-text and will be HTML escaped. To set SafeHtml content, omit opt_content and call setSafeHtml on the resulting node.
     * @return The new item.
     */
    createNode(opt_content?: string): TreeNode;
    /**
     * Allows the caller to notify that the given node has been added or just had
     * been updated in the tree.
     * @param node New node being added or existing node that just had been updated.
     */
    setNode(node: BaseNode | null): void;
    /**
     * Allows the caller to notify that the given node is being removed from the
     * tree.
     * @param node Node being removed.
     */
    removeNode(node: BaseNode | null): void;
    /**
     * Clear the typeahead buffer.
     */
    clearTypeAhead(): void;
    /**
     * A default configuration for the tree.
     */
    static defaultConfig: {
        indentWidth: number;
        cssRoot: string;
        cssHideRoot: string;
        cssItem: string;
        cssChildren: string;
        cssChildrenNoLines: string;
        cssTreeRow: string;
        cssItemLabel: string;
        cssTreeIcon: string;
        cssExpandTreeIcon: string;
        cssExpandTreeIconPlus: string;
        cssExpandTreeIconMinus: string;
        cssExpandTreeIconTPlus: string;
        cssExpandTreeIconTMinus: string;
        cssExpandTreeIconLPlus: string;
        cssExpandTreeIconLMinus: string;
        cssExpandTreeIconT: string;
        cssExpandTreeIconL: string;
        cssExpandTreeIconBlank: string;
        cssExpandedFolderIcon: string;
        cssCollapsedFolderIcon: string;
        cssFileIcon: string;
        cssExpandedRootIcon: string;
        cssCollapsedRootIcon: string;
        cssSelectedRow: string;
    };
}

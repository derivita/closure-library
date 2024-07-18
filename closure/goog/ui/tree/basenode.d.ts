import { Event } from '../../events/event.js';
import { SafeHtml } from '../../html/safehtml.js';
import { SafeStyle } from '../../html/safestyle.js';
import { Component } from '../component.js';
import type { DomHelper } from '../../dom/dom.js';
import type { BrowserEvent } from '../../events/browserevent.js';
import type { TreeControl } from './treecontrol.js';
/**
 * An abstract base class for a node in the tree.
 */
export declare class BaseNode extends Component {
    /**
     * An abstract base class for a node in the tree.
     * @param content The content of the node label. Strings are treated as plain-text and will be HTML escaped.
     * @param opt_config The configuration for the tree. See {@link BaseNode.defaultConfig}. If not specified the default config will be used.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(content: string | SafeHtml, opt_config?: object | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_tree_basenode_BaseNode;
    protected tree: TreeControl | null;
    /**
     * Map of nodes in existence. Needed to route events to the appropriate nodes.
     * Nodes are added to the map at {@link #enterDocument} time and removed at
     * {@link #exitDocument} time.
     */
    protected static allNodes: object | null;
    disposeInternal(): void;
    /**
     * Adds roles and states.
     */
    protected initAccessibility(): void;
    createDom(): void;
    enterDocument(): void;
    exitDocument(): void;
    /**
     * The method assumes that the child doesn't have parent node yet.
     * The `opt_render` argument is not used. If the parent node is expanded,
     * the child node's state will be the same as the parent's. Otherwise the
     * child's DOM tree won't be created.
     */
    addChildAt(child: any, index: any, opt_render: any): void;
    /**
     * Adds a node as a child to the current node.
     * @param child The child to add.
     * @param opt_before If specified, the new child is added as a child before this one. If not specified, it's appended to the end.
     * @return The added child.
     */
    add(child: BaseNode | null, opt_before?: BaseNode | null): BaseNode;
    /**
     * Removes a child. The caller is responsible for disposing the node.
     * @param childNode The child to remove. Must be a {@link BaseNode}.
     * @param opt_unrender Unused. The child will always be unrendered.
     * @return The child that was removed.
     */
    removeChild(childNode: Component | string | null, opt_unrender?: boolean): BaseNode;
    remove: (childNode: Component | string | null, opt_unrender?: boolean) => BaseNode;
    /**
     * Returns the tree.
     */
    getTree(): TreeControl | null;
    /**
     * Returns the depth of the node in the tree. Should not be overridden.
     * @return The non-negative depth of this node (the root is zero).
     */
    getDepth(): number;
    /**
     * Returns true if the node is a descendant of this node
     * @param node The node to check.
     * @return True if the node is a descendant of this node, false otherwise.
     */
    contains(node: BaseNode | null): boolean;
    /**
     *
     * @param index 0-based index.
     * @return The child at the given index; null if none.
     */
    getChildAt(index: number): BaseNode | null;
    /**
     * Returns the children of this node.
     * @return The children.
     */
    getChildren(): BaseNode[];
    getFirstChild(): BaseNode | null;
    getLastChild(): BaseNode | null;
    getPreviousSibling(): BaseNode | null;
    getNextSibling(): BaseNode | null;
    isLastSibling(): boolean;
    isSelected(): boolean;
    /**
     * Selects the node.
     */
    select(): void;
    /**
     * Originally it was intended to deselect the node but never worked.
     */
    deselect(): void;
    /**
     * Called from the tree to instruct the node change its selection state.
     * @param selected The new selection state.
     */
    protected setSelectedInternal(selected: boolean): void;
    getExpanded(): boolean;
    /**
     * Sets the node to be expanded internally, without state change events.
     * @param expanded Whether to expand or close the node.
     */
    setExpandedInternal(expanded: boolean): void;
    /**
     * Sets the node to be expanded.
     * @param expanded Whether to expand or close the node.
     */
    setExpanded(expanded: boolean): void;
    /**
     * Toggles the expanded state of the node.
     */
    toggle(): void;
    /**
     * Expands the node.
     */
    expand(): void;
    /**
     * Collapses the node.
     */
    collapse(): void;
    /**
     * Collapses the children of the node.
     */
    collapseChildren(): void;
    /**
     * Collapses the children and the node.
     */
    collapseAll(): void;
    /**
     * Expands the children of the node.
     */
    expandChildren(): void;
    /**
     * Expands the children and the node.
     */
    expandAll(): void;
    /**
     * Expands the parent chain of this node so that it is visible.
     */
    reveal(): void;
    /**
     * Sets whether the node will allow the user to collapse it.
     * @param isCollapsible Whether to allow node collapse.
     */
    setIsUserCollapsible(isCollapsible: boolean): void;
    isUserCollapsible(): boolean;
    /**
     * Creates HTML for the node.
     */
    protected toSafeHtml(): SafeHtml;
    protected getRowSafeHtml(): SafeHtml;
    protected getRowClassName(): string;
    protected getLabelSafeHtml(): SafeHtml;
    /**
     * Returns the html that appears after the label. This is useful if you want to
     * put extra UI on the row of the label but not inside the anchor tag.
     * @return The html.
     */
    getAfterLabelHtml(): string;
    /**
     * Returns the html that appears after the label. This is useful if you want to
     * put extra UI on the row of the label but not inside the anchor tag.
     * @return The html.
     */
    getAfterLabelSafeHtml(): SafeHtml;
    /**
     * Sets the html that appears after the label. This is useful if you want to
     * put extra UI on the row of the label but not inside the anchor tag.
     * @param html The html.
     */
    setAfterLabelSafeHtml(html: SafeHtml): void;
    protected getIconSafeHtml(): SafeHtml;
    /**
     * Gets the calculated icon class.
     */
    protected getCalculatedIconClass(): void;
    protected getExpandIconSafeHtml(): SafeHtml;
    protected getExpandIconClass(): string;
    getLineStyle(): SafeStyle;
    getBackgroundPosition(): string;
    getElement(): Element | null;
    getRowElement(): Element | null;
    protected getExpandIconElement(): Element | null;
    protected getIconElement(): Element | null;
    getLabelElement(): Element | null;
    getAfterLabelElement(): Element | null;
    protected getChildrenElement(): Element | null;
    /**
     * Sets the icon class for the node.
     * @param s The icon class.
     */
    setIconClass(s: string): void;
    /**
     * Gets the icon class for the node.
     * @return s The icon source.
     */
    getIconClass(): string;
    /**
     * Sets the icon class for when the node is expanded.
     * @param s The expanded icon class.
     */
    setExpandedIconClass(s: string): void;
    /**
     * Gets the icon class for when the node is expanded.
     * @return The class.
     */
    getExpandedIconClass(): string;
    /**
     * Sets the text of the label.
     * @param s The plain text of the label.
     */
    setText(s: string): void;
    /**
     * Returns the text of the label. If the text was originally set as HTML, the
     * return value is unspecified.
     * @return The plain text of the label.
     */
    getText(): string;
    /**
     * Sets the HTML of the label.
     * @param html The HTML object for the label.
     */
    setSafeHtml(html: SafeHtml): void;
    /**
     * Returns the html of the label.
     * @return The html string of the label.
     */
    getHtml(): string;
    /**
     * Returns the html of the label.
     * @return The html string of the label.
     */
    getSafeHtml(): SafeHtml;
    /**
     * Sets the text of the tooltip.
     * @param s The tooltip text to set.
     */
    setToolTip(s: string): void;
    /**
     * Returns the text of the tooltip.
     * @return The tooltip text.
     */
    getToolTip(): string | null;
    /**
     * Updates the row styles.
     */
    updateRow(): void;
    /**
     * Updates the expand icon of the node.
     */
    updateExpandIcon(): void;
    /**
     * Handles mouse down event.
     * @param e The browser event.
     */
    protected onMouseDown(e: BrowserEvent): void;
    /**
     * Handles a click event.
     */
    protected onClick_: typeof Event.preventDefault;
    /**
     * Handles a double click event.
     * @param e The browser event.
     */
    protected onDoubleClick_(e: BrowserEvent): void;
    /**
     * Handles a key down event.
     * @param e The browser event.
     * @return The handled value.
     */
    protected onKeyDown(e: BrowserEvent): boolean;
    getLastShownDescendant(): BaseNode | null;
    getNextShownNode(): BaseNode | null;
    getPreviousShownNode(): BaseNode | null;
    getClientData(...args: any[]): any;
    /**
     * Sets client data to associate with the node.
     */
    setClientData: (obj: any) => void;
    getConfig(): object | null;
    /**
     * Internal method that is used to set the tree control on the node.
     * @param tree The tree control.
     */
    setTreeInternal(tree: TreeControl | null): void;
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
export declare namespace BaseNode {
    /**
     * The event types dispatched by this class.
     */
    enum EventType {
        BEFORE_EXPAND = "beforeexpand",
        EXPAND = "expand",
        BEFORE_COLLAPSE = "beforecollapse",
        COLLAPSE = "collapse"
    }
}

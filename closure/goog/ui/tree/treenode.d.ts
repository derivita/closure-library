import { BaseNode } from './basenode.js';
import type { DomHelper } from '../../dom/dom.js';
import type { SafeHtml } from '../../html/safehtml.js';
import type { TreeControl } from './treecontrol.js';
/**
 * A single node in the tree.
 */
export declare class TreeNode extends BaseNode {
    /**
     * A single node in the tree.
     * @param content The content of the node label. Strings are treated as plain-text and will be HTML escaped.
     * @param opt_config The configuration for the tree. See TreeControl.defaultConfig. If not specified, a default config will be used.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(content: string | SafeHtml, opt_config?: object | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_tree_treenode_TreeNode;
    /**
     * Returns the tree.
     * @return The tree.
     */
    getTree(): TreeControl | null;
    /**
     * Returns the source for the icon.
     * @return Src for the icon.
     */
    getCalculatedIconClass(): string;
}

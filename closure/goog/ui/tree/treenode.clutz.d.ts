//!! generated by clutz.
// Generated from ui/tree/treenode.js
declare namespace ಠ_ಠ.clutz.goog.ui.tree {
  /**
   * A single node in the tree.
   */
  class TreeNode extends ಠ_ಠ.clutz.goog.ui.tree.BaseNode {
    private noStructuralTyping_goog_ui_tree_TreeNode : any;
    /**
     * A single node in the tree.
     * @param content The content of the node label. Strings are treated as plain-text and will be HTML escaped.
     * @param opt_config The configuration for the tree. See goog.ui.tree.TreeControl.defaultConfig. If not specified, a default config will be used.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor (content : string | ಠ_ಠ.clutz.goog.html.SafeHtml , opt_config ? : GlobalObject | null , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    /**
     * Returns the source for the icon.
     */
    getCalculatedIconClass ( ) : string ;
    /**
     * Returns the tree.
     */
    getTree ( ) : ಠ_ಠ.clutz.goog.ui.tree.TreeControl | null ;
  }
}
declare module 'goog:goog.ui.tree.TreeNode' {
  import TreeNode = ಠ_ಠ.clutz.goog.ui.tree.TreeNode;
  export default TreeNode;
}

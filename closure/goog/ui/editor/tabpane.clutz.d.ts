//!! generated by clutz.
// Generated from ui/editor/tabpane.js
declare namespace ಠ_ಠ.clutz.goog.ui.editor {
  /**
   * Creates a new Editor-style tab pane.
   */
  class TabPane extends ಠ_ಠ.clutz.goog.ui.Component {
    private noStructuralTyping_goog_ui_editor_TabPane : any;
    /**
     * Creates a new Editor-style tab pane.
     * @param dom The dom helper for the window to create this tab pane in.
     * @param opt_caption Optional caption of the tab pane.
     */
    constructor (dom : ಠ_ಠ.clutz.goog.dom.DomHelper | null , opt_caption ? : string ) ;
    /**
     * Adds a tab to the tab pane.
     * @param id The id of the tab to add.
     * @param caption The caption of the tab.
     * @param tooltip The tooltip for the tab.
     * @param groupName for the radio button group.
     * @param content The content element to show when this tab is selected.
     */
    addTab (id : string , caption : string , tooltip : string , groupName : string , content : GlobalElement | null ) : void ;
    enterDocument ( ) : void ;
    getCurrentTabId ( ) : string ;
    /**
     * Selects the tab with the given id.
     * @param id Id of the tab to select.
     */
    setSelectedTabId (id : string ) : void ;
  }
}
declare module 'goog:goog.ui.editor.TabPane' {
  import TabPane = ಠ_ಠ.clutz.goog.ui.editor.TabPane;
  export default TabPane;
}

//!! generated by clutz.
// Generated from ui/tabpane.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * TabPane widget. All children already inside the tab pane container element
   * will be be converted to tabs. Each tab is represented by a goog.ui.TabPane.
   * TabPage object. Further pages can be constructed either from an existing
   * container or created from scratch.
   */
  class TabPane extends ಠ_ಠ.clutz.goog.events.EventTarget {
    private noStructuralTyping_goog_ui_TabPane : any;
    /**
     * TabPane widget. All children already inside the tab pane container element
     * will be be converted to tabs. Each tab is represented by a goog.ui.TabPane.
     * TabPage object. Further pages can be constructed either from an existing
     * container or created from scratch.
     * @param el Container element to create the tab pane out of.
     * @param opt_tabLocation Location of the tabs in relation to the content container. Default is top.
     * @param opt_domHelper Optional DOM helper.
     * @param opt_useMouseDown Whether to use MOUSEDOWN instead of CLICK for tab changes.
     */
    constructor (el : GlobalElement | null , opt_tabLocation ? : ಠ_ಠ.clutz.goog.ui.TabPane.TabLocation , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null , opt_useMouseDown ? : boolean ) ;
    /**
     * DomHelper used to interact with the document, allowing components to be
     * created in a different window.  This property is considered protected;
     * subclasses of Component may refer to it directly.
     */
    protected dom_ : ಠ_ಠ.clutz.goog.dom.DomHelper | null ;
    /**
     * Adds a page to the tab pane.
     * @param page Tab page to add.
     * @param opt_index Zero based index to insert tab at. Inserted at the end if not specified.
     */
    addPage (page : ಠ_ಠ.clutz.goog.ui.TabPane.TabPage | null , opt_index ? : number ) : void ;
    disposeInternal ( ) : void ;
    getContentElement ( ) : GlobalElement | null ;
    getElement ( ) : GlobalElement | null ;
    /**
     * Gets the tab page by zero based index.
     * @param index Index of page to return.
     */
    getPage (index : number ) : ಠ_ಠ.clutz.goog.ui.TabPane.TabPage | null ;
    getSelectedIndex ( ) : number ;
    getSelectedPage ( ) : ಠ_ಠ.clutz.goog.ui.TabPane.TabPage | null ;
    /**
     * Removes the specified page from the tab pane.
     * @param page Reference to tab page or zero based index.
     */
    removePage (page : ಠ_ಠ.clutz.goog.ui.TabPane.TabPage | null | number ) : void ;
    /**
     * Sets the selected tab page by zero based index.
     * @param index Index of page to select.
     */
    setSelectedIndex (index : number ) : void ;
    /**
     * Sets the selected tab page by object reference.
     * @param page Tab page to select.
     */
    setSelectedPage (page : ಠ_ಠ.clutz.goog.ui.TabPane.TabPage | null ) : void ;
  }
}
declare module 'goog:goog.ui.TabPane' {
  import TabPane = ಠ_ಠ.clutz.goog.ui.TabPane;
  export default TabPane;
}
// Generated from ui/tabpane.js
declare namespace ಠ_ಠ.clutz.goog.ui.TabPane.Events {
  let CHANGE : string ;
}
declare module 'goog:goog.ui.TabPane.Events' {
  import Events = ಠ_ಠ.clutz.goog.ui.TabPane.Events;
  export = Events;
}
// Generated from ui/tabpane.js
declare namespace ಠ_ಠ.clutz.goog.ui.TabPane {
  /**
   * Enum for representing the location of the tabs in relation to the content.
   */
  /**
   * Enum for representing the location of the tabs in relation to the content.
   */
  enum TabLocation {
    BOTTOM = 1.0 ,
    LEFT = 2.0 ,
    RIGHT = 3.0 ,
    TOP = 0.0 ,
  }
}
declare module 'goog:goog.ui.TabPane.TabLocation' {
  import TabLocation = ಠ_ಠ.clutz.goog.ui.TabPane.TabLocation;
  export default TabLocation;
}
// Generated from ui/tabpane.js
declare namespace ಠ_ಠ.clutz.goog.ui.TabPane {
  /**
   * Object representing an individual tab pane.
   */
  class TabPage {
    private noStructuralTyping_goog_ui_TabPane_TabPage : any;
    /**
     * Object representing an individual tab pane.
     * @param opt_el Container element to create the pane out of.
     * @param opt_title Pane title or element to use as the title. If not specified the first element in the container is used as the title.
     * @param opt_domHelper Optional DOM helper The first parameter can be omitted.
     */
    constructor (opt_el ? : GlobalElement | null , opt_title ? : GlobalElement | null | string , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    /**
     * DomHelper used to interact with the document, allowing components to be
     * created in a different window.  This property is considered protected;
     * subclasses of Component may refer to it directly.
     */
    protected dom_ : ಠ_ಠ.clutz.goog.dom.DomHelper | null ;
    getContentElement ( ) : GlobalElement | null ;
    getIndex ( ) : number | null ;
    getParent ( ) : ಠ_ಠ.clutz.goog.ui.TabPane | null ;
    getTitle ( ) : string ;
    getTitleElement ( ) : GlobalElement | null ;
    /**
     * Returns if the page is enabled.
     */
    isEnabled ( ) : boolean ;
    select ( ) : void ;
    /**
     * Sets the enabled state.
     * @param enabled Enabled state.
     */
    setEnabled (enabled : boolean ) : void ;
    /**
     * Sets title for tab page.
     * @param title Title for tab page.
     */
    setTitle (title : string ) : void ;
  }
}
declare module 'goog:goog.ui.TabPane.TabPage' {
  import TabPage = ಠ_ಠ.clutz.goog.ui.TabPane.TabPage;
  export default TabPage;
}
// Generated from ui/tabpane.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Object representing a tab pane page changed event.
   */
  class TabPaneEvent extends ಠ_ಠ.clutz.goog.events.Event {
    private noStructuralTyping_goog_ui_TabPaneEvent : any;
    /**
     * Object representing a tab pane page changed event.
     * @param type Event type.
     * @param target Tab widget initiating event.
     * @param page Selected page in tab pane.
     */
    constructor (type : string , target : ಠ_ಠ.clutz.goog.ui.TabPane | null , page : ಠ_ಠ.clutz.goog.ui.TabPane.TabPage | null ) ;
    /**
     * The selected page.
     */
    page : ಠ_ಠ.clutz.goog.ui.TabPane.TabPage | null ;
  }
}
declare module 'goog:goog.ui.TabPaneEvent' {
  import TabPaneEvent = ಠ_ಠ.clutz.goog.ui.TabPaneEvent;
  export default TabPaneEvent;
}

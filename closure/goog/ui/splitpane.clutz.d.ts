//!! generated by clutz.
// Generated from ui/splitpane.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * A left/right up/down Container SplitPane.
   * Create SplitPane with two goog.ui.Component opjects to split.
   * TODO(user): Support minimum splitpane size.
   * TODO(user): Allow component change/orientation after init.
   * TODO(user): Support hiding either side of handle (plus handle).
   * TODO(user): Look at setBorderBoxSize fixes and revist borderwidth code.
   */
  class SplitPane extends ಠ_ಠ.clutz.goog.ui.Component {
    private noStructuralTyping_goog_ui_SplitPane : any;
    /**
     * A left/right up/down Container SplitPane.
     * Create SplitPane with two goog.ui.Component opjects to split.
     * TODO(user): Support minimum splitpane size.
     * TODO(user): Allow component change/orientation after init.
     * TODO(user): Support hiding either side of handle (plus handle).
     * TODO(user): Look at setBorderBoxSize fixes and revist borderwidth code.
     * @param firstComponent Left or Top component.
     * @param secondComponent Right or Bottom component.
     * @param orientation SplitPane orientation.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor (firstComponent : ಠ_ಠ.clutz.goog.ui.Component | null , secondComponent : ಠ_ಠ.clutz.goog.ui.Component | null , orientation : ಠ_ಠ.clutz.goog.ui.SplitPane.Orientation , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    /**
     * Determines if a given element can be decorated by this type of component.
     * @param element Element to decorate.
     */
    canDecorate (element : GlobalElement | null ) : boolean ;
    /**
     * Create the DOM node & text node needed for the splitpane.
     */
    createDom ( ) : void ;
    /**
     * Decorates the given HTML element as a SplitPane.  Overrides {@link
     * goog.ui.Component#decorateInternal}.  Considered protected.
     * @param element Element (SplitPane div) to decorate.
     */
    protected decorateInternal (element : GlobalElement | null ) : void ;
    disposeInternal ( ) : void ;
    /**
     * Setup all events and do an initial resize.
     */
    enterDocument ( ) : void ;
    getFirstComponentSize ( ) : number | null ;
    /**
     * Gets the orientation of the split pane.
     */
    getOrientation ( ) : ಠ_ಠ.clutz.goog.ui.SplitPane.Orientation ;
    /**
     * Returns whether the orientation for the split pane is vertical
     * or not.
     */
    isVertical ( ) : boolean ;
    /**
     * Sets whether we resize on handle drag.
     * @param continuous The continuous resize value.
     */
    setContinuousResize (continuous : boolean ) : void ;
    /**
     * Set the size of the left/top component, and resize the other component based
     * on that size and handle size.
     * @param opt_size The size of the top or left, in pixels. If unspecified, leaves the size of the first component unchanged but adjusts the size of the second component to fit the split pane size.
     */
    setFirstComponentSize (opt_size ? : number | null ) : void ;
    /**
     * Sets the SplitPane handle size.
     * TODO(user): Make sure this works after initialization.
     * @param size The size of the handle in pixels.
     */
    setHandleSize (size : number ) : void ;
    /**
     * Sets the initial size of the left or top component.
     * @param size The size in Pixels of the container.
     */
    setInitialSize (size : number ) : void ;
    /**
     * Sets the orientation of the split pane.
     * @param orientation SplitPane orientation.
     */
    setOrientation (orientation : ಠ_ಠ.clutz.goog.ui.SplitPane.Orientation ) : void ;
    /**
     * Sets the orientation class for the split pane handle.
     */
    protected setOrientationClassForHandle ( ) : void ;
    /**
     * Set the size of the splitpane.  This is usually called by the controlling
     * application.  This will set the SplitPane BorderBoxSize.
     * @param size The size to set the splitpane.
     * @param opt_firstComponentSize The size of the top or left component, in pixels.
     */
    setSize (size : ಠ_ಠ.clutz.goog.math.Size , opt_firstComponentSize ? : number | null ) : void ;
  }
}
// Generated from ui/splitpane.js
declare namespace ಠ_ಠ.clutz.goog.ui.SplitPane {
  /**
   * Events.
   */
  enum EventType {
    HANDLE_DRAG = 'handle_drag' ,
    HANDLE_DRAG_END = 'handle_drag_end' ,
    HANDLE_SNAP = 'handle_snap' ,
  }
}
declare module 'goog:goog.ui.SplitPane' {
  import SplitPane = ಠ_ಠ.clutz.goog.ui.SplitPane;
  export default SplitPane;
}
// Generated from ui/splitpane.js
declare namespace ಠ_ಠ.clutz.goog.ui.SplitPane {
  /**
   * Orientation values for the splitpane.
   */
  /**
   * Orientation values for the splitpane.
   */
  enum Orientation {
    HORIZONTAL = 'horizontal' ,
    VERTICAL = 'vertical' ,
  }
}
declare module 'goog:goog.ui.SplitPane.Orientation' {
  import Orientation = ಠ_ಠ.clutz.goog.ui.SplitPane.Orientation;
  export default Orientation;
}

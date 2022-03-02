//!! generated by clutz.
// Generated from positioning/viewportposition.js
declare namespace ಠ_ಠ.clutz.goog.positioning {
  /**
   * Encapsulates a popup position where the popup is positioned according to
   * coordinates relative to the  element's viewport (page). This calculates the
   * correct position to use even if the element is relatively positioned to some
   * other element.
   */
  class ViewportPosition extends ಠ_ಠ.clutz.goog.positioning.AbstractPosition {
    private noStructuralTyping_goog_positioning_ViewportPosition : any;
    /**
     * Encapsulates a popup position where the popup is positioned according to
     * coordinates relative to the  element's viewport (page). This calculates the
     * correct position to use even if the element is relatively positioned to some
     * other element.
     * @param arg1 Left position or coordinate.
     * @param opt_arg2 Top position.
     */
    constructor (arg1 : number | ಠ_ಠ.clutz.goog.math.Coordinate | null , opt_arg2 ? : number ) ;
    coordinate : any ;
    /**
     * Repositions the popup according to the current state
     * @param element The DOM element of the popup.
     * @param popupCorner The corner of the popup element that that should be positioned adjacent to the anchorElement.
     * @param opt_margin A margin specified in pixels.
     * @param opt_preferredSize Preferred size of the element.
     */
    reposition (element : GlobalElement | null , popupCorner : ಠ_ಠ.clutz.goog.positioning.Corner | null , opt_margin ? : ಠ_ಠ.clutz.goog.math.Box | null , opt_preferredSize ? : ಠ_ಠ.clutz.goog.math.Size | null ) : void ;
  }
}
declare module 'goog:goog.positioning.ViewportPosition' {
  import ViewportPosition = ಠ_ಠ.clutz.goog.positioning.ViewportPosition;
  export default ViewportPosition;
}

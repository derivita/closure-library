//!! generated by clutz.
// Generated from ui/animatedzippy.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Zippy widget. Expandable/collapsible container, clicking the header toggles
   * the visibility of the content.
   */
  class AnimatedZippy extends ಠ_ಠ.clutz.goog.ui.Zippy {
    private noStructuralTyping_goog_ui_AnimatedZippy : any;
    /**
     * Zippy widget. Expandable/collapsible container, clicking the header toggles
     * the visibility of the content.
     * @param header Header element, either element reference, string id or null if no header exists.
     * @param content Content element, either element reference or string id.
     * @param opt_expanded Initial expanded/visibility state. Defaults to false.
     * @param opt_domHelper An optional DOM helper.
     * @param opt_role ARIA role, default TAB.
     */
    constructor (header : GlobalElement | null | string , content : GlobalElement | null | string , opt_expanded ? : boolean , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null , opt_role ? : ಠ_ಠ.clutz.goog.a11y.aria.Role < string > | null ) ;
    /**
     * Acceleration function for expand/collapse animation.
     */
    animationAcceleration ( ...a : any [] ) : any ;
    /**
     * Duration of expand/collapse animation, in milliseconds.
     */
    animationDuration : number ;
    isBusy ( ) : boolean ;
    /**
     * Sets expanded state.
     * @param expanded Expanded/visibility state.
     */
    setExpanded (expanded : boolean ) : void ;
    /**
     * Constants for event names.
     */
    static Events : { TOGGLE_ANIMATION_BEGIN : any , TOGGLE_ANIMATION_END : any } ;
  }
}
declare module 'goog:goog.ui.AnimatedZippy' {
  import AnimatedZippy = ಠ_ಠ.clutz.goog.ui.AnimatedZippy;
  export default AnimatedZippy;
}

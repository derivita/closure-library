//!! generated by clutz.
// Generated from ui/iframemask.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Controller for an iframe mask. The mask is only valid in the current
   * document, or else the document of the given DOM helper.
   */
  class IframeMask extends ಠ_ಠ.clutz.goog.Disposable {
    private noStructuralTyping_goog_ui_IframeMask : any;
    /**
     * Controller for an iframe mask. The mask is only valid in the current
     * document, or else the document of the given DOM helper.
     * @param opt_domHelper The DOM helper for the relevant document.
     * @param opt_iframePool An optional source of iframes. Iframes will be grabbed from the pool when they're needed and returned to the pool (but still attached to the DOM) when they're done.
     */
    constructor (opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null , opt_iframePool ? : ಠ_ಠ.clutz.goog.structs.Pool | null ) ;
    applyMask ( ) : void ;
    /**
     * Removes the iframe from the DOM.
     */
    protected disposeInternal ( ) : void ;
    hideMask ( ) : void ;
    /**
     * Listens on the specified target, hiding and showing the iframe mask
     * when the given event types are dispatched.
     * @param target The event target to listen on.
     * @param showEvent When this event fires, the mask will be applied.
     * @param hideEvent When this event fires, the mask will be hidden.
     * @param opt_snapElement When the mask is applied, it will automatically snap to this element. If no element is specified, it will use the default snap element.
     */
    listenOnTarget (target : ಠ_ಠ.clutz.goog.events.EventTarget | null , showEvent : string , hideEvent : string , opt_snapElement ? : GlobalElement | null ) : void ;
    removeHandlers ( ) : void ;
    /**
     * Sets the opacity of the mask. Will take effect the next time the mask
     * is applied.
     * @param opacity A value between 0 and 1, with 1 being totally opaque.
     */
    setOpacity (opacity : number ) : void ;
    /**
     * Sets the element to use as the bounds of the mask. Takes effect immediately.
     * @param snapElement The snap element, which the iframe will be "snapped" around.
     */
    setSnapElement (snapElement : GlobalElement | null ) : void ;
    /**
     * Sets the z-index of the mask. Will take effect the next time the mask
     * is applied.
     * @param zIndex A z-index value.
     */
    setZIndex (zIndex : number ) : void ;
  }
}
declare module 'goog:goog.ui.IframeMask' {
  import IframeMask = ಠ_ಠ.clutz.goog.ui.IframeMask;
  export default IframeMask;
}

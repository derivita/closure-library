//!! generated by clutz.
// Generated from a11y/aria/announcer.js
declare namespace ಠ_ಠ.clutz.goog.a11y.aria {
  /**
   * Class that allows messages to be spoken by assistive technologies that the
   * user may have active.
   */
  class Announcer extends ಠ_ಠ.clutz.goog.Disposable {
    private noStructuralTyping_goog_a11y_aria_Announcer : any;
    /**
     * Class that allows messages to be spoken by assistive technologies that the
     * user may have active.
     * @param opt_domHelper DOM helper.
     */
    constructor (opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    disposeInternal ( ) : void ;
    /**
     * Returns the id value for an aria-live region for a given priority.
     * @param priority The required priority.
     */
    getLiveRegionId (priority : ಠ_ಠ.clutz.goog.a11y.aria.LivePriority ) : string ;
    /**
     * Announce a message to be read by any assistive technologies the user may
     * have active.
     * @param message The message to announce to screen readers.
     * @param opt_priority The priority of the message. Defaults to POLITE.
     */
    say (message : string , opt_priority ? : ಠ_ಠ.clutz.goog.a11y.aria.LivePriority | null ) : void ;
  }
}
declare module 'goog:goog.a11y.aria.Announcer' {
  import Announcer = ಠ_ಠ.clutz.goog.a11y.aria.Announcer;
  export default Announcer;
}

//!! generated by clutz.
// Generated from ui/activitymonitor.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Once initialized with a document, the activity monitor can be queried for
   * the current idle time.
   */
  class ActivityMonitor extends ಠ_ಠ.clutz.goog.events.EventTarget {
    private noStructuralTyping_goog_ui_ActivityMonitor : any;
    /**
     * Once initialized with a document, the activity monitor can be queried for
     * the current idle time.
     * @param opt_domHelper DomHelper which contains the document(s) to listen to.  If null, the default document is usedinstead.
     * @param opt_useBubble Whether to use the bubble phase to listen for events. By default listens on the capture phase so that it won't miss events that get stopPropagation/cancelBubble'd. However, this can cause problems in IE8 if the page loads multiple scripts that include the closure event handling code.
     */
    constructor (opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null | ( ಠ_ಠ.clutz.goog.dom.DomHelper | null ) [] , opt_useBubble ? : boolean ) ;
    /**
     * Adds a document to those being monitored by this class.
     * @param doc Document to monitor.
     */
    addDocument (doc : Document | null ) : void ;
    disposeInternal ( ) : void ;
    /**
     * Returns the amount of time the user has been idle.
     * @param opt_now The current time can optionally be passed in for the computation to avoid an extra Date allocation.
     */
    getIdleTime (opt_now ? : number ) : number ;
    /**
     * Returns the time of the last event
     */
    getLastEventTime ( ) : number ;
    /**
     * Returns the type of the last user event.
     */
    getLastEventType ( ) : string ;
    /**
     * Removes a document from those being monitored by this class.
     * @param doc Document to monitor.
     */
    removeDocument (doc : Document | null ) : void ;
    resetTimer ( ) : void ;
    /**
     * Updates the idle time and fires an event if time has elapsed since
     * the last update.
     * @param eventTime Time (in MS) of the event that cleared the idle timer.
     * @param eventType Type of the event, used only for debugging.
     */
    protected updateIdleTime (eventTime : number , eventType : string ) : void ;
    /**
     * Minimum amount of time in ms between throttled ACTIVITY events
     */
    static MIN_EVENT_SPACING : number ;
  }
}
// Generated from ui/activitymonitor.js
declare namespace ಠ_ಠ.clutz.goog.ui.ActivityMonitor {
  /**
   * Event constants for the activity monitor.
   */
  enum Event {
    ACTIVITY = 'activity' ,
  }
}
declare module 'goog:goog.ui.ActivityMonitor' {
  import ActivityMonitor = ಠ_ಠ.clutz.goog.ui.ActivityMonitor;
  export default ActivityMonitor;
}

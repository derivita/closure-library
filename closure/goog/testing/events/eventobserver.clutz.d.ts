//!! generated by clutz.
// Generated from testing/events/eventobserver.js
declare namespace ಠ_ಠ.clutz.goog.testing.events {
  /**
   * Event observer.  Implements a handleEvent interface so it may be used as
   * a listener in listening functions and methods.
   */
  class EventObserver {
    private noStructuralTyping_goog_testing_events_EventObserver : any;
    clear ( ) : void ;
    getEvents (opt_type ? : string | ಠ_ಠ.clutz.goog.events.EventId ) : ಠ_ಠ.clutz.goog.events.Event [] ;
    /**
     * Handles an event and remembers it.  Event listening functions and methods
     * will call this method when this observer is used as a listener.
     * @param e Event to handle.
     */
    handleEvent (e : ಠ_ಠ.clutz.goog.events.Event ) : void ;
  }
}
declare module 'goog:goog.testing.events.EventObserver' {
  import EventObserver = ಠ_ಠ.clutz.goog.testing.events.EventObserver;
  export default EventObserver;
}

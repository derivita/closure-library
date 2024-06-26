//!! generated by clutz.
// Generated from testing/events/onlinehandler.js
declare namespace ಠ_ಠ.clutz.goog.testing.events {
  /**
   * NetworkStatusMonitor test double.
   */
  class OnlineHandler extends ಠ_ಠ.clutz.goog.events.EventTarget implements ಠ_ಠ.clutz.goog.net.NetworkStatusMonitor {
    private noStructuralTyping_goog_testing_events_OnlineHandler : any;
    /**
     * NetworkStatusMonitor test double.
     * @param initialState The initial online state of the mock.
     */
    constructor (initialState : boolean ) ;
    isOnline ( ) : any ;
    /**
     * Sets the online state.
     * @param newOnlineState The new online state.
     */
    setOnline (newOnlineState : boolean ) : void ;
  }
}
declare module 'goog:goog.testing.events.OnlineHandler' {
  import OnlineHandler = ಠ_ಠ.clutz.goog.testing.events.OnlineHandler;
  export default OnlineHandler;
}

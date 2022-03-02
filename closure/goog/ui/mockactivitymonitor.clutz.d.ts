//!! generated by clutz.
// Generated from ui/mockactivitymonitor.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * A mock implementation of goog.ui.ActivityMonitor for unit testing. Clients
   * of this class should override Date.now to return a synthetic time from
   * the unit test.
   */
  class MockActivityMonitor extends ಠ_ಠ.clutz.goog.ui.ActivityMonitor {
    private noStructuralTyping_goog_ui_MockActivityMonitor : any;
    /**
     * A mock implementation of goog.ui.ActivityMonitor for unit testing. Clients
     * of this class should override Date.now to return a synthetic time from
     * the unit test.
     */
    constructor ( ) ;
    dispatchEvent (e ? : any ) : any ;
    /**
     * Simulates an event that updates the user to being non-idle.
     * @param opt_type The type of event that made the user not idle. If not specified, defaults to MOUSEMOVE.
     */
    simulateEvent (opt_type ? : ಠ_ಠ.clutz.goog.events.EventType | null ) : void ;
  }
}
declare module 'goog:goog.ui.MockActivityMonitor' {
  import MockActivityMonitor = ಠ_ಠ.clutz.goog.ui.MockActivityMonitor;
  export default MockActivityMonitor;
}

//!! generated by clutz.
// Generated from net/networkstatusmonitor.js
declare namespace ಠ_ಠ.clutz.goog.net {
  /**
   * Base class for network status information providers.
   */
  interface NetworkStatusMonitor extends ಠ_ಠ.clutz.goog.events.Listenable {
    isOnline ( ) : boolean ;
  }
}
// Generated from net/networkstatusmonitor.js
declare namespace ಠ_ಠ.clutz.goog.net.NetworkStatusMonitor {
  /**
   * Enum for the events dispatched by the OnlineHandler.
   */
  enum EventType {
    OFFLINE = 'offline' ,
    ONLINE = 'online' ,
  }
}
declare module 'goog:goog.net.NetworkStatusMonitor' {
  import NetworkStatusMonitor = ಠ_ಠ.clutz.goog.net.NetworkStatusMonitor;
  export default NetworkStatusMonitor;
}

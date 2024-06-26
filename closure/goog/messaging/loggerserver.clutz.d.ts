//!! generated by clutz.
// Generated from messaging/loggerserver.js
declare namespace ಠ_ಠ.clutz.goog.messaging {
  export import LoggerServer = ಠ_ಠ.clutz.module$contents$goog$messaging$LoggerServer_LoggerServer ;
}
declare module 'goog:goog.messaging.LoggerServer' {
  import LoggerServer = ಠ_ಠ.clutz.goog.messaging.LoggerServer;
  export default LoggerServer;
}
// Generated from messaging/loggerserver.js
declare namespace ಠ_ಠ.clutz {
  /**
   * A logger server that logs messages on behalf of the remote end of a
   * message channel. The remote end of the channel should use a
   * {LoggerClient} with the same service name.
   */
  class module$contents$goog$messaging$LoggerServer_LoggerServer extends ಠ_ಠ.clutz.module$exports$goog$Disposable {
    private noStructuralTyping_module$contents$goog$messaging$LoggerServer_LoggerServer : any;
    /**
     * A logger server that logs messages on behalf of the remote end of a
     * message channel. The remote end of the channel should use a
     * {LoggerClient} with the same service name.
     */
    constructor (channel : ಠ_ಠ.clutz.module$exports$goog$messaging$MessageChannel , serviceName : string , channelName ? : string ) ;
    disposeInternal ( ) : void ;
  }
}
declare namespace ಠ_ಠ.clutz {
  export import module$exports$goog$messaging$LoggerServer = ಠ_ಠ.clutz.module$contents$goog$messaging$LoggerServer_LoggerServer ;
}

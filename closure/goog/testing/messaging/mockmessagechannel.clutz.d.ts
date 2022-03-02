//!! generated by clutz.
// Generated from testing/messaging/mockmessagechannel.js
declare namespace ಠ_ಠ.clutz.goog.testing.messaging {
  /**
   * Class for unit-testing code that communicates over a MessageChannel.
   */
  class MockMessageChannel extends ಠ_ಠ.clutz.goog.messaging.AbstractChannel {
    private noStructuralTyping_goog_testing_messaging_MockMessageChannel : any;
    /**
     * Class for unit-testing code that communicates over a MessageChannel.
     * @param mockControl The mock control used to create the method mock for #send.
     */
    constructor (mockControl : ಠ_ಠ.clutz.goog.testing.MockControl | null ) ;
    /**
     * Whether the channel has been disposed.
     */
    disposed : boolean ;
    /**
     * Sets a flag indicating that this is disposed.
     */
    dispose ( ) : void ;
    /**
     * Mocks the receipt of a message. Passes the payload the appropriate service.
     * @param serviceName The service to run.
     * @param payload The argument to pass to the service.
     */
    receive (serviceName : string , payload : string | GlobalObject ) : void ;
    /**
     * A mock send function. Actually an instance of
     * {@link goog.testing.FunctionMock}.
     * @param serviceName The name of the remote service to run.
     * @param payload The payload to send to the remote page.
     */
    send (serviceName : string , payload : string | GlobalObject ) : void ;
  }
}
declare module 'goog:goog.testing.messaging.MockMessageChannel' {
  import MockMessageChannel = ಠ_ಠ.clutz.goog.testing.messaging.MockMessageChannel;
  export default MockMessageChannel;
}

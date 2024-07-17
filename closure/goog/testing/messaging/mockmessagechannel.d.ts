import { AbstractChannel } from '../../messaging/abstractchannel.js';
import { MockControl } from '../mockcontrol.js';
/**
 * Class for unit-testing code that communicates over a MessageChannel.
 */
export declare class MockMessageChannel extends AbstractChannel {
    /**
     * Class for unit-testing code that communicates over a MessageChannel.
     * @param mockControl The mock control used to create the method mock for #send.
     */
    constructor(mockControl: MockControl | null);
    private noStructuralTyping_closure_goog_testing_messaging_mockmessagechannel_MockMessageChannel;
    /**
     * Whether the channel has been disposed.
     */
    disposed: boolean;
    /**
     * A mock send function. Actually an instance of
     * {@link goog.testing.FunctionMock}.
     * @param serviceName The name of the remote service to run.
     * @param payload The payload to send to the remote page.
     */
    send(serviceName: string, payload: string | object): any;
    /**
     * Sets a flag indicating that this is disposed.
     */
    dispose(): void;
    /**
     * Mocks the receipt of a message. Passes the payload the appropriate service.
     * @param serviceName The service to run.
     * @param payload The argument to pass to the service.
     */
    receive(serviceName: string, payload: string | object): void;
}

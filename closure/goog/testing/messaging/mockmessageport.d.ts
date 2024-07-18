import { EventTarget } from '../../events/eventtarget.js';
import { MockControl } from '../mockcontrol.js';
/**
 * Class for unit-testing code that uses MessagePorts.
 */
export declare class MockMessagePort extends EventTarget {
    /**
     * Class for unit-testing code that uses MessagePorts.
     * @param id An opaque identifier, used because message ports otherwise have no distinguishing characteristics.
     * @param mockControl The mock control used to create the method mock for #postMessage.
     */
    constructor(id: any, mockControl: MockControl | null);
    private noStructuralTyping_closure_goog_testing_messaging_mockmessageport_MockMessagePort;
    /**
     * An opaque identifier, used because message ports otherwise have no
     * distinguishing characteristics.
     */
    id: any;
    /**
     * Whether or not the port has been started.
     */
    started: boolean;
    /**
     * Whether or not the port has been closed.
     */
    closed: boolean;
    /**
     * A mock postMessage funciton. Actually an instance of
     * {@link goog.testing.FunctionMock}.
     * @param message The message to send.
     * @param opt_ports Ports to send with the message.
     */
    postMessage(message: any, opt_ports?: (MessagePort | null)[] | null): void;
    /**
     * Starts the port.
     */
    start(): void;
    /**
     * Closes the port.
     */
    close(): void;
}

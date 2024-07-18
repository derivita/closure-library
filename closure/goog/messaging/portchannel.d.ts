import { Timer } from '../timer/timer.js';
import * as log from '../log/log.js';
import { AbstractChannel } from './abstractchannel.js';
import { DeferredChannel } from './deferredchannel.js';
import type * as messaging from './messagechannel.js';
/**
 * A wrapper for several types of HTML5 message-passing entities
 * ({@link MessagePort}s and {@link Worker}s). This class implements the
 * {@link messaging.MessageChannel} interface.
 *
 * This class can be used in conjunction with other communication on the port.
 * It sets {@link PortChannel.FLAG} to true on all messages it
 * sends.
 */
export declare class PortChannel extends AbstractChannel {
    /**
     * A wrapper for several types of HTML5 message-passing entities
     * ({@link MessagePort}s and {@link Worker}s). This class implements the
     * {@link messaging.MessageChannel} interface.
     *
     * This class can be used in conjunction with other communication on the port.
     * It sets {@link PortChannel.FLAG} to true on all messages it
     * sends.
     * @param underlyingPort The message-passing entity to wrap. If this is a {@link MessagePort}, it should be started. The remote end should also be wrapped in a PortChannel. This will be disposed along with the PortChannel; this means terminating it if it's a worker or removing it from the DOM if it's an iframe.
     */
    constructor(underlyingPort: MessagePort | Worker);
    private noStructuralTyping_closure_goog_messaging_portchannel_PortChannel;
    /**
     * Create a PortChannel that communicates with a window embedded in the current
     * page (e.g. an iframe contentWindow). The code within the window should call
     * {@link forGlobalWindow} to establish the connection.
     *
     * It's possible to use this channel in conjunction with other messages to the
     * embedded window. However, only one PortChannel should be used for a given
     * window at a time.
     * @param peerWindow The window object to communicate with.
     * @param peerOrigin The expected origin of the window. See http://dev.w3.org/html5/postmsg/#dom-window-postmessage.
     * @param opt_timer The timer that regulates how often the initial connection message is attempted. This will be automatically disposed once the connection is established, or when the connection is cancelled.
     * @return The PortChannel. Although this is not actually an instance of the PortChannel class, it will behave like one in that MessagePorts may be sent across it. The DeferredChannel may be cancelled before a connection is established in order to abort the attempt to make a connection.
     */
    static forEmbeddedWindow(peerWindow: Window, peerOrigin: string, opt_timer?: Timer | null): DeferredChannel;
    /**
     * Create a PortChannel that communicates with the document in which this window
     * is embedded (e.g. within an iframe). The enclosing document should call
     * {@link forEmbeddedWindow} to establish the connection.
     *
     * It's possible to use this channel in conjunction with other messages posted
     * to the global window. However, only one PortChannel should be used for the
     * global window at a time.
     * @param peerOrigin The expected origin of the enclosing document. See http://dev.w3.org/html5/postmsg/#dom-window-postmessage.
     * @return The PortChannel. Although this may not actually be an instance of the PortChannel class, it will behave like one in that MessagePorts may be sent across it.
     */
    static forGlobalWindow(peerOrigin: string): messaging.MessageChannel;
    /**
     * The flag added to messages that are sent by a PortChannel, and are meant to
     * be handled by one on the other side.
     */
    static FLAG: string;
    /**
     * Logger for this class.
     */
    logger: log.Logger | null;
    /**
     * Sends a message over the channel.
     *
     * As an addition to the basic MessageChannel send API, PortChannels can send
     * objects that contain MessagePorts. Note that only plain Objects and Arrays,
     * not their subclasses, can contain MessagePorts.
     *
     * As per {@link http://www.w3.org/TR/html5/comms.html#clone-a-port}, once a
     * port is copied to be sent across a channel, the original port will cease
     * being able to send or receive messages.
     * @param serviceName The name of the service this message should be delivered to.
     * @param payload The value of the message. May contain MessagePorts or be a MessagePort.
     */
    send(serviceName: string, payload: string | object | MessagePort): any;
    disposeInternal(): void;
}

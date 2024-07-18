/**
 * The connectivity state of the channel.
 *
 * To be used for the new buffering-proxy detection algorithm.
 */
export declare class ConnectionState {
    /**
     * The connectivity state of the channel.
     *
     * To be used for the new buffering-proxy detection algorithm.
     */
    constructor();
    private noStructuralTyping_closure_goog_labs_net_webchannel_connectionstate_ConnectionState;
    /**
     * Handshake result.
     */
    handshakeResult: string[] | null;
    /**
     * The result of checking if there is a buffering proxy in the network.
     * True means the connection is buffered, False means unbuffered,
     * null means that the result is not available.
     */
    bufferingProxyResult: boolean | null;
}

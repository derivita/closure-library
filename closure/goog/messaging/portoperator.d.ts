import { Disposable } from '../disposable/disposable.js';
import { PortNetwork } from './portnetwork.js';
import type * as messaging from './messagechannel.js';
/**
 * The central node of a PortNetwork.
 */
export declare class PortOperator extends Disposable implements PortNetwork {
    /**
     * The central node of a PortNetwork.
     * @param name The name of this node.
     */
    constructor(name: string);
    private noStructuralTyping_closure_goog_messaging_portoperator_PortOperator;
    dial(name: any): any;
    /**
     * Adds a caller to the network with the given name. This port should have no
     * services registered on it. It will be disposed along with the PortOperator.
     * @param name The name of the port to add.
     * @param port The port to add. Must be either a {@link PortChannel} or a decorator wrapping a PortChannel; in particular, it must be able to send and receive {@link MessagePort}s.
     */
    addPort(name: string, port: messaging.MessageChannel): void;
    disposeInternal(): void;
}

import { Disposable } from '../disposable/disposable.js';
import { PortNetwork } from './portnetwork.js';
import type { MessageChannel } from './messagechannel.js';
/**
 * The leaf node of a network.
 */
export declare class PortCaller extends Disposable implements PortNetwork {
    /**
     * The leaf node of a network.
     * @param operatorPort The channel for communicating with the operator. The other side of this channel should be passed to {@link goog.messaging.PortOperator#addPort}. Must be either a {@link PortChannel} or a decorator wrapping a PortChannel; in particular, it must be able to send and receive {@link MessagePort}s.
     */
    constructor(operatorPort: MessageChannel);
    private noStructuralTyping_closure_goog_messaging_portcaller_PortCaller;
    dial(name: any): any;
    disposeInternal(): void;
}

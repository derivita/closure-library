import { Disposable } from '../disposable/disposable.js';
import { MessageChannel } from './messagechannel.js';
import type { Deferred } from '../../../third_party/closure/goog/mochikit/async/deferred.js';
/**
 * Creates a new DeferredChannel, which wraps a deferred MessageChannel and
 * enqueues messages to be sent once the wrapped channel is resolved.
 */
export declare class DeferredChannel extends Disposable implements MessageChannel {
    /**
     * Creates a new DeferredChannel, which wraps a deferred MessageChannel and
     * enqueues messages to be sent once the wrapped channel is resolved.
     * @param deferredChannel The underlying deferred MessageChannel.
     */
    constructor(deferredChannel: Deferred<MessageChannel>);
    private noStructuralTyping_closure_goog_messaging_deferredchannel_DeferredChannel;
    /**
     * Cancels the wrapped Deferred.
     */
    cancel(): void;
    connect(opt_connectCb: any): any;
    isConnected(): any;
    registerService(serviceName: any, callback: any, opt_objectPayload: any): any;
    registerDefaultService(callback: any): any;
    send(serviceName: any, payload: any): any;
    disposeInternal(): void;
}

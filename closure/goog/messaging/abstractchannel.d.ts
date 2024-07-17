import { Disposable } from '../disposable/disposable.js';
import * as log from '../log/log.js';
import { MessageChannel } from './messagechannel.js';
/**
 * Creates an abstract message channel.
 */
export declare class AbstractChannel extends Disposable implements MessageChannel {
    /**
     * Creates an abstract message channel.
     */
    constructor();
    private noStructuralTyping_closure_goog_messaging_abstractchannel_AbstractChannel;
    /**
     * Logger for this class.
     */
    protected logger: log.Logger | null;
    /**
     * Immediately calls opt_connectCb if given, and is otherwise a no-op. If
     * subclasses have configuration that needs to happen before the channel is
     * connected, they should override this and {@link #isConnected}.
     */
    connect(opt_connectCb: any): any;
    /**
     * Always returns true. If subclasses have configuration that needs to happen
     * before the channel is connected, they should override this and
     * {@link #connect}.
     */
    isConnected(): any;
    registerService(serviceName: any, callback: any, opt_objectPayload: any): any;
    registerDefaultService(callback: any): any;
    /**
     * Delivers a message to the appropriate service. This is meant to be called by
     * subclasses when they receive messages.
     *
     * This method takes into account both explicitly-registered and default
     * services, as well as making sure that JSON payloads are decoded when
     * necessary. If the subclass is capable of passing objects as payloads, those
     * objects can be passed in to this method directly. Otherwise, the (potentially
     * JSON-encoded) strings should be passed in.
     * @param serviceName The name of the service receiving the message.
     * @param payload The contents of the message.
     */
    protected deliver(serviceName: string, payload: string | object): void;
    /**
     * Find the service object for a given service name. If there's no service
     * explicitly registered, but there is a default service, a service object is
     * constructed for it.
     * @param serviceName The name of the service receiving the message.
     * @param payload The contents of the message.
     * @return The service object for the given service, or null if none was found.
     */
    protected getService(serviceName: string, payload: string | object): {
        'callback': () => any;
        'objectPayload': boolean;
    };
    /**
     * Converts the message payload into the format expected by the registered
     * service (either JSON or string).
     * @param serviceName The name of the service receiving the message.
     * @param payload The contents of the message.
     * @param objectPayload Whether the service expects an object or a plain string.
     * @return The payload in the format expected by the service, or null if something went wrong.
     */
    protected decodePayload(serviceName: string, payload: string | object, objectPayload: boolean): string | object | null;
    disposeInternal(): void;
}

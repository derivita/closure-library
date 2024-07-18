import { Disposable } from '../disposable/disposable.js';
import type { MessageChannel } from './messagechannel.js';
/**
 * Creates a logger client that sends messages along a message channel for the
 * remote end to log. The remote end of the channel should use a
 * {goog.messaging.LoggerServer} with the same service name.
 */
export declare class LoggerClient extends Disposable {
    /**
     * Creates a logger client that sends messages along a message channel for the
     * remote end to log. The remote end of the channel should use a
     * {goog.messaging.LoggerServer} with the same service name.
     * @param channel The channel that on which to send the log messages.
     * @param serviceName The name of the logging service to use.
     */
    constructor(channel: MessageChannel, serviceName: string);
    private noStructuralTyping_closure_goog_messaging_loggerclient_LoggerClient;
    disposeInternal(): void;
}

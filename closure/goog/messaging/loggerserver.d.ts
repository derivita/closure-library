import { Disposable } from '../disposable/disposable.js';
import type { MessageChannel } from './messagechannel.js';
/**
 * A logger server that logs messages on behalf of the remote end of a
 * message channel. The remote end of the channel should use a
 * {LoggerClient} with the same service name.
 */
declare class LoggerServer extends Disposable {
    /**
     * Creates a LoggerServer instance.
     */
    constructor(channel: MessageChannel, serviceName: string, channelName?: string);
    disposeInternal(): void;
}
export { LoggerServer };

import { EventTarget } from '../../../../events/eventtarget.js';
import type { WebChannel } from '../../webchannel.js';
/**
 * A fake web channel that captures all "sent" messages to memory, for testing.
 */
declare class FakeWebChannel extends EventTarget implements WebChannel {
    constructor();
    open(): any;
    send(messageData: WebChannel.MessageData): any;
    halfClose(): any;
    close(): any;
    getRuntimeProperties(): WebChannel.RuntimeProperties;
    isOpen(): boolean | null;
    /**
     * Clears the record of sent messages.
     */
    clearSentMessages(): void;
    getSentMessages(): WebChannel.MessageData[];
    getOnlySentMessage(): WebChannel.MessageData;
}
declare const _default: {
    FakeWebChannel: typeof FakeWebChannel;
};
export default _default;

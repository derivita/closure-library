import { BrowserEvent } from '../../events/browserevent.js';
import { Event } from '../events/events.js';
/**
 * Creates a new fake MessageEvent.
 */
export declare class MockMessageEvent extends Event {
    /**
     * Creates a new fake MessageEvent.
     * @param data The data of the message.
     * @param opt_origin The origin of the message, for server-sent and cross-document events.
     * @param opt_lastEventId The last event ID, for server-sent events.
     * @param opt_source The proxy for the source window, for cross-document events.
     * @param opt_ports The Array of ports sent with the message, for cross-document and channel events.
     */
    constructor(data: any, opt_origin?: string, opt_lastEventId?: string, opt_source?: Window | null, opt_ports?: (MessagePort | null)[] | null);
    private noStructuralTyping_closure_goog_testing_messaging_mockmessageevent_MockMessageEvent;
    /**
     * The data of the message.
     */
    data: any;
    /**
     * The origin of the message, for server-sent and cross-document events.
     */
    origin: string | null;
    /**
     * The last event ID, for server-sent events.
     */
    lastEventId: string | null;
    /**
     * The proxy for the source window, for cross-document events.
     */
    source: Window | null;
    /**
     * The Array of ports sent with the message, for cross-document and channel
     * events.
     */
    ports: MessagePort[] | null;
    /**
     * Wraps a new fake MessageEvent in a BrowserEvent, like how a real MessageEvent
     * would be wrapped.
     * @param data The data of the message.
     * @param opt_origin The origin of the message, for server-sent and cross-document events.
     * @param opt_lastEventId The last event ID, for server-sent events.
     * @param opt_source The proxy for the source window, for cross-document events.
     * @param opt_ports The Array of ports sent with the message, for cross-document and channel events.
     * @return The wrapping event.
     */
    static wrap(data: any, opt_origin?: string, opt_lastEventId?: string, opt_source?: Window | null, opt_ports?: (MessagePort | null)[] | null): BrowserEvent;
}

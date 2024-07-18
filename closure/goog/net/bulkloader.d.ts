import { Event } from '../events/event.js';
import { EventTarget } from '../events/eventtarget.js';
import type { Uri } from '../uri/uri.js';
/**
 * Class used to load multiple URIs.
 */
export declare class BulkLoader extends EventTarget {
    /**
     * Class used to load multiple URIs.
     * @param uris The URIs to load.
     */
    constructor(uris: (string | Uri | null)[] | null);
    private noStructuralTyping_closure_goog_net_bulkloader_BulkLoader;
    /**
     * Gets the response texts, in order.
     * @return The response texts.
     */
    getResponseTexts(): string[] | null;
    /**
     * Gets the request Uris.
     * @return The request URIs, in order.
     */
    getRequestUris(): string[] | null;
    /**
     * Starts the process of loading the URIs.
     */
    load(): void;
    disposeInternal(): void;
}
export declare namespace BulkLoader {
    class LoadErrorEvent extends Event {
        /**
         *
         * @param status The response status.
         */
        constructor(status: number);
        private noStructuralTyping_closure_goog_net_bulkloader_LoadErrorEvent;
        status: number;
    }
}

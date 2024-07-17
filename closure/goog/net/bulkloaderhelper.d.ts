import { Disposable } from '../disposable/disposable.js';
import type { Uri } from '../uri/uri.js';
/**
 * Helper class used to load multiple URIs.
 */
export declare class BulkLoaderHelper extends Disposable {
    /**
     * Helper class used to load multiple URIs.
     * @param uris The URIs to load.
     */
    constructor(uris: (string | Uri | null)[] | null);
    private noStructuralTyping_closure_goog_net_bulkloaderhelper_BulkLoaderHelper;
    /**
     * Gets the URI by id.
     * @param id The id.
     * @return The URI specified by the id.
     */
    getUri(id: number): string | Uri | null;
    /**
     * Gets the URIs.
     * @return The URIs.
     */
    getUris(): (string | Uri | null)[] | null;
    /**
     * Gets the response texts.
     * @return The response texts.
     */
    getResponseTexts(): string[] | null;
    /**
     * Sets the response text by id.
     * @param id The id.
     * @param responseText The response texts.
     */
    setResponseText(id: number, responseText: string): void;
    /**
     * Determines if the load of the URIs is complete.
     * @return TRUE iff the load is complete.
     */
    isLoadComplete(): boolean;
    disposeInternal(): void;
}

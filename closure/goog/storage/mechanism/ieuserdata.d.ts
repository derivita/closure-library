import * as iter from '../../iter/iter.js';
import { IterableMechanism } from './iterablemechanism.js';
/**
 * Provides a storage mechanism using IE userData.
 */
export declare class IEUserData extends IterableMechanism {
    /**
     * Provides a storage mechanism using IE userData.
     * @param storageKey The key (store name) to store the data under.
     * @param opt_storageNodeId The ID of the associated HTML element, one will be created if not provided.
     */
    constructor(storageKey: string, opt_storageNodeId?: string);
    private noStructuralTyping_closure_goog_storage_mechanism_ieuserdata_IEUserData;
    /**
     * Encoding map for characters which are not encoded by encodeURIComponent().
     * See encodeKey_ documentation for encoding details.
     */
    static ENCODE_MAP: object;
    /**
     * Determines whether or not the mechanism is available.
     * @return True if the mechanism is available.
     */
    isAvailable(): boolean;
    set(key: any, value: any): any;
    get(key: any): string;
    remove(key: any): any;
    getCount(): number;
    __iterator__(opt_keys: any): iter.Iterator<any>;
    clear(): void;
}

import * as iter from '../../iter/iter.js';
import { IterableMechanism } from './iterablemechanism.js';
/**
 * Provides a storage mechanism that uses HTML5 Web storage.
 */
export declare class HTML5WebStorage extends IterableMechanism {
    /**
     * Provides a storage mechanism that uses HTML5 Web storage.
     * @param storage The Web storage object.
     */
    constructor(storage: Storage | null);
    private noStructuralTyping_closure_goog_storage_mechanism_html5webstorage_HTML5WebStorage;
    /**
     * Determines whether or not the mechanism is available.
     * It works only if the provided web storage object exists and is enabled.
     * @return True if the mechanism is available.
     */
    isAvailable(): boolean;
    set(key: any, value: any): any;
    get(key: any): string;
    remove(key: any): any;
    getCount(): number;
    __iterator__(opt_keys: any): iter.Iterator<any>;
    clear(): void;
    /**
     * Gets the key for a given key index. If an index outside of
     * [0..this.getCount()) is specified, this function returns null.
     * @param index A key index.
     * @return A storage key, or null if the specified index is out of range.
     */
    key(index: number): string | null;
}

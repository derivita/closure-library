import { IterableMechanism } from '../../storage/mechanism/iterablemechanism.js';
import { Iterator } from '../../iter/iter.js';
/**
 * Creates a fake iterable mechanism.
 */
declare class FakeMechanism extends IterableMechanism {
    /**
     * Creates a fake iterable mechanism.
     */
    constructor();
    private noStructuralTyping_closure_goog_testing_storage_fakemechanism_FakeMechanism;
    /**
     * Set a value for a key.
     * @param key The key to set.
     * @param value The string to save.
     */
    set(key: string, value: string): any;
    /**
     * Get the value stored under a key.
     * @param key The key to get.
     * @return The corresponding value, null if not found.
     */
    get(key: string): string | null;
    /**
     * Remove a key and its value.
     * @param key The key to remove.
     */
    remove(key: string): any;
    /**
     * Returns an iterator that iterates over the elements in the storage. Will
     * throw goog.iter.StopIteration after the last element.
     * @param opt_keys True to iterate over the keys. False to iterate over the values.  The default value is false.
     * @return The iterator.
     */
    __iterator__(opt_keys?: boolean): Iterator<any>;
}
export { FakeMechanism };

import { Mechanism } from './mechanism.js';
import { Iterator as GoogIterator } from '../../iter/iter.js';
/**
 * Interface for all iterable storage mechanisms.
 */
declare abstract class IterableMechanism extends Mechanism implements Iterable<string> {
    /**
     * Interface for all iterable storage mechanisms.
     */
    constructor();
    private noStructuralTyping_closure_goog_storage_mechanism_iterablemechanism_IterableMechanism;
    /**
     * Get the number of stored key-value pairs.
     *
     * Could be overridden in a subclass, as the default implementation is not very
     * efficient - it iterates over all keys.
     * @return Number of stored elements.
     */
    getCount(): number;
    /**
     * Returns an iterator that iterates over the elements in the storage. Will
     * throw goog.iter.StopIteration after the last element.
     * @param opt_keys True to iterate over the keys. False to iterate over the values.  The default value is false.
     * @return The iterator.
     */
    __iterator__(opt_keys?: boolean): GoogIterator;
    /**
     * Returns an interator that iterates over all the keys for elements in storage.
     */
    [Symbol.iterator](): IterableIterator<string>;
    /**
     * Remove all key-value pairs.
     *
     * Could be overridden in a subclass, as the default implementation is not
     * very efficient - it iterates over all keys.
     */
    clear(): void;
}
export { IterableMechanism };

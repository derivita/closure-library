import { Collection } from './collection.js';
import type { Iterator } from '../iter/iter.js';
/**
 * A set that can contain both primitives and objects.  Adding and removing
 * elements is O(1).  Primitives are treated as identical if they have the same
 * type and convert to the same string.  Objects are treated as identical only
 * if they are references to the same object.  WARNING: A Set can
 * contain both 1 and (new Number(1)), because they are not the same.  WARNING:
 * Adding (new Number(1)) twice will yield two distinct elements, because they
 * are two different objects.  WARNING: Any object that is added to a
 * Set will be modified!  Because goog.getUid() is used to
 * identify objects, every object in the set will be mutated.
 */
export declare class Set<T = any> implements Collection<T | null>, Iterable<T | null> {
    /**
     * A set that can contain both primitives and objects.  Adding and removing
     * elements is O(1).  Primitives are treated as identical if they have the same
     * type and convert to the same string.  Objects are treated as identical only
     * if they are references to the same object.  WARNING: A Set can
     * contain both 1 and (new Number(1)), because they are not the same.  WARNING:
     * Adding (new Number(1)) twice will yield two distinct elements, because they
     * are two different objects.  WARNING: Any object that is added to a
     * Set will be modified!  Because goog.getUid() is used to
     * identify objects, every object in the set will be mutated.
     * @param opt_values Initial values to start with.
     */
    constructor(opt_values?: (T | null)[] | {
        [key: string]: T | null;
    } | null);
    private noStructuralTyping_closure_goog_structs_set_Set;
    /**
     * The number of items in this set.
     */
    size: number;
    getCount(): number;
    /**
     * Add a primitive or an object to the set.
     * @param element The primitive or object to add.
     */
    add(element: T | null): any;
    /**
     * Adds all the values in the given collection to this set.
     * @param col A collection containing the elements to add.
     */
    addAll(col: (T | null)[] | Collection<T | null> | {
        [key: string]: T | null;
    } | null): void;
    /**
     * Removes all values in the given collection from this set.
     * @param col A collection containing the elements to remove.
     */
    removeAll(col: (T | null)[] | Collection<T | null> | {
        [key: string]: T | null;
    } | null): void;
    /**
     * Removes the given element from this set.
     * @param element The primitive or object to remove.
     * @return Whether the element was found and removed.
     */
    delete(element: T | null): boolean;
    /**
     * Removes the given element from this set.
     * @param element The primitive or object to remove.
     * @return Whether the element was found and removed.
     */
    remove(element: T | null): boolean;
    /**
     * Removes all elements from this set.
     */
    clear(): void;
    /**
     * Tests whether this set is empty.
     * @return True if there are no elements in this set.
     */
    isEmpty(): boolean;
    /**
     * Tests whether this set contains the given element.
     * @param element The primitive or object to test for.
     * @return True if this set contains the given element.
     */
    has(element: T | null): boolean;
    /**
     * Tests whether this set contains the given element.
     * @param element The primitive or object to test for.
     * @return True if this set contains the given element.
     */
    contains(element: T | null): boolean;
    /**
     * Tests whether this set contains all the values in a given collection.
     * Repeated elements in the collection are ignored, e.g.  (new
     * Set([1, 2])).containsAll([1, 1]) is True.
     * @param col A collection-like object.
     * @return True if the set contains all elements.
     */
    containsAll(col: Collection<T | null> | object | null): boolean;
    /**
     * Finds all values that are present in both this set and the given collection.
     * @param col A collection.
     * @return A new set containing all the values (primitives or objects) present in both this set and the given collection.
     */
    intersection<S = any>(col: (S | null)[] | {
        [key: string]: S | null;
    } | null): Set<T | S | null>;
    /**
     * Finds all values that are present in this set and not in the given
     * collection.
     * @param col A collection.
     * @return A new set containing all the values (primitives or objects) present in this set but not in the given collection.
     */
    difference(col: (T | null)[] | Collection<T | null> | {
        [key: string]: T | null;
    } | null): Set;
    /**
     * Returns an array containing all the elements in this set.
     * @return An array containing all the elements in this set.
     */
    getValues(): (T | null)[];
    values(): IterableIterator<T | null>;
    /**
     * Creates a shallow clone of this set.
     * @return A new set containing all the same elements as this set.
     */
    clone(): Set<T | null>;
    /**
     * Tests whether the given collection consists of the same elements as this set,
     * regardless of order, without repetition.  Primitives are treated as equal if
     * they have the same type and convert to the same string; objects are treated
     * as equal if they are references to the same object.  This operation is O(n).
     * @param col A collection.
     * @return True if the given collection consists of the same elements as this set, regardless of order, without repetition.
     */
    equals(col: Collection<T | null> | object | null): boolean;
    /**
     * Tests whether the given collection contains all the elements in this set.
     * Primitives are treated as equal if they have the same type and convert to the
     * same string; objects are treated as equal if they are references to the same
     * object.  This operation is O(n).
     * @param col A collection.
     * @return True if this set is a subset of the given collection.
     */
    isSubsetOf(col: Collection<T | null> | object | null): boolean;
    /**
     * Returns an iterator that iterates over the elements in this set.
     * @param opt_keys This argument is ignored.
     * @return An iterator over the elements in this set.
     */
    __iterator__(opt_keys?: boolean): Iterator<any>;
    [Symbol.iterator](): IterableIterator<T | null>;
}

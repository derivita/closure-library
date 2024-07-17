/**
 * A SetLike implements the same public interface as an ES6 Set, without tying
 * the underlying code directly to the implementation. Any additions to this
 * type should also be present on ES6 Sets.
 */
interface SetLike<T = any> extends Iterable<T | null> {
    add(val: T | null): any;
    delete(val: T | null): boolean;
    has(val: T | null): boolean;
    size: number;
}
export { SetLike };
/**
 * Creates a new ES6 Set containing the elements that appear in both given
 * collections.
 */
export declare function intersection<T = any>(a: SetLike<T | null>, b: Iterable<T | null>): Set<T | null>;
/**
 * Creates a new ES6 Set containing the elements that appear in both given
 * collections.
 */
export declare function union<T = any>(a: SetLike<T | null>, b: Iterable<T | null>): Set<T | null>;
/**
 * Creates a new ES6 Set containing the elements that appear in the first
 * collection but not in the second.
 */
export declare function difference<T = any>(a: SetLike<T | null>, b: Iterable<T | null>): Set<T | null>;
/**
 * Creates a new set containing the elements that appear in a or b but not
 * both.
 */
export declare function symmetricDifference<T = any>(a: Set<T | null>, b: Set<T | null>): Set<T | null>;
/**
 * Adds all the values in the given iterable to the given set.
 * @param set The set to add items to.
 * @param col A collection containing items to add.
 */
export declare function addAll<T = any>(set: SetLike<T | null>, col: Iterable<T | null>): void;
/**
 * Removes all values in the given collection from the given set.
 * @param set The set to remove items from.
 * @param col A collection containing the elements to remove.
 */
export declare function removeAll<T = any>(set: SetLike<T | null>, col: Iterable<T | null>): void;
/**
 * Checks the given set contains all members of the given collection.
 * @param set The set to check for item presence.
 * @param col The collection of items to check for.
 * @return True iff the given set contains all the elements in the given collection, false otherwise.
 */
export declare function hasAll<T = any>(set: SetLike<T | null>, col: Iterable<T | null>): boolean;
/**
 * Tests whether the given collection consists of the same elements as the
 * given set, regardless of order, without repetition. This operation is O(n).
 * @param set The first set which might be equal to the given collection.
 * @param col The second collection of items.
 * @return True iff the given collections are equal (contain) contains all the elements in the given collection, false otherwise.
 */
export declare function equals<T = any>(set: SetLike<T | null>, col: SetLike<T | null> | (T | null)[]): boolean;
/**
 * Tests whether all elements in the set are contained in the given collection.
 * This operation is O(n).
 * @param set The set which might be a subset of the given collection.
 * @param col The second collection of items.
 * @return True iff set A is a subset of collection B, false otherwise.
 */
export declare function isSubsetOf<T = any>(set: SetLike<T | null>, col: SetLike<T | null> | (T | null)[]): boolean;

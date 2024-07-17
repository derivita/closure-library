import * as iter from '../iter/iter.js';
/**
 * Creates a set of strings.
 */
export declare class StringSet {
    /**
     * Creates a set of strings.
     * @param opt_elements Elements to add to the set. The non-string items will be converted to strings, so 15 and '15' will mean the same.
     */
    constructor(opt_elements?: any[]);
    private noStructuralTyping_closure_goog_structs_stringset_StringSet;
    /**
     * Adds a single element to the set.
     * @param element The element to add. It will be converted to string.
     */
    add(element: any): void;
    /**
     * Adds a the elements of an array to this set.
     * @param arr The array to add the elements of.
     */
    addArray(arr: any[]): void;
    /**
     * Adds a the elements of a set to this set.
     * @param stringSet The set to add the elements of.
     */
    addSet(stringSet: StringSet): void;
    /**
     * Removes all elements of the set.
     */
    clear(): void;
    clone(): StringSet;
    /**
     * Tells if the set contains the given element.
     * @param element The element to check.
     * @return Whether it is in the set.
     */
    contains(element: any): boolean;
    /**
     * Tells if the set contains the given element.
     * @param element The element to check.
     * @return Whether it is in the set.
     */
    has(element: any): boolean;
    /**
     * Tells if the set contains all elements of the array.
     * @param arr The elements to check.
     * @return Whether they are in the set.
     */
    containsArray(arr: any[]): boolean;
    /**
     * Tells if this set has the same elements as the given set.
     * @param stringSet The other set.
     * @return Whether they have the same elements.
     */
    equals(stringSet: StringSet): boolean;
    /**
     * Calls a function for each element in the set.
     * @param f The function to call for every element. It takes the element, undefined (because sets have no notion of keys), and the set.
     * @param opt_obj The object to be used as the value of 'this' within `f`.
     */
    forEach(f: () => any, opt_obj?: object | null): void;
    /**
     * Counts the number of elements in the set in linear time.
     * MOE:begin_strip
     * NOTE: getCount is always called at most once per set instance in google3.
     * MOE:end_strip
     * If this usage pattern won't change, the linear getCount implementation is
     * better, because
     * <li>populating a set and getting the number of elements in it takes the same
     * amount of time as keeping a count_ member up to date and getting its value;
     * <li>if getCount is not called, adding and removing elements have no overhead.
     * @return The number of elements in the set.
     */
    getCount(): number;
    /**
     * Calculates the difference of two sets.
     * @param stringSet The set to subtract from this set.
     * @return `this` minus `stringSet`.
     */
    getDifference(stringSet: StringSet): StringSet;
    /**
     * Calculates the intersection of this set with another set.
     * @param stringSet The set to take the intersection with.
     * @return A new set with the common elements.
     */
    getIntersection(stringSet: StringSet): StringSet;
    /**
     * Calculates the symmetric difference of two sets.
     * @param stringSet The other set.
     * @return A new set with the elements in exactly one of `this` and `stringSet`.
     */
    getSymmetricDifference(stringSet: StringSet): StringSet;
    /**
     * Calculates the union of this set and another set.
     * @param stringSet The set to take the union with.
     * @return A new set with the union of elements.
     */
    getUnion(stringSet: StringSet): StringSet;
    values(): string[];
    getValues(): string[];
    /**
     * Tells if this set and the given set are disjoint.
     * @param stringSet The other set.
     * @return True iff they don't have common elements.
     */
    isDisjoint(stringSet: StringSet): boolean;
    isEmpty(): boolean;
    /**
     * Tells if this set is the subset of the given set.
     * @param stringSet The other set.
     * @return Whether this set if the subset of that.
     */
    isSubsetOf(stringSet: StringSet): boolean;
    /**
     * Tells if this set is the superset of the given set.
     * @param stringSet The other set.
     * @return Whether this set if the superset of that.
     */
    isSupersetOf(stringSet: StringSet): boolean;
    /**
     * Removes a single element from the set.
     * @param element The element to remove.
     * @return Whether the element was in the set.
     */
    delete(element: any): boolean;
    /**
     * Removes a single element from the set.
     * @param element The element to remove.
     * @return Whether the element was in the set.
     */
    remove(element: any): boolean;
    /**
     * Removes all elements of the given array from this set.
     * @param arr The elements to remove.
     */
    removeArray(arr: any[]): void;
    /**
     * Removes all elements of the given set from this set.
     * @param stringSet The set of elements to remove.
     */
    removeSet(stringSet: StringSet): void;
    /**
     * Returns an iterator that iterates over the elements in the set.
     * NOTE: creating the iterator copies the whole set so use {@link #forEach} when
     * possible.
     * @param opt_keys Ignored for sets.
     * @return An iterator over the elements in the set.
     */
    __iterator__(opt_keys?: boolean): iter.Iterator;
}

/**
 * An interface for a collection of values.
 */
export interface Collection<T = any> {
    /**
     *
     * @param value Value to add to the collection.
     */
    add(value: T | null): any;
    /**
     *
     * @param value Value to remove from the collection.
     */
    remove(value: T | null): any;
    /**
     *
     * @param value Value to find in the collection.
     * @return Whether the collection contains the specified value.
     */
    contains(value: T | null): boolean;
    getCount(): number;
}

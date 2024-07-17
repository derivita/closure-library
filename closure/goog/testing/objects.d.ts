/**
 * Asserts that the given object has a transitive reference on the given value.
 *
 * This may be useful when writing tests to confirm that certain values'leaked'.
 */
declare function assertRetainsReference(object: any, value: any): void;
/**
 * Asserts that the given object has no transitive reference on the given
 * value.
 *
 * This may be useful when writing tests to confirm that certain values aren't
 * 'leaked'.
 */
declare function assertDoesNotRetainReference(object: any, value: any): void;
declare const _default: {
    assertDoesNotRetainReference: typeof assertDoesNotRetainReference;
    assertRetainsReference: typeof assertRetainsReference;
};
export default _default;

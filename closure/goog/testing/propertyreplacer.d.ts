/**
 * Helper class for stubbing out variables and object properties for unit tests.
 * This class can change the value of some variables before running the test
 * cases, and to reset them in the tearDown phase.
 * See googletest.StubOutForTesting as an analogy in Python:
 * http://protobuf.googlecode.com/svn/trunk/python/stubout.py
 *
 * Example usage:
 *
 * var stubs = new PropertyReplacer();
 *
 * function setUp() {
 * // Mock functions used in all test cases.
 * stubs.replace(Math, 'random', function() {
 * return 4;  // Chosen by fair dice roll. Guaranteed to be random.
 * });
 * }
 *
 * function tearDown() {
 * stubs.reset();
 * }
 *
 * function testThreeDice() {
 * // Mock a constant used only in this test case.
 * stubs.set(goog.global, 'DICE_COUNT', 3);
 * assertEquals(12, rollAllDice());
 * }
 *
 * Constraints on altered objects:
 * <ul>
 * <li>DOM subclasses aren't supported.
 * <li>The value of the objects' constructor property must either be equal to
 * the real constructor or kept untouched.
 * </ul>
 *
 * Code compiled with property renaming may need to use
 * `goog.reflect.objectProperty` instead of simply naming the property to
 * replace.
 */
export declare class PropertyReplacer {
    /**
     * Helper class for stubbing out variables and object properties for unit tests.
     * This class can change the value of some variables before running the test
     * cases, and to reset them in the tearDown phase.
     * See googletest.StubOutForTesting as an analogy in Python:
     * http://protobuf.googlecode.com/svn/trunk/python/stubout.py
     *
     * Example usage:
     *
     * var stubs = new PropertyReplacer();
     *
     * function setUp() {
     * // Mock functions used in all test cases.
     * stubs.replace(Math, 'random', function() {
     * return 4;  // Chosen by fair dice roll. Guaranteed to be random.
     * });
     * }
     *
     * function tearDown() {
     * stubs.reset();
     * }
     *
     * function testThreeDice() {
     * // Mock a constant used only in this test case.
     * stubs.set(goog.global, 'DICE_COUNT', 3);
     * assertEquals(12, rollAllDice());
     * }
     *
     * Constraints on altered objects:
     * <ul>
     * <li>DOM subclasses aren't supported.
     * <li>The value of the objects' constructor property must either be equal to
     * the real constructor or kept untouched.
     * </ul>
     *
     * Code compiled with property renaming may need to use
     * `goog.reflect.objectProperty` instead of simply naming the property to
     * replace.
     */
    constructor();
    private noStructuralTyping_closure_goog_testing_propertyreplacer_PropertyReplacer;
    /**
     * Adds or changes a value in an object while saving its original state.
     * @param obj The JavaScript or native object or function to alter. See the constraints in the class description.
     * @param key The key to change the value for.
     * @param value The new value to set.
     */
    set(obj: object | Function | null, key: string, value: any): void;
    /**
     * Changes an existing value in an object to another one of the same type while
     * saving its original state. The advantage of `replace` over {@link #set}
     * is that `replace` protects against typos and erroneously passing tests
     * after some members have been renamed during a refactoring.
     * @param obj The JavaScript or native object or function to alter. See the constraints in the class description.
     * @param key The key to change the value for. It has to be present either in `obj` or in its prototype chain.
     * @param value The new value to set.
     * @param opt_allowNullOrUndefined By default, this method requires `value` to match the type of the existing value, as determined by {@link goog.typeOf}. Setting opt_allowNullOrUndefined to `true` allows an existing value to be replaced by `null` or `undefined`, or vice versa.
     */
    replace(obj: object | Function | null, key: string, value: any, opt_allowNullOrUndefined?: boolean): void;
    /**
     * Builds an object structure for the provided namespace path.  Doesn't
     * overwrite those prefixes of the path that are already objects or functions.
     * @param path The path to create or alter, e.g. 'goog.ui.Menu'.
     * @param value The value to set.
     */
    setPath(path: string, value: any): void;
    /**
     * Deletes the key from the object while saving its original value.
     * @param obj The JavaScript or native object or function to alter. See the constraints in the class description.
     * @param key The key to delete.
     */
    remove(obj: object | Function | null, key: string): void;
    /**
     * Restore the original state of key in an object.
     * @param obj The JavaScript or native object whose state should be restored.
     * @param key The key to restore the original value for.
     */
    restore(obj: object | Function, key: string): void;
    /**
     * Resets all changes made by PropertyReplacer.prototype.set.
     */
    reset(): void;
}

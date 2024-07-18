/**
 * Object to pass a property name as a string literal and its containing object
 * when the JSCompiler is rewriting these names. This should only be used in
 * test code.
 */
export declare class ObjectPropertyString {
    /**
     * Object to pass a property name as a string literal and its containing object
     * when the JSCompiler is rewriting these names. This should only be used in
     * test code.
     * @param object The containing object.
     * @param propertyString Property name as a string literal.
     */
    constructor(object: object | null, propertyString: object | string | null);
    private noStructuralTyping_closure_goog_testing_objectpropertystring_ObjectPropertyString;
    getObject(): object | null;
    getPropertyString(): string;
}

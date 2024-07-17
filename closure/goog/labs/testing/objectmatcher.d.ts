import { Matcher } from './matcher.js';
/**
 * Matches any object value.
 */
export declare class AnyObjectMatcher implements Matcher {
    /**
     * Matches any object value.
     */
    constructor();
    private noStructuralTyping_closure_goog_labs_testing_objectmatcher_AnyObjectMatcher;
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    static anyObject(): AnyObjectMatcher;
}
/**
 * The Equals matcher.
 */
export declare class ObjectEqualsMatcher implements Matcher {
    /**
     * The Equals matcher.
     * @param expectedObject The expected object.
     */
    constructor(expectedObject: object);
    private noStructuralTyping_closure_goog_labs_testing_objectmatcher_ObjectEqualsMatcher;
    /**
     * Determines if two objects are the same.
     */
    matches(actualObject: any): any;
    describe(actualObject: any): any;
    /**
     * Returns a matcher that matches objects that are equal to the input object.
     * Equality in this case means the two objects are references to the same
     * object.
     * @param object The expected object.
     * @return A ObjectEqualsMatcher.
     */
    static equalsObject(object: object): ObjectEqualsMatcher;
}
/**
 * The HasProperty matcher.
 */
export declare class HasPropertyMatcher implements Matcher {
    /**
     * The HasProperty matcher.
     * @param property Name of the property to test.
     */
    constructor(property: string);
    private noStructuralTyping_closure_goog_labs_testing_objectmatcher_HasPropertyMatcher;
    /**
     * Determines if an object has a property.
     */
    matches(actualObject: any): any;
    describe(actualObject: any): any;
    /**
     * Returns a matcher that matches objects that contain the input property.
     * @param property The property name to check.
     * @return A HasPropertyMatcher.
     */
    static hasProperty(property: string): HasPropertyMatcher;
}
/**
 * The InstanceOf matcher.
 */
export declare class InstanceOfMatcher implements Matcher {
    /**
     * The InstanceOf matcher.
     * @param object The expected class object.
     */
    constructor(object: object);
    private noStructuralTyping_closure_goog_labs_testing_objectmatcher_InstanceOfMatcher;
    /**
     * Determines if an object is an instance of another object.
     */
    matches(actualObject: any): any;
    describe(actualObject: any): any;
    /**
     * Returns a matcher that matches instances of the input class.
     * @param object The class object.
     * @return A InstanceOfMatcher.
     */
    static instanceOfClass(object: object): InstanceOfMatcher;
}
/**
 * The IsNullOrUndefined matcher.
 */
export declare class IsNullOrUndefinedMatcher implements Matcher {
    /**
     * The IsNullOrUndefined matcher.
     */
    constructor();
    private noStructuralTyping_closure_goog_labs_testing_objectmatcher_IsNullOrUndefinedMatcher;
    /**
     * Determines if input value is null or undefined.
     */
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    /**
     * Returns a matcher that matches all null and undefined values.
     * @return A IsNullOrUndefinedMatcher.
     */
    static isNullOrUndefined(): IsNullOrUndefinedMatcher;
}
/**
 * The IsNull matcher.
 */
export declare class IsNullMatcher implements Matcher {
    /**
     * The IsNull matcher.
     */
    constructor();
    private noStructuralTyping_closure_goog_labs_testing_objectmatcher_IsNullMatcher;
    /**
     * Determines if input value is null.
     */
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    /**
     * Returns a matcher that matches all null values.
     * @return A IsNullMatcher.
     */
    static isNull(): IsNullMatcher;
}
/**
 * The IsUndefined matcher.
 */
export declare class IsUndefinedMatcher implements Matcher {
    /**
     * The IsUndefined matcher.
     */
    constructor();
    private noStructuralTyping_closure_goog_labs_testing_objectmatcher_IsUndefinedMatcher;
    /**
     * Determines if input value is undefined.
     */
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    /**
     * Returns a matcher that matches undefined values.
     * @return A IsUndefinedMatcher.
     */
    static isUndefined(): IsUndefinedMatcher;
}

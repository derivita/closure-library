import { Matcher } from './matcher.js';
/**
 * The HasEntries matcher.
 */
export declare class HasEntriesMatcher implements Matcher {
    /**
     * The HasEntries matcher.
     * @param entries The entries to check in the object.
     */
    constructor(entries: object);
    private noStructuralTyping_closure_goog_labs_testing_dictionarymatcher_HasEntriesMatcher;
    /**
     * Determines if an object has particular entries.
     */
    matches(actualObject: any): any;
    describe(actualObject: any): any;
    /**
     * Gives a matcher that asserts an object contains all the given key-value pairs
     * in the input object.
     * @param entries The entries to check for presence in the object.
     * @return A HasEntriesMatcher.
     */
    static hasEntries(entries: object): HasEntriesMatcher;
}
/**
 * The HasEntry matcher.
 */
export declare class HasEntryMatcher implements Matcher {
    /**
     * The HasEntry matcher.
     * @param key The key for the entry.
     * @param value The value for the key.
     */
    constructor(key: string, value: any);
    private noStructuralTyping_closure_goog_labs_testing_dictionarymatcher_HasEntryMatcher;
    /**
     * Determines if an object has a particular entry.
     */
    matches(actualObject: any): any;
    describe(actualObject: any): any;
    /**
     * Gives a matcher that asserts an object contains the given key-value pair.
     * @param key The key to check for presence in the object.
     * @param value The value to check for presence in the object.
     * @return A HasEntryMatcher.
     */
    static hasEntry(key: string, value: any): HasEntryMatcher;
}
/**
 * The HasKey matcher.
 */
export declare class HasKeyMatcher implements Matcher {
    /**
     * The HasKey matcher.
     * @param key The key to check in the object.
     */
    constructor(key: string);
    private noStructuralTyping_closure_goog_labs_testing_dictionarymatcher_HasKeyMatcher;
    /**
     * Determines if an object has a key.
     */
    matches(actualObject: any): any;
    describe(actualObject: any): any;
    /**
     * Gives a matcher that asserts an object contains the given key.
     * @param key The key to check for presence in the object.
     * @return A HasKeyMatcher.
     */
    static hasKey(key: string): HasKeyMatcher;
}
/**
 * The HasValue matcher.
 */
export declare class HasValueMatcher implements Matcher {
    /**
     * The HasValue matcher.
     * @param value The value to check in the object.
     */
    constructor(value: any);
    private noStructuralTyping_closure_goog_labs_testing_dictionarymatcher_HasValueMatcher;
    /**
     * Determines if an object contains a value
     */
    matches(actualObject: any): any;
    describe(actualObject: any): any;
    /**
     * Gives a matcher that asserts an object contains the given value.
     * @param value The value to check for presence in the object.
     * @return A HasValueMatcher.
     */
    static hasValue(value: any): HasValueMatcher;
}

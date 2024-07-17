import { AbstractRange } from '../dom/abstractrange.js';
import { LooseMock } from './loosemock.js';
/**
 * LooseMock of AbstractRange. Useful because the mock framework cannot
 * simply create a mock out of an abstract class, and cannot create a mock out
 * of classes that implements __iterator__ because it relies on the default
 * behavior of iterating through all of an object's properties.
 */
export declare class MockRange extends LooseMock {
    /**
     * LooseMock of AbstractRange. Useful because the mock framework cannot
     * simply create a mock out of an abstract class, and cannot create a mock out
     * of classes that implements __iterator__ because it relies on the default
     * behavior of iterating through all of an object's properties.
     */
    constructor();
    private noStructuralTyping_closure_goog_testing_mockrange_MockRange;
}
export declare namespace MockRange {
    /**
     * Concrete subclass of AbstractRange that simply sets the abstract
     * method __iterator__ to undefined so that javascript defaults to iterating
     * through all of the object's properties.
     */
    class ConcreteRange_ extends AbstractRange {
        /**
         * Concrete subclass of AbstractRange that simply sets the abstract
         * method __iterator__ to undefined so that javascript defaults to iterating
         * through all of the object's properties.
         */
        constructor();
        private noStructuralTyping_closure_goog_testing_mockrange_ConcreteRange_;
        saveUsingCarets(): import("../dom/savedrange.js").AbstractSavedCaretRange;
    }
}

import { Mock } from './mock.js';
import type { MockExpectation } from './mock.js';
/**
 * This class is an ordered collection of expectations for one method. Since
 * the loose mock does most of its verification at the time of $verify, this
 * class is necessary to manage the return/throw behavior when the mock is
 * being called.
 */
export declare class LooseExpectationCollection {
    /**
     * This class is an ordered collection of expectations for one method. Since
     * the loose mock does most of its verification at the time of $verify, this
     * class is necessary to manage the return/throw behavior when the mock is
     * being called.
     */
    constructor();
    private noStructuralTyping_closure_goog_testing_loosemock_LooseExpectationCollection;
    /**
     * Adds an expectation to this collection.
     * @param expectation The expectation to add.
     */
    addExpectation(expectation: MockExpectation): void;
    /**
     * Gets the list of expectations in this collection.
     * @return The array of expectations.
     */
    getExpectations(): MockExpectation[];
}
/**
 * This is a mock that does not care about the order of method calls. As a
 * result, it won't throw exceptions until verify() is called. The only
 * exception is that if a method is called that has no expectations, then an
 * exception will be thrown.
 */
export declare class LooseMock extends Mock {
    /**
     * This is a mock that does not care about the order of method calls. As a
     * result, it won't throw exceptions until verify() is called. The only
     * exception is that if a method is called that has no expectations, then an
     * exception will be thrown.
     * @param objectToMock The object that should be mocked, or the constructor of an object to mock.
     * @param opt_ignoreUnexpectedCalls Whether to ignore unexpected calls.
     * @param opt_mockStaticMethods An optional argument denoting that a mock should be constructed from the static functions of a class.
     * @param opt_createProxy An optional argument denoting that a proxy for the target mock should be created.
     */
    constructor(objectToMock: object | Function | null, opt_ignoreUnexpectedCalls?: boolean, opt_mockStaticMethods?: boolean, opt_createProxy?: boolean);
    private noStructuralTyping_closure_goog_testing_loosemock_LooseMock;
    /**
     * A setter for the ignoreUnexpectedCalls field.
     * @param ignoreUnexpectedCalls Whether to ignore unexpected calls.
     * @return This mock object.
     */
    $setIgnoreUnexpectedCalls(ignoreUnexpectedCalls: boolean): LooseMock;
    $recordExpectation(): void;
    $recordCall(name: any, args: any): any;
    $reset(): any;
    $replay(): any;
    $waitAndVerify(): any;
    $verify(): any;
}

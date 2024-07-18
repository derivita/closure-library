import { Mock } from './mock.js';
/**
 * This is a mock that verifies that methods are called in the order that they
 * are specified during the recording phase. Since it verifies order, it
 * follows 'fail fast' semantics. If it detects a deviation from the
 * expectations, it will throw an exception and not wait for verify to be
 * called.
 */
export declare class StrictMock extends Mock {
    /**
     * This is a mock that verifies that methods are called in the order that they
     * are specified during the recording phase. Since it verifies order, it
     * follows 'fail fast' semantics. If it detects a deviation from the
     * expectations, it will throw an exception and not wait for verify to be
     * called.
     * @param objectToMock The object that should be mocked, or the constructor of an object to mock.
     * @param opt_mockStaticMethods An optional argument denoting that a mock should be constructed from the static functions of a class.
     * @param opt_createProxy An optional argument denoting that a proxy for the target mock should be created.
     */
    constructor(objectToMock: object | Function | null, opt_mockStaticMethods?: boolean, opt_createProxy?: boolean);
    private noStructuralTyping_closure_goog_testing_strictmock_StrictMock;
    $recordExpectation(): void;
    $recordCall(name: any, args: any): any;
    $reset(): any;
    $waitAndVerify(): any;
    $verify(): any;
}

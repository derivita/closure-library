import { Deferred } from '../../../../third_party/closure/goog/mochikit/async/deferred.js';
import { MockControl as testingMockControl } from '../mockcontrol.js';
/**
 * Provides asynchronous mocks and assertions controlled by a parent
 * MockControl.
 */
export declare class MockControl {
    /**
     * Provides asynchronous mocks and assertions controlled by a parent
     * MockControl.
     * @param mockControl The parent MockControl.
     */
    constructor(mockControl: testingMockControl | null);
    private noStructuralTyping_closure_goog_testing_async_mockcontrol_MockControl;
    /**
     * Returns a function that will assert that it will be called, and run the given
     * callback when it is.
     * @param name The name of the callback mock.
     * @param callback The wrapped callback. This will be called when the returned function is called.
     * @param opt_selfObj The object which this should point to when the callback is run.
     * @return The mock callback.
     */
    createCallbackMock<THIS = any>(name: string, callback: (this: THIS | null) => any, opt_selfObj?: THIS | null): Function;
    /**
     * Returns a function that will assert that its arguments are equal to the
     * arguments given to asyncAssertEquals. In addition, the function also asserts
     * that it will be called.
     * @param message A message to print if the arguments are wrong.
     * @param var_args The arguments to assert.
     * @return } The mock callback.
     */
    asyncAssertEquals(message: string, ...var_args: any[]): any;
    /**
     * Asserts that a deferred object will have an error and call its errback
     * function.
     * @param deferred The deferred object.
     */
    assertDeferredError(deferred: Deferred | null, fn: any): void;
    /**
     * Asserts that a deferred object will call its callback with the given value.
     * @param message A message to print if the arguments are wrong.
     * @param expected The expected value. If this is a deferred object, then the expected value is the deferred value.
     * @param actual The actual value. If this is a deferred object, then the actual value is the deferred value. Either this or 'expected' must be deferred.
     */
    assertDeferredEquals(message: string, expected: Deferred | any | null, actual: Deferred | any | null): void;
}

import { Promise } from '../promise/promise.js';
import { LooseMock } from './loosemock.js';
import { StrictMock } from './strictmock.js';
import type { MockInterface } from './mockinterface.js';
/**
 * Controls a set of mocks.  Controlled mocks are replayed, verified, and
 * cleaned-up at the same time.
 */
export declare class MockControl {
    /**
     * Controls a set of mocks.  Controlled mocks are replayed, verified, and
     * cleaned-up at the same time.
     */
    constructor();
    private noStructuralTyping_closure_goog_testing_mockcontrol_MockControl;
    /**
     * Takes control of this mock.
     * @param mock Mock to be controlled.
     * @return The same mock passed in, for convenience.
     */
    addMock(mock: MockInterface | null): MockInterface | null;
    /**
     * Calls replay on each controlled mock.
     */
    $replayAll(): void;
    /**
     * Calls reset on each controlled mock.
     */
    $resetAll(): void;
    /**
     * Returns a Promise that resolves when all of the controlled mocks have
     * finished and verified.
     */
    $waitAndVerifyAll(): Promise<undefined[]>;
    /**
     * Calls verify on each controlled mock.
     */
    $verifyAll(): void;
    /**
     * Calls tearDown on each controlled mock, if necesssary.
     */
    $tearDown(): void;
    /**
     * Creates a controlled StrictMock.  Passes its arguments through to the
     * StrictMock constructor.
     * @param objectToMock The object that should be mocked, or the constructor of an object to mock.
     * @param opt_mockStaticMethods An optional argument denoting that a mock should be constructed from the static functions of a class.
     * @param opt_createProxy An optional argument denoting that a proxy for the target mock should be created.
     * @return The mock object.
     */
    createStrictMock(objectToMock: object | Function | null, opt_mockStaticMethods?: boolean, opt_createProxy?: boolean): StrictMock;
    /**
     * Creates a controlled LooseMock.  Passes its arguments through to the
     * LooseMock constructor.
     * @param objectToMock The object that should be mocked, or the constructor of an object to mock.
     * @param opt_ignoreUnexpectedCalls Whether to ignore unexpected calls.
     * @param opt_mockStaticMethods An optional argument denoting that a mock should be constructed from the static functions of a class.
     * @param opt_createProxy An optional argument denoting that a proxy for the target mock should be created.
     * @return The mock object.
     */
    createLooseMock(objectToMock: object | Function | null, opt_ignoreUnexpectedCalls?: boolean, opt_mockStaticMethods?: boolean, opt_createProxy?: boolean): LooseMock;
    /**
     * Creates a controlled FunctionMock.  Passes its arguments through to the
     * FunctionMock constructor.
     * @param opt_functionName The optional name of the function to mock set to '[anonymous mocked function]' if not passed in.
     * @param opt_strictness One of testing.Mock.LOOSE or testing.Mock.STRICT. The default is STRICT.
     * @return The mocked function.
     */
    createFunctionMock(opt_functionName?: string, opt_strictness?: number): MockInterface;
    /**
     * Creates a controlled MethodMock.  Passes its arguments through to the
     * MethodMock constructor.
     * @param scope The scope of the method to be mocked out.
     * @param functionName The name of the function we're going to mock.
     * @param opt_strictness One of testing.Mock.LOOSE or testing.Mock.STRICT. The default is STRICT.
     * @return The mocked method.
     */
    createMethodMock(scope: object | null, functionName: string, opt_strictness?: number): MockInterface;
    /**
     * Creates a controlled MethodMock for a constructor.  Passes its arguments
     * through to the MethodMock constructor. See
     * {@link testing.createConstructorMock} for details.
     * @param scope The scope of the constructor to be mocked out.
     * @param constructorName The name of the function we're going to mock.
     * @param opt_strictness One of testing.Mock.LOOSE or testing.Mock.STRICT. The default is STRICT.
     * @return The mocked method.
     */
    createConstructorMock(scope: object | null, constructorName: string, opt_strictness?: number): MockInterface;
    /**
     * Creates a controlled GlobalFunctionMock.  Passes its arguments through to the
     * GlobalFunctionMock constructor.
     * @param functionName The name of the function we're going to mock.
     * @param opt_strictness One of testing.Mock.LOOSE or testing.Mock.STRICT. The default is STRICT.
     * @return The mocked function.
     */
    createGlobalFunctionMock(functionName: string, opt_strictness?: number): MockInterface;
}

import { MockInterface } from './mockinterface.js';
import { PropertyReplacer } from './propertyreplacer.js';
/**
 * Class used to mock a function. Useful for mocking closures and anonymous
 * callbacks etc. Creates a function object that extends Mock.
 * @param opt_functionName The optional name of the function to mock. Set to '[anonymous mocked function]' if not passed in.
 * @param opt_strictness One of Mock.LOOSE or Mock.STRICT. The default is STRICT.
 * @return The mocked function.
 */
export declare function FunctionMock(opt_functionName?: string, opt_strictness?: number): MockInterface;
/**
 * Mocks an existing function. Creates a FunctionMock
 * and registers it in the given scope with the name specified by functionName.
 * @param scope The scope of the method to be mocked out.
 * @param functionName The name of the function we're going to mock.
 * @param opt_strictness One of Mock.LOOSE or Mock.STRICT. The default is STRICT.
 * @return The mocked method.
 */
export declare function MethodMock(scope: object | null, functionName: string, opt_strictness?: number): MockInterface;
export declare namespace MethodMock {
    interface MockInternalInterface_ extends MockInterface {
        $propertyReplacer_: PropertyReplacer;
    }
    /**
     * Resets the global function that we mocked back to its original state.
     */
    var $tearDown: MockInterface;
}
/**
 * Mocks a global / top-level function. Creates a MethodMock
 * in the global scope with the name specified by functionName.
 * @param functionName The name of the function we're going to mock.
 * @param opt_strictness One of Mock.LOOSE or Mock.STRICT. The default is STRICT.
 * @return The mocked global function.
 */
export declare function GlobalFunctionMock(functionName: string, opt_strictness?: number): MockInterface;
/**
 * Convenience method for creating a mock for a function.
 * @param opt_functionName The optional name of the function to mock set to '[anonymous mocked function]' if not passed in.
 * @param opt_strictness One of Mock.LOOSE or Mock.STRICT. The default is STRICT.
 * @return The mocked function.
 */
export declare function createFunctionMock(opt_functionName?: string, opt_strictness?: number): MockInterface;
/**
 * Convenience method for creating a mock for a method.
 * @param scope The scope of the method to be mocked out.
 * @param functionName The name of the function we're going to mock.
 * @param opt_strictness One of Mock.LOOSE or Mock.STRICT. The default is STRICT.
 * @return The mocked global function.
 */
export declare function createMethodMock(scope: object | null, functionName: string, opt_strictness?: number): MockInterface;
/**
 * Convenience method for creating a mock for a constructor. Copies class
 * members to the mock.
 *
 * <p>When mocking a constructor to return a mocked instance, remember to create
 * the instance mock before mocking the constructor. If you mock the constructor
 * first, then the mock framework will be unable to examine the prototype chain
 * when creating the mock instance.
 * @param scope The scope of the constructor to be mocked out.
 * @param constructorName The name of the constructor we're going to mock.
 * @param opt_strictness One of Mock.LOOSE or Mock.STRICT. The default is STRICT.
 * @return The mocked constructor.
 */
export declare function createConstructorMock(scope: object | null, constructorName: string, opt_strictness?: number): MockInterface;
/**
 * Convenience method for creating a mocks for a global / top-level function.
 * @param functionName The name of the function we're going to mock.
 * @param opt_strictness One of Mock.LOOSE or Mock.STRICT. The default is STRICT.
 * @return The mocked global function.
 */
export declare function createGlobalFunctionMock(functionName: string, opt_strictness?: number): MockInterface;

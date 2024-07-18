import { TestCase } from './testcase.js';
interface TestSuiteOptions {
    order: TestCase.Order | undefined;
}
/**
 * Runs the lifecycle methods (setUp, tearDown, etc.) and test* methods from
 * the given object. For use in tests that are written as JavaScript modules
 * or goog.modules.
 * @param obj An object with one or more test methods, and optional setUp, tearDown and getTestName methods. The object may also have nested Objects (named like tests, i.e. `testNestedSuite: {}`) that will be treated as nested testSuites. Any additional setUp will run after parent setUps, any additional tearDown will run before parent tearDowns. The this object refers to the object that the functions were defined on, not the full testSuite object.
 * @param options Optional options object which can be used to set the sort order for running tests.
 */
declare function testSuite(obj: object, options?: TestSuiteOptions): void;
declare namespace testSuite {
    /**
     * Reset the initialized flag so that we can test testSuite.
     * Should not be called outside Closure.  This should be package-private,
     * but it's called from environment_test in labs.testing package.
     */
    var resetForTesting: () => void;
}
export { testSuite };

import { TestCase } from '../../testing/testcase.js';
/**
 * JsUnit environments allow developers to customize the existing testing
 * lifecycle by hitching additional setUp and tearDown behaviors to tests.
 *
 * Environments will run their setUp steps in the order in which they
 * are instantiated and registered. During tearDown, the environments will
 * unwind the setUp and execute in reverse order.
 *
 * This base class has no dependencies on mocking or goog.testing.asserts.
 */
export declare class EnvironmentBase {
    constructor();
    /**
     * Runs immediately before the setUpPage phase of JsUnit tests.
     */
    setUpPage(): PromiseLike<any> | undefined;
    /**
     * Runs immediately after the tearDownPage phase of JsUnit tests.
     */
    tearDownPage(): void;
    /**
     * Runs immediately before the setUp phase of JsUnit tests.
     */
    setUp(): PromiseLike<any> | undefined;
    /**
     * Runs immediately after the tearDown phase of JsUnit tests.
     */
    tearDown(): PromiseLike<any> | undefined;
    static getTestCaseIfActive(): TestCase | null;
}

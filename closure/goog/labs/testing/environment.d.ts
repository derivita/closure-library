import { Console as DebugConsole } from '../../debug/console.js';
import { MockClock } from '../../testing/mockclock.js';
import { PropertyReplacer } from '../../testing/propertyreplacer.js';
import { EnvironmentBase } from './environmentbase.js';
/**
 * JsUnit environments allow developers to customize the existing testing
 * lifecycle by hitching additional setUp and tearDown behaviors to tests.
 *
 * Environments will run their setUp steps in the order in which they
 * are instantiated and registered. During tearDown, the environments will
 * unwind the setUp and execute in reverse order.
 *
 * See http://go/jsunit-env for more information.
 */
declare class Environment extends EnvironmentBase {
    constructor();
    /**
     * Runs immediately before the setUpPage phase of JsUnit tests.
     */
    setUpPage(): PromiseLike<any> | undefined;
    tearDownPage(): void;
    /**
     * Runs immediately after the tearDown phase of JsUnit tests.
     */
    tearDown(): PromiseLike<any> | undefined;
    /**
     * Create a new {@see MockControl} accessible via
     * `env.mockControl` for each test. If your test has more than one
     * testing environment, don't call this on more than one of them.
     */
    withMockControl(): Environment;
    /**
     * Create a {@see MockClock} for each test. The clock will be
     * installed (override i.e. setTimeout) by default. It can be accessed
     * using `env.mockClock`. If your test has more than one testing
     * environment, don't call this on more than one of them.
     */
    withMockClock({ install, async }?: {
        install?: boolean;
        async?: boolean;
    }): Environment;
    hasMockClock(): boolean;
    /**
     * Creates a basic strict mock of a `toMock`. For more advanced mocking,
     * please use the MockControl directly.
     */
    mock(toMock: Function | object | null): any;
    /**
     * Creates a basic loose mock of a `toMock`. For more advanced mocking,
     * please use the MockControl directly.
     */
    looseMock(toMock: Function | object | null, ignoreUnexpectedCalls?: boolean): any;
    /**
     * Mocks are not type-checkable. To reduce burden on tests that are type
     * checked, this is typed as "?" to turn off JSCompiler checking.
     * TODO(user): Enable a type-checked mocking library.
     */
    mockControl: any;
    mockClock: MockClock | null;
    console: DebugConsole;
    replacer: PropertyReplacer;
}
export { Environment };

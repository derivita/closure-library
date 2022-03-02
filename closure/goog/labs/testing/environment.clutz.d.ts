//!! generated by clutz.
// Generated from labs/testing/environment.js
declare namespace ಠ_ಠ.clutz.goog.labs.testing {
  export import Environment = ಠ_ಠ.clutz.module$contents$goog$labs$testing$Environment_Environment ;
}
declare module 'goog:goog.labs.testing.Environment' {
  import Environment = ಠ_ಠ.clutz.goog.labs.testing.Environment;
  export default Environment;
}
// Generated from labs/testing/environment.js
declare namespace ಠ_ಠ.clutz {
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
  class module$contents$goog$labs$testing$Environment_Environment {
    private noStructuralTyping_module$contents$goog$labs$testing$Environment_Environment : any;
    console : ಠ_ಠ.clutz.module$exports$goog$debug$Console ;
    mockClock : ಠ_ಠ.clutz.module$exports$goog$testing$MockClock | null ;
    protected mockClockOn : boolean ;
    /**
     * Mocks are not type-checkable. To reduce burden on tests that are type
     * checked, this is typed as "?" to turn off JSCompiler checking.
     * TODO(user): Enable a type-checked mocking library.
     */
    mockControl : any ;
    replacer : ಠ_ಠ.clutz.module$exports$goog$testing$PropertyReplacer ;
    protected hasMockClock ( ) : boolean ;
    /**
     * Creates a basic loose mock of a `toMock`. For more advanced mocking,
     * please use the MockControl directly.
     * @param ignoreUnexpectedCalls Defaults to false.
     */
    looseMock (toMock : null | GlobalObject , ignoreUnexpectedCalls ? : boolean ) : any ;
    /**
     * Creates a basic strict mock of a `toMock`. For more advanced mocking,
     * please use the MockControl directly.
     */
    mock (toMock : null | GlobalObject ) : any ;
    /**
     * Runs immediately before the setUp phase of JsUnit tests.
     */
    setUp ( ) : PromiseLike < any > | undefined ;
    /**
     * Runs immediately before the setUpPage phase of JsUnit tests.
     */
    setUpPage ( ) : PromiseLike < any > | undefined ;
    /**
     * Runs immediately after the tearDown phase of JsUnit tests.
     */
    tearDown ( ) : PromiseLike < any > | undefined ;
    /**
     * Runs immediately after the tearDownPage phase of JsUnit tests.
     */
    tearDownPage ( ) : void ;
    /**
     * Create a {@see MockClock} for each test. The clock will be
     * installed (override i.e. setTimeout) by default. It can be accessed
     * using `env.mockClock`. If your test has more than one testing
     * environment, don't call this on more than one of them.
     */
    withMockClock ( ) : module$contents$goog$labs$testing$Environment_Environment ;
    /**
     * Create a new {@see MockControl} accessible via
     * `env.mockControl` for each test. If your test has more than one
     * testing environment, don't call this on more than one of them.
     */
    withMockControl ( ) : module$contents$goog$labs$testing$Environment_Environment ;
    static getTestCaseIfActive ( ) : ಠ_ಠ.clutz.module$exports$goog$testing$TestCase | null ;
  }
}
declare namespace ಠ_ಠ.clutz {
  export import module$exports$goog$labs$testing$Environment = ಠ_ಠ.clutz.module$contents$goog$labs$testing$Environment_Environment ;
}

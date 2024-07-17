/**
 * Base class for delegate registries.  Does not specify a policy for handling
 * multiple delegates.
 */
declare class DelegateRegistryBase<T = any> {
    constructor();
    /**
     * Configures this registry to allow late registration.  Normally it is an
     * error to register a delegate after calling `delegate()` or `delegates()`.
     * If late registration is allowed, then this is no longer an error.  This
     * check only ever happens in debug mode.  Returns this.
     */
    allowLateRegistration(): this;
    /**
     * Configures this registry to automatically cache instantiated instances,
     * rather than calling the constructor every time `delegates()` is called.
     * Returns this.
     */
    cacheInstantiation(): this;
    /**
     * Returns the first (highest priority) registered delegate, or undefined
     * if none was registered.
     */
    delegate(instantiate?: () => (T | null)): T | undefined | null;
    /**
     * Returns an array of all registered delegates, creating a fresh instance
     * of any registered classes.  The `instantiate` argument can be passed to
     * override how constructors are called.  The array will be frozen in debug
     * mode.
     */
    delegates(instantiate?: () => (T | null)): (T | null)[];
}
/**
 * Delegates provide a system for hygienic modification of a delegating class's
 * behavior.  The basic idea is that, rather than monkey-patching prototype
 * methods, a class can instead provide extension points by calling out to
 * delegates.  Later code can then register delegates, and when the delegating
 * class is instantiated, any registered delegates will be instantiated and
 * returned.
 *
 * The usage has four parts:
 * - A *delegate interface* is defined to provide specific overridable hooks.
 * This can be a simple function `@typedef`, or an entire `@interface` or
 * `@record`.
 * - A *delegate registry* for this interface is instantiated, often as a
 * static field on the interface.
 * - One or more *delegates* are defined that implement this interface.
 * Delegates are registered with the registry.  Different registry classes
 * support different policies for registering more than one delegate.
 * - After delegates are registered, the delegating class asks the registry for
 * the *list of delegates*, which are then instantiated if necessary.
 *
 * In some circumstances (particularly if a delegate method will be called from
 * multiple places) it may make sense to provide an additional wrapper between
 * the delegate list and the delegating (sometimes called "modded") class, to
 * ensure that the delegates are used correctly.
 *
 * ## Example usage
 *
 * For example, consider a class `Foo` that wants to provide a few extension
 * points for the behaviors `zorch` and `snarf`.  We can set up the delegation
 * as follows:
 *
 * <code class="highlight highlight-source-js"><pre>
 * const DelegateRegistry = goog.require('goog.delegate.DelegateRegistry');
 * const delegates = goog.require('goog.delegate.delegates');
 * class Foo {
 * constructor() {
 * /** @private @const {!Array<!Foo.Delegate>} &ast;/
 * this.delegates_ = Foo.registry.delegates();
 * }
 * frobnicate(x, y, z) {
 * const w = delegates.callFirst(this.delegates_, d => d.zorch(x, y));
 * return this.delegates_.map(d => d.snarf(z, w));
 * }
 * }
 * /** @interface &ast;/
 * Foo.Delegate = class {
 * zorch(a, b) {}
 * snarf(a, b) {}
 * }
 * /** @const {!DelegateRegistry<!Foo.Delegate>} &ast;/
 * Foo.registry = new DelegateRegistry();
 * </pre></code>
 *
 * A file inserted later in the bundle can define a delegate and register itself
 * with the registry:
 *
 * <code class="highlight highlight-source-js"><pre>
 * /** @implements {Foo.Delegate} &ast;/
 * class WibblyFooDelegate {
 * zorch(a, b) { return a + b; }
 * snarf(a, b) { return a - b; }
 * }
 * Foo.registry.registerClass(WibbyFooDelegate);
 * </pre></code>
 *
 * In many cases, the delegates need to be initialized with an instance of the
 * modded class.  To support this, a function may be passed to the `delegates()`
 * method to override how the constructor is called.
 *
 *
 * ## Multiple Delegates
 *
 * Two different registry classes are defined, each with a different policy for
 * how to handle multiple delegates.  The simpler one, `DelegateRegistry`,
 * allows multiple delegates to be registered and returns them in the order they
 * were registered.  If only one delegate is expected,
 * `DelegateRegistry.prototype.expectAtMostOneDelegate()` performs assertions
 * (in debug mode) that at most one delegate is added, though in production
 * mode it will still register them all - The use of `delegate()` or
 * `goog.delegate.delegates.callFirst()` is recommended in this case to ensure
 * reasonable behavior.
 *
 * The more sophisticated one, `DelegateRegistry.Prioritized`, requires passing
 * a unique priority to each delegate registration (collisions are asserted in
 * debug mode, but will fall back to registration order in production).
 *
 *
 * ## Wrapped Delegator
 *
 * In some cases it makes sense to wrap the delegate list in a dedicated
 * delegator object, rather than having the modded class use it directly:
 *
 * <code class="highlight highlight-source-js"><pre>
 * /** @record &ast;/
 * class MyDelegateInterface {
 * /** @param {number} arg &ast;/
 * foo(arg) {}
 * /** @return {number|undefined} &ast;/
 * bar() {}
 * /** @return {string} &ast;/
 * baz() {}
 * }
 * class MyDelegator {
 * /** @param {!Array<!MyDelegateInterface>} delegates &ast;/
 * constructor(delegates) { this.delegates_ = delegates; }
 * /** @param {number} &ast;/
 * foo(arg) { this.delegates_.forEach(d => d.foo(arg)); }
 * /** @return {number} &ast;/
 * bar() {
 * const result =
 * delegates.callUntilNotNullOrUndefined(this.delegates_, d => d.bar());
 * return result != null ? result : 42;
 * }
 * /** @return {!Array<string>} &ast;/
 * baz() { return this.delegates_.map(d => d.baz()); }
 * }
 * </pre></code>
 *
 * In this example, the modded class will call into the delegates via the
 * wrapper class, ensuring that the correct calling convention is always used.
 */
declare class DelegateRegistry<T = any> extends DelegateRegistryBase<T | null> {
    constructor();
    /**
     * Configures this registry to accept at most one delegate.
     * This only affects debug mode.
     */
    expectAtMostOneDelegate(): DelegateRegistry<T | null>;
    registerClass(ctor: {
        new (): T | null;
    }): void;
    registerInstance(instance: T | null): void;
}
declare namespace DelegateRegistry {
    /**
     * A delegate registry that allows multiple delegates, each of which must have a
     * numeric priority specified when it is registered.  Iteration will start with
     * the highest number and proceed to the lowest number.  If two delegates are
     * added with the same priority, an error will be given in debug mode.
     */
    class Prioritized<T = any> extends DelegateRegistryBase<T | null> {
        registerClass(ctor: {
            new (): T | null;
        }, priority: number): void;
        registerInstance(instance: T | null, priority: number): void;
    }
}
export { DelegateRegistry };

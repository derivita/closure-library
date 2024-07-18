/**
 * Provides a more strict interface for Thenables in terms of
 * http://promisesaplus.com for interop with {@see GoogPromise}.
 */
interface Thenable<TYPE = any> extends PromiseLike<TYPE | null> {
    /**
     * Adds callbacks that will operate on the result of the Thenable, returning a
     * new child Promise.
     *
     * If the Thenable is fulfilled, the `onFulfilled` callback will be
     * invoked with the fulfillment value as argument, and the child Promise will
     * be fulfilled with the return value of the callback. If the callback throws
     * an exception, the child Promise will be rejected with the thrown value
     * instead.
     *
     * If the Thenable is rejected, the `onRejected` callback will be invoked with
     * the rejection reason as argument. Similar to the fulfilled case, the child
     * Promise will then be resolved with the return value of the callback, or
     * rejected with the thrown value if the callback throws an exception.
     * @param opt_onFulfilled A function that will be invoked with the fulfillment value if the Promise is fulfilled.
     * @param opt_onRejected A function that will be invoked with the rejection reason if the Promise is rejected.
     * @param opt_context An optional context object that will be the execution context for the callbacks. By default, functions are executed with the default this.
     * @return A new Promise that will receive the result of the fulfillment or rejection callback.
     */
    then<VALUE = any, THIS = any, RESULT = any>(opt_onFulfilled?: ((this: THIS | null) => (VALUE | null)) | null, opt_onRejected?: ((this: THIS | null) => any) | null, opt_context?: THIS | null): RESULT | null;
}
declare namespace Thenable {
    /**
     * An expando property to indicate that an object implements
     * `Thenable`.
     *
     * {@see addImplementation}.
     */
    const IMPLEMENTED_BY_PROP = "$goog_Thenable";
    /**
     * Marks a given class (constructor) as an implementation of Thenable, so
     * that we can query that fact at runtime. The class must have already
     * implemented the interface.
     * Exports a 'then' method on the constructor prototype, so that the objects
     * also implement the extern {@see Thenable} interface for interop with
     * other Promise implementations.
     * @param ctor The class constructor. The corresponding class must have already implemented the interface.
     */
    var addImplementation: (ctor: {
        new (): Thenable | null;
    }) => void;
    /**
     *
     * @return Whether a given instance implements `Thenable`. The class/superclass of the instance must call `addImplementation`.
     */
    var isImplementedBy: boolean;
}
export { Thenable };

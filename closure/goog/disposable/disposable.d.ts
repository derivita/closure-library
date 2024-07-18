import { IDisposable } from './idisposable.js';
/**
 * Class that provides the basic implementation for disposable objects. If your
 * class holds references or resources that can't be collected by standard GC,
 * it should extend this class or implement the disposable interface (defined
 * in IDisposable). See description of
 * IDisposable for examples of cleanup.
 */
export declare class Disposable implements IDisposable {
    /**
     * Class that provides the basic implementation for disposable objects. If your
     * class holds references or resources that can't be collected by standard GC,
     * it should extend this class or implement the disposable interface (defined
     * in IDisposable). See description of
     * IDisposable for examples of cleanup.
     */
    constructor();
    private noStructuralTyping_closure_goog_disposable_disposable_Disposable;
    /**
     * If monitoring the Disposable instances is enabled, stores the creation
     * stack trace of the Disposable instance.
     */
    creationStack: string | undefined;
    static MONITORING_MODE: number;
    static INCLUDE_STACK_ON_CREATION: boolean;
    static getUndisposedObjects(): Disposable[];
    /**
     * Clears the registry of undisposed objects but doesn't dispose of them.
     */
    static clearUndisposedObjects(): void;
    isDisposed(): boolean;
    getDisposed(...args: any[]): boolean;
    /**
     * Disposes of the object. If the object hasn't already been disposed of, calls
     * {@link #disposeInternal}. Classes that extend `Disposable` should
     * override {@link #disposeInternal} in order to cleanup references, resources
     * and other disposable objects. Reentrant.
     * @return Nothing.
     */
    dispose(): void;
    /**
     * Associates a disposable object with this object so that they will be disposed
     * together.
     * @param disposable that will be disposed when this object is disposed.
     */
    registerDisposable(disposable: IDisposable | null): void;
    /**
     * Invokes a callback function when this object is disposed. Callbacks are
     * invoked in the order in which they were added. If a callback is added to
     * an already disposed Disposable, it will be called immediately.
     * @param callback The callback function.
     * @param opt_scope An optional scope to call the callback in.
     */
    addOnDisposeCallback<T = any>(callback: (this: T | null) => any, opt_scope?: T | null): void;
    /**
     * Performs appropriate cleanup. See description of IDisposable
     * for examples. Classes that extend `Disposable` should override this
     * method. Not reentrant. To avoid calling it twice, it must only be called from
     * the subclass' `disposeInternal` method. Everywhere else the public `dispose`
     * method must be used. For example:
     *
     * <pre>
     * mypackage.MyClass = function() {
     * mypackage.MyClass.base(this, 'constructor');
     * // Constructor logic specific to MyClass.
     * ...
     * };
     * goog.inherits(mypackage.MyClass, Disposable);
     *
     * mypackage.MyClass.prototype.disposeInternal = function() {
     * // Dispose logic specific to MyClass.
     * ...
     * // Call superclass's disposeInternal at the end of the subclass's, like
     * // in C++, to avoid hard-to-catch issues.
     * mypackage.MyClass.base(this, 'disposeInternal');
     * };
     * </pre>
     */
    protected disposeInternal(): void;
    /**
     * Returns True if we can verify the object is disposed.
     * Calls `isDisposed` on the argument if it supports it.  If obj
     * is not an object with an isDisposed() method, return false.
     * @param obj The object to investigate.
     * @return True if we can verify the object is disposed.
     */
    static isDisposed(obj: any): boolean;
}
export declare namespace Disposable {
    enum MonitoringMode {
        OFF = 0,
        PERMANENT = 1,
        INTERACTIVE = 2
    }
}

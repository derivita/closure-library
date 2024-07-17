import { Listenable } from '../../events/listenable.js';
/**
 * An implementation of `Listenable` with full W3C
 * EventTarget-like support (capture/bubble mechanism, stopping event
 * propagation, preventing default actions).
 *
 * You may subclass this class to turn your class into a Listenable.
 *
 * Unlike {@link EventTarget}, this class does not implement
 * {@link goog.disposable.IDisposable}. Instances of this class that have had
 * It is not necessary to call {@link goog.dispose}
 * or {@link #removeAllListeners} in order for an instance of this class
 * to be garbage collected.
 *
 * Unless propagation is stopped, an event dispatched by an
 * EventTarget will bubble to the parent returned by
 * `getParentEventTarget`. To set the parent, call
 * `setParentEventTarget`. Subclasses that don't support
 * changing the parent can override the setter to throw an error.
 *
 * Example usage:
 * <pre>
 * var source = new NonDisposableEventTarget();
 * function handleEvent(e) {
 * alert('Type: ' + e.type + '; Target: ' + e.target);
 * }
 * source.listen('foo', handleEvent);
 * source.dispatchEvent('foo'); // will call handleEvent
 * </pre>
 *
 * TODO(user): Consider a more modern, less viral
 * (not based on inheritance) replacement of goog.Disposable, which will allow
 * EventTarget to not be disposable.
 */
export declare class NonDisposableEventTarget implements Listenable {
    /**
     * An implementation of `Listenable` with full W3C
     * EventTarget-like support (capture/bubble mechanism, stopping event
     * propagation, preventing default actions).
     *
     * You may subclass this class to turn your class into a Listenable.
     *
     * Unlike {@link EventTarget}, this class does not implement
     * {@link goog.disposable.IDisposable}. Instances of this class that have had
     * It is not necessary to call {@link goog.dispose}
     * or {@link #removeAllListeners} in order for an instance of this class
     * to be garbage collected.
     *
     * Unless propagation is stopped, an event dispatched by an
     * EventTarget will bubble to the parent returned by
     * `getParentEventTarget`. To set the parent, call
     * `setParentEventTarget`. Subclasses that don't support
     * changing the parent can override the setter to throw an error.
     *
     * Example usage:
     * <pre>
     * var source = new NonDisposableEventTarget();
     * function handleEvent(e) {
     * alert('Type: ' + e.type + '; Target: ' + e.target);
     * }
     * source.listen('foo', handleEvent);
     * source.dispatchEvent('foo'); // will call handleEvent
     * </pre>
     *
     * TODO(user): Consider a more modern, less viral
     * (not based on inheritance) replacement of goog.Disposable, which will allow
     * EventTarget to not be disposable.
     */
    constructor();
    private noStructuralTyping_closure_goog_labs_events_nondisposableeventtarget_NonDisposableEventTarget;
    getParentEventTarget(): any;
    /**
     * Sets the parent of this event target to use for capture/bubble
     * mechanism.
     * @param parent Parent listenable (null if none).
     */
    setParentEventTarget(parent: Listenable | null): void;
    dispatchEvent(e: any): any;
    listen(type: any, listener: any, opt_useCapture: any, opt_listenerScope: any): any;
    listenOnce(type: any, listener: any, opt_useCapture: any, opt_listenerScope: any): any;
    unlisten(type: any, listener: any, opt_useCapture: any, opt_listenerScope: any): any;
    unlistenByKey(key: any): any;
    removeAllListeners(opt_type: any): any;
    fireListeners(type: any, capture: any, eventObject: any): any;
    getListeners(type: any, capture: any): any;
    getListener(type: any, listener: any, capture: any, opt_listenerScope: any): any;
    hasListener(opt_type: any, opt_capture: any): any;
}

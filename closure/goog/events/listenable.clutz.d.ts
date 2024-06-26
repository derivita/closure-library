//!! generated by clutz.
// Generated from events/listenable.js
declare namespace ಠ_ಠ.clutz.goog.events {
  /**
   * A listenable interface. A listenable is an object with the ability
   * to dispatch/broadcast events to "event listeners" registered via
   * listen/listenOnce.
   *
   * The interface allows for an event propagation mechanism similar
   * to one offered by native browser event targets, such as
   * capture/bubble mechanism, stopping propagation, and preventing
   * default actions. Capture/bubble mechanism depends on the ancestor
   * tree constructed via `#getParentEventTarget`; this tree
   * must be directed acyclic graph. The meaning of default action(s)
   * in preventDefault is specific to a particular use case.
   *
   * Implementations that do not support capture/bubble or can not have
   * a parent listenable can simply not implement any ability to set the
   * parent listenable (and have `#getParentEventTarget` return
   * null).
   *
   * Implementation of this class can be used with or independently from
   * goog.events.
   *
   * Implementation must call `#addImplementation(implClass)`.
   */
  namespace Listenable {
    let /**
     * An expando property to indicate that an object implements
     * goog.events.Listenable.
     *
     * See addImplementation/isImplementedBy.
     */
    IMPLEMENTED_BY_PROP : string ;
    function /**
     * Marks a given class (constructor) as an implementation of
     * Listenable, so that we can query that fact at runtime. The class
     * must have already implemented the interface.
     * @param cls The class constructor. The corresponding class must have already implemented the interface.
     */
    addImplementation (cls : { new ( ...a : any [] ) : ಠ_ಠ.clutz.goog.events.Listenable } ) : void ;
    function isImplementedBy (obj : GlobalObject | null ) : boolean ;
  }
  interface Listenable {
    /**
     * Dispatches an event (or event like object) and calls all listeners
     * listening for events of this type. The type of the event is decided by the
     * type property on the event object.
     *
     * If any of the listeners returns false OR calls preventDefault then this
     * function will return false.  If one of the capture listeners calls
     * stopPropagation, then the bubble listeners won't fire.
     * @param e Event object.
     */
    dispatchEvent (e : ಠ_ಠ.clutz.goog.events.EventLike | null ) : boolean ;
    /**
     * Fires all registered listeners in this listenable for the given
     * type and capture mode, passing them the given eventObject. This
     * does not perform actual capture/bubble. Only implementors of the
     * interface should be using this.
     * @param type The type of the listeners to fire.
     * @param capture The capture mode of the listeners to fire.
     * @param eventObject The event object to fire.
     */
    fireListeners < EVENTOBJ = any > (type : string | ಠ_ಠ.clutz.goog.events.EventId < EVENTOBJ > , capture : boolean , eventObject : EVENTOBJ ) : boolean ;
    /**
     * Gets the goog.events.ListenableKey for the event or null if no such
     * listener is in use.
     * @param type The name of the event without the 'on' prefix.
     * @param listener The listener function to get.
     * @param capture Whether the listener is a capturing listener.
     * @param opt_listenerScope Object in whose scope to call the listener.
     */
    getListener < SCOPE = any , EVENTOBJ = any > (type : string | ಠ_ಠ.clutz.goog.events.EventId < EVENTOBJ > , listener : (this : SCOPE , a : EVENTOBJ ) => boolean | undefined , capture : boolean , opt_listenerScope ? : SCOPE ) : ಠ_ಠ.clutz.goog.events.ListenableKey | null ;
    /**
     * Gets all listeners in this listenable for the given type and
     * capture mode.
     * @param type The type of the listeners to fire.
     * @param capture The capture mode of the listeners to fire.
     */
    getListeners < EVENTOBJ = any > (type : string | ಠ_ಠ.clutz.goog.events.EventId , capture : boolean ) : ಠ_ಠ.clutz.goog.events.ListenableKey [] ;
    /**
     * Returns the parent of this event target to use for capture/bubble
     * mechanism.
     *
     * NOTE(chrishenry): The name reflects the original implementation of
     * custom event target (`goog.events.EventTarget`). We decided
     * that changing the name is not worth it.
     */
    getParentEventTarget ( ) : ಠ_ಠ.clutz.goog.events.Listenable | null ;
    /**
     * Whether there is any active listeners matching the specified
     * signature. If either the type or capture parameters are
     * unspecified, the function will match on the remaining criteria.
     * @param opt_type Event type.
     * @param opt_capture Whether to check for capture or bubble listeners.
     */
    hasListener < EVENTOBJ = any > (opt_type ? : string | ಠ_ಠ.clutz.goog.events.EventId < EVENTOBJ > , opt_capture ? : boolean ) : boolean ;
    /**
     * Adds an event listener. A listener can only be added once to an
     * object and if it is added again the key for the listener is
     * returned. Note that if the existing listener is a one-off listener
     * (registered via listenOnce), it will no longer be a one-off
     * listener after a call to listen().
     * @param type The event type id.
     * @param listener Callback method.
     * @param opt_useCapture Whether to fire in capture phase (defaults to false).
     * @param opt_listenerScope Object in whose scope to call the listener.
     */
    listen < SCOPE = any , EVENTOBJ = any > (type : string | ಠ_ಠ.clutz.goog.events.EventId < EVENTOBJ > , listener : (this : SCOPE , a : EVENTOBJ ) => boolean | undefined , opt_useCapture ? : boolean , opt_listenerScope ? : SCOPE ) : ಠ_ಠ.clutz.goog.events.ListenableKey ;
    /**
     * Adds an event listener that is removed automatically after the
     * listener fired once.
     *
     * If an existing listener already exists, listenOnce will do
     * nothing. In particular, if the listener was previously registered
     * via listen(), listenOnce() will not turn the listener into a
     * one-off listener. Similarly, if there is already an existing
     * one-off listener, listenOnce does not modify the listeners (it is
     * still a once listener).
     * @param type The event type id.
     * @param listener Callback method.
     * @param opt_useCapture Whether to fire in capture phase (defaults to false).
     * @param opt_listenerScope Object in whose scope to call the listener.
     */
    listenOnce < SCOPE = any , EVENTOBJ = any > (type : string | ಠ_ಠ.clutz.goog.events.EventId < EVENTOBJ > , listener : (this : SCOPE , a : EVENTOBJ ) => boolean | undefined , opt_useCapture ? : boolean , opt_listenerScope ? : SCOPE ) : ಠ_ಠ.clutz.goog.events.ListenableKey ;
    /**
     * Removes all listeners from this listenable. If type is specified,
     * it will only remove listeners of the particular type. otherwise all
     * registered listeners will be removed.
     * @param opt_type Type of event to remove, default is to remove all types.
     */
    removeAllListeners (opt_type ? : string | ಠ_ಠ.clutz.goog.events.EventId ) : number ;
    /**
     * Removes an event listener which was added with listen() or listenOnce().
     * @param type The event type id.
     * @param listener Callback method.
     * @param opt_useCapture Whether to fire in capture phase (defaults to false).
     * @param opt_listenerScope Object in whose scope to call the listener.
     */
    unlisten < SCOPE = any , EVENTOBJ = any > (type : string | ಠ_ಠ.clutz.goog.events.EventId < EVENTOBJ > , listener : (this : SCOPE , a : EVENTOBJ ) => boolean | undefined , opt_useCapture ? : boolean , opt_listenerScope ? : SCOPE ) : boolean ;
    /**
     * Removes an event listener which was added with listen() by the key
     * returned by listen().
     * @param key The key returned by listen() or listenOnce().
     */
    unlistenByKey (key : ಠ_ಠ.clutz.goog.events.ListenableKey ) : boolean ;
  }
}
declare module 'goog:goog.events.Listenable' {
  import Listenable = ಠ_ಠ.clutz.goog.events.Listenable;
  export default Listenable;
}

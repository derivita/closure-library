//!! generated by clutz.
// Generated from events/eventtargettester.js
declare namespace ಠ_ಠ.clutz.module$exports$goog$events$eventTargetTester {
  /**
   * Expando property used on "listener" function to determine if a
   * listener has already been checked. This is what allows us to
   * implement assertNoOtherListenerIsCalled.
   */
  let ALREADY_CHECKED_PROP : string ;
  //!! module$exports$goog$events$eventTargetTester.EventType aliases enum module$contents$goog$events$eventTargetTester_EventType
  export import EventType = module$contents$goog$events$eventTargetTester_EventType ;
  //!! module$exports$goog$events$eventTargetTester.KeyType aliases enum module$contents$goog$events$eventTargetTester_KeyType
  export import KeyType = module$contents$goog$events$eventTargetTester_KeyType ;
  /**
   * Expando property used on "listener" function to record the number
   * of times it has been called the last time assertListenerIsCalled is
   * done. This allows us to verify that it has not been called more
   * times in assertNoOtherListenerIsCalled.
   */
  let NUM_CALLED_PROP : string ;
  export import TestEvent = ಠ_ಠ.clutz.module$contents$goog$events$eventTargetTester_TestEvent ;
  //!! module$exports$goog$events$eventTargetTester.UnlistenReturnType aliases enum module$contents$goog$events$eventTargetTester_UnlistenReturnType
  export import UnlistenReturnType = module$contents$goog$events$eventTargetTester_UnlistenReturnType ;
  function assertListenerIsCalled (listener : Function , numCount : number ) : void ;
  function assertNoOtherListenerIsCalled ( ) : void ;
  let commonTests : { testBubble : ( ) => void , testCapture : ( ) => void , testCaptureAndBubble : ( ) => void , testDispatchEventDoesNotThrowWithDisposedEventTarget : ( ) => void , testDispatchEventWithCustomEventObject : ( ) => void , testDispatchEventWithObjectLiteral : ( ) => void , testDisposingEventTargetRemovesListeners : ( ) => void , testFiringEventBeforeDisposeInternalWorks : ( ) => void , testGetListener : ( ) => void , testGetListeners : ( ) => void , testHandleEvent : ( ) => void , testHasListener : ( ) => void , testInstallingSameListeners : ( ) => void , testListenAfterListenOnceRemoveOnceness : ( ) => void , testListenOnce : ( ) => void , testListenOnceAfterListenDoesNotChangeExistingListener : ( ) => void , testListenOnceAfterListenOnceDoesNotChangeExistingListener : ( ) => void , testLoopDetection : ( ) => void , testNoListener : ( ) => void , testOneListener : ( ) => void , testPreventDefault : ( ) => void , testPreventDefaultAtCapture : ( ) => void , testPreventDefaultByReturningFalse : ( ) => void , testRemoveAll : ( ) => void , testRemoveAllCallsMarkAsRemoved : ( ) => void , testRemoveAllWithType : ( ) => void , testRemovingListener : ( ) => void , testScope : ( ) => void , testSetParentEventTarget : ( ) => void , testStopPropagation : ( ) => void , testStopPropagation2 : ( ) => void , testStopPropagation3 : ( ) => void , testStopPropagationAtCapture : ( ) => void , testTwoListenersOfSameType : ( ) => void , testUnlistenAfterListenOnce : ( ) => void , testUnlistenByKeyInListen : ( ) => void , testUnlistenInListen : ( ) => void , testUnlistenWorksAfterDisposal : ( ) => void } ;
  function createListener (opt_listenerFn ? : Function ) : Function ;
  function getListeners ( ) : any [] ;
  function getTargets ( ) : any [] ;
  function resetListeners ( ) : void ;
  /**
   * Setup step for the test functions. This needs to be called from the
   * test setUp.
   * @param listenableFactoryFn Function that will return a new Listenable instance each time it is called.
   * @param listenFn Function that, given the same signature as goog.events.listen, will add listener to the given event target.
   * @param unlistenFn Function that, given the same signature as goog.events.unlisten, will remove listener from the given event target.
   * @param unlistenByKeyFn Function that, given 2 parameters: src and key, will remove the corresponding listener.
   * @param listenOnceFn Function that, given the same signature as goog.events.listenOnce, will add a one-time listener to the given event target.
   * @param dispatchEventFn Function that, given the same signature as goog.events.dispatchEvent, will dispatch the event on the given event target.
   * @param removeAllFn Function that, given the same signature as goog.events.removeAll, will remove all listeners according to the contract of goog.events.removeAll.
   * @param getListenersFn Function that, given the same signature as goog.events.getListeners, will retrieve listeners.
   * @param getListenerFn Function that, given the same signature as goog.events.getListener, will retrieve the listener object.
   * @param hasListenerFn Function that, given the same signature as goog.events.hasListener, will determine whether listeners exist.
   * @param listenKeyType The key type returned by listen call.
   * @param unlistenFnReturnType Whether we should check return value from unlisten call. If unlisten does not return a value, this should be set to false.
   * @param objectListenerSupported Whether listener of type Object is supported.
   */
  function setUp (listenableFactoryFn : ( ) => ಠ_ಠ.clutz.module$exports$goog$events$Listenable , listenFn : Function | null , unlistenFn : Function | null , unlistenByKeyFn : Function | null , listenOnceFn : Function | null , dispatchEventFn : Function | null , removeAllFn : Function | null , getListenersFn : Function | null , getListenerFn : Function | null , hasListenerFn : Function | null , listenKeyType : module$contents$goog$events$eventTargetTester_KeyType , unlistenFnReturnType : module$contents$goog$events$eventTargetTester_UnlistenReturnType , objectListenerSupported : boolean ) : void ;
  /**
   * Teardown step for the test functions. This needs to be called from
   * test teardown.
   */
  function tearDown ( ) : void ;
  function times (n : number ) : number ;
}
declare module 'goog:goog.events.eventTargetTester' {
  import eventTargetTester = ಠ_ಠ.clutz.module$exports$goog$events$eventTargetTester;
  export = eventTargetTester;
}
// Generated from events/eventtargettester.js
declare namespace ಠ_ಠ.clutz {
  /**
   * The type of key returned by key-returning functions (listen).
   */
  /**
   * The type of key returned by key-returning functions (listen).
   */
  enum module$contents$goog$events$eventTargetTester_KeyType {
    NUMBER = 0.0 ,
    UNDEFINED = 1.0 ,
  }
}
// Generated from events/eventtargettester.js
declare namespace ಠ_ಠ.clutz {
  /**
   * The type of unlisten function's return value.
   */
  /**
   * The type of unlisten function's return value.
   */
  enum module$contents$goog$events$eventTargetTester_UnlistenReturnType {
    BOOLEAN = 0.0 ,
    UNDEFINED = 1.0 ,
  }
}
// Generated from events/eventtargettester.js
declare namespace ಠ_ಠ.clutz {
  /**
   * Custom event object for testing.
   */
  class module$contents$goog$events$eventTargetTester_TestEvent extends ಠ_ಠ.clutz.module$exports$goog$events$Event {
    private noStructuralTyping_module$contents$goog$events$eventTargetTester_TestEvent : any;
    /**
     * Custom event object for testing.
     */
    constructor ( ) ;
  }
}

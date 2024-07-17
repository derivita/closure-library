import { Event as GoogEventsEvent } from './event.js';
/**
 * The number of times a listener should have been executed. This
 * exists to make assertListenerIsCalled more readable.  This is used
 * like so: assertListenerIsCalled(listener, times(2));
 * @param n The number of times a listener should have been executed.
 * @return The number n.
 */
declare function times(n: number): number;
/**
 * Creates a listener that executes the given function (optional).
 * @param opt_listenerFn The optional function to execute.
 * @return The listener function.
 */
declare function createListener(opt_listenerFn?: Function): Function;
/**
 * Asserts that the given listener is called numCount number of times.
 * @param listener The listener to check.
 * @param numCount The number of times. See also the times() function below.
 */
declare function assertListenerIsCalled(listener: Function, numCount: number): void;
/**
 * Asserts that no other listeners, other than those verified via
 * assertListenerIsCalled, have been called since the last
 * resetListeners().
 */
declare function assertNoOtherListenerIsCalled(): void;
/**
 * Resets all listeners call count to 0.
 */
declare function resetListeners(): void;
/**
 * The type of key returned by key-returning functions (listen).
 */
declare enum KeyType {
    NUMBER = 0,
    UNDEFINED = 1
}
/**
 * The type of unlisten function's return value.
 */
declare enum UnlistenReturnType {
    BOOLEAN = 0,
    UNDEFINED = 1
}
/**
 * Custom event object for testing.
 */
declare class TestEvent extends GoogEventsEvent {
    constructor();
}
declare const _default: {
    assertListenerIsCalled: typeof assertListenerIsCalled;
    assertNoOtherListenerIsCalled: typeof assertNoOtherListenerIsCalled;
    createListener: typeof createListener;
    times: typeof times;
    resetListeners: typeof resetListeners;
    getListeners(): any;
    getTargets(): any;
    setUp(listenableFactoryFn: any, listenFn: any, unlistenFn: any, unlistenByKeyFn: any, listenOnceFn: any, dispatchEventFn: any, removeAllFn: any, getListenersFn: any, getListenerFn: any, hasListenerFn: any, listenKeyType: any, unlistenFnReturnType: any, objectListenerSupported: any): void;
    tearDown(): void;
    KeyType: typeof KeyType;
    EventType: {
        A: string;
        B: string;
        C: string;
    };
    UnlistenReturnType: typeof UnlistenReturnType;
    TestEvent: typeof TestEvent;
    ALREADY_CHECKED_PROP: string;
    NUM_CALLED_PROP: string;
    commonTests: {
        testNoListener(): void;
        testOneListener(): void;
        testTwoListenersOfSameType(): void;
        testInstallingSameListeners(): void;
        testScope(): void;
        testDispatchEventDoesNotThrowWithDisposedEventTarget(): void;
        testDispatchEventWithObjectLiteral(): void;
        testDispatchEventWithCustomEventObject(): void;
        testDisposingEventTargetRemovesListeners(): void;
        testUnlistenWorksAfterDisposal(): void;
        testRemovingListener(): void;
        testCapture(): void;
        testBubble(): void;
        testCaptureAndBubble(): void;
        testPreventDefaultByReturningFalse(): void;
        testPreventDefault(): void;
        testPreventDefaultAtCapture(): void;
        testStopPropagation(): void;
        testStopPropagation2(): void;
        testStopPropagation3(): void;
        testStopPropagationAtCapture(): void;
        testHandleEvent(): void;
        testListenOnce(): void;
        testUnlistenInListen(): void;
        testUnlistenByKeyInListen(): void;
        testSetParentEventTarget(): void;
        testListenOnceAfterListenDoesNotChangeExistingListener(): void;
        testListenOnceAfterListenOnceDoesNotChangeExistingListener(): void;
        testListenAfterListenOnceRemoveOnceness(): void;
        testUnlistenAfterListenOnce(): void;
        testRemoveAllWithType(): void;
        testRemoveAll(): void;
        testRemoveAllCallsMarkAsRemoved(): void;
        testGetListeners(): void;
        testGetListener(): void;
        testHasListener(): void;
        testFiringEventBeforeDisposeInternalWorks(): void;
        testLoopDetection(): void;
    };
};
export default _default;

import type { Listenable } from './listenable.js';
/**
 * An interface that describes a single registered listener.
 */
export interface ListenableKey {
    /**
     * The source event target.
     */
    src: object | Listenable | null;
    /**
     * The event type the listener is listening to.
     */
    type: string;
    /**
     * The listener function.
     */
    listener: (() => any) | {
        'handleEvent': () => any;
    } | null;
    /**
     * Whether the listener works on capture phase.
     */
    capture: boolean;
    /**
     * The 'this' object for the listener function's scope.
     */
    handler: object | undefined | null;
    /**
     * A globally unique number to identify the key.
     */
    key: number;
}
export declare namespace ListenableKey {
    /**
     * Counter used to create a unique key
     */
    var counter_: number;
    /**
     * Reserves a key to be used for ListenableKey#key field.
     * @return A number to be used to fill ListenableKey#key field.
     */
    var reserveKey: number;
}

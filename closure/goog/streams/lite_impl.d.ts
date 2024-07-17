import * as liteTypes from './lite_types.js';
/**
 * The lite implementation of ReadableStream.
 *
 * Supports the getReader() method and locked property.
 *
 * The only method of underlying sources that is supported is enqueueing,
 * closing, and erroring.
 *
 * Pulling (including backpressure and sizes) and cancellation are not
 * supported.
 */
export declare class ReadableStream<T = any> implements liteTypes.ReadableStream<T | null> {
    constructor();
    /**
     * Returns true if the ReadableStream has been locked to a reader.
     * https://streams.spec.whatwg.org/#rs-locked
     */
    get locked(): boolean;
    /**
     * Returns a ReadableStreamDefaultReader that enables reading chunks from
     * the source.
     * https://streams.spec.whatwg.org/#rs-get-reader
     */
    getReader(): ReadableStreamDefaultReader<T | null>;
    storedError: any;
}
export declare namespace ReadableStream {
    enum State {
        READABLE = 1,
        CLOSED = 2,
        ERRORED = 3
    }
}
/**
 * Creates and returns a new ReadableStream.
 *
 * The underlying source should only have a start() method, and no other
 * properties.
 */
export declare function newReadableStream<T = any>(underlyingSource: liteTypes.ReadableStreamUnderlyingSource<T | null>): ReadableStream<T | null>;
/**
 * A reader for a lite ReadableStream.
 *
 * Supports the read() and releaseLock() methods, along with the closed
 * property.
 */
export declare class ReadableStreamDefaultReader<T = any> implements liteTypes.ReadableStreamDefaultReader<T | null> {
    constructor(stream: ReadableStream);
    /**
     * Returns a Promise that resolves when the Stream closes or is errored, or if
     * the reader releases its lock.
     * https://streams.spec.whatwg.org/#default-reader-closed
     */
    get closed(): Promise<undefined>;
    /**
     * Returns a Promise that resolves with an IIterableResult providing the next
     * chunk or that the stream is closed. The Promise may reject if the stream
     * is errored.
     * https://streams.spec.whatwg.org/#default-reader-read
     */
    read(): Promise<IteratorResult<T | null>>;
    /**
     * Release the lock on the stream. Any further calls to read() will error,
     * and the stream can create another reader.
     * https://streams.spec.whatwg.org/#default-reader-release-lock
     */
    releaseLock(): void;
}
/**
 * A controller for a lite ReadableStream.
 *
 * Provides the enqueue(), error(), and close() methods.
 */
export declare class ReadableStreamDefaultController<T = any> implements liteTypes.ReadableStreamDefaultController<T | null> {
    constructor(stream: ReadableStream);
    /**
     * Signals that the ReadableStream should close. The ReadableStream will
     * actually close once all of its chunks have been read.
     * https://streams.spec.whatwg.org/#rs-default-controller-close
     */
    close(): void;
    /**
     * Enqueues a new chunk into the stream that can be read.
     * https://streams.spec.whatwg.org/#rs-default-controller-enqueue
     */
    enqueue(chunk: T | null): any;
    /**
     * Closes the stream with an error. Any future interactions with the
     * controller will throw an error.
     * https://streams.spec.whatwg.org/#rs-default-controller-error
     */
    error(e: any): any;
    enqueueIntoQueue(chunk: T | null): void;
    dequeueFromQueue(): T | null;
    resetQueue(): void;
}
/**
 * An internal Queue representation. This simple Queue just wraps an Array.
 * Other implementations may also have a size associated with each element.
 */
export declare class Queue<T = any> {
    constructor();
    empty(): boolean;
    enqueueValue(value: T | null): void;
    dequeueValue(): T | null;
    resetQueue(): void;
}
declare const _default: {
    Queue: typeof Queue;
    ReadableStream: typeof ReadableStream;
    ReadableStreamDefaultController: typeof ReadableStreamDefaultController;
    ReadableStreamDefaultReader: typeof ReadableStreamDefaultReader;
    newReadableStream: typeof newReadableStream;
};
export default _default;

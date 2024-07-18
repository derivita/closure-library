import * as fullTypes from './full_types.js';
import * as liteImpl from './lite_impl.js';
type CancelAlgorithm = () => Promise<undefined>;
type PullAlgorithm = () => Promise<undefined>;
/**
 * The implemenation of ReadableStream.
 */
declare class ReadableStream<T = any> extends liteImpl.ReadableStream implements fullTypes.ReadableStream<T | null> {
    constructor();
    /**
     * Returns a ReadableStreamDefaultReader that enables reading chunks from
     * the source.
     * https://streams.spec.whatwg.org/#rs-get-reader
     */
    getReader(): ReadableStreamDefaultReader<T | null>;
    /**
     * Cancels the ReadableStream with an optional reason.
     * https://streams.spec.whatwg.org/#rs-cancel
     */
    cancel(reason: any): Promise<undefined>;
    /**
     * Returns an AyncIterator over the ReadableStream.
     *
     * If preventCancel is passed as an option, calling the return() method on the
     * iterator will terminate the iterator, but will not cancel the
     * ReadableStream.
     * https://streams.spec.whatwg.org/#rs-get-iterator
     */
    getIterator({ preventCancel }?: {
        preventCancel?: boolean;
    }): AsyncIterator<T | null>;
    /**
     * Returns an Array with two elements, both new ReadableStreams that contain
     * the same data as this ReadableStream. This stream will become permanently
     * locked.
     * https://streams.spec.whatwg.org/#rs-tee
     */
    tee(): ReadableStream[];
}
/**
 * Creates and returns a new ReadableStream.
 *
 * The underlying source should only have a start() method, and no other
 * properties.
 */
declare function newReadableStream<T = any>(underlyingSource?: fullTypes.ReadableStreamUnderlyingSource<T | null>, strategy?: fullTypes.ReadableStreamStrategy<T | null>): ReadableStream<T | null>;
/**
 * The DefaultReader for a ReadableStream. Adds cancellation onto the liteImpl
 * DefaultReader.
 */
declare class ReadableStreamDefaultReader<T = any> extends liteImpl.ReadableStreamDefaultReader implements fullTypes.ReadableStreamDefaultReader<T | null> {
    /**
     * Cancels the ReadableStream with an optional reason.
     * https://streams.spec.whatwg.org/#default-reader-cancel
     */
    cancel(reason: any): Promise<undefined>;
}
declare class ReadableStreamAsyncIterator<T = any> implements fullTypes.ReadableStreamAsyncIterator<T | null> {
    constructor(asyncIteratorReader: ReadableStreamDefaultReader<T | null>, preventCancel: boolean);
    /**
     * Gets the next value from the ReadableStream.
     * https://streams.spec.whatwg.org/#rs-asynciterator-prototype-next
     */
    next(): any;
    /**
     * Cancels the underlying stream and resolves with the value.
     */
    return(value: any): Promise<IteratorResult<T | null>>;
}
/**
 * The controller for a ReadableStream. Adds cancellation and backpressure onto
 * the liteImpl DefaultController.
 */
declare class ReadableStreamDefaultController<T = any> extends liteImpl.ReadableStreamDefaultController implements fullTypes.ReadableStreamDefaultController {
    constructor(stream: ReadableStream, cancelAlgorithm: CancelAlgorithm | undefined, pullAlgorithm: PullAlgorithm | undefined, strategyHWM: number, strategySizeAlgorithm: (() => number) | undefined);
    /**
     * Returns the desired size to fill the controlled stream's internal queue. It
     * can be negative if the queue is full.
     * https://streams.spec.whatwg.org/#rs-default-controller-desired-size
     */
    get desiredSize(): number | null;
    started(): any;
    callPullIfNeeded(): any;
    clearAlgorithms(): any;
    enqueueIntoQueue(chunk: any): void;
    dequeueFromQueue(): any;
    resetQueue(): void;
}
declare const _default: {
    ReadableStream: typeof ReadableStream;
    ReadableStreamAsyncIterator: typeof ReadableStreamAsyncIterator;
    ReadableStreamDefaultController: typeof ReadableStreamDefaultController;
    ReadableStreamDefaultReader: typeof ReadableStreamDefaultReader;
    newReadableStream: typeof newReadableStream;
};
export default _default;

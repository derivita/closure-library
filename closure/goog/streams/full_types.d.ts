import * as liteTypes from './lite_types.js';
/**
 * The underlying source for a ReadableStream.
 */
export interface ReadableStreamUnderlyingSource<T = any> extends liteTypes.ReadableStreamUnderlyingSource {
    /**
     * A pull method that is called when the ReadableStream's internal queue
     * becomes not full.
     */
    pull: (() => (Promise<undefined> | undefined)) | undefined;
    /**
     * Called when the ReadableStream is cancelled.
     */
    cancel: (() => (Promise<undefined> | undefined)) | undefined;
}
/**
 * The strategy for the ReadableStream queue.
 */
export interface ReadableStreamStrategy<T = any> {
    /**
     * A sizing algorithm that takes a chunk of the ReadableStream and returns
     * a size.
     * https://streams.spec.whatwg.org/#qs-api
     */
    size: (() => number) | undefined;
    /**
     * Used to calculate the desired size of the ReadableStream. The high-water
     * mark minus the sum of the sizes of chunks currently in the queue is the
     * desired size.
     * https://streams.spec.whatwg.org/#qs-api
     */
    highWaterMark: number | undefined;
}
/**
 * The implemenation of ReadableStream.
 */
export interface ReadableStream<T = any> extends liteTypes.ReadableStream<T | null>, AsyncIterable<T | null> {
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
    getIterator({ preventCancel }: {
        preventCancel?: boolean;
    }): AsyncIterator<T | null>;
    /**
     * Returns an Array with two elements, both new ReadableStreams that contain
     * the same data as this ReadableStream. This stream will become permanently
     * locked.
     * https://streams.spec.whatwg.org/#rs-tee
     */
    tee(): ReadableStream[];
    /**
     * https://streams.spec.whatwg.org/#rs-asynciterator
     */
    [Symbol.asyncIterator]({ preventCancel }: {
        preventCancel?: boolean;
    }): AsyncIterator<T | null>;
}
/**
 * The DefaultReader for a ReadableStream.
 */
export interface ReadableStreamDefaultReader<T = any> extends liteTypes.ReadableStreamDefaultReader<T | null> {
    /**
     * Cancels the ReadableStream with an optional reason.
     * https://streams.spec.whatwg.org/#default-reader-cancel
     */
    cancel(reason: any): Promise<undefined>;
}
export interface ReadableStreamAsyncIterator<T = any> extends AsyncIterator<T | null> {
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
 * The controller for a ReadableStream. Adds cancellation and backpressure.
 */
export interface ReadableStreamDefaultController<T = any> extends liteTypes.ReadableStreamDefaultController<T | null> {
    /**
     * The desired size to fill the controlled stream's internal queue.
     * It can be negative if the queue is full.
     * https://streams.spec.whatwg.org/#rs-default-controller-desired-size
     */
    desiredSize: number | null;
}
declare const _default: {
    ReadableStream: {
        new (underlyingSource: UnderlyingByteSource, strategy?: {
            highWaterMark?: number;
        }): globalThis.ReadableStream<Uint8Array>;
        new <R = any>(underlyingSource: UnderlyingDefaultSource<R>, strategy?: QueuingStrategy<R>): globalThis.ReadableStream<R>;
        new <R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): globalThis.ReadableStream<R>;
        prototype: globalThis.ReadableStream;
    };
    ReadableStreamAsyncIterator: any;
    ReadableStreamDefaultController: {
        new (): globalThis.ReadableStreamDefaultController;
        prototype: globalThis.ReadableStreamDefaultController;
    };
    ReadableStreamDefaultReader: {
        new <R = any>(stream: globalThis.ReadableStream<R>): globalThis.ReadableStreamDefaultReader<R>;
        prototype: globalThis.ReadableStreamDefaultReader;
    };
    ReadableStreamStrategy: any;
    ReadableStreamUnderlyingSource: any;
};
export default _default;

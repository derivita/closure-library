import { ReadableStream, ReadableStreamUnderlyingSource } from './lite_types.js';
/**
 * Creates and returns a new ReadableStream.
 *
 * The underlying source should only have a start() method, and no other
 * properties.
 */
declare function newReadableStream<T = any>(underlyingSource: ReadableStreamUnderlyingSource<T | null>): ReadableStream<T | null>;
declare const _default: {
    ReadableStream: {
        new (underlyingSource: UnderlyingByteSource, strategy?: {
            highWaterMark?: number;
        }): globalThis.ReadableStream<Uint8Array>;
        new <R = any>(underlyingSource: UnderlyingDefaultSource<R>, strategy?: QueuingStrategy<R>): globalThis.ReadableStream<R>;
        new <R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): globalThis.ReadableStream<R>;
        prototype: globalThis.ReadableStream;
    };
    ReadableStreamDefaultController: {
        new (): globalThis.ReadableStreamDefaultController;
        prototype: globalThis.ReadableStreamDefaultController;
    };
    ReadableStreamDefaultReader: {
        new <R = any>(stream: globalThis.ReadableStream<R>): globalThis.ReadableStreamDefaultReader<R>;
        prototype: globalThis.ReadableStreamDefaultReader;
    };
    ReadableStreamUnderlyingSource: any;
    newReadableStream: typeof newReadableStream;
};
export default _default;

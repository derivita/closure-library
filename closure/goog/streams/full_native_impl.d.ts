import * as fullTypes from './full_types.js';
import * as liteNativeImpl from './lite_native_impl.js';
/**
 * The implemenation of ReadableStream.
 */
declare class NativeReadableStream<T = any> extends liteNativeImpl.NativeReadableStream implements fullTypes.ReadableStream<T | null> {
    constructor(stream: ReadableStream);
    getReader(): NativeReadableStreamDefaultReader;
    cancel(reason: any): any;
    getIterator(options?: any): any;
    tee(): any;
}
/**
 *
 */
declare function newReadableStream<T = any>(underlyingSource?: fullTypes.ReadableStreamUnderlyingSource<T | null>, strategy?: fullTypes.ReadableStreamStrategy<T | null>): NativeReadableStream<T | null>;
/**
 * The DefaultReader for a ReadableStream.
 */
declare class NativeReadableStreamDefaultReader<T = any> extends liteNativeImpl.NativeReadableStreamDefaultReader implements fullTypes.ReadableStreamDefaultReader<T | null> {
    cancel(reason: any): any;
}
declare class NativeReadableStreamAsyncIterator<T = any> implements fullTypes.ReadableStreamAsyncIterator<T | null> {
    constructor(iterator: AsyncIterator<T | null>);
    next(): any;
    return(value: any): any;
}
/**
 * The controller for a ReadableStream. Adds cancellation and backpressure.
 */
declare class NativeReadableStreamDefaultController<T = any> extends liteNativeImpl.NativeReadableStreamDefaultController implements fullTypes.ReadableStreamDefaultController<T | null> {
    get desiredSize(): any;
}
declare const _default: {
    NativeReadableStream: typeof NativeReadableStream;
    NativeReadableStreamAsyncIterator: typeof NativeReadableStreamAsyncIterator;
    NativeReadableStreamDefaultController: typeof NativeReadableStreamDefaultController;
    NativeReadableStreamDefaultReader: typeof NativeReadableStreamDefaultReader;
    newReadableStream: typeof newReadableStream;
};
export default _default;

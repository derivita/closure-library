import * as liteTypes from './lite_types.js';
export declare class NativeReadableStream<T = any> implements liteTypes.ReadableStream<T | null> {
    constructor(stream: ReadableStream);
    get locked(): any;
    getReader(): any;
    protected stream: ReadableStream;
}
/**
 *
 */
export declare function newReadableStream<T = any>(underlyingSource: liteTypes.ReadableStreamUnderlyingSource<T | null>): NativeReadableStream<T | null>;
export declare class NativeReadableStreamDefaultReader<T = any> implements liteTypes.ReadableStreamDefaultReader<T | null> {
    constructor(reader: ReadableStreamDefaultReader);
    get closed(): any;
    read(): any;
    releaseLock(): any;
    protected reader: ReadableStreamDefaultReader;
}
export declare class NativeReadableStreamDefaultController<T = any> implements liteTypes.ReadableStreamDefaultController<T | null> {
    constructor(controller: ReadableStreamDefaultController);
    close(): any;
    enqueue(chunk: any): any;
    error(e: any): any;
    protected controller: ReadableStreamDefaultController;
}
declare const _default: {
    NativeReadableStream: typeof NativeReadableStream;
    NativeReadableStreamDefaultController: typeof NativeReadableStreamDefaultController;
    NativeReadableStreamDefaultReader: typeof NativeReadableStreamDefaultReader;
    newReadableStream: typeof newReadableStream;
};
export default _default;

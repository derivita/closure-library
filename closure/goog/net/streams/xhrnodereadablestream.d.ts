import { NodeReadableStream } from './nodereadablestream.js';
import { XhrStreamReader } from './xhrstreamreader.js';
/**
 * The XhrNodeReadableStream class.
 */
declare class XhrNodeReadableStream implements NodeReadableStream {
    constructor(xhrReader: XhrStreamReader);
    on(eventType: string, callback: () => any): NodeReadableStream;
    addListener(eventType: string, callback: () => any): NodeReadableStream;
    removeListener(eventType: string, callback: () => any): NodeReadableStream;
    once(eventType: string, callback: () => any): NodeReadableStream;
}
declare const _default: {
    XhrNodeReadableStream: typeof XhrNodeReadableStream;
};
export default _default;

import { XhrIo } from '../xhrio.js';
import type { StreamParser } from './streamparser.js';
/**
 * Returns a parser that supports the given content-type (mime) and
 * content-transfer-encoding.
 * @return a parser or null if the content type or transfer encoding is unsupported.
 */
declare function getStreamParser(io: XhrIo): StreamParser | null;
declare const _default: {
    getStreamParser: typeof getStreamParser;
};
export default _default;

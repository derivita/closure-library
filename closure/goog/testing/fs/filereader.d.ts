import { EventTarget } from '../../events/eventtarget.js';
import { Error } from '../../fs/error.js';
import { FileReader as fsFileReader } from '../../fs/filereader.js';
import { Blob } from './blob.js';
/**
 * A mock FileReader object. This emits the same events as
 * {@link fsFileReader}.
 */
export declare class FileReader extends EventTarget {
    /**
     * A mock FileReader object. This emits the same events as
     * {@link fsFileReader}.
     */
    constructor();
    private noStructuralTyping_closure_goog_testing_fs_filereader_FileReader;
    getReadyState(): fsFileReader.ReadyState | null;
    getError(): Error | null;
    abort(): void;
    getResult(): any;
    /**
     *
     * @param blob The blob to read.
     */
    readAsBinaryString(blob: Blob): void;
    /**
     *
     * @param blob The blob to read.
     */
    readAsArrayBuffer(blob: Blob): void;
    /**
     *
     * @param blob The blob to read.
     * @param opt_encoding The name of the encoding to use.
     */
    readAsText(blob: Blob, opt_encoding?: string): void;
    /**
     *
     * @param blob The blob to read.
     */
    readAsDataUrl(blob: Blob): void;
}
export declare namespace FileReader {
    /**
     * The possible return types.
     */
    enum ReturnType {
        TEXT = 1,
        BINARY_STRING = 2,
        ARRAY_BUFFER = 3,
        DATA_URL = 4
    }
}

import { Event } from '../../events/event.js';
import type { FileReader } from '../../fs/filereader.js';
import type { FileSaver } from '../../fs/filesaver.js';
/**
 * A mock progress event.
 */
export declare class ProgressEvent extends Event {
    /**
     * A mock progress event.
     * @param type Event type.
     * @param loaded The number of bytes processed.
     * @param total The total data that was to be processed, in bytes.
     */
    constructor(type: FileSaver.EventType | FileReader.EventType, loaded: number, total: number);
    private noStructuralTyping_closure_goog_testing_fs_progressevent_ProgressEvent;
    isLengthComputable(): boolean;
    getLoaded(): number;
    getTotal(): number;
}

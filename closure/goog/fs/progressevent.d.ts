import { Event } from '../events/event.js';
/**
 * A wrapper for the progress events emitted by the File APIs.
 */
declare class GoogProgressEvent extends Event {
    /**
     * A wrapper for the progress events emitted by the File APIs.
     * @param event The underlying event object.
     * @param target The file access object emitting the event.
     */
    constructor(event: ProgressEvent, target: object);
    private noStructuralTyping_closure_goog_fs_progressevent_GoogProgressEvent;
    isLengthComputable(): boolean;
    getLoaded(): number;
    getTotal(): number;
}
export { GoogProgressEvent as ProgressEvent };

import { Event } from '../events/event.js';
import { EventTarget } from '../events/eventtarget.js';
import { Coordinate } from '../math/coordinate.js';
/**
 * Creates a new drag and drop detector.
 */
export declare class DragDropDetector extends EventTarget {
    /**
     * Creates a new drag and drop detector.
     * @param opt_filePath The URL of the page to use for the detector. It should contain the same contents as dragdropdetector_target.html in the demos directory.
     */
    constructor(opt_filePath?: string);
    private noStructuralTyping_closure_goog_ui_dragdropdetector_DragDropDetector;
    /**
     * Initial value for clientX and clientY indicating that the location has
     * never been updated.
     */
    static INIT_POSITION: number;
    static MSG_DRAG_DROP_LOCAL_FILE_ERROR: string;
    static MSG_DRAG_DROP_PROTECTED_FILE_ERROR: string;
    disposeInternal(): void;
}
export declare namespace DragDropDetector {
    /**
     * Drag and drop event types.
     */
    enum EventType {
        IMAGE_DROPPED = "onimagedrop",
        LINK_DROPPED = "onlinkdrop"
    }
    /**
     * Creates a new image drop event object.
     */
    class ImageDropEvent extends Event {
        /**
         * Creates a new image drop event object.
         * @param url The url of the dropped image.
         * @param position The screen position where the drop occurred.
         */
        constructor(url: string, position: Coordinate | null);
        private noStructuralTyping_closure_goog_ui_dragdropdetector_ImageDropEvent;
        getUrl(): string;
        getPosition(): Coordinate | null;
    }
    /**
     * Creates a new link drop event object.
     */
    class LinkDropEvent extends Event {
        /**
         * Creates a new link drop event object.
         * @param url The url of the dropped link.
         */
        constructor(url: string);
        private noStructuralTyping_closure_goog_ui_dragdropdetector_LinkDropEvent;
        getUrl(): string;
    }
}

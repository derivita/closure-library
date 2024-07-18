import { EventTarget } from './eventtarget.js';
/**
 * A files drag and drop event detector. Gets an `element` as parameter
 * and fires `FileDropHandler.EventType.DROP` event when files
 * are dropped in the `element`.
 */
export declare class FileDropHandler extends EventTarget {
    /**
     * A files drag and drop event detector. Gets an `element` as parameter
     * and fires `FileDropHandler.EventType.DROP` event when files
     * are dropped in the `element`.
     * @param element The element or document to listen on.
     * @param opt_preventDropOutside Whether to prevent a drop on the area outside the `element`. Default false.
     */
    constructor(element: Element | Document | null, opt_preventDropOutside?: boolean);
    private noStructuralTyping_closure_goog_events_filedrophandler_FileDropHandler;
    disposeInternal(): void;
}
export declare namespace FileDropHandler {
    /**
     * The types of events fired by this class.
     */
    type EventType = string;
    const EventType: any;
}

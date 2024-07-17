import { BrowserEvent } from '../events/browserevent.js';
/**
 * Data object that contains all the necessary information from a keyboard event
 * that is required to process it in `KeyboardShortcutHandler`.
 *
 * Prefer using `KeyboardEventData.Builder` over using this constructor.
 */
export declare class KeyboardEventData {
    /**
     * Data object that contains all the necessary information from a keyboard event
     * that is required to process it in `KeyboardShortcutHandler`.
     *
     * Prefer using `KeyboardEventData.Builder` over using this constructor.
     */
    constructor(keyCode: number, key: string, shiftKey: boolean, altKey: boolean, ctrlKey: boolean, metaKey: boolean, target: Node, rootTarget: EventTarget, preventDefaultFn: any, stopPropagationFn: any);
    private noStructuralTyping_closure_goog_ui_keyboardeventdata_KeyboardEventData;
    getKeyCode(): number;
    getKey(): string;
    getShiftKey(): boolean;
    getAltKey(): boolean;
    getCtrlKey(): boolean;
    getMetaKey(): boolean;
    getTarget(): Node;
    getRootTarget(): EventTarget;
    getPreventDefaultFn(): any;
    getStopPropagationFn(): any;
    /**
     *
     */
    static fromBrowserEvent(event: BrowserEvent): KeyboardEventData;
}
export declare namespace KeyboardEventData {
    /**
     * Builder for `KeyboardEventData`. All fields are required except `key`, which
     * defaults to `''`.
     */
    class Builder {
        /**
         * Builder for `KeyboardEventData`. All fields are required except `key`, which
         * defaults to `''`.
         */
        constructor();
        private noStructuralTyping_closure_goog_ui_keyboardeventdata_Builder;
        /**
         *
         */
        keyCode(keyCode: number): KeyboardEventData.Builder;
        /**
         *
         */
        key(key: string): KeyboardEventData.Builder;
        /**
         *
         */
        shiftKey(shiftKey: boolean): KeyboardEventData.Builder;
        /**
         *
         */
        altKey(altKey: boolean): KeyboardEventData.Builder;
        /**
         *
         */
        ctrlKey(ctrlKey: boolean): KeyboardEventData.Builder;
        /**
         *
         */
        metaKey(metaKey: boolean): KeyboardEventData.Builder;
        /**
         *
         */
        target(target: Node | null): KeyboardEventData.Builder;
        /**
         *
         */
        rootTarget(rootTarget: EventTarget | null): KeyboardEventData.Builder;
        /**
         *
         */
        preventDefaultFn(preventDefaultFn: any): KeyboardEventData.Builder;
        /**
         *
         */
        stopPropagationFn(stopPropagationFn: any): KeyboardEventData.Builder;
        build(): KeyboardEventData;
    }
}

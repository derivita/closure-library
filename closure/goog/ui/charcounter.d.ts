import { EventTarget } from '../events/eventtarget.js';
/**
 * CharCounter widget. Counts the number of characters in a input field or a
 * text box and displays the number of additional characters that may be
 * entered before the maximum length is reached.
 */
export declare class CharCounter extends EventTarget {
    /**
     * CharCounter widget. Counts the number of characters in a input field or a
     * text box and displays the number of additional characters that may be
     * entered before the maximum length is reached.
     * @param elInput Input or text area element to count the number of characters in.
     * @param elCount HTML element to display the remaining number of characters in. You can pass in null for this if you don't want to expose the number of chars remaining.
     * @param maxLength The maximum length.
     * @param opt_displayMode Display mode for this char counter. Defaults to {@link CharCounter.Display.REMAINING}.
     */
    constructor(elInput: HTMLInputElement | HTMLTextAreaElement | null, elCount: Element | null, maxLength: number, opt_displayMode?: CharCounter.Display | null);
    private noStructuralTyping_closure_goog_ui_charcounter_CharCounter;
    /**
     * Sets the maximum length.
     * @param maxLength The maximum length.
     */
    setMaxLength(maxLength: number): void;
    /**
     * Returns the maximum length.
     * @return The maximum length.
     */
    getMaxLength(): number;
    /**
     * Sets the display mode.
     * @param displayMode The display mode.
     */
    setDisplayMode(displayMode: CharCounter.Display): void;
    /**
     * Returns the display mode.
     * @return The display mode.
     */
    getDisplayMode(): CharCounter.Display;
    /**
     * Checks length of text in input field and updates the counter. Truncates text
     * if the maximum lengths is exceeded.
     */
    checkLength(): void;
    disposeInternal(): void;
}
export declare namespace CharCounter {
    /**
     * Display mode for the char counter.
     */
    enum Display {
        REMAINING = 0,
        INCREMENTAL = 1
    }
}

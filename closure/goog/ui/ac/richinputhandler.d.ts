import { InputHandler } from './inputhandler.js';
/**
 * Class for managing the interaction between an autocomplete object and a
 * text-input or textarea.
 */
export declare class RichInputHandler extends InputHandler {
    /**
     * Class for managing the interaction between an autocomplete object and a
     * text-input or textarea.
     * @param opt_separators Seperators to split multiple entries.
     * @param opt_literals Characters used to delimit text literals.
     * @param opt_multi Whether to allow multiple entries (Default: true).
     * @param opt_throttleTime Number of milliseconds to throttle keyevents with (Default: 150).
     */
    constructor(opt_separators?: string | null, opt_literals?: string | null, opt_multi?: boolean | null, opt_throttleTime?: number | null);
    private noStructuralTyping_closure_goog_ui_ac_richinputhandler_RichInputHandler;
    /**
     * Selects the given rich row.  The row's select(target) method is called.
     * @param row The row to select.
     * @return Whether to suppress the update event.
     */
    selectRow(row: object | null): boolean;
}

import { Disposable } from '../../disposable/disposable.js';
import type { BrowserEvent } from '../../events/browserevent.js';
import type { Event } from '../../events/event.js';
import type { EventTarget } from '../../events/eventtarget.js';
import type { AutoComplete } from './autocomplete.js';
/**
 * Class for managing the interaction between an auto-complete object and a
 * text-input or textarea.
 */
export declare class InputHandler extends Disposable {
    /**
     * Class for managing the interaction between an auto-complete object and a
     * text-input or textarea.
     * @param opt_separators Separators to split multiple entries. If none passed, uses ',' and ';'.
     * @param opt_literals Characters used to delimit text literals.
     * @param opt_multi Whether to allow multiple entries (Default: true).
     * @param opt_throttleTime Number of milliseconds to throttle keyevents with (Default: 150). Use -1 to disable updates on typing. Note that typing the separator will update autocomplete suggestions.
     */
    constructor(opt_separators?: string | null, opt_literals?: string | null, opt_multi?: boolean | null, opt_throttleTime?: number | null);
    private noStructuralTyping_closure_goog_ui_ac_inputhandler_InputHandler;
    /**
     * Standard list separators.
     */
    static STANDARD_LIST_SEPARATORS: string;
    /**
     * Literals for quotes.
     */
    static QUOTE_LITERALS: string;
    /**
     * The AutoComplete instance this inputhandler is associated with.
     */
    ac_: AutoComplete | null;
    /**
     * Attach an instance of an AutoComplete
     * @param ac Autocomplete object.
     */
    attachAutoComplete(ac: AutoComplete | null): void;
    /**
     * Returns the associated autocomplete instance.
     * @return The associated autocomplete instance.
     */
    getAutoComplete(): AutoComplete | null;
    /**
     * Returns the current active element.
     * @return The currently active element.
     */
    getActiveElement(): Element | null;
    /**
     * Returns the value of the current active element.
     * @return The value of the current active element.
     */
    getValue(): string;
    /**
     * Sets the value of the current active element.
     * @param value The new value.
     */
    setValue(value: string): void;
    /**
     * Returns the current cursor position.
     * @return The index of the cursor position.
     */
    getCursorPosition(): number;
    /**
     * Sets the cursor at the given position.
     * @param pos The index of the cursor position.
     */
    setCursorPosition(pos: number): void;
    /**
     * Attaches the input handler to a target element. The target element
     * should be a textarea, input box, or other focusable element with the
     * same interface.
     * @param target An element to attach the input handler to.
     */
    attachInput(target: Element | EventTarget | null): void;
    /**
     * Detaches the input handler from the provided element.
     * @param target An element to detach the input handler from.
     */
    detachInput(target: Element | EventTarget | null): void;
    /**
     * Attaches the input handler to multiple elements.
     * @param var_args Elements to attach the input handler too.
     */
    attachInputs(...var_args: (Element | null)[]): void;
    /**
     * Detaches the input handler from multuple elements.
     * @param var_args Variable arguments for elements to unbind from.
     */
    detachInputs(...var_args: (Element | null)[]): void;
    /**
     * Selects the given row.  Implements the SelectionHandler interface.
     * @param row The row to select.
     * @param opt_multi Should this be treated as a single or multi-token auto-complete?  Overrides previous setting of opt_multi on constructor.
     * @return Whether to suppress the update event.
     */
    selectRow(row: any, opt_multi?: boolean): boolean;
    /**
     * Sets the text of the current token without updating the autocomplete
     * choices.
     * @param tokenText The text for the current token.
     * @param opt_multi Should this be treated as a single or multi-token auto-complete?  Overrides previous setting of opt_multi on constructor.
     */
    protected setTokenText(tokenText: string, opt_multi?: boolean): void;
    disposeInternal(): void;
    /**
     * Sets the entry separator characters.
     * @param separators The separator characters to set.
     * @param opt_defaultSeparators The defaultSeparator character to set.
     */
    setSeparators(separators: string, opt_defaultSeparators?: string): void;
    /**
     * Sets whether to flip the orientation of up & down for hiliting next
     * and previous autocomplete entries.
     * @param upsideDown Whether the orientation is upside down.
     */
    setUpsideDown(upsideDown: boolean): void;
    /**
     * Sets whether auto-completed tokens should be wrapped with whitespace.
     * @param newValue boolean value indicating whether or not auto-completed tokens should be wrapped with whitespace.
     */
    setWhitespaceWrapEntries(newValue: boolean): void;
    /**
     * Sets whether new tokens should be generated from literals.  That is, should
     * hello'world be two tokens, assuming ' is a literal?
     * @param newValue boolean value indicating whether or not new tokens should be generated from literals.
     */
    setGenerateNewTokenOnLiteral(newValue: boolean): void;
    /**
     * Sets the regular expression used to trim the tokens before passing them to
     * the matcher:  every substring that matches the given regular expression will
     * be removed.  This can also be set to null to disable trimming.
     * @param trimmer Regexp to use for trimming or null to disable it.
     */
    setTrimmingRegExp(trimmer: RegExp | null): void;
    /**
     * Sets the regular expression used to check whether the replacement (used to
     * update the text area after a row is selected) ends with a separator. This can
     * be set to null if the input handler should never automatically append a
     * separator to the replacement string.
     * @param separatorCheck Regexp to use for checking whether the replacement ends with a separator.
     */
    setEndsWithSeparatorRegExp(separatorCheck: RegExp | null): void;
    /**
     * Sets whether we will prevent the default input behavior (moving focus to the
     * next focusable  element) on TAB.
     * @param newValue Whether to preventDefault on TAB.
     */
    setPreventDefaultOnTab(newValue: boolean): void;
    /**
     * Sets whether we will prevent highlighted item selection on TAB.
     * @param newValue Whether to prevent selection on TAB.
     */
    setPreventSelectionOnTab(newValue: boolean): void;
    /**
     * Sets whether separators perform autocomplete.
     * @param newValue Whether to autocomplete on separators.
     */
    setSeparatorCompletes(newValue: boolean): void;
    /**
     * Sets whether separators perform autocomplete.
     * @param newValue Whether to autocomplete on separators.
     */
    setSeparatorSelects(newValue: boolean): void;
    /**
     * Gets the time to wait before updating the results. If the update during
     * typing flag is switched on, this delay counts from the last update,
     * otherwise from the last keypress.
     * @return Throttle time in milliseconds.
     */
    getThrottleTime(): number;
    /**
     * Sets whether a row has just been selected.
     * @param justSelected Whether or not the row has just been selected.
     */
    setRowJustSelected(justSelected: boolean): void;
    /**
     * Sets the time to wait before updating the results.
     * @param time New throttle time in milliseconds.
     */
    setThrottleTime(time: number): void;
    /**
     * Gets whether the result list is updated during typing.
     * @return Value of the flag.
     */
    getUpdateDuringTyping(): boolean;
    /**
     * Sets whether the result list should be updated during typing.
     * @param value New value of the flag.
     */
    setUpdateDuringTyping(value: boolean): void;
    /**
     * Handles a key event.
     * @param e Browser event object.
     * @return True if the key event was handled.
     */
    protected handleKeyEvent(e: BrowserEvent | null): boolean;
    protected needKeyUpListener(): boolean;
    /**
     * Handles the key up event. Registered only if needKeyUpListener returns true.
     * @param e The keyup event.
     * @return Whether an action was taken or not.
     */
    protected handleKeyUp(e: Event | null): boolean;
    /**
     * Handles an element getting focus.
     * @param e Browser event object.
     */
    protected handleFocus(e: Event | null): void;
    /**
     * Registers handlers for the active element when it receives focus.
     * @param target The element to focus.
     */
    protected processFocus(target: Element | null): void;
    /**
     * Handles an element blurring.
     * @param opt_e Browser event object.
     */
    protected handleBlur(opt_e?: Event | null): void;
    /**
     * Helper function that does the logic to handle an element blurring.
     */
    protected processBlur(): void;
    /**
     * For subclasses to override to handle the mouse-down event.
     * @param e Browser event object.
     */
    protected handleMouseDown(e: BrowserEvent | null): void;
    /**
     * Checks if an update has occurred and notified the autocomplete of the new
     * token.
     * @param opt_force If true the menu will be forced to update.
     */
    update(opt_force?: boolean): void;
    /**
     * Parses a text area or input box for the currently highlighted token.
     * @return Token to complete.
     */
    protected parseToken(): string;
}

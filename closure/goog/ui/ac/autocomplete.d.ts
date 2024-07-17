import { EventTarget } from '../../events/eventtarget.js';
import { RenderOptions } from './renderoptions.js';
import type { Event } from '../../events/event.js';
/**
 * This is the central manager class for an AutoComplete instance. The matcher
 * can specify disabled rows that should not be hilited or selected by
 * implementing <code>isRowDisabled(row):boolean</code> for each autocomplete
 * row. No row will be considered disabled if this method is not implemented.
 */
export declare class AutoComplete extends EventTarget {
    /**
     * This is the central manager class for an AutoComplete instance. The matcher
     * can specify disabled rows that should not be hilited or selected by
     * implementing <code>isRowDisabled(row):boolean</code> for each autocomplete
     * row. No row will be considered disabled if this method is not implemented.
     * @param matcher A data source and row matcher, implements <code>requestMatchingRows(token, maxMatches, matchCallback)</code>.
     * @param renderer An object that implements <code> isVisible():boolean<br> renderRows(rows:Array, token:string, target:Element);<br> hiliteId(row-id:number);<br> dismiss();<br> dispose(): </code>.
     * @param selectionHandler An object that implements <code> selectRow(row);<br> update(opt_force); </code>.
     */
    constructor(matcher: object | null, renderer: EventTarget | null, selectionHandler: object | null);
    private noStructuralTyping_closure_goog_ui_ac_autocomplete_AutoComplete;
    /**
     * A data-source which provides autocomplete suggestions.
     *
     * TODO(chrishenry): Tighten the type to !AutoComplete.Matcher.
     */
    protected matcher_: object | null;
    /**
     * A handler which interacts with the input DOM element (textfield, textarea,
     * or richedit).
     *
     * TODO(chrishenry): Tighten the type to !Object.
     */
    protected selectionHandler_: object | null;
    /**
     * A renderer to render/show/highlight/hide the autocomplete menu.
     */
    protected renderer_: EventTarget | null;
    /**
     * Currently typed token which will be used for completion.
     */
    protected token_: string | null;
    /**
     * Autocomplete suggestion items.
     */
    protected rows_: any[] | null;
    /**
     * Id of the currently highlighted row.
     */
    protected hiliteId_: number;
    /**
     * Id of the first row in autocomplete menu. Note that new ids are assigned
     * every time new suggestions are fetched.
     *
     * TODO(chrishenry): Figure out what subclass does with this value
     * and whether we should expose a more proper API.
     */
    protected firstRowId_: number;
    /**
     * The target HTML node for displaying.
     */
    protected target_: Element | null;
    getMatcher(): object;
    /**
     * Sets the data source providing the autocomplete suggestions.
     *
     * See constructor documentation for the interface.
     * @param matcher The matcher.
     */
    protected setMatcher(matcher: object): void;
    protected getSelectionHandler(): object;
    getRenderer(): EventTarget | null;
    /**
     * Sets the renderer that renders/shows/highlights/hides the autocomplete
     * menu.
     *
     * See constructor documentation for the expected renderer API.
     * @param renderer The renderer.
     */
    protected setRenderer(renderer: EventTarget | null): void;
    protected getToken(): string | null;
    /**
     * Sets the current token (without changing the rendered autocompletion).
     *
     * NOTE(chrishenry): This method will likely go away when we figure
     * out a better API.
     * @param token The new token.
     */
    protected setTokenInternal(token: string | null): void;
    /**
     *
     * @param index The suggestion index, must be within the interval [0, this.getSuggestionCount()).
     * @return The currently suggested item at the given index (or null if there is none).
     */
    getSuggestion(index: number): object | null;
    getAllSuggestions(): any[];
    getSuggestionCount(): number;
    getHighlightedId(): number;
    /**
     * Generic event handler that handles any events this object is listening to.
     * @param e Event Object.
     */
    handleEvent(e: Event | null): void;
    /**
     * Sets the max number of matches to fetch from the Matcher.
     * @param max Max number of matches.
     */
    setMaxMatches(max: number): void;
    /**
     * Sets whether or not the first row should be highlighted by default.
     * @param autoHilite true iff the first row should be highlighted by default.
     */
    setAutoHilite(autoHilite: boolean): void;
    /**
     * Sets whether or not the up/down arrow can unhilite all rows.
     * @param allowFreeSelect true iff the up arrow can unhilite all rows.
     */
    setAllowFreeSelect(allowFreeSelect: boolean): void;
    /**
     * Sets whether or not selections can wrap around the edges.
     * @param wrap true iff sections should wrap around the edges.
     */
    setWrap(wrap: boolean): void;
    /**
     * Sets whether or not to request new suggestions immediately after completion
     * of a suggestion.
     * @param triggerSuggestionsOnUpdate true iff completion should fetch new suggestions.
     */
    setTriggerSuggestionsOnUpdate(triggerSuggestionsOnUpdate: boolean): void;
    /**
     * Sets the token to match against.  This triggers calls to the Matcher to
     * fetch the matches (up to maxMatches), and then it triggers a call to
     * <code>renderer.renderRows()</code>.
     * @param token The string for which to search in the Matcher.
     * @param opt_fullString Optionally, the full string in the input field.
     */
    setToken(token: string, opt_fullString?: string): void;
    /**
     * Gets the current target HTML node for displaying autocomplete UI.
     * @return The current target HTML node for displaying autocomplete UI.
     */
    getTarget(): Element | null;
    /**
     * Sets the current target HTML node for displaying autocomplete UI.
     * Can be an implementation specific definition of how to display UI in relation
     * to the target node.
     * This target will be passed into  <code>renderer.renderRows()</code>
     * @param target The current target HTML node for displaying autocomplete UI.
     */
    setTarget(target: Element | null): void;
    isOpen(): boolean;
    getRowCount(): number;
    /**
     * Moves the hilite to the next non-disabled row.
     * Calls renderer.hiliteId() when there's something to do.
     * @return Returns true on a successful hilite.
     */
    hiliteNext(): boolean;
    /**
     * Moves the hilite to the previous non-disabled row.  Calls
     * renderer.hiliteId() when there's something to do.
     * @return Returns true on a successful hilite.
     */
    hilitePrev(): boolean;
    /**
     * Hilites the id if it's valid and the row is not disabled, otherwise does
     * nothing.
     * @param id A row id (not index).
     * @return Whether the id was hilited. Returns false if the row is disabled.
     */
    hiliteId(id: number): boolean;
    /**
     * Hilites the index, if it's valid and the row is not disabled, otherwise does
     * nothing.
     * @param index The row's index.
     * @return Whether the index was hilited.
     */
    hiliteIndex(index: number): boolean;
    /**
     * If there are any current matches, this passes the hilited row data to
     * <code>selectionHandler.selectRow()</code>
     * @return Whether there are any current matches.
     */
    selectHilited(): boolean;
    /**
     * Returns whether or not the autocomplete is open and has a highlighted row.
     * @return Whether an autocomplete row is highlighted.
     */
    hasHighlight(): boolean;
    /**
     * Clears out the token, rows, and hilite, and calls
     * <code>renderer.dismiss()</code>
     */
    dismiss(): void;
    /**
     * Call a dismiss after a delay, if there's already a dismiss active, ignore.
     */
    dismissOnDelay(): void;
    /**
     * Cancel the active delayed dismiss if there is one.
     */
    cancelDelayedDismiss(): void;
    disposeInternal(): void;
    /**
     * Renders the rows and adds highlighting.
     * @param rows Set of data that match the given token.
     * @param opt_options If true, keeps the currently hilited (by index) element hilited. If false not. Otherwise a RenderOptions object.
     */
    renderRows(rows: any[], opt_options?: boolean | RenderOptions | null): void;
    /**
     * Gets the index corresponding to a particular id.
     * @param id A unique id for the row.
     * @return A valid index into rows_, or -1 if the id is invalid.
     */
    protected getIndexOfId(id: number): number;
    /**
     * Attach text areas or input boxes to the autocomplete by DOM reference.  After
     * elements are attached to the autocomplete, when a user types they will see
     * the autocomplete drop down.
     * @param var_args Variable args: Input or text area elements to attach the autocomplete too.
     */
    attachInputs(...var_args: (Element | null)[]): void;
    /**
     * Detach text areas or input boxes to the autocomplete by DOM reference.
     * @param var_args Variable args: Input or text area elements to detach from the autocomplete.
     */
    detachInputs(...var_args: (Element | null)[]): void;
    /**
     * Attaches the autocompleter to a text area or text input element
     * with an anchor element. The anchor element is the element the
     * autocomplete box will be positioned against.
     * @param inputElement The input element. May be 'textarea', text 'input' element, or any other element that exposes similar interface.
     * @param anchorElement The anchor element.
     */
    attachInputWithAnchor(inputElement: Element | null, anchorElement: Element | null): void;
    /**
     * Forces an update of the display.
     * @param opt_force Whether to force an update.
     */
    update(opt_force?: boolean): void;
}
export declare namespace AutoComplete {
    /**
     * Events associated with the autocomplete
     */
    enum EventType {
        ROW_HILITE = "rowhilite",
        HILITE = "hilite",
        SELECT = "select",
        DISMISS = "dismiss",
        CANCEL_DISMISS = "canceldismiss",
        UPDATE = "update",
        SUGGESTIONS_UPDATE = "suggestionsupdate"
    }
    type Matcher = {
        'requestMatchingRows': Function | undefined;
        'isRowDisabled': Function | undefined;
    };
}

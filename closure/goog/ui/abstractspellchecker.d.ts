import * as dom from '../dom/dom.js';
import { Event } from '../events/event.js';
import { Coordinate } from '../math/coordinate.js';
import { SpellCheck } from '../spell/spellcheck.js';
import { Component } from './component.js';
import { MenuItem } from './menuitem.js';
import { PopupMenu } from './popupmenu.js';
import type { BrowserEvent } from '../events/browserevent.js';
/**
 * Abstract base class for spell checker editor implementations. Provides basic
 * functionality such as word lookup and caching.
 */
export declare class AbstractSpellChecker extends Component {
    /**
     * Abstract base class for spell checker editor implementations. Provides basic
     * functionality such as word lookup and caching.
     * @param spellCheck Instance of the SpellCheck support object to use. A single instance can be shared by multiple editor components.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(spellCheck: SpellCheck | null, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_abstractspellchecker_AbstractSpellChecker;
    /**
     * Handler to use for caching and lookups.
     */
    protected spellCheck: SpellCheck | null;
    /**
     * Class name for suggestions menu.
     */
    suggestionsMenuClassName: string;
    /**
     * Whether corrected words should be highlighted.
     */
    markCorrected: boolean;
    /**
     * Markers for the text that does not need to be included in the processing.
     *
     * For rich text editor this is a list of strings formatted as
     * tagName.className or className. If both are specified, the element will be
     * excluded if BOTH are matched. If only a className is specified, then we will
     * exclude regions with the className. If only one marker is needed, it may be
     * passed as a string.
     * For plain text editor this is a RegExp that matches the excluded text.
     *
     * Used exclusively by the derived classes
     */
    protected excludeMarker: string[] | string | RegExp | undefined | null;
    getSpellCheck(): SpellCheck | null;
    /**
     * Sets the spell checker used for caching and lookups.
     * @param spellCheck The handler used for caching and lookups.
     */
    setSpellCheck(spellCheck: SpellCheck | null): void;
    /**
     * Sets the handler used for caching and lookups.
     * @param handler The handler used for caching and lookups.
     */
    setHandler(handler: SpellCheck | null): void;
    protected getMenu(): PopupMenu | undefined | null;
    protected getMenuEdit(): MenuItem | undefined | null;
    protected getLastIndex(): number;
    protected getNextIndex(): number;
    /**
     * Sets the marker for the excluded text.
     *
     * {@see AbstractSpellChecker.prototype.excludeMarker}
     * @param marker A RegExp for plain text or class names for the rich text spell checker for the elements to exclude from checking.
     */
    setExcludeMarker(marker: string[] | string | RegExp | null | null): void;
    /**
     * Checks spelling for all text.
     * Should be overridden by implementation.
     */
    check(): void;
    /**
     * Hides correction UI.
     * Should be overridden by implementation.
     */
    resume(): void;
    isVisible(): boolean;
    /**
     * Clears the word to element references map used by replace/ignore.
     */
    protected clearWordElements(): void;
    /**
     * Ignores spelling of word.
     * @param word Word to add.
     */
    ignoreWord(word: string): void;
    /**
     * Replaces word.
     * @param el An element wrapping the word that should be replaced.
     * @param old Word that was replaced.
     * @param word Word to replace with.
     */
    replaceWord(el: Element | null, old: string, word: string): void;
    /**
     * Displays suggestions menu.
     * @param el Element to display menu for.
     * @param opt_pos Position to display menu at relative to the viewport (in client coordinates), or a mouse event.
     */
    showSuggestionsMenu(el: Element | null, opt_pos?: BrowserEvent | Coordinate | null): void;
    /**
     * Initializes suggestions menu. Populates menu with separator and ignore option
     * that are always valid. Suggestions are later added above the separator.
     */
    protected initSuggestionsMenu(): void;
    /**
     * Handles correction menu actions.
     * @param event Action event.
     */
    protected onCorrectionAction(event: Event | null): void;
    /**
     * Removes spell-checker markup and restore the node to text.
     * @param el Word element. MUST have a text node child.
     */
    protected removeMarkup(el: Element | null): void;
    /**
     * Updates element based on word status. Either converts it to a text node, or
     * merges it with the previous or next text node if the status of the world is
     * VALID, in which case the element itself is eliminated.
     * @param el Word element.
     * @param word Word to update status for.
     * @param status Status of word.
     */
    protected updateElement(el: Element | null, word: string, status: SpellCheck.WordStatus | null): void;
    /**
     * Generates unique Ids for spell checker elements.
     * @param opt_id Id to suffix with.
     * @return Unique element id.
     */
    protected makeElementId(opt_id?: number): string;
    /**
     * Returns the span element that matches the given number index.
     * @param index Number index that is used in the element id.
     * @return The matching span element or null if no span matches.
     */
    protected getElementByIndex(index: number): Element | null;
    /**
     * Creates an element for a specified word and stores a reference to it.
     * @param word Word to create element for.
     * @param status Status of word.
     * @return The created element.
     */
    protected createWordElement(word: string, status: SpellCheck.WordStatus | null): HTMLSpanElement;
    /**
     * Stores a reference to word element.
     * @param word The word to store.
     * @param el The element associated with it.
     */
    protected registerWordElement(word: string, el: HTMLSpanElement | null): void;
    /**
     * Returns desired element properties for the specified status.
     * Should be overridden by implementation.
     * @param status Status of word.
     * @return Properties to apply to the element.
     */
    protected getElementProperties(status: SpellCheck.WordStatus | null): object | null;
    disposeInternal(): void;
    /**
     * Precharges local dictionary cache. This is optional, but greatly reduces
     * amount of subsequent churn in the DOM tree because most of the words become
     * known from the very beginning.
     * @param text Text to process.
     * @param words Max number of words to scan.
     * @return number of words actually scanned.
     */
    protected populateDictionary(text: string, words: number): number;
    /**
     * Processes word.
     * Should be overridden by implementation.
     * @param node Node containing word.
     * @param text Word to process.
     * @param status Status of the word.
     */
    protected processWord(node: Node | null, text: string, status: SpellCheck.WordStatus | null): void;
    /**
     * Processes range of text that checks out (contains no unrecognized words).
     * Should be overridden by implementation. May contain words and separators.
     * @param node Node containing text range.
     * @param text text to process.
     */
    protected processRange(node: Node | null, text: string): void;
    /**
     * Starts asynchronous processing mode.
     */
    protected initializeAsyncMode(): void;
    /**
     * Finalizes asynchronous processing mode. Should be called after there is no
     * more text to process and processTextAsync and/or continueAsyncProcessing
     * returned FINISHED.
     */
    protected finishAsyncProcessing(): void;
    /**
     * Blocks processing of spell checker READY events. This is used in dictionary
     * recharge and async mode so that completion is not signaled prematurely.
     */
    protected blockReadyEvents(): void;
    /**
     * Unblocks processing of spell checker READY events. This is used in
     * dictionary recharge and async mode so that completion is not signaled
     * prematurely.
     */
    protected unblockReadyEvents(): void;
    /**
     * Splits text into individual words and blocks of separators. Calls virtual
     * processWord_ and processRange_ methods.
     * @param node Node containing text.
     * @param text Text to process.
     * @return operation result.
     */
    protected processTextAsync(node: Node | null, text: string): AbstractSpellChecker.AsyncResult | null;
    /**
     * Continues processing started by processTextAsync. Calls virtual
     * processWord_ and processRange_ methods.
     * @return operation result.
     */
    protected continueAsyncProcessing(): AbstractSpellChecker.AsyncResult | null;
    /**
     * Navigate keyboard focus in the given direction.
     * @param direction The direction to navigate in.
     * @return Whether the action is handled here.  If not handled here, the initiating event may be propagated.
     */
    protected navigate(direction: AbstractSpellChecker.Direction | null): boolean;
    /**
     * Returns the index of the currently focussed invalid word element. This index
     * starts at one instead of zero.
     * @return the index of the currently focussed element
     */
    protected getFocusedElementIndex(): number;
    /**
     * Sets the index of the currently focussed invalid word element. This index
     * should start at one instead of zero.
     * @param focusElementIndex the index of the currently focussed element
     */
    protected setFocusedElementIndex(focusElementIndex: number): void;
    /**
     * Sets the focus on the provided word element.
     * @param element The word element that should receive focus.
     */
    protected focusOnElement(element: Element | null): void;
}
export declare namespace AbstractSpellChecker {
    /**
     * Constants for representing the direction while navigating.
     */
    enum Direction {
        PREVIOUS = 0,
        NEXT = 1
    }
    /**
     * Constants for the result of asynchronous processing.
     */
    enum AsyncResult {
        PENDING = 1,
        DONE = 2
    }
}

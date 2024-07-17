import * as dom from '../dom/dom.js';
import { SpellCheck } from '../spell/spellcheck.js';
import { AbstractSpellChecker } from './abstractspellchecker.js';
import type { BrowserEvent } from '../events/browserevent.js';
import type { Event } from '../events/event.js';
/**
 * Plain text spell checker implementation.
 */
export declare class PlainTextSpellChecker extends AbstractSpellChecker {
    /**
     * Plain text spell checker implementation.
     * @param handler Instance of the SpellCheckHandler support object to use. A single instance can be shared by multiple editor components.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(handler: SpellCheck | null, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_plaintextspellchecker_PlainTextSpellChecker;
    /**
     * Class name for invalid words.
     */
    invalidWordClassName: string;
    /**
     * Class name for corrected words.
     */
    correctedWordClassName: string;
    /**
     * Class name for correction pane.
     */
    correctionPaneClassName: string;
    /**
     * Creates the initial DOM representation for the component.
     */
    createDom(): void;
    enterDocument(): void;
    exitDocument(): void;
    /**
     * Initializes suggestions menu. Populates menu with separator and ignore option
     * that are always valid. Suggestions are later added above the separator.
     */
    initSuggestionsMenu(): void;
    /**
     * Checks spelling for all text and displays correction UI.
     */
    check(): void;
    /**
     * Processes word.
     * @param node Node containing word.
     * @param word Word to process.
     * @param status Status of word.
     */
    processWord(node: Node | null, word: string, status: SpellCheck.WordStatus | null): void;
    /**
     * Processes range of text - recognized words and separators.
     * @param node Node containing separator.
     * @param text text to process.
     */
    processRange(node: Node | null, text: string): void;
    /**
     * Hides correction UI.
     */
    resume(): void;
    /**
     * Returns desired element properties for the specified status.
     * @param status Status of word.
     * @return Properties to apply to word element.
     */
    getElementProperties(status: SpellCheck.WordStatus | null): object;
    disposeInternal(): void;
    /**
     * Handles key down for overlay.
     * @param e The browser event.
     * @return The handled value.
     */
    handleOverlayKeyEvent(e: BrowserEvent | null): boolean;
    /**
     * Handles correction menu actions.
     * @param event Action event.
     */
    onCorrectionAction(event: Event | null): void;
}

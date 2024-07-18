import * as dom from '../dom/dom.js';
import { SpellCheck } from '../spell/spellcheck.js';
import { AbstractSpellChecker } from './abstractspellchecker.js';
import type { BrowserEvent } from '../events/browserevent.js';
/**
 * Rich text spell checker implementation.
 */
export declare class RichTextSpellChecker extends AbstractSpellChecker {
    /**
     * Rich text spell checker implementation.
     * @param handler Instance of the SpellCheckHandler support object to use. A single instance can be shared by multiple editor components.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(handler: SpellCheck | null, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_richtextspellchecker_RichTextSpellChecker;
    /**
     * Class name for word spans.
     */
    wordClassName: string;
    /**
     * Tag name portion of the marker for the text that does not need to be checked
     * for spelling.
     */
    excludeTags: (string | undefined)[] | null;
    /**
     * CSS Style text for invalid words. As it's set inside the rich edit iframe
     * classes defined in the parent document are not available, thus the style is
     * set inline.
     */
    invalidWordCssText: string;
    /**
     * Creates the initial DOM representation for the component.
     */
    createDom(): void;
    /**
     * Decorates the element for the UI component.
     * @param element Element to decorate.
     */
    decorateInternal(element: Element | null): void;
    enterDocument(): void;
    initSuggestionsMenu(): void;
    /**
     * Checks spelling for all text and displays correction UI.
     */
    check(): void;
    setExcludeMarker(marker: any): void;
    /**
     * Processes word.
     * @param node Node containing word.
     * @param word Word to process.
     * @param status Status of the word.
     */
    processWord(node: Node | null, word: string, status: SpellCheck.WordStatus | null): void;
    /**
     * Processes recognized text and separators.
     * @param node Node containing separator.
     * @param text Text to process.
     */
    processRange(node: Node | null, text: string): void;
    getElementByIndex(id: any): Element;
    /**
     * Updates or replaces element based on word status.
     * @param el Word element.
     * @param word Word to update status for.
     * @param status Status of word.
     */
    updateElement(el: Element | null, word: string, status: SpellCheck.WordStatus | null): void;
    /**
     * Hides correction UI.
     */
    resume(): void;
    /**
     * Returns desired element properties for the specified status.
     * @param status Status of the word.
     * @return Properties to apply to word element.
     */
    getElementProperties(status: SpellCheck.WordStatus | null): object;
    disposeInternal(): void;
    /**
     * Returns whether the editor node is an iframe.
     * @return true the editor node is an iframe, otherwise false.
     */
    protected isEditorIframe(): boolean;
    /**
     * Handles keyboard events inside the editor to allow keyboard navigation
     * between misspelled words and activation of the suggestion menu.
     * @param e the key event.
     * @return The handled value.
     */
    protected handleRootNodeKeyEvent(e: BrowserEvent | null): boolean;
    onCorrectionAction(event: any): void;
    focusOnElement(element: any): void;
}

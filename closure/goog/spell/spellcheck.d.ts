import { Event } from '../events/event.js';
import { EventTarget } from '../events/eventtarget.js';
/**
 * Support class for spell checker components. Provides basic functionality
 * such as word lookup and caching.
 */
export declare class SpellCheck extends EventTarget {
    /**
     * Support class for spell checker components. Provides basic functionality
     * such as word lookup and caching.
     * @param opt_lookupFunction Function to use for word lookup. Must accept an array of words, an object reference and a callback function as parameters. It must also call the callback function (as a method on the object), once ready, with an array containing the original words, their spelling status and optionally an array of suggestions.
     * @param opt_language Content language.
     */
    constructor(opt_lookupFunction?: () => any, opt_language?: string);
    private noStructuralTyping_closure_goog_spell_spellcheck_SpellCheck;
    /**
     * Regular expression for identifying word boundaries.
     */
    static WORD_BOUNDARY_CHARS: string;
    /**
     * Regular expression for identifying word boundaries.
     */
    static WORD_BOUNDARY_REGEX: RegExp | null;
    /**
     * Regular expression for splitting a string into individual words and blocks of
     * separators. Matches zero or one word followed by zero or more separators.
     */
    static SPLIT_REGEX: RegExp | null;
    /**
     * Sets the lookup function.
     * @param f Function to use for word lookup. Must accept an array of words, an object reference and a callback function as parameters. It must also call the callback function (as a method on the object), once ready, with an array containing the original words, their spelling status and optionally an array of suggestions.
     */
    setLookupFunction(f: Function | null): void;
    /**
     * Sets language.
     * @param opt_language Content language.
     */
    setLanguage(opt_language?: string): void;
    /**
     * Returns language.
     * @return Content language.
     */
    getLanguage(): string;
    /**
     * Checks spelling for a block of text.
     * @param text Block of text to spell check.
     */
    checkBlock(text: string): void;
    /**
     * Checks spelling for a single word. Returns the status of the supplied word,
     * or UNKNOWN if it's not cached. If it's not cached the word is added to a
     * queue and checked with the verification implementation with a short delay.
     * @param word Word to check spelling of.
     * @return The status of the supplied word, or UNKNOWN if it's not cached.
     */
    checkWord(word: string): SpellCheck.WordStatus | null;
    /**
     * Processes pending words unless a lookup operation has already been queued or
     * is in progress.
     */
    processPending(): void;
    /**
     * Sets a words spelling status.
     * @param word Word to set status for.
     * @param status Status of word.
     * @param opt_suggestions Suggestions. Example: obj.setWordStatus('word', VALID); obj.setWordStatus('wrod', INVALID, ['word', 'wood', 'rod']);.
     */
    setWordStatus(word: string, status: SpellCheck.WordStatus | null, opt_suggestions?: string[] | null): void;
    /**
     * Returns suggestions for the given word.
     * @param word Word to get suggestions for.
     * @return An array of suggestions for the given word.
     */
    getSuggestions(word: string): string[] | null;
}
export declare namespace SpellCheck {
    /**
     * Constants for event names
     */
    enum EventType {
        READY = "ready",
        ERROR = "error",
        WORD_CHANGED = "wordchanged"
    }
    /**
     * Codes representing the status of an individual word.
     */
    enum WordStatus {
        UNKNOWN = 0,
        VALID = 1,
        INVALID = 2,
        IGNORED = 3,
        CORRECTED = 4
    }
    /**
     * Fields for word array in cache.
     */
    enum CacheIndex {
        STATUS = 0,
        SUGGESTIONS = 1
    }
    /**
     * Object representing a word changed event. Fired when the status of a word
     * changes.
     */
    class WordChangedEvent extends Event {
        /**
         * Object representing a word changed event. Fired when the status of a word
         * changes.
         * @param target Spellcheck object initiating event.
         * @param word Word to set status for.
         * @param status Status of word.
         */
        constructor(target: SpellCheck | null, word: string, status: SpellCheck.WordStatus | null);
        private noStructuralTyping_closure_goog_spell_spellcheck_WordChangedEvent;
        /**
         * Word the status has changed for.
         */
        word: string;
        /**
         * New status
         */
        status: SpellCheck.WordStatus | null;
    }
}

import { DebugWindow } from './debugwindow.js';
import { SafeStyleSheet } from '../html/safestylesheet.js';
/**
 * Provides a Fancy extension to the DebugWindow class.  Allows filtering based
 * on loggers and levels.
 */
export declare class FancyWindow extends DebugWindow {
    /**
     * Provides a Fancy extension to the DebugWindow class.  Allows filtering based
     * on loggers and levels.
     * @param opt_identifier Idenitifier for this logging class.
     * @param opt_prefix Prefix pre-pended to messages.
     */
    constructor(opt_identifier?: string, opt_prefix?: string);
    private noStructuralTyping_closure_goog_debug_fancywindow_FancyWindow;
    /**
     * Constant indicating if we are able to use localStorage to persist filters
     */
    static HAS_LOCAL_STORE: boolean;
    /**
     * Constant defining the prefix to use when storing log levels
     */
    static LOCAL_STORE_PREFIX: string;
    writeBufferToLog(): void;
    writeInitialDocument(): void;
    getStyleRules(): SafeStyleSheet;
}

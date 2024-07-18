import * as debugFormatter from './formatter.js';
import { SafeHtml } from '../html/safehtml.js';
import { SafeStyleSheet } from '../html/safestylesheet.js';
import * as log from '../log/log.js';
/**
 * Provides a debug DebugWindow that is bound to the log.Logger.
 * It handles log messages and writes them to the DebugWindow. This doesn't
 * provide a lot of functionality that the old Gmail logging infrastructure
 * provided like saving debug logs for exporting to the server. Now that we
 * have an event-based logging infrastructure, we can encapsulate that
 * functionality in a separate class.
 */
export declare class DebugWindow {
    /**
     * Provides a debug DebugWindow that is bound to the log.Logger.
     * It handles log messages and writes them to the DebugWindow. This doesn't
     * provide a lot of functionality that the old Gmail logging infrastructure
     * provided like saving debug logs for exporting to the server. Now that we
     * have an event-based logging infrastructure, we can encapsulate that
     * functionality in a separate class.
     * @param opt_identifier Identifier for this logging class.
     * @param opt_prefix Prefix prepended to messages.
     */
    constructor(opt_identifier?: string, opt_prefix?: string);
    private noStructuralTyping_closure_goog_debug_debugwindow_DebugWindow;
    /**
     * Identifier for this logging class
     */
    protected identifier: string;
    /**
     * Array used to buffer log output
     */
    protected outputBuffer: SafeHtml[];
    /**
     * Max number of messages to be saved
     */
    static MAX_SAVED: number;
    /**
     * How long to keep the cookies for in milliseconds
     */
    static COOKIE_TIME: number;
    /**
     * HTML string printed when the debug window opens
     */
    protected welcomeMessage: string;
    /**
     * Reference to debug window
     */
    protected win: Window | null;
    /**
     * Timestamp for the last time the log was written to.
     */
    protected lastCall: number;
    /**
     * Sets the welcome message shown when the window is first opened or reset.
     * @param msg An HTML string.
     */
    setWelcomeMessage(msg: string): void;
    /**
     * Initializes the debug window.
     */
    init(): void;
    /**
     * Whether the DebugWindow is enabled. When the DebugWindow is enabled, it
     * tries to keep its window open and logs all messages to the window.  When the
     * DebugWindow is disabled, it stops logging messages to its window.
     * @return Whether the DebugWindow is enabled.
     */
    isEnabled(): boolean;
    /**
     * Sets whether the DebugWindow is enabled. When the DebugWindow is enabled, it
     * tries to keep its window open and log all messages to the window. When the
     * DebugWindow is disabled, it stops logging messages to its window. The
     * DebugWindow also saves this state to a cookie so that it's persisted across
     * application refreshes.
     * @param enable Whether the DebugWindow is enabled.
     */
    setEnabled(enable: boolean): void;
    /**
     * Sets whether the debug window should be force enabled when a severe log is
     * encountered.
     * @param enableOnSevere Whether to enable on severe logs..
     */
    setForceEnableOnSevere(enableOnSevere: boolean): void;
    /**
     * Whether we are currently capturing logger output.
     * @return whether we are currently capturing logger output.
     */
    isCapturing(): boolean;
    /**
     * Sets whether we are currently capturing logger output.
     * @param capturing Whether to capture logger output.
     */
    setCapturing(capturing: boolean): void;
    /**
     * Gets the formatter for outputting to the debug window. The default formatter
     * is an instance of debugFormatter.HtmlFormatter
     * @return The formatter in use.
     */
    getFormatter(): debugFormatter.Formatter | null;
    /**
     * Sets the formatter for outputting to the debug window.
     * @param formatter The formatter to use.
     */
    setFormatter(formatter: debugFormatter.Formatter | null): void;
    /**
     * Adds a separator to the debug window.
     */
    addSeparator(): void;
    hasActiveWindow(): boolean;
    /**
     * Clears the contents of the debug window
     */
    protected clear(): void;
    /**
     * Adds a log record.
     * @param logRecord the LogRecord.
     */
    addLogRecord(logRecord: log.LogRecord | null): void;
    /**
     * Write to the log and maybe scroll into view.
     */
    protected writeBufferToLog(): void;
    /**
     * Writes all saved messages to the DebugWindow.
     */
    protected writeSavedMessages(): void;
    getStyleRules(): SafeStyleSheet;
    /**
     * Writes the initial HTML of the debug window.
     */
    protected writeInitialDocument(): void;
    /**
     *
     * @param identifier Identifier for logging class.
     * @return Whether the DebugWindow is enabled.
     */
    static isEnabled(identifier: string): boolean;
    /**
     * Adds a logger name to be filtered.
     * @param loggerName the logger name to add.
     */
    addFilter(loggerName: string): void;
    /**
     * Removes a logger name to be filtered.
     * @param loggerName the logger name to remove.
     */
    removeFilter(loggerName: string): void;
    /**
     * Modify the size of the circular buffer. Allows the log to retain more
     * information while the window is closed.
     * @param size New size of the circular buffer.
     */
    resetBufferWithNewSize(size: number): void;
}

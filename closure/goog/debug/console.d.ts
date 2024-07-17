import * as formatter from './formatter.js';
import * as log from '../log/log.js';
/**
 * Create and install a log handler that logs to window.console if available
 */
export declare class Console {
    /**
     * Create and install a log handler that logs to window.console if available
     */
    constructor();
    private noStructuralTyping_closure_goog_debug_console_Console;
    /**
     * Returns the text formatter used by this console
     * @return The text formatter.
     */
    getFormatter(): formatter.TextFormatter;
    /**
     * Sets whether we are currently capturing logger output.
     * @param capturing Whether to capture logger output.
     */
    setCapturing(capturing: boolean): void;
    /**
     * Adds a log record.
     * @param logRecord The log entry.
     */
    addLogRecord(logRecord: log.LogRecord | null): void;
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
     * Global console logger instance
     */
    static instance: Console | null;
    /**
     * Sets the console to which to log.
     * @param console The console to which to log.
     */
    static setConsole(console: object): void;
    /**
     * Install the console and start capturing if "Debug=true" is in the page URL
     */
    static autoInstall(): void;
    /**
     * Show an alert with all of the captured debug information.
     * Information is only captured if console is not available
     */
    static show(): void;
}

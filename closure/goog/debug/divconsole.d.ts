import * as debugFormatter from './formatter.js';
import type { LogRecord } from '../log/log.js';
/**
 * A class for visualising logger calls in a div element.
 */
export declare class DivConsole {
    /**
     * A class for visualising logger calls in a div element.
     * @param element The element to append to.
     */
    constructor(element: Element | null);
    private noStructuralTyping_closure_goog_debug_divconsole_DivConsole;
    /**
     * Installs styles for the log messages and its div
     */
    installStyles(): void;
    /**
     * Sets whether we are currently capturing logger output.
     * @param capturing Whether to capture logger output.
     */
    setCapturing(capturing: boolean): void;
    /**
     * Adds a log record.
     * @param logRecord The log entry.
     */
    addLogRecord(logRecord: LogRecord | null): void;
    /**
     * Gets the formatter for outputting to the console. The default formatter
     * is an instance of debugFormatter.HtmlFormatter
     * @return The formatter in use.
     */
    getFormatter(): debugFormatter.Formatter;
    /**
     * Sets the formatter for outputting to the console.
     * @param formatter The formatter to use.
     */
    setFormatter(formatter: debugFormatter.HtmlFormatter | null): void;
    /**
     * Adds a separator to the debug window.
     */
    addSeparator(): void;
    /**
     * Clears the console.
     */
    clear(): void;
}

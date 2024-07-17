import { RelativeTimeProvider } from './relativetimeprovider.js';
import { SafeHtml } from '../html/safehtml.js';
import type { LogRecord } from '../log/log.js';
/**
 * Base class for Formatters. A Formatter is used to format a LogRecord into
 * something that can be displayed to the user.
 */
export declare class Formatter {
    /**
     * Base class for Formatters. A Formatter is used to format a LogRecord into
     * something that can be displayed to the user.
     * @param opt_prefix The prefix to place before text records.
     */
    constructor(opt_prefix?: string);
    private noStructuralTyping_closure_goog_debug_formatter_Formatter;
    /**
     * Whether to append newlines to the end of formatted log records.
     */
    appendNewline: boolean;
    /**
     * Whether to show absolute time in the DebugWindow.
     */
    showAbsoluteTime: boolean;
    /**
     * Whether to show relative time in the DebugWindow.
     */
    showRelativeTime: boolean;
    /**
     * Whether to show the logger name in the DebugWindow.
     */
    showLoggerName: boolean;
    /**
     * Whether to show the logger exception text.
     */
    showExceptionText: boolean;
    /**
     * Whether to show the severity level.
     */
    showSeverityLevel: boolean;
    /**
     * Formats a record.
     * @param logRecord the logRecord to format.
     * @return The formatted string.
     */
    formatRecord(logRecord: LogRecord | null): string;
    /**
     * Formats a record as SafeHtml.
     * @param logRecord the logRecord to format.
     * @return The formatted string as SafeHtml.
     */
    formatRecordAsHtml(logRecord: LogRecord | null): SafeHtml;
    /**
     * Sets the start time provider. By default, this is the default instance
     * but can be changed.
     * @param provider The provider to use.
     */
    setStartTimeProvider(provider: RelativeTimeProvider | null): void;
    /**
     * Returns the start time provider. By default, this is the default instance
     * but can be changed.
     * @return The start time provider.
     */
    getStartTimeProvider(): RelativeTimeProvider | null;
    /**
     * Resets the start relative time.
     */
    resetRelativeTimeStart(): void;
}
/**
 * Formatter that returns formatted html. See formatRecord for the classes
 * it uses for various types of formatted output.
 */
export declare class HtmlFormatter extends Formatter {
    /**
     * Formatter that returns formatted html. See formatRecord for the classes
     * it uses for various types of formatted output.
     * @param opt_prefix The prefix to place before text records.
     */
    constructor(opt_prefix?: string);
    private noStructuralTyping_closure_goog_debug_formatter_HtmlFormatter;
    /**
     * Exposes an exception that has been caught by a try...catch and outputs the
     * error as HTML with a stack trace.
     * @param err Error object or string.
     * @param fn If provided, when collecting the stack trace all frames above the topmost call to this function, including that call, will be left out of the stack trace.
     * @return Details of exception, as HTML.
     */
    static exposeException(err: any, fn?: Function | null): string;
    /**
     * Exposes an exception that has been caught by a try...catch and outputs the
     * error with a stack trace.
     * @param err Error object or string.
     * @param fn If provided, when collecting the stack trace all frames above the topmost call to this function, including that call, will be left out of the stack trace.
     * @return Details of exception.
     */
    static exposeExceptionAsHtml(err: any, fn?: Function | null): SafeHtml;
    /**
     * Whether to show the logger exception text
     */
    showExceptionText: boolean;
    /**
     * Formats a record
     * @param logRecord the logRecord to format.
     * @return The formatted string as html.
     */
    formatRecord(logRecord: LogRecord | null): string;
    /**
     * Formats a record.
     * @param logRecord the logRecord to format.
     * @return The formatted string as SafeHtml.
     */
    formatRecordAsHtml(logRecord: LogRecord | null): SafeHtml;
}
/**
 * Formatter that returns formatted plain text
 */
export declare class TextFormatter extends Formatter {
    /**
     * Formatter that returns formatted plain text
     * @param opt_prefix The prefix to place before text records.
     */
    constructor(opt_prefix?: string);
    private noStructuralTyping_closure_goog_debug_formatter_TextFormatter;
    /**
     * Formats a record as text
     * @param logRecord the logRecord to format.
     * @return The formatted string.
     */
    formatRecord(logRecord: LogRecord | null): string;
    /**
     * Formats a record as text
     * @param logRecord the logRecord to format.
     * @return The formatted string as SafeHtml. This is just an HTML-escaped version of the text obtained from formatRecord().
     */
    formatRecordAsHtml(logRecord: LogRecord | null): SafeHtml;
}

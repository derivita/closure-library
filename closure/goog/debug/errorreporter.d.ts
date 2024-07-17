import { Event } from '../events/event.js';
import { EventTarget } from '../events/eventtarget.js';
/**
 * Constructs an error reporter. Internal Use Only. To install an error
 * reporter see the {@see #install} method below.
 */
export declare class ErrorReporter extends EventTarget {
    /**
     * Constructs an error reporter. Internal Use Only. To install an error
     * reporter see the {@see #install} method below.
     * @param handlerUrl The URL to which all errors will be reported.
     * @param opt_contextProvider When a report is to be sent to the server, this method will be called, and given an opportunity to modify the context object before submission to the server.
     * @param opt_noAutoProtect Whether to automatically add handlers for onerror and to protect entry points.  If apps have other error reporting facilities, it may make sense for them to set these up themselves and use the ErrorReporter just for transmission of reports.
     */
    constructor(handlerUrl: string, opt_contextProvider?: () => any, opt_noAutoProtect?: boolean);
    private noStructuralTyping_closure_goog_debug_errorreporter_ErrorReporter;
    static ALLOW_AUTO_PROTECT: boolean;
    /**
     * Installs an error reporter to catch all JavaScript errors raised.
     * @param loggingUrl The URL to which the errors caught will be reported.
     * @param opt_contextProvider When a report is to be sent to the server, this method will be called, and given an opportunity to modify the context object before submission to the server.
     * @param opt_noAutoProtect Whether to automatically add handlers for onerror and to protect entry points.  If apps have other error reporting facilities, it may make sense for them to set these up themselves and use the ErrorReporter just for transmission of reports.
     * @return The error reporter.
     */
    static install(loggingUrl: string, opt_contextProvider?: () => any, opt_noAutoProtect?: boolean): ErrorReporter;
    /**
     * Default implementation of XHR sender interface.
     * @param uri URI to make request to.
     * @param method Send method.
     * @param content Post data.
     * @param opt_headers Map of headers to add to the request.
     */
    static defaultXhrSender(uri: string, method: string, content: string, opt_headers?: object | Map<string, string> | null): void;
    /**
     * Installs exception protection for an entry point function in addition
     * to those that are protected by default.
     * Has no effect in IE because window.onerror is used for reporting
     * exceptions in that case.
     * @param fn An entry point function to be protected.
     * @return A protected wrapper function that calls the entry point function or null if the entry point could not be protected.
     */
    protectAdditionalEntryPoint(this: ErrorReporter, fn: Function): Function | null;
    /**
     * Add headers to the logging url.
     * @param loggingHeaders Extra headers to send to the logging URL.
     */
    setLoggingHeaders(loggingHeaders: object | Map<string, string> | null): void;
    /**
     * Set the function used to send error reports to the server.
     * @param xhrSender If provided, this will be used to send a report to the server instead of the default method. The function will be given the URI, HTTP method request content, and (optionally) request headers to be added.
     */
    setXhrSender(xhrSender: () => any): void;
    /**
     * Handler for caught exceptions. Sends report to the LoggingServlet and
     * notifies any listeners.
     * @param e The exception.
     * @param opt_context Context values to optionally include in the error report.
     */
    handleException(e: object | null, opt_context?: {
        [key: string]: string;
    }): void;
    /**
     * Sends an error report to the logging URL.  This will not consult the context
     * provider, the report will be sent exactly as specified.
     * @param message Error description.
     * @param fileName URL of the JavaScript file with the error.
     * @param line Line number of the error.
     * @param opt_trace Call stack trace of the error.
     * @param opt_context Context information to include in the request.
     */
    sendErrorReport(message: string, fileName: string, line: number, opt_trace?: string, opt_context?: {
        [key: string]: string;
    }): void;
    /**
     *
     * @param prefix The prefix to appear prepended to all context variables in the error report body.
     */
    setContextPrefix(prefix: string): void;
    /**
     *
     * @param limit Size in bytes to begin truncating POST body.  Set to null to prevent truncation.  The limit must be >= 0.
     */
    setTruncationLimit(limit: number | null): void;
    /**
     *
     * @param urlArgs Set of key-value pairs to append to handlerUrl_ before sending XHR.
     */
    setAdditionalArguments(urlArgs: {
        [key: string]: string;
    }): void;
    disposeInternal(): void;
}
export declare namespace ErrorReporter {
    /**
     * Event broadcast when an exception is logged.
     */
    class ExceptionEvent extends Event {
        /**
         * Event broadcast when an exception is logged.
         * @param error The exception that was was reported.
         * @param context The context values sent to the server alongside this error.
         */
        constructor(error: Error | null, context: {
            [key: string]: string;
        });
        private noStructuralTyping_closure_goog_debug_errorreporter_ExceptionEvent;
        /**
         * The error that was reported.
         */
        error: Error | null;
        /**
         * Context values sent to the server alongside this report.
         */
        context: {
            [key: string]: string;
        };
        /**
         * Event type for notifying of a logged exception.
         */
        static TYPE: string;
    }
}

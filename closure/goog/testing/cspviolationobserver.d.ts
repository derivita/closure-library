/**
 * A class for watching Content Security Policy violation reports.
 */
export declare class CspViolationObserver {
    /**
     * A class for watching Content Security Policy violation reports.
     */
    constructor();
    private noStructuralTyping_closure_goog_testing_cspviolationobserver_CspViolationObserver;
    /**
     * Starts listening for CSP reports.
     */
    start(): void;
    /**
     * Stops listening for violation reports and returns all reports captured so
     * far.
     */
    stop(): Report[];
    /**
     * If called with false, violation reports will no longer be captured and empty
     * arrays will be returned from stop().
     */
    setEnabled(enabled: boolean): void;
    /**
     * Returns previously generated reports.
     */
    static getBufferedReports(): Report[];
    /**
     * Formats the given list of reports as a string.
     */
    static formatReports(reports: Report[]): string;
}

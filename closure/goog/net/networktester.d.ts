import { Uri } from '../uri/uri.js';
/**
 * Creates an instance of NetworkTester which can be used to test
 * for internet connectivity by seeing if an image can be loaded from
 * google.com. It can also be tested with other URLs.
 */
export declare class NetworkTester {
    /**
     * Creates an instance of NetworkTester which can be used to test
     * for internet connectivity by seeing if an image can be loaded from
     * google.com. It can also be tested with other URLs.
     * @param callback Callback that is called when the test completes. The callback takes a single boolean parameter. True indicates the URL was reachable, false indicates it wasn't.
     * @param opt_handler Handler object for the callback.
     * @param opt_uri URI to use for testing.
     */
    constructor(callback: Function | null, opt_handler?: object | null, opt_uri?: Uri | null);
    private noStructuralTyping_closure_goog_net_networktester_NetworkTester;
    /**
     * Default timeout
     */
    static DEFAULT_TIMEOUT_MS: number;
    /**
     * Returns the timeout in milliseconds.
     * @return Timeout in milliseconds.
     */
    getTimeout(): number;
    /**
     * Sets the timeout in milliseconds.
     * @param timeoutMs Timeout in milliseconds.
     */
    setTimeout(timeoutMs: number): void;
    /**
     * Returns the numer of retries to attempt.
     * @return Number of retries to attempt.
     */
    getNumRetries(): number;
    /**
     * Sets the timeout in milliseconds.
     * @param retries Number of retries to attempt.
     */
    setNumRetries(retries: number): void;
    /**
     * Returns the pause between retries in milliseconds.
     * @return Pause between retries in milliseconds.
     */
    getPauseBetweenRetries(): number;
    /**
     * Sets the pause between retries in milliseconds.
     * @param pauseMs Pause between retries in milliseconds.
     */
    setPauseBetweenRetries(pauseMs: number): void;
    /**
     * Returns the uri to use for the test.
     * @return The uri for the test.
     */
    getUri(): Uri | null;
    /**
     * Returns the current attempt count.
     * @return The attempt count.
     */
    getAttemptCount(): number;
    /**
     * Sets the uri to use for the test.
     * @param uri The uri for the test.
     */
    setUri(uri: Uri | null): void;
    /**
     * Returns whether the tester is currently running.
     * @return True if it's running, false if it's not running.
     */
    isRunning(): boolean;
    /**
     * Starts the process of testing the network.
     */
    start(): void;
    /**
     * Stops the testing of the network. This is a noop if not running.
     */
    stop(): void;
    /**
     * Handles a successful or failed result.
     * @param succeeded Whether the image load succeeded.
     */
    onResult(succeeded: boolean): void;
}

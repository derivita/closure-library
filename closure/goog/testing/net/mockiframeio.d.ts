import { EventTarget } from '../../events/eventtarget.js';
import { ErrorCode } from '../../net/errorcode.js';
import { TestQueue } from '../testqueue.js';
import type { Uri } from '../../uri/uri.js';
import type { Map } from '../../structs/map.js';
/**
 * Mock implementation of IframeIo. This doesn't provide a mock
 * implementation for all cases, but it's not too hard to add them as needed.
 */
export declare class MockIFrameIo extends EventTarget {
    /**
     * Mock implementation of IframeIo. This doesn't provide a mock
     * implementation for all cases, but it's not too hard to add them as needed.
     * @param testQueue Test queue for inserting test events.
     */
    constructor(testQueue: TestQueue | null);
    private noStructuralTyping_closure_goog_testing_net_mockiframeio_MockIFrameIo;
    /**
     * Simulates the iframe send.
     * @param uri Uri of the request.
     * @param opt_method Default is GET, POST uses a form to submit the request.
     * @param opt_noCache Append a timestamp to the request to avoid caching.
     * @param opt_data Map of key-value pairs.
     */
    send(uri: Uri | string | null, opt_method?: string, opt_noCache?: boolean, opt_data?: object | Map | null): void;
    /**
     * Simulates the iframe send from a form.
     * @param form Form element used to send the request to the server.
     * @param opt_uri Uri to set for the destination of the request, by default the uri will come from the form.
     * @param opt_noCache Append a timestamp to the request to avoid caching.
     */
    sendFromForm(form: Element | null, opt_uri?: string, opt_noCache?: boolean): void;
    /**
     * Simulates aborting the current Iframe request.
     * @param opt_failureCode Optional error code to use - defaults to ABORT.
     */
    abort(opt_failureCode?: ErrorCode | null): void;
    /**
     * Simulates receive of incremental data.
     * @param data Data.
     */
    simulateIncrementalData(data: object | null): void;
    /**
     * Simulates the iframe is done.
     * @param errorCode The error code for any error that should be simulated.
     */
    simulateDone(errorCode: ErrorCode | null): void;
    /**
     * Simulates the IFrame is ready for the next request.
     */
    simulateReady(): void;
    isComplete(): boolean;
    isSuccess(): boolean;
    isActive(): boolean;
    /**
     * Returns the last response text (i.e. the text content of the iframe).
     * Assumes plain text!
     * @return Result from the server.
     */
    getResponseText(): string;
    /**
     * Parses the content as JSON. This is a safe parse and may throw an error
     * if the response is malformed.
     * @return The parsed content.
     */
    getResponseJson(): object;
    /**
     * Get the uri of the last request.
     * @return Uri of last request.
     */
    getLastUri(): Uri | null;
    /**
     * Gets the last error code.
     * @return Last error code.
     */
    getLastErrorCode(): ErrorCode | null;
    /**
     * Gets the last error message.
     * @return Last error message.
     */
    getLastError(): string;
    /**
     * Gets the last custom error.
     * @return Last custom error.
     */
    getLastCustomError(): object | null;
    /**
     * Sets the callback function used to check if a loaded IFrame is in an error
     * state.
     * @param fn Callback that expects a document object as it's single argument.
     */
    setErrorChecker(fn: Function | null): void;
    /**
     * Gets the callback function used to check if a loaded IFrame is in an error
     * state.
     * @return A callback that expects a document object as it's single argument.
     */
    getErrorChecker(): Function | null;
}

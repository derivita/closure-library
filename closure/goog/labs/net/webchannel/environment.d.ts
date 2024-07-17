/**
 * History:
 *
 * IE11 is still using Trident, the traditional engine for IE.
 * Edge is using EdgeHTML, a fork of Trident. We are seeing the same issue
 * on IE-11 (reported in 2017), so treat IE the same as Edge for now.
 *
 * We used to do polling for Opera (only) with an 250ms interval, because Opera
 * only fires readyState == INTERACTIVE once. Opera switched to WebKit in 2013,
 * and then to Blink (chrome).
 *
 * TODO(user): check the raw UA string to keep polling for old, mobile operas
 * that may still be affected. For old Opera, double the polling interval
 * to 250ms.
 * @return True if polling is required with XHR.
 */
export declare function isPollingRequired(): boolean;
/**
 * How often to poll (in MS) for changes to responseText in browsers that don't
 * fire onreadystatechange during incremental loading of the response body.
 * @return The polling interval (MS) for the current U-A; or undefined if polling is not supposed to be enabled.
 */
export declare function getPollingInterval(): number | undefined;
/**
 * For Fetch/upload OT, make three requests against the server endpoint.
 * POST requests contain only dummy payload.
 *
 * https://developers.chrome.com/origintrials/#/view_trial/3524066708417413121
 *
 * This function is expected to be called from background during the handshake.
 * Exceptions will be logged by the caller.
 *
 * No stats or logs are collected on the client-side. To be disabled once the
 * OT is expired.
 * @param path The base URL path for the requests
 * @param logError A function to execute when exceptions are caught.
 */
export declare function startOriginTrials(path: string, logError: () => any): void;

import { Deferred } from '../../../third_party/closure/goog/mochikit/async/deferred.js';
import { DebugError } from '../debug/error.js';
import { TrustedResourceUrl } from '../html/trustedresourceurl.js';
/**
 * The default length of time, in milliseconds, we are prepared to wait for a
 * load request to complete.
 */
export declare var DEFAULT_TIMEOUT: number;
/**
 * Optional parameters for send.
 * timeout: The length of time, in milliseconds, we are prepared to wait
 * for a load request to complete, or 0 or negative for no timeout. Default
 * is 5 seconds.
 * document: The HTML document under which to load the JavaScript. Default is
 * the current document.
 * cleanupWhenDone: If true clean up the script tag after script completes to
 * load. This is important if you just want to read data from the JavaScript
 * and then throw it away. Default is false.
 * attributes: Additional attributes to set on the script tag.
 */
export type Options = {
    'timeout': number | undefined;
    'document': HTMLDocument | undefined | null;
    'cleanupWhenDone': boolean | undefined;
    'attributes': {
        [key: string]: string;
    } | undefined;
};
/**
 * Loads and evaluates the JavaScript files at the specified URIs, guaranteeing
 * the order of script loads.
 *
 * Because we have to load the scripts in serial (load script 1, exec script 1,
 * load script 2, exec script 2, and so on), this will be slower than doing
 * the network fetches in parallel.
 *
 * If you need to load a large number of scripts but dependency order doesn't
 * matter, you should just call safeLoad N times.
 *
 * If you need to load a large number of scripts on the same domain,
 * you may want to use goog.module.ModuleLoader.
 * @param trustedUris The URIs to load.
 * @param opt_options Optional parameters. See options documentation for details.
 * @return The deferred result, that may be used to add callbacks
 */
export declare function safeLoadMany(trustedUris: TrustedResourceUrl[] | null, opt_options?: Options | null): Deferred;
/**
 * Loads and evaluates a JavaScript file.
 * When the script loads, a user callback is called.
 * It is the client's responsibility to verify that the script ran successfully.
 * @param trustedUri The URI of the JavaScript.
 * @param opt_options Optional parameters. See Options documentation for details.
 * @return The deferred result, that may be used to add callbacks and/or cancel the transmission. The error callback will be called with a single Error parameter.
 */
export declare function safeLoad(trustedUri: TrustedResourceUrl, opt_options?: Options | null): Deferred;
/**
 * Loads a JavaScript file and verifies it was evaluated successfully, using a
 * verification object.
 * The verification object is set by the loaded JavaScript at the end of the
 * script.
 * We verify this object was set and return its value in the success callback.
 * If the object is not defined we trigger an error callback.
 * @param trustedUri The URI of the JavaScript.
 * @param verificationObjName The name of the verification object that the loaded script should set.
 * @param options Optional parameters. See Options documentation for details.
 * @return The deferred result, that may be used to add callbacks and/or cancel the transmission. The success callback will be called with a single parameter containing the value of the verification object. The error callback will be called with a single Error parameter.
 */
export declare function safeLoadAndVerify(trustedUri: TrustedResourceUrl, verificationObjName: string, options: Options | null): Deferred;
/**
 * Possible error codes for jsloader.
 */
export declare enum ErrorCode {
    LOAD_ERROR = 0,
    TIMEOUT = 1,
    VERIFY_ERROR = 2,
    VERIFY_OBJECT_ALREADY_EXISTS = 3
}
/**
 * A jsloader error.
 */
export declare class Error extends DebugError {
    /**
     * A jsloader error.
     * @param code The error code.
     * @param opt_message Additional message.
     */
    constructor(code: ErrorCode | null, opt_message?: string);
    private noStructuralTyping_closure_goog_net_jsloader_Error;
    /**
     * The code for this error.
     */
    code: ErrorCode | null;
}

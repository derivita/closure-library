//!! generated by clutz.
// Generated from net/jsloader.js
declare namespace ಠ_ಠ.clutz.goog.net.jsloader {
  /**
   * The default length of time, in milliseconds, we are prepared to wait for a
   * load request to complete.
   */
  let DEFAULT_TIMEOUT : number ;
  /**
   * Loads and evaluates a JavaScript file.
   * When the script loads, a user callback is called.
   * It is the client's responsibility to verify that the script ran successfully.
   * @param trustedUri The URI of the JavaScript.
   * @param opt_options Optional parameters. See goog.net.jsloader.Options documentation for details.
   */
  function safeLoad (trustedUri : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl , opt_options ? : ಠ_ಠ.clutz.goog.net.jsloader.Options ) : ಠ_ಠ.clutz.goog.async.Deferred ;
  /**
   * Loads a JavaScript file and verifies it was evaluated successfully, using a
   * verification object.
   * The verification object is set by the loaded JavaScript at the end of the
   * script.
   * We verify this object was set and return its value in the success callback.
   * If the object is not defined we trigger an error callback.
   * @param trustedUri The URI of the JavaScript.
   * @param verificationObjName The name of the verification object that the loaded script should set.
   * @param options Optional parameters. See goog.net.jsloader.Options documentation for details.
   */
  function safeLoadAndVerify (trustedUri : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl , verificationObjName : string , options : ಠ_ಠ.clutz.goog.net.jsloader.Options ) : ಠ_ಠ.clutz.goog.async.Deferred ;
  /**
   * Loads and evaluates the JavaScript files at the specified URIs, guaranteeing
   * the order of script loads.
   *
   * Because we have to load the scripts in serial (load script 1, exec script 1,
   * load script 2, exec script 2, and so on), this will be slower than doing
   * the network fetches in parallel.
   *
   * If you need to load a large number of scripts but dependency order doesn't
   * matter, you should just call goog.net.jsloader.safeLoad N times.
   *
   * If you need to load a large number of scripts on the same domain,
   * you may want to use goog.module.ModuleLoader.
   * @param trustedUris The URIs to load.
   * @param opt_options Optional parameters. See goog.net.jsloader.options documentation for details.
   */
  function safeLoadMany (trustedUris : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl [] | null , opt_options ? : ಠ_ಠ.clutz.goog.net.jsloader.Options ) : ಠ_ಠ.clutz.goog.async.Deferred ;
}
declare module 'goog:goog.net.jsloader' {
  import jsloader = ಠ_ಠ.clutz.goog.net.jsloader;
  export = jsloader;
}
// Generated from net/jsloader.js
declare namespace ಠ_ಠ.clutz.goog.net.jsloader {
  /**
   * A jsloader error.
   */
  class Error extends ಠ_ಠ.clutz.goog.debug.Error {
    private noStructuralTyping_goog_net_jsloader_Error : any;
    /**
     * A jsloader error.
     * @param code The error code.
     * @param opt_message Additional message.
     */
    constructor (code : ಠ_ಠ.clutz.goog.net.jsloader.ErrorCode , opt_message ? : string ) ;
    /**
     * The code for this error.
     */
    code : ಠ_ಠ.clutz.goog.net.jsloader.ErrorCode ;
  }
}
declare module 'goog:goog.net.jsloader.Error' {
  import Error = ಠ_ಠ.clutz.goog.net.jsloader.Error;
  export default Error;
}
// Generated from net/jsloader.js
declare namespace ಠ_ಠ.clutz.goog.net.jsloader {
  /**
   * Possible error codes for jsloader.
   */
  /**
   * Possible error codes for jsloader.
   */
  enum ErrorCode {
    LOAD_ERROR = 0.0 ,
    TIMEOUT = 1.0 ,
    VERIFY_ERROR = 2.0 ,
    VERIFY_OBJECT_ALREADY_EXISTS = 3.0 ,
  }
}
declare module 'goog:goog.net.jsloader.ErrorCode' {
  import ErrorCode = ಠ_ಠ.clutz.goog.net.jsloader.ErrorCode;
  export default ErrorCode;
}
// Generated from net/jsloader.js
declare namespace ಠ_ಠ.clutz.goog.net.jsloader {
  /**
   * Optional parameters for goog.net.jsloader.send.
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
  type Options = { attributes ? : { [ key: string ]: string } , cleanupWhenDone ? : boolean , document ? : HTMLDocument | null , timeout ? : number } ;
}
declare module 'goog:goog.net.jsloader.Options' {
  import Options = ಠ_ಠ.clutz.goog.net.jsloader.Options;
  export default Options;
}

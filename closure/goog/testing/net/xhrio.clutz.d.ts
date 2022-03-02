//!! generated by clutz.
// Generated from testing/net/xhrio.js
declare namespace ಠ_ಠ.clutz.goog.testing.net {
  /**
   * Mock implementation of goog.net.XhrIo. This doesn't provide a mock
   * implementation for all cases, but it's not too hard to add them as needed.
   */
  class XhrIo extends ಠ_ಠ.clutz.goog.net.XhrIo {
    private noStructuralTyping_goog_testing_net_XhrIo : any;
    /**
     * Mock implementation of goog.net.XhrIo. This doesn't provide a mock
     * implementation for all cases, but it's not too hard to add them as needed.
     * @param opt_testQueue Test queue for inserting test events.
     */
    constructor (opt_testQueue ? : ಠ_ಠ.clutz.goog.testing.TestQueue | null ) ;
    /**
     * Map of default headers to add to every request, use:
     * XhrIo.headers.set(name, value)
     */
    headers : Map < string , string > ;
    /**
     * Abort the current XMLHttpRequest
     * @param opt_failureCode Optional error code to use - defaults to ABORT.
     */
    abort (opt_failureCode ? : ಠ_ಠ.clutz.goog.net.ErrorCode ) : void ;
    /**
     * Creates a new XHR object.
     */
    createXhr ( ) : ಠ_ಠ.clutz.goog.net.XhrLike.OrNative ;
    /**
     * Gets the text of all the headers in the response.
     * Will only return correct result when called from the context of a callback
     * and the request has completed
     */
    getAllResponseHeaders ( ) : string ;
    /**
     * Gets the text of all the headers in the response. As opposed to
     * {@link #getAllResponseHeaders}, this method does not require that the request
     * has completed.
     */
    getAllStreamingResponseHeaders ( ) : string ;
    /**
     * Gets the last POST content that was requested.
     */
    getLastContent ( ) : ArrayBuffer | null | ArrayBufferView | Blob | Document | FormData | string | undefined ;
    /**
     * Gets the last error message.
     */
    getLastErrorCode ( ) : ಠ_ಠ.clutz.goog.net.ErrorCode ;
    /**
     * Gets the last HTTP method that was requested.
     */
    getLastMethod ( ) : string | undefined ;
    /**
     * Gets the headers of the last request.
     */
    getLastRequestHeaders ( ) : GlobalObject | null | ಠ_ಠ.clutz.goog.collections.maps.MapLike < string , string > | undefined ;
    /**
     * Gets the last URI that was requested.
     */
    getLastUri ( ) : string ;
    /**
     * Gets whether progress events are enabled.
     */
    getProgressEventsEnabled ( ) : boolean ;
    /**
     * Returns the readystate.
     */
    getReadyState ( ) : ಠ_ಠ.clutz.goog.net.XmlHttp.ReadyState ;
    /**
     * Get the response as the type specificed by {@link #setResponseType}. At time
     * of writing, this is only supported in very recent versions of WebKit
     * (10.0.612.1 dev and later).
     */
    getResponse ( ) : any ;
    /**
     * Gets the response body from the Xhr object. Will only return correct result
     * when called from the context of a callback.
     */
    getResponseBody ( ) : GlobalObject | null ;
    /**
     * Get the value of the response-header with the given name from the Xhr object
     * Will only return correct result when called from the context of a callback
     * and the request has completed
     * @param key The name of the response-header to retrieve.
     */
    getResponseHeader (key : string ) : string | undefined ;
    /**
     * Returns all response headers as a key-value map.
     * Multiple values for the same header key can be combined into one,
     * separated by a comma and a space.
     * Note that the native getResponseHeader method for retrieving a single header
     * does a case insensitive match on the header name. This method does not
     * include any case normalization logic, it will just return a key-value
     * representation of the headers.
     * See: http://www.w3.org/TR/XMLHttpRequest/#the-getresponseheader()-method
     */
    getResponseHeaders ( ) : { [ key: string ]: string } ;
    /**
     * Gets the response and evaluates it as JSON from the Xhr object.  Will only
     * return correct result when called from the context of a callback.
     * @param opt_xssiPrefix Optional XSSI prefix string to use for stripping of the response before parsing. This needs to be set only if your backend server prepends the same prefix string to the JSON response.
     */
    getResponseJson (opt_xssiPrefix ? : string ) : GlobalObject | undefined ;
    /**
     * Gets the response text from the Xhr object.  Will only return correct result
     * when called from the context of a callback.
     */
    getResponseText ( ) : string ;
    /**
     * Gets the desired type for the response.
     */
    getResponseType ( ) : ಠ_ಠ.clutz.goog.net.XhrIo.ResponseType ;
    /**
     * Gets the response XML from the Xhr object.  Will only return correct result
     * when called from the context of a callback.
     */
    getResponseXml ( ) : Document | null ;
    /**
     * Get the status from the Xhr object.  Will only return correct result when
     * called from the context of a callback.
     */
    getStatus ( ) : number ;
    /**
     * Get the status text from the Xhr object.  Will only return correct result
     * when called from the context of a callback.
     */
    getStatusText ( ) : string ;
    /**
     * Get the value of the response-header with the given name from the Xhr object.
     * As opposed to {@link #getResponseHeader}, this method does not require that
     * the request has completed.
     * @param key The name of the response-header to retrieve.
     */
    getStreamingResponseHeader (key : string ) : string | null ;
    /**
     * Returns the number of milliseconds after which an incomplete request will be
     * aborted, or 0 if no timeout is set.
     */
    getTimeoutInterval ( ) : number ;
    /**
     * Gets whether a "credentialed" request is to be sent.
     */
    getWithCredentials ( ) : boolean ;
    isActive ( ) : boolean ;
    /**
     * Has the request completed.
     */
    isComplete ( ) : boolean ;
    /**
     * Has the request compeleted with a success.
     */
    isSuccess ( ) : boolean ;
    /**
     * Simulates the XhrIo send.
     * @param url Uri to make request too.
     * @param opt_method Send method, default: GET.
     * @param opt_content Body data.
     * @param opt_headers Map of headers to add to the request.
     */
    send (url : ಠ_ಠ.clutz.goog.Uri | null | string , opt_method ? : string , opt_content ? : ArrayBuffer | null | ArrayBufferView | Blob | Document | FormData | string , opt_headers ? : GlobalObject | null | ಠ_ಠ.clutz.goog.collections.maps.MapLike < string , string > ) : void ;
    /**
     * Sets whether progress events are enabled for this request. Note
     * that progress events require pre-flight OPTIONS request handling
     * for CORS requests, and may cause trouble with older browsers. See
     * goog.net.XhrIo.progressEventsEnabled_ for details.
     * @param enabled Whether progress events should be enabled.
     */
    setProgressEventsEnabled (enabled : boolean ) : void ;
    /**
     * Sets the desired type for the response. At time of writing, this is only
     * supported in very recent versions of WebKit (10.0.612.1 dev and later).
     *
     * If this is used, the response may only be accessed via {@link #getResponse}.
     * @param type The desired type for the response.
     */
    setResponseType (type : ಠ_ಠ.clutz.goog.net.XhrIo.ResponseType | null ) : void ;
    /**
     * Sets the number of milliseconds after which an incomplete request will be
     * aborted and a {@link goog.net.EventType.TIMEOUT} event raised; 0 means no
     * timeout is set.
     * @param ms Timeout interval in milliseconds; 0 means none.
     */
    setTimeoutInterval (ms : number ) : void ;
    /**
     * Specify a Trust Tokens operation to execute alongside the request.
     * @param trustToken a Trust Tokens operation to execute.
     */
    setTrustToken (trustToken : ಠ_ಠ.clutz.TrustTokenAttributeType ) : void ;
    /**
     * Sets whether a "credentialed" request that is aware of cookie and
     * authentication information should be made. This option is only supported by
     * browsers that support HTTP Access Control. As of this writing, this option
     * is not supported in IE.
     * @param withCredentials Whether this should be a "credentialed" request.
     */
    setWithCredentials (withCredentials : boolean ) : void ;
    /**
     * Simulate receiving some bytes but the request not fully completing, and
     * the XHR entering the 'INTERACTIVE' state.
     * @param partialResponse A string to append to the response text.
     * @param opt_headers Simulated response headers.
     */
    simulatePartialResponse (partialResponse : string , opt_headers ? : GlobalObject | null ) : void ;
    /**
     * Simulates the Xhr progress event.
     * @param lengthComputable Whether progress is measurable.
     * @param loaded Amount of work already performed.
     * @param total Total amount of work to perform.
     * @param opt_isDownload Whether the progress is from a download or upload.
     */
    simulateProgress (lengthComputable : boolean , loaded : number , total : number , opt_isDownload ? : boolean ) : void ;
    simulateReady ( ) : void ;
    /**
     * Simulates changing to the new ready state.
     * @param readyState Ready state to change to.
     */
    simulateReadyStateChange (readyState : number ) : void ;
    /**
     * Simulates receiving a response.
     * @param statusCode Simulated status code.
     * @param response Simulated response.
     * @param opt_headers Simulated response headers.
     */
    simulateResponse (statusCode : number , response : string | Document | null | ArrayBuffer , opt_headers ? : GlobalObject | null ) : void ;
    simulateTimeout ( ) : void ;
    /**
     * Alias this array here to make mocking of goog.net.XhrIo easier.
     */
    static METHODS_WITH_FORM_DATA : string [] ;
    /**
     * To emulate the behavior of the actual XhrIo, we do not allow access to the
     * XhrIo's properties outside the event callbacks. For backwards compatibility,
     * we allow tests to allow access by setting this value to true.
     */
    static allowUnsafeAccessToXhrIoOutsideCallbacks : boolean ;
    static base : any ;
    static cleanup ( ) : void ;
    /**
     * Returns an Array containing all non-disposed instances of
     * goog.testing.net.XhrIo created by {@link goog.testing.net.XhrIo.send}.
     */
    static getSendInstances ( ) : ಠ_ಠ.clutz.goog.testing.net.XhrIo [] ;
    /**
     * Simulates the static XhrIo send method.
     * @param url Uri to make request to.
     * @param opt_callback Callback function for when request is complete.
     * @param opt_method Send method, default: GET.
     * @param opt_content Body data.
     * @param opt_headers Map of headers to add to the request.
     * @param opt_timeoutInterval Number of milliseconds after which an incomplete request will be aborted; 0 means no timeout is set.
     * @param opt_withCredentials Whether to send credentials with the request. Default to false. See {@link goog.net.XhrIo#setWithCredentials}.
     */
    static send (url : string , opt_callback ? : Function | null , opt_method ? : string , opt_content ? : ArrayBuffer | null | ArrayBufferView | Blob | Document | FormData | string , opt_headers ? : GlobalObject | null | ಠ_ಠ.clutz.goog.collections.maps.MapLike < string , string > , opt_timeoutInterval ? : number , opt_withCredentials ? : boolean ) : ಠ_ಠ.clutz.goog.testing.net.XhrIo ;
  }
}
// Generated from testing/net/xhrio.js
declare namespace ಠ_ಠ.clutz.goog.testing.net.XhrIo {
  //!! ResponseType aliases enum goog.net.XhrIo.ResponseType
  export import ResponseType = goog.net.XhrIo.ResponseType ;
}
declare module 'goog:goog.testing.net.XhrIo' {
  import XhrIo = ಠ_ಠ.clutz.goog.testing.net.XhrIo;
  export default XhrIo;
}

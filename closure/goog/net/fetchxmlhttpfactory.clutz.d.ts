//!! generated by clutz.
// Generated from net/fetchxmlhttpfactory.js
declare namespace ಠ_ಠ.clutz.goog.net {
  /**
   * FetchXmlHttp object constructor.
   */
  class FetchXmlHttp extends ಠ_ಠ.clutz.goog.events.EventTarget implements ಠ_ಠ.clutz.goog.net.XhrLike {
    private noStructuralTyping_goog_net_FetchXmlHttp : any;
    /**
     * FetchXmlHttp object constructor.
     */
    constructor (worker : WorkerGlobalScope | null , streamBinaryChunks : boolean ) ;
    /**
     * Method to call when the state changes.
     */
    onreadystatechange : ( ( ) => any ) | null ;
    /**
     * Request state.
     */
    readyState : ಠ_ಠ.clutz.goog.net.FetchXmlHttp.RequestState ;
    /**
     * Content of the response.
     */
    response : string | ArrayBuffer | Uint8Array [] ;
    /**
     * Content of the response.
     */
    responseText : string ;
    /**
     * The type of the response.  If this is set to 'arraybuffer' the request will
     * be discrete, streaming is only supported for text encoded requests.
     */
    responseType : string ;
    /**
     * Document response entity body.
     * NOTE: This is always null and not supported by this class.
     */
    responseXML : null ;
    /**
     * HTTP status.
     */
    status : number ;
    /**
     * HTTP status string.
     */
    statusText : string ;
    abort ( ) : void ;
    getAllResponseHeaders ( ) : any ;
    getCredentialsMode ( ) : RequestCredentials | undefined ;
    getResponseHeader (header ? : any ) : any ;
    open (method ? : any , url ? : any , opt_async ? : any ) : void ;
    send (opt_data ? : any ) : void ;
    setCacheMode (cacheMode : RequestCache ) : void ;
    setCredentialsMode (credentialsMode : RequestCredentials ) : void ;
    setRequestHeader (header ? : any , value ? : any ) : void ;
  }
}
// Generated from net/fetchxmlhttpfactory.js
declare namespace ಠ_ಠ.clutz.goog.net.FetchXmlHttp {
  /**
   * State of the requests.
   */
  enum RequestState {
    DONE = 4.0 ,
    HEADER_RECEIVED = 2.0 ,
    LOADING = 3.0 ,
    OPENED = 1.0 ,
    UNSENT = 0.0 ,
  }
}
declare module 'goog:goog.net.FetchXmlHttp' {
  import FetchXmlHttp = ಠ_ಠ.clutz.goog.net.FetchXmlHttp;
  export default FetchXmlHttp;
}
// Generated from net/fetchxmlhttpfactory.js
declare namespace ಠ_ಠ.clutz.goog.net {
  /**
   * Factory for creating Xhr objects that uses the native fetch() method.
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
   */
  class FetchXmlHttpFactory extends ಠ_ಠ.clutz.goog.net.XmlHttpFactory {
    private noStructuralTyping_goog_net_FetchXmlHttpFactory : any;
    /**
     * Factory for creating Xhr objects that uses the native fetch() method.
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
     */
    constructor (opts : ಠ_ಠ.clutz.goog.net.FetchXmlHttpFactoryOptions ) ;
    createInstance ( ) : any ;
    internalGetOptions ( ) : { } ;
    setCacheMode (cacheMode : RequestCache ) : void ;
    setCredentialsMode (credentialsMode : RequestCredentials ) : void ;
  }
}
declare module 'goog:goog.net.FetchXmlHttpFactory' {
  import FetchXmlHttpFactory = ಠ_ಠ.clutz.goog.net.FetchXmlHttpFactory;
  export default FetchXmlHttpFactory;
}
// Generated from net/fetchxmlhttpfactory.js
declare namespace ಠ_ಠ.clutz.goog.net {
  interface FetchXmlHttpFactoryOptions {
    streamBinaryChunks ? : boolean ;
    worker ? : WorkerGlobalScope ;
  }
}

//!! generated by clutz.
// Generated from labs/net/webchannel/netutils.js
declare namespace ಠ_ಠ.clutz.goog.labs.net.webChannel.netUtils {
  /**
   * Default timeout to allow for URI pings.
   */
  let NETWORK_TIMEOUT : number ;
  /**
   * Test loading the given image.
   * @param url URL to the image.
   * @param timeout Milliseconds before giving up.
   * @param callback Function to call with results.
   */
  function testLoadImage (url : string , timeout : number , callback : (a : boolean ) => any ) : void ;
  /**
   * Test loading the given image, retrying if necessary.
   * @param url URL to the image.
   * @param timeout Milliseconds before giving up.
   * @param callback Function to call with results.
   * @param retries The number of times to retry.
   * @param channelDebug The debug object
   * @param opt_pauseBetweenRetriesMS Optional number of milliseconds between retries - defaults to 0.
   */
  function testLoadImageWithRetries (url : string , timeout : number , callback : (a : boolean ) => any , retries : number , channelDebug : ಠ_ಠ.clutz.goog.labs.net.webChannel.WebChannelDebug , opt_pauseBetweenRetriesMS ? : number ) : void ;
  /**
   * Pings the network with an image URI to check if an error is a server error
   * or user's network error.
   *
   * The caller needs to add a 'rand' parameter to make sure the response is
   * not fulfilled by browser cache.
   * @param callback The function to call back with results.
   * @param opt_imageUri The URI (of an image) to use for the network test.
   */
  function testNetwork (callback : (a : boolean ) => any , opt_imageUri ? : ಠ_ಠ.clutz.goog.Uri | null ) : void ;
}
declare module 'goog:goog.labs.net.webChannel.netUtils' {
  import netUtils = ಠ_ಠ.clutz.goog.labs.net.webChannel.netUtils;
  export = netUtils;
}

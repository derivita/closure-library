//!! generated by clutz.
// Generated from net/imageloader.js
declare namespace ಠ_ಠ.clutz.goog.net {
  /**
   * Image loader utility class.  Raises a {@link goog.events.EventType.LOAD}
   * event for each image loaded, with an {@link Image} object as the target of
   * the event, normalized to have `naturalHeight` and `naturalWidth`
   * attributes.
   *
   * To use this class, run:
   *
   * <pre>
   * const imageLoader = new goog.net.ImageLoader();
   * goog.events.listen(imageLoader, goog.net.EventType.COMPLETE,
   * function(e) { ... });
   * imageLoader.addImage("image_id", "http://path/to/image.gif");
   * imageLoader.start();
   * </pre>
   *
   * The start() method must be called to start image loading.  Images can be
   * added and removed after loading has started, but only those images added
   * before start() was called will be loaded until start() is called again.
   * A goog.net.EventType.COMPLETE event will be dispatched only once all
   * outstanding images have completed uploading.
   */
  class ImageLoader extends ಠ_ಠ.clutz.goog.events.EventTarget {
    private noStructuralTyping_goog_net_ImageLoader : any;
    /**
     * Image loader utility class.  Raises a {@link goog.events.EventType.LOAD}
     * event for each image loaded, with an {@link Image} object as the target of
     * the event, normalized to have `naturalHeight` and `naturalWidth`
     * attributes.
     *
     * To use this class, run:
     *
     * <pre>
     * const imageLoader = new goog.net.ImageLoader();
     * goog.events.listen(imageLoader, goog.net.EventType.COMPLETE,
     * function(e) { ... });
     * imageLoader.addImage("image_id", "http://path/to/image.gif");
     * imageLoader.start();
     * </pre>
     *
     * The start() method must be called to start image loading.  Images can be
     * added and removed after loading has started, but only those images added
     * before start() was called will be loaded until start() is called again.
     * A goog.net.EventType.COMPLETE event will be dispatched only once all
     * outstanding images have completed uploading.
     * @param opt_parent An optional parent element whose document object should be used to load images.
     */
    constructor (opt_parent ? : GlobalElement | null ) ;
    /**
     * Adds an image to the image loader, and associates it with the given ID
     * string.  If an image with that ID already exists, it is silently replaced.
     * When the image in question is loaded, the target of the LOAD event will be
     * an `Image` object with `id` and `src` attributes based on
     * these arguments.
     * @param id The ID of the image to load.
     * @param image Either the source URL of the image or the HTML image element itself (or any object with a `src` property, really).
     * @param opt_corsRequestType The type of CORS request to use, if any.
     */
    addImage (id : string , image : string | Image | null , opt_corsRequestType ? : ಠ_ಠ.clutz.goog.net.ImageLoader.CorsRequestType ) : void ;
    disposeInternal ( ) : void ;
    /**
     * Removes the image associated with the given ID string from the image loader.
     * If the image was previously loading, removes any listeners for its events.
     * @param id The ID of the image to remove.
     */
    removeImage (id : string ) : void ;
    start ( ) : void ;
  }
}
// Generated from net/imageloader.js
declare namespace ಠ_ಠ.clutz.goog.net.ImageLoader {
  /**
   * The type of image request to dispatch, if this is a CORS-enabled image
   * request. CORS-enabled images can be reused in canvas elements without them
   * being tainted. The server hosting the image should include the appropriate
   * CORS header.
   */
  enum CorsRequestType {
    ANONYMOUS = 'anonymous' ,
    USE_CREDENTIALS = 'use-credentials' ,
  }
}
declare module 'goog:goog.net.ImageLoader' {
  import ImageLoader = ಠ_ಠ.clutz.goog.net.ImageLoader;
  export default ImageLoader;
}

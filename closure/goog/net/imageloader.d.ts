import { EventTarget } from '../events/eventtarget.js';
/**
 * Image loader utility class.  Raises a {@link EventType.LOAD}
 * event for each image loaded, with an {@link Image} object as the target of
 * the event, normalized to have `naturalHeight` and `naturalWidth`
 * attributes.
 *
 * To use this class, run:
 *
 * <pre>
 * const imageLoader = new ImageLoader();
 * goog.events.listen(imageLoader, netEventType.COMPLETE,
 * function(e) { ... });
 * imageLoader.addImage("image_id", "http://path/to/image.gif");
 * imageLoader.start();
 * </pre>
 *
 * The start() method must be called to start image loading.  Images can be
 * added and removed after loading has started, but only those images added
 * before start() was called will be loaded until start() is called again.
 * A netEventType.COMPLETE event will be dispatched only once all
 * outstanding images have completed uploading.
 */
export declare class ImageLoader extends EventTarget {
    /**
     * Image loader utility class.  Raises a {@link EventType.LOAD}
     * event for each image loaded, with an {@link Image} object as the target of
     * the event, normalized to have `naturalHeight` and `naturalWidth`
     * attributes.
     *
     * To use this class, run:
     *
     * <pre>
     * const imageLoader = new ImageLoader();
     * goog.events.listen(imageLoader, netEventType.COMPLETE,
     * function(e) { ... });
     * imageLoader.addImage("image_id", "http://path/to/image.gif");
     * imageLoader.start();
     * </pre>
     *
     * The start() method must be called to start image loading.  Images can be
     * added and removed after loading has started, but only those images added
     * before start() was called will be loaded until start() is called again.
     * A netEventType.COMPLETE event will be dispatched only once all
     * outstanding images have completed uploading.
     * @param opt_parent An optional parent element whose document object should be used to load images.
     */
    constructor(opt_parent?: Element | null);
    private noStructuralTyping_closure_goog_net_imageloader_ImageLoader;
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
    addImage(id: string, image: string | Image | null, opt_corsRequestType?: ImageLoader.CorsRequestType): void;
    /**
     * Removes the image associated with the given ID string from the image loader.
     * If the image was previously loading, removes any listeners for its events.
     * @param id The ID of the image to remove.
     */
    removeImage(id: string): void;
    /**
     * Starts loading all images in the image loader in parallel.  Raises a LOAD
     * event each time an image finishes loading, and a COMPLETE event after all
     * images have finished loading.
     */
    start(): void;
    disposeInternal(): void;
}
export declare namespace ImageLoader {
    /**
     * The type of image request to dispatch, if this is a CORS-enabled image
     * request. CORS-enabled images can be reused in canvas elements without them
     * being tainted. The server hosting the image should include the appropriate
     * CORS header.
     */
    enum CorsRequestType {
        ANONYMOUS = "anonymous",
        USE_CREDENTIALS = "use-credentials"
    }
    /**
     * Describes a request for an image. This includes its URL and its CORS-request
     * type, if any.
     */
    type ImageRequest_ = {
        'src': string;
        'corsRequestType': ImageLoader.CorsRequestType | null;
    };
}

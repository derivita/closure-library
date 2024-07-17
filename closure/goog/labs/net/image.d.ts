import { Promise } from '../../promise/promise.js';
import { SafeUrl } from '../../html/safeurl.js';
/**
 * Loads a single image.  Useful for preloading images.
 * @param uri URI of the image.
 * @param opt_image If present, instead of creating a new Image instance the function will use the passed Image instance or the result of calling the Image factory respectively. This can be used to control exactly how Image instances are created, for example if they should be created in a particular document element, or have fields that will trigger CORS image fetches.
 * @return A Promise that will be resolved with the given image if the image successfully loads.
 */
export declare function load(uri: SafeUrl | string, opt_image?: Image | (() => Image)): Promise<Image>;

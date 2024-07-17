import { Uri } from '../uri/uri.js';
/**
 * Default timeout to allow for google.com pings.
 */
export declare var GOOGLECOM_TIMEOUT: number;
export declare var TEST_URL: string;
/**
 * Pings the network to check if an error is a server error or user's network
 * error.
 * @param callback The function to call back with results.
 * @param opt_imageUri The URI of an image to use for the network test. You *must* provide an image URI; the default behavior is provided for compatibility with existing code, but the search team does not want people using images served off of google.com for this purpose. The default will go away when all usages have been changed.
 * @param opt_timeout Milliseconds before giving up.
 */
export declare function testGoogleCom(callback: Function | null, opt_imageUri?: Uri | null, opt_timeout?: number): void;
/**
 * Test loading the given image, retrying if necessary.
 * @param url URL to the iamge.
 * @param timeout Milliseconds before giving up.
 * @param callback Function to call with results.
 * @param retries The number of times to retry.
 * @param opt_pauseBetweenRetriesMS Optional number of milliseconds between retries - defaults to 0.
 */
export declare function testLoadImageWithRetries(url: string, timeout: number, callback: Function | null, retries: number, opt_pauseBetweenRetriesMS?: number): void;
/**
 * Test loading the given image.
 * @param url URL to the image.
 * @param timeout Milliseconds before giving up.
 * @param callback Function to call with results.
 */
export declare function testLoadImage(url: string, timeout: number, callback: Function | null): void;

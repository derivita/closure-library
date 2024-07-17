/**
 * Creates a blob URL for a blob object.
 * Throws an error if the browser does not support Object Urls.
 * @param obj The object for which to create the URL.
 * @return The URL for the object.
 */
export declare function createObjectUrl(obj: File | Blob | MediaSource | MediaStream): string;
/**
 * Revokes a URL created by {@link createObjectUrl}.
 * Throws an error if the browser does not support Object Urls.
 * @param url The URL to revoke.
 */
export declare function revokeObjectUrl(url: string): void;
/**
 * Checks whether this browser supports Object Urls. If not, calls to
 * createObjectUrl and revokeObjectUrl will result in an error.
 * @return True if this browser supports Object Urls.
 */
export declare function browserSupportsObjectUrls(): boolean;

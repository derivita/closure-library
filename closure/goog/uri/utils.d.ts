/**
 * Builds a URI string from already-encoded parts.
 *
 * No encoding is performed.  Any component may be omitted as either null or
 * undefined.
 * @param opt_scheme The scheme such as 'http'.
 * @param opt_userInfo The user name before the '@'.
 * @param opt_domain The domain such as 'www.google.com', already URI-encoded.
 * @param opt_port The port number.
 * @param opt_path The path, already URI-encoded.  If it is not empty, it must begin with a slash.
 * @param opt_queryData The URI-encoded query data.
 * @param opt_fragment The URI-encoded fragment identifier.
 * @return The fully combined URI.
 */
export declare function buildFromEncodedParts(opt_scheme?: string | null, opt_userInfo?: string | null, opt_domain?: string | null, opt_port?: string | number | null, opt_path?: string | null, opt_queryData?: string | null, opt_fragment?: string | null): string;
/**
 * The index of each URI component in the return value of split.
 */
export declare enum ComponentIndex {
    SCHEME = 1,
    USER_INFO = 2,
    DOMAIN = 3,
    PORT = 4,
    PATH = 5,
    QUERY_DATA = 6,
    FRAGMENT = 7
}
/**
 *
 * @param handler The handler function to call when a URI with a protocol that is better supported by the Closure URL package is detected.
 */
export declare function setUrlPackageSupportLoggingHandler(handler: (() => any) | null): void;
/**
 * Splits a URI into its component parts.
 *
 * Each component can be accessed via the component indices; for example:
 * <pre>
 * split(someStr)[ComponentIndex.QUERY_DATA];
 * </pre>
 * @param uri The URI string to examine.
 * @return Each component still URI-encoded. Each component that is present will contain the encoded value, whereas components that are not present will be undefined or empty, depending on the browser's regular expression implementation.  Never null, since arbitrary strings may still look like path names.
 */
export declare function split(uri: string): (string | undefined)[];
/**
 *
 * @param uri The URI to examine.
 * @return The protocol or scheme, or null if none.  Does not include trailing colons or slashes.
 */
export declare function getScheme(uri: string): string | null;
/**
 * Gets the effective scheme for the URL.  If the URL is relative then the
 * scheme is derived from the page's location.
 * @param uri The URI to examine.
 * @return The protocol or scheme, always lower case.
 */
export declare function getEffectiveScheme(uri: string): string;
/**
 *
 * @param uri The URI to examine.
 * @return The user name still encoded, or null if none.
 */
export declare function getUserInfoEncoded(uri: string): string | null;
/**
 *
 * @param uri The URI to examine.
 * @return The decoded user info, or null if none.
 */
export declare function getUserInfo(uri: string): string | null;
/**
 *
 * @param uri The URI to examine.
 * @return The domain name still encoded, or null if none.
 */
export declare function getDomainEncoded(uri: string): string | null;
/**
 *
 * @param uri The URI to examine.
 * @return The decoded domain, or null if none.
 */
export declare function getDomain(uri: string): string | null;
/**
 *
 * @param uri The URI to examine.
 * @return The port number, or null if none.
 */
export declare function getPort(uri: string): number | null;
/**
 *
 * @param uri The URI to examine.
 * @return The path still encoded, or null if none. Includes the leading slash, if any.
 */
export declare function getPathEncoded(uri: string): string | null;
/**
 *
 * @param uri The URI to examine.
 * @return The decoded path, or null if none.  Includes the leading slash, if any.
 */
export declare function getPath(uri: string): string | null;
/**
 *
 * @param uri The URI to examine.
 * @return The query data still encoded, or null if none.  Does not include the question mark itself.
 */
export declare function getQueryData(uri: string): string | null;
/**
 *
 * @param uri The URI to examine.
 * @return The fragment identifier, or null if none.  Does not include the hash mark itself.
 */
export declare function getFragmentEncoded(uri: string): string | null;
/**
 *
 * @param uri The URI to examine.
 * @param fragment The encoded fragment identifier, or null if none. Does not include the hash mark itself.
 * @return The URI with the fragment set.
 */
export declare function setFragmentEncoded(uri: string, fragment: string | null): string;
/**
 *
 * @param uri The URI to examine.
 * @return The decoded fragment identifier, or null if none.  Does not include the hash mark.
 */
export declare function getFragment(uri: string): string | null;
/**
 * Extracts everything up to the port of the URI.
 * @param uri The URI string.
 * @return Everything up to and including the port.
 */
export declare function getHost(uri: string): string;
/**
 * Returns the origin for a given URL.
 * @param uri The URI string.
 * @return Everything up to and including the port.
 */
export declare function getOrigin(uri: string): string;
/**
 * Extracts the path of the URL and everything after.
 * @param uri The URI string.
 * @return The URI, starting at the path and including the query parameters and fragment identifier.
 */
export declare function getPathAndAfter(uri: string): string;
/**
 * Gets the URI with the fragment identifier removed.
 * @param uri The URI to examine.
 * @return Everything preceding the hash mark.
 */
export declare function removeFragment(uri: string): string;
/**
 * Ensures that two URI's have the exact same domain, scheme, and port.
 *
 * Unlike the version in goog.Uri, this checks protocol, and therefore is
 * suitable for checking against the browser's same-origin policy.
 * @param uri1 The first URI.
 * @param uri2 The second URI.
 * @return Whether they have the same scheme, domain and port.
 */
export declare function haveSameDomain(uri1: string, uri2: string): boolean;
/**
 * Supported query parameter values by the parameter serializing utilities.
 *
 * If a value is null or undefined, the key-value pair is skipped, as an easy
 * way to omit parameters conditionally.  Non-array parameters are converted
 * to a string and URI encoded.  Array values are expanded into multiple
 * &key=value pairs, with each element stringized and URI-encoded.
 */
export type QueryValue = any;
/**
 * An array representing a set of query parameters with alternating keys
 * and values.
 *
 * Keys are assumed to be URI encoded already and live at even indices.  See
 * QueryValue for details on how parameter values are encoded.
 *
 * Example:
 * <pre>
 * var data = [
 * // Simple param: ?name=BobBarker
 * 'name', 'BobBarker',
 * // Conditional param -- may be omitted entirely.
 * 'specialDietaryNeeds', hasDietaryNeeds() ? getDietaryNeeds() : null,
 * // Multi-valued param: &house=LosAngeles&house=NewYork&house=null
 * 'house', ['LosAngeles', 'NewYork', null]
 * ];
 * </pre>
 */
export type QueryArray = (string | QueryValue | null)[];
/**
 * Parses encoded query parameters and calls callback function for every
 * parameter found in the string.
 *
 * Missing value of parameter (e.g. &key&) is treated as if the value was an
 * empty string.  Keys may be empty strings (e.g. &=value&) which also means
 * that &=& and && will result in an empty key and value.
 * @param encodedQuery Encoded query string excluding question mark at the beginning.
 * @param callback Function called for every parameter found in query string.  The first argument (name) will not be urldecoded (so the function is consistent with buildQueryData), but the second will.  If the parameter has no value (i.e. = was not present) the second argument (value) will be an empty string.
 */
export declare function parseQueryData(encodedQuery: string, callback: () => any): void;
/**
 * Builds a query data string from a sequence of alternating keys and values.
 * Currently generates "&key&" for empty args.
 * @param keysAndValues Alternating keys and values. See the QueryArray typedef.
 * @param opt_startIndex A start offset into the arary, defaults to 0.
 * @return The encoded query string, in the form 'a=1&b=2'.
 */
export declare function buildQueryData(keysAndValues: ArrayLike<string | QueryValue | null>, opt_startIndex?: number): string;
/**
 * Builds a query data string from a map.
 * Currently generates "&key&" for empty args.
 * @param map An object where keys are URI-encoded parameter keys, and the values are arbitrary types or arrays. Keys with a null value are dropped.
 * @return The encoded query string, in the form 'a=1&b=2'.
 */
export declare function buildQueryDataFromMap(map: {
    [key: string]: QueryValue | null;
}): string;
/**
 * Appends URI parameters to an existing URI.
 *
 * The variable arguments may contain alternating keys and values.  Keys are
 * assumed to be already URI encoded.  The values should not be URI-encoded,
 * and will instead be encoded by this function.
 * <pre>
 * appendParams('http://www.foo.com?existing=true',
 * 'key1', 'value1',
 * 'key2', 'value?willBeEncoded',
 * 'key3', ['valueA', 'valueB', 'valueC'],
 * 'key4', null);
 * result: 'http://www.foo.com?existing=true&' +
 * 'key1=value1&' +
 * 'key2=value%3FwillBeEncoded&' +
 * 'key3=valueA&key3=valueB&key3=valueC'
 * </pre>
 *
 * A single call to this function will not exhibit quadratic behavior in IE,
 * whereas multiple repeated calls may, although the effect is limited by
 * fact that URL's generally can't exceed 2kb.
 * @param uri The original URI, which may already have query data.
 * @param var_args An array or argument list conforming to QueryArray.
 * @return The URI with all query parameters added.
 */
export declare function appendParams(uri: string, ...var_args: (QueryArray | QueryValue | null)[]): string;
/**
 * Appends query parameters from a map.
 * @param uri The original URI, which may already have query data.
 * @param map An object where keys are URI-encoded parameter keys, and the values are arbitrary types or arrays. Keys with a null value are dropped.
 * @return The new parameters.
 */
export declare function appendParamsFromMap(uri: string, map: {
    [key: string]: QueryValue | null;
}): string;
/**
 * Appends a single URI parameter.
 *
 * Repeated calls to this can exhibit quadratic behavior in IE6 due to the
 * way string append works, though it should be limited given the 2kb limit.
 * @param uri The original URI, which may already have query data.
 * @param key The key, which must already be URI encoded.
 * @param opt_value The value, which will be stringized and encoded (assumed not already to be encoded).  If omitted, undefined, or null, the key will be added as a valueless parameter.
 * @return The URI with the query parameter added.
 */
export declare function appendParam(uri: string, key: string, opt_value?: any): string;
/**
 * Determines if the URI contains a specific key.
 *
 * Performs no object instantiations.
 * @param uri The URI to process.  May contain a fragment identifier.
 * @param keyEncoded The URI-encoded key.  Case-sensitive.
 * @return Whether the key is present.
 */
export declare function hasParam(uri: string, keyEncoded: string): boolean;
/**
 * Gets the first value of a query parameter.
 * @param uri The URI to process.  May contain a fragment.
 * @param keyEncoded The URI-encoded key.  Case-sensitive.
 * @return The first value of the parameter (URI-decoded), or null if the parameter is not found.
 */
export declare function getParamValue(uri: string, keyEncoded: string): string | null;
/**
 * Gets all values of a query parameter.
 * @param uri The URI to process.  May contain a fragment.
 * @param keyEncoded The URI-encoded key.  Case-sensitive.
 * @return All URI-decoded values with the given key. If the key is not found, this will have length 0, but never be null.
 */
export declare function getParamValues(uri: string, keyEncoded: string): string[];
/**
 * Removes all instances of a query parameter.
 * @param uri The URI to process.  Must not contain a fragment.
 * @param keyEncoded The URI-encoded key.
 * @return The URI with all instances of the parameter removed.
 */
export declare function removeParam(uri: string, keyEncoded: string): string;
/**
 * Replaces all existing definitions of a parameter with a single definition.
 *
 * Repeated calls to this can exhibit quadratic behavior due to the need to
 * find existing instances and reconstruct the string, though it should be
 * limited given the 2kb limit.  Consider using appendParams or setParamsFromMap
 * to update multiple parameters in bulk.
 * @param uri The original URI, which may already have query data.
 * @param keyEncoded The key, which must already be URI encoded.
 * @param value The value, which will be stringized and encoded (assumed not already to be encoded).
 * @return The URI with the query parameter added.
 */
export declare function setParam(uri: string, keyEncoded: string, value: any): string;
/**
 * Effeciently set or remove multiple query parameters in a URI. Order of
 * unchanged parameters will not be modified, all updated parameters will be
 * appended to the end of the query. Params with values of null or undefined are
 * removed.
 * @param uri The URI to process.
 * @param params A list of parameters to update. If null or undefined, the param will be removed.
 * @return An updated URI where the query data has been updated with the params.
 */
export declare function setParamsFromMap(uri: string, params: {
    [key: string]: QueryValue | null;
}): string;
/**
 * Generates a URI path using a given URI and a path with checks to
 * prevent consecutive "//". The baseUri passed in must not contain
 * query or fragment identifiers. The path to append may not contain query or
 * fragment identifiers.
 * @param baseUri URI to use as the base.
 * @param path Path to append.
 * @return Updated URI.
 */
export declare function appendPath(baseUri: string, path: string): string;
/**
 * Replaces the path.
 * @param uri URI to use as the base.
 * @param path New path.
 * @return Updated URI.
 */
export declare function setPath(uri: string, path: string): string;
/**
 * Standard supported query parameters.
 */
export declare enum StandardQueryParam {
    RANDOM = "zx"
}
/**
 * Sets the zx parameter of a URI to a random value.
 * @param uri Any URI.
 * @return That URI with the "zx" parameter added or replaced to contain a random string.
 */
export declare function makeUnique(uri: string): string;

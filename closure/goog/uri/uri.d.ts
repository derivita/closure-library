import * as maps from '../collections/maps.js';
/**
 * This class contains setters and getters for the parts of the URI.
 * The <code>getXyz</code>/<code>setXyz</code> methods return the decoded part
 * -- so<code>Uri.parse('/foo%20bar').getPath()</code> will return the
 * decoded path, <code>/foo bar</code>.
 *
 * Reserved characters (see RFC 3986 section 2.2) can be present in
 * their percent-encoded form in scheme, domain, and path URI components and
 * will not be auto-decoded. For example:
 * <code>Uri.parse('rel%61tive/path%2fto/resource').getPath()</code> will
 * return <code>relative/path%2fto/resource</code>.
 *
 * The constructor accepts an optional unparsed, raw URI string.  The parser
 * is relaxed, so special characters that aren't escaped but don't cause
 * ambiguities will not cause parse failures.
 *
 * All setters return <code>this</code> and so may be chained, a la
 * <code>Uri.parse('/foo').setFragment('part').toString()</code>.
 */
export declare class Uri {
    /**
     * This class contains setters and getters for the parts of the URI.
     * The <code>getXyz</code>/<code>setXyz</code> methods return the decoded part
     * -- so<code>Uri.parse('/foo%20bar').getPath()</code> will return the
     * decoded path, <code>/foo bar</code>.
     *
     * Reserved characters (see RFC 3986 section 2.2) can be present in
     * their percent-encoded form in scheme, domain, and path URI components and
     * will not be auto-decoded. For example:
     * <code>Uri.parse('rel%61tive/path%2fto/resource').getPath()</code> will
     * return <code>relative/path%2fto/resource</code>.
     *
     * The constructor accepts an optional unparsed, raw URI string.  The parser
     * is relaxed, so special characters that aren't escaped but don't cause
     * ambiguities will not cause parse failures.
     *
     * All setters return <code>this</code> and so may be chained, a la
     * <code>Uri.parse('/foo').setFragment('part').toString()</code>.
     * @param opt_uri Optional string URI to parse (use Uri.create() to create a URI from parts), or if a Uri is passed, a clone is created.
     * @param opt_ignoreCase If true, #getParameterValue will ignore the case of the parameter name.
     */
    constructor(opt_uri?: any, opt_ignoreCase?: boolean);
    private noStructuralTyping_closure_goog_uri_uri_Uri;
    /**
     * Parameter name added to stop caching.
     */
    static RANDOM_PARAM: string;
    toString(): string;
    /**
     * Resolves the given relative URI (a Uri object), using the URI
     * represented by this instance as the base URI.
     *
     * There are several kinds of relative URIs:<br>
     * 1. foo - replaces the last part of the path, the whole query and fragment<br>
     * 2. /foo - replaces the path, the query and fragment<br>
     * 3. //foo - replaces everything from the domain on.  foo is a domain name<br>
     * 4. ?foo - replace the query and fragment<br>
     * 5. #foo - replace the fragment only
     *
     * Additionally, if relative URI has a non-empty path, all ".." and "."
     * segments will be resolved, as described in RFC 3986.
     * @param relativeUri The relative URI to resolve.
     * @return The resolved URI.
     */
    resolve(relativeUri: Uri): Uri;
    /**
     * Clones the URI instance.
     * @return New instance of the URI object.
     */
    clone(): Uri;
    getScheme(): string;
    /**
     * Sets the scheme/protocol.
     * @param newScheme New scheme value.
     * @param opt_decode Optional param for whether to decode new value.
     * @return Reference to this URI object.
     */
    setScheme(newScheme: string, opt_decode?: boolean): Uri;
    hasScheme(): boolean;
    getUserInfo(): string;
    /**
     * Sets the userInfo.
     * @param newUserInfo New userInfo value.
     * @param opt_decode Optional param for whether to decode new value.
     * @return Reference to this URI object.
     */
    setUserInfo(newUserInfo: string, opt_decode?: boolean): Uri;
    hasUserInfo(): boolean;
    getDomain(): string;
    /**
     * Sets the domain.
     * @param newDomain New domain value.
     * @param opt_decode Optional param for whether to decode new value.
     * @return Reference to this URI object.
     */
    setDomain(newDomain: string, opt_decode?: boolean): Uri;
    hasDomain(): boolean;
    getPort(): number | null;
    /**
     * Sets the port number.
     * @param newPort Port number. Will be explicitly casted to a number.
     * @return Reference to this URI object.
     */
    setPort(newPort: any): Uri;
    hasPort(): boolean;
    getPath(): string;
    /**
     * Sets the path.
     * @param newPath New path value.
     * @param opt_decode Optional param for whether to decode new value.
     * @return Reference to this URI object.
     */
    setPath(newPath: string, opt_decode?: boolean): Uri;
    hasPath(): boolean;
    hasQuery(): boolean;
    /**
     * Sets the query data.
     * @param queryData QueryData object.
     * @param opt_decode Optional param for whether to decode new value. Applies only if queryData is a string.
     * @return Reference to this URI object.
     */
    setQueryData(queryData: Uri.QueryData | string | undefined | null, opt_decode?: boolean): Uri;
    /**
     * Sets the URI query.
     * @param newQuery New query value.
     * @param opt_decode Optional param for whether to decode new value.
     * @return Reference to this URI object.
     */
    setQuery(newQuery: string, opt_decode?: boolean): Uri;
    getEncodedQuery(): string;
    getDecodedQuery(): string;
    /**
     * Returns the query data.
     * @return QueryData object.
     */
    getQueryData(): Uri.QueryData;
    getQuery(): string;
    /**
     * Sets the value of the named query parameters, clearing previous values for
     * that key.
     * @param key The parameter to set.
     * @param value The new value. Value does not need to be encoded.
     * @return Reference to this URI object.
     */
    setParameterValue(key: string, value: any): Uri;
    /**
     * Sets the values of the named query parameters, clearing previous values for
     * that key.  Not new values will currently be moved to the end of the query
     * string.
     *
     * So, <code>Uri.parse('foo?a=b&c=d&e=f').setParameterValues('c', ['new'])
     * </code> yields <tt>foo?a=b&e=f&c=new</tt>.</p>
     * @param key The parameter to set.
     * @param values The new values. If values is a single string then it will be treated as the sole value. Values do not need to be encoded.
     * @return Reference to this URI object.
     */
    setParameterValues(key: string, values: any): Uri;
    /**
     * Returns the value<b>s</b> for a given cgi parameter as a list of decoded
     * query parameter values.
     * @param name The parameter to get values for.
     * @return The values for a given cgi parameter as a list of decoded query parameter values.
     */
    getParameterValues(name: string): any[];
    /**
     * Returns the first value for a given cgi parameter or undefined if the given
     * parameter name does not appear in the query string.
     * @param paramName Unescaped parameter name.
     * @return The first value for a given cgi parameter or undefined if the given parameter name does not appear in the query string.
     */
    getParameterValue(paramName: string): string | undefined;
    getFragment(): string;
    /**
     * Sets the URI fragment.
     * @param newFragment New fragment value.
     * @param opt_decode Optional param for whether to decode new value.
     * @return Reference to this URI object.
     */
    setFragment(newFragment: string, opt_decode?: boolean): Uri;
    hasFragment(): boolean;
    /**
     * Returns true if this has the same domain as that of uri2.
     * @param uri2 The URI object to compare to.
     * @return true if same domain; false otherwise.
     */
    hasSameDomainAs(uri2: Uri): boolean;
    /**
     * Adds a random parameter to the Uri.
     * @return Reference to this Uri object.
     */
    makeUnique(): Uri;
    /**
     * Removes the named query parameter.
     * @param key The parameter to remove.
     * @return Reference to this URI object.
     */
    removeParameter(key: string): Uri;
    /**
     * Sets whether Uri is read only. If this Uri is read-only,
     * enforceReadOnly_ will be called at the start of any function that may modify
     * this Uri.
     * @param isReadOnly whether this Uri should be read only.
     * @return Reference to this Uri object.
     */
    setReadOnly(isReadOnly: boolean): Uri;
    isReadOnly(): boolean;
    /**
     * Checks if this Uri has been marked as read only, and if so, throws an error.
     * This should be called whenever any modifying function is called.
     */
    enforceReadOnly(): void;
    /**
     * Sets whether to ignore case.
     * NOTE: If there are already key/value pairs in the QueryData, and
     * ignoreCase_ is set to false, the keys will all be lower-cased.
     * @param ignoreCase whether this Uri should ignore case.
     * @return Reference to this Uri object.
     */
    setIgnoreCase(ignoreCase: boolean): Uri;
    getIgnoreCase(): boolean;
    /**
     * Creates a uri from the string form.  Basically an alias of new Uri().
     * If a Uri object is passed to parse then it will return a clone of the object.
     * @param uri Raw URI string or instance of Uri object.
     * @param opt_ignoreCase Whether to ignore the case of parameter names in #getParameterValue.
     * @return The new URI object.
     */
    static parse(uri: any, opt_ignoreCase?: boolean): Uri;
    /**
     * Creates a new Uri object from unencoded parts.
     * @param opt_scheme Scheme/protocol or full URI to parse.
     * @param opt_userInfo username:password.
     * @param opt_domain www.google.com.
     * @param opt_port 9830.
     * @param opt_path /some/path/to/a/file.html.
     * @param opt_query a=1&b=2.
     * @param opt_fragment The fragment without the #.
     * @param opt_ignoreCase Whether to ignore parameter name case in #getParameterValue.
     * @return The new URI object.
     */
    static create(opt_scheme?: string | null, opt_userInfo?: string | null, opt_domain?: string | null, opt_port?: number | null, opt_path?: string | null, opt_query?: string | Uri.QueryData | null, opt_fragment?: string | null, opt_ignoreCase?: boolean): Uri;
    /**
     * Resolves a relative Uri against a base Uri, accepting both strings and
     * Uri objects.
     * @param base Base Uri.
     * @param rel Relative Uri.
     * @return Resolved uri.
     */
    static resolve(base: any, rel: any): Uri;
    /**
     * Removes dot segments in given path component, as described in
     * RFC 3986, section 5.2.4.
     * @param path A non-empty path component.
     * @return Path component with removed dot segments.
     */
    static removeDotSegments(path: string): string;
    /**
     * Checks whether two URIs have the same domain.
     * @param uri1String First URI string.
     * @param uri2String Second URI string.
     * @return true if the two URIs have the same domain; false otherwise.
     */
    static haveSameDomain(uri1String: string, uri2String: string): boolean;
}
export declare namespace Uri {
    /**
     * Class used to represent URI query parameters.  It is essentially a hash of
     * name-value pairs, though a name can be present more than once.
     *
     * Has the same interface as the collections in structs.
     */
    class QueryData {
        /**
         * Class used to represent URI query parameters.  It is essentially a hash of
         * name-value pairs, though a name can be present more than once.
         *
         * Has the same interface as the collections in structs.
         * @param opt_query Optional encoded query string to parse into the object.
         * @param opt_ignoreCase If true, ignore the case of the parameter name in #get.
         */
        constructor(opt_query?: string | null, opt_ignoreCase?: boolean);
        private noStructuralTyping_closure_goog_uri_uri_QueryData;
        /**
         * Creates a new query data instance from a map of names and values.
         * @param map Map of string parameter names to parameter value. If parameter value is an array, it is treated as if the key maps to each individual value in the array.
         * @param opt_ignoreCase If true, ignore the case of the parameter name in #get.
         * @return The populated query data instance.
         */
        static createFromMap(map: maps.MapLike<string, any> | object, opt_ignoreCase?: boolean): Uri.QueryData;
        /**
         * Creates a new query data instance from parallel arrays of parameter names
         * and values. Allows for duplicate parameter names. Throws an error if the
         * lengths of the arrays differ.
         * @param keys Parameter names.
         * @param values Parameter values.
         * @param opt_ignoreCase If true, ignore the case of the parameter name in #get.
         * @return The populated query data instance.
         */
        static createFromKeysValues(keys: string[], values: any[], opt_ignoreCase?: boolean): Uri.QueryData;
        getCount(): number | null;
        /**
         * Adds a key value pair.
         * @param key Name.
         * @param value Value.
         * @return Instance of this object.
         */
        add(key: string, value: any): Uri.QueryData;
        /**
         * Removes all the params with the given key.
         * @param key Name.
         * @return Whether any parameter was removed.
         */
        remove(key: string): boolean;
        /**
         * Clears the parameters.
         */
        clear(): void;
        isEmpty(): boolean;
        /**
         * Whether there is a parameter with the given name
         * @param key The parameter name to check for.
         * @return Whether there is a parameter with the given name.
         */
        containsKey(key: string): boolean;
        /**
         * Whether there is a parameter with the given value.
         * @param value The value to check for.
         * @return Whether there is a parameter with the given value.
         */
        containsValue(value: any): boolean;
        /**
         * Runs a callback on every key-value pair in the map, including duplicate keys.
         * This won't maintain original order when duplicate keys are interspersed (like
         * getKeys() / getValues()).
         * @param opt_scope The value of "this" inside f.
         */
        forEach<SCOPE = any>(f: (this: SCOPE | null) => any, opt_scope?: SCOPE | null): void;
        /**
         * Returns all the keys of the parameters. If a key is used multiple times
         * it will be included multiple times in the returned array
         * @return All the keys of the parameters.
         */
        getKeys(): string[];
        /**
         * Returns all the values of the parameters with the given name. If the query
         * data has no such key this will return an empty array. If no key is given
         * all values wil be returned.
         * @param opt_key The name of the parameter to get the values for.
         * @return All the values of the parameters with the given name.
         */
        getValues(opt_key?: string): any[];
        /**
         * Sets a key value pair and removes all other keys with the same value.
         * @param key Name.
         * @param value Value.
         * @return Instance of this object.
         */
        set(key: string, value: any): Uri.QueryData;
        /**
         * Returns the first value associated with the key. If the query data has no
         * such key this will return undefined or the optional default.
         * @param key The name of the parameter to get the value for.
         * @param opt_default The default value to return if the query data has no such key.
         * @return The first string value associated with the key, or opt_default if there's no value.
         */
        get(key: string, opt_default?: any): any;
        /**
         * Sets the values for a key. If the key already exists, this will
         * override all of the existing values that correspond to the key.
         * @param key The key to set values for.
         * @param values The values to set.
         */
        setValues(key: string, values: any[]): void;
        toString(): string;
        toDecodedString(): string;
        /**
         * Removes all keys that are not in the provided list. (Modifies this object.)
         * @param keys The desired keys.
         * @return a reference to this object.
         */
        filterKeys(keys: string[] | null): Uri.QueryData;
        /**
         * Clone the query data instance.
         * @return New instance of the QueryData object.
         */
        clone(): Uri.QueryData;
        /**
         * Ignore case in parameter names.
         * NOTE: If there are already key/value pairs in the QueryData, and
         * ignoreCase_ is set to false, the keys will all be lower-cased.
         * @param ignoreCase whether this Uri should ignore case.
         */
        setIgnoreCase(ignoreCase: boolean): void;
        /**
         * Extends a query data object with another query data or map like object. This
         * operates 'in-place', it does not create a new QueryData object.
         * @param var_args The object from which key value pairs will be copied. Note: does not accept null.
         */
        extend(...var_args: (Uri.QueryData | maps.MapLike<any, any> | object | null)[]): void;
    }
}

/**
 * A class for handling browser cookies.
 */
export declare class Cookies {
    /**
     * A class for handling browser cookies.
     * @param context The context document to get/set cookies on.
     */
    constructor(context: Document | null);
    private noStructuralTyping_closure_goog_net_cookies_Cookies;
    /**
     * Static constant for the size of cookies. Per the spec, there's a 4K limit
     * to the size of a cookie. To make sure users can't break this limit, we
     * should truncate long cookies at 3950 bytes, to be extra careful with dumb
     * browsers/proxies that interpret 4K as 4000 rather than 4096.
     */
    static MAX_COOKIE_LENGTH: number;
    /**
     * Returns true if cookies are enabled.
     *
     * navigator.cookieEnabled is an unreliable API in some browsers such as
     * Internet Explorer. It will return true even when cookies are actually
     * blocked. To work around this, check for the presence of cookies, or attempt
     * to manually set and retrieve a cookie, which is the ultimate test of whether
     * or not a browser supports cookies.
     * @return True if cookies are enabled.
     */
    isEnabled(): boolean;
    /**
     * We do not allow '=', ';', or white space in the name.
     *
     * NOTE: The following are allowed by this method, but should be avoided for
     * cookies handled by the server.
     * - any name starting with '$'
     * - 'Comment'
     * - 'Domain'
     * - 'Expires'
     * - 'Max-Age'
     * - 'Path'
     * - 'Secure'
     * - 'Version'
     * @param name Cookie name.
     * @return Whether name is valid.
     */
    isValidName(name: string): boolean;
    /**
     * We do not allow ';' or line break in the value.
     *
     * Spec does not mention any illegal characters, but in practice semi-colons
     * break parsing and line breaks truncate the name.
     * @param value Cookie value.
     * @return Whether value is valid.
     */
    isValidValue(value: string): boolean;
    /**
     * Sets a cookie.  The max_age can be -1 to set a session cookie. To remove and
     * expire cookies, use remove() instead.
     *
     * Neither the `name` nor the `value` are encoded in any way. It is
     * up to the callers of `get` and `set` (as well as all the other
     * methods) to handle any possible encoding and decoding.
     * @param name The cookie name.
     * @param value The cookie value.
     * @param options The options object.
     */
    set(name: string, value: string, options?: Cookies.SetOptions): void;
    /**
     * Returns the value for the first cookie with the given name.
     * @param name The name of the cookie to get.
     * @param opt_default If not found this is returned instead.
     * @return The value of the cookie. If no cookie is set this returns opt_default or undefined if opt_default is not provided.
     */
    get(name: string, opt_default?: string): string | undefined;
    /**
     * Removes and expires a cookie.
     * @param name The cookie name.
     * @param opt_path The path of the cookie. If null or not present, expires the cookie set at the full request path.
     * @param opt_domain The domain of the cookie, or null to expire a cookie set at the full request host name. If not provided, the default is null (i.e. cookie at full request host name).
     * @return Whether the cookie existed before it was removed.
     */
    remove(name: string, opt_path?: string | null, opt_domain?: string | null): boolean;
    /**
     * Gets the names for all the cookies.
     * @return An array with the names of the cookies.
     */
    getKeys(): string[];
    /**
     * Gets the values for all the cookies.
     * @return An array with the values of the cookies.
     */
    getValues(): string[];
    isEmpty(): boolean;
    getCount(): number;
    /**
     * Returns whether there is a cookie with the given name.
     * @param key The name of the cookie to test for.
     * @return Whether there is a cookie by that name.
     */
    containsKey(key: string): boolean;
    /**
     * Returns whether there is a cookie with the given value. (This is an O(n)
     * operation.)
     * @param value The value to check for.
     * @return Whether there is a cookie with that value.
     */
    containsValue(value: string): boolean;
    /**
     * Removes all cookies for this document.  Note that this will only remove
     * cookies from the current path and domain.  If there are cookies set using a
     * subpath and/or another domain these will still be there.
     */
    clear(): void;
    /**
     * Getter for the static instance of Cookies.
     */
    static getInstance(): Cookies;
}
export declare namespace Cookies {
    /**
     * Options object for calls to Cookies.prototype.set.
     */
    interface SetOptions {
    }
    /**
     * Valid values for the SameSite cookie attribute.  In 2019, browsers began the
     * process of changing the default from NONE to LAX.
     */
    enum SameSite {
        LAX = "lax",
        NONE = "none",
        STRICT = "strict"
    }
}

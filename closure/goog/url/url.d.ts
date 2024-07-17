/**
 * For testing only - this adjusts the base used in `resolveRelativeUrl`.
 * @param base Maybe this should just be visible to allow others using this package to test it?
 */
declare const setUrlBaseForTesting: (base: string) => void;
export { setUrlBaseForTesting };
/**
 * ReadonlySearchParams partially implements the URLSearchParams interface,
 * excluding all mutability methods and some less-useful methods for reading the
 * underlying data. Exclusions:
 * - append
 * - delete
 * - set
 * - sort
 * - values()
 * - entries()
 * - forEach(...)
 */
interface ReadonlySearchParams extends Iterable<string[]> {
    get(key: string): string | null;
    getAll(key: string): string[];
    has(key: string): boolean;
    toString(): string;
}
export { ReadonlySearchParams };
/**
 * UrlLike mirrors most of the public readonly interface of the URL object in
 * the URL Web API.
 * Notable exclusions:
 * - toJson()
 * - searchParams
 *
 * Instead of using the searchParams property, use `getSearchParams` from this
 * package. This allows for the relevant code to be removed when inspection of
 * search parameters is not needed.
 */
interface UrlLike {
    toString(): string;
    href: string;
    protocol: string;
    username: string;
    password: string;
    host: string;
    hostname: string;
    port: string;
    origin: string;
    pathname: string;
    search: string;
    hash: string;
}
export { UrlLike };
/**
 * Resolves the given url string (with the optional base) into a URL object
 * according to the [URL spec][https://url.spec.whatwg.org/]. Will throw an
 * error if the resulting URL is invalid or if the browser can't or won't use
 * that URL for some reason. Relative URLs are considered invalid without a base
 * and will throw an error - please use `resolveRelativeUrl` instead for this
 * use-case.
 *
 * Note that calling resolveUrl with both urlStr and baseStr may have surprising
 * behavior. For example, any invocation with both parameters will never use the
 * hash value from baseStr. Similarly, passing a path segment in urlStr will
 * append (or replace) the path in baseStr, but will ALSO exclude the search and
 * hash portions of baseStr from the resulting URL. See the unit tests
 * (specifically testWithBase* test cases) for examples.
 *
 * Compatibility notes:
 * - both IE (all versions) and Edge (EdgeHTML only) disallow URLs to have user
 * information in them, and parsing those strings will throw an error.
 * - FireFox disallows URLs with just a password in the userinfo.
 */
declare const resolveUrl: UrlLike;
export { resolveUrl };
/**
 * Returns a URLSearchParams-like object for a given URL object. This is used
 * instead of the native URL object's 'searchParams' property to allow the
 * Closure Compiler to code-strip the polyfill if searchParams are never used.
 */
declare const getSearchParams: ReadonlySearchParams;
export { getSearchParams };
/**
 * Resolves the given relative URL string without requiring a specific base URL
 * (unlike resolveUrl). Will resolve the relative URL against the current
 * document's BaseURI, and the resulting URL WILL contain properties from
 * this URI.
 */
declare const resolveRelativeUrl: UrlLike;
export { resolveRelativeUrl };
interface UrlPrimitivePartsPartial {
    protocol: string | undefined;
    username: string | undefined;
    password: string | undefined;
    hostname: string | undefined;
    port: string | undefined;
    pathname: string | undefined;
    search: string | undefined;
    searchParams: Iterable<string[]> | undefined;
    hash: string | undefined;
}
export { UrlPrimitivePartsPartial };
/**
 * Creates a new URL object from primitve parts, optionally allowing for some of
 * those parts to be taken from a base URL object. Parts only accepts primitive
 * parts of the URL (e.g will NOT accept origin or host) for simplicity, and
 * only accepts either a search OR searchParams property, not both at the same
 * time. The resulting URL-like string is then parsed by `resolveUrl`, and as
 * such this method will also throw an error if the result is not a valid URL
 * (unlike Object.assign and other similar combinations of object properties).
 *
 * This method does some validation of its inputs, and in general is NOT a good
 * way to clone an existing URL object. For that purpose, prefer to use
 * `resolveUrl(existingURLObject.href)`.
 */
declare const createUrl: UrlLike;
export { createUrl };

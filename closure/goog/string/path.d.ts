/**
 * Returns the final component of a pathname.
 * See http://docs.python.org/library/os.path.html#os.path.basename
 * @param path A pathname.
 * @return path The final component of a pathname, i.e. everything after the final slash.
 */
declare function baseName_(path: string): string;
export { baseName_ as baseName };
/**
 * Alias to baseName.
 * @param path A pathname.
 * @return path The final component of a pathname.
 */
export declare function basename(a: string): string;
/**
 * Returns the directory component of a pathname.
 * See http://docs.python.org/library/os.path.html#os.path.dirname
 * @param path A pathname.
 * @return The directory component of a pathname, i.e. everything leading up to the final slash.
 */
export declare function dirname(path: string): string;
/**
 * Extracts the extension part of a pathname.
 * @param path The path name to process.
 * @return The extension if any, otherwise the empty string.
 */
export declare function extension(path: string): string;
/**
 * Joins one or more path components (e.g. 'foo/' and 'bar' make 'foo/bar').
 * An absolute component will discard all previous component.
 * See http://docs.python.org/library/os.path.html#os.path.join
 * @param var_args One of more path components.
 * @return The path components joined.
 */
export declare function join(...var_args: (string | undefined)[]): string;
/**
 * Normalizes a pathname by collapsing duplicate separators, parent directory
 * references ('..'), and current directory references ('.').
 * See http://docs.python.org/library/os.path.html#os.path.normpath
 * @param path One or more path components.
 * @return The path after normalization.
 */
export declare function normalizePath(path: string): string;
/**
 * Splits a pathname into "dirname" and "baseName" components, where "baseName"
 * is everything after the final slash. Either part may return an empty string.
 * See http://docs.python.org/library/os.path.html#os.path.split
 * @param path A pathname.
 * @return An array of [dirname, basename].
 */
export declare function split(path: string): string[];

/**
 * Sets a custom data attribute on an element. The key should be
 * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
 * @param element DOM node to set the custom data attribute on.
 * @param key Key for the custom data attribute.
 * @param value Value for the custom data attribute.
 */
export declare function set(element: Element | null, key: string, value: string): void;
/**
 * Gets a custom data attribute from an element. The key should be
 * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
 * @param element DOM node to get the custom data attribute from.
 * @param key Key for the custom data attribute.
 * @return The attribute value, if it exists.
 */
export declare function get(element: Element | null, key: string): string | null;
/**
 * Removes a custom data attribute from an element. The key should be
 * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
 * @param element DOM node to get the custom data attribute from.
 * @param key Key for the custom data attribute.
 */
export declare function remove(element: Element | null, key: string): void;
/**
 * Checks whether custom data attribute exists on an element. The key should be
 * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
 * @param element DOM node to get the custom data attribute from.
 * @param key Key for the custom data attribute.
 * @return Whether the attribute exists.
 */
export declare function has(element: Element | null, key: string): boolean;
/**
 * Gets all custom data attributes as a string map.  The attribute names will be
 * camel cased (e.g., data-foo-bar -> dataset['fooBar']).  This operation is not
 * safe for attributes having camel-cased names clashing with already existing
 * properties (e.g., data-to-string -> dataset['toString']).
 * @param element DOM node to get the data attributes from.
 * @return The string map containing data attributes and their respective values.
 */
export declare function getAll(element: Element): object;

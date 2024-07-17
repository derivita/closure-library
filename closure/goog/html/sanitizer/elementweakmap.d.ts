/**
 * A weakmap-like implementation for browsers that don't support native WeakMap.
 * It uses a data attribute on the key element for O(1) lookups.
 */
declare class ElementWeakMap<T = any> {
    /**
     * A weakmap-like implementation for browsers that don't support native WeakMap.
     * It uses a data attribute on the key element for O(1) lookups.
     */
    constructor();
    private noStructuralTyping_closure_goog_html_sanitizer_elementweakmap_ElementWeakMap;
    /**
     * Stores a `elementKey` -> `value` mapping.
     */
    set(elementKey: Element, value: T): ElementWeakMap;
    /**
     * Gets the value previously stored for `elementKey`, or undefined if no
     * value was stored for such key.
     */
    get(elementKey: Element): Element | undefined;
    /**
     * Clears the map.
     */
    clear(): void;
    /**
     * Returns either this weakmap adapter or the native weakmap implmentation, if
     * available.
     */
    static newWeakMap(): ElementWeakMap | WeakMap;
}
export { ElementWeakMap };

/**
 * Represents a single CSS selector, as described in
 * http://www.w3.org/TR/REC-CSS2/selector.html
 * Currently UNSUPPORTED are the following selector features:
 * <ul>
 * <li>pseudo-classes (:hover)
 * <li>child selectors (div > h1)
 * <li>adjacent sibling selectors (div + h1)
 * <li>attribute selectors (input[type=submit])
 * </ul>
 */
export declare class CssSelector_ {
    /**
     * Represents a single CSS selector, as described in
     * http://www.w3.org/TR/REC-CSS2/selector.html
     * Currently UNSUPPORTED are the following selector features:
     * <ul>
     * <li>pseudo-classes (:hover)
     * <li>child selectors (div > h1)
     * <li>adjacent sibling selectors (div + h1)
     * <li>attribute selectors (input[type=submit])
     * </ul>
     * @param opt_selectorString String containing selectors to parse.
     */
    constructor(opt_selectorString?: string);
    private noStructuralTyping_closure_goog_cssom_iframe_style_CssSelector_;
    parts: CssSelectorPart_[] | undefined;
    /**
     * Tests to see what part of a DOM element hierarchy would be matched by
     * this selector, and returns the indexes of the matching element and matching
     * selector part.
     * <p>
     * For example, given this hierarchy:
     * document > html > body > div.content > div.sidebar > p
     * and this CSS selector:
     * body div.sidebar h1
     * This would return {elementIndex: 4, selectorPartIndex: 1},
     * indicating that the element at index 4 matched
     * the css selector at index 1.
     * </p>
     * @param elementAncestry Object representing an element and its ancestors.
     * @return Object with the properties elementIndex and selectorPartIndex, or null if there was no match.
     */
    matchElementAncestry(elementAncestry: NodeAncestry_ | null): object | null;
}
/**
 * Represents one part of a CSS Selector. For example in the selector
 * 'body #foo .bar', body, #foo, and .bar would be considered selector parts.
 * In the official CSS spec these are called "simple selectors".
 */
declare class CssSelectorPart_ {
    /**
     * Represents one part of a CSS Selector. For example in the selector
     * 'body #foo .bar', body, #foo, and .bar would be considered selector parts.
     * In the official CSS spec these are called "simple selectors".
     * @param selectorPartString A string containing the selector part in css format.
     */
    constructor(selectorPartString: string);
    private noStructuralTyping_closure_goog_cssom_iframe_style_CssSelectorPart_;
    /**
     * Test whether an element matches this selector part, considered in isolation.
     * @param elementInfo Element properties to test.
     * @return Whether the element matched.
     */
    testElement(elementInfo: object | null): boolean;
}
/**
 * Represents an element and all its parent/ancestor nodes.
 * This class exists as an optimization so we run tests on an element
 * hierarchy multiple times without walking the dom each time.
 */
export declare class NodeAncestry_ {
    /**
     * Represents an element and all its parent/ancestor nodes.
     * This class exists as an optimization so we run tests on an element
     * hierarchy multiple times without walking the dom each time.
     * @param el The DOM element whose ancestry should be stored.
     */
    constructor(el: Element | null);
    private noStructuralTyping_closure_goog_cssom_iframe_style_NodeAncestry_;
    /**
     * Array of nodes in order of hierarchy from the top of the document
     * to the node passed to the constructor
     */
    nodes: (Node | null)[] | null;
}
/**
 * Throw away all cached dom information. Call this if you've modified
 * the structure or class/id attributes of your document and you want
 * to recalculate the currently applied CSS rules.
 */
export declare function resetDomCache(): void;
/**
 * Reads the current css rules from element's document, and returns them
 * rewriting selectors so that any rules that formerly applied to element will
 * be applied to doc.body. This makes it possible to replace a block in a page
 * with an iframe and preserve the css styling of the contents.
 * @param element The element for which context should be calculated.
 * @param opt_forceRuleSetCacheUpdate Flag to force the internal cache of rulesets to refresh itself before we read the same.
 * @param opt_copyBackgroundContext Flag indicating that if the `element` has a transparent background, background rules from the nearest ancestor element(s) that have background-color and/or background-image set should be copied.
 * @return String containing all CSS rules present in the original document, with modified selectors.
 */
export declare function getElementContext(element: Element | null, opt_forceRuleSetCacheUpdate?: boolean, opt_copyBackgroundContext?: boolean): string;
/**
 * Generates a set of CSS properties that can be used to make another
 * element's background look like the background of a given element.
 * This is useful when you want to copy the CSS context of an element,
 * but the element's background is transparent. In the original context
 * you would see the ancestor's backround color/image showing through,
 * but in the new context there might be a something different underneath.
 * Note that this assumes the element you're copying context from has a
 * fairly standard positioning/layout - it assumes that when the element
 * has a transparent background what you're going to see through it is its
 * ancestors.
 * @param element The element from which to copy background styles.
 * @return Object containing background* properties.
 */
export declare function getBackgroundContext(element: Element | null): object;
export {};

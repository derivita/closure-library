/**
 * Constructs a {@link SafeDomTreeProcessor} object that safely parses an input
 * string into a DOM tree using an inert document, and creates a new tree based
 * on the original tree, optionally transforming it in the process. The
 * transformation is not specified in this abstract class; subclasses are
 * supposed to override its protected methods to define a transformation that
 * allows tags and attributes, drops entire subtrees, modifies tag names or
 * attributes, etc.
 */
declare abstract class SafeDomTreeProcessor {
    /**
     * Constructs a {@link SafeDomTreeProcessor} object that safely parses an input
     * string into a DOM tree using an inert document, and creates a new tree based
     * on the original tree, optionally transforming it in the process. The
     * transformation is not specified in this abstract class; subclasses are
     * supposed to override its protected methods to define a transformation that
     * allows tags and attributes, drops entire subtrees, modifies tag names or
     * attributes, etc.
     */
    constructor();
    private noStructuralTyping_closure_goog_html_sanitizer_safedomtreeprocessor_SafeDomTreeProcessor;
    protected inertDocument_: Document;
    /**
     * Parses an HTML string and walks the resulting DOM forest to apply the
     * transformation function and generate a new forest. Returns the string
     * representation of the forest.
     */
    protected processToString(html: string): string;
    /**
     * Parses an HTML string and walks the resulting DOM forest to apply the
     * transformation function and generate a copy of the forest. Returns the forest
     * wrapped in a common SPAN parent, so that the result is always a tree.
     */
    protected processToTree(html: string): HTMLSpanElement;
    /**
     * Creates the root SPAN element for the new tree. This function can be
     * overridden to add attributes to the tag. Note that if any attributes are
     * added to the element, then {@link processToString} will not strip it from the
     * generated string to preserve the attributes.
     */
    protected abstract processRoot(newRoot: HTMLSpanElement): any;
    /**
     * Pre-processes the input html before the main tree-based transformation.
     */
    protected abstract preProcessHtml(html: string): string;
    /**
     * Creates a new text node from the original text node, or null if the node
     * should not be copied over to the new tree.
     */
    protected abstract createTextNode(originalNode: Text): Text | null;
    /**
     * Creates a new element from the original element. This function should only
     * either create a new element (optionally changing the tag name from the
     * original element) or return null to prevent the entire subtree from appearing
     * in the output. Note that TEMPLATE tags and their contents are automatically
     * dropped, and this function is not called to decide whether to keep them or
     * not.
     */
    protected abstract createElementWithoutAttributes(originalElement: Element): Element | null;
    /**
     * Returns the new value for an attribute, or null if the attribute should be
     * dropped.
     */
    protected abstract processElementAttribute(element: Element, attribute: Attr): string | null;
    static SAFE_PARSING_SUPPORTED: boolean;
}
export { SafeDomTreeProcessor };

/**
 * This subclass of HTMLElement is used when only a HTMLElement is possible and
 * not any of its subclasses. Normally, a type can refer to an instance of
 * itself or an instance of any subtype. More concretely, if HTMLElement is used
 * then the compiler must assume that it might still be e.g. HTMLScriptElement.
 * With this, the type check knows that it couldn't be any special element.
 */
export declare class HtmlElement extends HTMLElement {
    /**
     * This subclass of HTMLElement is used when only a HTMLElement is possible and
     * not any of its subclasses. Normally, a type can refer to an instance of
     * itself or an instance of any subtype. More concretely, if HTMLElement is used
     * then the compiler must assume that it might still be e.g. HTMLScriptElement.
     * With this, the type check knows that it couldn't be any special element.
     */
    constructor();
    private noStructuralTyping_closure_goog_dom_htmlelement_HtmlElement;
}

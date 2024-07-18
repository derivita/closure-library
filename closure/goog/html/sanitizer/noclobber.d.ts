type Methods = Function;
declare const Methods: {
    ATTRIBUTES_GETTER: void;
    HAS_ATTRIBUTE: Function;
    GET_ATTRIBUTE: Function;
    SET_ATTRIBUTE: Function;
    REMOVE_ATTRIBUTE: Function;
    INNER_HTML_GETTER: void;
    GET_ELEMENTS_BY_TAG_NAME: Function;
    MATCHES: Function;
    NODE_NAME_GETTER: void;
    NODE_TYPE_GETTER: void;
    PARENT_NODE_GETTER: void;
    CHILD_NODES_GETTER: void;
    APPEND_CHILD: Function;
    STYLE_GETTER: void;
    SHEET_GETTER: void;
    GET_PROPERTY_VALUE: Function;
    SET_PROPERTY: Function;
    NAMESPACE_URI_GETTER: void;
};
/**
 * Returns an element's attributes without falling prey to things like
 * <form><input name="attributes"></form>. Equivalent to
 * `node.attributes`.
 */
declare function getElementAttributes(element: Element): NamedNodeMap;
/**
 * Returns whether an element has a specific attribute, without falling prey to
 * things like <form><input name="hasAttribute"></form>.
 * Equivalent to {@code element.hasAttribute("foo")}.
 */
declare function hasElementAttribute(element: Element, attrName: string): boolean;
/**
 * Returns a specific attribute from an element without falling prey to
 * things like <form><input name="getAttribute"></form>.
 * Equivalent to {@code element.getAttribute("foo")}.
 */
declare function getElementAttribute(element: Element, attrName: string): string | null;
/**
 * Sets an element's attributes without falling prey to things like
 * <form><input name="setAttribute"></form>. Equivalent to {@code
 * element.setAttribute("foo", "bar")}.
 */
declare function setElementAttribute(element: Element, name: string, value: string): void;
/**
 * Deletes a specific attribute from an element without falling prey to
 * things like <form><input name="removeAttribute"></form>.
 * Equivalent to {@code element.removeAttribute("foo")}.
 */
declare function removeElementAttribute(element: Element, attrName: string): void;
/**
 * Returns a node's innerHTML property value without falling prey to things like
 * <form><input name="innerHTML"></form>. Equivalent to
 * `element.innerHTML`.
 */
declare function getElementInnerHTML(element: Element): string;
/**
 * Returns an element's style without falling prey to things like
 * <form><input name="style"></form>.
 */
declare function getElementStyle(element: Element): CSSStyleDeclaration;
/**
 * Get the children of a specific tag matching the provided tag name without
 * falling prey to things like <form><input name="getElementsByTagName"></form>.
 * Equivalent to {@code element.getElementsByTagName("foo")}.
 */
declare function getElementsByTagName(element: Element, name: string): Element[];
/**
 * Returns an element's style without falling prey to things like
 * <form><input name="style"></form>.
 */
declare function getElementStyleSheet(element: Element): CSSStyleSheet;
/**
 * Returns true if the element would be selected by the provided selector,
 * without falling prey to things like <form><input name="setAttribute"></form>.
 * Equivalent to {@code element.matches("foo")}.
 */
declare function elementMatches(element: Element, selector: string): boolean;
/**
 * Asserts that a Node is an Element, without falling prey to things like
 * <form><input name="nodeType"></form>.
 */
declare function assertNodeIsElement(node: Node): Element;
/**
 * Returns whether the node is an Element, without falling prey to things like
 * <form><input name="nodeType"></form>.
 */
declare function isNodeElement(node: Node): boolean;
/**
 * Returns a node's nodeName without falling prey to things like
 * <form><input name="nodeName"></form>.
 */
declare function getNodeName(node: Node): string;
/**
 * Returns a node's nodeType without falling prey to things like
 * `<form><input name="nodeType"></form>`.
 */
declare function getNodeType(node: Node): number;
/**
 * Returns a node's parentNode without falling prey to things like
 * <form><input name="parentNode"></form>.
 */
declare function getParentNode(node: Node): Node | null;
/**
 * Returns the value of node.childNodes without falling prey to things like
 * <form><input name="childNodes"></form>.
 */
declare function getChildNodes(node: Node): NodeList;
/**
 * Appends a child to a node without falling prey to things like
 * <form><input name="appendChild"></form>.
 */
declare function appendNodeChild(parent: Node, child: Node): Node;
/**
 * Provides a way cross-browser way to get a CSS value from a CSS declaration.
 * @param cssStyle A CSS style object.
 * @param propName A property name.
 * @return Value of the property as parsed by the browser.
 */
declare function getCssPropertyValue(cssStyle: CSSStyleDeclaration, propName: string): string;
/**
 * Provides a cross-browser way to set a CSS value on a CSS declaration.
 * @param cssStyle A CSS style object.
 * @param propName A property name.
 * @param sanitizedValue Sanitized value of the property to be set on the CSS style object.
 */
declare function setCssProperty(cssStyle: CSSStyleDeclaration, propName: string, sanitizedValue: string): void;
/**
 * Returns an element's namespace URI without falling prey to things like
 * <form><input name="namespaceURI"></form>.
 */
declare function getElementNamespaceURI(element: Element): string;
export { getElementAttributes, hasElementAttribute, getElementAttribute, setElementAttribute, removeElementAttribute, getElementInnerHTML, getElementStyle, getElementsByTagName, getElementStyleSheet, elementMatches, assertNodeIsElement, isNodeElement, getNodeName, getNodeType, getParentNode, getChildNodes, appendNodeChild, getCssPropertyValue, setCssProperty, getElementNamespaceURI, Methods, };

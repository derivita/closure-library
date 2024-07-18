/**
 * Max XML size for MSXML2.  Used to prevent potential DoS attacks.
 */
export declare var MAX_XML_SIZE_KB: number;
/**
 * Max XML size for MSXML2.  Used to prevent potential DoS attacks.
 */
export declare var MAX_ELEMENT_DEPTH: number;
/**
 * True if browser has ActiveXObject support.
 * Possible override if this test become wrong in coming IE versions.
 */
export declare var ACTIVEX_SUPPORT: boolean;
/**
 * Creates an XML document appropriate for the current JS runtime
 * @param opt_rootTagName The root tag name.
 * @param opt_namespaceUri Namespace URI of the document element.
 * @param opt_preferActiveX Whether to default to ActiveXObject to create Document in IE. Use this if you need xpath support in IE (e.g., selectSingleNode or selectNodes), but be aware that the ActiveXObject does not support various DOM-specific Document methods and attributes.
 * @return The new document.
 */
export declare function createDocument(opt_rootTagName?: string, opt_namespaceUri?: string, opt_preferActiveX?: boolean): Document | null;
/**
 * Creates an XML document from a string
 * @param xml The text.
 * @param opt_preferActiveX Whether to default to ActiveXObject to create Document in IE. Use this if you need xpath support in IE (e.g., selectSingleNode or selectNodes), but be aware that the ActiveXObject does not support various DOM-specific Document methods and attributes.
 * @return XML document from the text.
 */
export declare function loadXml(xml: string, opt_preferActiveX?: boolean): Document | null;
/**
 * Serializes an XML document or subtree to string.
 * @param xml The document or the root node of the subtree.
 * @return The serialized XML.
 */
export declare function serialize(xml: Document | Element | null): string;
/**
 * Selects a single node using an Xpath expression and a root node
 * @param node The root node.
 * @param path Xpath selector.
 * @return The selected node, or null if no matching node.
 */
export declare function selectSingleNode(node: Node | null, path: string): Node | null;
/**
 * Selects multiple nodes using an Xpath expression and a root node
 * @param node The root node.
 * @param path Xpath selector.
 * @return The selected nodes, or empty array if no matching nodes.
 */
export declare function selectNodes(node: Node | null, path: string): NodeList | Node[];
/**
 * Sets multiple attributes on an element. Differs from dom.setProperties
 * in that it exclusively uses the element's setAttributes method. Use this
 * when you need to ensure that the exact property is available as an attribute
 * and can be read later by the native getAttribute method.
 * @param element XML or DOM element to set attributes on.
 * @param attributes Map of property:value pairs.
 */
export declare function setAttributes(element: Element, attributes: {
    [key: string]: string;
}): void;

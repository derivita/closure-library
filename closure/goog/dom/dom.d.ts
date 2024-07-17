import { TagName } from './tagname.js';
import { SafeHtml } from '../html/safehtml.js';
import { Coordinate } from '../math/coordinate.js';
import { Size } from '../math/size.js';
import { Const } from '../string/const.js';
export declare var ASSUME_QUIRKS_MODE: boolean;
export declare var ASSUME_STANDARDS_MODE: boolean;
/**
 * Gets the DomHelper object for the document where the element resides.
 * @param opt_element If present, gets the DomHelper for this element.
 * @return The DomHelper.
 */
export declare function getDomHelper(opt_element?: Node | Window | null): DomHelper;
/**
 * Gets the document object being used by the dom library.
 * @return Document object.
 */
export declare function getDocument(): Document;
/**
 * Gets an element from the current document by element id.
 *
 * If an Element is passed in, it is returned.
 * @param element Element ID or a DOM node.
 * @return The element with the given ID, or the node passed in.
 */
export declare function getElement(element: string | Element | null): Element | null;
/**
 * Gets an HTML element from the current document by element id.
 * @return The element with the given ID or null if no such element exists.
 */
export declare function getHTMLElement(id: string): HTMLElement | null;
/**
 * Gets an element by id, asserting that the element is found.
 *
 * This is used when an element is expected to exist, and should fail with
 * an assertion error if it does not (if assertions are enabled).
 * @param id Element ID.
 * @return The element with the given ID, if it exists.
 */
export declare function getRequiredElement(id: string): Element;
/**
 * Gets an HTML element by id, asserting that the element is found.
 *
 * This is used when an element is expected to exist, and should fail with
 * an assertion error if it does not (if assertions are enabled).
 * @param id Element ID.
 * @return The element with the given ID, if it exists.
 */
export declare function getRequiredHTMLElement(id: string): HTMLElement;
/**
 * Alias for getElement.
 * @param element Element ID or a DOM node.
 * @return The element with the given ID, or the node passed in.
 */
export declare function $(a: string | Element | null): Element | null;
/**
 * Gets elements by tag name.
 * @param opt_parent Parent element or document where to look for elements. Defaults to document.
 * @return List of elements. The members of the list are {!Element} if tagName is not a member of TagName or more specific types if it is (e.g. {!HTMLAnchorElement} for TagName.A).
 */
export declare function getElementsByTagName<T = any, R = any>(tagName: TagName<T | null>, opt_parent?: Document | Element): NodeList;
/**
 * Looks up elements by both tag and class name, using browser native functions
 * (`querySelectorAll`, `getElementsByTagName` or
 * `getElementsByClassName`) where possible. This function
 * is a useful, if limited, way of collecting a list of DOM elements
 * with certain characteristics.  `querySelectorAll` offers a
 * more powerful and general solution which allows matching on CSS3
 * selector expressions.
 *
 * Note that tag names are case sensitive in the SVG namespace, and this
 * function converts opt_tag to uppercase for comparisons. For queries in the
 * SVG namespace you should use querySelector or querySelectorAll instead.
 * https://bugzilla.mozilla.org/show_bug.cgi?id=963870
 * https://bugs.webkit.org/show_bug.cgi?id=83438
 * @param opt_tag Element tag name.
 * @param opt_class Optional class name.
 * @param opt_el Optional element to look in.
 * @return Array-like list of elements (only a length property and numerical indices are guaranteed to exist). The members of the array are {!Element} if opt_tag is not a member of TagName or more specific types if it is (e.g. {!HTMLAnchorElement} for TagName.A).
 */
export declare function getElementsByTagNameAndClass<T = any, R = any>(opt_tag?: string | TagName<T | null> | null, opt_class?: string | null, opt_el?: Document | Element | null): ArrayLike<R | null>;
/**
 * Gets the first element matching the tag and the class.
 * @param opt_tag Element tag name.
 * @param opt_class Optional class name.
 * @param opt_el Optional element to look in.
 * @return Reference to a DOM node. The return type is {?Element} if tagName is a string or a more specific type if it is a member of TagName (e.g. {?HTMLAnchorElement} for TagName.A).
 */
export declare function getElementByTagNameAndClass<T = any, R = any>(opt_tag?: string | TagName<T | null> | null, opt_class?: string | null, opt_el?: Document | Element | null): R | null;
/**
 * Returns a static, array-like list of the elements with the provided
 * className.
 * @param className the name of the class to look for.
 * @param opt_el Optional element to look in.
 * @return The items found with the class name provided.
 */
export declare function getElementsByClass(className: string, opt_el?: Document | Element | null): ArrayLike<Element>;
/**
 * Returns the first element with the provided className.
 * @param className the name of the class to look for.
 * @param opt_el Optional element to look in.
 * @return The first item with the class name provided.
 */
export declare function getElementByClass(className: string, opt_el?: Element | Document | null): Element | null;
/**
 * Returns the first element with the provided className and asserts that it is
 * an HTML element.
 * @param className the name of the class to look for.
 * @param opt_parent Optional element to look in.
 * @return The first item with the class name provided.
 */
export declare function getHTMLElementByClass(className: string, opt_parent?: Element | Document): HTMLElement | null;
/**
 * Ensures an element with the given className exists, and then returns the
 * first element with the provided className.
 * @param className the name of the class to look for.
 * @param opt_root Optional element or document to look in.
 * @return The first item with the class name provided.
 */
export declare function getRequiredElementByClass(className: string, opt_root?: Element | Document): Element;
/**
 * Ensures an element with the given className exists, and then returns the
 * first element with the provided className after asserting that it is an
 * HTML element.
 * @param className the name of the class to look for.
 * @param opt_parent Optional element or document to look in.
 * @return The first item with the class name provided.
 */
export declare function getRequiredHTMLElementByClass(className: string, opt_parent?: Element | Document): HTMLElement;
/**
 * Alias for `getElementsByTagNameAndClass`.
 * @param opt_tag Element tag name.
 * @param opt_class Optional class name.
 * @param opt_el Optional element to look in.
 * @return Array-like list of elements (only a length property and numerical indices are guaranteed to exist). The members of the array are {!Element} if opt_tag is not a member of TagName or more specific types if it is (e.g. {!HTMLAnchorElement} for TagName.A).
 */
export declare function $$<T = any, R = any>(a?: string | TagName<T | null> | null, b?: string | null, c?: Element | null): ArrayLike<R | null>;
/**
 * Sets multiple properties, and sometimes attributes, on an element. Note that
 * properties are simply object properties on the element instance, while
 * attributes are visible in the DOM. Many properties map to attributes with the
 * same names, some with different names, and there are also unmappable cases.
 *
 * This method sets properties by default (which means that custom attributes
 * are not supported). These are the exeptions (some of which is legacy):
 * - "style": Even though this is an attribute name, it is translated to a
 * property, "style.cssText". Note that this property sanitizes and formats
 * its value, unlike the attribute.
 * - "class": This is an attribute name, it is translated to the "className"
 * property.
 * - "for": This is an attribute name, it is translated to the "htmlFor"
 * property.
 * - Entries in {@see DIRECT_ATTRIBUTE_MAP_} are set as attributes,
 * this is probably due to browser quirks.
 * - "aria-*", "data-*": Always set as attributes, they have no property
 * counterparts.
 * @param element DOM node to set properties on.
 * @param properties Hash of property:value pairs. Property values can be strings or string.TypedString values (such as goog.html.SafeUrl).
 */
export declare function setProperties(element: Element | null, properties: object | null): void;
/**
 * Gets the dimensions of the viewport.
 *
 * Gecko Standards mode:
 * docEl.clientWidth  Width of viewport excluding scrollbar.
 * win.innerWidth     Width of viewport including scrollbar.
 * body.clientWidth   Width of body element.
 *
 * docEl.clientHeight Height of viewport excluding scrollbar.
 * win.innerHeight    Height of viewport including scrollbar.
 * body.clientHeight  Height of document.
 *
 * Gecko Backwards compatible mode:
 * docEl.clientWidth  Width of viewport excluding scrollbar.
 * win.innerWidth     Width of viewport including scrollbar.
 * body.clientWidth   Width of viewport excluding scrollbar.
 *
 * docEl.clientHeight Height of document.
 * win.innerHeight    Height of viewport including scrollbar.
 * body.clientHeight  Height of viewport excluding scrollbar.
 *
 * IE6/7 Standards mode:
 * docEl.clientWidth  Width of viewport excluding scrollbar.
 * win.innerWidth     Undefined.
 * body.clientWidth   Width of body element.
 *
 * docEl.clientHeight Height of viewport excluding scrollbar.
 * win.innerHeight    Undefined.
 * body.clientHeight  Height of document element.
 *
 * IE5 + IE6/7 Backwards compatible mode:
 * docEl.clientWidth  0.
 * win.innerWidth     Undefined.
 * body.clientWidth   Width of viewport excluding scrollbar.
 *
 * docEl.clientHeight 0.
 * win.innerHeight    Undefined.
 * body.clientHeight  Height of viewport excluding scrollbar.
 *
 * Opera 9 Standards and backwards compatible mode:
 * docEl.clientWidth  Width of viewport excluding scrollbar.
 * win.innerWidth     Width of viewport including scrollbar.
 * body.clientWidth   Width of viewport excluding scrollbar.
 *
 * docEl.clientHeight Height of document.
 * win.innerHeight    Height of viewport including scrollbar.
 * body.clientHeight  Height of viewport excluding scrollbar.
 *
 * WebKit:
 * Safari 2
 * docEl.clientHeight Same as scrollHeight.
 * docEl.clientWidth  Same as innerWidth.
 * win.innerWidth     Width of viewport excluding scrollbar.
 * win.innerHeight    Height of the viewport including scrollbar.
 * frame.innerHeight  Height of the viewport excluding scrollbar.
 *
 * Safari 3 (tested in 522)
 *
 * docEl.clientWidth  Width of viewport excluding scrollbar.
 * docEl.clientHeight Height of viewport excluding scrollbar in strict mode.
 * body.clientHeight  Height of viewport excluding scrollbar in quirks mode.
 * @param opt_window Optional window element to test.
 * @return Object with values 'width' and 'height'.
 */
export declare function getViewportSize(opt_window?: Window | null): Size;
/**
 * Calculates the height of the document.
 * @return The height of the current document.
 */
export declare function getDocumentHeight(): number;
/**
 * Calculates the height of the document of the given window.
 * @param win The window whose document height to retrieve.
 * @return The height of the document of the given window.
 */
export declare function getDocumentHeightForWindow(win: Window): number;
/**
 * Gets the page scroll distance as a coordinate object.
 * @param opt_window Optional window element to test.
 * @return Object with values 'x' and 'y'.
 */
export declare function getPageScroll(opt_window?: Window | null): Coordinate;
/**
 * Gets the document scroll distance as a coordinate object.
 * @return Object with values 'x' and 'y'.
 */
export declare function getDocumentScroll(): Coordinate;
/**
 * Gets the document scroll element.
 * @return Scrolling element.
 */
export declare function getDocumentScrollElement(): Element;
/**
 * Gets the window object associated with the given document.
 * @param opt_doc Document object to get window for.
 * @return The window associated with the given document.
 */
export declare function getWindow(opt_doc?: Document | null): Window;
/**
 * Returns a dom node with a set of attributes.  This function accepts varargs
 * for subsequent nodes to be added.  Subsequent nodes will be added to the
 * first node as childNodes.
 *
 * So:
 * <code>createDom(TagName.DIV, null, createDom(TagName.P),
 * createDom(TagName.P));</code> would return a div with two child
 * paragraphs
 *
 * This function uses {@link setProperties} to set attributes: the
 * `opt_attributes` parameter follows the same rules.
 * @param tagName Tag to create.
 * @param opt_attributes If object, then a map of name-value pairs for attributes. If a string, then this is the className of the new element. If an array, the elements will be joined together as the className of the new element.
 * @param var_args Further DOM nodes or strings for text nodes. If one of the var_args is an array or NodeList, its elements will be added as childNodes instead.
 * @return Reference to a DOM node. The return type is {!Element} if tagName is a string or a more specific type if it is a member of TagName (e.g. {!HTMLAnchorElement} for TagName.A).
 */
export declare function createDom<T = any, R = any>(tagName: string | TagName<T | null>, opt_attributes?: object | string[] | string | null, ...var_args: (object | string | any[] | NodeList | null | undefined | null)[]): R | null;
/**
 * Alias for `createDom`.
 * @param tagName Tag to create.
 * @param opt_attributes If object, then a map of name-value pairs for attributes. If a string, then this is the className of the new element. If an array, the elements will be joined together as the className of the new element.
 * @param var_args Further DOM nodes or strings for text nodes. If one of the var_args is an array, its children will be added as childNodes instead.
 * @return Reference to a DOM node. The return type is {!Element} if tagName is a string or a more specific type if it is a member of TagName (e.g. {!HTMLAnchorElement} for TagName.A).
 */
export declare function $dom<T = any, R = any>(a: string | TagName<T | null>, b?: object | string[] | string | null, ...c: (object | string | any[] | NodeList | null | undefined | null)[]): R | null;
/**
 * Creates a new element.
 * @param name Tag to create.
 * @return The new element. The return type is {!Element} if name is a string or a more specific type if it is a member of TagName (e.g. {!HTMLAnchorElement} for TagName.A).
 */
export declare function createElement<T = any, R = any>(name: string | TagName<T | null>): R | null;
/**
 * Creates a new text node.
 * @param content Content.
 * @return The new text node.
 */
export declare function createTextNode(content: number | string): Text;
/**
 * Create a table.
 * @param rows The number of rows in the table.  Must be >= 1.
 * @param columns The number of columns in the table.  Must be >= 1.
 * @param opt_fillWithNbsp If true, fills table entries with `Unicode.NBSP` characters.
 * @return The created table.
 */
export declare function createTable(rows: number, columns: number, opt_fillWithNbsp?: boolean): Element;
/**
 * Creates a new Node from constant strings of HTML markup.
 * @param var_args The HTML strings to concatenate then convert into a node.
 */
export declare function constHtmlToNode(...var_args: Const[]): Node;
/**
 * Converts HTML markup into a node. This is a safe version of
 * `htmlToDocumentFragment` which is now deleted.
 * @param html The HTML markup to convert.
 * @return The resulting node.
 */
export declare function safeHtmlToNode(html: SafeHtml): Node;
/**
 * Returns true if the browser is in "CSS1-compatible" (standards-compliant)
 * mode, false otherwise.
 * @return True if in CSS1-compatible mode.
 */
export declare function isCss1CompatMode(): boolean;
/**
 * Returns true if the browser is in "CSS1-compatible" (standards-compliant)
 * mode, false otherwise.
 * @param doc The document to check.
 * @return True if in CSS1-compatible mode.
 */
export declare function isCss1CompatMode_(doc: Document): boolean;
/**
 * Determines if the given node can contain children, intended to be used for
 * HTML generation.
 *
 * IE natively supports node.canHaveChildren but has inconsistent behavior.
 * Prior to IE8 the base tag allows children and in IE9 all nodes return true
 * for canHaveChildren.
 *
 * In practice all non-IE browsers allow you to add children to any node, but
 * the behavior is inconsistent:
 *
 * <pre>
 * var a = createElement(TagName.BR);
 * a.appendChild(document.createTextNode('foo'));
 * a.appendChild(document.createTextNode('bar'));
 * console.log(a.childNodes.length);  // 2
 * console.log(a.innerHTML);  // Chrome: "", IE9: "foobar", FF3.5: "foobar"
 * </pre>
 *
 * For more information, see:
 * http://dev.w3.org/html5/markup/syntax.html#syntax-elements
 *
 * TODO(user): Rename shouldAllowChildren() ?
 * @param node The node to check.
 * @return Whether the node can contain children.
 */
export declare function canHaveChildren(node: Node | null): boolean;
/**
 * Appends a child to a node.
 * @param parent Parent.
 * @param child Child.
 */
export declare function appendChild(parent: Node | null, child: Node | null): void;
/**
 * Appends a node with text or other nodes.
 * @param parent The node to append nodes to.
 * @param var_args The things to append to the node. If this is a Node it is appended as is. If this is a string then a text node is appended. If this is an array like object then fields 0 to length - 1 are appended.
 */
export declare function append(parent: Node, ...var_args: (Appendable | null)[]): void;
/**
 * Removes all the child nodes on a DOM node.
 * @param node Node to remove children from.
 */
export declare function removeChildren(node: Node | null): void;
/**
 * Inserts a new node before an existing reference node (i.e. as the previous
 * sibling). If the reference node has no parent, then does nothing.
 * @param newNode Node to insert.
 * @param refNode Reference node to insert before.
 */
export declare function insertSiblingBefore(newNode: Node | null, refNode: Node | null): void;
/**
 * Inserts a new node after an existing reference node (i.e. as the next
 * sibling). If the reference node has no parent, then does nothing.
 * @param newNode Node to insert.
 * @param refNode Reference node to insert after.
 */
export declare function insertSiblingAfter(newNode: Node | null, refNode: Node | null): void;
/**
 * Insert a child at a given index. If index is larger than the number of child
 * nodes that the parent currently has, the node is inserted as the last child
 * node.
 * @param parent The element into which to insert the child.
 * @param child The element to insert.
 * @param index The index at which to insert the new child node. Must not be negative.
 */
export declare function insertChildAt(parent: Element | null, child: Node | null, index: number): void;
/**
 * Removes a node from its parent.
 * @param node The node to remove.
 * @return The node removed if removed; else, null.
 */
export declare function removeNode(node: Node | null): Node | null;
/**
 * Replaces a node in the DOM tree. Will do nothing if `oldNode` has no
 * parent.
 * @param newNode Node to insert.
 * @param oldNode Node to replace.
 */
export declare function replaceNode(newNode: Node | null, oldNode: Node | null): void;
/**
 * Replaces child nodes of `target` with child nodes of `source`. This is
 * roughly equivalent to `target.innerHTML = source.innerHTML` which is not
 * compatible with Trusted Types.
 * @param target Node to clean and replace its children.
 * @param source Node to get the children from. The nodes will be cloned so they will stay in source.
 */
export declare function copyContents(target: Node | null, source: Node | null): void;
/**
 * Flattens an element. That is, removes it and replace it with its children.
 * Does nothing if the element is not in the document.
 * @param element The element to flatten.
 * @return The original element, detached from the document tree, sans children; or undefined, if the element was not in the document to begin with.
 */
export declare function flattenElement(element: Element | null): Element | undefined | null;
/**
 * Returns an array containing just the element children of the given element.
 * @param element The element whose element children we want.
 * @return An array or array-like list of just the element children of the given element.
 */
export declare function getChildren(element: Element | null): Element[] | NodeList;
/**
 * Returns the first child node that is an element.
 * @param node The node to get the first child element of.
 * @return The first child node of `node` that is an element.
 */
export declare function getFirstElementChild(node: Node | null): Element | null;
/**
 * Returns the last child node that is an element.
 * @param node The node to get the last child element of.
 * @return The last child node of `node` that is an element.
 */
export declare function getLastElementChild(node: Node | null): Element | null;
/**
 * Returns the first next sibling that is an element.
 * @param node The node to get the next sibling element of.
 * @return The next sibling of `node` that is an element.
 */
export declare function getNextElementSibling(node: Node | null): Element | null;
/**
 * Returns the first previous sibling that is an element.
 * @param node The node to get the previous sibling element of.
 * @return The first previous sibling of `node` that is an element.
 */
export declare function getPreviousElementSibling(node: Node | null): Element | null;
/**
 * Returns the next node in source order from the given node.
 * @param node The node.
 * @return The next node in the DOM tree, or null if this was the last node.
 */
export declare function getNextNode(node: Node | null): Node | null;
/**
 * Returns the previous node in source order from the given node.
 * @param node The node.
 * @return The previous node in the DOM tree, or null if this was the first node.
 */
export declare function getPreviousNode(node: Node | null): Node | null;
/**
 * Whether the object looks like a DOM node.
 * @param obj The object being tested for node likeness.
 * @return Whether the object looks like a DOM node.
 */
export declare function isNodeLike(obj: any): boolean;
/**
 * Whether the object looks like an Element.
 * @param obj The object being tested for Element likeness.
 * @return Whether the object looks like an Element.
 */
export declare function isElement(obj: any): boolean;
/**
 * Returns true if the specified value is a Window object. This includes the
 * global window for HTML pages, and iframe windows.
 * @param obj Variable to test.
 * @return Whether the variable is a window.
 */
export declare function isWindow(obj: any): boolean;
/**
 * Returns an element's parent, if it's an Element.
 * @param element The DOM element.
 * @return The parent, or null if not an Element.
 */
export declare function getParentElement(element: Element | null): Element | null;
/**
 * Whether a node contains another node.
 * @param parent The node that should contain the other node.
 * @param descendant The node to test presence of.
 * @return Whether the parent node contains the descendant node.
 */
export declare function contains(parent: Node | undefined | null, descendant: Node | undefined | null): boolean;
/**
 * Compares the document order of two nodes, returning 0 if they are the same
 * node, a negative number if node1 is before node2, and a positive number if
 * node2 is before node1.  Note that we compare the order the tags appear in the
 * document so in the tree <b><i>text</i></b> the B node is considered to be
 * before the I node.
 * @param node1 The first node to compare.
 * @param node2 The second node to compare.
 * @return 0 if the nodes are the same node, a negative number if node1 is before node2, and a positive number if node2 is before node1.
 */
export declare function compareNodeOrder(node1: Node | null, node2: Node | null): number;
/**
 * Find the deepest common ancestor of the given nodes.
 * @param var_args The nodes to find a common ancestor of.
 * @return The common ancestor of the nodes, or null if there is none. null will only be returned if two or more of the nodes are from different documents.
 */
export declare function findCommonAncestor(...var_args: (Node | null)[]): Node | null;
/**
 * Returns whether node is in a document or detached. Throws an error if node
 * itself is a document. This specifically handles two cases beyond naive use of
 * builtins: (1) it works correctly in IE, and (2) it works for elements from
 * different documents/iframes. If neither of these considerations are relevant
 * then a simple `document.contains(node)` may be used instead.
 */
export declare function isInDocument(node: Node): boolean;
/**
 * Returns the owner document for a node.
 * @param node The node to get the document for.
 * @return The document owning the node.
 */
export declare function getOwnerDocument(node: Node | Window | null): Document;
/**
 * Cross-browser function for getting the document element of a frame or iframe.
 * @param frame Frame element.
 * @return The frame content document.
 */
export declare function getFrameContentDocument(frame: Element | null): Document;
/**
 * Cross-browser function for getting the window of a frame or iframe.
 * @param frame Frame element.
 * @return The window associated with the given frame, or null if none exists.
 */
export declare function getFrameContentWindow(frame: Element | null): Window | null;
/**
 * Sets the text content of a node, with cross-browser support.
 * @param node The node to change the text content of.
 * @param text The value that should replace the node's content.
 */
export declare function setTextContent(node: Node | null, text: string | number): void;
/**
 * Gets the outerHTML of a node, which is like innerHTML, except that it
 * actually contains the HTML of the node itself.
 * @param element The element to get the HTML of.
 * @return The outerHTML of the given element.
 */
export declare function getOuterHtml(element: Element | null): string;
/**
 * Finds the first descendant node that matches the filter function, using depth
 * first search. This function offers the most general purpose way of finding a
 * matching element.
 *
 * Prefer using `querySelector` if the matching criteria can be expressed as a
 * CSS selector, or `findElement` if you would filter for `nodeType ==
 * Node.ELEMENT_NODE`.
 * @param root The root of the tree to search.
 * @param p The filter function.
 * @return The found node or undefined if none is found.
 */
export declare function findNode(root: Node | null, p: () => boolean): Node | undefined | null;
/**
 * Finds all the descendant nodes that match the filter function, using depth
 * first search. This function offers the most general-purpose way
 * of finding a set of matching elements.
 *
 * Prefer using `querySelectorAll` if the matching criteria can be expressed as
 * a CSS selector, or `findElements` if you would filter for
 * `nodeType == Node.ELEMENT_NODE`.
 * @param root The root of the tree to search.
 * @param p The filter function.
 * @return The found nodes or an empty array if none are found.
 */
export declare function findNodes(root: Node | null, p: () => boolean): Node[];
/**
 * Finds the first descendant element (excluding `root`) that matches the filter
 * function, using depth first search. Prefer using `querySelector` if the
 * matching criteria can be expressed as a CSS selector.
 * @param pred Filter function.
 * @return First matching element or null if there is none.
 */
export declare function findElement(root: Element | Document, pred: () => boolean): Element | null;
/**
 * Finds all the descendant elements (excluding `root`) that match the filter
 * function, using depth first search. Prefer using `querySelectorAll` if the
 * matching criteria can be expressed as a CSS selector.
 * @param pred Filter function.
 */
export declare function findElements(root: Element | Document, pred: () => boolean): Element[];
/**
 * Returns true if the element has a tab index that allows it to receive
 * keyboard focus (tabIndex >= 0), false otherwise.  Note that some elements
 * natively support keyboard focus, even if they have no tab index.
 * @param element Element to check.
 * @return Whether the element has a tab index that allows keyboard focus.
 */
export declare function isFocusableTabIndex(element: Element): boolean;
/**
 * Enables or disables keyboard focus support on the element via its tab index.
 * Only elements for which {@link isFocusableTabIndex} returns true
 * (or elements that natively support keyboard focus, like form elements) can
 * receive keyboard focus.  See http://go/tabindex for more info.
 * @param element Element whose tab index is to be changed.
 * @param enable Whether to set or remove a tab index on the element that supports keyboard focus.
 */
export declare function setFocusableTabIndex(element: Element | null, enable: boolean): void;
/**
 * Returns true if the element can be focused, i.e. it has a tab index that
 * allows it to receive keyboard focus (tabIndex >= 0), or it is an element
 * that natively supports keyboard focus.
 * @param element Element to check.
 * @return Whether the element allows keyboard focus.
 */
export declare function isFocusable(element: Element): boolean;
/**
 * Returns the text content of the current node, without markup and invisible
 * symbols. New lines are stripped and whitespace is collapsed,
 * such that each character would be visible.
 *
 * In browsers that support it, innerText is used.  Other browsers attempt to
 * simulate it via node traversal.  Line breaks are canonicalized in IE.
 * @param node The node from which we are getting content.
 * @return The text content.
 */
export declare function getTextContent(node: Node | null): string;
/**
 * Returns the text content of the current node, without markup.
 *
 * Unlike `getTextContent` this method does not collapse whitespaces
 * or normalize lines breaks.
 * @param node The node from which we are getting content.
 * @return The raw text content.
 */
export declare function getRawTextContent(node: Node | null): string;
/**
 * Returns the text length of the text contained in a node, without markup. This
 * is equivalent to the selection length if the node was selected, or the number
 * of cursor movements to traverse the node. Images & BRs take one space.  New
 * lines are ignored.
 * @param node The node whose text content length is being calculated.
 * @return The length of `node`'s text content.
 */
export declare function getNodeTextLength(node: Node | null): number;
/**
 * Returns the text offset of a node relative to one of its ancestors. The text
 * length is the same as the length calculated by getNodeTextLength.
 * @param node The node whose offset is being calculated.
 * @param opt_offsetParent The node relative to which the offset will be calculated. Defaults to the node's owner document's body.
 * @return The text offset.
 */
export declare function getNodeTextOffset(node: Node | null, opt_offsetParent?: Node | null): number;
/**
 * Returns the node at a given offset in a parent node.  If an object is
 * provided for the optional third parameter, the node and the remainder of the
 * offset will stored as properties of this object.
 * @param parent The parent node.
 * @param offset The offset into the parent node.
 * @param opt_result Object to be used to store the return value. The return value will be stored in the form {node: Node, remainder: number} if this object is provided.
 * @return The node at the given offset.
 */
export declare function getNodeAtOffset(parent: Node | null, offset: number, opt_result?: object | null): Node | null;
/**
 * Returns true if the object is a `NodeList`.  To qualify as a NodeList,
 * the object must have a numeric length property and an item function (which
 * has type 'string' on IE for some reason).
 * @param val Object to test.
 * @return Whether the object is a NodeList.
 */
export declare function isNodeList(val: object | null): boolean;
/**
 * Walks up the DOM hierarchy returning the first ancestor that has the passed
 * tag name and/or class name. If the passed element matches the specified
 * criteria, the element itself is returned.
 * @param element The DOM node to start with.
 * @param opt_tag The tag name to match (or null/undefined to match only based on class name).
 * @param opt_class The class name to match (or null/undefined to match only based on tag name).
 * @param opt_maxSearchSteps Maximum number of levels to search up the dom.
 * @return The first ancestor that matches the passed criteria, or null if no match is found. The return type is {?Element} if opt_tag is not a member of TagName or a more specific type if it is (e.g. {?HTMLAnchorElement} for TagName.A).
 */
export declare function getAncestorByTagNameAndClass<T = any, R = any>(element: Node | null, opt_tag?: TagName<T | null> | string | null, opt_class?: string | null, opt_maxSearchSteps?: number): R | null;
/**
 * Walks up the DOM hierarchy returning the first ancestor that has the passed
 * class name. If the passed element matches the specified criteria, the
 * element itself is returned.
 * @param element The DOM node to start with.
 * @param className The class name to match.
 * @param opt_maxSearchSteps Maximum number of levels to search up the dom.
 * @return The first ancestor that matches the passed criteria, or null if none match.
 */
export declare function getAncestorByClass(element: Node | null, className: string, opt_maxSearchSteps?: number): Element | null;
/**
 * Walks up the DOM hierarchy returning the first ancestor that passes the
 * matcher function.
 * @param element The DOM node to start with.
 * @param matcher A function that returns true if the passed node matches the desired criteria.
 * @param opt_includeNode If true, the node itself is included in the search (the first call to the matcher will pass startElement as the node to test).
 * @param opt_maxSearchSteps Maximum number of levels to search up the dom.
 * @return DOM node that matched the matcher, or null if there was no match.
 */
export declare function getAncestor(element: Node | null, matcher: () => boolean, opt_includeNode?: boolean, opt_maxSearchSteps?: number): Node | null;
/**
 * Determines the active element in the given document.
 * @param doc The document to look in.
 * @return The active element.
 */
export declare function getActiveElement(doc: Document | null): Element | null;
/**
 * Gives the current devicePixelRatio.
 *
 * By default, this is the value of window.devicePixelRatio (which should be
 * preferred if present).
 *
 * If window.devicePixelRatio is not present, the ratio is calculated with
 * window.matchMedia, if present. Otherwise, gives 1.0.
 *
 * Some browsers (including Chrome) consider the browser zoom level in the pixel
 * ratio, so the value may change across multiple calls.
 * @return The number of actual pixels per virtual pixel.
 */
export declare function getPixelRatio(): number;
/**
 * Gets '2d' context of a canvas. Shortcut for canvas.getContext('2d') with a
 * type information.
 */
export declare function getCanvasContext2D(canvas: HTMLCanvasElement | OffscreenCanvas): CanvasRenderingContext2D;
/**
 * Create an instance of a DOM helper with a new document object.
 */
export declare class DomHelper {
    /**
     * Create an instance of a DOM helper with a new document object.
     * @param opt_document Document object to associate with this DOM helper.
     */
    constructor(opt_document?: Document | null);
    private noStructuralTyping_closure_goog_dom_dom_DomHelper;
    /**
     * Gets the dom helper object for the document where the element resides.
     * @param opt_node If present, gets the DomHelper for this node.
     * @return The DomHelper.
     */
    getDomHelper(a?: Node | null): DomHelper;
    /**
     * Sets the document object.
     * @param document Document object.
     */
    setDocument(document: Document): void;
    /**
     * Gets the document object being used by the dom library.
     * @return Document object.
     */
    getDocument(): Document;
    /**
     * Alias for `getElementById`. If a DOM node is passed in then we just
     * return that.
     * @param element Element ID or a DOM node.
     * @return The element with the given ID, or the node passed in.
     */
    getElement(element: string | Element | null): Element | null;
    /**
     * Gets an element by id, asserting that the element is found.
     *
     * This is used when an element is expected to exist, and should fail with
     * an assertion error if it does not (if assertions are enabled).
     * @param id Element ID.
     * @return The element with the given ID, if it exists.
     */
    getRequiredElement(id: string): Element;
    /**
     * Alias for `getElement`.
     * @param element Element ID or a DOM node.
     * @return The element with the given ID, or the node passed in.
     */
    $(a: string | Element | null): Element | null;
    /**
     * Gets elements by tag name.
     * @param opt_parent Parent element or document where to look for elements. Defaults to document of this DomHelper.
     * @return List of elements. The members of the list are {!Element} if tagName is not a member of TagName or more specific types if it is (e.g. {!HTMLAnchorElement} for TagName.A).
     */
    getElementsByTagName<T = any, R = any>(tagName: TagName<T | null>, opt_parent?: Document | Element): NodeList;
    /**
     * Looks up elements by both tag and class name, using browser native functions
     * (`querySelectorAll`, `getElementsByTagName` or
     * `getElementsByClassName`) where possible. The returned array is a live
     * NodeList or a static list depending on the code path taken.
     * @param opt_tag Element tag name or * for all tags.
     * @param opt_class Optional class name.
     * @param opt_el Optional element to look in.
     * @return Array-like list of elements (only a length property and numerical indices are guaranteed to exist). The members of the array are {!Element} if opt_tag is not a member of TagName or more specific types if it is (e.g. {!HTMLAnchorElement} for TagName.A).
     */
    getElementsByTagNameAndClass<T = any, R = any>(opt_tag?: string | TagName<T | null> | null, opt_class?: string | null, opt_el?: Document | Element | null): ArrayLike<R | null>;
    /**
     * Gets the first element matching the tag and the class.
     * @param opt_tag Element tag name.
     * @param opt_class Optional class name.
     * @param opt_el Optional element to look in.
     * @return Reference to a DOM node. The return type is {?Element} if tagName is a string or a more specific type if it is a member of TagName (e.g. {?HTMLAnchorElement} for TagName.A).
     */
    getElementByTagNameAndClass<T = any, R = any>(opt_tag?: string | TagName<T | null> | null, opt_class?: string | null, opt_el?: Document | Element | null): R | null;
    /**
     * Returns an array of all the elements with the provided className.
     * @param className the name of the class to look for.
     * @param opt_el Optional element to look in.
     * @return The items found with the class name provided.
     */
    getElementsByClass(className: string, opt_el?: Element | Document | null): ArrayLike<Element>;
    /**
     * Returns the first element we find matching the provided class name.
     * @param className the name of the class to look for.
     * @param opt_el Optional element to look in.
     * @return The first item found with the class name provided.
     */
    getElementByClass(className: string, opt_el?: Element | Document | null): Element | null;
    /**
     * Ensures an element with the given className exists, and then returns the
     * first element with the provided className.
     * @param className the name of the class to look for.
     * @param opt_root Optional element or document to look in.
     * @return The first item found with the class name provided.
     */
    getRequiredElementByClass(className: string, opt_root?: Element | Document): Element;
    /**
     * Alias for `getElementsByTagNameAndClass`.
     * @param opt_tag Element tag name.
     * @param opt_class Optional class name.
     * @param opt_el Optional element to look in.
     * @return Array-like list of elements (only a length property and numerical indices are guaranteed to exist). The members of the array are {!Element} if opt_tag is a string or more specific types if it is a member of TagName (e.g. {!HTMLAnchorElement} for TagName.A).
     */
    $$<T = any, R = any>(a?: string | TagName<T | null> | null, b?: string | null, c?: Element | null): ArrayLike<R | null>;
    /**
     * Sets a number of properties on a node.
     */
    setProperties: typeof setProperties;
    /**
     * Gets the dimensions of the viewport.
     * @param opt_window Optional window element to test. Defaults to the window of the Dom Helper.
     * @return Object with values 'width' and 'height'.
     */
    getViewportSize(opt_window?: Window | null): Size;
    /**
     * Calculates the height of the document.
     * @return The height of the document.
     */
    getDocumentHeight(): number;
    /**
     * Returns a dom node with a set of attributes.  This function accepts varargs
     * for subsequent nodes to be added.  Subsequent nodes will be added to the
     * first node as childNodes.
     *
     * So:
     * <code>createDom(TagName.DIV, null, createDom(TagName.P),
     * createDom(TagName.P));</code> would return a div with two child
     * paragraphs
     *
     * An easy way to move all child nodes of an existing element to a new parent
     * element is:
     * <code>createDom(TagName.DIV, null, oldElement.childNodes);</code>
     * which will remove all child nodes from the old element and add them as
     * child nodes of the new DIV.
     * @param tagName Tag to create.
     * @param opt_attributes If object, then a map of name-value pairs for attributes. If a string, then this is the className of the new element. If an array, the elements will be joined together as the className of the new element.
     * @param var_args Further DOM nodes or strings for text nodes. If one of the var_args is an array or NodeList, its elements will be added as childNodes instead.
     * @return Reference to a DOM node. The return type is {!Element} if tagName is a string or a more specific type if it is a member of TagName (e.g. {!HTMLAnchorElement} for TagName.A).
     */
    createDom<T = any, R = any>(tagName: string | TagName<T | null>, opt_attributes?: object | string[] | string | null, ...var_args: (Appendable | undefined | null)[]): R | null;
    /**
     * Alias for `createDom`.
     * @param tagName Tag to create.
     * @param opt_attributes If object, then a map of name-value pairs for attributes. If a string, then this is the className of the new element. If an array, the elements will be joined together as the className of the new element.
     * @param var_args Further DOM nodes or strings for text nodes.  If one of the var_args is an array, its children will be added as childNodes instead.
     * @return Reference to a DOM node. The return type is {!Element} if tagName is a string or a more specific type if it is a member of TagName (e.g. {!HTMLAnchorElement} for TagName.A).
     */
    $dom<T = any, R = any>(a: string | TagName<T | null>, b?: object | string[] | string | null, ...c: (Appendable | undefined | null)[]): R | null;
    /**
     * Creates a new element.
     * @param name Tag to create.
     * @return The new element. The return type is {!Element} if name is a string or a more specific type if it is a member of TagName (e.g. {!HTMLAnchorElement} for TagName.A).
     */
    createElement<T = any, R = any>(name: string | TagName<T | null>): R | null;
    /**
     * Creates a new text node.
     * @param content Content.
     * @return The new text node.
     */
    createTextNode(content: number | string): Text;
    /**
     * Create a table.
     * @param rows The number of rows in the table.  Must be >= 1.
     * @param columns The number of columns in the table.  Must be >= 1.
     * @param opt_fillWithNbsp If true, fills table entries with `Unicode.NBSP` characters.
     * @return The created table.
     */
    createTable(rows: number, columns: number, opt_fillWithNbsp?: boolean): HTMLElement;
    /**
     * Converts an HTML into a node or a document fragment. A single Node is used if
     * `html` only generates a single node. If `html` generates multiple
     * nodes then these are put inside a `DocumentFragment`. This is a safe
     * version of `DomHelper#htmlToDocumentFragment` which is now
     * deleted.
     * @param html The HTML markup to convert.
     * @return The resulting node.
     */
    safeHtmlToNode(html: SafeHtml): Node;
    /**
     * Returns true if the browser is in "CSS1-compatible" (standards-compliant)
     * mode, false otherwise.
     * @return True if in CSS1-compatible mode.
     */
    isCss1CompatMode(): boolean;
    /**
     * Gets the window object associated with the document.
     * @return The window associated with the given document.
     */
    getWindow(): Window;
    /**
     * Gets the document scroll element.
     * @return Scrolling element.
     */
    getDocumentScrollElement(): Element;
    /**
     * Gets the document scroll distance as a coordinate object.
     * @return Object with properties 'x' and 'y'.
     */
    getDocumentScroll(): Coordinate;
    /**
     * Determines the active element in the given document.
     * @param opt_doc The document to look in.
     * @return The active element.
     */
    getActiveElement(opt_doc?: Document | null): Element | null;
    /**
     * Appends a child to a node.
     */
    appendChild: typeof appendChild;
    /**
     * Appends a node with text or other nodes.
     */
    append: typeof append;
    /**
     * Determines if the given node can contain children, intended to be used for
     * HTML generation.
     * @param node The node to check.
     * @return Whether the node can contain children.
     */
    canHaveChildren(a: Node | null): boolean;
    /**
     * Removes all the child nodes on a DOM node.
     */
    removeChildren: typeof removeChildren;
    /**
     * Inserts a new node before an existing reference node (i.e., as the previous
     * sibling). If the reference node has no parent, then does nothing.
     */
    insertSiblingBefore: typeof insertSiblingBefore;
    /**
     * Inserts a new node after an existing reference node (i.e., as the next
     * sibling). If the reference node has no parent, then does nothing.
     */
    insertSiblingAfter: typeof insertSiblingAfter;
    /**
     * Insert a child at a given index. If index is larger than the number of child
     * nodes that the parent currently has, the node is inserted as the last child
     * node.
     */
    insertChildAt: typeof insertChildAt;
    /**
     * Removes a node from its parent.
     * @param node The node to remove.
     * @return The node removed if removed; else, null.
     */
    removeNode(a: Node | null): Node | null;
    /**
     * Replaces a node in the DOM tree. Will do nothing if `oldNode` has no
     * parent.
     */
    replaceNode: typeof replaceNode;
    /**
     * Replaces child nodes of `target` with child nodes of `source`. This is
     * roughly equivalent to `target.innerHTML = source.innerHTML` which is not
     * compatible with Trusted Types.
     */
    copyContents: typeof copyContents;
    /**
     * Flattens an element. That is, removes it and replace it with its children.
     * @param element The element to flatten.
     * @return The original element, detached from the document tree, sans children, or undefined if the element was already not in the document.
     */
    flattenElement(a: Element | null): Element | undefined | null;
    /**
     * Returns an array containing just the element children of the given element.
     * @param element The element whose element children we want.
     * @return An array or array-like list of just the element children of the given element.
     */
    getChildren(a: Element | null): Element[] | NodeList;
    /**
     * Returns the first child node that is an element.
     * @param node The node to get the first child element of.
     * @return The first child node of `node` that is an element.
     */
    getFirstElementChild(a: Node | null): Element | null;
    /**
     * Returns the last child node that is an element.
     * @param node The node to get the last child element of.
     * @return The last child node of `node` that is an element.
     */
    getLastElementChild(a: Node | null): Element | null;
    /**
     * Returns the first next sibling that is an element.
     * @param node The node to get the next sibling element of.
     * @return The next sibling of `node` that is an element.
     */
    getNextElementSibling(a: Node | null): Element | null;
    /**
     * Returns the first previous sibling that is an element.
     * @param node The node to get the previous sibling element of.
     * @return The first previous sibling of `node` that is an element.
     */
    getPreviousElementSibling(a: Node | null): Element | null;
    /**
     * Returns the next node in source order from the given node.
     * @param node The node.
     * @return The next node in the DOM tree, or null if this was the last node.
     */
    getNextNode(a: Node | null): Node | null;
    /**
     * Returns the previous node in source order from the given node.
     * @param node The node.
     * @return The previous node in the DOM tree, or null if this was the first node.
     */
    getPreviousNode(a: Node | null): Node | null;
    /**
     * Whether the object looks like a DOM node.
     * @param obj The object being tested for node likeness.
     * @return Whether the object looks like a DOM node.
     */
    isNodeLike(a: any): boolean;
    /**
     * Whether the object looks like an Element.
     * @param obj The object being tested for Element likeness.
     * @return Whether the object looks like an Element.
     */
    isElement(a: any): boolean;
    /**
     * Returns true if the specified value is a Window object. This includes the
     * global window for HTML pages, and iframe windows.
     * @param obj Variable to test.
     * @return Whether the variable is a window.
     */
    isWindow(a: any): boolean;
    /**
     * Returns an element's parent, if it's an Element.
     * @param element The DOM element.
     * @return The parent, or null if not an Element.
     */
    getParentElement(a: Element | null): Element | null;
    /**
     * Whether a node contains another node.
     * @param parent The node that should contain the other node.
     * @param descendant The node to test presence of.
     * @return Whether the parent node contains the descendant node.
     */
    contains(a: Node | null, b: Node | null): boolean;
    /**
     * Compares the document order of two nodes, returning 0 if they are the same
     * node, a negative number if node1 is before node2, and a positive number if
     * node2 is before node1.  Note that we compare the order the tags appear in the
     * document so in the tree <b><i>text</i></b> the B node is considered to be
     * before the I node.
     * @param node1 The first node to compare.
     * @param node2 The second node to compare.
     * @return 0 if the nodes are the same node, a negative number if node1 is before node2, and a positive number if node2 is before node1.
     */
    compareNodeOrder(a: Node | null, b: Node | null): number;
    /**
     * Find the deepest common ancestor of the given nodes.
     * @param var_args The nodes to find a common ancestor of.
     * @return The common ancestor of the nodes, or null if there is none. null will only be returned if two or more of the nodes are from different documents.
     */
    findCommonAncestor(...a: (Node | null)[]): Node | null;
    /**
     * Returns the owner document for a node.
     * @param node The node to get the document for.
     * @return The document owning the node.
     */
    getOwnerDocument(a: Node | null): Document;
    /**
     * Cross browser function for getting the document element of an iframe.
     * @param iframe Iframe element.
     * @return The frame content document.
     */
    getFrameContentDocument(a: Element | null): Document;
    /**
     * Cross browser function for getting the window of a frame or iframe.
     * @param frame Frame element.
     * @return The window associated with the given frame.
     */
    getFrameContentWindow(a: Element | null): Window | null;
    /**
     * Sets the text content of a node, with cross-browser support.
     */
    setTextContent: typeof setTextContent;
    /**
     * Gets the outerHTML of a node, which islike innerHTML, except that it
     * actually contains the HTML of the node itself.
     * @param element The element to get the HTML of.
     * @return The outerHTML of the given element.
     */
    getOuterHtml(a: Element | null): string;
    /**
     * Finds the first descendant node that matches the filter function. This does
     * a depth first search.
     * @param root The root of the tree to search.
     * @param p The filter function.
     * @return The found node or undefined if none is found.
     */
    findNode(a: Node | null, b: () => boolean): Node | undefined | null;
    /**
     * Finds all the descendant nodes that matches the filter function. This does a
     * depth first search.
     * @param root The root of the tree to search.
     * @param p The filter function.
     * @return The found nodes or an empty array if none are found.
     */
    findNodes(a: Node | null, b: () => boolean): (Node | null)[] | null;
    /**
     * Returns true if the element has a tab index that allows it to receive
     * keyboard focus (tabIndex >= 0), false otherwise.  Note that some elements
     * natively support keyboard focus, even if they have no tab index.
     * @param element Element to check.
     * @return Whether the element has a tab index that allows keyboard focus.
     */
    isFocusableTabIndex(a: Element): boolean;
    /**
     * Enables or disables keyboard focus support on the element via its tab index.
     * Only elements for which {@link isFocusableTabIndex} returns true
     * (or elements that natively support keyboard focus, like form elements) can
     * receive keyboard focus.  See http://go/tabindex for more info.
     */
    setFocusableTabIndex: typeof setFocusableTabIndex;
    /**
     * Returns true if the element can be focused, i.e. it has a tab index that
     * allows it to receive keyboard focus (tabIndex >= 0), or it is an element
     * that natively supports keyboard focus.
     * @param element Element to check.
     * @return Whether the element allows keyboard focus.
     */
    isFocusable(a: Element): boolean;
    /**
     * Returns the text contents of the current node, without markup. New lines are
     * stripped and whitespace is collapsed, such that each character would be
     * visible.
     *
     * In browsers that support it, innerText is used.  Other browsers attempt to
     * simulate it via node traversal.  Line breaks are canonicalized in IE.
     * @param node The node from which we are getting content.
     * @return The text content.
     */
    getTextContent(a: Node | null): string;
    /**
     * Returns the text length of the text contained in a node, without markup. This
     * is equivalent to the selection length if the node was selected, or the number
     * of cursor movements to traverse the node. Images & BRs take one space.  New
     * lines are ignored.
     * @param node The node whose text content length is being calculated.
     * @return The length of `node`'s text content.
     */
    getNodeTextLength(a: Node | null): number;
    /**
     * Returns the text offset of a node relative to one of its ancestors. The text
     * length is the same as the length calculated by
     * `getNodeTextLength`.
     * @param node The node whose offset is being calculated.
     * @param opt_offsetParent Defaults to the node's owner document's body.
     * @return The text offset.
     */
    getNodeTextOffset(a: Node | null, b?: Node | null): number;
    /**
     * Returns the node at a given offset in a parent node.  If an object is
     * provided for the optional third parameter, the node and the remainder of the
     * offset will stored as properties of this object.
     * @param parent The parent node.
     * @param offset The offset into the parent node.
     * @param opt_result Object to be used to store the return value. The return value will be stored in the form {node: Node, remainder: number} if this object is provided.
     * @return The node at the given offset.
     */
    getNodeAtOffset(a: Node | null, b: number, c?: object | null): Node | null;
    /**
     * Returns true if the object is a `NodeList`.  To qualify as a NodeList,
     * the object must have a numeric length property and an item function (which
     * has type 'string' on IE for some reason).
     * @param val Object to test.
     * @return Whether the object is a NodeList.
     */
    isNodeList(a: object | null): boolean;
    /**
     * Walks up the DOM hierarchy returning the first ancestor that has the passed
     * tag name and/or class name. If the passed element matches the specified
     * criteria, the element itself is returned.
     * @param element The DOM node to start with.
     * @param opt_tag The tag name to match (or null/undefined to match only based on class name).
     * @param opt_class The class name to match (or null/undefined to match only based on tag name).
     * @param opt_maxSearchSteps Maximum number of levels to search up the dom.
     * @return The first ancestor that matches the passed criteria, or null if no match is found. The return type is {?Element} if opt_tag is not a member of TagName or a more specific type if it is (e.g. {?HTMLAnchorElement} for TagName.A).
     */
    getAncestorByTagNameAndClass<T = any, R = any>(a: Node | null, b?: TagName<T | null> | string | null, c?: string | null, d?: number): R | null;
    /**
     * Walks up the DOM hierarchy returning the first ancestor that has the passed
     * class name. If the passed element matches the specified criteria, the
     * element itself is returned.
     * @param element The DOM node to start with.
     * @param class The class name to match.
     * @param opt_maxSearchSteps Maximum number of levels to search up the dom.
     * @return The first ancestor that matches the passed criteria, or null if none match.
     */
    getAncestorByClass(a: Node | null, b: string, c?: number): Element | null;
    /**
     * Walks up the DOM hierarchy returning the first ancestor that passes the
     * matcher function.
     * @param element The DOM node to start with.
     * @param matcher A function that returns true if the passed node matches the desired criteria.
     * @param opt_includeNode If true, the node itself is included in the search (the first call to the matcher will pass startElement as the node to test).
     * @param opt_maxSearchSteps Maximum number of levels to search up the dom.
     * @return DOM node that matched the matcher, or null if there was no match.
     */
    getAncestor(a: Node | null, b: () => boolean, c?: boolean, d?: number): Node | null;
    /**
     * Gets '2d' context of a canvas. Shortcut for canvas.getContext('2d') with a
     * type information.
     */
    getCanvasContext2D(a: HTMLCanvasElement): CanvasRenderingContext2D;
}
/**
 * Typedef for use with createDom and append.
 */
export type Appendable = object | string | any[] | NodeList | null;

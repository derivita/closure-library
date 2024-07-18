import * as googDom from '../dom/dom.js';
import { SafeStyleSheet } from '../html/safestylesheet.js';
import { Box } from '../math/box.js';
import { Coordinate } from '../math/coordinate.js';
import { Rect } from '../math/rect.js';
import { Size } from '../math/size.js';
import type { Event } from '../events/event.js';
/**
 * Sets a style value on an element.
 *
 * This function is not indended to patch issues in the browser's style
 * handling, but to allow easy programmatic access to setting dash-separated
 * style properties.  An example is setting a batch of properties from a data
 * object without overwriting old styles.  When possible, use native APIs:
 * elem.style.propertyKey = 'value' or (if obliterating old styles is fine)
 * elem.style.cssText = 'property1: value1; property2: value2'.
 * @param element The element to change.
 * @param style If a string, a style name. If an object, a hash of style names to style values.
 * @param opt_value If style was a string, then this should be the value.
 */
export declare function setStyle(element: Element | null, style: string | object | null, opt_value?: string | number | boolean): void;
/**
 * Style name cache that stores previous property name lookups.
 *
 * This is used by setStyle to speed up property lookups, entries look like:
 * { StyleName: ActualPropertyName }
 */
export declare var styleNameCache_: {
    [key: string]: string;
};
/**
 * Returns the style property name in camel-case. If it does not exist and a
 * vendor-specific version of the property does exist, then return the vendor-
 * specific property name instead.
 * @param element The element to change.
 * @param style Style name.
 * @return Vendor-specific style.
 */
export declare function getVendorJsStyleName_(element: Element | null, style: string): string;
/**
 * Returns the style property name in CSS notation. If it does not exist and a
 * vendor-specific version of the property does exist, then return the vendor-
 * specific property name instead.
 * @param element The element to change.
 * @param style Style name.
 * @return Vendor-specific style.
 */
export declare function getVendorStyleName_(element: Element | null, style: string): string;
/**
 * Retrieves an explicitly-set style value of a node. This returns '' if there
 * isn't a style attribute on the element or if this style property has not been
 * explicitly set in script.
 * @param element Element to get style of.
 * @param property Property to get, css-style (if you have a camel-case property, use element.style[style]).
 * @return Style value.
 */
export declare function getStyle(element: Element | null, property: string): string;
/**
 * Retrieves a computed style value of a node. It returns empty string if the
 * value cannot be computed (which will be the case in Internet Explorer) or
 * "none" if the property requested is an SVG one and it has not been
 * explicitly set (firefox and webkit).
 * @param element Element to get style of.
 * @param property Property to get (camel-case).
 * @return Style value.
 */
export declare function getComputedStyle(element: Element | null, property: string): string;
/**
 * Gets the cascaded style value of a node, or null if the value cannot be
 * computed (only Internet Explorer can do this).
 * @param element Element to get style of.
 * @param style Property to get (camel-case).
 * @return Style value.
 */
export declare function getCascadedStyle(element: Element | null, style: string): string;
/**
 * Retrieves the computed value of the box-sizing CSS attribute.
 * Browser support: http://caniuse.com/css3-boxsizing.
 * @param element The element whose box-sizing to get.
 * @return 'content-box', 'border-box' or 'padding-box'. null if box-sizing is not supported (IE7 and below).
 */
export declare function getComputedBoxSizing(element: Element): string | null;
/**
 * Retrieves the computed value of the position CSS attribute.
 * @param element The element to get the position of.
 * @return Position value.
 */
export declare function getComputedPosition(element: Element | null): string;
/**
 * Retrieves the computed background color string for a given element. The
 * string returned is suitable for assigning to another element's
 * background-color, but is not guaranteed to be in any particular string
 * format. Accessing the color in a numeric form may not be possible in all
 * browsers or with all input.
 *
 * If the background color for the element is defined as a hexadecimal value,
 * the resulting string can be parsed by goog.color.parse in all supported
 * browsers.
 *
 * Whether named colors like "red" or "lightblue" get translated into a
 * format which can be parsed is browser dependent. Calling this function on
 * transparent elements will return "transparent" in most browsers or
 * "rgba(0, 0, 0, 0)" in WebKit.
 * @param element The element to get the background color of.
 * @return The computed string value of the background color.
 */
export declare function getBackgroundColor(element: Element | null): string;
/**
 * Retrieves the computed value of the overflow-x CSS attribute.
 * @param element The element to get the overflow-x of.
 * @return The computed string value of the overflow-x attribute.
 */
export declare function getComputedOverflowX(element: Element | null): string;
/**
 * Retrieves the computed value of the overflow-y CSS attribute.
 * @param element The element to get the overflow-y of.
 * @return The computed string value of the overflow-y attribute.
 */
export declare function getComputedOverflowY(element: Element | null): string;
/**
 * Retrieves the computed value of the z-index CSS attribute.
 * @param element The element to get the z-index of.
 * @return The computed value of the z-index attribute.
 */
export declare function getComputedZIndex(element: Element | null): string | number;
/**
 * Retrieves the computed value of the text-align CSS attribute.
 * @param element The element to get the text-align of.
 * @return The computed string value of the text-align attribute.
 */
export declare function getComputedTextAlign(element: Element | null): string;
/**
 * Retrieves the computed value of the cursor CSS attribute.
 * @param element The element to get the cursor of.
 * @return The computed string value of the cursor attribute.
 */
export declare function getComputedCursor(element: Element | null): string;
/**
 * Retrieves the computed value of the CSS transform attribute.
 * @param element The element to get the transform of.
 * @return The computed string representation of the transform matrix.
 */
export declare function getComputedTransform(element: Element | null): string;
/**
 * Sets the top/left values of an element.  If no unit is specified in the
 * argument then it will add px. The second argument is required if the first
 * argument is a string or number and is ignored if the first argument
 * is a coordinate.
 * @param el Element to move.
 * @param arg1 Left position or coordinate.
 * @param opt_arg2 Top position.
 */
export declare function setPosition(el: Element | null, arg1: string | number | Coordinate | null, opt_arg2?: string | number): void;
/**
 * Gets the offsetLeft and offsetTop properties of an element and returns them
 * in a Coordinate object
 * @param element Element.
 * @return The position.
 */
export declare function getPosition(element: Element | null): Coordinate;
/**
 * Returns the viewport element for a particular document
 * @param opt_node DOM node (Document is OK) to get the viewport element of.
 * @return document.documentElement or document.body.
 */
export declare function getClientViewportElement(opt_node?: Node | null): Element | null;
/**
 * Calculates the viewport coordinates relative to the page/document
 * containing the node. The viewport may be the browser viewport for
 * non-iframe document, or the iframe container for iframe'd document.
 * @param doc The document to use as the reference point.
 * @return The page offset of the viewport.
 */
export declare function getViewportPageOffset(doc: Document): Coordinate;
/**
 * Returns the first parent that could affect the position of a given element.
 * @param element The element to get the offset parent for.
 * @return The first offset parent or null if one cannot be found.
 */
export declare function getOffsetParent(element: Element | null): Element | null;
/**
 * Calculates and returns the visible rectangle for a given element. Returns a
 * box describing the visible portion of the nearest scrollable offset ancestor.
 * Coordinates are given relative to the document.
 * @param element Element to get the visible rect for.
 * @return Bounding elementBox describing the visible rect or null if scrollable ancestor isn't inside the visible viewport.
 */
export declare function getVisibleRectForElement(element: Element | null): Box | null;
/**
 * Calculate the scroll position of `container` with the minimum amount so
 * that the content and the borders of the given `element` become visible.
 * If the element is bigger than the container, its top left corner will be
 * aligned as close to the container's top left corner as possible.
 * @param element The element to make visible.
 * @param opt_container The container to scroll. If not set, then the document scroll element will be used.
 * @param opt_center Whether to center the element in the container. Defaults to false.
 * @return The new scroll position of the container, in form of Coordinate(scrollLeft, scrollTop).
 */
export declare function getContainerOffsetToScrollInto(element: Element | null, opt_container?: Element | null, opt_center?: boolean): Coordinate;
/**
 * Changes the scroll position of `container` with the minimum amount so
 * that the content and the borders of the given `element` become visible.
 * If the element is bigger than the container, its top left corner will be
 * aligned as close to the container's top left corner as possible.
 * @param element The element to make visible.
 * @param opt_container The container to scroll. If not set, then the document scroll element will be used.
 * @param opt_center Whether to center the element in the container. Defaults to false.
 */
export declare function scrollIntoContainerView(element: Element | null, opt_container?: Element | null, opt_center?: boolean): void;
/**
 * Returns clientLeft (width of the left border and, if the directionality is
 * right to left, the vertical scrollbar) and clientTop as a coordinate object.
 * @param el Element to get clientLeft for.
 * @return Client left and top.
 */
export declare function getClientLeftTop(el: Element | null): Coordinate;
/**
 * Returns a Coordinate object relative to the top-left of the HTML document.
 * Implemented as a single function to save having to do two recursive loops in
 * opera and safari just to get both coordinates.  If you just want one value do
 * use getPageOffsetLeft() and getPageOffsetTop(), but
 * note if you call both those methods the tree will be analysed twice.
 * @param el Element to get the page offset for.
 * @return The page offset.
 */
export declare function getPageOffset(el: Element | null): Coordinate;
/**
 * Returns the left coordinate of an element relative to the HTML document
 * @param el Elements.
 * @return The left coordinate.
 */
export declare function getPageOffsetLeft(el: Element | null): number;
/**
 * Returns the top coordinate of an element relative to the HTML document
 * @param el Elements.
 * @return The top coordinate.
 */
export declare function getPageOffsetTop(el: Element | null): number;
/**
 * Returns a Coordinate object relative to the top-left of an HTML document
 * in an ancestor frame of this element. Used for measuring the position of
 * an element inside a frame relative to a containing frame.
 * @param el Element to get the page offset for.
 * @param relativeWin The window to measure relative to. If relativeWin is not in the ancestor frame chain of the element, we measure relative to the top-most window.
 * @return The page offset.
 */
export declare function getFramedPageOffset(el: Element | null, relativeWin: Window | null): Coordinate;
/**
 * Translates the specified rect relative to origBase page, for newBase page.
 * If origBase and newBase are the same, this function does nothing.
 * @param rect The source rectangle relative to origBase page, and it will have the translated result.
 * @param origBase The DomHelper for the input rectangle.
 * @param newBase The DomHelper for the resultant coordinate.  This must be a DOM for an ancestor frame of origBase or the same as origBase.
 */
export declare function translateRectForAnotherFrame(rect: Rect | null, origBase: googDom.DomHelper | null, newBase: googDom.DomHelper | null): void;
/**
 * Returns the position of an element relative to another element in the
 * document.  A relative to B
 * @param a Element or mouse event whose position we're calculating.
 * @param b Element or mouse event position is relative to.
 * @return The relative position.
 */
export declare function getRelativePosition(a: Element | Event | Event | null, b: Element | Event | Event | null): Coordinate;
/**
 * Returns the position of the event or the element's border box relative to
 * the client viewport. If an event is passed, and if this event is a "touch"
 * event, then the position of the first changedTouches will be returned.
 * @param el Element or a mouse / touch event.
 * @return The position.
 */
export declare function getClientPosition(el: Element | Event | Event | null): Coordinate;
/**
 * Moves an element to the given coordinates relative to the client viewport.
 * @param el Absolutely positioned element to set page offset for. It must be in the document.
 * @param x Left position of the element's margin box or a coordinate object.
 * @param opt_y Top position of the element's margin box.
 */
export declare function setPageOffset(el: Element | null, x: number | Coordinate | null, opt_y?: number): void;
/**
 * Sets the width/height values of an element.  If an argument is numeric,
 * or a Size is passed, it is assumed to be pixels and will add
 * 'px' after converting it to an integer in string form. (This just sets the
 * CSS width and height properties so it might set content-box or border-box
 * size depending on the box model the browser is using.)
 * @param element Element to set the size of.
 * @param w Width of the element, or a size object.
 * @param opt_h Height of the element. Required if w is not a size object.
 */
export declare function setSize(element: Element | null, w: string | number | Size | null, opt_h?: string | number): void;
/**
 * Set the height of an element.  Sets the element's style property.
 * @param element Element to set the height of.
 * @param height The height value to set.  If a number, 'px' will be appended, otherwise the value will be applied directly.
 */
export declare function setHeight(element: Element | null, height: string | number): void;
/**
 * Set the width of an element.  Sets the element's style property.
 * @param element Element to set the width of.
 * @param width The width value to set.  If a number, 'px' will be appended, otherwise the value will be applied directly.
 */
export declare function setWidth(element: Element | null, width: string | number): void;
/**
 * Gets the height and width of an element, even if its display is none.
 *
 * Specifically, this returns the height and width of the border box,
 * irrespective of the box model in effect.
 *
 * Note that this function does not take CSS transforms into account. Please see
 * `getTransformedSize`.
 * @param element Element to get size of.
 * @return Object with width/height properties.
 */
export declare function getSize(element: Element | null): Size;
/**
 * Gets the height and width of an element, post transform, even if its display
 * is none.
 *
 * This is like `getSize`, except:
 * <ol>
 * <li>Takes webkitTransforms such as rotate and scale into account.
 * <li>Will return null if `element` doesn't respond to
 * `getBoundingClientRect`.
 * <li>Currently doesn't make sense on non-WebKit browsers which don't support
 * webkitTransforms.
 * </ol>
 * @param element Element to get size of.
 * @return Object with width/height properties.
 */
export declare function getTransformedSize(element: Element): Size | null;
/**
 * Returns a bounding rectangle for a given element in page space.
 * @param element Element to get bounds of. Must not be display none.
 * @return Bounding rectangle for the element.
 */
export declare function getBounds(element: Element | null): Rect;
/**
 * Converts a CSS selector in the form style-property to styleProperty.
 * @param selector CSS Selector.
 * @return Camel case selector.
 */
export declare function toCamelCase(selector: any): string;
/**
 * Converts a CSS selector in the form styleProperty to style-property.
 * @param selector Camel case selector.
 * @return Selector cased.
 */
export declare function toSelectorCase(selector: string): string;
/**
 * Gets the opacity of a node (x-browser). This gets the inline style opacity
 * of the node, and does not take into account the cascaded or the computed
 * style for this node.
 * @param el Element whose opacity has to be found.
 * @return Opacity between 0 and 1 or an empty string {@code ''} if the opacity is not set.
 */
export declare function getOpacity(el: Element | null): number | string;
/**
 * Sets the opacity of a node (x-browser).
 * @param el Elements whose opacity has to be set.
 * @param alpha Opacity between 0 and 1 or an empty string {@code ''} to clear the opacity.
 */
export declare function setOpacity(el: Element | null, alpha: number | string): void;
/**
 * Sets the background of an element to a transparent image in a browser-
 * independent manner.
 *
 * This function does not support repeating backgrounds or alternate background
 * positions to match the behavior of Internet Explorer. It also does not
 * support sizingMethods other than crop since they cannot be replicated in
 * browsers other than Internet Explorer.
 * @param el The element to set background on.
 * @param src The image source URL.
 */
export declare function setTransparentBackgroundImage(el: Element | null, src: string): void;
/**
 * Clears the background image of an element in a browser independent manner.
 * @param el The element to clear background image for.
 */
export declare function clearTransparentBackgroundImage(el: Element | null): void;
/**
 * Shows or hides an element from the page. Hiding the element is done by
 * setting the display property to "none", removing the element from the
 * rendering hierarchy so it takes up no space. To show the element, the default
 * inherited display property is restored (defined either in stylesheets or by
 * the browser's default style rules.)
 *
 * Caveat 1: if the inherited display property for the element is set to "none"
 * by the stylesheets, that is the property that will be restored by a call to
 * showElement(), effectively toggling the display between "none" and "none".
 *
 * Caveat 2: if the element display style is set inline (by setting either
 * element.style.display or a style attribute in the HTML), a call to
 * showElement will clear that setting and defer to the inherited style in the
 * stylesheet.
 * @param el Element to show or hide.
 * @param display True to render the element in its default style, false to disable rendering the element.
 */
export declare function showElement(el: Element | null, display: any): void;
/**
 * Shows or hides an element from the page. Hiding the element is done by
 * setting the display property to "none", removing the element from the
 * rendering hierarchy so it takes up no space. To show the element, the default
 * inherited display property is restored (defined either in stylesheets or by
 * the browser's default style rules).
 *
 * Caveat 1: if the inherited display property for the element is set to "none"
 * by the stylesheets, that is the property that will be restored by a call to
 * setElementShown(), effectively toggling the display between "none" and
 * "none".
 *
 * Caveat 2: if the element display style is set inline (by setting either
 * element.style.display or a style attribute in the HTML), a call to
 * setElementShown will clear that setting and defer to the inherited style in
 * the stylesheet.
 * @param el Element to show or hide.
 * @param isShown True to render the element in its default style, false to disable rendering the element.
 */
export declare function setElementShown(el: Element | null, isShown: any): void;
/**
 * Test whether the given element has been shown or hidden via a call to
 * {@link #setElementShown}.
 *
 * Note this is strictly a companion method for a call
 * to {@link #setElementShown} and the same caveats apply; in particular, this
 * method does not guarantee that the return value will be consistent with
 * whether or not the element is actually visible.
 * @param el The element to test.
 * @return Whether the element has been shown.
 */
export declare function isElementShown(el: Element | null): boolean;
/**
 * Installs the style sheet into the window that contains opt_node.  If
 * opt_node is null, the main window is used.
 * @param safeStyleSheet The style sheet to install.
 * @param opt_node Node whose parent document should have the styles installed.
 * @return In IE<11, a StyleSheet object with no owning &lt;style&gt; tag (this is how IE creates style sheets).  In every other browser, a &lt;style&gt; element with an attached style.  This doesn't return a StyleSheet object so that setSafeStyleSheet can replace it (otherwise, if you pass a StyleSheet to setSafeStyleSheet, it will make a new StyleSheet and leave the original StyleSheet orphaned).
 */
export declare function installSafeStyleSheet(safeStyleSheet: SafeStyleSheet, opt_node?: Node | null): HTMLStyleElement | StyleSheet;
/**
 * Removes the styles added by {@link #installSafeStyleSheet}.
 * @param styleSheet The value returned by {@link #installSafeStyleSheet}.
 */
export declare function uninstallStyles(styleSheet: Element | StyleSheet | null): void;
/**
 * Sets the content of a style element.  The style element can be any valid
 * style element.  This element will have its content completely replaced by
 * the safeStyleSheet.
 * @param element A stylesheet element as returned by installSafeStyleSheet.
 * @param safeStyleSheet The new content of the stylesheet.
 */
export declare function setSafeStyleSheet(element: Element | StyleSheet, safeStyleSheet: SafeStyleSheet): void;
/**
 * Sets 'white-space: pre-wrap' for a node (x-browser).
 *
 * There are as many ways of specifying pre-wrap as there are browsers.
 *
 * CSS3/IE8: white-space: pre-wrap;
 * Mozilla:  white-space: -moz-pre-wrap;
 * Opera:    white-space: -o-pre-wrap;
 * IE6/7:    white-space: pre; word-wrap: break-word;
 * @param el Element to enable pre-wrap for.
 */
export declare function setPreWrap(el: Element | null): void;
/**
 * Sets 'display: inline-block' for an element (cross-browser).
 * @param el Element to which the inline-block display style is to be applied.
 */
export declare function setInlineBlock(el: Element | null): void;
/**
 * Returns true if the element is using right to left (rtl) direction.
 * @param el The element to test.
 * @return True for right to left, false for left to right.
 */
export declare function isRightToLeft(el: Element | null): boolean;
/**
 * Returns true if the element is set to be unselectable, false otherwise.
 * Note that on some platforms (e.g. Mozilla), even if an element isn't set
 * to be unselectable, it will behave as such if any of its ancestors is
 * unselectable.
 * @param el Element to check.
 * @return Whether the element is set to be unselectable.
 */
export declare function isUnselectable(el: Element | null): boolean;
/**
 * Makes the element and its descendants selectable or unselectable.  Note
 * that on some platforms (e.g. Mozilla), even if an element isn't set to
 * be unselectable, it will behave as such if any of its ancestors is
 * unselectable.
 * @param el The element to alter.
 * @param unselectable Whether the element and its descendants should be made unselectable.
 * @param opt_noRecurse Whether to only alter the element's own selectable state, and leave its descendants alone; defaults to false.
 */
export declare function setUnselectable(el: Element | null, unselectable: boolean, opt_noRecurse?: boolean): void;
/**
 * Gets the border box size for an element.
 * @param element The element to get the size for.
 * @return The border box size.
 */
export declare function getBorderBoxSize(element: Element | null): Size;
/**
 * Sets the border box size of an element. This is potentially expensive in IE
 * if the document is CSS1Compat mode
 * @param element The element to set the size on.
 * @param size The new size.
 */
export declare function setBorderBoxSize(element: Element | null, size: Size | null): void;
/**
 * Gets the content box size for an element.  This is potentially expensive in
 * all browsers.
 * @param element The element to get the size for.
 * @return The content box size.
 */
export declare function getContentBoxSize(element: Element | null): Size;
/**
 * Sets the content box size of an element. This is potentially expensive in IE
 * if the document is BackCompat mode.
 * @param element The element to set the size on.
 * @param size The new size.
 */
export declare function setContentBoxSize(element: Element | null, size: Size | null): void;
/**
 * Gets the computed paddings (on all sides) in pixels.
 * @param element The element to get the padding for.
 * @return The computed paddings.
 */
export declare function getPaddingBox(element: Element | null): Box;
/**
 * Gets the computed margins (on all sides) in pixels.
 * @param element The element to get the margins for.
 * @return The computed margins.
 */
export declare function getMarginBox(element: Element | null): Box;
/**
 * Gets the computed border widths (on all sides) in pixels
 * @param element The element to get the border widths for.
 * @return The computed border widths.
 */
export declare function getBorderBox(element: Element | null): Box;
/**
 * Returns the font face applied to a given node. Opera and IE should return
 * the font actually displayed. Firefox returns the author's most-preferred
 * font (whether the browser is capable of displaying it or not.)
 * @param el The element whose font family is returned.
 * @return The font family applied to el.
 */
export declare function getFontFamily(el: Element | null): string;
/**
 * Returns the units used for a CSS length measurement.
 * @param value A CSS length quantity.
 * @return The units of measurement.
 */
export declare function getLengthUnits(value: string): string | null;
/**
 * Returns the font size, in pixels, of text in an element.
 * @param el The element whose font size is returned.
 * @return The font size (in pixels).
 */
export declare function getFontSize(el: Element | null): number;
/**
 * Parses a style attribute value.  Converts CSS property names to camel case.
 * @param value The style attribute value.
 * @return Map of CSS properties to string values.
 */
export declare function parseStyleAttribute(value: string): object;
/**
 * Reverse of parseStyleAttribute; that is, takes a style object and returns the
 * corresponding attribute value.  Converts camel case property names to proper
 * CSS selector names.
 * @param obj Map of CSS properties to values.
 * @return The style attribute value.
 */
export declare function toStyleAttribute(obj: object | null): string;
/**
 * Sets CSS float property on an element.
 * @param el The element to set float property on.
 * @param value The value of float CSS property to set on this element.
 */
export declare function setFloat(el: Element | null, value: string): void;
/**
 * Gets value of explicitly-set float CSS property on an element.
 * @param el The element to get float property of.
 * @return The value of explicitly-set float CSS property on this element.
 */
export declare function getFloat(el: Element | null): string;
/**
 * Returns the scroll bar width (represents the width of both horizontal
 * and vertical scroll).
 * @param opt_className An optional class name (or names) to apply to the invisible div created to measure the scrollbar. This is necessary if some scrollbars are styled differently than others.
 * @return The scroll bar width in px.
 */
export declare function getScrollbarWidth(opt_className?: string): number;
/**
 * Returns the x,y translation component of any CSS transforms applied to the
 * element, in pixels.
 * @param element The element to get the translation of.
 * @return The CSS translation of the element in px.
 */
export declare function getCssTranslation(element: Element): Coordinate;

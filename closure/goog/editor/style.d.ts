import { EventHandler } from '../events/eventhandler.js';
/**
 * Checks whether the given element inherits display: block.
 * @param node The Node to check.
 * @return Whether the element inherits CSS display: block.
 */
export declare function isDisplayBlock(node: Node): boolean;
/**
 * Returns true if the element is a container of other non-inline HTML
 * Note that span, strong and em tags, being inline can only contain
 * other inline elements and are thus, not containers. Containers are elements
 * that should not be broken up when wrapping selections with a node of an
 * inline block styling.
 * @param element The element to check.
 * @return Whether the element is a container.
 */
export declare function isContainer(element: Node | null): boolean;
/**
 * Return the first ancestor of this node that is a container, inclusive.
 * @param node Node to find the container of.
 * @return The element which contains node.
 */
export declare function getContainer(node: Node | null): Element | null;
/**
 * Makes the given element unselectable, as well as all of its children, except
 * for text areas, text, file and url inputs.
 * @param element The element to make unselectable.
 * @param eventHandler An EventHandler to register the event with. Assumes when the node is destroyed, the eventHandler's listeners are destroyed as well.
 */
export declare function makeUnselectable(element: Element | null, eventHandler: EventHandler | null): void;
/**
 * Make the given element selectable.
 *
 * For IE this simply turns off the "unselectable" property.
 *
 * Under FF no descendant of an unselectable node can be selectable:
 *
 * https://bugzilla.mozilla.org/show_bug.cgi?id=203291
 *
 * So we make each ancestor of node selectable, while trying to preserve the
 * unselectability of other nodes along that path
 *
 * This may cause certain text nodes which should be unselectable, to become
 * selectable. For example:
 *
 * <div id=div1 style="-moz-user-select: none">
 * Text1
 * <span id=span1>Text2</span>
 * </div>
 *
 * If we call makeSelectable on span1, then it will cause "Text1" to become
 * selectable, since it had to make div1 selectable in order for span1 to be
 * selectable.
 *
 * If "Text1" were enclosed within a `<p>` or `<span>`, then this problem would
 * not arise.  Text nodes do not have styles, so its style can't be set to
 * unselectable.
 * @param element The element to make selectable.
 */
export declare function makeSelectable(element: Element): void;

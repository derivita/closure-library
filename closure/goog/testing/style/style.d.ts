/**
 * Determines whether the bounding rectangles of the given elements intersect.
 * @param element The first element.
 * @param otherElement The second element.
 * @return Whether the bounding rectangles of the given elements intersect.
 */
export declare function intersects(element: Element | null, otherElement: Element | null): boolean;
/**
 * Determines whether the element has visible dimensions, i.e. x > 0 && y > 0.
 * @param element The element to check.
 * @return Whether the element has visible dimensions.
 */
export declare function hasVisibleDimensions(element: Element | null): boolean;
/**
 * Determines whether the CSS style of the element renders it visible.
 * Elements detached from the document are considered invisible.
 * @param element The element to check.
 * @return Whether the CSS style of the element renders it visible.
 */
export declare function isVisible(element: Element): boolean;
/**
 * Test whether the given element is on screen.
 * @param el The element to test.
 * @return Whether the element is on the screen.
 */
export declare function isOnScreen(el: Element): boolean;

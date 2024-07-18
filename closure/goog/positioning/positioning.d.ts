import { Coordinate } from '../math/coordinate.js';
import { Rect } from '../math/rect.js';
import { Size } from '../math/size.js';
import type { Box } from '../math/box.js';
/**
 * Enum for bits in the {@see Corner) bitmap.
 */
export declare enum CornerBit {
    BOTTOM = 1,
    CENTER = 2,
    RIGHT = 4,
    FLIP_RTL = 8
}
export /**
 * Enum for representing an element corner for positioning the popup.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 */ type Corner = number;
export declare const Corner: {
    TOP_LEFT: number;
    TOP_RIGHT: CornerBit;
    BOTTOM_LEFT: CornerBit;
    BOTTOM_RIGHT: number;
    TOP_START: CornerBit;
    TOP_END: number;
    BOTTOM_START: number;
    BOTTOM_END: number;
    TOP_CENTER: CornerBit;
    BOTTOM_CENTER: number;
};
export declare const Overflow: {
    IGNORE: number;
    ADJUST_X: number;
    FAIL_X: number;
    ADJUST_Y: number;
    FAIL_Y: number;
    RESIZE_WIDTH: number;
    RESIZE_HEIGHT: number;
    ADJUST_X_EXCEPT_OFFSCREEN: number;
    ADJUST_Y_EXCEPT_OFFSCREEN: number;
};
export /**
 * Enum for representing position handling in cases where the element would be
 * positioned outside the viewport.
 */ type Overflow = number;
export declare const OverflowStatus: {
    NONE: number;
    ADJUSTED_X: number;
    ADJUSTED_Y: number;
    WIDTH_ADJUSTED: number;
    HEIGHT_ADJUSTED: number;
    FAILED_LEFT: number;
    FAILED_RIGHT: number;
    FAILED_TOP: number;
    FAILED_BOTTOM: number;
    FAILED_OUTSIDE_VIEWPORT: number;
    FAILED: number;
    FAILED_HORIZONTAL: number;
    FAILED_VERTICAL: number;
};
export /**
 * Enum for representing the outcome of a positioning call.
 */ type OverflowStatus = number;
/**
 * Positions a movable element relative to an anchor element. The caller
 * specifies the corners that should touch. This functions then moves the
 * movable element accordingly.
 * @param anchorElement The element that is the anchor for where the movable element should position itself.
 * @param anchorElementCorner The corner of the anchorElement for positioning the movable element.
 * @param movableElement The element to move.
 * @param movableElementCorner The corner of the movableElement that that should be positioned adjacent to the anchor element.
 * @param opt_offset An offset specified in pixels. After the normal positioning algorithm is applied, the offset is then applied. Positive coordinates move the popup closer to the center of the anchor element. Negative coordinates move the popup away from the center of the anchor element.
 * @param opt_margin A margin specified in pixels. After the normal positioning algorithm is applied and any offset, the margin is then applied. Positive coordinates move the popup away from the spot it was positioned towards its center. Negative coordinates move it towards the spot it was positioned away from its center.
 * @param opt_overflow Overflow handling mode. Defaults to IGNORE if not specified. Bitmap, {@see Overflow}.
 * @param opt_preferredSize The preferred size of the movableElement.
 * @param opt_viewport Box object describing the dimensions of the viewport. The viewport is specified relative to offsetParent of `movableElement`. In other words, the viewport can be thought of as describing a "position: absolute" element contained in the offsetParent. It defaults to visible area of nearest scrollable ancestor of `movableElement` (see `style.getVisibleRectForElement`).
 * @return Status bitmap, {@see OverflowStatus}.
 */
export declare function positionAtAnchor(anchorElement: Element | null, anchorElementCorner: Corner | null, movableElement: Element | null, movableElementCorner: Corner | null, opt_offset?: Coordinate | null, opt_margin?: Box | null, opt_overflow?: number | null, opt_preferredSize?: Size | null, opt_viewport?: Box | null): OverflowStatus | null;
/**
 * Calculates the page offset of the given element's
 * offsetParent. This value can be used to translate any x- and
 * y-offset relative to the page to an offset relative to the
 * offsetParent, which can then be used directly with as position
 * coordinate for `positionWithCoordinate`.
 * @param movableElement The element to calculate.
 * @return The page offset, may be (0, 0).
 */
export declare function getOffsetParentPageOffset(movableElement: Element): Coordinate;
/**
 * Returns intersection of the specified element and
 * style.getVisibleRectForElement for it.
 * @param el The target element.
 * @return Intersection of getVisibleRectForElement and the current bounding rectangle of the element.  If the intersection is empty, returns the bounding rectangle.
 */
export declare function getVisiblePart_(el: Element | null): Rect;
/**
 * Positions the specified corner of the movable element at the
 * specified coordinate.
 * @param absolutePos The coordinate to position the element at.
 * @param movableElement The element to be positioned.
 * @param movableElementCorner The corner of the movableElement that that should be positioned.
 * @param opt_margin A margin specified in pixels. After the normal positioning algorithm is applied and any offset, the margin is then applied. Positive coordinates move the popup away from the spot it was positioned towards its center. Negative coordinates move it towards the spot it was positioned away from its center.
 * @param opt_viewport Box object describing the dimensions of the viewport. Required if opt_overflow is specified.
 * @param opt_overflow Overflow handling mode. Defaults to IGNORE if not specified, {@see Overflow}.
 * @param opt_preferredSize The preferred size of the movableElement. Defaults to the current size.
 * @return Status bitmap.
 */
export declare function positionAtCoordinate(absolutePos: Coordinate | null, movableElement: Element | null, movableElementCorner: Corner | null, opt_margin?: Box | null, opt_viewport?: Box | null, opt_overflow?: number | null, opt_preferredSize?: Size | null): OverflowStatus | null;
/**
 * Computes the position for an element to be placed on-screen at the
 * specified coordinates. Returns an object containing both the resulting
 * rectangle, and the overflow status bitmap.
 * @param absolutePos The coordinate to position the element at.
 * @param elementSize The size of the element to be positioned.
 * @param elementCorner The corner of the movableElement that that should be positioned.
 * @param opt_margin A margin specified in pixels. After the normal positioning algorithm is applied and any offset, the margin is then applied. Positive coordinates move the popup away from the spot it was positioned towards its center. Negative coordinates move it towards the spot it was positioned away from its center.
 * @param opt_viewport Box object describing the dimensions of the viewport. Required if opt_overflow is specified.
 * @param opt_overflow Overflow handling mode. Defaults to IGNORE if not specified, {@see Overflow}.
 * @return Object containing the computed position and status bitmap.
 */
export declare function getPositionAtCoordinate(absolutePos: Coordinate, elementSize: Size, elementCorner: Corner | null, opt_margin?: Box | null, opt_viewport?: Box | null, opt_overflow?: number | null): {
    'rect': Rect;
    'status': OverflowStatus | null;
};
/**
 * Adjusts the position and/or size of an element, identified by its position
 * and size, to fit inside the viewport. If the position or size of the element
 * is adjusted the pos or size objects, respectively, are modified.
 * @param pos Position of element, updated if the position is adjusted.
 * @param size Size of element, updated if the size is adjusted.
 * @param viewport Bounding box describing the viewport.
 * @param overflow Overflow handling mode, {@see Overflow}.
 * @return Status bitmap, {@see OverflowStatus}.
 */
export declare function adjustForViewport_(pos: Coordinate | null, size: Size | null, viewport: Box | null, overflow: number): OverflowStatus | null;
/**
 * Returns an absolute corner (top/bottom left/right) given an absolute
 * or relative (top/bottom start/end) corner and the direction of an element.
 * Absolute corners remain unchanged.
 * @param element DOM element to test for RTL direction.
 * @param corner The popup corner used for positioning.
 * @return Effective corner.
 */
export declare function getEffectiveCorner(element: Element | null, corner: Corner | null): Corner | null;
/**
 * Returns the corner opposite the given one horizontally.
 * @param corner The popup corner used to flip.
 * @return The opposite corner horizontally.
 */
export declare function flipCornerHorizontal(corner: Corner | null): Corner | null;
/**
 * Returns the corner opposite the given one vertically.
 * @param corner The popup corner used to flip.
 * @return The opposite corner vertically.
 */
export declare function flipCornerVertical(corner: Corner | null): Corner | null;
/**
 * Returns the corner opposite the given one horizontally and vertically.
 * @param corner The popup corner used to flip.
 * @return The opposite corner horizontally and vertically.
 */
export declare function flipCorner(corner: Corner | null): Corner | null;

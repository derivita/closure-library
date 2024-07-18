import { EventTarget } from '../../events/eventtarget.js';
import type { AbstractGraphics } from '../abstractgraphics.js';
import type { Element as GraphicsElement } from '../element.js';
import type { Graphics } from './graphics.js';
import type { Group } from './group.js';
/**
 * Base class for a wrapper around the goog.graphics wrapper that enables
 * more advanced functionality.
 */
export declare class Element extends EventTarget {
    /**
     * Base class for a wrapper around the goog.graphics wrapper that enables
     * more advanced functionality.
     * @param group Parent for this element.
     * @param wrapper The thin wrapper to wrap.
     */
    constructor(group: Group | null, wrapper: GraphicsElement | null);
    private noStructuralTyping_closure_goog_graphics_ext_element_Element;
    getWrapper(): GraphicsElement | null;
    getGraphics(): Element | Graphics | null;
    /**
     * Returns the graphics implementation.
     * @return The underlying graphics implementation drawing this element's wrapper.
     */
    protected getGraphicsImplementation(): AbstractGraphics | null;
    getParent(): Group | undefined | null;
    getLeft(): number;
    /**
     * Sets the left coordinate of the element.  Overwrites any previous value of
     * left, center, or right for this element.
     * @param left The left coordinate.
     * @param opt_chain Optional flag to specify this function is part of a chain of calls and therefore transformations should be set as pending but not yet performed.
     */
    setLeft(left: string | number, opt_chain?: boolean): void;
    getRight(): number;
    /**
     * Sets the right coordinate of the element.  Overwrites any previous value of
     * left, center, or right for this element.
     * @param right The right coordinate.
     * @param opt_chain Optional flag to specify this function is part of a chain of calls and therefore transformations should be set as pending but not yet performed.
     */
    setRight(right: string | number, opt_chain?: boolean): void;
    getCenter(): number;
    /**
     * Sets the center coordinate of the element.  Overwrites any previous value of
     * left, center, or right for this element.
     * @param center The center coordinate.
     * @param opt_chain Optional flag to specify this function is part of a chain of calls and therefore transformations should be set as pending but not yet performed.
     */
    setCenter(center: string | number, opt_chain?: boolean): void;
    getTop(): number;
    /**
     * Sets the top coordinate of the element.  Overwrites any previous value of
     * top, middle, or bottom for this element.
     * @param top The top coordinate.
     * @param opt_chain Optional flag to specify this function is part of a chain of calls and therefore transformations should be set as pending but not yet performed.
     */
    setTop(top: string | number, opt_chain?: boolean): void;
    getBottom(): number;
    /**
     * Sets the bottom coordinate of the element.  Overwrites any previous value of
     * top, middle, or bottom for this element.
     * @param bottom The bottom coordinate.
     * @param opt_chain Optional flag to specify this function is part of a chain of calls and therefore transformations should be set as pending but not yet performed.
     */
    setBottom(bottom: string | number, opt_chain?: boolean): void;
    getMiddle(): number;
    /**
     * Sets the middle coordinate of the element.  Overwrites any previous value of
     * top, middle, or bottom for this element
     * @param middle The middle coordinate.
     * @param opt_chain Optional flag to specify this function is part of a chain of calls and therefore transformations should be set as pending but not yet performed.
     */
    setMiddle(middle: string | number, opt_chain?: boolean): void;
    getWidth(): number;
    /**
     * Sets the width of the element.
     * @param width The new width value.
     * @param opt_chain Optional flag to specify this function is part of a chain of calls and therefore transformations should be set as pending but not yet performed.
     */
    setWidth(width: string | number, opt_chain?: boolean): void;
    getMinWidth(): number;
    /**
     * Sets the minimum width of the element.
     * @param minWidth The minimum width of the element.
     */
    setMinWidth(minWidth: string | number): void;
    getHeight(): number;
    /**
     * Sets the height of the element.
     * @param height The new height value.
     * @param opt_chain Optional flag to specify this function is part of a chain of calls and therefore transformations should be set as pending but not yet performed.
     */
    setHeight(height: string | number, opt_chain?: boolean): void;
    getMinHeight(): number;
    /**
     * Sets the minimum height of the element.
     * @param minHeight The minimum height of the element.
     */
    setMinHeight(minHeight: string | number): void;
    /**
     * Shortcut for setting the left and top position.
     * @param left The left coordinate.
     * @param top The top coordinate.
     * @param opt_chain Optional flag to specify this function is part of a chain of calls and therefore transformations should be set as pending but not yet performed.
     */
    setPosition(left: string | number, top: string | number, opt_chain?: boolean): void;
    /**
     * Shortcut for setting the width and height.
     * @param width The new width value.
     * @param height The new height value.
     * @param opt_chain Optional flag to specify this function is part of a chain of calls and therefore transformations should be set as pending but not yet performed.
     */
    setSize(width: string | number, height: string | number, opt_chain?: boolean): void;
    /**
     * Shortcut for setting the left, top, width, and height.
     * @param left The left coordinate.
     * @param top The top coordinate.
     * @param width The new width value.
     * @param height The new height value.
     * @param opt_chain Optional flag to specify this function is part of a chain of calls and therefore transformations should be set as pending but not yet performed.
     */
    setBounds(left: string | number, top: string | number, width: string | number, height: string | number, opt_chain?: boolean): void;
    getMaxX(): number;
    getMaxY(): number;
    /**
     * Reset the element.  This is called when the element changes size, or when
     * the coordinate system changes in a way that would affect pixel based
     * rendering
     */
    reset(): void;
    /**
     * Overridable function for subclass specific reset.
     */
    protected redraw(): void;
    /**
     * Returns whether this element's bounds depend on its parents.
     *
     * This function should be treated as if it has package scope.
     * @return Whether this element's bounds depend on its parents.
     */
    isParentDependent(): boolean;
    /**
     * Overridable function for subclass specific parent dependency.
     * @return Whether this shape's bounds depends on its parent's.
     */
    protected checkParentDependent(...args: any[]): boolean;
    /**
     * Set the rotation of this element.
     * @param angle The angle of rotation, in degrees.
     */
    setRotation(angle: number): void;
    getRotation(): number;
    /**
     * Called by the parent when the parent has transformed.
     *
     * Should be treated as package scope.
     */
    parentTransform(): void;
    isPendingTransform(): boolean;
    /**
     * Performs a pending transform.
     */
    protected transform(): void;
    getPixelScaleX(): number;
    getPixelScaleY(): number;
    disposeInternal(): void;
}
export declare namespace Element {
    /**
     * Position specification types.  Start corresponds to left/top, middle to
     * center/middle, and end to right/bottom.
     */
    enum PositionType_ {
        START = 0,
        MIDDLE = 1,
        END = 2
    }
    /**
     * Manages a position and size, either horizontal or vertical.
     */
    class Position_ {
        /**
         * Manages a position and size, either horizontal or vertical.
         * @param element The element the position applies to.
         * @param horizontal Whether the position is horizontal or vertical.
         */
        constructor(element: Element | null, horizontal: boolean);
        private noStructuralTyping_closure_goog_graphics_ext_element_Position_;
        getMinSize(): number;
        /**
         * Sets the minimum width/height of the element.
         * @param minSize The minimum width/height of the element.
         */
        setMinSize(minSize: string | number): void;
        getSize(): number;
        /**
         * Sets the width/height of the element.
         * @param size The width/height of the element.
         * @return Whether the value was changed.
         */
        setSize(size: string | number): boolean;
        getStart(): number;
        getMiddle(): number;
        getEnd(): number;
        /**
         * Sets the position, either as a left/top, center/middle, or right/bottom
         * value.
         * @param value The value of the coordinate.
         * @param type The type of the coordinate.
         */
        setPosition(value: number | string, type: Element.PositionType_ | null): void;
        getMaxPosition(): number;
        /**
         * Resets the caches of position values and coordinate values.
         */
        resetCache(): void;
        isParentDependent(): boolean;
    }
}

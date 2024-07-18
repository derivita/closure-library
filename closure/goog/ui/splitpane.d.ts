import * as googDom from '../dom/dom.js';
import { Size } from '../math/size.js';
import { Component } from './component.js';
/**
 * A left/right up/down Container SplitPane.
 * Create SplitPane with two Component opjects to split.
 * TODO(user): Support minimum splitpane size.
 * TODO(user): Allow component change/orientation after init.
 * TODO(user): Support hiding either side of handle (plus handle).
 * TODO(user): Look at setBorderBoxSize fixes and revist borderwidth code.
 */
export declare class SplitPane extends Component {
    /**
     * A left/right up/down Container SplitPane.
     * Create SplitPane with two Component opjects to split.
     * TODO(user): Support minimum splitpane size.
     * TODO(user): Allow component change/orientation after init.
     * TODO(user): Support hiding either side of handle (plus handle).
     * TODO(user): Look at setBorderBoxSize fixes and revist borderwidth code.
     * @param firstComponent Left or Top component.
     * @param secondComponent Right or Bottom component.
     * @param orientation SplitPane orientation.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(firstComponent: Component | null, secondComponent: Component | null, orientation: SplitPane.Orientation | null, opt_domHelper?: googDom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_splitpane_SplitPane;
    /**
     * Create the DOM node & text node needed for the splitpane.
     */
    createDom(): void;
    /**
     * Determines if a given element can be decorated by this type of component.
     * @param element Element to decorate.
     * @return True if the element can be decorated, false otherwise.
     */
    canDecorate(element: Element | null): boolean;
    /**
     * Decorates the given HTML element as a SplitPane.  Overrides {@link
     * Component#decorateInternal}.  Considered protected.
     * @param element Element (SplitPane div) to decorate.
     */
    decorateInternal(element: Element | null): void;
    /**
     * Setup all events and do an initial resize.
     */
    enterDocument(): void;
    /**
     * Sets the initial size of the left or top component.
     * @param size The size in Pixels of the container.
     */
    setInitialSize(size: number): void;
    /**
     * Sets the SplitPane handle size.
     * TODO(user): Make sure this works after initialization.
     * @param size The size of the handle in pixels.
     */
    setHandleSize(size: number): void;
    /**
     * Sets whether we resize on handle drag.
     * @param continuous The continuous resize value.
     */
    setContinuousResize(continuous: boolean): void;
    /**
     * Returns whether the orientation for the split pane is vertical
     * or not.
     * @return True if the orientation is vertical, false otherwise.
     */
    isVertical(): boolean;
    /**
     * Sets the orientation class for the split pane handle.
     */
    protected setOrientationClassForHandle(): void;
    /**
     * Sets the orientation of the split pane.
     * @param orientation SplitPane orientation.
     */
    setOrientation(orientation: SplitPane.Orientation | null): void;
    /**
     * Gets the orientation of the split pane.
     * @return The orientation.
     */
    getOrientation(): SplitPane.Orientation | null;
    getFirstComponentSize(): number | null;
    /**
     * Set the size of the left/top component, and resize the other component based
     * on that size and handle size.
     * @param opt_size The size of the top or left, in pixels. If unspecified, leaves the size of the first component unchanged but adjusts the size of the second component to fit the split pane size.
     */
    setFirstComponentSize(opt_size?: number | null): void;
    /**
     * Set the size of the splitpane.  This is usually called by the controlling
     * application.  This will set the SplitPane BorderBoxSize.
     * @param size The size to set the splitpane.
     * @param opt_firstComponentSize The size of the top or left component, in pixels.
     */
    setSize(size: Size, opt_firstComponentSize?: number | null): void;
    disposeInternal(): void;
}
export declare namespace SplitPane {
    /**
     * Events.
     */
    enum EventType {
        HANDLE_DRAG = "handle_drag",
        HANDLE_DRAG_END = "handle_drag_end",
        HANDLE_SNAP = "handle_snap"
    }
    /**
     * Z indices for iframe overlay and splitter handle.
     */
    type IframeOverlayIndex_ = number;
    const IframeOverlayIndex_: {
        HIDDEN: number;
        OVERLAY: number;
        SPLITTER_HANDLE: number;
    };
    /**
     * Orientation values for the splitpane.
     */
    enum Orientation {
        HORIZONTAL = "horizontal",
        VERTICAL = "vertical"
    }
}

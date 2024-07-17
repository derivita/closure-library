import * as dom from '../dom/dom.js';
import { Component } from './component.js';
/**
 * Creates a ScrollFloater; see file overview for details.
 */
export declare class ScrollFloater extends Component {
    /**
     * Creates a ScrollFloater; see file overview for details.
     * @param opt_parentElement Where to attach the element when it's floating.  Default is the document body.  If the floating element contains form inputs, it will be necessary to attach it to the corresponding form element, or to an element in the DOM subtree under the form element.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(opt_parentElement?: Element | null, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_scrollfloater_ScrollFloater;
    /**
     * Delegates dom creation to superclass, then constructs and
     * decorates required DOM elements.
     */
    createDom(): void;
    /**
     * Decorates the floated element with the standard ScrollFloater CSS class.
     * @param element The element to decorate.
     */
    decorateInternal(element: Element | null): void;
    enterDocument(): void;
    /**
     * Forces the component to update the cached element positions and sizes and
     * to re-evaluate whether the component should be docked, floated or pinned.
     */
    update(): void;
    disposeInternal(): void;
    /**
     * Sets whether the element should be floated if it scrolls out of view.
     * @param enable Whether floating is enabled for this element.
     */
    setScrollingEnabled(enable: boolean): void;
    isScrollingEnabled(): boolean;
    isFloating(): boolean;
    isPinned(): boolean;
    /**
     *
     * @param offset A vertical offset from the top of the viewport, from which to start floating the element. Default is 0. This is useful in cases when there are 'position:fixed' elements covering up part of the viewport.
     */
    setViewportTopOffset(offset: number): void;
    /**
     *
     * @param container An element used to define the boundaries within which the floater can be positioned. If not specified, scrolling the page down far enough may result in the floated element extending past the containing element as it is being scrolled out of the viewport. In some cases, such as a list with a sticky header, this may be undesirable. If the container element is specified and the floated element extends past the bottom of the container, the element will be pinned to the bottom of the container.
     */
    setContainerElement(container: Element | null): void;
}
export declare namespace ScrollFloater {
    /**
     * Events dispatched by this component.
     */
    enum EventType {
        FLOAT = "float",
        DOCK = "dock",
        PIN = "pin"
    }
    /**
     * The element can float at different positions on the page.
     */
    enum FloatMode_ {
        TOP = 0,
        BOTTOM = 1
    }
}

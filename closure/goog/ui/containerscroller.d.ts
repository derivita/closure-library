import { Disposable } from '../disposable/disposable.js';
import { Container } from './container.js';
/**
 * Plug-on scrolling behavior for a container.
 *
 * Use this to style containers, such as pop-up menus, to be scrolling, and
 * automatically keep the highlighted element visible.
 *
 * To use this, first style your container with the desired overflow
 * properties and height to achieve vertical scrolling.  Also, the scrolling
 * div should have no vertical padding, for two reasons: it is difficult to
 * compensate for, and is generally not what you want due to the strange way
 * CSS handles padding on the scrolling dimension.
 *
 * The container must already be rendered before this may be constructed.
 */
export declare class ContainerScroller extends Disposable {
    /**
     * Plug-on scrolling behavior for a container.
     *
     * Use this to style containers, such as pop-up menus, to be scrolling, and
     * automatically keep the highlighted element visible.
     *
     * To use this, first style your container with the desired overflow
     * properties and height to achieve vertical scrolling.  Also, the scrolling
     * div should have no vertical padding, for two reasons: it is difficult to
     * compensate for, and is generally not what you want due to the strange way
     * CSS handles padding on the scrolling dimension.
     *
     * The container must already be rendered before this may be constructed.
     * @param container The container to attach behavior to.
     */
    constructor(container: Container);
    private noStructuralTyping_closure_goog_ui_containerscroller_ContainerScroller;
    disposeInternal(): void;
}

import * as googDom from '../../dom/dom.js';
import { EventHandler } from '../../events/eventhandler.js';
import { EventTarget } from '../../events/eventtarget.js';
import * as log from '../../log/log.js';
import { Box } from '../../math/box.js';
/**
 * Property bubble UI element.
 */
export declare class Bubble extends EventTarget {
    /**
     * Property bubble UI element.
     * @param parent The parent element for this bubble.
     * @param zIndex The z index to draw the bubble at.
     */
    constructor(parent: Element | null, zIndex: number);
    private noStructuralTyping_closure_goog_ui_editor_bubble_Bubble;
    /**
     * The css class name of the bubble container element.
     */
    static BUBBLE_CLASSNAME: string;
    /**
     * Creates and adds DOM for the bubble UI to the given container.  This default
     * implementation just returns the container itself.
     * @param dom DOM helper to use.
     * @param container Element to add the new elements to.
     * @return The element where bubble content should be added.
     */
    protected createBubbleDom(dom: googDom.DomHelper, container: Element): Element;
    /**
     * A logger for Bubble.
     */
    protected logger: log.Logger | null;
    disposeInternal(): void;
    getContentElement(): Element | null;
    protected getContainerElement(): Element | null;
    protected getEventHandler<T = any>(this: T): EventHandler<T | null> | null;
    /**
     * Sets whether the bubble dismisses itself when the user clicks outside of it.
     * @param autoHide Whether to autohide on an external click.
     */
    setAutoHide(autoHide: boolean): void;
    /**
     * Returns whether there is already a panel of the given type.
     * @param type Type of panel to check.
     * @return Whether there is already a panel of the given type.
     */
    hasPanelOfType(type: string): boolean;
    /**
     * Adds a panel to the bubble.
     * @param type The type of bubble panel this is.  Should usually be the same as the tagName of the targetElement.  This ensures multiple bubble panels don't appear for the same element.
     * @param title The title of the panel.
     * @param targetElement The target element of the bubble.
     * @param opt_preferTopPosition Whether to prefer placing the bubble above the element instead of below it.  Defaults to preferring below. If any panel prefers the top position, the top position is used.
     * @return The id of the panel.
     */
    addPanel(type: string, title: string, targetElement: Element | null, contentFn: any, opt_preferTopPosition?: boolean): string;
    /**
     * Removes the panel with the given id.
     * @param id The id of the panel.
     */
    removePanel(id: string): void;
    /**
     * Handles the popup's hide event by removing all panels and dispatching a
     * HIDE event.
     */
    protected handlePopupHide(): void;
    /**
     * Returns the visibility of the bubble.
     * @return True if visible false if not.
     */
    isVisible(): boolean;
    /**
     * Returns the margin box.
     */
    protected getMarginBox(): Box | null;
    /**
     * Positions and displays this bubble below its targetElement. Assumes that
     * the bubbleContainer is already contained in the document object it applies
     * to.
     */
    reposition(): void;
    /**
     * Returns the viewport box to use when positioning the bubble.
     */
    protected getViewportBox(...args: any[]): Box | null;
}
export declare namespace Bubble {
    /**
     * Private class used to describe a bubble panel.
     */
    class Panel_ {
        /**
         * Private class used to describe a bubble panel.
         * @param dom DOM helper used to create the panel.
         * @param id ID of the panel.
         * @param type Type of the panel.
         * @param title Title of the panel.
         * @param targetElement Element the panel is showing for.
         * @param preferBottomPosition Whether this panel prefers to show below the target element.
         */
        constructor(dom: googDom.DomHelper | null, id: string, type: string, title: string, targetElement: Element | null, preferBottomPosition: boolean);
        private noStructuralTyping_closure_goog_ui_editor_bubble_Panel_;
        /**
         * The type of bubble panel.
         */
        type: string;
        /**
         * The target element of this bubble panel.
         */
        targetElement: Element | null;
        /**
         * Whether the panel prefers to be placed below the target element.
         */
        preferBottomPosition: boolean;
        /**
         * The element containing this panel.
         */
        element: Element;
        getContentElement(): Element | null;
    }
}

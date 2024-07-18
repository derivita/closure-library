import * as dom from '../dom/dom.js';
import { KeyHandler } from '../events/keyhandler.js';
import { Component } from './component.js';
import { ContainerRenderer } from './containerrenderer.js';
import { Control } from './control.js';
import type { BrowserEvent } from '../events/browserevent.js';
import type { Event } from '../events/event.js';
import type { KeyEvent } from '../events/keyevent.js';
/**
 * Base class for containers.  Extends {@link Component} by adding
 * the following:
 * <ul>
 * <li>a {@link KeyHandler}, to simplify keyboard handling,
 * <li>a pluggable <em>renderer</em> framework, to simplify the creation of
 * containers without the need to subclass this class,
 * <li>methods to manage child controls hosted in the container,
 * <li>default mouse and keyboard event handling methods.
 * </ul>
 */
export declare class Container extends Component {
    /**
     * Base class for containers.  Extends {@link Component} by adding
     * the following:
     * <ul>
     * <li>a {@link KeyHandler}, to simplify keyboard handling,
     * <li>a pluggable <em>renderer</em> framework, to simplify the creation of
     * containers without the need to subclass this class,
     * <li>methods to manage child controls hosted in the container,
     * <li>default mouse and keyboard event handling methods.
     * </ul>
     * @param opt_orientation Container orientation; defaults to `VERTICAL`.
     * @param opt_renderer Renderer used to render or decorate the container; defaults to {@link ContainerRenderer}.
     * @param opt_domHelper DOM helper, used for document interaction.
     */
    constructor(opt_orientation?: Container.Orientation | null, opt_renderer?: ContainerRenderer | null, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_container_Container;
    /**
     * Returns the DOM element on which the container is listening for keyboard
     * events (null if none).
     * @return Element on which the container is listening for key events.
     */
    getKeyEventTarget(): Element | null;
    /**
     * Attaches an element on which to listen for key events.
     * @param element The element to attach, or null/undefined to attach to the default element.
     */
    setKeyEventTarget(element: Element | undefined | null): void;
    /**
     * Returns the keyboard event handler for this container, lazily created the
     * first time this method is called.  The keyboard event handler listens for
     * keyboard events on the container's key event target, as determined by its
     * renderer.
     * @return Keyboard event handler for this container.
     */
    getKeyHandler(): KeyHandler;
    /**
     * Returns the renderer used by this container to render itself or to decorate
     * an existing element.
     * @return Renderer used by the container.
     */
    getRenderer(): ContainerRenderer | null;
    /**
     * Registers the given renderer with the container.  Changing renderers after
     * the container has already been rendered or decorated is an error.
     * @param renderer Renderer used by the container.
     */
    setRenderer(renderer: ContainerRenderer | null): void;
    /**
     * Creates the container's DOM.
     */
    createDom(): void;
    /**
     * Returns the DOM element into which child components are to be rendered,
     * or null if the container itself hasn't been rendered yet.  Overrides
     * {@link Component#getContentElement} by delegating to the renderer.
     * @return Element to contain child elements (null if none).
     */
    getContentElement(): Element | null;
    /**
     * Returns true if the given element can be decorated by this container.
     * Overrides {@link Component#canDecorate}.
     * @param element Element to decorate.
     * @return True iff the element can be decorated.
     */
    canDecorate(element: Element | null): boolean;
    /**
     * Decorates the given element with this container. Overrides {@link
     * Component#decorateInternal}.  Considered protected.
     * @param element Element to decorate.
     */
    decorateInternal(element: Element | null): void;
    /**
     * Configures the container after its DOM has been rendered, and sets up event
     * handling.  Overrides {@link Component#enterDocument}.
     */
    enterDocument(): void;
    /**
     * Cleans up the container before its DOM is removed from the document, and
     * removes event handlers.  Overrides {@link Component#exitDocument}.
     */
    exitDocument(): void;
    disposeInternal(): void;
    /**
     * Handles ENTER events raised by child controls when they are navigated to.
     * @param e ENTER event to handle.
     * @return Whether to prevent handleMouseOver from handling the event.
     */
    handleEnterItem(e: Event | null): boolean;
    /**
     * Handles HIGHLIGHT events dispatched by items in the container when
     * they are highlighted.
     * @param e Highlight event to handle.
     */
    handleHighlightItem(e: Event | null): void;
    /**
     * Handles UNHIGHLIGHT events dispatched by items in the container when
     * they are unhighlighted.
     * @param e Unhighlight event to handle.
     */
    handleUnHighlightItem(e: Event | null): void;
    /**
     * Handles OPEN events dispatched by items in the container when they are
     * opened.
     * @param e Open event to handle.
     */
    handleOpenItem(e: Event | null): void;
    /**
     * Handles CLOSE events dispatched by items in the container when they are
     * closed.
     * @param e Close event to handle.
     */
    handleCloseItem(e: Event | null): void;
    /**
     * Handles mousedown events over the container.  The default implementation
     * sets the "mouse button pressed" flag and, if the container is focusable,
     * grabs keyboard focus.
     * @param e Mousedown event to handle.
     */
    handleMouseDown(e: BrowserEvent | null): void;
    /**
     * Handles mouseup events over the document.  The default implementation
     * clears the "mouse button pressed" flag.
     * @param e Mouseup event to handle.
     */
    handleDocumentMouseUp(e: BrowserEvent | null): void;
    /**
     * Handles mouse events originating from nodes belonging to the controls hosted
     * in the container.  Locates the child control based on the DOM node that
     * dispatched the event, and forwards the event to the control for handling.
     * @param e Mouse event to handle.
     */
    handleChildMouseEvents(e: BrowserEvent | null): void;
    /**
     * Returns the child control that owns the given DOM node, or null if no such
     * control is found.
     * @param node DOM node whose owner is to be returned.
     * @return Control hosted in the container to which the node belongs (if found).
     */
    protected getOwnerControl(node: Node | null): Control | null;
    /**
     * Handles focus events raised when the container's key event target receives
     * keyboard focus.
     * @param e Focus event to handle.
     */
    handleFocus(e: BrowserEvent | null): void;
    /**
     * Handles blur events raised when the container's key event target loses
     * keyboard focus.  The default implementation clears the highlight index.
     * @param e Blur event to handle.
     */
    handleBlur(e: BrowserEvent | null): void;
    /**
     * Attempts to handle a keyboard event, if the control is enabled, by calling
     * {@link handleKeyEventInternal}.  Considered protected; should only be used
     * within this package and by subclasses.
     * @param e Key event to handle.
     * @return Whether the key event was handled.
     */
    handleKeyEvent(e: KeyEvent | null): boolean;
    /**
     * Attempts to handle a keyboard event; returns true if the event was handled,
     * false otherwise.  If the container is enabled, and a child is highlighted,
     * calls the child control's `handleKeyEvent` method to give the control
     * a chance to handle the event first.
     * @param e Key event to handle.
     * @return Whether the event was handled by the container (or one of its children).
     */
    handleKeyEventInternal(e: KeyEvent | null): boolean;
    /**
     * Adds the specified control as the last child of this container.  See
     * {@link Container#addChildAt} for detailed semantics.
     * @param child The new child control.
     * @param opt_render Whether the new child should be rendered immediately after being added (defaults to false).
     */
    addChild(child: Component | null, opt_render?: boolean): void;
    /**
     * Overrides {@link Container#getChild} to make it clear that it
     * only returns {@link Control}s.
     * @param id Child component ID.
     * @return The child with the given ID; null if none.
     */
    getChild(id: string): Control | null;
    /**
     * Overrides {@link Container#getChildAt} to make it clear that it
     * only returns {@link Control}s.
     * @param index 0-based index.
     * @return The child with the given ID; null if none.
     */
    getChildAt(index: number): Control | null;
    /**
     * Adds the control as a child of this container at the given 0-based index.
     * Overrides {@link Component#addChildAt} by also updating the
     * container's highlight index.  Since {@link Component#addChild} uses
     * {@link #addChildAt} internally, we only need to override this method.
     * @param control New child.
     * @param index Index at which the new child is to be added.
     * @param opt_render Whether the new child should be rendered immediately after being added (defaults to false).
     */
    addChildAt(control: Component | null, index: number, opt_render?: boolean): void;
    /**
     * Removes a child control.  Overrides {@link Component#removeChild} by
     * updating the highlight index.  Since {@link Component#removeChildAt}
     * uses {@link #removeChild} internally, we only need to override this method.
     * @param control The ID of the child to remove, or the control itself.
     * @param opt_unrender Whether to call `exitDocument` on the removed control, and detach its DOM from the document (defaults to false).
     * @return The removed control, if any.
     */
    removeChild(control: string | Component | null, opt_unrender?: boolean): Control | null;
    /**
     * Returns the container's orientation.
     * @return Container orientation.
     */
    getOrientation(): Container.Orientation | null;
    /**
     * Sets the container's orientation.
     * @param orientation Container orientation.
     */
    setOrientation(orientation: Container.Orientation | null): void;
    /**
     * Returns true if the container's visibility is set to visible, false if
     * it is set to hidden.  A container that is set to hidden is guaranteed
     * to be hidden from the user, but the reverse isn't necessarily true.
     * A container may be set to visible but can otherwise be obscured by another
     * element, rendered off-screen, or hidden using direct CSS manipulation.
     * @return Whether the container is set to be visible.
     */
    isVisible(): boolean;
    /**
     * Shows or hides the container.  Does nothing if the container already has
     * the requested visibility.  Otherwise, dispatches a SHOW or HIDE event as
     * appropriate, giving listeners a chance to prevent the visibility change.
     * @param visible Whether to show or hide the container.
     * @param opt_force If true, doesn't check whether the container already has the requested visibility, and doesn't dispatch any events.
     * @return Whether the visibility was changed.
     */
    setVisible(visible: boolean, opt_force?: boolean): boolean;
    /**
     * Returns true if the container is enabled, false otherwise.
     * @return Whether the container is enabled.
     */
    isEnabled(): boolean;
    /**
     * Enables/disables the container based on the `enable` argument.
     * Dispatches an `ENABLED` or `DISABLED` event prior to changing
     * the container's state, which may be caught and canceled to prevent the
     * container from changing state.  Also enables/disables child controls.
     * @param enable Whether to enable or disable the container.
     */
    setEnabled(enable: boolean): void;
    /**
     * Returns true if the container is focusable, false otherwise.  The default
     * is true.  Focusable containers always have a tab index and allocate a key
     * handler to handle keyboard events while focused.
     * @return Whether the component is focusable.
     */
    isFocusable(): boolean;
    /**
     * Sets whether the container is focusable.  The default is true.  Focusable
     * containers always have a tab index and allocate a key handler to handle
     * keyboard events while focused.
     * @param focusable Whether the component is to be focusable.
     */
    setFocusable(focusable: boolean): void;
    /**
     * Returns true if the container allows children to be focusable, false
     * otherwise.  Only effective if the container is not focusable.
     * @return Whether children should be focusable.
     */
    isFocusableChildrenAllowed(): boolean;
    /**
     * Sets whether the container allows children to be focusable, false
     * otherwise.  Only effective if the container is not focusable.
     * @param focusable Whether the children should be focusable.
     */
    setFocusableChildrenAllowed(focusable: boolean): void;
    isOpenFollowsHighlight(): boolean;
    /**
     * Sets whether highlighting a child component should also open it.
     * @param follow Whether highlighting a child component also opens it.
     */
    setOpenFollowsHighlight(follow: boolean): void;
    /**
     * Returns the index of the currently highlighted item (-1 if none).
     * @return Index of the currently highlighted item.
     */
    getHighlightedIndex(): number;
    /**
     * Highlights the item at the given 0-based index (if any).  If another item
     * was previously highlighted, it is un-highlighted.
     * @param index Index of item to highlight (-1 removes the current highlight).
     */
    setHighlightedIndex(index: number): void;
    /**
     * Highlights the given item if it exists and is a child of the container;
     * otherwise un-highlights the currently highlighted item.
     * @param item Item to highlight.
     */
    setHighlighted(item: Control | null): void;
    /**
     * Returns the currently highlighted item (if any).
     * @return Highlighted item (null if none).
     */
    getHighlighted(): Control | null;
    /**
     * Highlights the first highlightable item in the container
     */
    highlightFirst(): void;
    /**
     * Highlights the last highlightable item in the container.
     */
    highlightLast(): void;
    /**
     * Highlights the next highlightable item (or the first if nothing is currently
     * highlighted).
     */
    highlightNext(): void;
    /**
     * Highlights the previous highlightable item (or the last if nothing is
     * currently highlighted).
     */
    highlightPrevious(): void;
    /**
     * Helper function that manages the details of moving the highlight among
     * child controls in response to keyboard events.
     * @param fn Function that accepts the current and maximum indices, and returns the next index to check.
     * @param startIndex Start index.
     * @return Whether the highlight has changed.
     */
    protected highlightHelper(fn: (this: Container | null) => number, startIndex: number): boolean;
    /**
     * Returns whether the given item can be highlighted.
     * @param item The item to check.
     * @return Whether the item can be highlighted.
     */
    protected canHighlightItem(item: Control | null): boolean;
    /**
     * Helper method that sets the highlighted index to the given index in response
     * to a keyboard event.  The base class implementation simply calls the
     * {@link #setHighlightedIndex} method, but subclasses can override this
     * behavior as needed.
     * @param index Index of item to highlight.
     */
    protected setHighlightedIndexFromKeyEvent(index: number): void;
    /**
     * Returns the currently open (expanded) control in the container (null if
     * none).
     * @return The currently open control.
     */
    getOpenItem(): Control | null;
    /**
     * Returns true if the mouse button is pressed, false otherwise.
     * @return Whether the mouse button is pressed.
     */
    isMouseButtonPressed(): boolean;
    /**
     * Sets or clears the "mouse button pressed" flag.
     * @param pressed Whether the mouse button is presed.
     */
    setMouseButtonPressed(pressed: boolean): void;
}
export declare namespace Container {
    /**
     * Container-specific events.
     */
    enum EventType {
        AFTER_SHOW = "aftershow",
        AFTER_HIDE = "afterhide"
    }
    /**
     * Container orientation constants.
     */
    enum Orientation {
        HORIZONTAL = "horizontal",
        VERTICAL = "vertical"
    }
}

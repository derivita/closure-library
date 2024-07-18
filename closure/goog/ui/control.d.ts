import { Disposable } from '../disposable/disposable.js';
import * as dom from '../dom/dom.js';
import { BrowserEvent } from '../events/browserevent.js';
import { Event } from '../events/event.js';
import { KeyHandler } from '../events/keyhandler.js';
import * as functions from '../functions/functions.js';
import { Component } from './component.js';
import { ControlContent } from './controlcontent.js';
import { ControlRenderer } from './controlrenderer.js';
import * as registry from './registry.js';
import type { Role } from '../a11y/aria/roles.js';
import type { KeyEvent } from '../events/keyevent.js';
/**
 * Base class for UI controls.  Extends {@link Component} by adding
 * the following:
 * <ul>
 * <li>a {@link KeyHandler}, to simplify keyboard handling,
 * <li>a pluggable <em>renderer</em> framework, to simplify the creation of
 * simple controls without the need to subclass this class,
 * <li>the notion of component <em>content</em>, like a text caption or DOM
 * structure displayed in the component (e.g. a button label),
 * <li>getter and setter for component content, as well as a getter and
 * setter specifically for caption text (for convenience),
 * <li>support for hiding/showing the component,
 * <li>fine-grained control over supported states and state transition
 * events, and
 * <li>default mouse and keyboard event handling.
 * </ul>
 * This class has sufficient built-in functionality for most simple UI controls.
 * All controls dispatch SHOW, HIDE, ENTER, LEAVE, and ACTION events on show,
 * hide, mouseover, mouseout, and user action, respectively.  Additional states
 * are also supported.  See closure/demos/control.html
 * for example usage.
 */
export declare class Control extends Component {
    /**
     * Base class for UI controls.  Extends {@link Component} by adding
     * the following:
     * <ul>
     * <li>a {@link KeyHandler}, to simplify keyboard handling,
     * <li>a pluggable <em>renderer</em> framework, to simplify the creation of
     * simple controls without the need to subclass this class,
     * <li>the notion of component <em>content</em>, like a text caption or DOM
     * structure displayed in the component (e.g. a button label),
     * <li>getter and setter for component content, as well as a getter and
     * setter specifically for caption text (for convenience),
     * <li>support for hiding/showing the component,
     * <li>fine-grained control over supported states and state transition
     * events, and
     * <li>default mouse and keyboard event handling.
     * </ul>
     * This class has sufficient built-in functionality for most simple UI controls.
     * All controls dispatch SHOW, HIDE, ENTER, LEAVE, and ACTION events on show,
     * hide, mouseover, mouseout, and user action, respectively.  Additional states
     * are also supported.  See closure/demos/control.html
     * for example usage.
     * @param opt_content Text caption or DOM structure to display as the content of the control (if any).
     * @param opt_renderer Renderer used to render or decorate the component; defaults to {@link ControlRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(opt_content?: ControlContent | null, opt_renderer?: ControlRenderer | null, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_control_Control;
    /**
     * Maps a CSS class name to a function that returns a new instance of
     * {@link Control} or a subclass thereof, suitable to decorate
     * an element that has the specified CSS class.  UI components that extend
     * {@link Control} and want {@link goog.ui.Container}s to be able
     * to discover and decorate elements using them should register a factory
     * function via this API.
     */
    static registerDecorator: typeof registry.setDecoratorByClassName;
    /**
     * Takes an element and returns a new instance of {@link Control}
     * or a subclass, suitable to decorate it (based on the element's CSS class).
     * @param element Element to decorate.
     * @return New control instance to decorate the element (null if none).
     */
    static getDecorator(a: Element | null): Control | null;
    /**
     * Returns true if the control is configured to handle its own mouse events,
     * false otherwise.  Controls not hosted in {@link goog.ui.Container}s have
     * to handle their own mouse events, but controls hosted in containers may
     * allow their parent to handle mouse events on their behalf.  Considered
     * protected; should only be used within this package and by subclasses.
     * @return Whether the control handles its own mouse events.
     */
    isHandleMouseEvents(): boolean;
    /**
     * Enables or disables mouse event handling for the control.  Containers may
     * use this method to disable mouse event handling in their child controls.
     * Considered protected; should only be used within this package and by
     * subclasses.
     * @param enable Whether to enable or disable mouse event handling.
     */
    setHandleMouseEvents(enable: boolean): void;
    /**
     * Returns the DOM element on which the control is listening for keyboard
     * events (null if none).
     * @return Element on which the control is listening for key events.
     */
    getKeyEventTarget(): Element | null;
    /**
     * Returns the keyboard event handler for this component, lazily created the
     * first time this method is called.  Considered protected; should only be
     * used within this package and by subclasses.
     * @return Keyboard event handler for this component.
     */
    protected getKeyHandler(): KeyHandler;
    /**
     * Returns the renderer used by this component to render itself or to decorate
     * an existing element.
     * @return Renderer used by the component (undefined if none).
     */
    getRenderer(): ControlRenderer | undefined | null;
    /**
     * Registers the given renderer with the component.  Changing renderers after
     * the component has entered the document is an error.
     * @param renderer Renderer used by the component.
     */
    setRenderer(renderer: ControlRenderer | null): void;
    /**
     * Returns any additional class name(s) to be applied to the component's
     * root element, or null if no extra class names are needed.
     * @return Additional class names to be applied to the component's root element (null if none).
     */
    getExtraClassNames(): string[] | null;
    /**
     * Adds the given class name to the list of classes to be applied to the
     * component's root element.
     * @param className Additional class name to be applied to the component's root element.
     */
    addClassName(className: string): void;
    /**
     * Removes the given class name from the list of classes to be applied to
     * the component's root element.
     * @param className Class name to be removed from the component's root element.
     */
    removeClassName(className: string): void;
    /**
     * Adds or removes the given class name to/from the list of classes to be
     * applied to the component's root element.
     * @param className CSS class name to add or remove.
     * @param enable Whether to add or remove the class name.
     */
    enableClassName(className: string, enable: boolean): void;
    /**
     * Creates the control's DOM.  Overrides {@link Component#createDom} by
     * delegating DOM manipulation to the control's renderer.
     */
    createDom(): void;
    /**
     * Returns the control's preferred ARIA role. This can be used by a control to
     * override the role that would be assigned by the renderer.  This is useful in
     * cases where a different ARIA role is appropriate for a control because of the
     * context in which it's used.  E.g., a {@link goog.ui.MenuButton} added to a
     * {@link goog.ui.Select} should have an ARIA role of LISTBOX and not MENUITEM.
     * @return This control's preferred ARIA role or null if no preferred ARIA role is set.
     */
    getPreferredAriaRole(): Role | null;
    /**
     * Sets the control's preferred ARIA role. This can be used to override the role
     * that would be assigned by the renderer.  This is useful in cases where a
     * different ARIA role is appropriate for a control because of the
     * context in which it's used.  E.g., a {@link goog.ui.MenuButton} added to a
     * {@link goog.ui.Select} should have an ARIA role of LISTBOX and not MENUITEM.
     * @param role This control's preferred ARIA role.
     */
    setPreferredAriaRole(role: Role | null): void;
    /**
     * Gets the control's aria label.
     * @return This control's aria label.
     */
    getAriaLabel(): string | null;
    /**
     * Sets the control's aria label. This can be used to assign aria label to the
     * element after it is rendered.
     * @param label The string to set as the aria label for this control. No escaping is done on this value.
     */
    setAriaLabel(label: string): void;
    /**
     * Returns the DOM element into which child components are to be rendered,
     * or null if the control itself hasn't been rendered yet.  Overrides
     * {@link Component#getContentElement} by delegating to the renderer.
     * @return Element to contain child elements (null if none).
     */
    getContentElement(): Element | null;
    /**
     * Returns true if the given element can be decorated by this component.
     * Overrides {@link Component#canDecorate}.
     * @param element Element to decorate.
     * @return Whether the element can be decorated by this component.
     */
    canDecorate(element: Element | null): boolean;
    /**
     * Decorates the given element with this component. Overrides {@link
     * Component#decorateInternal} by delegating DOM manipulation
     * to the control's renderer.
     * @param element Element to decorate.
     */
    decorateInternal(element: Element | null): void;
    /**
     * Configures the component after its DOM has been rendered, and sets up event
     * handling.  Overrides {@link Component#enterDocument}.
     */
    enterDocument(): void;
    /**
     * Cleans up the component before its DOM is removed from the document, and
     * removes event handlers.  Overrides {@link Component#exitDocument}
     * by making sure that components that are removed from the document aren't
     * focusable (i.e. have no tab index).
     */
    exitDocument(): void;
    disposeInternal(): void;
    /**
     * Returns the text caption or DOM structure displayed in the component.
     * @return Text caption or DOM structure comprising the component's contents.
     */
    getContent(): ControlContent | null;
    /**
     * Sets the component's content to the given text caption, element, or array of
     * nodes.  (If the argument is an array of nodes, it must be an actual array,
     * not an array-like object.)
     * @param content Text caption or DOM structure to set as the component's contents.
     */
    setContent(content: ControlContent | null): void;
    /**
     * Sets the component's content to the given text caption, element, or array
     * of nodes.  Unlike {@link #setContent}, doesn't modify the component's DOM.
     * Called by renderers during element decoration.
     *
     * This should only be used by subclasses and its associated renderers.
     * @param content Text caption or DOM structure to set as the component's contents.
     */
    setContentInternal(content: ControlContent | null): void;
    getCaption(): string;
    /**
     * Sets the text caption of the component.
     * @param caption Text caption of the component.
     */
    setCaption(caption: string): void;
    setRightToLeft(rightToLeft: any): void;
    /**
     * Returns true if the control allows text selection within its DOM, false
     * otherwise.  Controls that disallow text selection have the appropriate
     * unselectable styling applied to their elements.  Note that controls hosted
     * in containers will report that they allow text selection even if their
     * container disallows text selection.
     * @return Whether the control allows text selection.
     */
    isAllowTextSelection(): boolean;
    /**
     * Allows or disallows text selection within the control's DOM.
     * @param allow Whether the control should allow text selection.
     */
    setAllowTextSelection(allow: boolean): void;
    /**
     * Returns true if the component's visibility is set to visible, false if
     * it is set to hidden.  A component that is set to hidden is guaranteed
     * to be hidden from the user, but the reverse isn't necessarily true.
     * A component may be set to visible but can otherwise be obscured by another
     * element, rendered off-screen, or hidden using direct CSS manipulation.
     * @return Whether the component is visible.
     */
    isVisible(): boolean;
    /**
     * Shows or hides the component.  Does nothing if the component already has
     * the requested visibility.  Otherwise, dispatches a SHOW or HIDE event as
     * appropriate, giving listeners a chance to prevent the visibility change.
     * When showing a component that is both enabled and focusable, ensures that
     * its key target has a tab index.  When hiding a component that is enabled
     * and focusable, blurs its key target and removes its tab index.
     * @param visible Whether to show or hide the component.
     * @param opt_force If true, doesn't check whether the component already has the requested visibility, and doesn't dispatch any events.
     * @return Whether the visibility was changed.
     */
    setVisible(visible: boolean, opt_force?: boolean): boolean;
    /**
     * Returns true if the component is enabled, false otherwise.
     * @return Whether the component is enabled.
     */
    isEnabled(): boolean;
    /**
     * Enables or disables the component.  Does nothing if this state transition
     * is disallowed.  If the component is both visible and focusable, updates its
     * focused state and tab index as needed.  If the component is being disabled,
     * ensures that it is also deactivated and un-highlighted first.  Note that the
     * component's enabled/disabled state is "locked" as long as it is hosted in a
     * {@link goog.ui.Container} that is itself disabled; this is to prevent clients
     * from accidentally re-enabling a control that is in a disabled container.
     * @param enable Whether to enable or disable the component.
     */
    setEnabled(enable: boolean): void;
    /**
     * Returns true if the component is currently highlighted, false otherwise.
     * @return Whether the component is highlighted.
     */
    isHighlighted(): boolean;
    /**
     * Highlights or unhighlights the component.  Does nothing if this state
     * transition is disallowed.
     * @param highlight Whether to highlight or unhighlight the component.
     */
    setHighlighted(highlight: boolean): void;
    /**
     * Returns true if the component is active (pressed), false otherwise.
     * @return Whether the component is active.
     */
    isActive(): boolean;
    /**
     * Activates or deactivates the component.  Does nothing if this state
     * transition is disallowed.
     * @param active Whether to activate or deactivate the component.
     */
    setActive(active: boolean): void;
    /**
     * Returns true if the component is selected, false otherwise.
     * @return Whether the component is selected.
     */
    isSelected(): boolean;
    /**
     * Selects or unselects the component.  Does nothing if this state transition
     * is disallowed.
     * @param select Whether to select or unselect the component.
     */
    setSelected(select: boolean): void;
    /**
     * Returns true if the component is checked, false otherwise.
     * @return Whether the component is checked.
     */
    isChecked(): boolean;
    /**
     * Checks or unchecks the component.  Does nothing if this state transition
     * is disallowed.
     * @param check Whether to check or uncheck the component.
     */
    setChecked(check: boolean): void;
    /**
     * Returns true if the component is styled to indicate that it has keyboard
     * focus, false otherwise.  Note that `isFocused()` returning true
     * doesn't guarantee that the component's key event target has keyboard focus,
     * only that it is styled as such.
     * @return Whether the component is styled to indicate as having keyboard focus.
     */
    isFocused(): boolean;
    /**
     * Applies or removes styling indicating that the component has keyboard focus.
     * Note that unlike the other "set" methods, this method is called as a result
     * of the component's element having received or lost keyboard focus, not the
     * other way around, so calling `setFocused(true)` doesn't guarantee that
     * the component's key event target has keyboard focus, only that it is styled
     * as such.
     * @param focused Whether to apply or remove styling to indicate that the component's element has keyboard focus.
     */
    setFocused(focused: boolean): void;
    /**
     * Returns true if the component is open (expanded), false otherwise.
     * @return Whether the component is open.
     */
    isOpen(): boolean;
    /**
     * Opens (expands) or closes (collapses) the component.  Does nothing if this
     * state transition is disallowed.
     * @param open Whether to open or close the component.
     */
    setOpen(open: boolean): void;
    /**
     * Returns the component's state as a bit mask of {@link
     * Component.State}s.
     * @return Bit mask representing component state.
     */
    getState(): number;
    /**
     * Returns true if the component is in the specified state, false otherwise.
     * @param state State to check.
     * @return Whether the component is in the given state.
     */
    hasState(state: Component.State | null): boolean;
    /**
     * Sets or clears the given state on the component, and updates its styling
     * accordingly.  Does nothing if the component is already in the correct state
     * or if it doesn't support the specified state.  Doesn't dispatch any state
     * transition events; use advisedly.
     * @param state State to set or clear.
     * @param enable Whether to set or clear the state (if supported).
     * @param opt_calledFrom Prevents looping with setEnabled.
     */
    setState(state: Component.State | null, enable: boolean, opt_calledFrom?: boolean): void;
    /**
     * Sets the component's state to the state represented by a bit mask of
     * {@link Component.State}s.  Unlike {@link #setState}, doesn't
     * update the component's styling, and doesn't reject unsupported states.
     * Called by renderers during element decoration.  Considered protected;
     * should only be used within this package and by subclasses.
     *
     * This should only be used by subclasses and its associated renderers.
     * @param state Bit mask representing component state.
     */
    setStateInternal(state: number): void;
    /**
     * Returns true if the component supports the specified state, false otherwise.
     * @param state State to check.
     * @return Whether the component supports the given state.
     */
    isSupportedState(state: Component.State | null): boolean;
    /**
     * Enables or disables support for the given state. Disabling support
     * for a state while the component is in that state is an error.
     * @param state State to support or de-support.
     * @param support Whether the component should support the state.
     */
    setSupportedState(state: Component.State | null, support: boolean): void;
    /**
     * Returns true if the component provides default event handling for the state,
     * false otherwise.
     * @param state State to check.
     * @return Whether the component provides default event handling for the state.
     */
    isAutoState(state: Component.State | null): boolean;
    /**
     * Enables or disables automatic event handling for the given state(s).
     * @param states Bit mask of {@link Component.State}s for which default event handling is to be enabled or disabled.
     * @param enable Whether the component should provide default event handling for the state(s).
     */
    setAutoStates(states: number, enable: boolean): void;
    /**
     * Returns true if the component is set to dispatch transition events for the
     * given state, false otherwise.
     * @param state State to check.
     * @return Whether the component dispatches transition events for the state.
     */
    isDispatchTransitionEvents(state: Component.State | null): boolean;
    /**
     * Enables or disables transition events for the given state(s).  Controls
     * handle state transitions internally by default, and only dispatch state
     * transition events if explicitly requested to do so by calling this method.
     * @param states Bit mask of {@link Component.State}s for which transition events should be enabled or disabled.
     * @param enable Whether transition events should be enabled.
     */
    setDispatchTransitionEvents(states: number, enable: boolean): void;
    /**
     * Returns true if the transition into or out of the given state is allowed to
     * proceed, false otherwise.  A state transition is allowed under the following
     * conditions:
     * <ul>
     * <li>the component supports the state,
     * <li>the component isn't already in the target state,
     * <li>either the component is configured not to dispatch events for this
     * state transition, or a transition event was dispatched and wasn't
     * canceled by any event listener, and
     * <li>the component hasn't been disposed of
     * </ul>
     * Considered protected; should only be used within this package and by
     * subclasses.
     * @param state State to/from which the control is transitioning.
     * @param enable Whether the control is entering or leaving the state.
     * @return Whether the state transition is allowed to proceed.
     */
    protected isTransitionAllowed(state: Component.State | null, enable: boolean): boolean;
    /**
     * Handles mouseover events.  Dispatches an ENTER event; if the event isn't
     * canceled, the component is enabled, and it supports auto-highlighting,
     * highlights the component.  Considered protected; should only be used
     * within this package and by subclasses.
     * @param e Mouse event to handle.
     */
    handleMouseOver(e: BrowserEvent | null): void;
    /**
     * Handles mouseout events.  Dispatches a LEAVE event; if the event isn't
     * canceled, and the component supports auto-highlighting, deactivates and
     * un-highlights the component.  Considered protected; should only be used
     * within this package and by subclasses.
     * @param e Mouse event to handle.
     */
    handleMouseOut(e: BrowserEvent | null): void;
    /**
     * Handles contextmenu events.
     */
    handleContextMenu: typeof functions.UNDEFINED;
    /**
     * Handles mousedown events.  If the component is enabled, highlights and
     * activates it.  If the component isn't configured for keyboard access,
     * prevents it from receiving keyboard focus.  Considered protected; should
     * only be used within this package and by subclasses.
     * @param e Mouse event to handle.
     */
    handleMouseDown(e: Event | null): void;
    /**
     * Handles mouseup events.  If the component is enabled, highlights it.  If
     * the component has previously been activated, performs its associated action
     * by calling {@link performActionInternal}, then deactivates it.  Considered
     * protected; should only be used within this package and by subclasses.
     * @param e Mouse event to handle.
     */
    handleMouseUp(e: Event | null): void;
    /**
     * Handles dblclick events.  Should only be registered if the user agent is
     * IE.  If the component is enabled, performs its associated action by calling
     * {@link performActionInternal}.  This is used to allow more performant
     * buttons in IE.  In IE, no mousedown event is fired when that mousedown will
     * trigger a dblclick event.  Because of this, a user clicking quickly will
     * only cause ACTION events to fire on every other click.  This is a workaround
     * to generate ACTION events for every click.  Unfortunately, this workaround
     * won't ever trigger the ACTIVE state.  This is roughly the same behaviour as
     * if this were a 'button' element with a listener on mouseup.  Considered
     * protected; should only be used within this package and by subclasses.
     * @param e Mouse event to handle.
     */
    handleDblClick(e: Event | null): void;
    /**
     * Performs the appropriate action when the control is activated by the user.
     * The default implementation first updates the checked and selected state of
     * controls that support them, then dispatches an ACTION event.  Considered
     * protected; should only be used within this package and by subclasses.
     * @param e Event that triggered the action.
     * @return Whether the action is allowed to proceed.
     */
    protected performActionInternal(e: Event | null): boolean;
    /**
     * Handles focus events on the component's key event target element.  If the
     * component is focusable, updates its state and styling to indicate that it
     * now has keyboard focus.  Considered protected; should only be used within
     * this package and by subclasses.  <b>Warning:</b> IE dispatches focus and
     * blur events asynchronously!
     * @param e Focus event to handle.
     */
    handleFocus(e: Event | null): void;
    /**
     * Handles blur events on the component's key event target element.  Always
     * deactivates the component.  In addition, if the component is focusable,
     * updates its state and styling to indicate that it no longer has keyboard
     * focus.  Considered protected; should only be used within this package and
     * by subclasses.  <b>Warning:</b> IE dispatches focus and blur events
     * asynchronously!
     * @param e Blur event to handle.
     */
    handleBlur(e: Event | null): void;
    /**
     * Attempts to handle a keyboard event, if the component is enabled and visible,
     * by calling {@link handleKeyEventInternal}.  Considered protected; should only
     * be used within this package and by subclasses.
     * @param e Key event to handle.
     * @return Whether the key event was handled.
     */
    handleKeyEvent(e: KeyEvent | null): boolean;
    /**
     * Attempts to handle a keyboard event; returns true if the event was handled,
     * false otherwise.  Considered protected; should only be used within this
     * package and by subclasses.
     * @param e Key event to handle.
     * @return Whether the key event was handled.
     */
    protected handleKeyEventInternal(e: KeyEvent | null): boolean;
}
export declare namespace Control {
    /**
     * A singleton that helps Control instances play well with screen
     * readers.  It necessitated by shortcomings in IE, and need not be
     * instantiated in any other browser.
     *
     * In most cases, a click on a Control results in a sequence of events:
     * MOUSEDOWN, MOUSEUP and CLICK.  UI controls rely on this sequence since most
     * behavior is trigged by MOUSEDOWN and MOUSEUP.  But when IE is used with some
     * traditional screen readers (JAWS, NVDA and perhaps others), IE only sends
     * the CLICK event, resulting in the control being unresponsive.  This class
     * monitors the sequence of these events, and if it detects a CLICK event not
     * not preceded by a MOUSEUP event, directly calls the control's event handlers
     * for MOUSEDOWN, then MOUSEUP.  While the resulting sequence is different from
     * the norm (the CLICK comes first instead of last), testing thus far shows
     * the resulting behavior to be correct.
     *
     * See http://goo.gl/qvQR4C for more details.
     */
    class IeMouseEventSequenceSimulator_ extends Disposable {
        /**
         * A singleton that helps Control instances play well with screen
         * readers.  It necessitated by shortcomings in IE, and need not be
         * instantiated in any other browser.
         *
         * In most cases, a click on a Control results in a sequence of events:
         * MOUSEDOWN, MOUSEUP and CLICK.  UI controls rely on this sequence since most
         * behavior is trigged by MOUSEDOWN and MOUSEUP.  But when IE is used with some
         * traditional screen readers (JAWS, NVDA and perhaps others), IE only sends
         * the CLICK event, resulting in the control being unresponsive.  This class
         * monitors the sequence of these events, and if it detects a CLICK event not
         * not preceded by a MOUSEUP event, directly calls the control's event handlers
         * for MOUSEDOWN, then MOUSEUP.  While the resulting sequence is different from
         * the norm (the CLICK comes first instead of last), testing thus far shows
         * the resulting behavior to be correct.
         *
         * See http://goo.gl/qvQR4C for more details.
         */
        constructor(control: Control);
        private noStructuralTyping_closure_goog_ui_control_IeMouseEventSequenceSimulator_;
        disposeInternal(): void;
    }
}

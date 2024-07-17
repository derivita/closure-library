import { Role } from '../a11y/aria/roles.js';
import { Component } from './component.js';
import { ControlContent } from './controlcontent.js';
import type { Control } from './control.js';
/**
 * Default renderer for {@link goog.ui.Control}s.  Can be used as-is, but
 * subclasses of Control will probably want to use renderers specifically
 * tailored for them by extending this class.  Controls that use renderers
 * delegate one or more of the following API methods to the renderer:
 * <ul>
 * <li>`createDom` - renders the DOM for the component
 * <li>`canDecorate` - determines whether an element can be decorated
 * by the component
 * <li>`decorate` - decorates an existing element with the component
 * <li>`setState` - updates the appearance of the component based on
 * its state
 * <li>`getContent` - returns the component's content
 * <li>`setContent` - sets the component's content
 * </ul>
 * Controls are stateful; renderers, on the other hand, should be stateless and
 * reusable.
 */
export declare class ControlRenderer {
    /**
     * Default renderer for {@link goog.ui.Control}s.  Can be used as-is, but
     * subclasses of Control will probably want to use renderers specifically
     * tailored for them by extending this class.  Controls that use renderers
     * delegate one or more of the following API methods to the renderer:
     * <ul>
     * <li>`createDom` - renders the DOM for the component
     * <li>`canDecorate` - determines whether an element can be decorated
     * by the component
     * <li>`decorate` - decorates an existing element with the component
     * <li>`setState` - updates the appearance of the component based on
     * its state
     * <li>`getContent` - returns the component's content
     * <li>`setContent` - sets the component's content
     * </ul>
     * Controls are stateful; renderers, on the other hand, should be stateless and
     * reusable.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_controlrenderer_ControlRenderer;
    /**
     * Constructs a new renderer and sets the CSS class that the renderer will use
     * as the base CSS class to apply to all elements rendered by that renderer.
     * An example to use this function using a color palette:
     *
     * <pre>
     * var myCustomRenderer = ControlRenderer.getCustomRenderer(
     * goog.ui.PaletteRenderer, 'my-special-palette');
     * var newColorPalette = new goog.ui.ColorPalette(
     * colors, myCustomRenderer, opt_domHelper);
     * </pre>
     *
     * Your CSS can look like this now:
     * <pre>
     * .my-special-palette { }
     * .my-special-palette-table { }
     * .my-special-palette-cell { }
     * etc.
     * </pre>
     *
     * <em>instead</em> of
     * <pre>
     * .CSS_MY_SPECIAL_PALETTE .goog-palette { }
     * .CSS_MY_SPECIAL_PALETTE .goog-palette-table { }
     * .CSS_MY_SPECIAL_PALETTE .goog-palette-cell { }
     * etc.
     * </pre>
     *
     * You would want to use this functionality when you want an instance of a
     * component to have specific styles different than the other components of the
     * same type in your application.  This avoids using descendant selectors to
     * apply the specific styles to this component.
     * @param ctor The constructor of the renderer you are trying to create.
     * @param cssClassName The name of the CSS class for this renderer.
     * @return An instance of the desired renderer with its getCssClass() method overridden to return the supplied custom CSS class name.
     */
    static getCustomRenderer(ctor: Function | null, cssClassName: string): ControlRenderer | null;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Array of arrays of CSS classes that we want composite classes added and
     * removed for in IE6 and lower as a workaround for lack of multi-class CSS
     * selector support.
     *
     * Subclasses that have accompanying CSS requiring this workaround should define
     * their own static IE6_CLASS_COMBINATIONS constant and override
     * getIe6ClassCombinations to return it.
     *
     * For example, if your stylesheet uses the selector .button.collapse-left
     * (and is compiled to .button_collapse-left for the IE6 version of the
     * stylesheet,) you should include ['button', 'collapse-left'] in this array
     * and the class button_collapse-left will be applied to the root element
     * whenever both button and collapse-left are applied individually.
     *
     * Members of each class name combination will be joined with underscores in the
     * order that they're defined in the array. You should alphabetize them (for
     * compatibility with the CSS compiler) unless you are doing something special.
     */
    static IE6_CLASS_COMBINATIONS: (string[] | null)[] | null;
    /**
     * Returns the ARIA role to be applied to the control.
     * See http://wiki/Main/ARIA for more info.
     * @return ARIA role.
     */
    getAriaRole(): Role | undefined | null;
    /**
     * Returns the control's contents wrapped in a DIV, with the renderer's own
     * CSS class and additional state-specific classes applied to it.
     * @param control Control to render.
     * @return Root element for the control.
     */
    createDom(control: Control | null): Element | null;
    /**
     * Takes the control's root element and returns the parent element of the
     * control's contents.  Since by default controls are rendered as a single
     * DIV, the default implementation returns the element itself.  Subclasses
     * with more complex DOM structures must override this method as needed.
     * @param element Root element of the control whose content element is to be returned.
     * @return The control's content element.
     */
    getContentElement(element: Element | null): Element | null;
    /**
     * Updates the control's DOM by adding or removing the specified class name
     * to/from its root element. May add additional combined classes as needed in
     * IE6 and lower. Because of this, subclasses should use this method when
     * modifying class names on the control's root element.
     * @param control Control instance (or root element) to be updated.
     * @param className CSS class name to add or remove.
     * @param enable Whether to add or remove the class name.
     */
    enableClassName(control: Control | Element | null, className: string, enable: boolean): void;
    /**
     * Updates the control's DOM by adding or removing the specified extra class
     * name to/from its element.
     * @param control Control to be updated.
     * @param className CSS class name to add or remove.
     * @param enable Whether to add or remove the class name.
     */
    enableExtraClassName(control: Control | null, className: string, enable: boolean): void;
    /**
     * Returns true if this renderer can decorate the element, false otherwise.
     * The default implementation always returns true.
     * @param element Element to decorate.
     * @return Whether the renderer can decorate the element.
     */
    canDecorate(element: Element | null): boolean;
    /**
     * Default implementation of `decorate` for {@link Control}s.
     * Initializes the control's ID, content, and state based on the ID of the
     * element, its child nodes, and its CSS classes, respectively.  Returns the
     * element.
     * @param control Control instance to decorate the element.
     * @param element Element to decorate.
     * @return Decorated element.
     */
    decorate(control: Control | null, element: Element | null): Element | null;
    /**
     * Initializes the control's DOM by configuring properties that can only be set
     * after the DOM has entered the document.  This implementation sets up BiDi
     * and keyboard focus.  Called from {@link Control#enterDocument}.
     * @param control Control whose DOM is to be initialized as it enters the document.
     */
    initializeDom(control: Control | null): void;
    /**
     * Sets the element's ARIA role.
     * @param element Element to update.
     * @param opt_preferredRole The preferred ARIA role.
     */
    setAriaRole(element: Element | null, opt_preferredRole?: Role | null): void;
    /**
     * Sets the element's ARIA attributes, including distinguishing between
     * universally supported ARIA properties and ARIA states that are only
     * supported by certain ARIA roles. Only attributes which are initialized to be
     * true will be set.
     * @param control Control whose ARIA state will be updated.
     * @param element Element whose ARIA state is to be updated.
     */
    setAriaStates(control: Control, element: Element): void;
    /**
     * Sets the element's ARIA label. This should be overriden by subclasses that
     * don't apply the role directly on control.element_.
     * @param element Element whose ARIA label is to be updated.
     * @param ariaLabel Label to add to the element.
     */
    setAriaLabel(element: Element, ariaLabel: string): void;
    /**
     * Allows or disallows text selection within the control's DOM.
     * @param element The control's root element.
     * @param allow Whether the element should allow text selection.
     */
    setAllowTextSelection(element: Element | null, allow: boolean): void;
    /**
     * Applies special styling to/from the control's element if it is rendered
     * right-to-left, and removes it if it is rendered left-to-right.
     * @param element The control's root element.
     * @param rightToLeft Whether the component is rendered right-to-left.
     */
    setRightToLeft(element: Element | null, rightToLeft: boolean): void;
    /**
     * Returns true if the control's key event target supports keyboard focus
     * (based on its `tabIndex` attribute), false otherwise.
     * @param control Control whose key event target is to be checked.
     * @return Whether the control's key event target is focusable.
     */
    isFocusable(control: Control | null): boolean;
    /**
     * Updates the control's key event target to make it focusable or non-focusable
     * via its `tabIndex` attribute.  Does nothing if the control doesn't
     * support the `FOCUSED` state, or if it has no key event target.
     * @param control Control whose key event target is to be updated.
     * @param focusable Whether to enable keyboard focus support on the control's key event target.
     */
    setFocusable(control: Control | null, focusable: boolean): void;
    /**
     * Shows or hides the element.
     * @param element Element to update.
     * @param visible Whether to show the element.
     */
    setVisible(element: Element | null, visible: boolean): void;
    /**
     * Updates the appearance of the control in response to a state change.
     * @param control Control instance to update.
     * @param state State to enable or disable.
     * @param enable Whether the control is entering or exiting the state.
     */
    setState(control: Control | null, state: Component.State | null, enable: boolean): void;
    /**
     * Updates the element's ARIA (accessibility) attributes , including
     * distinguishing between universally supported ARIA properties and ARIA states
     * that are only supported by certain ARIA roles.
     * @param element Element whose ARIA state is to be updated.
     * @param state Component state being enabled or disabled.
     * @param enable Whether the state is being enabled or disabled.
     */
    protected updateAriaState(element: Element | null, state: Component.State | null, enable: boolean): void;
    /**
     * Takes a control's root element, and sets its content to the given text
     * caption or DOM structure.  The default implementation replaces the children
     * of the given element.  Renderers that create more complex DOM structures
     * must override this method accordingly.
     * @param element The control's root element.
     * @param content Text caption or DOM structure to be set as the control's content. The DOM nodes will not be cloned, they will only moved under the content element of the control.
     */
    setContent(element: Element | null, content: ControlContent | null): void;
    /**
     * Returns the element within the component's DOM that should receive keyboard
     * focus (null if none).  The default implementation returns the control's root
     * element.
     * @param control Control whose key event target is to be returned.
     * @return The key event target.
     */
    getKeyEventTarget(control: Control | null): Element | null;
    /**
     * Returns the CSS class name to be applied to the root element of all
     * components rendered or decorated using this renderer.  The class name
     * is expected to uniquely identify the renderer class, i.e. no two
     * renderer classes are expected to share the same CSS class name.
     * @return Renderer-specific CSS class name.
     */
    getCssClass(): string;
    /**
     * Returns an array of combinations of classes to apply combined class names for
     * in IE6 and below. See {@link IE6_CLASS_COMBINATIONS} for more detail. This
     * method doesn't reference {@link IE6_CLASS_COMBINATIONS} so that it can be
     * compiled out, but subclasses should return their IE6_CLASS_COMBINATIONS
     * static constant instead.
     * @return Array of class name combinations.
     */
    getIe6ClassCombinations(): (string[] | null)[];
    /**
     * Returns the name of a DOM structure-specific CSS class to be applied to the
     * root element of all components rendered or decorated using this renderer.
     * Unlike the class name returned by {@link #getCssClass}, the structural class
     * name may be shared among different renderers that generate similar DOM
     * structures.  The structural class name also serves as the basis of derived
     * class names used to identify and style structural elements of the control's
     * DOM, as well as the basis for state-specific class names.  The default
     * implementation returns the same class name as {@link #getCssClass}, but
     * subclasses are expected to override this method as needed.
     * @return DOM structure-specific CSS class name (same as the renderer- specific CSS class name by default).
     */
    getStructuralCssClass(): string;
    /**
     * Returns all CSS class names applicable to the given control, based on its
     * state.  The return value is an array of strings containing
     * <ol>
     * <li>the renderer-specific CSS class returned by {@link #getCssClass},
     * followed by
     * <li>the structural CSS class returned by {@link getStructuralCssClass} (if
     * different from the renderer-specific CSS class), followed by
     * <li>any state-specific classes returned by {@link #getClassNamesForState},
     * followed by
     * <li>any extra classes returned by the control's `getExtraClassNames`
     * method and
     * <li>for IE6 and lower, additional combined classes from
     * {@link getAppliedCombinedClassNames_}.
     * </ol>
     * Since all controls have at least one renderer-specific CSS class name, this
     * method is guaranteed to return an array of at least one element.
     * @param control Control whose CSS classes are to be returned.
     * @return Array of CSS class names applicable to the control.
     */
    protected getClassNames(control: Control | null): string[];
    /**
     * Takes a bit mask of {@link Component.State}s, and returns an array
     * of the appropriate class names representing the given state, suitable to be
     * applied to the root element of a component rendered using this renderer, or
     * null if no state-specific classes need to be applied.  This default
     * implementation uses the renderer's {@link getClassForState} method to
     * generate each state-specific class.
     * @param state Bit mask of component states.
     * @return Array of CSS class names representing the given state.
     */
    protected getClassNamesForState(state: number): string[];
    /**
     * Takes a single {@link Component.State}, and returns the
     * corresponding CSS class name (null if none).
     * @param state Component state.
     * @return CSS class representing the given state (undefined if none).
     */
    protected getClassForState(state: Component.State | null): string | undefined;
    /**
     * Takes a single CSS class name which may represent a component state, and
     * returns the corresponding component state (0x00 if none).
     * @param className CSS class name, possibly representing a component state.
     * @return state Component state corresponding to the given CSS class (0x00 if none).
     */
    protected getStateFromClass(className: string): Component.State | null;
}

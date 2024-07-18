import { Role } from '../a11y/aria/roles.js';
import { Component } from './component.js';
import { ControlRenderer } from './controlrenderer.js';
import type { Button } from './button.js';
/**
 * Default renderer for {@link goog.ui.Button}s.  Extends the superclass with
 * the following button-specific API methods:
 * <ul>
 * <li>`getValue` - returns the button element's value
 * <li>`setValue` - updates the button element to reflect its new value
 * <li>`getTooltip` - returns the button element's tooltip text
 * <li>`setTooltip` - updates the button element's tooltip text
 * <li>`setCollapsed` - removes one or both of the button element's
 * borders
 * </ul>
 * For alternate renderers, see {@link goog.ui.NativeButtonRenderer},
 * {@link goog.ui.CustomButtonRenderer}, and {@link goog.ui.FlatButtonRenderer}.
 */
export declare class ButtonRenderer extends ControlRenderer {
    /**
     * Default renderer for {@link goog.ui.Button}s.  Extends the superclass with
     * the following button-specific API methods:
     * <ul>
     * <li>`getValue` - returns the button element's value
     * <li>`setValue` - updates the button element to reflect its new value
     * <li>`getTooltip` - returns the button element's tooltip text
     * <li>`setTooltip` - updates the button element's tooltip text
     * <li>`setCollapsed` - removes one or both of the button element's
     * borders
     * </ul>
     * For alternate renderers, see {@link goog.ui.NativeButtonRenderer},
     * {@link goog.ui.CustomButtonRenderer}, and {@link goog.ui.FlatButtonRenderer}.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_buttonrenderer_ButtonRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Returns the ARIA role to be applied to buttons.
     * @return ARIA role.
     */
    getAriaRole(): Role | undefined | null;
    /**
     * Updates the button's ARIA (accessibility) state if the button is being
     * treated as a checkbox. Also makes sure that attributes which aren't
     * supported by buttons aren't being added.
     * @param element Element whose ARIA state is to be updated.
     * @param state Component state being enabled or disabled.
     * @param enable Whether the state is being enabled or disabled.
     */
    updateAriaState(element: Element | null, state: Component.State | null, enable: boolean): void;
    createDom(button: any): Element;
    decorate(button: any, element: any): Element;
    /**
     * Takes a button's root element, and returns the value associated with it.
     * No-op in the base class.
     * @param element The button's root element.
     * @return The button's value (undefined if none).
     */
    getValue(element: Element | null): string | undefined;
    /**
     * Takes a button's root element and a value, and updates the element to reflect
     * the new value.  No-op in the base class.
     * @param element The button's root element.
     * @param value New value.
     */
    setValue(element: Element | null, value: string): void;
    /**
     * Takes a button's root element, and returns its tooltip text.
     * @param element The button's root element.
     * @return The tooltip text.
     */
    getTooltip(element: Element | null): string | undefined;
    /**
     * Takes a button's root element and a tooltip string, and updates the element
     * with the new tooltip.
     * @param element The button's root element.
     * @param tooltip New tooltip text.
     */
    protected setTooltip(element: Element | null, tooltip: string): void;
    /**
     * Collapses the border on one or both sides of the button, allowing it to be
     * combined with the adjacent button(s), forming a single UI componenet with
     * multiple targets.
     * @param button Button to update.
     * @param sides Bitmap of one or more {@link ButtonSide}s for which borders should be collapsed.
     */
    protected setCollapsed(button: Button | null, sides: number): void;
    getCssClass(): string;
}

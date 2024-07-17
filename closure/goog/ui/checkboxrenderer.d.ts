import { Role } from '../a11y/aria/roles.js';
import { ControlRenderer } from './controlrenderer.js';
import { Checkbox } from './checkbox.js';
/**
 * Default renderer for {@link Checkbox}s.  Extends the superclass
 * to support checkbox states:
 */
export declare class CheckboxRenderer extends ControlRenderer {
    /**
     * Default renderer for {@link Checkbox}s.  Extends the superclass
     * to support checkbox states:
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_checkboxrenderer_CheckboxRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    createDom(checkbox: any): Element;
    decorate(checkbox: any, element: any): Element;
    /**
     * Returns the ARIA role to be applied to checkboxes.
     * @return ARIA role.
     */
    getAriaRole(): Role | null;
    /**
     * Updates the appearance of the control in response to a checkbox state
     * change.
     * @param element Checkbox element.
     * @param state Updated checkbox state.
     */
    setCheckboxState(element: Element | null, state: Checkbox.State | null): void;
    getCssClass(): string;
    /**
     * Takes a single {@link Checkbox.State}, and returns the
     * corresponding CSS class name.
     * @param state Checkbox state.
     * @return CSS class representing the given state.
     */
    protected getClassForCheckboxState(state: Checkbox.State | null): string;
}

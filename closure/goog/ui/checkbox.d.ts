import { CheckboxRenderer } from './checkboxrenderer.js';
import { Control } from './control.js';
import type { DomHelper } from '../dom/dom.js';
/**
 * 3-state checkbox widget. Fires CHECK or UNCHECK events before toggled and
 * CHANGE event after toggled by user.
 * The checkbox can also be enabled/disabled and get focused and highlighted.
 */
export declare class Checkbox extends Control {
    /**
     * 3-state checkbox widget. Fires CHECK or UNCHECK events before toggled and
     * CHANGE event after toggled by user.
     * The checkbox can also be enabled/disabled and get focused and highlighted.
     * @param opt_checked Checked state to set.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     * @param opt_renderer Renderer used to render or decorate the checkbox; defaults to {@link CheckboxRenderer}.
     */
    constructor(opt_checked?: Checkbox.State | null, opt_domHelper?: DomHelper | null, opt_renderer?: CheckboxRenderer | null);
    private noStructuralTyping_closure_goog_ui_checkbox_Checkbox;
    getChecked(): Checkbox.State | null;
    isChecked(): boolean;
    isUnchecked(): boolean;
    isUndetermined(): boolean;
    /**
     * Sets the checked state of the checkbox.
     * @param checked The checked state to set.
     */
    setChecked(checked: boolean | null): void;
    /**
     * Sets the checked state for the checkbox.  Unlike {@link #setChecked},
     * doesn't update the checkbox's DOM.  Considered protected; to be called
     * only by renderer code during element decoration.
     * @param checked New checkbox state.
     */
    setCheckedInternal(checked: Checkbox.State | null): void;
    /**
     * Binds an HTML element to the checkbox which if clicked toggles the checkbox.
     * Behaves the same way as the 'label' HTML tag. The label element has to be the
     * direct or non-direct ancestor of the checkbox element because it will get the
     * focus when keyboard support is implemented.
     * Note: Control#enterDocument also sets aria-label on the element but
     * Checkbox#enterDocument sets aria-labeledby on the same element which
     * overrides the aria-label in all modern screen readers.
     * @param label The label control to set. If null, only the checkbox reacts to clicks.
     */
    setLabel(label: Element | null): void;
    /**
     * Toggles the checkbox. State transitions:
     * <ul>
     * <li>unchecked -> checked
     * <li>undetermined -> checked
     * <li>checked -> unchecked
     * </ul>
     */
    toggle(): void;
    enterDocument(): void;
    handleKeyEventInternal(e: any): boolean;
}
export declare namespace Checkbox {
    /**
     * Possible checkbox states.
     */
    type State = boolean | null;
    const State: {
        CHECKED: boolean;
        UNCHECKED: boolean;
        UNDETERMINED: any;
    };
}

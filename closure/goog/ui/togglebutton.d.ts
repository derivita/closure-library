import { Button } from './button.js';
import type { DomHelper } from '../dom/dom.js';
import type { ButtonRenderer } from './buttonrenderer.js';
import type { ControlContent } from './controlcontent.js';
/**
 * A toggle button, with checkbox-like semantics.  Rendered using
 * {@link CustomButtonRenderer} by default, though any
 * {@link ButtonRenderer} would work.
 */
export declare class ToggleButton extends Button {
    /**
     * A toggle button, with checkbox-like semantics.  Rendered using
     * {@link CustomButtonRenderer} by default, though any
     * {@link ButtonRenderer} would work.
     * @param content Text caption or existing DOM structure to display as the button's caption.
     * @param opt_renderer Renderer used to render or decorate the button; defaults to {@link CustomButtonRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(content: ControlContent | null, opt_renderer?: ButtonRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_togglebutton_ToggleButton;
}

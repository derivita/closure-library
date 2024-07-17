import { Button } from './button.js';
import type { DomHelper } from '../dom/dom.js';
import type { ButtonRenderer } from './buttonrenderer.js';
import type { ControlContent } from './controlcontent.js';
/**
 * A custom button control.  Identical to {@link Button}, except it
 * defaults its renderer to {@link CustomButtonRenderer}.  One could
 * just as easily pass `CustomButtonRenderer.getInstance()` to
 * the {@link Button} constructor and get the same result.  Provided
 * for convenience.
 */
export declare class CustomButton extends Button {
    /**
     * A custom button control.  Identical to {@link Button}, except it
     * defaults its renderer to {@link CustomButtonRenderer}.  One could
     * just as easily pass `CustomButtonRenderer.getInstance()` to
     * the {@link Button} constructor and get the same result.  Provided
     * for convenience.
     * @param content Text caption or existing DOM structure to display as the button's caption.
     * @param opt_renderer Optional renderer used to render or decorate the button; defaults to {@link CustomButtonRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(content: ControlContent | null, opt_renderer?: ButtonRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_custombutton_CustomButton;
}

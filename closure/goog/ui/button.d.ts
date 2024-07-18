import { ButtonRenderer } from './buttonrenderer.js';
import { ButtonSide } from './buttonside.js';
import { Control } from './control.js';
import type { DomHelper } from '../dom/dom.js';
import type { KeyEvent } from '../events/keyevent.js';
import type { ControlContent } from './controlcontent.js';
/**
 * A button control, rendered as a native browser button by default.
 */
export declare class Button extends Control {
    /**
     * A button control, rendered as a native browser button by default.
     * @param opt_content Text caption or existing DOM structure to display as the button's caption (if any).
     * @param opt_renderer Renderer used to render or decorate the button; defaults to {@link NativeButtonRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(opt_content?: ControlContent | null, opt_renderer?: ButtonRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_button_Button;
    /**
     * Returns the value associated with the button.
     * @return Button value (undefined if none).
     */
    getValue(): any;
    /**
     * Sets the value associated with the button, and updates its DOM.
     * @param value New button value.
     */
    setValue(value: any): void;
    /**
     * Sets the value associated with the button.  Unlike {@link #setValue},
     * doesn't update the button's DOM.  Considered protected; to be called only
     * by renderer code during element decoration.
     * @param value New button value.
     */
    protected setValueInternal(value: any): void;
    /**
     * Returns the tooltip for the button.
     * @return Tooltip text (undefined if none).
     */
    getTooltip(): string | undefined;
    /**
     * Sets the tooltip for the button, and updates its DOM.
     * @param tooltip New tooltip text.
     */
    setTooltip(tooltip: string): void;
    /**
     * Sets the tooltip for the button.  Unlike {@link #setTooltip}, doesn't update
     * the button's DOM.  Considered protected; to be called only by renderer code
     * during element decoration.
     * @param tooltip New tooltip text.
     */
    protected setTooltipInternal(tooltip: string): void;
    /**
     * Collapses the border on one or both sides of the button, allowing it to be
     * combined with the adjancent button(s), forming a single UI componenet with
     * multiple targets.
     * @param sides Bitmap of one or more {@link ButtonSide}s for which borders should be collapsed.
     */
    setCollapsed(sides: number): void;
    disposeInternal(): void;
    enterDocument(): void;
    /**
     * Attempts to handle a keyboard event; returns true if the event was handled,
     * false otherwise.  If the button is enabled and the Enter/Space key was
     * pressed, handles the event by dispatching an `ACTION` event,
     * and returns true. Overrides {@link Control#handleKeyEventInternal}.
     * @param e Key event to handle.
     * @return Whether the key event was handled.
     */
    handleKeyEventInternal(e: KeyEvent | null): boolean;
}
export declare namespace Button {
    /**
     * Constants for button sides, see {@link Button.prototype.setCollapsed}
     * for details. Aliased from ButtonSide to support legacy users without
     * creating a circular dependency in {@link ButtonRenderer}.
     */
    type Side = number;
    const Side: typeof ButtonSide;
}

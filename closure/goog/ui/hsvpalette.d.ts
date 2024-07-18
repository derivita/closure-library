import * as events from '../events/events.js';
import { Component } from './component.js';
import type { DomHelper } from '../dom/dom.js';
import type { BrowserEvent } from '../events/browserevent.js';
import type { Event } from '../events/event.js';
/**
 * Creates an HSV palette. Allows a user to select the hue, saturation and
 * value/brightness.
 */
export declare class HsvPalette extends Component {
    /**
     * Creates an HSV palette. Allows a user to select the hue, saturation and
     * value/brightness.
     * @param opt_domHelper Optional DOM helper.
     * @param opt_color Optional initial color (default is red).
     * @param opt_class Optional base for creating classnames (default is goog.getCssName('goog-hsv-palette')).
     */
    constructor(opt_domHelper?: DomHelper | null, opt_color?: string, opt_class?: string);
    private noStructuralTyping_closure_goog_ui_hsvpalette_HsvPalette;
    /**
     * The base class name for the component.
     */
    protected className: string;
    /**
     * DOM element representing the value background image.
     */
    protected valueBackgroundImageElement: HTMLElement | null;
    /**
     * DOM element representing the current color swatch.
     */
    protected swatchElement: Element | null;
    /**
     * DOM element representing the hex color input text field.
     */
    protected inputElement: Element | null;
    /**
     * Listener key for the mousemove event (during a drag operation).
     */
    protected mouseMoveListener: events.Key | null;
    /**
     * Listener key for the mouseup event (during a drag operation).
     */
    protected mouseUpListener: events.Key | null;
    /**
     * Hex representation of the color.
     */
    protected color: string;
    /**
     * Gets the color that is currently selected in this color picker.
     * @return The string of the selected color.
     */
    getColor(): string;
    /**
     * Alpha transparency of the currently selected color, in [0, 1].
     * For the HSV palette this always returns 1. The HSVA palette overrides
     * this method.
     * @return The current alpha value.
     */
    getAlpha(): number;
    /**
     * Updates the text entry field.
     */
    protected updateInput(): void;
    /**
     * Sets which color is selected and update the UI.
     * @param color The selected color.
     * @param opt_disableDispatchEvent (optional) Whether the event should not be fired.
     */
    setColor(color: string, opt_disableDispatchEvent?: boolean): void;
    /**
     * Sets which color is selected.
     * @param color The selected color.
     */
    protected setColorInternal(color: string): void;
    /**
     * Alters the hue, saturation, and/or value of the currently selected color and
     * updates the UI.
     * @param opt_hue (optional) hue in [0, 1].
     * @param opt_saturation (optional) saturation in [0, 1].
     * @param opt_value (optional) value in [0, 255].
     */
    setHsv(opt_hue?: number | null, opt_saturation?: number | null, opt_value?: number | null): void;
    /**
     * HsvPalettes cannot be used to decorate pre-existing html, since the
     * structure they build is fairly complicated.
     * @param element Element to decorate.
     * @return Returns always false.
     */
    canDecorate(element: Element | null): boolean;
    createDom(): void;
    /**
     * Renders the color picker inside the provided element. This will override the
     * current content of the element.
     */
    enterDocument(): void;
    disposeInternal(): void;
    /**
     * Updates the position, opacity, and styles for the UI representation of the
     * palette.
     */
    protected updateUi(): void;
    /**
     * Handles mousedown events on palette UI elements.
     * @param e Event object.
     */
    protected handleMouseDown(e: BrowserEvent | null): void;
    /**
     * Handles mouseup events on the document, which ends a drag operation.
     * @param e Event object.
     */
    protected handleMouseUp(e: Event | null): void;
    /**
     * Handles input events on the hex value input field.
     * @param e Event object.
     */
    protected handleInput(e: Event | null): void;
}

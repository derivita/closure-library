import { Corner } from '../positioning/positioning.js';
import { ColorPicker } from './colorpicker.js';
import { Component } from './component.js';
import type { DomHelper } from '../dom/dom.js';
import type { PopupBase } from './popupbase.js';
/**
 * Popup color picker widget.
 */
export declare class PopupColorPicker extends Component {
    /**
     * Popup color picker widget.
     * @param opt_domHelper Optional DOM helper.
     * @param opt_colorPicker Optional color picker to use for this popup.
     */
    constructor(opt_domHelper?: DomHelper | null, opt_colorPicker?: ColorPicker | null);
    private noStructuralTyping_closure_goog_ui_popupcolorpicker_PopupColorPicker;
    createDom(): void;
    disposeInternal(): void;
    /**
     * ColorPickers cannot be used to decorate pre-existing html, since the
     * structure they build is fairly complicated.
     * @param element Element to decorate.
     * @return Returns always false.
     */
    canDecorate(element: Element | null): boolean;
    getColorPicker(): ColorPicker | null;
    /**
     * Returns whether the Popup dismisses itself when the user clicks outside of
     * it.
     * @return Whether the Popup autohides on an external click.
     */
    getAutoHide(): boolean;
    /**
     * Sets whether the Popup dismisses itself when the user clicks outside of it -
     * must be called after the Popup has been created (in createDom()),
     * otherwise it does nothing.
     * @param autoHide Whether to autohide on an external click.
     */
    setAutoHide(autoHide: boolean): void;
    /**
     * Returns the region inside which the Popup dismisses itself when the user
     * clicks, or null if it was not set. Null indicates the entire document is
     * the autohide region.
     * @return The DOM element for autohide, or null if it hasn't been set.
     */
    getAutoHideRegion(): Element | null;
    /**
     * Sets the region inside which the Popup dismisses itself when the user
     * clicks - must be called after the Popup has been created (in createDom()),
     * otherwise it does nothing.
     * @param element The DOM element for autohide.
     */
    setAutoHideRegion(element: Element | null): void;
    /**
     * Returns the {@link PopupBase} from this picker. Returns null if the
     * popup has not yet been created.
     *
     * NOTE: This should *ONLY* be called from tests. If called before createDom(),
     * this should return null.
     * @return The popup or null if it hasn't been created.
     */
    getPopup(): PopupBase | null;
    getLastTarget(): Element | null;
    /**
     * Attaches the popup color picker to an element.
     * @param element The element to attach to.
     */
    attach(element: Element | null): void;
    /**
     * Detatches the popup color picker from an element.
     * @param element The element to detach from.
     */
    detach(element: Element | null): void;
    /**
     * Gets the color that is currently selected in this color picker.
     * @return The hex string of the color selected, or null if no color is selected.
     */
    getSelectedColor(): string | null;
    /**
     * Sets whether the color picker can accept focus.
     * @param focusable True iff the color picker can accept focus.
     */
    setFocusable(focusable: boolean): void;
    /**
     * Sets whether the color picker can automatically move focus to its key event
     * target when it is set to visible.
     * @param allow Whether to allow auto focus.
     */
    setAllowAutoFocus(allow: boolean): void;
    getAllowAutoFocus(): boolean;
    /**
     * Sets whether the color picker should toggle off if it is already open.
     * @param toggle The new toggle mode.
     */
    setToggleMode(toggle: boolean): void;
    /**
     * Gets whether the colorpicker is in toggle mode
     * @return toggle.
     */
    getToggleMode(): boolean;
    /**
     * Sets whether the picker remembers the last selected color between popups.
     * @param remember Whether to remember the selection.
     */
    setRememberSelection(remember: boolean): void;
    getRememberSelection(): boolean;
    /**
     * Add an array of colors to the colors displayed by the color picker.
     * Does not add duplicated colors.
     * @param colors The array of colors to be added.
     */
    addColors(colors: string[] | null): void;
    /**
     * Clear the colors displayed by the color picker.
     */
    clearColors(): void;
    /**
     * Set the pinned corner of the popup.
     * @param corner The corner of the popup which is pinned to the attaching element.
     */
    setPinnedCorner(corner: Corner | null): void;
    /**
     * Sets which corner of the attaching element this popup shows up.
     * @param corner The corner of the attaching element where to show the popup.
     */
    setPopupCorner(corner: Corner | null): void;
    /**
     * Sets whether the popup shows up on hover. By default, appears on click.
     * @param showOnHover True if popup should appear on hover.
     */
    setShowOnHover(showOnHover: boolean): void;
}

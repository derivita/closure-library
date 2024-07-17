import * as dom from '../dom/dom.js';
import { Component } from './component.js';
/**
 * A UI Control used for rating things, i.e. videos on Google Video.
 */
export declare class Ratings extends Component {
    /**
     * A UI Control used for rating things, i.e. videos on Google Video.
     * @param opt_ratings Ratings. Default: [1,2,3,4,5].
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(opt_ratings?: string[] | null, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_ratings_Ratings;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Decorate a HTML structure already in the document.  Expects the structure:
     * <pre>
     * - div
     * - select
     * - option 1 #text = 1 star
     * - option 2 #text = 2 stars
     * - option 3 #text = 3 stars
     * - option N (where N is max number of ratings)
     * </pre>
     *
     * The div can contain other elements for graceful degredation, but they will be
     * hidden when the decoration occurs.
     * @param el Div element to decorate.
     */
    decorateInternal(el: Element | null): void;
    /**
     * Render the rating widget inside the provided element. This will override the
     * current content of the element.
     */
    enterDocument(): void;
    /**
     * Should be called when the widget is removed from the document but may be
     * reused.  This removes all the listeners the widget has attached and destroys
     * the DOM nodes it uses.
     */
    exitDocument(): void;
    disposeInternal(): void;
    /**
     * Returns the base CSS class used by subcomponents of this component.
     * @return Component-specific CSS class.
     */
    getCssClass(): string;
    /**
     * Sets the selected index. If the provided index is greater than the number of
     * ratings then the max is set.  0 is the first item, -1 is no selection.
     * @param index The index of the rating to select.
     */
    setSelectedIndex(index: number): void;
    getSelectedIndex(): number;
    /**
     * Returns the rating value of the currently selected rating
     * @return The value of the currently selected rating (or null).
     */
    getValue(): string | null;
    /**
     * Returns the index of the currently highlighted rating, -1 if the mouse isn't
     * currently over the widget
     * @return The index of the currently highlighted rating.
     */
    getHighlightedIndex(): number;
    /**
     * Returns the value of the currently highlighted rating, null if the mouse
     * isn't currently over the widget
     * @return The value of the currently highlighted rating, or null.
     */
    getHighlightedValue(): string | null;
    /**
     * Sets the array of ratings that the comonent
     * @param ratings Array of value to use as ratings.
     */
    setRatings(ratings: string[] | null): void;
    /**
     * Gets the array of ratings that the component
     * @return Array of ratings.
     */
    getRatings(): string[] | null;
    /**
     * Attaches an input or select element to the ratings widget. The value or
     * index of the field will be updated along with the ratings widget.
     * @param field The field to attach to.
     */
    setAttachedFormField(field: HTMLSelectElement | HTMLInputElement | null): void;
    /**
     * Returns the attached input or select element to the ratings widget.
     * @return The attached form field.
     */
    getAttachedFormField(): HTMLSelectElement | HTMLInputElement | null | null;
    /**
     * Enables or disables the ratings control.
     * @param enable Whether to enable or disable the control.
     */
    setEnabled(enable: boolean): void;
    isEnabled(): boolean;
}
export declare namespace Ratings {
    /**
     * Enums for Ratings event type.
     */
    enum EventType {
        CHANGE = "change",
        HIGHLIGHT_CHANGE = "highlightchange",
        HIGHLIGHT = "highlight",
        UNHIGHLIGHT = "unhighlight"
    }
}

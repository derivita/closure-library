import { EventTarget } from '../../events/eventtarget.js';
import { Corner } from '../../positioning/positioning.js';
import type { Animation } from '../../fx/animation.js';
/**
 * Class for rendering the results of an auto-complete in a drop down list.
 */
export declare class Renderer extends EventTarget {
    /**
     * Class for rendering the results of an auto-complete in a drop down list.
     * @param opt_parentNode optional reference to the parent element that will hold the autocomplete elements. dom.getDocument().body will be used if this is null.
     * @param opt_customRenderer Custom full renderer to render each row. Should be something with a renderRow or render method.
     * @param opt_rightAlign Determines if the autocomplete will always be right aligned. False by default.
     * @param opt_useStandardHighlighting Determines if standard highlighting should be applied to each row of data. Standard highlighting bolds every matching substring for a given token in each row. True by default.
     */
    constructor(opt_parentNode?: Element | null, opt_customRenderer?: {
        'renderRow': any;
    } | {
        'render': any;
    } | null, opt_rightAlign?: boolean, opt_useStandardHighlighting?: boolean);
    private noStructuralTyping_closure_goog_ui_ac_renderer_Renderer;
    /**
     * Array of the node divs that hold each result that is being displayed.
     */
    protected rowDivs_: (Element | null)[] | null;
    /**
     * The index of the currently highlighted row
     */
    protected hilitedRow_: number;
    /**
     * The time that the rendering of the menu rows started
     */
    protected startRenderingRows_: number;
    /**
     * Classname for the main element.  This must be a single valid class name.
     */
    className: string;
    /**
     * Classname for row divs.  This must be a single valid class name.
     */
    rowClassName: string;
    /**
     * Class name for active row div.  This must be a single valid class name.
     * Active row will have rowClassName & activeClassName &
     * legacyActiveClassName.
     */
    activeClassName: string;
    /**
     * Class name for the bold tag highlighting the matched part of the text.
     */
    highlightedClassName: string;
    /**
     * Animation in progress, if any.
     */
    animation_: Animation | undefined | null;
    /**
     * The anchor element to position the rendered autocompleter against.
     */
    protected target_: Element | undefined | null;
    /**
     * The element on which to base the width of the autocomplete.
     */
    protected widthProvider_: Node | null;
    /**
     * The element on which to base the max width of the autocomplete.
     */
    protected maxWidthProvider_: Node | undefined;
    /**
     * The delay before mouseover events are registered, in milliseconds
     */
    static DELAY_BEFORE_MOUSEOVER: number;
    /**
     * Gets the renderer's element.
     * @return The  main element that controls the rendered autocomplete.
     */
    getElement(): Element | null;
    /**
     * Sets the width provider element. The provider is only used on redraw and as
     * such will not automatically update on resize.
     * @param widthProvider The element whose width should be mirrored.
     * @param opt_borderWidth The width of the border of the autocomplete, which will be subtracted from the width of the autocomplete dropdown.
     * @param maxWidthProvider The element whose width should be used as the autocomplete's max width.
     */
    setWidthProvider(widthProvider: Node | null, opt_borderWidth?: number, maxWidthProvider?: Node): void;
    /**
     * Set whether to align autocomplete to top of target element
     * @param align If true, align to top.
     */
    setTopAlign(align: boolean): void;
    getTopAlign(): boolean;
    /**
     * Set whether to align autocomplete to the right of the target element.
     * @param align If true, align to right.
     */
    setRightAlign(align: boolean): void;
    getRightAlign(): boolean;
    /**
     *
     * @param show Whether we should limit the dropdown from extending past the bottom of the screen and instead show a scrollbar on the dropdown.
     */
    setShowScrollbarsIfTooLarge(show: boolean): void;
    /**
     * Set whether or not standard highlighting should be used when rendering rows.
     * @param useStandardHighlighting true if standard highlighting used.
     */
    setUseStandardHighlighting(useStandardHighlighting: boolean): void;
    /**
     *
     * @param matchWordBoundary Determines whether matches should be higlighted only when the token matches text at a whole-word boundary. True by default.
     */
    setMatchWordBoundary(matchWordBoundary: boolean): void;
    /**
     * Set whether or not to highlight all matching tokens rather than just the
     * first.
     * @param highlightAllTokens Whether to highlight all matching tokens rather than just the first.
     */
    setHighlightAllTokens(highlightAllTokens: boolean): void;
    /**
     * Sets the duration (in msec) of the fade animation when menu is shown/hidden.
     * Setting to 0 (default) disables animation entirely.
     * @param duration Duration (in msec) of the fade animation (or 0 for no animation).
     */
    setMenuFadeDuration(duration: number): void;
    /**
     * Sets the anchor element for the subsequent call to renderRows.
     * @param anchor The anchor element.
     */
    setAnchorElement(anchor: Element | null): void;
    protected getAnchorElement(): Element | null;
    /**
     * Render the autocomplete UI
     * @param rows Matching UI rows.
     * @param token Token we are currently matching against.
     * @param opt_target Current HTML node, will position popup beneath this node.
     */
    renderRows(rows: object[] | null, token: string, opt_target?: Element | null): void;
    /**
     * Hide the object.
     */
    dismiss(): void;
    /**
     * Show the object.
     */
    show(): void;
    isVisible(): boolean;
    /**
     * Sets the 'active' class of the nth item.
     * @param index Index of the item to highlight.
     */
    hiliteRow(index: number): void;
    /**
     * Removes the 'active' class from the currently selected row.
     */
    hiliteNone(): void;
    /**
     * Sets the 'active' class of the item with a given id.
     * @param id Id of the row to hilight. If id is -1 then no rows get hilited.
     */
    hiliteId(id: number): void;
    /**
     * Redraw (or draw if this is the first call) the rendered auto-complete drop
     * down.
     */
    redraw(): void;
    protected getAnchorCorner(): Corner | null;
    /**
     * Repositions the auto complete popup relative to the location node, if it
     * exists and the auto position has been set.
     */
    reposition(): void;
    /**
     * Sets whether the renderer should try to determine where to position the
     * drop down.
     * @param auto Whether to autoposition the drop down.
     */
    setAutoPosition(auto: boolean): void;
    protected getAutoPosition(): boolean;
    protected getTarget(): Element | null;
    /**
     * Disposes of the renderer and its associated HTML.
     */
    disposeInternal(): void;
    /**
     * Render a row by creating a div and then calling row rendering callback or
     * default row handler
     * @param row Object representing row.
     * @param token Token to highlight.
     * @return An element with the rendered HTML.
     */
    renderRowHtml(row: object | null, token: string): Element;
}
export declare namespace Renderer {
    /**
     * Class allowing different implementations to custom render the autocomplete.
     * Extending classes should override the render function.
     */
    class CustomRenderer {
        /**
         * Class allowing different implementations to custom render the autocomplete.
         * Extending classes should override the render function.
         */
        constructor();
        private noStructuralTyping_closure_goog_ui_ac_renderer_CustomRenderer;
        /**
         * Renders the autocomplete box. May be set to null.
         *
         * Because of the type, this function cannot be documented with param JSDoc.
         *
         * The function expects the following parameters:
         *
         * renderer, Renderer: The autocomplete renderer.
         * element, Element: The main element that controls the rendered autocomplete.
         * rows, Array: The current set of rows being displayed.
         * token, string: The current token that has been entered. *
         */
        render(renderer: any, element: any, rows: any, token: any): void;
        /**
         * Generic function that takes a row and renders a DOM structure for that row.
         * @param row Object representing row.
         * @param token Token to highlight.
         * @param node The node to render into.
         */
        renderRow(row: object | null, token: string, node: Node | null): void;
    }
}

import * as dom from '../dom/dom.js';
import { Component } from './component.js';
/**
 * Factory method that returns an instance of a BaseRoundedPanel.
 * @param radius The radius of the rounded corner(s), in pixels.
 * @param borderWidth The thickness of the border, in pixels.
 * @param borderColor The border color of the panel.
 * @param opt_backgroundColor The background color of the panel.
 * @param opt_corners The corners of the panel to be rounded. Any corners not specified will be rendered as square corners. Will default to all square corners if not specified.
 * @param opt_domHelper The DOM helper object for the document we want to render in.
 * @return An instance of a BaseRoundedPanel subclass. TODO(sdh): deprecate this class, which has <5 usages and only really matters for IE8, and then only stylistically.
 */
export declare function create(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: dom.DomHelper | null): BaseRoundedPanel;
/**
 * Enum for specifying which corners to render.
 */
export declare enum Corner {
    NONE = 0,
    BOTTOM_LEFT = 2,
    TOP_LEFT = 4,
    LEFT = 6,
    TOP_RIGHT = 8,
    TOP = 12,
    BOTTOM_RIGHT = 1,
    BOTTOM = 3,
    RIGHT = 9,
    ALL = 15
}
/**
 * Base class for the hierarchy of RoundedPanel classes. Do not
 * instantiate directly. Instead, call create().
 * The HTML structure for the RoundedPanel is:
 * <pre>
 * - div (Contains the background and content. Class name: goog-roundedpanel)
 * - div (Contains the background/rounded corners. Class name:
 * goog-roundedpanel-bg)
 * - div (Contains the content. Class name: goog-roundedpanel-content)
 * </pre>
 */
export declare class BaseRoundedPanel extends Component {
    /**
     * Base class for the hierarchy of RoundedPanel classes. Do not
     * instantiate directly. Instead, call create().
     * The HTML structure for the RoundedPanel is:
     * <pre>
     * - div (Contains the background and content. Class name: goog-roundedpanel)
     * - div (Contains the background/rounded corners. Class name:
     * goog-roundedpanel-bg)
     * - div (Contains the content. Class name: goog-roundedpanel-content)
     * </pre>
     * @param radius The radius of the rounded corner(s), in pixels.
     * @param borderWidth The thickness of the border, in pixels.
     * @param borderColor The border color of the panel.
     * @param opt_backgroundColor The background color of the panel.
     * @param opt_corners The corners of the panel to be rounded. Any corners not specified will be rendered as square corners. Will default to all square corners if not specified.
     * @param opt_domHelper The DOM helper object for the document we want to render in.
     */
    constructor(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_roundedpanel_BaseRoundedPanel;
    /**
     * This method performs all the necessary DOM manipulation to create the panel.
     * Overrides {@link Component#decorateInternal}.
     * @param element The element to decorate.
     */
    decorateInternal(element: Element | null): void;
    disposeInternal(): void;
    /**
     * Returns the DOM element containing the actual content.
     * @return The element containing the actual content (null if none).
     */
    getContentElement(): Element | null;
}
/**
 * RoundedPanel class specifically for browsers that support CSS attributes
 * for elements with rounded borders (ex. Safari 3.0+, Firefox 3.0+). Do not
 * instantiate directly. Instead, call create().
 */
export declare class CssRoundedPanel extends BaseRoundedPanel {
    /**
     * RoundedPanel class specifically for browsers that support CSS attributes
     * for elements with rounded borders (ex. Safari 3.0+, Firefox 3.0+). Do not
     * instantiate directly. Instead, call create().
     * @param radius The radius of the rounded corner(s), in pixels.
     * @param borderWidth The thickness of the border, in pixels.
     * @param borderColor The border color of the panel.
     * @param opt_backgroundColor The background color of the panel.
     * @param opt_corners The corners of the panel to be rounded. Any corners not specified will be rendered as square corners. Will default to all square corners if not specified.
     * @param opt_domHelper The DOM helper object for the document we want to render in.
     */
    constructor(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_roundedpanel_CssRoundedPanel;
    /**
     * This method performs all the necessary DOM manipulation to create the panel.
     * Overrides {@link Component#decorateInternal}.
     * @param element The element to decorate.
     */
    decorateInternal(element: Element | null): void;
}
/**
 * RoundedPanel class that uses graphics to create the rounded corners.
 * Do not instantiate directly. Instead, call create().
 */
export declare class GraphicsRoundedPanel extends BaseRoundedPanel {
    /**
     * RoundedPanel class that uses graphics to create the rounded corners.
     * Do not instantiate directly. Instead, call create().
     * @param radius The radius of the rounded corner(s), in pixels.
     * @param borderWidth The thickness of the border, in pixels.
     * @param borderColor The border color of the panel.
     * @param opt_backgroundColor The background color of the panel.
     * @param opt_corners The corners of the panel to be rounded. Any corners not specified will be rendered as square corners. Will default to all square corners if not specified.
     * @param opt_domHelper The DOM helper object for the document we want to render in.
     */
    constructor(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_roundedpanel_GraphicsRoundedPanel;
    /**
     * This method performs all the necessary DOM manipulation to create the panel.
     * Overrides {@link Component#decorateInternal}.
     * @param element The element to decorate.
     */
    decorateInternal(element: Element | null): void;
    disposeInternal(): void;
}

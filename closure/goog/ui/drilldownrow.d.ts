import * as googDom from '../dom/dom.js';
import { SafeHtml } from '../html/safehtml.js';
import { Component } from './component.js';
/**
 * Builds a DrilldownRow component, which can overlay a tree
 * structure onto sections of an HTML table.
 */
export declare class DrilldownRow extends Component {
    /**
     * Builds a DrilldownRow component, which can overlay a tree
     * structure onto sections of an HTML table.
     * @param opt_properties Optional properties.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(opt_properties?: DrilldownRow.DrilldownRowProperties, opt_domHelper?: googDom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_drilldownrow_DrilldownRow;
    /**
     * Example object with properties of the form accepted by the class
     * constructor.  These are educational and show the compiler that
     * these properties can be set so it doesn't emit warnings.
     */
    static sampleProperties: {
        html: SafeHtml;
        loaded: boolean;
        decorator: (selfObj: any, handler: any) => void;
    };
    /**
     * The base class method calls its superclass method and this
     * drilldown's 'decorator' method as defined in the constructor.
     */
    enterDocument(): void;
    createDom(): void;
    /**
     * A top-level DrilldownRow decorates a TR element.
     * @param node The element to test for decorability.
     * @return true iff the node is a TR.
     */
    canDecorate(node: Element | null): boolean;
    /**
     * Child drilldowns are rendered when needed.
     * @param child New DrilldownRow child to be added.
     * @param index position to be occupied by the child.
     * @param opt_render true to force immediate rendering.
     */
    addChildAt(child: Component | null, index: number, opt_render?: boolean): void;
    removeChild(child: any): Component;
    /**
     * Rendering of DrilldownRow's is on need, do not call this directly
     * from application code.
     *
     * Rendering a DrilldownRow places it according to its position in its
     * tree of DrilldownRows.  DrilldownRows cannot be placed any other
     * way so this method does not use any arguments.  This does not call
     * the base class method and does not modify any of this
     * DrilldownRow's children.
     */
    render(): void;
    /**
     * Finds the numeric index of this child within its parent Component.
     * Throws an exception if it has no parent.
     * @return index of this within the children of the parent Component.
     */
    findIndex(): number;
    /**
     * Returns the expanded state of the DrilldownRow.
     * @return true iff this is expanded.
     */
    isExpanded(): boolean;
    /**
     * Sets the expanded state of this DrilldownRow: makes all children
     * displayable or not displayable corresponding to the expanded state.
     * @param expanded whether this should be expanded or not.
     */
    setExpanded(expanded: boolean): void;
    /**
     * Returns this DrilldownRow's level in the tree.  Top level is 1.
     * @return depth of this DrilldownRow in its tree of drilldowns.
     */
    getDepth(): number;
    /**
     * This static function is a default decorator that adds HTML at the
     * beginning of the first cell to display indentation and an expander
     * image; sets up a click handler on the toggler; initializes a class
     * for the row: either goog-drilldown-expanded or
     * goog-drilldown-collapsed, depending on the initial state of the
     * DrilldownRow; and sets up a click event handler on the toggler
     * element.
     *
     * This creates a DIV with class=toggle.  Your application can set up
     * CSS style rules something like this:
     *
     * tr.goog-drilldown-expanded .toggle {
     * background-image: url('minus.png');
     * }
     *
     * tr.goog-drilldown-collapsed .toggle {
     * background-image: url('plus.png');
     * }
     *
     * These background images show whether the DrilldownRow is expanded.
     * @param selfObj DrilldownRow to be decorated.
     */
    static decorate(selfObj: DrilldownRow | null): void;
}
export declare namespace DrilldownRow {
    /**
     * Used to define properties for a new DrilldownRow. Properties can contain:
     * loaded: initializes the isLoaded property, defaults to true.
     * expanded: DrilldownRow expanded or not, default is true.
     * html: Relevant and required for DrilldownRows to be added as
     * children.  Ignored when decorating an existing table row.
     * decorator: Function that accepts one DrilldownRow argument, and
     * should customize and style the row.  The default is to call
     * DrilldownRow.decorator.
     */
    type DrilldownRowProperties = {
        'loaded': boolean | undefined;
        'expanded': boolean | undefined;
        'html': SafeHtml | undefined;
        'decorator': Function | undefined | null;
    };
}

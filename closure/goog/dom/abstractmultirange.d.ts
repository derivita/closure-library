import { AbstractRange } from './abstractrange.js';
/**
 * Creates a new multi range with no properties.  Do not use this
 * constructor: use one of the dom.Range.createFrom* methods instead.
 */
export declare abstract class AbstractMultiRange extends AbstractRange {
    /**
     * Creates a new multi range with no properties.  Do not use this
     * constructor: use one of the dom.Range.createFrom* methods instead.
     */
    constructor();
    private noStructuralTyping_closure_goog_dom_abstractmultirange_AbstractMultiRange;
    containsRange(otherRange: any, opt_allowPartial: any): boolean;
    insertNode(node: any, before: any): Node;
    surroundWithNodes(startNode: any, endNode: any): void;
}

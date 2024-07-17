import { Element } from './element.js';
import type { GroupElement } from '../groupelement.js';
/**
 * Wrapper for a graphics group.
 */
export declare class Group extends Element {
    /**
     * Wrapper for a graphics group.
     * @param group Parent for this element. Can be null if this is a Graphics instance.
     * @param opt_wrapper The thin wrapper to wrap. If omitted, a new group will be created. Must be included when group is null.
     */
    constructor(group: Group | null, opt_wrapper?: GroupElement | null);
    private noStructuralTyping_closure_goog_graphics_ext_group_Group;
    /**
     * Add an element to the group.  This should be treated as package local, as
     * it is called by the draw* methods.
     * @param element The element to add.
     * @param opt_chain Whether this addition is part of a longer set of element additions.
     */
    addChild(element: Element, opt_chain?: boolean): void;
    /**
     * Remove an element from the group.
     * @param element The element to remove.
     */
    removeChild(element: Element | null): void;
    /**
     * Calls the given function on each of this component's children in order.  If
     * `opt_obj` is provided, it will be used as the 'this' object in the
     * function when called.  The function should take two arguments:  the child
     * component and its 0-based index.  The return value is ignored.
     * @param f The function to call for every child component; should take 2 arguments (the child and its index).
     * @param opt_obj Used as the 'this' object in f when called.
     */
    forEachChild(f: Function | null, opt_obj?: object | null): void;
    getWrapper(): GroupElement | null;
    /**
     * Reset the element.
     */
    reset(): void;
    /**
     * Called from the parent class, this method resets any pre-computed positions
     * and sizes.
     */
    redraw(): void;
    /**
     * Transform the children that need to be transformed.
     */
    protected transformChildren(): void;
    /**
     * As part of the reset process, update child elements.
     */
    updateChildren(): void;
    getCoordinateWidth(): number;
    getCoordinateHeight(): number;
    /**
     * Remove all drawing elements from the group.
     */
    clear(): void;
}

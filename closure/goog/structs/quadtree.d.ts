import { Coordinate } from '../math/coordinate.js';
/**
 * Constructs a new quad tree.
 */
export declare class QuadTree {
    /**
     * Constructs a new quad tree.
     * @param minX Minimum x-value that can be held in tree.
     * @param minY Minimum y-value that can be held in tree.
     * @param maxX Maximum x-value that can be held in tree.
     * @param maxY Maximum y-value that can be held in tree.
     */
    constructor(minX: number, minY: number, maxX: number, maxY: number);
    private noStructuralTyping_closure_goog_structs_quadtree_QuadTree;
    /**
     * Returns a reference to the tree's root node.  Callers shouldn't modify nodes,
     * directly.  This is a convenience for visualization and debugging purposes.
     * @return The root node.
     */
    getRootNode(): QuadTree.Node | null;
    /**
     * Sets the value of an (x, y) point within the quad-tree.
     * @param x The x-coordinate.
     * @param y The y-coordinate.
     * @param value The value associated with the point.
     */
    set(x: number, y: number, value: any): void;
    /**
     * Gets the value of the point at (x, y) or null if the point is empty.
     * @param x The x-coordinate.
     * @param y The y-coordinate.
     * @param opt_default The default value to return if the node doesn't exist.
     * @return The value of the node, the default value if the node doesn't exist, or undefined if the node doesn't exist and no default has been provided.
     */
    get(x: number, y: number, opt_default?: any): any;
    /**
     * Removes a point from (x, y) if it exists.
     * @param x The x-coordinate.
     * @param y The y-coordinate.
     * @return The value of the node that was removed, or null if the node doesn't exist.
     */
    remove(x: number, y: number): any;
    /**
     * Returns true if the point at (x, y) exists in the tree.
     * @param x The x-coordinate.
     * @param y The y-coordinate.
     * @return Whether the tree contains a point at (x, y).
     */
    contains(x: number, y: number): boolean;
    isEmpty(): boolean;
    getCount(): number;
    /**
     * Removes all items from the tree.
     */
    clear(): void;
    /**
     * Returns an array containing the coordinates of each point stored in the tree.
     * @return Array of coordinates.
     */
    getKeys(): (Coordinate | null)[];
    /**
     * Returns an array containing all values stored within the tree.
     * @return The values stored within the tree.
     */
    getValues(): (object | null)[];
    /**
     * Clones the quad-tree and returns the new instance.
     * @return A clone of the tree.
     */
    clone(): QuadTree;
    /**
     * Traverses the tree and calls a function on each node.
     * @param fn The function to call for every value. This function takes 3 arguments (the value, the coordinate, and the tree itself) and the return value is irrelevant.
     * @param opt_obj The object to be used as the value of 'this' within {@ code fn}.
     */
    forEach(fn: () => any, opt_obj?: object | null): void;
}
export declare namespace QuadTree {
    /**
     * Enumeration of node types.
     */
    enum NodeType {
        EMPTY = 0,
        LEAF = 1,
        POINTER = 2
    }
    /**
     * Constructs a new quad tree node.
     */
    class Node {
        /**
         * Constructs a new quad tree node.
         * @param x X-coordiate of node.
         * @param y Y-coordinate of node.
         * @param w Width of node.
         * @param h Height of node.
         * @param opt_parent Optional parent node.
         */
        constructor(x: number, y: number, w: number, h: number, opt_parent?: QuadTree.Node | null);
        private noStructuralTyping_closure_goog_structs_quadtree_Node;
        /**
         * The x-coordinate of the node.
         */
        x: number;
        /**
         * The y-coordinate of the node.
         */
        y: number;
        /**
         * The width of the node.
         */
        w: number;
        /**
         * The height of the node.
         */
        h: number;
        /**
         * The parent node.
         */
        parent: QuadTree.Node | null;
        /**
         * The node's type.
         */
        nodeType: QuadTree.NodeType | null;
        /**
         * The child node in the North-West quadrant.
         */
        nw: QuadTree.Node | null;
        /**
         * The child node in the North-East quadrant.
         */
        ne: QuadTree.Node | null;
        /**
         * The child node in the South-West quadrant.
         */
        sw: QuadTree.Node | null;
        /**
         * The child node in the South-East quadrant.
         */
        se: QuadTree.Node | null;
        /**
         * The point for the node, if it is a leaf node.
         */
        point: QuadTree.Point | null;
    }
    /**
     * Creates a new point object.
     */
    class Point {
        /**
         * Creates a new point object.
         * @param x The x-coordinate of the point.
         * @param y The y-coordinate of the point.
         * @param opt_value Optional value associated with the point.
         */
        constructor(x: number, y: number, opt_value?: any);
        private noStructuralTyping_closure_goog_structs_quadtree_Point;
        /**
         * The x-coordinate for the point.
         */
        x: number;
        /**
         * The y-coordinate for the point.
         */
        y: number;
        /**
         * Optional value associated with the point.
         */
        value: any;
    }
}

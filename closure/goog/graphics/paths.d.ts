import { Path } from './path.js';
import { Coordinate } from '../math/coordinate.js';
/**
 * Defines a regular n-gon by specifing the center, a vertex, and the total
 * number of vertices.
 * @param center The center point.
 * @param vertex The vertex, which implicitly defines a radius as well.
 * @param n The number of vertices.
 * @return The path.
 */
export declare function createRegularNGon(center: Coordinate | null, vertex: Coordinate | null, n: number): Path;
/**
 * Defines an arrow.
 * @param a Point A.
 * @param b Point B.
 * @param aHead The size of the arrow head at point A. 0 omits the head.
 * @param bHead The size of the arrow head at point B. 0 omits the head.
 * @return The path.
 */
export declare function createArrow(a: Coordinate | null, b: Coordinate | null, aHead: number | null, bHead: number | null): Path;

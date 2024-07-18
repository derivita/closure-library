import { Coordinate } from '../math/coordinate.js';
import { Coordinate3 } from '../math/coordinate3.js';
/**
 * Returns the x,y translation component of any CSS transforms applied to the
 * element, in pixels.
 * @param element The element to get the translation of.
 * @return The CSS translation of the element in px.
 */
export declare function getTranslation(element: Element): Coordinate;
/**
 * Translates an element's position using the CSS3 transform property.
 * NOTE: This replaces all other transforms already defined on the element.
 * @param element The element to translate.
 * @param x The horizontal translation.
 * @param y The vertical translation.
 * @return Whether the CSS translation was set.
 */
export declare function setTranslation(element: Element | null, x: number, y: number): boolean;
/**
 * Returns the scale of the x, y and z dimensions of CSS transforms applied to
 * the element.
 * @param element The element to get the scale of.
 * @return The scale of the element.
 */
export declare function getScale(element: Element): Coordinate3;
/**
 * Scales an element using the CSS3 transform property.
 * NOTE: This replaces all other transforms already defined on the element.
 * @param element The element to scale.
 * @param x The horizontal scale.
 * @param y The vertical scale.
 * @param z The depth scale.
 * @return Whether the CSS scale was set.
 */
export declare function setScale(element: Element, x: number, y: number, z: number): boolean;
/**
 * Returns the rotation CSS transform applied to the element.
 * @param element The element to get the rotation of.
 * @return The rotation of the element in degrees.
 */
export declare function getRotation(element: Element): number;
/**
 * Rotates an element using the CSS3 transform property.
 * NOTE: This replaces all other transforms already defined on the element.
 * @param element The element to rotate.
 * @param degrees The number of degrees to rotate by.
 * @return Whether the CSS rotation was set.
 */
export declare function setRotation(element: Element, degrees: number): boolean;
/**
 * A cached value of the transform property depending on whether the useragent
 * is IE9.
 * @return The transform property depending on whether the useragent is IE9.
 */
export declare function getTransformProperty_(...args: any[]): string;

import './float32array.js';
import './float64array.js';
export type Float32 = Float32Array;
export type Float64 = Float64Array;
export type Number = number[];
export type AnyType = Float32 | Float64 | Number;
export type ArrayType = Float32Array | number[];
/**
 * For graphics work, 6 decimal places of accuracy are typically all that is
 * required.
 */
export declare var EPSILON: number;

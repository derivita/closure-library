import { Size } from './size.js';
/**
 * Class for representing and manipulating matrices.
 *
 * The entry that lies in the i-th row and the j-th column of a matrix is
 * typically referred to as the i,j entry of the matrix.
 *
 * The m-by-n matrix A would have its entries referred to as:
 * [ a0,0   a0,1   a0,2   ...   a0,j  ...  a0,n ]
 * [ a1,0   a1,1   a1,2   ...   a1,j  ...  a1,n ]
 * [ a2,0   a2,1   a2,2   ...   a2,j  ...  a2,n ]
 * [  .      .      .            .          .   ]
 * [  .      .      .            .          .   ]
 * [  .      .      .            .          .   ]
 * [ ai,0   ai,1   ai,2   ...   ai,j  ...  ai,n ]
 * [  .      .      .            .          .   ]
 * [  .      .      .            .          .   ]
 * [  .      .      .            .          .   ]
 * [ am,0   am,1   am,2   ...   am,j  ...  am,n ]
 */
export declare class Matrix {
    /**
     * Class for representing and manipulating matrices.
     *
     * The entry that lies in the i-th row and the j-th column of a matrix is
     * typically referred to as the i,j entry of the matrix.
     *
     * The m-by-n matrix A would have its entries referred to as:
     * [ a0,0   a0,1   a0,2   ...   a0,j  ...  a0,n ]
     * [ a1,0   a1,1   a1,2   ...   a1,j  ...  a1,n ]
     * [ a2,0   a2,1   a2,2   ...   a2,j  ...  a2,n ]
     * [  .      .      .            .          .   ]
     * [  .      .      .            .          .   ]
     * [  .      .      .            .          .   ]
     * [ ai,0   ai,1   ai,2   ...   ai,j  ...  ai,n ]
     * [  .      .      .            .          .   ]
     * [  .      .      .            .          .   ]
     * [  .      .      .            .          .   ]
     * [ am,0   am,1   am,2   ...   am,j  ...  am,n ]
     * @param m A matrix to copy, a 2D-array to take as a template, a size object for dimensions, or the number of rows.
     * @param opt_n Number of columns of the matrix (only applicable if the first argument is also numeric).
     */
    constructor(m: Matrix | number[][] | Size | number, opt_n?: number);
    private noStructuralTyping_closure_goog_math_matrix_Matrix;
    /**
     * Creates a square identity matrix. i.e. for n = 3:
     * <pre>
     * [ 1 0 0 ]
     * [ 0 1 0 ]
     * [ 0 0 1 ]
     * </pre>
     * @param n The size of the square identity matrix.
     * @return Identity matrix of width and height `n`.
     */
    static createIdentityMatrix(n: number): Matrix;
    /**
     * Calls a function for each cell in a matrix.
     * @param matrix The matrix to iterate over.
     * @param fn The function to call for every element. This function takes 4 arguments (value, i, j, and the matrix) and the return value is irrelevant.
     * @param opt_obj The object to be used as the value of 'this' within `fn`.
     */
    static forEach<T = any>(matrix: Matrix | null, fn: (this: T | null) => any, opt_obj?: T | null): void;
    /**
     * Tests whether an array is a valid matrix.  A valid array is an array of
     * arrays where all arrays are of the same length and all elements are numbers.
     * @param arr An array to test.
     * @return Whether the array is a valid matrix.
     */
    static isValidArray(arr: number[][]): boolean;
    /**
     * Calls a function for every cell in a matrix and inserts the result into a
     * new matrix of equal dimensions.
     * @param matrix The matrix to iterate over.
     * @param fn The function to call for every element. This function takes 4 arguments (value, i, j and the matrix) and should return a number, which will be inserted into a new matrix.
     * @param opt_obj The object to be used as the value of 'this' within `fn`.
     * @return A new matrix with the results from `fn`.
     */
    static map<T = any>(matrix: Matrix, fn: (this: T | null) => number, opt_obj?: T | null): Matrix;
    /**
     * Returns a new matrix that is the sum of this and the provided matrix.
     * @param m The matrix to add to this one.
     * @return Resultant sum.
     */
    add(m: Matrix | null): Matrix;
    /**
     * Appends the given matrix to the right side of this matrix.
     * @param m The matrix to augment this matrix with.
     * @return A new matrix with additional columns on the right.
     */
    appendColumns(m: Matrix | null): Matrix;
    /**
     * Appends the given matrix to the bottom of this matrix.
     * @param m The matrix to augment this matrix with.
     * @return A new matrix with added columns on the bottom.
     */
    appendRows(m: Matrix | null): Matrix;
    /**
     * Returns whether the given matrix equals this matrix.
     * @param m The matrix to compare to this one.
     * @param opt_tolerance The tolerance when comparing array entries.
     * @return Whether the given matrix equals this matrix.
     */
    equals(m: Matrix | null, opt_tolerance?: number): boolean;
    /**
     * Returns the determinant of this matrix.  The determinant of a matrix A is
     * often denoted as |A| and can only be applied to a square matrix.
     * @return The determinant of this matrix.
     */
    getDeterminant(): number;
    /**
     * Returns the inverse of this matrix if it exists or null if the matrix is
     * not invertible.
     * @return A new matrix which is the inverse of this matrix.
     */
    getInverse(): Matrix | null;
    /**
     * Transforms this matrix into reduced row echelon form.
     * @return A new matrix reduced row echelon form.
     */
    getReducedRowEchelonForm(): Matrix;
    getSize(): Size;
    /**
     * Return the transpose of this matrix.  For an m-by-n matrix, the transpose
     * is the n-by-m matrix which results from turning rows into columns and columns
     * into rows
     * @return A new matrix A^T.
     */
    getTranspose(): Matrix;
    /**
     * Retrieves the value of a particular coordinate in the matrix or null if the
     * requested coordinates are out of range.
     * @param i The i index of the coordinate.
     * @param j The j index of the coordinate.
     * @return The value at the specified coordinate.
     */
    getValueAt(i: number, j: number): number | null;
    isSquare(): boolean;
    /**
     * Sets the value at a particular coordinate (if the coordinate is within the
     * bounds of the matrix).
     * @param i The i index of the coordinate.
     * @param j The j index of the coordinate.
     * @param value The new value for the coordinate.
     */
    setValueAt(i: number, j: number, value: number): void;
    /**
     * Performs matrix or scalar multiplication on a matrix and returns the
     * resultant matrix.
     *
     * Matrix multiplication is defined between two matrices only if the number of
     * columns of the first matrix is the same as the number of rows of the second
     * matrix. If A is an m-by-n matrix and B is an n-by-p matrix, then their
     * product AB is an m-by-p matrix
     *
     * Scalar multiplication returns a matrix of the same size as the original,
     * each value multiplied by the given value.
     * @param m Matrix/number to multiply the matrix by.
     * @return Resultant product.
     */
    multiply(m: Matrix | number | null): Matrix;
    /**
     * Returns a new matrix that is the difference of this and the provided matrix.
     * @param m The matrix to subtract from this one.
     * @return Resultant difference.
     */
    subtract(m: Matrix | null): Matrix;
    toArray(): number[][];
}

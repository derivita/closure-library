/**
 * Creates a new JavaScript native Promise and captures its resolve and reject
 * callbacks. The promise, resolve, and reject are available as properties
 */
declare class NativeResolver<T = any> {
    constructor();
    resolve: () => any;
    reject: () => any;
    promise: Promise<T | null>;
}
export { NativeResolver };

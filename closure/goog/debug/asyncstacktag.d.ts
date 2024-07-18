/**
 * Utility to wrap the function to tag its stack at this point. If the function
 * has already been tagged, this does nothing.
 */
declare function wrap<T = any>(fn: T, name?: string): T;
declare const _default: {
    wrap: typeof wrap;
};
export default _default;

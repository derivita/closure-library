/**
 * Resolves when all promise values in the map resolve. The resolved value will
 * be a Map with the same keys as the input map, but with the resolved values of
 * the promises. Rejects with first error if any promise rejects. Like
 * Promise.all(), but for Maps.
 */
export declare let allMapValues: Promise<Map<KEY | null, OUT_VALUE | null>>;

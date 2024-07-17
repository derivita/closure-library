/**
 * Calculates the specificity of CSS selectors, using a global cache if
 * supported.
 * @param selector The CSS selector.
 * @return The CSS specificity.
 */
declare function getSpecificity(selector: string): number[];
export { getSpecificity };

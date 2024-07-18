import { ControlRenderer } from '../../ui/controlrenderer.js';
/**
 * Assert that a control renderer constructor doesn't call getCssClass.
 * @param rendererClassUnderTest The renderer constructor to test.
 */
declare function assertNoGetCssClassCallsInConstructor(rendererClassUnderTest: {
    new (): ControlRenderer | null;
}): void;
declare const _default: {
    assertNoGetCssClassCallsInConstructor: typeof assertNoGetCssClassCallsInConstructor;
};
export default _default;

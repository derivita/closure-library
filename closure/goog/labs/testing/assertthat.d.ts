import type { Matcher } from './matcher.js';
/**
 * Asserts that the actual value evaluated by the matcher is true.
 * @param actual The object to assert by the matcher.
 * @param matcher A matcher to verify values.
 * @param opt_reason Description of what is asserted.
 */
declare function assertThat(actual: any, matcher: Matcher, opt_reason?: string): void;
export { assertThat };

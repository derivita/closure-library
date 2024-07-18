import { DebugError } from '../../debug/error.js';
/**
 * Error thrown when a Matcher fails to match the input value.
 */
declare class MatcherError extends DebugError {
    /**
     * Error thrown when a Matcher fails to match the input value.
     * @param message The error message.
     */
    constructor(message?: string);
    private noStructuralTyping_closure_goog_labs_testing_matchererror_MatcherError;
}
export { MatcherError };

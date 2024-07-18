/**
 * A matcher object to be used in assertThat statements.
 */
export interface Matcher {
    /**
     * Determines whether a value matches the constraints of the match.
     * @param value The object to match.
     * @return Whether the input value matches this matcher.
     */
    matches(value: any): boolean;
    /**
     * Describes why the matcher failed.
     * @param value The value that didn't match.
     * @param opt_description A partial description to which the reason will be appended.
     * @return Description of why the matcher failed.
     */
    describe(value: any, opt_description?: string): string;
}
export declare namespace Matcher {
    /**
     * Generates a Matcher from the matches and describe functions passed in.
     * @param matchesFunction The matches function.
     * @param opt_describeFunction The describe function.
     * @return The custom matcher.
     */
    var makeMatcher: Function;
}

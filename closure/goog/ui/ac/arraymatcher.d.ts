/**
 * Basic class for matching words in an array
 */
export declare class ArrayMatcher {
    /**
     * Basic class for matching words in an array
     * @param rows Dictionary of items to match.  Can be objects if they have a toString method that returns the value to match against.
     * @param opt_noSimilar if true, do not do similarity matches for the input token against the dictionary.
     */
    constructor(rows: any[] | null, opt_noSimilar?: boolean);
    private noStructuralTyping_closure_goog_ui_ac_arraymatcher_ArrayMatcher;
    rows_: any[];
    /**
     * Replaces the rows that this object searches over.
     * @param rows Dictionary of items to match.
     */
    setRows(rows: any[] | null): void;
    /**
     * Function used to pass matches to the autocomplete
     * @param token Token to match.
     * @param maxMatches Max number of matches to return.
     * @param matchHandler callback to execute after matching.
     * @param opt_fullString The full string from the input box.
     */
    requestMatchingRows(token: string, maxMatches: number, matchHandler: Function | null, opt_fullString?: string): void;
    /**
     * Matches the token against the specified rows, first looking for prefix
     * matches and if that fails, then looking for similar matches.
     * @param token Token to match.
     * @param maxMatches Max number of matches to return.
     * @param rows Rows to search for matches. Can be objects if they have a toString method that returns the value to match against.
     * @return Rows that match.
     */
    static getMatchesForRows(token: string, maxMatches: number, rows: any[]): any[];
    /**
     * Matches the token against the start of words in the row.
     * @param token Token to match.
     * @param maxMatches Max number of matches to return.
     * @return Rows that match.
     */
    getPrefixMatches(token: string, maxMatches: number): any[];
    /**
     * Matches the token against the start of words in the row.
     * @param token Token to match.
     * @param maxMatches Max number of matches to return.
     * @param rows Rows to search for matches. Can be objects if they have a toString method that returns the value to match against.
     * @return Rows that match.
     */
    static getPrefixMatchesForRows(token: string, maxMatches: number, rows: any[]): any[];
    /**
     * Matches the token against similar rows, by calculating "distance" between the
     * terms.
     * @param token Token to match.
     * @param maxMatches Max number of matches to return.
     * @return The best maxMatches rows.
     */
    getSimilarRows(token: string, maxMatches: number): any[];
    /**
     * Matches the token against similar rows, by calculating "distance" between the
     * terms.
     * @param token Token to match.
     * @param maxMatches Max number of matches to return.
     * @param rows Rows to search for matches. Can be objects if they have a toString method that returns the value to match against.
     * @return The best maxMatches rows.
     */
    static getSimilarMatchesForRows(token: string, maxMatches: number, rows: any[]): any[];
}

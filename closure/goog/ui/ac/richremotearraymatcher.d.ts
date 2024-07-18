import { RemoteArrayMatcher } from './remotearraymatcher.js';
/**
 * An array matcher that requests rich matches via ajax and converts them into
 * rich rows.
 */
export declare class RichRemoteArrayMatcher extends RemoteArrayMatcher {
    /**
     * An array matcher that requests rich matches via ajax and converts them into
     * rich rows.
     * @param url The Uri which generates the auto complete matches.  The search term is passed to the server as the 'token' query param.
     * @param opt_noSimilar If true, request that the server does not do similarity matches for the input token against the dictionary. The value is sent to the server as the 'use_similar' query param which is either "1" (opt_noSimilar==false) or "0" (opt_noSimilar==true).
     */
    constructor(url: string, opt_noSimilar?: boolean);
    private noStructuralTyping_closure_goog_ui_ac_richremotearraymatcher_RichRemoteArrayMatcher;
    /**
     * Set the filter that is called before the array matches are returned.
     * @param rowFilter A function(rows) that returns an array of rows as a subset of the rows input array.
     */
    setRowFilter(rowFilter: Function | null): void;
    /**
     * Sets the function building the rows.
     * @param rowBuilder A function(type, response) converting the type and the server response to an object with two methods: render(node, token) and select(target).
     */
    setRowBuilder(rowBuilder: RichRemoteArrayMatcher.RowBuilder | null): void;
    /**
     * Retrieve a set of matching rows from the server via ajax and convert them
     * into rich rows.
     * @param token The text that should be matched; passed to the server as the 'token' query param.
     * @param maxMatches The maximum number of matches requested from the server; passed as the 'max_matches' query param. The server is responsible for limiting the number of matches that are returned.
     * @param matchHandler Callback to execute on the result after matching.
     */
    requestMatchingRows(token: string, maxMatches: number, matchHandler: Function | null): void;
}
export declare namespace RichRemoteArrayMatcher {
    type RowBuilder = () => {
        'render': (() => any) | undefined;
        'select': (() => any) | undefined;
    };
}

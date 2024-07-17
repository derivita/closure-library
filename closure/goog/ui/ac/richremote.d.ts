import { Remote } from './remote.js';
import { RichRemoteArrayMatcher } from './richremotearraymatcher.js';
/**
 * Factory class to create a rich autocomplete widget that autocompletes an
 * inputbox or textarea from data provided via ajax.  The server returns a
 * complex data structure that is used with client-side javascript functions to
 * render the results.
 */
export declare class RichRemote extends Remote {
    /**
     * Factory class to create a rich autocomplete widget that autocompletes an
     * inputbox or textarea from data provided via ajax.  The server returns a
     * complex data structure that is used with client-side javascript functions to
     * render the results.
     * @param url The Uri which generates the auto complete matches.
     * @param input Input element or text area.
     * @param opt_multi Whether to allow multiple entries; defaults to false.
     * @param opt_useSimilar Whether to use similar matches; e.g. "gost" => "ghost".
     */
    constructor(url: string, input: Element | null, opt_multi?: boolean, opt_useSimilar?: boolean);
    private noStructuralTyping_closure_goog_ui_ac_richremote_RichRemote;
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
}

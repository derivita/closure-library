import { NameFetcher } from './namefetcher.js';
/**
 * Builds the NameFetcherLocal object. This is a simple object which retrieves
 * character names from a local bundled database. This database only covers
 * invisible characters. See the goog.i18n.uChar class for more details.
 */
export declare class LocalNameFetcher implements NameFetcher {
    /**
     * Builds the NameFetcherLocal object. This is a simple object which retrieves
     * character names from a local bundled database. This database only covers
     * invisible characters. See the goog.i18n.uChar class for more details.
     */
    constructor();
    private noStructuralTyping_closure_goog_i18n_uchar_localnamefetcher_LocalNameFetcher;
    prefetch(character: any): any;
    getName(character: any, callback: any): any;
    isNameAvailable(character: any): any;
}

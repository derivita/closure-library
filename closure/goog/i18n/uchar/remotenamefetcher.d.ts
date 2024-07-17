import { Disposable } from '../../disposable/disposable.js';
import { NameFetcher } from './namefetcher.js';
/**
 * Builds the RemoteNameFetcher object. This object retrieves codepoint names
 * from a remote data source.
 */
export declare class RemoteNameFetcher extends Disposable implements NameFetcher {
    /**
     * Builds the RemoteNameFetcher object. This object retrieves codepoint names
     * from a remote data source.
     * @param dataSourceUri URI to the data source.
     */
    constructor(dataSourceUri: string);
    private noStructuralTyping_closure_goog_i18n_uchar_remotenamefetcher_RemoteNameFetcher;
    disposeInternal(): void;
    prefetch(characters: any): any;
    getName(character: any, callback: any): any;
    isNameAvailable(character: any): any;
}
export declare namespace RemoteNameFetcher {
    /**
     * Enum for the different request types.
     */
    enum RequestType_ {
        BASE_88 = "b88",
        CODEPOINT = "c"
    }
}

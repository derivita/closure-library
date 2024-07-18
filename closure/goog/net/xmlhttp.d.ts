import { XmlHttpFactory } from './xmlhttpfactory.js';
import type { XhrLike } from './xhrlike.js';
/**
 * Static class for creating XMLHttpRequest objects.
 * @return A new XMLHttpRequest object.
 */
export declare function XmlHttp(): XhrLike.OrNative;
export declare namespace XmlHttp {
    var ASSUME_NATIVE_XHR: boolean;
    /**
     * Gets the options to use with the XMLHttpRequest objects obtained using
     * the static methods.
     * @return The options.
     */
    var getOptions: object | null;
    /**
     * Type of options that an XmlHttp object can have.
     */
    enum OptionType {
        USE_NULL_FUNCTION = 0,
        LOCAL_REQUEST_ERROR = 1
    }
    /**
     * Status constants for XMLHTTP, matches:
     * https://msdn.microsoft.com/en-us/library/ms534361(v=vs.85).aspx
     */
    enum ReadyState {
        UNINITIALIZED = 0,
        LOADING = 1,
        LOADED = 2,
        INTERACTIVE = 3,
        COMPLETE = 4
    }
    /**
     * The global factory instance for creating XMLHttpRequest objects.
     */
    var factory_: XmlHttpFactory | null;
    /**
     * Sets the factories for creating XMLHttpRequest objects and their options.
     * @param factory The factory for XMLHttpRequest objects.
     * @param optionsFactory The factory for options.
     */
    var setFactory: (factory: Function | null, optionsFactory: Function | null) => void;
    /**
     * Sets the global factory object.
     * @param factory New global factory object.
     */
    var setGlobalFactory: (factory: XmlHttpFactory) => void;
}
export declare var XmlHttpDefines: {
    ASSUME_NATIVE_XHR: boolean;
};
/**
 * Default factory to use when creating xhr objects.  You probably shouldn't be
 * instantiating this directly, but rather using it via XmlHttp.
 */
export declare class DefaultXmlHttpFactory extends XmlHttpFactory {
    /**
     * Default factory to use when creating xhr objects.  You probably shouldn't be
     * instantiating this directly, but rather using it via XmlHttp.
     */
    constructor();
    private noStructuralTyping_closure_goog_net_xmlhttp_DefaultXmlHttpFactory;
    createInstance(): XhrLike.OrNative;
    internalGetOptions(): object;
}

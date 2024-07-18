import { XhrLike } from './xhrlike.js';
/**
 * Abstract base class for an XmlHttpRequest factory.
 */
export declare class XmlHttpFactory {
    /**
     * Abstract base class for an XmlHttpRequest factory.
     */
    constructor();
    private noStructuralTyping_closure_goog_net_xmlhttpfactory_XmlHttpFactory;
    createInstance(): XhrLike.OrNative;
    getOptions(): object | null;
    /**
     * Override this method in subclasses to preserve the caching offered by
     * getOptions().
     * @return Options describing how xhr objects obtained from this factory should be used.
     */
    protected internalGetOptions(): object | null;
}

import { XhrLike } from './xhrlike.js';
import { XmlHttpFactory } from './xmlhttpfactory.js';
/**
 * An xhr factory subclass which can be constructed using two factory methods.
 * This exists partly to allow the preservation of goog.net.XmlHttp.setFactory()
 * with an unchanged signature.
 */
export declare class WrapperXmlHttpFactory extends XmlHttpFactory {
    /**
     * An xhr factory subclass which can be constructed using two factory methods.
     * This exists partly to allow the preservation of goog.net.XmlHttp.setFactory()
     * with an unchanged signature.
     * @param xhrFactory A function which returns a new XHR object.
     * @param optionsFactory A function which returns the options associated with xhr objects from this factory.
     */
    constructor(xhrFactory: () => XhrLike.OrNative, optionsFactory: () => object);
    private noStructuralTyping_closure_goog_net_wrapperxmlhttpfactory_WrapperXmlHttpFactory;
    createInstance(): XhrLike.OrNative;
    getOptions(): object;
}

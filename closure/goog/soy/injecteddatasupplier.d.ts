/**
 * An interface for a supplier that provides Soy injected data.
 */
export interface InjectedDataSupplier {
    /**
     * Gets the injected data. Implementation may assume that
     * `goog.soy.Renderer` will treat the returned data as
     * immutable.  The renderer will call this every time one of its
     * `render*` methods is called.
     */
    getData(): any;
}

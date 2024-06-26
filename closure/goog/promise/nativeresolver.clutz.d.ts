//!! generated by clutz.
// Generated from promise/nativeresolver.js
declare namespace ಠ_ಠ.clutz {
  /**
   * Creates a new JavaScript native Promise and captures its resolve and reject
   * callbacks. The promise, resolve, and reject are available as properties
   */
  class module$exports$goog$promise$NativeResolver < T = any > {
    private noStructuralTyping_module$exports$goog$promise$NativeResolver : any;
    promise : Promise < T > ;
    reject (a ? : any ) : any ;
    resolve (a ? : T | PromiseLike < T > | { then : any } ) : any ;
  }
}
declare module 'goog:goog.promise.NativeResolver' {
  import NativeResolver = ಠ_ಠ.clutz.module$exports$goog$promise$NativeResolver;
  export default NativeResolver;
}

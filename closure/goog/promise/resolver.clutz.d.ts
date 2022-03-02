//!! generated by clutz.
// Generated from promise/resolver.js
declare namespace ಠ_ಠ.clutz.goog.promise {
  /**
   * Resolver interface for promises. The resolver is a convenience interface that
   * bundles the promise and its associated resolve and reject functions together,
   * for cases where the resolver needs to be persisted internally.
   */
  interface Resolver < TYPE = any > {
    /**
     * The promise that created this resolver.
     */
    promise : ಠ_ಠ.clutz.goog.Promise < TYPE > ;
    /**
     * Rejects this resolver with the specified reason.
     */
    reject (a ? : any ) : void ;
    /**
     * Resolves this resolver with the specified value.
     */
    resolve (a ? : TYPE | ಠ_ಠ.clutz.goog.Promise < TYPE > | null | { then : any } ) : any ;
  }
}
declare module 'goog:goog.promise.Resolver' {
  import Resolver = ಠ_ಠ.clutz.goog.promise.Resolver;
  export default Resolver;
}

//!! generated by clutz.
// Generated from singleton/singleton.js
declare namespace ಠ_ಠ.clutz.goog.singleton {
  /**
   * Used as the implementation body for a static getInstance method.
   *
   * ```
   * class Foo {
   * static getInstance() {
   * return getInstance(Foo);
   * }
   * }
   * ```
   */
  function getInstance < T = any > (ctor : { new ( ) : T } ) : T ;
  let instantiatedSingletons : ( { new ( ) : any } ) [] ;
}
declare module 'goog:goog.singleton' {
  import singleton = ಠ_ಠ.clutz.goog.singleton;
  export = singleton;
}

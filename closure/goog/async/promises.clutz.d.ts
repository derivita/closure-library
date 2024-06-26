//!! generated by clutz.
// Generated from async/promises.js
declare namespace ಠ_ಠ.clutz.module$exports$goog$async$promises {
  /**
   * Resolves when all promise values in the map resolve. The resolved value will
   * be a Map with the same keys as the input map, but with the resolved values of
   * the promises. Rejects with first error if any promise rejects. Like
   * Promise.all(), but for Maps.
   */
  function allMapValues < KEY = any , IN_VALUE = any , OUT_VALUE = any > (promiseMap : Map < KEY , IN_VALUE > ) : Promise < Map < KEY , OUT_VALUE > > ;
}
declare module 'goog:goog.async.promises' {
  import promises = ಠ_ಠ.clutz.module$exports$goog$async$promises;
  export = promises;
}

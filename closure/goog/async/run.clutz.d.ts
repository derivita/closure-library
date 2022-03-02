//!! generated by clutz.
// Generated from async/run.js
declare namespace ಠ_ಠ.clutz.goog.async {
  /**
   * Fires the provided callback just before the current callstack unwinds, or as
   * soon as possible after the current JS execution context.
   * @param opt_context Object to use as the "this value" when calling the provided function.
   */
  function run < THIS = any > (callback : (this : THIS ) => any , opt_context ? : THIS ) : void ;
}
declare module 'goog:goog.async.run' {
  import run = ಠ_ಠ.clutz.goog.async.run;
  export default run;
}

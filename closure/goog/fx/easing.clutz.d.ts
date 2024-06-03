//!! generated by clutz.
// Generated from fx/easing.js
declare namespace ಠ_ಠ.clutz.goog.fx.easing {
  /**
   * Ease in - Start slow and speed up.
   * @param t Input between 0 and 1.
   */
  function easeIn (t : number ) : number ;
  /**
   * Ease out - Start fastest and slows to a stop.
   * @param t Input between 0 and 1.
   */
  function easeOut (t : number ) : number ;
  /**
   * Ease out long - Start fastest and slows to a stop with a long ease.
   * @param t Input between 0 and 1.
   */
  function easeOutLong (t : number ) : number ;
  /**
   * Ease in and out - Start slow, speed up, then slow down.
   * @param t Input between 0 and 1.
   */
  function inAndOut (t : number ) : number ;
}
declare module 'goog:goog.fx.easing' {
  import easing = ಠ_ಠ.clutz.goog.fx.easing;
  export = easing;
}

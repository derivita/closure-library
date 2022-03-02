//!! generated by clutz.
// Generated from async/throttle.js
declare namespace ಠ_ಠ.clutz.goog.async {
  export import Throttle = ಠ_ಠ.clutz.module$contents$goog$async$Throttle_Throttle ;
}
declare module 'goog:goog.async.Throttle' {
  import Throttle = ಠ_ಠ.clutz.goog.async.Throttle;
  export default Throttle;
}
// Generated from async/throttle.js
declare namespace ಠ_ಠ.clutz {
  /**
   * Throttle will perform an action that is passed in no more than once
   * per interval (specified in milliseconds). If it gets multiple signals
   * to perform the action while it is waiting, it will only perform the action
   * once at the end of the interval.
   */
  class module$contents$goog$async$Throttle_Throttle < T = any > extends ಠ_ಠ.clutz.module$exports$goog$Disposable {
    private noStructuralTyping_module$contents$goog$async$Throttle_Throttle : any;
    /**
     * Throttle will perform an action that is passed in no more than once
     * per interval (specified in milliseconds). If it gets multiple signals
     * to perform the action while it is waiting, it will only perform the action
     * once at the end of the interval.
     */
    constructor (listener : (this : T ,  ...a : any [] ) => any , interval : number , handler ? : T ) ;
    disposeInternal ( ) : void ;
    /**
     * Notifies the throttle that the action has happened. It will throttle
     * the call so that the callback is not called too often according to the
     * interval parameter passed to the constructor, passing the arguments
     * from the last call of this function into the throttled function.
     * @param var_args Arguments to pass on to the throttled function.
     */
    fire ( ...var_args : any [] ) : void ;
    /**
     * Pauses the throttle.  All pending and future action callbacks will be
     * delayed until the throttle is resumed.  Pauses can be nested.
     */
    pause ( ) : void ;
    /**
     * Resumes the throttle.  If doing so drops the pausing count to zero,
     * pending action callbacks will be executed as soon as possible, but
     * still no sooner than an interval's delay after the previous call.
     * Future action callbacks will be executed as normal.
     */
    resume ( ) : void ;
    /**
     * Cancels any pending action callback. The throttle can be restarted by
     * calling {@link #fire}.
     */
    stop ( ) : void ;
  }
}
declare namespace ಠ_ಠ.clutz {
  export import module$exports$goog$async$Throttle = ಠ_ಠ.clutz.module$contents$goog$async$Throttle_Throttle ;
}

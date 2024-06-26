//!! generated by clutz.
// Generated from async/debouncer.js
declare namespace ಠ_ಠ.clutz.goog.async {
  /**
   * Debouncer will perform a specified action exactly once for any sequence of
   * signals fired repeatedly so long as they are fired less than a specified
   * interval apart (in milliseconds). Whether it receives one signal or multiple,
   * it will always wait until a full interval has elapsed since the last signal
   * before performing the action.
   */
  class Debouncer < T = any > extends ಠ_ಠ.clutz.goog.Disposable {
    private noStructuralTyping_goog_async_Debouncer : any;
    /**
     * Debouncer will perform a specified action exactly once for any sequence of
     * signals fired repeatedly so long as they are fired less than a specified
     * interval apart (in milliseconds). Whether it receives one signal or multiple,
     * it will always wait until a full interval has elapsed since the last signal
     * before performing the action.
     * @param listener Function to callback when the action is triggered.
     * @param interval Interval over which to debounce. The listener will only be called after the full interval has elapsed since the last signal.
     * @param opt_handler Object in whose scope to call the listener.
     */
    constructor (listener : (this : T ,  ...a : any [] ) => any , interval : number , opt_handler ? : T ) ;
    disposeInternal ( ) : void ;
    /**
     * Notifies the debouncer that the action has happened. It will debounce the
     * call so that the callback is only called after the last action in a sequence
     * of actions separated by periods less the interval parameter passed to the
     * constructor, passing the arguments from the last call of this function into
     * the debounced function.
     * @param var_args Arguments to pass on to the debounced function.
     */
    fire ( ...var_args : any [] ) : void ;
    pause ( ) : void ;
    resume ( ) : void ;
    stop ( ) : void ;
  }
}
declare module 'goog:goog.async.Debouncer' {
  import Debouncer = ಠ_ಠ.clutz.goog.async.Debouncer;
  export default Debouncer;
}

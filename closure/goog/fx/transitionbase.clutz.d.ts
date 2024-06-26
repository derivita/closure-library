//!! generated by clutz.
// Generated from fx/transitionbase.js
declare namespace ಠ_ಠ.clutz.goog.fx {
  /**
   * Constructor for a transition object.
   */
  class TransitionBase extends ಠ_ಠ.clutz.goog.events.EventTarget implements ಠ_ಠ.clutz.goog.fx.Transition {
    private noStructuralTyping_goog_fx_TransitionBase : any;
    /**
     * Constructor for a transition object.
     */
    constructor ( ) ;
    /**
     * Timestamp for when the animation finished or was stopped.
     */
    protected endTime : number | null ;
    /**
     * Timestamp for when the animation was started.
     */
    protected startTime : number | null ;
    /**
     * Dispatches an event object for the current animation.
     * @param type Event type that will be dispatched.
     */
    protected dispatchAnimationEvent (type : string ) : void ;
    /**
     * Returns the current state of the animation.
     */
    getStateInternal ( ) : ಠ_ಠ.clutz.goog.fx.TransitionBase.State ;
    isPaused ( ) : boolean ;
    isPlaying ( ) : boolean ;
    isStopped ( ) : boolean ;
    /**
     * Dispatches the BEGIN event. Sub classes should override this instead
     * of listening to the event, and call this instead of dispatching the event.
     */
    protected onBegin ( ) : void ;
    /**
     * Dispatches the END event. Sub classes should override this instead
     * of listening to the event, and call this instead of dispatching the event.
     */
    protected onEnd ( ) : void ;
    /**
     * Dispatches the FINISH event. Sub classes should override this instead
     * of listening to the event, and call this instead of dispatching the event.
     */
    protected onFinish ( ) : void ;
    /**
     * Dispatches the PAUSE event. Sub classes should override this instead
     * of listening to the event, and call this instead of dispatching the event.
     */
    protected onPause ( ) : void ;
    /**
     * Dispatches the PLAY event. Sub classes should override this instead
     * of listening to the event, and call this instead of dispatching the event.
     */
    protected onPlay ( ) : void ;
    /**
     * Dispatches the RESUME event. Sub classes should override this instead
     * of listening to the event, and call this instead of dispatching the event.
     */
    protected onResume ( ) : void ;
    /**
     * Dispatches the STOP event. Sub classes should override this instead
     * of listening to the event, and call this instead of dispatching the event.
     */
    protected onStop ( ) : void ;
    pause ( ...a : any [] ) : any ;
    /**
     * Plays the animation.
     * @param opt_restart Optional parameter to restart the animation.
     */
    play (a ? : boolean ) : boolean ;
    /**
     * Sets the current state of the animation to paused.
     */
    protected setStatePaused ( ) : void ;
    /**
     * Sets the current state of the animation to playing.
     */
    protected setStatePlaying ( ) : void ;
    /**
     * Sets the current state of the animation to stopped.
     */
    protected setStateStopped ( ) : void ;
    /**
     * Stops the animation.
     * @param opt_gotoEnd Optional boolean parameter to go the end of the animation.
     */
    stop (a ? : boolean ) : any ;
  }
}
// Generated from fx/transitionbase.js
declare namespace ಠ_ಠ.clutz.goog.fx.TransitionBase {
  /**
   * Enum for the possible states of an animation.
   */
  enum State {
    PAUSED = -1.0 ,
    PLAYING = 1.0 ,
    STOPPED = 0.0 ,
  }
}
declare module 'goog:goog.fx.TransitionBase' {
  import TransitionBase = ಠ_ಠ.clutz.goog.fx.TransitionBase;
  export default TransitionBase;
}

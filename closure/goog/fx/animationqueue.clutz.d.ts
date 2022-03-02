//!! generated by clutz.
// Generated from fx/animationqueue.js
declare namespace ಠ_ಠ.clutz.goog.fx {
  /**
   * Constructor for AnimationParallelQueue object.
   */
  class AnimationParallelQueue extends ಠ_ಠ.clutz.goog.fx.AnimationQueue {
    private noStructuralTyping_goog_fx_AnimationParallelQueue : any;
    /**
     * Constructor for AnimationParallelQueue object.
     */
    constructor ( ) ;
    protected onAnimationFinish (e : ಠ_ಠ.clutz.goog.events.Event | null ) : any ;
    pause ( ) : void ;
    play (opt_restart ? : any ) : any ;
    stop (opt_gotoEnd ? : any ) : void ;
  }
}
declare module 'goog:goog.fx.AnimationParallelQueue' {
  import AnimationParallelQueue = ಠ_ಠ.clutz.goog.fx.AnimationParallelQueue;
  export default AnimationParallelQueue;
}
// Generated from fx/animationqueue.js
declare namespace ಠ_ಠ.clutz.goog.fx {
  /**
   * Constructor for AnimationQueue object.
   */
  class AnimationQueue extends ಠ_ಠ.clutz.goog.fx.TransitionBase {
    private noStructuralTyping_goog_fx_AnimationQueue : any;
    /**
     * Constructor for AnimationQueue object.
     */
    constructor ( ) ;
    /**
     * An array holding all animations in the queue.
     */
    protected queue : ( ಠ_ಠ.clutz.goog.fx.TransitionBase | null ) [] | null ;
    /**
     * Pushes an Animation to the end of the queue.
     * @param animation The animation to add to the queue.
     */
    add (animation : ಠ_ಠ.clutz.goog.fx.TransitionBase | null ) : void ;
    /**
     * Disposes of the animations.
     */
    disposeInternal ( ) : void ;
    /**
     * Handles the event that an animation has finished.
     * @param e The finishing event.
     */
    protected onAnimationFinish (a : ಠ_ಠ.clutz.goog.events.Event | null ) : any ;
    /**
     * Removes an Animation from the queue.
     * @param animation The animation to remove.
     */
    remove (animation : ಠ_ಠ.clutz.goog.fx.Animation | null ) : void ;
  }
}
declare module 'goog:goog.fx.AnimationQueue' {
  import AnimationQueue = ಠ_ಠ.clutz.goog.fx.AnimationQueue;
  export default AnimationQueue;
}
// Generated from fx/animationqueue.js
declare namespace ಠ_ಠ.clutz.goog.fx {
  /**
   * Constructor for AnimationSerialQueue object.
   */
  class AnimationSerialQueue extends ಠ_ಠ.clutz.goog.fx.AnimationQueue {
    private noStructuralTyping_goog_fx_AnimationSerialQueue : any;
    /**
     * Constructor for AnimationSerialQueue object.
     */
    constructor ( ) ;
    protected onAnimationFinish (e : ಠ_ಠ.clutz.goog.events.Event | null ) : any ;
    pause ( ) : void ;
    play (opt_restart ? : any ) : any ;
    stop (opt_gotoEnd ? : any ) : void ;
  }
}
declare module 'goog:goog.fx.AnimationSerialQueue' {
  import AnimationSerialQueue = ಠ_ಠ.clutz.goog.fx.AnimationSerialQueue;
  export default AnimationSerialQueue;
}

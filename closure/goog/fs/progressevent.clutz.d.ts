//!! generated by clutz.
// Generated from fs/progressevent.js
declare namespace ಠ_ಠ.clutz.goog.fs {
  /**
   * A wrapper for the progress events emitted by the File APIs.
   */
  class ProgressEvent extends ಠ_ಠ.clutz.goog.events.Event {
    private noStructuralTyping_goog_fs_ProgressEvent : any;
    /**
     * A wrapper for the progress events emitted by the File APIs.
     * @param event The underlying event object.
     * @param target The file access object emitting the event.
     */
    constructor (event : ProgressEvent , target : GlobalObject ) ;
    getLoaded ( ) : number ;
    getTotal ( ) : number ;
    isLengthComputable ( ) : boolean ;
  }
}
declare module 'goog:goog.fs.ProgressEvent' {
  import ProgressEvent = ಠ_ಠ.clutz.goog.fs.ProgressEvent;
  export default ProgressEvent;
}

//!! generated by clutz.
// Generated from events/filedrophandler.js
declare namespace ಠ_ಠ.clutz.goog.events {
  /**
   * A files drag and drop event detector. Gets an `element` as parameter
   * and fires `goog.events.FileDropHandler.EventType.DROP` event when files
   * are dropped in the `element`.
   */
  class FileDropHandler extends ಠ_ಠ.clutz.goog.events.EventTarget {
    private noStructuralTyping_goog_events_FileDropHandler : any;
    /**
     * A files drag and drop event detector. Gets an `element` as parameter
     * and fires `goog.events.FileDropHandler.EventType.DROP` event when files
     * are dropped in the `element`.
     * @param element The element or document to listen on.
     * @param opt_preventDropOutside Whether to prevent a drop on the area outside the `element`. Default false.
     */
    constructor (element : GlobalElement | null | Document , opt_preventDropOutside ? : boolean ) ;
    disposeInternal ( ) : void ;
  }
}
declare module 'goog:goog.events.FileDropHandler' {
  import FileDropHandler = ಠ_ಠ.clutz.goog.events.FileDropHandler;
  export default FileDropHandler;
}
// Generated from events/filedrophandler.js
declare namespace ಠ_ಠ.clutz.goog.events.FileDropHandler {
  /**
   * The types of events fired by this class.
   */
  type EventType = string &{clutzEnumBrand: never} ;
  let EventType : {
    DROP : EventType ,
  };
}
declare module 'goog:goog.events.FileDropHandler.EventType' {
  import EventType = ಠ_ಠ.clutz.goog.events.FileDropHandler.EventType;
  export default EventType;
}

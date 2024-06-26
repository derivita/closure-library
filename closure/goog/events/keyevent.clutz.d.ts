//!! generated by clutz.
// Generated from events/keyevent.js
declare namespace ಠ_ಠ.clutz.goog.events {
  /**
   * This class is used for the goog.events.KeyEvent.EventType.KEY event and
   * it overrides the key code with the fixed key code.
   */
  class KeyEvent extends ಠ_ಠ.clutz.goog.events.BrowserEvent {
    private noStructuralTyping_goog_events_KeyEvent : any;
    /**
     * This class is used for the goog.events.KeyEvent.EventType.KEY event and
     * it overrides the key code with the fixed key code.
     * @param keyCode The adjusted key code.
     * @param charCode The unicode character code.
     * @param repeat Whether this event was generated by keyboard repeat.
     * @param browserEvent Browser event object.
     */
    constructor (keyCode : number , charCode : number , repeat : boolean , browserEvent : GlobalEvent | null ) ;
    /**
     * Unicode character code.
     */
    charCode : number ;
    /**
     * Keycode of key press.
     */
    keyCode : number ;
    /**
     * True if this event was generated by keyboard auto-repeat (i.e., the user is
     * holding the key down.)
     */
    repeat : boolean ;
    type : ಠ_ಠ.clutz.goog.events.KeyEvent.EventType ;
  }
}
// Generated from events/keyevent.js
declare namespace ಠ_ಠ.clutz.goog.events.KeyEvent {
  /**
   * Enum type for the events fired by the key handler
   */
  enum EventType {
    KEY = 'key' ,
  }
}
declare module 'goog:goog.events.KeyEvent' {
  import KeyEvent = ಠ_ಠ.clutz.goog.events.KeyEvent;
  export default KeyEvent;
}

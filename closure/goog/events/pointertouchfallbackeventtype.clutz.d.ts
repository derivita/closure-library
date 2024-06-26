//!! generated by clutz.
// Generated from events/pointertouchfallbackeventtype.js
declare namespace ಠ_ಠ.clutz.goog.events {
  /**
   * Constants for pointer event names that fall back to corresponding touch event
   * names on unsupported platforms. These are intended to be drop-in replacements
   * for corresponding values in `goog.events.EventType`.
   */
  type PointerTouchFallbackEventType = string &{clutzEnumBrand: never} ;
  let PointerTouchFallbackEventType : {
    POINTERCANCEL : PointerTouchFallbackEventType ,
    POINTERDOWN : PointerTouchFallbackEventType ,
    POINTERMOVE : PointerTouchFallbackEventType ,
    POINTERUP : PointerTouchFallbackEventType ,
  };
}
declare module 'goog:goog.events.PointerTouchFallbackEventType' {
  import PointerTouchFallbackEventType = ಠ_ಠ.clutz.goog.events.PointerTouchFallbackEventType;
  export default PointerTouchFallbackEventType;
}

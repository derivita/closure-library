//!! generated by clutz.
// Generated from events/eventtype.js
declare namespace ಠ_ಠ.clutz.goog.events {
  /**
   * Constants for event names.
   */
  type EventType = string &{clutzEnumBrand: never} |'DOMAttrModified' |'DOMCharacterDataModified' |'DOMContentLoaded' |'DOMNodeInserted' |'DOMNodeInsertedIntoDocument' |'DOMNodeRemoved' |'DOMNodeRemovedFromDocument' |'DOMSubtreeModified' |'MSGestureChange' |'MSGestureEnd' |'MSGestureHold' |'MSGestureStart' |'MSGestureTap' |'MSGotPointerCapture' |'MSInertiaStart' |'MSLostPointerCapture' |'MSPointerCancel' |'MSPointerDown' |'MSPointerEnter' |'MSPointerHover' |'MSPointerLeave' |'MSPointerMove' |'MSPointerOut' |'MSPointerOver' |'MSPointerUp' |'abort' |'activate' |'afterprint' |'appinstalled' |'auxclick' |'beforecopy' |'beforecut' |'beforeinput' |'beforeinstallprompt' |'beforepaste' |'beforeprint' |'beforeunload' |'blur' |'canplay' |'canplaythrough' |'change' |'click' |'compositionend' |'compositionstart' |'compositionupdate' |'connect' |'consolemessage' |'contextmenu' |'controllerchange' |'copy' |'cut' |'dblclick' |'deactivate' |'devicechange' |'devicemotion' |'deviceorientation' |'drag' |'dragend' |'dragenter' |'dragleave' |'dragover' |'dragstart' |'drop' |'durationchange' |'emptied' |'ended' |'error' |'exit' |'fetch' |'focus' |'focusin' |'focusout' |'foreignfetch' |'gotpointercapture' |'hashchange' |'help' |'input' |'install' |'keydown' |'keypress' |'keyup' |'load' |'loadabort' |'loadcommit' |'loadeddata' |'loadedmetadata' |'loadredirect' |'loadstart' |'loadstop' |'losecapture' |'lostpointercapture' |'message' |'messageerror' |'mousecancel' |'mousedown' |'mouseenter' |'mouseleave' |'mousemove' |'mouseout' |'mouseover' |'mouseup' |'offline' |'online' |'orientationchange' |'pagehide' |'pageshow' |'paste' |'pause' |'play' |'playing' |'pointercancel' |'pointerdown' |'pointerenter' |'pointerleave' |'pointermove' |'pointerout' |'pointerover' |'pointerup' |'popstate' |'progress' |'propertychange' |'ratechange' |'readystatechange' |'reset' |'resize' |'responsive' |'rightclick' |'scroll' |'seeked' |'seeking' |'select' |'selectionchange' |'selectstart' |'sizechanged' |'sourceclosed' |'sourceended' |'sourceopen' |'stalled' |'statechange' |'storage' |'submit' |'suspend' |'text' |'timeupdate' |'touchcancel' |'touchend' |'touchmove' |'touchstart' |'unload' |'unresponsive' |'update' |'updateend' |'updatefound' |'updatestart' |'visibilitychange' |'volumechange' |'waiting' |'wheel' ;
  let EventType : {
    ABORT : 'abort' ,
    ACTIVATE : 'activate' ,
    AFTERPRINT : 'afterprint' ,
    ANIMATIONEND : EventType ,
    ANIMATIONITERATION : EventType ,
    ANIMATIONSTART : EventType ,
    APPINSTALLED : 'appinstalled' ,
    AUXCLICK : 'auxclick' ,
    BEFORECOPY : 'beforecopy' ,
    BEFORECUT : 'beforecut' ,
    BEFOREINPUT : 'beforeinput' ,
    BEFOREINSTALLPROMPT : 'beforeinstallprompt' ,
    BEFOREPASTE : 'beforepaste' ,
    BEFOREPRINT : 'beforeprint' ,
    BEFOREUNLOAD : 'beforeunload' ,
    BLUR : 'blur' ,
    CANPLAY : 'canplay' ,
    CANPLAYTHROUGH : 'canplaythrough' ,
    CHANGE : 'change' ,
    CLICK : 'click' ,
    COMPOSITIONEND : 'compositionend' ,
    COMPOSITIONSTART : 'compositionstart' ,
    COMPOSITIONUPDATE : 'compositionupdate' ,
    CONNECT : 'connect' ,
    CONSOLEMESSAGE : 'consolemessage' ,
    CONTEXTMENU : 'contextmenu' ,
    CONTROLLERCHANGE : 'controllerchange' ,
    COPY : 'copy' ,
    CUT : 'cut' ,
    DBLCLICK : 'dblclick' ,
    DEACTIVATE : 'deactivate' ,
    DEVICECHANGE : 'devicechange' ,
    DEVICEMOTION : 'devicemotion' ,
    DEVICEORIENTATION : 'deviceorientation' ,
    DOMATTRMODIFIED : 'DOMAttrModified' ,
    DOMCHARACTERDATAMODIFIED : 'DOMCharacterDataModified' ,
    DOMCONTENTLOADED : 'DOMContentLoaded' ,
    DOMNODEINSERTED : 'DOMNodeInserted' ,
    DOMNODEINSERTEDINTODOCUMENT : 'DOMNodeInsertedIntoDocument' ,
    DOMNODEREMOVED : 'DOMNodeRemoved' ,
    DOMNODEREMOVEDFROMDOCUMENT : 'DOMNodeRemovedFromDocument' ,
    DOMSUBTREEMODIFIED : 'DOMSubtreeModified' ,
    DRAG : 'drag' ,
    DRAGEND : 'dragend' ,
    DRAGENTER : 'dragenter' ,
    DRAGLEAVE : 'dragleave' ,
    DRAGOVER : 'dragover' ,
    DRAGSTART : 'dragstart' ,
    DROP : 'drop' ,
    DURATIONCHANGE : 'durationchange' ,
    EMPTIED : 'emptied' ,
    ENDED : 'ended' ,
    ERROR : 'error' ,
    EXIT : 'exit' ,
    FETCH : 'fetch' ,
    FOCUS : 'focus' ,
    FOCUSIN : 'focusin' ,
    FOCUSOUT : 'focusout' ,
    FOREIGNFETCH : 'foreignfetch' ,
    GOTPOINTERCAPTURE : 'gotpointercapture' ,
    HASHCHANGE : 'hashchange' ,
    HELP : 'help' ,
    INPUT : 'input' ,
    INSTALL : 'install' ,
    KEYDOWN : 'keydown' ,
    KEYPRESS : 'keypress' ,
    KEYUP : 'keyup' ,
    LOAD : 'load' ,
    LOADABORT : 'loadabort' ,
    LOADCOMMIT : 'loadcommit' ,
    LOADEDDATA : 'loadeddata' ,
    LOADEDMETADATA : 'loadedmetadata' ,
    LOADREDIRECT : 'loadredirect' ,
    LOADSTART : 'loadstart' ,
    LOADSTOP : 'loadstop' ,
    LOSECAPTURE : 'losecapture' ,
    LOSTPOINTERCAPTURE : 'lostpointercapture' ,
    MESSAGE : 'message' ,
    MESSAGEERROR : 'messageerror' ,
    MOUSECANCEL : 'mousecancel' ,
    MOUSEDOWN : 'mousedown' ,
    MOUSEENTER : 'mouseenter' ,
    MOUSELEAVE : 'mouseleave' ,
    MOUSEMOVE : 'mousemove' ,
    MOUSEOUT : 'mouseout' ,
    MOUSEOVER : 'mouseover' ,
    MOUSEUP : 'mouseup' ,
    MSGESTURECHANGE : 'MSGestureChange' ,
    MSGESTUREEND : 'MSGestureEnd' ,
    MSGESTUREHOLD : 'MSGestureHold' ,
    MSGESTURESTART : 'MSGestureStart' ,
    MSGESTURETAP : 'MSGestureTap' ,
    MSGOTPOINTERCAPTURE : 'MSGotPointerCapture' ,
    MSINERTIASTART : 'MSInertiaStart' ,
    MSLOSTPOINTERCAPTURE : 'MSLostPointerCapture' ,
    MSPOINTERCANCEL : 'MSPointerCancel' ,
    MSPOINTERDOWN : 'MSPointerDown' ,
    MSPOINTERENTER : 'MSPointerEnter' ,
    MSPOINTERHOVER : 'MSPointerHover' ,
    MSPOINTERLEAVE : 'MSPointerLeave' ,
    MSPOINTERMOVE : 'MSPointerMove' ,
    MSPOINTEROUT : 'MSPointerOut' ,
    MSPOINTEROVER : 'MSPointerOver' ,
    MSPOINTERUP : 'MSPointerUp' ,
    OFFLINE : 'offline' ,
    ONLINE : 'online' ,
    ORIENTATIONCHANGE : 'orientationchange' ,
    PAGEHIDE : 'pagehide' ,
    PAGESHOW : 'pageshow' ,
    PASTE : 'paste' ,
    PAUSE : 'pause' ,
    PLAY : 'play' ,
    PLAYING : 'playing' ,
    POINTERCANCEL : 'pointercancel' ,
    POINTERDOWN : 'pointerdown' ,
    POINTERENTER : 'pointerenter' ,
    POINTERLEAVE : 'pointerleave' ,
    POINTERMOVE : 'pointermove' ,
    POINTEROUT : 'pointerout' ,
    POINTEROVER : 'pointerover' ,
    POINTERUP : 'pointerup' ,
    POPSTATE : 'popstate' ,
    PROGRESS : 'progress' ,
    PROPERTYCHANGE : 'propertychange' ,
    RATECHANGE : 'ratechange' ,
    READYSTATECHANGE : 'readystatechange' ,
    RESET : 'reset' ,
    RESIZE : 'resize' ,
    RESPONSIVE : 'responsive' ,
    RIGHTCLICK : 'rightclick' ,
    SCROLL : 'scroll' ,
    SEEKED : 'seeked' ,
    SEEKING : 'seeking' ,
    SELECT : 'select' ,
    SELECTIONCHANGE : 'selectionchange' ,
    SELECTSTART : 'selectstart' ,
    SIZECHANGED : 'sizechanged' ,
    SOURCECLOSED : 'sourceclosed' ,
    SOURCEENDED : 'sourceended' ,
    SOURCEOPEN : 'sourceopen' ,
    STALLED : 'stalled' ,
    STATECHANGE : 'statechange' ,
    STORAGE : 'storage' ,
    SUBMIT : 'submit' ,
    SUSPEND : 'suspend' ,
    TEXT : 'text' ,
    TEXTINPUT : EventType ,
    TIMEUPDATE : 'timeupdate' ,
    TOUCHCANCEL : 'touchcancel' ,
    TOUCHEND : 'touchend' ,
    TOUCHMOVE : 'touchmove' ,
    TOUCHSTART : 'touchstart' ,
    TRANSITIONEND : EventType ,
    UNLOAD : 'unload' ,
    UNRESPONSIVE : 'unresponsive' ,
    UPDATE : 'update' ,
    UPDATEEND : 'updateend' ,
    UPDATEFOUND : 'updatefound' ,
    UPDATESTART : 'updatestart' ,
    VISIBILITYCHANGE : 'visibilitychange' ,
    VOLUMECHANGE : 'volumechange' ,
    WAITING : 'waiting' ,
    WHEEL : 'wheel' ,
  };
}
declare module 'goog:goog.events.EventType' {
  import EventType = ಠ_ಠ.clutz.goog.events.EventType;
  export default EventType;
}
// Generated from events/eventtype.js
declare namespace ಠ_ಠ.clutz.goog.events.EventTypeHelpers {
}
declare module 'goog:goog.events.EventTypeHelpers' {
  import EventTypeHelpers = ಠ_ಠ.clutz.goog.events.EventTypeHelpers;
  export = EventTypeHelpers;
}
// Generated from events/eventtype.js
declare namespace ಠ_ಠ.clutz.goog.events.MouseAsMouseEventType {
  let MOUSECANCEL : ಠ_ಠ.clutz.goog.events.EventType ;
  let MOUSEDOWN : ಠ_ಠ.clutz.goog.events.EventType ;
  let MOUSEENTER : ಠ_ಠ.clutz.goog.events.EventType ;
  let MOUSELEAVE : ಠ_ಠ.clutz.goog.events.EventType ;
  let MOUSEMOVE : ಠ_ಠ.clutz.goog.events.EventType ;
  let MOUSEOUT : ಠ_ಠ.clutz.goog.events.EventType ;
  let MOUSEOVER : ಠ_ಠ.clutz.goog.events.EventType ;
  let MOUSEUP : ಠ_ಠ.clutz.goog.events.EventType ;
}
declare module 'goog:goog.events.MouseAsMouseEventType' {
  import MouseAsMouseEventType = ಠ_ಠ.clutz.goog.events.MouseAsMouseEventType;
  export = MouseAsMouseEventType;
}
// Generated from events/eventtype.js
declare namespace ಠ_ಠ.clutz.goog.events {
  /**
   * Mapping of mouse event names to underlying browser event names.
   */
  type MouseEvents = { MOUSECANCEL : string , MOUSEDOWN : string , MOUSEENTER : string , MOUSELEAVE : string , MOUSEMOVE : string , MOUSEOUT : string , MOUSEOVER : string , MOUSEUP : string } ;
}
declare module 'goog:goog.events.MouseEvents' {
  import MouseEvents = ಠ_ಠ.clutz.goog.events.MouseEvents;
  export default MouseEvents;
}
// Generated from events/eventtype.js
declare namespace ಠ_ಠ.clutz.goog.events.PointerAsMouseEventType {
  let MOUSECANCEL : ಠ_ಠ.clutz.goog.events.PointerFallbackEventType ;
  let MOUSEDOWN : ಠ_ಠ.clutz.goog.events.PointerFallbackEventType ;
  let MOUSEENTER : ಠ_ಠ.clutz.goog.events.PointerFallbackEventType ;
  let MOUSELEAVE : ಠ_ಠ.clutz.goog.events.PointerFallbackEventType ;
  let MOUSEMOVE : ಠ_ಠ.clutz.goog.events.PointerFallbackEventType ;
  let MOUSEOUT : ಠ_ಠ.clutz.goog.events.PointerFallbackEventType ;
  let MOUSEOVER : ಠ_ಠ.clutz.goog.events.PointerFallbackEventType ;
  let MOUSEUP : ಠ_ಠ.clutz.goog.events.PointerFallbackEventType ;
}
declare module 'goog:goog.events.PointerAsMouseEventType' {
  import PointerAsMouseEventType = ಠ_ಠ.clutz.goog.events.PointerAsMouseEventType;
  export = PointerAsMouseEventType;
}
// Generated from events/eventtype.js
declare namespace ಠ_ಠ.clutz.goog.events {
  /**
   * An alias for `goog.events.EventType.TOUCH*` event types that is overridden by
   * corresponding `POINTER*` event types.
   */
  type PointerAsTouchEventType = string &{clutzEnumBrand: never} ;
  let PointerAsTouchEventType : {
    TOUCHCANCEL : PointerAsTouchEventType ,
    TOUCHEND : PointerAsTouchEventType ,
    TOUCHMOVE : PointerAsTouchEventType ,
    TOUCHSTART : PointerAsTouchEventType ,
  };
}
declare module 'goog:goog.events.PointerAsTouchEventType' {
  import PointerAsTouchEventType = ಠ_ಠ.clutz.goog.events.PointerAsTouchEventType;
  export default PointerAsTouchEventType;
}
// Generated from events/eventtype.js
declare namespace ಠ_ಠ.clutz.goog.events {
  /**
   * Constants for pointer event names that fall back to corresponding mouse event
   * names on unsupported platforms. These are intended to be drop-in replacements
   * for corresponding values in `goog.events.EventType`.
   */
  type PointerFallbackEventType = string &{clutzEnumBrand: never} ;
  let PointerFallbackEventType : {
    POINTERCANCEL : PointerFallbackEventType ,
    POINTERDOWN : PointerFallbackEventType ,
    POINTERENTER : PointerFallbackEventType ,
    POINTERLEAVE : PointerFallbackEventType ,
    POINTERMOVE : PointerFallbackEventType ,
    POINTEROUT : PointerFallbackEventType ,
    POINTEROVER : PointerFallbackEventType ,
    POINTERUP : PointerFallbackEventType ,
  };
}
declare module 'goog:goog.events.PointerFallbackEventType' {
  import PointerFallbackEventType = ಠ_ಠ.clutz.goog.events.PointerFallbackEventType;
  export default PointerFallbackEventType;
}
// Generated from events/eventtype.js
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

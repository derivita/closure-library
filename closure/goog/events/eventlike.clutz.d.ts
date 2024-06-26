//!! generated by clutz.
// Generated from events/eventlike.js
declare namespace ಠ_ಠ.clutz.goog.events {
  /**
   * A typedef for event like objects that are dispatchable via the
   * goog.events.dispatchEvent function. strings are treated as the type for a
   * goog.events.Event. Objects are treated as an extension of a new
   * goog.events.Event with the type property of the object being used as the type
   * of the Event.
   */
  type EventLike = string | GlobalObject | null | ಠ_ಠ.clutz.goog.events.Event | ಠ_ಠ.clutz.goog.events.EventId ;
}
declare module 'goog:goog.events.EventLike' {
  import EventLike = ಠ_ಠ.clutz.goog.events.EventLike;
  export default EventLike;
}

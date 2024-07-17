import type { Event } from './event.js';
import type { EventId } from './eventid.js';
/**
 * A typedef for event like objects that are dispatchable via the
 * goog.events.dispatchEvent function. strings are treated as the type for a
 * goog.events.Event. Objects are treated as an extension of a new
 * goog.events.Event with the type property of the object being used as the type
 * of the Event.
 */
export type EventLike = string | object | Event | EventId | null;

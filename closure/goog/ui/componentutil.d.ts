import { MouseEvents } from '../events/mouseevents.js';
import type { Component } from './component.js';
/**
 *
 * @return The browser events that should be listened to for the given mouse events.
 */
export declare function getMouseEventType(component: Component): MouseEvents;

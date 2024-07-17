import { Event } from '../../events/event.js';
import PageVisibilityState from './pagevisibilitystate.js';
/**
 * A page visibility change event.
 */
export default class PageVisibilityEvent extends Event {
    /**
     * Constructs a new PageVisibilityEvent.
     */
    constructor(hidden: boolean, visibilityState: PageVisibilityState);
    /**
     * Whether the page is hidden.
     */
    hidden: boolean;
    /**
     * A more detailed visibility state.
     */
    visibilityState: PageVisibilityState;
}

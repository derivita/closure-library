import { Disposable } from '../../disposable/disposable.js';
import { LivePriority } from './attributes.js';
import * as dom from '../../dom/dom.js';
/**
 * Class that allows messages to be spoken by assistive technologies that the
 * user may have active.
 */
export declare class Announcer extends Disposable {
    /**
     * Class that allows messages to be spoken by assistive technologies that the
     * user may have active.
     * @param opt_domHelper DOM helper.
     */
    constructor(opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_a11y_aria_announcer_Announcer;
    disposeInternal(): void;
    /**
     * Announce a message to be read by any assistive technologies the user may
     * have active.
     * @param message The message to announce to screen readers.
     * @param opt_priority The priority of the message. Defaults to POLITE.
     */
    say(message: string, opt_priority?: LivePriority | null): void;
    /**
     * Returns the id value for an aria-live region for a given priority.
     * @param priority The required priority.
     * @return The generated id on the liveRegion.
     */
    getLiveRegionId(priority: LivePriority): string;
}

import { Role } from '../a11y/aria/roles.js';
import * as dom from '../dom/dom.js';
import { Zippy } from './zippy.js';
/**
 * Zippy widget. Expandable/collapsible container, clicking the header toggles
 * the visibility of the content.
 */
export declare class AnimatedZippy extends Zippy {
    /**
     * Zippy widget. Expandable/collapsible container, clicking the header toggles
     * the visibility of the content.
     * @param header Header element, either element reference, string id or null if no header exists.
     * @param content Content element, either element reference or string id.
     * @param opt_expanded Initial expanded/visibility state. Defaults to false.
     * @param opt_domHelper An optional DOM helper.
     * @param opt_role ARIA role, default TAB.
     */
    constructor(header: Element | string | null | null, content: Element | string | null, opt_expanded?: boolean, opt_domHelper?: dom.DomHelper | null, opt_role?: Role | null);
    private noStructuralTyping_closure_goog_ui_animatedzippy_AnimatedZippy;
    /**
     * Constants for event names.
     */
    static Events: {
        TOGGLE_ANIMATION_BEGIN: string;
        TOGGLE_ANIMATION_END: string;
    };
    /**
     * Duration of expand/collapse animation, in milliseconds.
     */
    animationDuration: number;
    /**
     * Acceleration function for expand/collapse animation.
     */
    animationAcceleration: Function;
    isBusy(): boolean;
    /**
     * Sets expanded state.
     * @param expanded Expanded/visibility state.
     */
    setExpanded(expanded: boolean): void;
}

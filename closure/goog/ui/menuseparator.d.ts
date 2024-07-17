import { Separator } from './separator.js';
import type { DomHelper } from '../dom/dom.js';
/**
 * Class representing a menu separator.  A menu separator extends {@link
 * Separator} by always setting its renderer to {@link
 * MenuSeparatorRenderer}.
 */
export declare class MenuSeparator extends Separator {
    /**
     * Class representing a menu separator.  A menu separator extends {@link
     * Separator} by always setting its renderer to {@link
     * MenuSeparatorRenderer}.
     * @param opt_domHelper Optional DOM helper used for document interactions.
     */
    constructor(opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_menuseparator_MenuSeparator;
}

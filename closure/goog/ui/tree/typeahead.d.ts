import type { BrowserEvent } from '../../events/browserevent.js';
import type { BaseNode } from './basenode.js';
/**
 * Constructs a TypeAhead object.
 */
export declare class TypeAhead {
    /**
     * Constructs a TypeAhead object.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_tree_typeahead_TypeAhead;
    /**
     * Handles navigation keys.
     * @param e The browser event.
     * @return The handled value.
     */
    handleNavigation(e: BrowserEvent | null): boolean;
    /**
     * Handles the character presses.
     * @param e The browser event. Expected event type is goog.events.KeyHandler.EventType.KEY.
     * @return The handled value.
     */
    handleTypeAheadChar(e: BrowserEvent | null): boolean;
    /**
     * Adds or updates the given node in the nodemap. The label text is used as a
     * key and the node id is used as a value. In the case that the key already
     * exists, such as when more than one node exists with the same label, then this
     * function creates an array to hold the multiple nodes.
     * @param node Node to be added or updated.
     */
    setNodeInMap(node: BaseNode | null): void;
    /**
     * Removes the given node from the nodemap.
     * @param node Node to be removed.
     */
    removeNodeFromMap(node: BaseNode | null): void;
    /**
     * Clears the typeahead buffer.
     */
    clear(): void;
}
export declare namespace TypeAhead {
    /**
     * Enum for offset values that are used for ctrl-key navigation among the
     * multiple matches of a given typeahead buffer.
     */
    type Offset = number;
    const Offset: {
        DOWN: number;
        UP: number;
    };
}

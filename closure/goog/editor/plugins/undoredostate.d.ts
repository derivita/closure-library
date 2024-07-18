import { EventTarget } from '../../events/eventtarget.js';
/**
 * Represents an undo and redo action for a particular state transition.
 */
export declare class UndoRedoState extends EventTarget {
    /**
     * Represents an undo and redo action for a particular state transition.
     * @param asynchronous Whether the undo or redo actions for this state complete asynchronously. If true, then this state must fire an ACTION_COMPLETED event when undo or redo is complete.
     */
    constructor(asynchronous: boolean);
    private noStructuralTyping_closure_goog_editor_plugins_undoredostate_UndoRedoState;
    /**
     * Event type for events indicating that this state has completed an undo or
     * redo operation.
     */
    static ACTION_COMPLETED: string;
    isAsynchronous(): boolean;
    /**
     * Undoes the action represented by this state.
     */
    undo(): void;
    /**
     * Redoes the action represented by this state.
     */
    redo(): void;
    /**
     * Checks if two undo-redo states are the same.
     * @param state The state to compare.
     * @return Wether the two states are equal.
     */
    equals(state: UndoRedoState | null): boolean;
}

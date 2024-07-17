import { UndoRedoState } from './undoredostate.js';
import { EventTarget } from '../../events/eventtarget.js';
/**
 * Manages undo and redo operations through a series of `UndoRedoState`s
 * maintained on undo and redo stacks.
 */
export declare class UndoRedoManager extends EventTarget {
    /**
     * Manages undo and redo operations through a series of `UndoRedoState`s
     * maintained on undo and redo stacks.
     */
    constructor();
    private noStructuralTyping_closure_goog_editor_plugins_undoredomanager_UndoRedoManager;
    /**
     * Set the max undo stack depth (not the real memory usage).
     * @param depth Depth of the stack.
     */
    setMaxUndoDepth(depth: number): void;
    /**
     * Add state to the undo stack. This clears the redo stack.
     * @param state The state to add to the undo stack.
     */
    addState(state: UndoRedoState | null): void;
    /**
     * Performs the undo operation of the state at the top of the undo stack, moving
     * that state to the top of the redo stack. If the undo stack is empty, does
     * nothing.
     */
    undo(): void;
    /**
     * Performs the redo operation of the state at the top of the redo stack, moving
     * that state to the top of the undo stack. If redo undo stack is empty, does
     * nothing.
     */
    redo(): void;
    hasUndoState(): boolean;
    hasRedoState(): boolean;
    /**
     * Clears the undo and redo stacks.
     */
    clearHistory(): void;
    undoPeek(): UndoRedoState | undefined | null;
    redoPeek(): UndoRedoState | undefined | null;
}
export declare namespace UndoRedoManager {
    /**
     * Event types for the events dispatched by undo-redo manager.
     */
    enum EventType {
        STATE_CHANGE = "state_change",
        STATE_ADDED = "state_added",
        BEFORE_UNDO = "before_undo",
        BEFORE_REDO = "before_redo"
    }
}

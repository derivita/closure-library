//!! generated by clutz.
// Generated from editor/plugins/undoredomanager.js
declare namespace ಠ_ಠ.clutz.goog.editor.plugins {
  /**
   * Manages undo and redo operations through a series of `UndoRedoState`s
   * maintained on undo and redo stacks.
   */
  class UndoRedoManager extends ಠ_ಠ.clutz.goog.events.EventTarget {
    private noStructuralTyping_goog_editor_plugins_UndoRedoManager : any;
    /**
     * Manages undo and redo operations through a series of `UndoRedoState`s
     * maintained on undo and redo stacks.
     */
    constructor ( ) ;
    /**
     * Add state to the undo stack. This clears the redo stack.
     * @param state The state to add to the undo stack.
     */
    addState (state : ಠ_ಠ.clutz.goog.editor.plugins.UndoRedoState | null ) : void ;
    clearHistory ( ) : void ;
    hasRedoState ( ) : boolean ;
    hasUndoState ( ) : boolean ;
    redo ( ) : void ;
    redoPeek ( ) : ಠ_ಠ.clutz.goog.editor.plugins.UndoRedoState | null | undefined ;
    /**
     * Set the max undo stack depth (not the real memory usage).
     * @param depth Depth of the stack.
     */
    setMaxUndoDepth (depth : number ) : void ;
    undo ( ) : void ;
    undoPeek ( ) : ಠ_ಠ.clutz.goog.editor.plugins.UndoRedoState | null | undefined ;
  }
}
declare module 'goog:goog.editor.plugins.UndoRedoManager' {
  import UndoRedoManager = ಠ_ಠ.clutz.goog.editor.plugins.UndoRedoManager;
  export default UndoRedoManager;
}
// Generated from editor/plugins/undoredomanager.js
declare namespace ಠ_ಠ.clutz.goog.editor.plugins.UndoRedoManager {
  /**
   * Event types for the events dispatched by undo-redo manager.
   */
  /**
   * Event types for the events dispatched by undo-redo manager.
   */
  enum EventType {
    BEFORE_REDO = 'before_redo' ,
    BEFORE_UNDO = 'before_undo' ,
    STATE_ADDED = 'state_added' ,
    STATE_CHANGE = 'state_change' ,
  }
}
declare module 'goog:goog.editor.plugins.UndoRedoManager.EventType' {
  import EventType = ಠ_ಠ.clutz.goog.editor.plugins.UndoRedoManager.EventType;
  export default EventType;
}

//!! generated by clutz.
// Generated from testing/editor/fieldmock.js
declare namespace ಠ_ಠ.clutz.goog.testing.editor {
  /**
   * Mock of goog.editor.Field.
   */
  class FieldMock extends ಠ_ಠ.clutz.goog.testing.LooseMock {
    private noStructuralTyping_goog_testing_editor_FieldMock : any;
    /**
     * Mock of goog.editor.Field.
     * @param opt_window Window the field would edit.  Defaults to `window`.
     * @param opt_appWindow "AppWindow" of the field, which can be different from `opt_window` when mocking a field that uses an iframe. Defaults to `opt_window`.
     * @param opt_range An object (mock or real) to be returned by getRange(). If omitted, a new goog.dom.Range is created from the window every time getRange() is called.
     */
    constructor (opt_window ? : Window | null , opt_appWindow ? : Window | null , opt_range ? : ಠ_ಠ.clutz.goog.dom.AbstractRange | null ) ;
    inModalMode ( ) : boolean ;
    isUneditable ( ) : boolean ;
    setModalMode (mode : boolean ) : void ;
    setUneditable (isUneditable : boolean ) : void ;
  }
}
declare module 'goog:goog.testing.editor.FieldMock' {
  import FieldMock = ಠ_ಠ.clutz.goog.testing.editor.FieldMock;
  export default FieldMock;
}

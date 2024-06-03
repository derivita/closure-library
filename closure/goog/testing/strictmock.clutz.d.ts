//!! generated by clutz.
// Generated from testing/strictmock.js
declare namespace ಠ_ಠ.clutz.goog.testing {
  /**
   * This is a mock that verifies that methods are called in the order that they
   * are specified during the recording phase. Since it verifies order, it
   * follows 'fail fast' semantics. If it detects a deviation from the
   * expectations, it will throw an exception and not wait for verify to be
   * called.
   */
  class StrictMock extends ಠ_ಠ.clutz.goog.testing.Mock {
    private noStructuralTyping_goog_testing_StrictMock : any;
    /**
     * This is a mock that verifies that methods are called in the order that they
     * are specified during the recording phase. Since it verifies order, it
     * follows 'fail fast' semantics. If it detects a deviation from the
     * expectations, it will throw an exception and not wait for verify to be
     * called.
     * @param objectToMock The object that should be mocked, or the constructor of an object to mock.
     * @param opt_mockStaticMethods An optional argument denoting that a mock should be constructed from the static functions of a class.
     * @param opt_createProxy An optional argument denoting that a proxy for the target mock should be created.
     */
    constructor (objectToMock : GlobalObject | null , opt_mockStaticMethods ? : boolean , opt_createProxy ? : boolean ) ;
    $recordCall (name ? : any , args ? : any ) : any ;
    $recordExpectation ( ) : void ;
    $reset ( ) : void ;
    $verify ( ) : void ;
    $waitAndVerify ( ) : any ;
  }
}
declare module 'goog:goog.testing.StrictMock' {
  import StrictMock = ಠ_ಠ.clutz.goog.testing.StrictMock;
  export default StrictMock;
}

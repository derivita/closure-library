//!! generated by clutz.
// Generated from testing/loosemock.js
declare namespace ಠ_ಠ.clutz.goog.testing {
  /**
   * This class is an ordered collection of expectations for one method. Since
   * the loose mock does most of its verification at the time of $verify, this
   * class is necessary to manage the return/throw behavior when the mock is
   * being called.
   */
  class LooseExpectationCollection {
    private noStructuralTyping_goog_testing_LooseExpectationCollection : any;
    /**
     * Adds an expectation to this collection.
     * @param expectation The expectation to add.
     */
    addExpectation (expectation : ಠ_ಠ.clutz.goog.testing.MockExpectation ) : void ;
    /**
     * Gets the list of expectations in this collection.
     */
    getExpectations ( ) : ಠ_ಠ.clutz.goog.testing.MockExpectation [] ;
  }
}
declare module 'goog:goog.testing.LooseExpectationCollection' {
  import LooseExpectationCollection = ಠ_ಠ.clutz.goog.testing.LooseExpectationCollection;
  export default LooseExpectationCollection;
}
// Generated from testing/loosemock.js
declare namespace ಠ_ಠ.clutz.goog.testing {
  /**
   * This is a mock that does not care about the order of method calls. As a
   * result, it won't throw exceptions until verify() is called. The only
   * exception is that if a method is called that has no expectations, then an
   * exception will be thrown.
   */
  class LooseMock extends ಠ_ಠ.clutz.goog.testing.Mock {
    private noStructuralTyping_goog_testing_LooseMock : any;
    /**
     * This is a mock that does not care about the order of method calls. As a
     * result, it won't throw exceptions until verify() is called. The only
     * exception is that if a method is called that has no expectations, then an
     * exception will be thrown.
     * @param objectToMock The object that should be mocked, or the constructor of an object to mock.
     * @param opt_ignoreUnexpectedCalls Whether to ignore unexpected calls.
     * @param opt_mockStaticMethods An optional argument denoting that a mock should be constructed from the static functions of a class.
     * @param opt_createProxy An optional argument denoting that a proxy for the target mock should be created.
     */
    constructor (objectToMock : GlobalObject | null , opt_ignoreUnexpectedCalls ? : boolean , opt_mockStaticMethods ? : boolean , opt_createProxy ? : boolean ) ;
    $recordCall (name ? : any , args ? : any ) : any ;
    $recordExpectation ( ) : void ;
    $replay ( ) : void ;
    $reset ( ) : void ;
    /**
     * A setter for the ignoreUnexpectedCalls field.
     * @param ignoreUnexpectedCalls Whether to ignore unexpected calls.
     */
    $setIgnoreUnexpectedCalls (ignoreUnexpectedCalls : boolean ) : ಠ_ಠ.clutz.goog.testing.LooseMock ;
    $verify ( ) : void ;
    $waitAndVerify ( ) : any ;
  }
}
declare module 'goog:goog.testing.LooseMock' {
  import LooseMock = ಠ_ಠ.clutz.goog.testing.LooseMock;
  export default LooseMock;
}

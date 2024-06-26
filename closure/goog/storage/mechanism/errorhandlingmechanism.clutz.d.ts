//!! generated by clutz.
// Generated from storage/mechanism/errorhandlingmechanism.js
declare namespace ಠ_ಠ.clutz.goog.storage.mechanism {
  /**
   * Wraps a storage mechanism with a custom error handler.
   */
  class ErrorHandlingMechanism extends ಠ_ಠ.clutz.goog.storage.mechanism.Mechanism {
    private noStructuralTyping_goog_storage_mechanism_ErrorHandlingMechanism : any;
    /**
     * Wraps a storage mechanism with a custom error handler.
     * @param mechanism Underlying storage mechanism.
     * @param errorHandler An error handler.
     */
    constructor (mechanism : ಠ_ಠ.clutz.goog.storage.mechanism.Mechanism , errorHandler : ಠ_ಠ.clutz.goog.storage.mechanism.ErrorHandlingMechanism.ErrorHandler ) ;
    get (key ? : any ) : any ;
    remove (key ? : any ) : void ;
    set (key ? : any , value ? : any ) : void ;
  }
}
// Generated from storage/mechanism/errorhandlingmechanism.js
declare namespace ಠ_ಠ.clutz.goog.storage.mechanism.ErrorHandlingMechanism {
  type ErrorHandler = (a : GlobalError | string , b : ಠ_ಠ.clutz.goog.storage.mechanism.ErrorHandlingMechanism.Operation , c : string , d ? : any ) => any ;
  /**
   * Valid storage mechanism operations.
   */
  enum Operation {
    GET = 'get' ,
    REMOVE = 'remove' ,
    SET = 'set' ,
  }
}
declare module 'goog:goog.storage.mechanism.ErrorHandlingMechanism' {
  import ErrorHandlingMechanism = ಠ_ಠ.clutz.goog.storage.mechanism.ErrorHandlingMechanism;
  export default ErrorHandlingMechanism;
}

//!! generated by clutz.
// Generated from testing/functioncall.js
declare namespace ಠ_ಠ.clutz.goog.testing {
  export import FunctionCall = ಠ_ಠ.clutz.module$contents$goog$testing$FunctionCall_FunctionCall ;
}
declare module 'goog:goog.testing.FunctionCall' {
  import FunctionCall = ಠ_ಠ.clutz.goog.testing.FunctionCall;
  export default FunctionCall;
}
// Generated from testing/functioncall.js
declare namespace ಠ_ಠ.clutz {
  /**
   * Struct for a single function call.
   */
  class module$contents$goog$testing$FunctionCall_FunctionCall {
    private noStructuralTyping_module$contents$goog$testing$FunctionCall_FunctionCall : any;
    /**
     * Struct for a single function call.
     * @param func The called function.
     * @param thisContext `this` context of called function.
     * @param args Arguments of the called function.
     * @param ret Return value of the function or undefined in case of error.
     * @param error The error thrown by the function or null if none.
     */
    constructor (func : Function , thisContext : GlobalObject , args : IArguments , ret : any , error : any ) ;
    arguments_ : any ;
    error_ : any ;
    function_ ( ...a : any [] ) : any ;
    returnValue_ : any ;
    thisContext_ : GlobalObject ;
    /**
     * Returns the nth argument of the called function.
     * @param index 0-based index of the argument.
     */
    getArgument (index : number ) : any ;
    getArguments ( ) : any [] ;
    getError ( ) : any ;
    getFunction ( ) : Function ;
    getReturnValue ( ) : any ;
    getThis ( ) : GlobalObject ;
  }
}
declare namespace ಠ_ಠ.clutz {
  export import module$exports$goog$testing$FunctionCall = ಠ_ಠ.clutz.module$contents$goog$testing$FunctionCall_FunctionCall ;
}

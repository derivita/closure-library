//!! generated by clutz.
// Generated from labs/testing/json_fuzzing.js
declare namespace ಠ_ಠ.clutz.goog.labs.testing {
  /**
   * The JSON fuzzing generator.
   */
  class JsonFuzzing {
    private noStructuralTyping_goog_labs_testing_JsonFuzzing : any;
    /**
     * The JSON fuzzing generator.
     * @param opt_options Configuration for the fuzzing json generator.
     * @param opt_seed The seed for the random generator.
     */
    constructor (opt_options ? : ಠ_ಠ.clutz.goog.labs.testing.JsonFuzzing.Options , opt_seed ? : number ) ;
    /**
     * Gets a fuzzily-generated JSON object (an array).
     *
     * TODO(user): whitespaces
     */
    newArray ( ) : any [] ;
    /**
     * Gets a new integer.
     * @param min Inclusive
     * @param max Exclusive
     */
    nextInt (min : number , max : number ) : number ;
  }
}
// Generated from labs/testing/json_fuzzing.js
declare namespace ಠ_ಠ.clutz.goog.labs.testing.JsonFuzzing {
  type Options = { arraySize : number , jsonSize : number , maxDepth : number , numFields : number } ;
}
declare module 'goog:goog.labs.testing.JsonFuzzing' {
  import JsonFuzzing = ಠ_ಠ.clutz.goog.labs.testing.JsonFuzzing;
  export default JsonFuzzing;
}

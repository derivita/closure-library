//!! generated by clutz.
// Generated from structs/inversionmap.js
declare namespace ಠ_ಠ.clutz.goog.structs {
  /**
   * Maps ranges to values.
   */
  class InversionMap < T = any > {
    private noStructuralTyping_goog_structs_InversionMap : any;
    /**
     * Maps ranges to values.
     * @param rangeArray An array of monotonically increasing integer values, with at least one instance.
     * @param valueArray An array of corresponding values. Length must be the same as rangeArray.
     * @param opt_delta If true, saves only delta from previous value.
     */
    constructor (rangeArray : number [] | null , valueArray : T [] | null , opt_delta ? : boolean ) ;
    protected rangeArray : number [] | null ;
    protected values : T [] | null ;
    /**
     * Gets the value corresponding to a number from the inversion map.
     * @param intKey The number for which value needs to be retrieved from inversion map.
     */
    at (intKey : number ) : T | null ;
    /**
     * Gets the largest index such that rangeArray[index] <= intKey from the
     * inversion map.
     * @param intKey The probe for which rangeArray is searched.
     */
    protected getLeast (intKey : number ) : number ;
    /**
     * Splices a range -> value map into this inversion map.
     * @param rangeArray An array of monotonically increasing integer values, with at least one instance.
     * @param valueArray An array of corresponding values. Length must be the same as rangeArray.
     * @param opt_delta If true, saves only delta from previous value.
     */
    spliceInversion (rangeArray : number [] | null , valueArray : T [] | null , opt_delta ? : boolean ) : void ;
  }
}
declare module 'goog:goog.structs.InversionMap' {
  import InversionMap = ಠ_ಠ.clutz.goog.structs.InversionMap;
  export default InversionMap;
}

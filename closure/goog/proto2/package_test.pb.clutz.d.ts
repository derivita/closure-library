//!! generated by clutz.
// Generated from proto2/package_test.pb.js
declare namespace ಠ_ಠ.clutz.someprotopackage {
  /**
   * Message TestPackageTypes.
   */
  class TestPackageTypes extends ಠ_ಠ.clutz.goog.proto2.Message {
    private noStructuralTyping_someprotopackage_TestPackageTypes : any;
    /**
     * Message TestPackageTypes.
     */
    constructor ( ) ;
    clearOptionalInt32 ( ) : void ;
    clearOtherAll ( ) : void ;
    /**
     * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
     */
    clone ( ) : ಠ_ಠ.clutz.someprotopackage.TestPackageTypes ;
    getDescriptor ( ) : any ;
    /**
     * Gets the value of the optional_int32 field.
     */
    getOptionalInt32 ( ) : number | null ;
    /**
     * Gets the value of the optional_int32 field or the default value if not set.
     */
    getOptionalInt32OrDefault ( ) : number ;
    /**
     * Gets the value of the other_all field.
     */
    getOtherAll ( ) : ಠ_ಠ.clutz.proto2.TestAllTypes | null ;
    /**
     * Gets the value of the other_all field or the default value if not set.
     */
    getOtherAllOrDefault ( ) : ಠ_ಠ.clutz.proto2.TestAllTypes ;
    hasOptionalInt32 ( ) : boolean ;
    hasOtherAll ( ) : boolean ;
    optionalInt32Count ( ) : number ;
    otherAllCount ( ) : number ;
    /**
     * Sets the value of the optional_int32 field.
     * @param value The value.
     */
    setOptionalInt32 (value : number ) : void ;
    /**
     * Sets the value of the other_all field.
     * @param value The value.
     */
    setOtherAll (value : ಠ_ಠ.clutz.proto2.TestAllTypes ) : void ;
    static getDescriptor ( ) : any ;
  }
}
declare module 'goog:someprotopackage.TestPackageTypes' {
  import TestPackageTypes = ಠ_ಠ.clutz.someprotopackage.TestPackageTypes;
  export default TestPackageTypes;
}

//!! generated by clutz.
// Generated from testing/fs/blob.js
declare namespace ಠ_ಠ.clutz.goog.testing.fs {
  /**
   * A mock Blob object. The data is stored as an Array of bytes, a "byte" being a
   * JS number in the range 0-255.
   *
   * This blob simplifies writing test code because it has the toString() method
   * that returns immediately, while the File API only provides asynchronous
   * reads.
   */
  class Blob {
    private noStructuralTyping_goog_testing_fs_Blob : any;
    /**
     * A mock Blob object. The data is stored as an Array of bytes, a "byte" being a
     * JS number in the range 0-255.
     *
     * This blob simplifies writing test code because it has the toString() method
     * that returns immediately, while the File API only provides asynchronous
     * reads.
     * @param opt_data The data encapsulated by the blob.
     * @param opt_type The mime type of the blob.
     */
    constructor (opt_data ? : string | ( string | number | Uint8Array ) [] | null , opt_type ? : string ) ;
    size : number ;
    type : string ;
    /**
     * Creates a blob with bytes of a blob ranging from the optional start
     * parameter up to but not including the optional end parameter, and with a type
     * attribute that is the value of the optional contentType parameter.
     * @param opt_start The start byte offset.
     * @param opt_end The end point of a slice.
     * @param opt_contentType The type of the resulting Blob.
     */
    slice (opt_start ? : number , opt_end ? : number , opt_contentType ? : string ) : ಠ_ಠ.clutz.goog.testing.fs.Blob ;
    toArrayBuffer ( ) : ArrayBuffer ;
    toDataUrl ( ) : string ;
    toString ( ) : string ;
  }
}
declare module 'goog:goog.testing.fs.Blob' {
  import Blob = ಠ_ಠ.clutz.goog.testing.fs.Blob;
  export default Blob;
}

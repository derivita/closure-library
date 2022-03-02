//!! generated by clutz.
// Generated from crypt/aes.js
declare namespace ಠ_ಠ.clutz.goog.crypt {
  /**
   * Implementation of AES in JavaScript.
   * See http://en.wikipedia.org/wiki/Advanced_Encryption_Standard
   *
   * WARNING: This is ECB mode only. If you are encrypting something
   * longer than 16 bytes, or encrypting more than one value with the same key
   * (so basically, always) you need to use this with a block cipher mode of
   * operation.  See goog.crypt.Cbc.
   *
   * See http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation for more
   * information.
   */
  class Aes implements ಠ_ಠ.clutz.goog.crypt.BlockCipher {
    private noStructuralTyping_goog_crypt_Aes : any;
    /**
     * Implementation of AES in JavaScript.
     * See http://en.wikipedia.org/wiki/Advanced_Encryption_Standard
     *
     * WARNING: This is ECB mode only. If you are encrypting something
     * longer than 16 bytes, or encrypting more than one value with the same key
     * (so basically, always) you need to use this with a block cipher mode of
     * operation.  See goog.crypt.Cbc.
     *
     * See http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation for more
     * information.
     * @param key The key as an array of integers in {0, 255}. The key must have lengths of 16, 24, or 32 integers for 128-, 192-, or 256-bit encryption, respectively.
     */
    constructor (key : number [] ) ;
    /**
     * Block size, in bytes.  Fixed at 16 per AES spec.
     */
    BLOCK_SIZE : number ;
    decrypt (input ? : any ) : any ;
    encrypt (input ? : any ) : any ;
    static ENABLE_TEST_MODE : boolean ;
  }
}
declare module 'goog:goog.crypt.Aes' {
  import Aes = ಠ_ಠ.clutz.goog.crypt.Aes;
  export default Aes;
}

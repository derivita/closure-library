//!! generated by clutz.
// Generated from crypt/pbkdf2.js
declare namespace ಠ_ಠ.clutz.goog.crypt.pbkdf2 {
  /**
   * Derives key from password using PBKDF2-SHA1
   * @param password Byte array representation of the password from which the key is derived.
   * @param initialSalt Byte array representation of the salt.
   * @param iterations Number of interations when computing the key.
   * @param keyLength Length of the output key in bits. Must be multiple of 8.
   */
  function deriveKeySha1 (password : number [] , initialSalt : number [] , iterations : number , keyLength : number ) : number [] ;
}
declare module 'goog:goog.crypt.pbkdf2' {
  import pbkdf2 = ಠ_ಠ.clutz.goog.crypt.pbkdf2;
  export = pbkdf2;
}

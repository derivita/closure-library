//!! generated by clutz.
// Generated from vec/ray.js
declare namespace ಠ_ಠ.clutz.goog.vec {
  /**
   * Constructs a new ray with an optional origin and direction. If not specified,
   * the default is [0, 0, 0].
   */
  class Ray {
    private noStructuralTyping_goog_vec_Ray : any;
    /**
     * Constructs a new ray with an optional origin and direction. If not specified,
     * the default is [0, 0, 0].
     * @param opt_origin The optional origin.
     * @param opt_dir The optional direction.
     */
    constructor (opt_origin ? : ಠ_ಠ.clutz.goog.vec.Vec3.AnyType | null , opt_dir ? : ಠ_ಠ.clutz.goog.vec.Vec3.AnyType | null ) ;
    dir : ಠ_ಠ.clutz.goog.vec.Vec3.Float64 | null ;
    origin : ಠ_ಠ.clutz.goog.vec.Vec3.Float64 | null ;
    /**
     * Returns true if this ray is equal to the other ray.
     * @param other The other ray.
     */
    equals (other : ಠ_ಠ.clutz.goog.vec.Ray | null ) : boolean ;
    /**
     * Sets the origin and direction of the ray.
     * @param origin The new origin.
     * @param dir The new direction.
     */
    set (origin : ಠ_ಠ.clutz.goog.vec.AnyType | null , dir : ಠ_ಠ.clutz.goog.vec.AnyType | null ) : void ;
    /**
     * Sets the direction of the ray.
     * @param dir The new direction.
     */
    setDir (dir : ಠ_ಠ.clutz.goog.vec.AnyType | null ) : void ;
    /**
     * Sets the origin of the ray.
     * @param origin the new origin.
     */
    setOrigin (origin : ಠ_ಠ.clutz.goog.vec.AnyType | null ) : void ;
  }
}
declare module 'goog:goog.vec.Ray' {
  import Ray = ಠ_ಠ.clutz.goog.vec.Ray;
  export default Ray;
}

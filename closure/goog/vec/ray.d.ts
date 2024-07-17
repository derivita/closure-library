import * as Vec3 from './vec3.js';
import type { AnyType } from './vec.js';
/**
 * Constructs a new ray with an optional origin and direction. If not specified,
 * the default is [0, 0, 0].
 */
export declare class Ray {
    /**
     * Constructs a new ray with an optional origin and direction. If not specified,
     * the default is [0, 0, 0].
     * @param opt_origin The optional origin.
     * @param opt_dir The optional direction.
     */
    constructor(opt_origin?: Vec3.AnyType | null, opt_dir?: Vec3.AnyType | null);
    private noStructuralTyping_closure_goog_vec_ray_Ray;
    origin: Vec3.Float64 | null;
    dir: Vec3.Float64 | null;
    /**
     * Sets the origin and direction of the ray.
     * @param origin The new origin.
     * @param dir The new direction.
     */
    set(origin: AnyType | null, dir: AnyType | null): void;
    /**
     * Sets the origin of the ray.
     * @param origin the new origin.
     */
    setOrigin(origin: AnyType | null): void;
    /**
     * Sets the direction of the ray.
     * @param dir The new direction.
     */
    setDir(dir: AnyType | null): void;
    /**
     * Returns true if this ray is equal to the other ray.
     * @param other The other ray.
     * @return True if this ray is equal to the other ray.
     */
    equals(other: Ray | null): boolean;
}

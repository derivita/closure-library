import { Disposable } from '../disposable/disposable.js';
/**
 * Class for unit testing code that uses Math.random. Generates deterministic
 * random numbers.
 */
export declare class PseudoRandom extends Disposable {
    /**
     * Class for unit testing code that uses Math.random. Generates deterministic
     * random numbers.
     * @param opt_seed The seed to use.
     * @param opt_install Whether to install the PseudoRandom at construction time.
     */
    constructor(opt_seed?: number, opt_install?: boolean);
    private noStructuralTyping_closure_goog_testing_pseudorandom_PseudoRandom;
    /**
     * Constant used as part of the algorithm.
     */
    static A: number;
    /**
     * Constant used as part of the algorithm. 2^31 - 1.
     */
    static M: number;
    /**
     * Constant used as part of the algorithm. It is equal to M / A.
     */
    static Q: number;
    /**
     * Constant used as part of the algorithm. It is equal to M % A.
     */
    static R: number;
    /**
     * Constant used as part of the algorithm to get values from range [0, 1).
     */
    static ONE_OVER_M_MINUS_ONE: number;
    /**
     * Installs this PseudoRandom as the system number generator.
     */
    install(): void;
    disposeInternal(): void;
    /**
     * Uninstalls the PseudoRandom.
     */
    uninstall(): void;
    /**
     * Seed the generator.
     * @param opt_seed The seed to use.
     */
    seed(opt_seed?: number): void;
    random(): number;
}

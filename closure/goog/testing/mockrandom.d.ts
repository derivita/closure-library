import { Disposable } from '../disposable/disposable.js';
/**
 * Class for unit testing code that uses Math.random.
 */
export declare class MockRandom extends Disposable {
    /**
     * Class for unit testing code that uses Math.random.
     * @param sequence The sequence of numbers to return. This object will modify this array.
     * @param opt_install Whether to install the MockRandom at construction time.
     */
    constructor(sequence: number[] | null, opt_install?: boolean);
    private noStructuralTyping_closure_goog_testing_mockrandom_MockRandom;
    /**
     * Installs this MockRandom as the system number generator.
     */
    install(): void;
    random(): number;
    hasMoreValues(): boolean;
    /**
     * Injects new numbers into the beginning of the sequence.
     * @param values Number or array of numbers to inject.
     */
    inject(values: number[] | number): void;
    /**
     * Uninstalls the MockRandom.
     */
    uninstall(): void;
    disposeInternal(): void;
    /**
     *
     * @param strictlyFromSequence Whether to throw an exception when Math.random() is called when there is nothing left in the sequence.
     */
    setStrictlyFromSequence(strictlyFromSequence: boolean): void;
}

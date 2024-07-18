/**
 * The JSON fuzzing generator.
 */
export declare class JsonFuzzing {
    /**
     * The JSON fuzzing generator.
     * @param opt_options Configuration for the fuzzing json generator.
     * @param opt_seed The seed for the random generator.
     */
    constructor(opt_options?: JsonFuzzing.Options, opt_seed?: number);
    private noStructuralTyping_closure_goog_labs_testing_json_fuzzing_JsonFuzzing;
    /**
     * Gets a fuzzily-generated JSON object (an array).
     *
     * TODO(user): whitespaces
     * @return A new JSON compliant array object.
     */
    newArray(): any[];
    /**
     * Gets a new integer.
     * @param min Inclusive
     * @param max Exclusive
     * @return A random integer
     */
    nextInt(min: number, max: number): number;
}
export declare namespace JsonFuzzing {
    /**
     * Configuration spec.
     *
     * jsonSize: default to [1, 10) for the entire JSON object (array)
     * numFields: default to [0, 5)
     * arraySize: default to [0, 5) for the length of nested arrays
     * maxDepth: default to 5
     */
    type Options = {
        'jsonSize': number;
        'numFields': number;
        'arraySize': number;
        'maxDepth': number;
    };
    /**
     * Enum type for the field type (of a message).
     */
    enum FieldType_ {
        MESSAGE = 0,
        ARRAY = 1,
        STRING = 2,
        NUMBER = 3,
        BOOLEAN = 4,
        NULL = 5
    }
}

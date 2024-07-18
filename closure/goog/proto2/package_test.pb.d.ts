import { Message } from './message.js';
import { TestAllTypes } from './test.pb.js';
import type { Descriptor } from './descriptor.js';
/**
 * Message TestPackageTypes.
 */
export declare class TestPackageTypes extends Message {
    /**
     * Message TestPackageTypes.
     */
    constructor();
    private noStructuralTyping_closure_goog_proto2_package_test_pb_TestPackageTypes;
    /**
     * Overrides {@link Message#clone} to specify its exact return type.
     * @return The cloned message.
     */
    clone(): TestPackageTypes;
    /**
     * Gets the value of the optional_int32 field.
     * @return The value.
     */
    getOptionalInt32(): number | null;
    /**
     * Gets the value of the optional_int32 field or the default value if not set.
     * @return The value.
     */
    getOptionalInt32OrDefault(): number;
    /**
     * Sets the value of the optional_int32 field.
     * @param value The value.
     */
    setOptionalInt32(value: number): void;
    hasOptionalInt32(): boolean;
    optionalInt32Count(): number;
    /**
     * Clears the values in the optional_int32 field.
     */
    clearOptionalInt32(): void;
    /**
     * Gets the value of the other_all field.
     * @return The value.
     */
    getOtherAll(): TestAllTypes | null;
    /**
     * Gets the value of the other_all field or the default value if not set.
     * @return The value.
     */
    getOtherAllOrDefault(): TestAllTypes;
    /**
     * Sets the value of the other_all field.
     * @param value The value.
     */
    setOtherAll(value: TestAllTypes): void;
    hasOtherAll(): boolean;
    otherAllCount(): number;
    /**
     * Clears the values in the other_all field.
     */
    clearOtherAll(): void;
    getDescriptor(): Descriptor;
    static getDescriptor: () => Descriptor;
}

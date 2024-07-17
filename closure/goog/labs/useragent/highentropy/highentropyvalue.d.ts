/**
 * Represents a value that can be asynchronously loaded.
 */
interface AsyncValue<VALUE_TYPE = any> {
    /**
     * Get the value represented by this AsyncValue instance, if it was
     * previously requested.
     */
    getIfLoaded(): VALUE_TYPE | undefined | null;
    /**
     * Request the value represented by this AsyncValue instance.
     */
    load(): Promise<VALUE_TYPE | null>;
}
export { AsyncValue };
/**
 * Represents a high-entropy value.
 * High-entropy values must be specifically requested from the Promise-based
 * Client Hints API.
 */
declare class HighEntropyValue<VALUE_TYPE = any> implements AsyncValue<VALUE_TYPE | null> {
    /**
     * Constructs a new HighEntropyValue instance.
     */
    constructor(key: string);
    getIfLoaded(): VALUE_TYPE | undefined | null;
    load(): Promise<VALUE_TYPE | null>;
    resetForTesting(): void;
    /**
     * The value represented by this HighEntropyValue instance. If it hasn't
     * been successfully requested yet, its value will be undefined.
     */
    protected value_: VALUE_TYPE | undefined | null;
}
export { HighEntropyValue };
/**
 * An object that wraps a version string.
 * This allows for easy version comparisons.
 */
declare class Version {
    constructor(versionString: string);
    /**
     * Returns the underlying version string.
     */
    toVersionStringForLogging(): string;
    /**
     * Returns true if the underlying version string is equal to or greater than
     * the given version.
     */
    isAtLeast(version: string): boolean;
}
export { Version };

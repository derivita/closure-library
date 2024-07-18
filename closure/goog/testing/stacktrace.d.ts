/**
 * Class representing one stack frame.
 */
export declare class Frame {
    constructor(context: string, name: string, alias: string, path: string);
    getName(): string;
    isAnonymous(): boolean;
    /**
     * Brings one frame of the stack trace into a common format across browsers.
     */
    toCanonicalString(): string;
}
/**
 * Parses one stack frame.
 * @param frameStr The stack frame as string.
 * @return Stack frame object or null if the parsing failed.
 */
export declare function parseStackFrame_(frameStr: string): Frame | null;
/**
 * Sets function to deobfuscate function names.
 * @param fn function to deobfuscate function names.
 */
export declare function setDeobfuscateFunctionName(fn: () => string): void;
/**
 * Converts the stack frames into canonical format. Chops the beginning and the
 * end of it which come from the testing environment, not from the test itself.
 * @param frames The frames.
 * @return Canonical, pretty printed stack trace.
 */
export declare function framesToString_(frames: (Frame | null)[]): string;
/**
 * Parses the browser's native stack trace.
 * @param stack Stack trace.
 * @return Stack frames. The unrecognized frames will be nulled out.
 */
export declare function parse_(stack: string): (Frame | null)[];
/**
 * Brings the stack trace into a common format across browsers.
 * @param stack Browser-specific stack trace.
 * @return Same stack trace in common format.
 */
export declare function canonicalize(stack: string): string;
/**
 * Returns the native stack trace.
 */
export declare function getNativeStack_(): string | CallSite[];
/**
 * Gets the native stack trace if available otherwise follows the call chain.
 * @return The stack trace in canonical format.
 */
export declare function get(): string;

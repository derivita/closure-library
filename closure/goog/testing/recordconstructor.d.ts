/**
 * Same as {@link goog.testing.recordFunction} but the recorded function will
 * have the same prototype and static fields as the original one. It can be
 * used with constructors.
 * @param ctor The function to wrap and record.
 * @return The wrapped function.
 */
declare function recordConstructor(ctor: Function): Function;
export { recordConstructor };

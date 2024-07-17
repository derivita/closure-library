type Primitive = boolean | number | string;
type NestedType = Primitive | any[] | object;
/**
 * Types that can be JSON serialized. We only check one level deep for Objects
 * and Arrays so it's not checked at compile time whether nested types are
 * correct, and it would be possible for a user to pass in an invalid JSON
 * object. Which would be a bummer.
 * NOTE: If the compiler were to support recursive typedefs, this would be
 * {boolean|number|string|!Object<string, !Jsonable>|!Array<!Jsonable>}.
 * Recursive type checking is supported by @record but not @typedef.
 */
type Jsonable = Primitive | {
    [key: string]: NestedType | null;
} | (NestedType | null)[] | null;
export { Jsonable };

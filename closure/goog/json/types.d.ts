/**
 * JSON replacer, as defined in Section 15.12.3 of the ES5 spec.
 */
export type Replacer = (this: object | null) => any;
/**
 * JSON reviver, as defined in Section 15.12.2 of the ES5 spec.
 */
export type Reviver = (this: object | null) => any;

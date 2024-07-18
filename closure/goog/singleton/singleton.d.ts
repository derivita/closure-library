declare const instantiatedSingletons: {
    new (): any;
}[];
/**
 * Used as the implementation body for a static getInstance method.
 *
 * ```
 * class Foo {
 * static getInstance() {
 * return getInstance(Foo);
 * }
 * }
 * ```
 */
export declare let getInstance: T | null;
export { instantiatedSingletons };

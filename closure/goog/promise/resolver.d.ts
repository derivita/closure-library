import type { Promise as GoogPromise } from './promise.js';
/**
 * Resolver interface for promises. The resolver is a convenience interface that
 * bundles the promise and its associated resolve and reject functions together,
 * for cases where the resolver needs to be persisted internally.
 */
interface Resolver<TYPE = any> {
    /**
     * The promise that created this resolver.
     */
    promise: GoogPromise<TYPE | null>;
    /**
     * Resolves this resolver with the specified value.
     */
    resolve: () => any;
    /**
     * Rejects this resolver with the specified reason.
     */
    reject: any;
}
export { Resolver };

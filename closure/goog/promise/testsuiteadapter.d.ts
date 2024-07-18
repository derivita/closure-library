import { Promise } from './promise.js';
/**
 * Adapter for specifying Promise-creating functions to the Promises test suite.
 */
export declare var testSuiteAdapter: {
    resolved: typeof Promise.resolve;
    rejected: typeof Promise.reject;
    deferred: () => {};
};

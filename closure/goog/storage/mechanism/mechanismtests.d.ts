import { Mechanism } from './mechanism.js';
/**
 *
 */
export declare function register(state: {
    'getMechanism': () => Mechanism;
    'getMinimumQuota': () => number;
}): object;

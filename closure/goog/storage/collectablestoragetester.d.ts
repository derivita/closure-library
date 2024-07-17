import type { CollectableStorage } from './collectablestorage.js';
import type { IterableMechanism } from './mechanism/iterablemechanism.js';
import type { MockClock } from '../testing/mockclock.js';
/**
 * Tests basic operation: expiration and collection of collectable storage.
 */
export declare function runBasicTests(mechanism: IterableMechanism | null, clock: MockClock | null, storage: CollectableStorage | null): void;

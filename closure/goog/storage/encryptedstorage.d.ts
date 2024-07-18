import { CollectableStorage } from './collectablestorage.js';
import type { IterableMechanism } from './mechanism/iterablemechanism.js';
/**
 * Provides an encrypted storage. The keys are hashed with a secret, so
 * their existence cannot be verified without the knowledge of the secret.
 * The values are encrypted using the key, a salt, and the secret, so
 * stream cipher initialization varies for each stored value.
 */
export declare class EncryptedStorage extends CollectableStorage {
    /**
     * Provides an encrypted storage. The keys are hashed with a secret, so
     * their existence cannot be verified without the knowledge of the secret.
     * The values are encrypted using the key, a salt, and the secret, so
     * stream cipher initialization varies for each stored value.
     * @param mechanism The underlying storage mechanism.
     * @param secret The secret key used to encrypt the storage.
     */
    constructor(mechanism: IterableMechanism, secret: string);
    private noStructuralTyping_closure_goog_storage_encryptedstorage_EncryptedStorage;
    /**
     * Metadata key under which the salt is stored.
     */
    protected static SALT_KEY: string;
    set(key: any, value: any, opt_expiration: any): void;
    getWrapper(key: any, opt_expired: any): object;
    remove(key: any): void;
}

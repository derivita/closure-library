import { Disposable } from '../disposable/disposable.js';
import type { TopicId } from './topicid.js';
/**
 * This object is a temporary shim that provides TopicId support
 * for PubSub.  See b/12477087 for more info.
 */
export declare class TypedPubSub extends Disposable {
    /**
     * This object is a temporary shim that provides TopicId support
     * for PubSub.  See b/12477087 for more info.
     * @param opt_async Enable asynchronous behavior.  Recommended for new code.  See notes on `PubSub.publish`.
     */
    constructor(opt_async?: boolean);
    private noStructuralTyping_closure_goog_pubsub_typedpubsub_TypedPubSub;
    /**
     * See `PubSub.subscribe`.
     * @param topic Topic to subscribe to.
     * @param fn Function to be invoked when a message is published to the given topic.
     * @param opt_context Object in whose context the function is to be called (the global scope if none).
     * @return Subscription key.
     */
    subscribe<PAYLOAD = any, CONTEXT = any>(topic: TopicId<PAYLOAD | null>, fn: (this: CONTEXT | null) => any, opt_context?: CONTEXT | null): number;
    /**
     * See `PubSub.subscribeOnce`.
     * @param topic Topic to subscribe to.
     * @param fn Function to be invoked once and then unsubscribed when a message is published to the given topic.
     * @param opt_context Object in whose context the function is to be called (the global scope if none).
     * @return Subscription key.
     */
    subscribeOnce<PAYLOAD = any, CONTEXT = any>(topic: TopicId<PAYLOAD | null>, fn: (this: CONTEXT | null) => any, opt_context?: CONTEXT | null): number;
    /**
     * See `PubSub.unsubscribe`.
     * @param topic Topic to unsubscribe from.
     * @param fn Function to unsubscribe.
     * @param opt_context Object in whose context the function was to be called (the global scope if none).
     * @return Whether a matching subscription was removed.
     */
    unsubscribe<PAYLOAD = any, CONTEXT = any>(topic: TopicId<PAYLOAD | null>, fn: (this: CONTEXT | null) => any, opt_context?: CONTEXT | null): boolean;
    /**
     * See `PubSub.unsubscribeByKey`.
     * @param key Subscription key.
     * @return Whether a matching subscription was removed.
     */
    unsubscribeByKey(key: number): boolean;
    /**
     * See `PubSub.publish`.
     * @param topic Topic to publish to.
     * @param payload Payload passed to each subscription function.
     * @return Whether any subscriptions were called.
     */
    publish<PAYLOAD = any>(topic: TopicId<PAYLOAD | null>, payload: PAYLOAD | null): boolean;
    /**
     * See `PubSub.clear`.
     * @param opt_topic Topic to clear (all topics if unspecified).
     */
    clear<PAYLOAD = any>(opt_topic?: TopicId<PAYLOAD | null>): void;
    /**
     * See `PubSub.getCount`.
     * @param opt_topic The topic (all topics if unspecified).
     * @return Number of subscriptions to the topic.
     */
    getCount<PAYLOAD = any>(opt_topic?: TopicId<PAYLOAD | null>): number;
}

import { Disposable } from '../disposable/disposable.js';
/**
 * Topic-based publish/subscribe channel.  Maintains a map of topics to
 * subscriptions.  When a message is published to a topic, all functions
 * subscribed to that topic are invoked in the order they were added.
 * Uncaught errors abort publishing.
 *
 * Topics may be identified by any nonempty string, <strong>except</strong>
 * strings corresponding to native Object properties, e.g. "constructor",
 * "toString", "hasOwnProperty", etc.
 */
export declare class PubSub extends Disposable {
    /**
     * Topic-based publish/subscribe channel.  Maintains a map of topics to
     * subscriptions.  When a message is published to a topic, all functions
     * subscribed to that topic are invoked in the order they were added.
     * Uncaught errors abort publishing.
     *
     * Topics may be identified by any nonempty string, <strong>except</strong>
     * strings corresponding to native Object properties, e.g. "constructor",
     * "toString", "hasOwnProperty", etc.
     * @param opt_async Enable asynchronous behavior.  Recommended for new code.  See notes on the publish() method.
     */
    constructor(opt_async?: boolean);
    private noStructuralTyping_closure_goog_pubsub_pubsub_PubSub;
    /**
     * Subscribes a function to a topic.  The function is invoked as a method on
     * the given `opt_context` object, or in the global scope if no context
     * is specified.  Subscribing the same function to the same topic multiple
     * times will result in multiple function invocations while publishing.
     * Returns a subscription key that can be used to unsubscribe the function from
     * the topic via {@link #unsubscribeByKey}.
     * @param topic Topic to subscribe to.
     * @param fn Function to be invoked when a message is published to the given topic.
     * @param opt_context Object in whose context the function is to be called (the global scope if none).
     * @return Subscription key.
     */
    subscribe(topic: string, fn: Function | null, opt_context?: object | null): number;
    /**
     * Subscribes a single-use function to a topic.  The function is invoked as a
     * method on the given `opt_context` object, or in the global scope if
     * no context is specified, and is then unsubscribed.  Returns a subscription
     * key that can be used to unsubscribe the function from the topic via
     * {@link #unsubscribeByKey}.
     * @param topic Topic to subscribe to.
     * @param fn Function to be invoked once and then unsubscribed when a message is published to the given topic.
     * @param opt_context Object in whose context the function is to be called (the global scope if none).
     * @return Subscription key.
     */
    subscribeOnce(topic: string, fn: Function | null, opt_context?: object | null): number;
    /**
     * Unsubscribes a function from a topic.  Only deletes the first match found.
     * Returns a Boolean indicating whether a subscription was removed.
     * @param topic Topic to unsubscribe from.
     * @param fn Function to unsubscribe.
     * @param opt_context Object in whose context the function was to be called (the global scope if none).
     * @return Whether a matching subscription was removed.
     */
    unsubscribe(topic: string, fn: Function | null, opt_context?: object | null): boolean;
    /**
     * Removes a subscription based on the key returned by {@link #subscribe}.
     * No-op if no matching subscription is found.  Returns a Boolean indicating
     * whether a subscription was removed.
     * @param key Subscription key.
     * @return Whether a matching subscription was removed.
     */
    unsubscribeByKey(key: number): boolean;
    /**
     * Publishes a message to a topic.  Calls functions subscribed to the topic in
     * the order in which they were added, passing all arguments along.
     *
     * If this object was created with async=true, subscribed functions are called
     * via run().  Otherwise, the functions are called directly, and if
     * any of them throw an uncaught error, publishing is aborted.
     * @param topic Topic to publish to.
     * @param var_args Arguments that are applied to each subscription function.
     * @return Whether any subscriptions were called.
     */
    publish(topic: string, ...var_args: any[]): boolean;
    /**
     * Clears the subscription list for a topic, or all topics if unspecified.
     * @param opt_topic Topic to clear (all topics if unspecified).
     */
    clear(opt_topic?: string): void;
    /**
     * Returns the number of subscriptions to the given topic (or all topics if
     * unspecified). This number will not change while publishing any messages.
     * @param opt_topic The topic (all topics if unspecified).
     * @return Number of subscriptions to the topic.
     */
    getCount(opt_topic?: string): number;
    disposeInternal(): void;
}

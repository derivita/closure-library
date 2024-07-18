/**
 * A templated class that is used to register `goog.pubsub.PubSub`
 * subscribers.
 *
 * Typical usage for a publisher:
 * <code>
 * /** @type {!TopicId<!zorg.State>}
 * zorg.TopicId.STATE_CHANGE = new TopicId(
 * goog.events.getUniqueId('state-change'));
 *
 * // Compiler enforces that these types are correct.
 * pubSub.publish(zorg.TopicId.STATE_CHANGE, zorg.State.STARTED);
 * </code>
 *
 * Typical usage for a subscriber:
 * <code>
 * // Compiler enforces the callback parameter type.
 * pubSub.subscribe(zorg.TopicId.STATE_CHANGE, function(state) {
 * if (state == zorg.State.STARTED) {
 * // Handle STARTED state.
 * }
 * });
 * </code>
 */
export declare class TopicId<PAYLOAD = any> {
    /**
     * A templated class that is used to register `goog.pubsub.PubSub`
     * subscribers.
     *
     * Typical usage for a publisher:
     * <code>
     * /** @type {!TopicId<!zorg.State>}
     * zorg.TopicId.STATE_CHANGE = new TopicId(
     * goog.events.getUniqueId('state-change'));
     *
     * // Compiler enforces that these types are correct.
     * pubSub.publish(zorg.TopicId.STATE_CHANGE, zorg.State.STARTED);
     * </code>
     *
     * Typical usage for a subscriber:
     * <code>
     * // Compiler enforces the callback parameter type.
     * pubSub.subscribe(zorg.TopicId.STATE_CHANGE, function(state) {
     * if (state == zorg.State.STARTED) {
     * // Handle STARTED state.
     * }
     * });
     * </code>
     */
    constructor(topicId: string);
    private noStructuralTyping_closure_goog_pubsub_topicid_TopicId;
    toString(): any;
}

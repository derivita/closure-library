/**
 * Creates a new id generator.
 */
export declare class IdGenerator {
    /**
     * Creates a new id generator.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_idgenerator_IdGenerator;
    /**
     * Sets the ID prefix for this singleton. This is a temporary workaround to be
     * backwards compatible with code relying on the undocumented, but consistent,
     * behavior. In the future this will be removed and the prefix will be set to
     * a randomly generated string.
     */
    setIdPrefix(idPrefix: string): void;
    /**
     * Gets the next unique ID.
     * @return The next unique identifier.
     */
    getNextUniqueId(): string;
}

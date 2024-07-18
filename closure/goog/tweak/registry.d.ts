import { BaseSetting, BooleanSetting, NumericSetting, StringSetting } from './entries.js';
import type { BaseEntry } from './entries.js';
/**
 * Singleton that manages all tweaks. This should be instantiated only from
 * goog.tweak.getRegistry().
 */
export declare class Registry {
    /**
     * Singleton that manages all tweaks. This should be instantiated only from
     * goog.tweak.getRegistry().
     * @param queryParams Value of window.location.search.
     */
    constructor(queryParams: string);
    private noStructuralTyping_closure_goog_tweak_registry_Registry;
    /**
     * Simple parser for query params. Makes all keys lower-case.
     * @param queryParams The part of the url between the ? and the #.
     * @return map of key->value.
     */
    static parseQueryParams(queryParams: string): {
        [key: string]: string;
    };
    /**
     * Registers the given tweak setting/action.
     * @param entry The entry.
     */
    register(entry: BaseEntry | null): void;
    /**
     * Adds a callback to be called whenever a new tweak is added.
     * @param func The callback.
     */
    addOnRegisterListener(func: Function): void;
    /**
     *
     * @param id The unique string that identifies this entry.
     * @return Whether a tweak with the given ID is registered.
     */
    hasEntry(id: string): boolean;
    /**
     * Returns the BaseEntry with the given ID. Asserts if it does not exists.
     * @param id The unique string that identifies this entry.
     * @return The entry.
     */
    getEntry(id: string): BaseEntry;
    /**
     * Returns the boolean setting with the given ID. Asserts if the ID does not
     * refer to a registered entry or if it refers to one of the wrong type.
     * @param id The unique string that identifies this entry.
     * @return The entry.
     */
    getBooleanSetting(id: string): BooleanSetting;
    /**
     * Returns the string setting with the given ID. Asserts if the ID does not
     * refer to a registered entry or if it refers to one of the wrong type.
     * @param id The unique string that identifies this entry.
     * @return The entry.
     */
    getStringSetting(id: string): StringSetting;
    /**
     * Returns the numeric setting with the given ID. Asserts if the ID does not
     * refer to a registered entry or if it refers to one of the wrong type.
     * @param id The unique string that identifies this entry.
     * @return The entry.
     */
    getNumericSetting(id: string): NumericSetting;
    /**
     * Creates and returns an array of all BaseSetting objects with an associted
     * query parameter.
     * @param excludeChildEntries Exclude BooleanInGroupSettings.
     * @param excludeNonSettings Exclude entries that are not subclasses of BaseSetting.
     * @return The settings.
     */
    extractEntries(excludeChildEntries: boolean, excludeNonSettings: boolean): BaseSetting[];
    /**
     * Returns the query part of the URL that will apply all set tweaks.
     * @param opt_existingSearchStr The part of the url between the ? and the #. Uses window.location.search if not given.
     * @return The query string.
     */
    makeUrlQuery(opt_existingSearchStr?: string): string;
}

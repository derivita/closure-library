import * as log from '../log/log.js';
/**
 * Base class for all Registry entries.
 */
export declare class BaseEntry {
    /**
     * Base class for all Registry entries.
     * @param id The ID for the entry. Must contain only letters, numbers, underscores and periods.
     * @param description A description of what the entry does.
     */
    constructor(id: string, description: string);
    private noStructuralTyping_closure_goog_tweak_entries_BaseEntry;
    /**
     * A descriptive label for the entry.
     */
    label: string;
    /**
     * A description of what this entry does.
     */
    description: string;
    /**
     * The logger for this class.
     */
    protected logger: log.Logger | null;
    getId(): string;
    /**
     * Returns whether a restart is required for changes to the setting to take
     * effect.
     * @return The value.
     */
    isRestartRequired(): boolean;
    /**
     * Sets whether a restart is required for changes to the setting to take
     * effect.
     * @param value The new value.
     */
    setRestartRequired(value: boolean): void;
    /**
     * Adds a callback that should be called when the setting has changed (or when
     * an action has been clicked).
     * @param callback The callback to add.
     */
    addCallback(callback: Function): void;
    /**
     * Removes a callback that was added by addCallback.
     * @param callback The callback to add.
     */
    removeCallback(callback: Function): void;
    /**
     * Calls all registered callbacks.
     */
    fireCallbacks(): void;
}
/**
 * Base class for all tweak entries that are settings. Settings are entries
 * that are associated with a query parameter.
 */
export declare class BaseSetting extends BaseEntry {
    /**
     * Base class for all tweak entries that are settings. Settings are entries
     * that are associated with a query parameter.
     * @param id The ID for the setting.
     * @param description A description of what the setting does.
     */
    constructor(id: string, description: string);
    private noStructuralTyping_closure_goog_tweak_entries_BaseSetting;
    /**
     * The value of this setting's query parameter.
     */
    protected initialQueryParamValue: string | undefined;
    /**
     * The logger for this class.
     */
    logger: log.Logger | null;
    /**
     * Sets the value of the entry based on the value of the query parameter. Once
     * this is called, configuration settings (associated query parameter, token,
     * etc) may not be changed.
     * @param value The part of the query param for this setting after the '='. Null if it is not present.
     */
    protected initialize(value: string | null): void;
    /**
     * Returns the value to be used in the query parameter for this tweak.
     * @return The encoded value. Null if the value is set to its default.
     */
    getNewValueEncoded(): string | null;
    /**
     * Asserts that this tweak has not been initialized yet.
     * @param funcName Function name to use in the assertion message.
     */
    protected assertNotInitialized(funcName: string): void;
    /**
     * Returns whether the setting is currently being initialized.
     * @return Whether the setting is currently being initialized.
     */
    protected isInitializing(): boolean;
    /**
     * Sets the initial query parameter value for this setting. May not be called
     * after the setting has been initialized.
     * @param value The initial query parameter value for this setting.
     */
    setInitialQueryParamValue(value: string): void;
    /**
     * Returns the name of the query parameter used for this setting.
     * @return The param name. Null if no query parameter is directly associated with the setting.
     */
    getParamName(): string | null;
    /**
     * Sets the name of the query parameter used for this setting. If null is
     * passed the setting will not appear in the top-level query string.
     * @param value The new value.
     */
    setParamName(value: string | null): void;
    /**
     * Applies the default value or query param value if this is the first time
     * that the function has been called.
     */
    protected ensureInitialized(): void;
}
export declare namespace BaseSetting {
    /**
     * States of initialization. Entries are initialized lazily in order to allow
     * their initialization to happen in multiple statements.
     */
    enum InitializeState_ {
        NOT_INITIALIZED = 0,
        INITIALIZING = 1,
        INITIALIZED = 2
    }
}
/**
 * Base class for all settings that wrap primitive values.
 */
export declare class BasePrimitiveSetting extends BaseSetting {
    /**
     * Base class for all settings that wrap primitive values.
     * @param id The ID for the setting.
     * @param description A description of what the setting does.
     * @param defaultValue The default value for this setting.
     */
    constructor(id: string, description: string, defaultValue: any);
    private noStructuralTyping_closure_goog_tweak_entries_BasePrimitiveSetting;
    /**
     * The logger for this class.
     */
    logger: log.Logger | null;
    /**
     * Returns the query param encoded representation of the setting's value.
     * @return The encoded value.
     */
    protected encodeNewValue(): string;
    /**
     * If the setting has the restartRequired option, then returns its initial
     * value. Otherwise, returns its current value.
     * @return The value.
     */
    getValue(): any;
    /**
     * Returns the value of the setting to use once "Apply Tweaks" is clicked.
     * @return The value.
     */
    getNewValue(): any;
    /**
     * Sets the value of the setting. If the setting has the restartRequired
     * option, then the value will not be changed until the "Apply Tweaks" button
     * is clicked. If it does not have the option, the value will be update
     * immediately and all registered callbacks will be called.
     * @param value The value.
     */
    setValue(value: any): void;
    /**
     * Returns the default value for this setting.
     * @return The default value.
     */
    getDefaultValue(): any;
    /**
     * Sets the default value for the tweak.
     * @param value The new value.
     */
    setDefaultValue(value: any): void;
    getNewValueEncoded(): string;
}
/**
 * A registry setting for string values.
 */
export declare class StringSetting extends BasePrimitiveSetting {
    /**
     * A registry setting for string values.
     * @param id The ID for the setting.
     * @param description A description of what the setting does.
     */
    constructor(id: string, description: string);
    private noStructuralTyping_closure_goog_tweak_entries_StringSetting;
    /**
     * Valid values for the setting.
     */
    validValues_: string[] | undefined | null;
    /**
     * The logger for this class.
     */
    logger: log.Logger | null;
    getValue(): string;
    getNewValue(): string;
    /**
     *
     * @param value The tweaks's value.
     */
    setValue(value: string): void;
    /**
     *
     * @param value The default value.
     */
    setDefaultValue(value: string): void;
    getDefaultValue(): string;
    encodeNewValue(): string;
    /**
     * Sets the valid values for the setting.
     * @param values Valid values.
     */
    setValidValues(values: string[] | undefined | null): void;
    /**
     * Returns the valid values for the setting.
     * @return Valid values.
     */
    getValidValues(): string[] | undefined | null;
    initialize(value: any): void;
}
/**
 * A registry setting for numeric values.
 */
export declare class NumericSetting extends BasePrimitiveSetting {
    /**
     * A registry setting for numeric values.
     * @param id The ID for the setting.
     * @param description A description of what the setting does.
     */
    constructor(id: string, description: string);
    private noStructuralTyping_closure_goog_tweak_entries_NumericSetting;
    /**
     * Valid values for the setting.
     */
    validValues_: number[] | undefined | null;
    /**
     * The logger for this class.
     */
    logger: log.Logger | null;
    getValue(): number;
    getNewValue(): number;
    /**
     *
     * @param value The tweaks's value.
     */
    setValue(value: number): void;
    /**
     *
     * @param value The default value.
     */
    setDefaultValue(value: number): void;
    getDefaultValue(): number;
    encodeNewValue(): string;
    /**
     * Sets the valid values for the setting.
     * @param values Valid values.
     */
    setValidValues(values: number[] | undefined | null): void;
    /**
     * Returns the valid values for the setting.
     * @return Valid values.
     */
    getValidValues(): number[] | undefined | null;
    initialize(value: any): void;
}
/**
 * A registry setting that can be either true of false.
 */
export declare class BooleanSetting extends BasePrimitiveSetting {
    /**
     * A registry setting that can be either true of false.
     * @param id The ID for the setting.
     * @param description A description of what the setting does.
     */
    constructor(id: string, description: string);
    private noStructuralTyping_closure_goog_tweak_entries_BooleanSetting;
    /**
     * The logger for this class.
     */
    logger: log.Logger | null;
    getValue(): boolean;
    getNewValue(): boolean;
    /**
     *
     * @param value The tweaks's value.
     */
    setValue(value: boolean): void;
    /**
     *
     * @param value The default value.
     */
    setDefaultValue(value: boolean): void;
    getDefaultValue(): boolean;
    encodeNewValue(): string;
    initialize(value: any): void;
}
/**
 * An entry in a BooleanGroup.
 */
export declare class BooleanInGroupSetting extends BooleanSetting {
    /**
     * An entry in a BooleanGroup.
     * @param id The ID for the setting.
     * @param description A description of what the setting does.
     * @param group The group that this entry belongs to.
     */
    constructor(id: string, description: string, group: BooleanGroup);
    private noStructuralTyping_closure_goog_tweak_entries_BooleanInGroupSetting;
    /**
     * The logger for this class.
     */
    logger: log.Logger | null;
    setParamName(value: any): void;
    /**
     * Sets the token to use in the query parameter.
     * @param value The value.
     */
    setToken(value: string): void;
    /**
     * Returns the token to use in the query parameter.
     * @return The value.
     */
    getToken(): string;
    /**
     * Returns the BooleanGroup that this setting belongs to.
     * @return The BooleanGroup that this setting belongs to.
     */
    getGroup(): BooleanGroup;
}
/**
 * A registry setting that contains a group of boolean subfield, where all
 * entries modify the same query parameter. For example:
 * ?foo=setting1,-setting2
 */
export declare class BooleanGroup extends BaseSetting {
    /**
     * A registry setting that contains a group of boolean subfield, where all
     * entries modify the same query parameter. For example:
     * ?foo=setting1,-setting2
     * @param id The ID for the setting.
     * @param description A description of what the setting does.
     */
    constructor(id: string, description: string);
    private noStructuralTyping_closure_goog_tweak_entries_BooleanGroup;
    /**
     * The logger for this class.
     */
    logger: log.Logger | null;
    /**
     * Returns the map of token->boolean settings.
     * @return The child settings.
     */
    getChildEntries(): {
        [key: string]: BooleanSetting;
    };
    /**
     * Adds the given BooleanSetting to the group.
     * @param boolEntry The entry.
     */
    addChild(boolEntry: BooleanInGroupSetting | null): void;
    initialize(value: any): void;
    getNewValueEncoded(): string;
}
/**
 * A registry action (a button).
 */
export declare class ButtonAction extends BaseEntry {
    /**
     * A registry action (a button).
     * @param id The ID for the setting.
     * @param description A description of what the setting does.
     * @param callback Function to call when the button is clicked.
     */
    constructor(id: string, description: string, callback: Function);
    private noStructuralTyping_closure_goog_tweak_entries_ButtonAction;
}

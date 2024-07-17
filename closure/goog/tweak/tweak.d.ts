import { Registry } from './registry.js';
/**
 * Returns/creates the registry singleton.
 * @return The tweak registry.
 */
export declare function getRegistry(): Registry;
/**
 * Type for configParams.
 * TODO(agrieve): Remove |Object when optional fields in struct types are
 * implemented.
 */
export type ConfigParams = {
    'label': string | undefined;
    'validValues': string[] | number[] | undefined;
    'paramName': string | undefined;
    'restartRequired': boolean | undefined;
    'callback': Function | undefined | null;
    'token': string | undefined;
} | object;
/**
 * Creates and registers a group of BooleanSettings that are all set by a
 * single query parameter. A call to endBooleanGroup() must be used
 * to close this group. Only registerBoolean() calls are allowed with
 * the beginBooleanGroup()/endBooleanGroup().
 * @param id The unique ID for the setting.
 * @param description A description of what the setting does.
 * @param opt_configParams Extra configuration parameters.
 */
export declare function beginBooleanGroup(id: string, description: string, opt_configParams?: ConfigParams | null): void;
/**
 * Creates and registers a BooleanSetting.
 * @param id The unique ID for the setting.
 * @param description A description of what the setting does.
 * @param opt_defaultValue The default value for the setting.
 * @param opt_configParams Extra configuration parameters.
 */
export declare function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: ConfigParams | null): void;
/**
 * Creates and registers a StringSetting.
 * @param id The unique ID for the setting.
 * @param description A description of what the setting does.
 * @param opt_defaultValue The default value for the setting.
 * @param opt_configParams Extra configuration parameters.
 */
export declare function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: ConfigParams | null): void;
/**
 * Creates and registers a NumericSetting.
 * @param id The unique ID for the setting.
 * @param description A description of what the setting does.
 * @param opt_defaultValue The default value for the setting.
 * @param opt_configParams Extra configuration parameters.
 */
export declare function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: ConfigParams | null): void;
/**
 * Creates and registers a ButtonAction.
 * @param id The unique ID for the setting.
 * @param description A description of what the action does.
 * @param callback Function to call when the button is clicked.
 * @param opt_label The button text (instead of the ID).
 */
export declare function registerButton(id: string, description: string, callback: Function, opt_label?: string): void;
/**
 * Returns the value of the boolean setting with the given ID.
 * @param id The unique string that identifies this entry.
 * @return The value of the tweak.
 */
export declare function getBoolean(id: string): boolean;
/**
 * Returns the value of the string setting with the given ID,
 * @param id The unique string that identifies this entry.
 * @return The value of the tweak.
 */
export declare function getString(id: string): string;
/**
 * Returns the value of the numeric setting with the given ID.
 * @param id The unique string that identifies this entry.
 * @return The value of the tweak.
 */
export declare function getNumber(id: string): number;
/**
 *
 */
export declare function setRegistry_(registry: Registry | null): void;
export declare function resetActiveBooleanGroup_(): void;

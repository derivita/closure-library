import { AutoComplete } from './autocomplete.js';
/**
 * Factory function for building a basic autocomplete widget that autocompletes
 * an inputbox or text area from a data array.
 * @param data Data array.
 * @param input Input element or text area.
 * @param opt_multi Whether to allow multiple entries separated with semi-colons or commas.
 * @param opt_useSimilar use similar matches. e.g. "gost" => "ghost".
 * @return A new autocomplete object.
 */
export declare function createSimpleAutoComplete(data: any[] | null, input: Element | null, opt_multi?: boolean, opt_useSimilar?: boolean): AutoComplete;

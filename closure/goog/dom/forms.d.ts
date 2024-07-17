import { Map } from '../structs/map.js';
/**
 * Submits form data via a new window. This hides references to the parent
 * window and should be used when submitting forms to untrusted 3rd party urls.
 * By default, this uses the action and method of the specified form
 * element. It is possible to override the default action and method if an
 * optional submit element with formaction and/or formmethod attributes is
 * provided.
 * @param form The form.
 * @param opt_submitElement The `<button>` or `<input>` element used to submit the form. The element should have a submit type.
 * @return true If the form was submitted succesfully.
 */
export declare function submitFormInNewWindow(form: HTMLFormElement, opt_submitElement?: HTMLElement): boolean;
/**
 * Submits form data via a new window. This hides references to the parent
 * window and should be used when submitting forms to untrusted 3rd party urls.
 * @param actionUri uri to submit form content to.
 * @param method HTTP method used to submit the form.
 * @param formData A map of the form data as field name to arrays of values.
 * @return true If the form was submitted succesfully.
 */
export declare function submitFormDataInNewWindow(actionUri: string, method: string, formData: Map<string, string[]>): boolean;
/**
 * Returns form data as a map of name to value arrays. This doesn't
 * support file inputs.
 * @param form The form.
 * @return A map of the form data as field name to arrays of values.
 */
export declare function getFormDataMap(form: HTMLFormElement | null): Map<string, string[]>;
/**
 * Returns the form data as an application/x-www-url-encoded string. This
 * doesn't support file inputs.
 * @param form The form.
 * @return An application/x-www-url-encoded string.
 */
export declare function getFormDataString(form: HTMLFormElement | null): string;
/**
 * Whether the form has a file input.
 * @param form The form.
 * @return Whether the form has a file input.
 */
export declare function hasFileInput(form: HTMLFormElement | null): boolean;
/**
 * Enables or disables either all elements in a form or a single form element.
 * @param el The element, either a form or an element within a form.
 * @param disabled Whether the element should be disabled.
 */
export declare function setDisabled(el: Element | null, disabled: boolean): void;
/**
 * Focuses, and optionally selects the content of, a form element.
 * @param el The form element.
 */
export declare function focusAndSelect(el: Element | null): void;
/**
 * Whether a form element has a value.
 * @param el The element.
 * @return Whether the form has a value.
 */
export declare function hasValue(el: Element | null): boolean;
/**
 * Whether a named form field has a value.
 * @param form The form element.
 * @param name Name of an input to the form.
 * @return Whether the form has a value.
 */
export declare function hasValueByName(form: HTMLFormElement | null, name: string): boolean;
/**
 * Gets the current value of any element with a type.
 * @param input The element.
 * @return The current value of the element (or null).
 */
export declare function getValue(input: null | Element | RadioNodeList): string | string[] | null | null;
/**
 * Returns the value of the named form field. In the case of radio buttons,
 * returns the value of the checked button with the given name.
 * @param form The form element.
 * @param name Name of an input to the form.
 * @return The value of the form element, or null if the form element does not exist or has no value.
 */
export declare function getValueByName(form: HTMLFormElement | null, name: string): string[] | string | null | null;
/**
 * Sets the current value of any element with a type.
 * @param el The element.
 * @param opt_value The value to give to the element, which will be coerced by the browser in the default case using toString. This value should be an array for setting the value of select multiple elements.
 */
export declare function setValue(el: Element | null, opt_value?: any): void;

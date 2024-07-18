import { EmailAddress } from './emailaddress.js';
/**
 * Formats an email address string for display, and allows for extraction of
 * the individual components of the address.
 */
export declare class InternationalizedEmailAddress extends EmailAddress {
    /**
     * Formats an email address string for display, and allows for extraction of
     * the individual components of the address.
     * @param opt_address The email address.
     * @param opt_name The name associated with the email address.
     */
    constructor(opt_address?: string, opt_name?: string);
    private noStructuralTyping_closure_goog_format_internationalizedemailaddress_InternationalizedEmailAddress;
    /**
     * Checks if the provided string is a valid local part (part before the '@') of
     * an EAI email address.
     * @param str The local part to check.
     * @return Whether the provided string is a valid local part.
     */
    static isValidLocalPartSpec(str: string): boolean;
    /**
     * Checks if the provided string is a valid domain part (part after the '@') of
     * an EAI email address.
     * @param str The domain part to check.
     * @return Whether the provided string is a valid domain part.
     */
    static isValidDomainPartSpec(str: string): boolean;
    isValid(): boolean;
    /**
     * Checks if the provided string is a valid email address. Supports both
     * simple email addresses (address specs) and addresses that contain display
     * names.
     * @param str The email address to check.
     * @return Whether the provided string is a valid address.
     */
    static isValidAddress(str: string): boolean;
    /**
     * Checks if the provided string is a valid address spec (local@domain.com).
     * @param str The email address to check.
     * @return Whether the provided string is a valid address spec.
     */
    static isValidAddrSpec(str: string): boolean;
    /**
     * Parses a string containing email addresses of the form
     * "name" &lt;address&gt; into an array of email addresses.
     * @param str The address list.
     * @return The parsed emails.
     */
    static parseList(str: string): EmailAddress[];
    /**
     * Parses an email address of the form "name" &lt;address&gt; into
     * an email address.
     * @param addr The address string.
     * @return The parsed address.
     */
    static parse(addr: string): EmailAddress;
    /**
     *
     * @param ch The character to test.
     * @return Whether the provided character is an address separator.
     */
    static isAddressSeparator(ch: string): boolean;
    /**
     * Return the address in a standard format:
     * - remove extra spaces.
     * - Surround name with quotes if it contains special characters.
     * @return The cleaned address.
     */
    toString(): string;
}

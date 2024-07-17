/**
 * Formats an email address string for display, and allows for extraction of
 * the individual components of the address.
 */
export declare class EmailAddress {
    /**
     * Formats an email address string for display, and allows for extraction of
     * the individual components of the address.
     * @param opt_address The email address.
     * @param opt_name The name associated with the email address.
     */
    constructor(opt_address?: string, opt_name?: string);
    private noStructuralTyping_closure_goog_format_emailaddress_EmailAddress;
    /**
     * The email address.
     */
    protected address: string;
    /**
     * Get the name associated with the email address.
     * @return The name or personal portion of the address.
     */
    getName(): string;
    /**
     * Get the email address.
     * @return The email address.
     */
    getAddress(): string;
    /**
     * Set the name associated with the email address.
     * @param name The name to associate.
     */
    setName(name: string): void;
    /**
     * Set the email address.
     * @param address The email address.
     */
    setAddress(address: string): void;
    /**
     * Return the address in a standard format:
     * - remove extra spaces.
     * - Surround name with quotes if it contains special characters.
     * @return The cleaned address.
     */
    toString(): string;
    /**
     * Return the address in a standard format:
     * - remove extra spaces.
     * - Surround name with quotes if it contains special characters.
     * @param specialChars String that contains the characters that require the display name to be quoted.
     * @return The cleaned address.
     */
    protected toStringInternal(specialChars: string): string;
    /**
     * Determines if the current object is a valid email address.
     * @return Whether the email address is valid.
     */
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
     * Checks if the provided string is a valid local part (part before the '@') of
     * an email address.
     * @param str The local part to check.
     * @return Whether the provided string is a valid local part.
     */
    static isValidLocalPartSpec(str: string): boolean;
    /**
     * Checks if the provided string is a valid domain part (part after the '@') of
     * an email address.
     * @param str The domain part to check.
     * @return Whether the provided string is a valid domain part.
     */
    static isValidDomainPartSpec(str: string): boolean;
    /**
     * Parses an email address of the form "name" &lt;address&gt; ("name" is
     * optional) into an email address.
     * @param addr The address string.
     * @param ctor EmailAddress constructor to instantiate the output address.
     * @return The parsed address.
     */
    protected static parseInternal(addr: string, ctor: {
        new (): EmailAddress | null;
    }): EmailAddress;
    /**
     * Parses an email address of the form "name" &lt;address&gt; into
     * an email address.
     * @param addr The address string.
     * @return The parsed address.
     */
    static parse(addr: string): EmailAddress;
    /**
     * Parse a string containing email addresses of the form
     * "name" &lt;address&gt; into an array of email addresses.
     * @param str The address list.
     * @param parser The parser to employ.
     * @param separatorChecker Accepts a character and returns whether it should be considered an address separator.
     * @return The parsed emails.
     */
    protected static parseListInternal(str: string, parser: () => any, separatorChecker: () => boolean): EmailAddress[];
    /**
     * Parses a string containing email addresses of the form
     * "name" &lt;address&gt; into an array of email addresses.
     * @param str The address list.
     * @return The parsed emails.
     */
    static parseList(str: string): EmailAddress[];
    /**
     *
     * @param ch The character to test.
     * @return Whether the provided character is an address separator.
     */
    static isAddressSeparator(ch: string): boolean;
}

import { Integer } from '../math/integer.js';
/**
 * Abstract class defining an IP Address.
 *
 * Please use IpAddress static methods or
 * Ipv4Address/Ipv6Address classes.
 */
export declare class IpAddress {
    /**
     * Abstract class defining an IP Address.
     *
     * Please use IpAddress static methods or
     * Ipv4Address/Ipv6Address classes.
     * @param address The Ip Address.
     * @param version The version number (4, 6).
     */
    constructor(address: Integer, version: number);
    private noStructuralTyping_closure_goog_net_ipaddress_IpAddress;
    getVersion(): number;
    /**
     *
     * @param other The other IP Address.
     * @return true if the IP Addresses are equal.
     */
    equals(other: IpAddress): boolean;
    toInteger(): Integer;
    toUriString(): string;
    toString(...args: any[]): string;
    isSiteLocal(): boolean;
    isLinkLocal(): boolean;
    /**
     * Parses an IP Address in a string.
     * If the string is malformed, the function will simply return null
     * instead of raising an exception.
     * @param address The IP Address.
     * @return The IP Address or null.
     */
    static fromString(address: string): IpAddress | null;
    /**
     * Tries to parse a string represented as a host portion of an URI.
     * See RFC 3986 for more details on IPv6 addresses inside URI.
     * If the string is malformed, the function will simply return null
     * instead of raising an exception.
     * @param address A RFC 3986 encoded IP address.
     * @return The IP Address.
     */
    static fromUriString(address: string): IpAddress | null;
}
/**
 * Takes a string or a number and returns a IPv4 Address.
 *
 * This constructor accepts strings and instance of Integer.
 * If you pass a Integer, make sure that its sign is set to positive.
 */
export declare class Ipv4Address extends IpAddress {
    /**
     * Takes a string or a number and returns a IPv4 Address.
     *
     * This constructor accepts strings and instance of Integer.
     * If you pass a Integer, make sure that its sign is set to positive.
     * @param address The address to store.
     */
    constructor(address: string | Integer);
    private noStructuralTyping_closure_goog_net_ipaddress_Ipv4Address;
    /**
     * The Maximum length for a netmask (aka, the number of bits for IPv4).
     */
    static MAX_NETMASK_LENGTH: number;
    toString(): string;
    toUriString(): string;
    isSiteLocal(): boolean;
    isLinkLocal(): boolean;
}
/**
 * Takes a string or a number and returns an IPv6 Address.
 *
 * This constructor accepts strings and instance of Integer.
 * If you pass a Integer, make sure that its sign is set to positive.
 */
export declare class Ipv6Address extends IpAddress {
    /**
     * Takes a string or a number and returns an IPv6 Address.
     *
     * This constructor accepts strings and instance of Integer.
     * If you pass a Integer, make sure that its sign is set to positive.
     * @param address The address to store.
     */
    constructor(address: string | Integer);
    private noStructuralTyping_closure_goog_net_ipaddress_Ipv6Address;
    /**
     * The Maximum length for a netmask (aka, the number of bits for IPv6).
     */
    static MAX_NETMASK_LENGTH: number;
    toString(): string;
    toUriString(): string;
    isSiteLocal(): boolean;
    isLinkLocal(): boolean;
    isMappedIpv4Address(): boolean;
    /**
     * Will return the mapped IPv4 address in this IPv6 address.
     * @return an IPv4 or null.
     */
    getMappedIpv4Address(): Ipv4Address | null;
}

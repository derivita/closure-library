import * as log from '../../log/log.js';
/**
 * Enum used to identify transport types.
 */
export declare enum TransportTypes {
    UNDEFINED = 0,
    NATIVE_MESSAGING = 1
}
/**
 * Enum containing transport names. These need to correspond to the
 * transport class names for createTransport_() to work.
 */
export declare var TransportNames: {
    [key: string]: string;
};
/**
 * Field names used on configuration object.
 */
export declare var CfgFields: {
    CHANNEL_NAME: string;
    AUTH_TOKEN: string;
    REMOTE_AUTH_TOKEN: string;
    PEER_URI: string;
    IFRAME_ID: string;
    TRANSPORT: string;
    LOCAL_RELAY_URI: string;
    PEER_RELAY_URI: string;
    LOCAL_POLL_URI: string;
    PEER_POLL_URI: string;
    PEER_HOSTNAME: string;
    ONE_SIDED_HANDSHAKE: string;
    ROLE: string;
    NATIVE_TRANSPORT_PROTOCOL_VERSION: string;
};
/**
 * Config properties that need to be URL sanitized.
 */
export declare var UriCfgFields: string[] | null;
export declare enum ChannelStates {
    NOT_CONNECTED = 1,
    CONNECTED = 2,
    CLOSED = 3
}
/**
 * The name of the transport service (used for internal signalling).
 */
export declare var TRANSPORT_SERVICE: string;
/**
 * Transport signaling message: setup.
 */
export declare var SETUP: string;
/**
 * Transport signaling message: setup for native transport protocol v2.
 */
export declare var SETUP_NTPV2: string;
/**
 * Transport signaling message: setup acknowledgement.
 */
export declare var SETUP_ACK: string;
/**
 * Transport signaling message: setup acknowledgement.
 */
export declare var SETUP_ACK_NTPV2: string;
/**
 * Returns a random string.
 * @param length How many characters the string shall contain.
 * @param opt_characters The characters used.
 * @return The random string.
 */
export declare function getRandomString(length: number, opt_characters?: string): string;
/**
 * The logger.
 */
export declare var logger: log.Logger | null;

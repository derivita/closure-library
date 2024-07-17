import * as log from '../log/log.js';
import type { Uri } from '../uri/uri.js';
import type { XmlHttp } from './xmlhttp.js';
/**
 * Logs and keeps a buffer of debugging info for the Channel.
 */
export declare class ChannelDebug {
    /**
     * Logs and keeps a buffer of debugging info for the Channel.
     */
    constructor();
    private noStructuralTyping_closure_goog_net_channeldebug_ChannelDebug;
    /**
     * Gets the logger used by this ChannelDebug.
     * @return The logger used by this ChannelDebug.
     */
    getLogger(): log.Logger | null;
    /**
     * Logs that the browser went offline during the lifetime of a request.
     * @param url The URL being requested.
     */
    browserOfflineResponse(url: Uri | null): void;
    /**
     * Logs an XmlHttp request..
     * @param verb The request type (GET/POST).
     * @param uri The request destination.
     * @param id The request id.
     * @param attempt Which attempt # the request was.
     * @param postData The data posted in the request.
     */
    xmlHttpChannelRequest(verb: string, uri: Uri | null, id: string | number | undefined, attempt: number, postData: string | null): void;
    /**
     * Logs the meta data received from an XmlHttp request.
     * @param verb The request type (GET/POST).
     * @param uri The request destination.
     * @param id The request id.
     * @param attempt Which attempt # the request was.
     * @param readyState The ready state.
     * @param statusCode The HTTP status code.
     */
    xmlHttpChannelResponseMetaData(verb: string, uri: Uri | null, id: string | number | undefined, attempt: number, readyState: XmlHttp.ReadyState | null, statusCode: number): void;
    /**
     * Logs the response data received from an XmlHttp request.
     * @param id The request id.
     * @param responseText The response text.
     * @param opt_desc Optional request description.
     */
    xmlHttpChannelResponseText(id: string | number | undefined, responseText: string | null, opt_desc?: string | null): void;
    /**
     * Logs a Trident ActiveX request.
     * @param verb The request type (GET/POST).
     * @param uri The request destination.
     * @param id The request id.
     * @param attempt Which attempt # the request was.
     */
    tridentChannelRequest(verb: string, uri: Uri | null, id: string | number | undefined, attempt: number): void;
    /**
     * Logs the response text received from a Trident ActiveX request.
     * @param id The request id.
     * @param responseText The response text.
     */
    tridentChannelResponseText(id: string | number | undefined, responseText: string): void;
    /**
     * Logs the done response received from a Trident ActiveX request.
     * @param id The request id.
     * @param successful Whether the request was successful.
     */
    tridentChannelResponseDone(id: string | number | undefined, successful: boolean): void;
    /**
     * Logs a request timeout.
     * @param uri The uri that timed out.
     */
    timeoutResponse(uri: Uri | null): void;
    /**
     * Logs a debug message.
     * @param text The message.
     */
    debug(text: string): void;
    /**
     * Logs an exception
     * @param e The error or error event.
     * @param msg The optional message, defaults to 'Exception'.
     */
    dumpException(e: Error, msg?: string): void;
    /**
     * Logs an info message.
     * @param text The message.
     */
    info(text: string): void;
    /**
     * Logs a warning message.
     * @param text The message.
     */
    warning(text: string): void;
    /**
     * Logs a severe message.
     * @param text The message.
     * @param error An exception associated with the message.
     */
    severe(text: string, error?: Error): void;
    /**
     * The normal response for forward channel requests.
     * Used only before version 8 of the protocol.
     */
    static MAGIC_RESPONSE_COOKIE: string;
}

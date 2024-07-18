import * as maps from '../../../collections/maps.js';
import { EventTarget } from '../../../events/eventtarget.js';
import { WebChannelBase } from './webchannelbase.js';
import { WebChannel } from '../webchannel.js';
import { WebChannelTransport } from '../webchanneltransport.js';
/**
 * Implementation of {@link WebChannelTransport} with
 * {@link webChannelWebChannelBase} as the underlying channel
 * implementation.
 */
export declare class WebChannelBaseTransport implements WebChannelTransport {
    /**
     * Implementation of {@link WebChannelTransport} with
     * {@link webChannelWebChannelBase} as the underlying channel
     * implementation.
     */
    constructor();
    private noStructuralTyping_closure_goog_labs_net_webchannel_webchannelbasetransport_WebChannelBaseTransport;
    createWebChannel(url: any, opt_options: any): any;
}
export declare namespace WebChannelBaseTransport {
    /**
     * Implementation of the {@link WebChannel} interface.
     */
    class Channel extends EventTarget implements WebChannel {
        /**
         * Implementation of the {@link WebChannel} interface.
         * @param url The URL path for the new WebChannel instance.
         * @param opt_options Configuration for the new WebChannel instance.
         */
        constructor(url: string, opt_options?: WebChannel.Options);
        private noStructuralTyping_closure_goog_labs_net_webchannel_webchannelbasetransport_Channel;
        open(): any;
        close(): any;
        halfClose(): any;
        /**
         * The WebChannelBase only supports object types.
         * @param message The message to send.
         */
        send(message: WebChannel.MessageData): any;
        /**
         * Converts a message to the map used by the underlying channel.
         */
        messageToMapObject_(message: WebChannel.MessageData): object | maps.MapLike;
        /**
         * Converts the map used by the underlying channel to a message.
         *
         * NOTE: In the case of the message being JS Object or string, the exact same
         * object passed during `messageToMapObject_()` is returned. In the case of raw
         * JSON, an equal (but not the same) object is returned (due to serialization).
         */
        mapObjectToMessage_(map: object | maps.MapLike): WebChannel.MessageData;
        disposeInternal(): void;
        getRuntimeProperties(): any;
    }
    namespace Channel {
        /**
         * The message event.
         */
        class MessageEvent extends WebChannel.MessageEvent {
            /**
             * The message event.
             * @param array The data array from the underlying channel.
             */
            constructor(array: any[] | object);
            private noStructuralTyping_closure_goog_labs_net_webchannel_webchannelbasetransport_MessageEvent;
        }
        /**
         * The error event.
         */
        class ErrorEvent extends WebChannel.ErrorEvent {
            /**
             * The error event.
             * @param error The error code.
             */
            constructor(error: WebChannelBase.Error | null);
            private noStructuralTyping_closure_goog_labs_net_webchannel_webchannelbasetransport_ErrorEvent;
            /**
             * High-level status code.
             */
            status: any;
            errorCode: WebChannelBase.Error | null;
        }
        /**
         * Implementation of {@link WebChannelBase.Handler} interface.
         */
        class Handler_ extends WebChannelBase.Handler {
            /**
             * Implementation of {@link WebChannelBase.Handler} interface.
             * @param channel The enclosing WebChannel.
             */
            constructor(channel: WebChannelBaseTransport.Channel);
            private noStructuralTyping_closure_goog_labs_net_webchannel_webchannelbasetransport_Handler_;
            channelOpened(channel: any): void;
            channelHandleArray(channel: any, array: any): void;
            channelError(channel: any, error: any): void;
            channelClosed(channel: any, opt_pendingMaps: any, opt_undeliveredMaps: any): void;
        }
    }
    /**
     * Implementation of the {@link WebChannel.RuntimeProperties}.
     */
    class ChannelProperties implements WebChannel.RuntimeProperties {
        /**
         * Implementation of the {@link WebChannel.RuntimeProperties}.
         * @param transportChannel The transport channel object.
         * @param channel The underlying channel object.
         */
        constructor(transportChannel: WebChannelBaseTransport.Channel, channel: WebChannelBase);
        private noStructuralTyping_closure_goog_labs_net_webchannel_webchannelbasetransport_ChannelProperties;
        getConcurrentRequestLimit(): any;
        isSpdyEnabled(): any;
        getPendingRequestCount(): any;
        getNonAckedMessages(): WebChannel.MessageData[];
        getHttpSessionId(): any;
        commit(callback: any): any;
        getLastResponseHeaders(): {
            [key: string]: string;
        } | undefined;
        getLastStatusCode(): any;
    }
}

import { Listenable } from '../events/listenable.js';
/**
 * Base class for network status information providers.
 */
export interface NetworkStatusMonitor extends Listenable {
    isOnline(): boolean;
}
export declare namespace NetworkStatusMonitor {
    /**
     * Enum for the events dispatched by the OnlineHandler.
     */
    enum EventType {
        ONLINE = "online",
        OFFLINE = "offline"
    }
}

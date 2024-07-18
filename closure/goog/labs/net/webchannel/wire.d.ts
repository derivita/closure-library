import * as maps from '../../../collections/maps.js';
/**
 * The interface class.
 */
export interface Wire {
}
export declare namespace Wire {
    /**
     * The latest protocol version that this class supports. We request this version
     * from the server when opening the connection. Should match
     * LATEST_CHANNEL_VERSION on the server code.
     */
    var LATEST_CHANNEL_VERSION: number;
    /**
     * The JSON field key for the raw data wrapper object.
     */
    var RAW_DATA_KEY: string;
    /**
     * Simple container class for a (mapId, map) pair.
     */
    class QueuedMap {
        constructor(mapId: number, map: object | maps.MapLike, opt_context?: object);
        getRawDataSize(): number | undefined;
        /**
         * The id for this map.
         */
        mapId: number;
        /**
         * The map itself.
         */
        map: object | maps.MapLike;
        /**
         * The context for the map.
         */
        context: object | null;
    }
}

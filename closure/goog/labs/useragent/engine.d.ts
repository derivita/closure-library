declare function isPresto(): boolean;
declare function isTrident(): boolean;
declare function isEdge(): boolean;
declare function isWebKit(): boolean;
declare function isGecko(): boolean;
declare function getVersion(): string;
/**
 *
 * @param version The version to check.
 * @return Whether the rendering engine version is higher or the same as the given version.
 */
declare function isVersionOrHigher(version: string | number): boolean;
declare const _default: {
    getVersion: typeof getVersion;
    isEdge: typeof isEdge;
    isGecko: typeof isGecko;
    isPresto: typeof isPresto;
    isTrident: typeof isTrident;
    isVersionOrHigher: typeof isVersionOrHigher;
    isWebKit: typeof isWebKit;
};
export default _default;

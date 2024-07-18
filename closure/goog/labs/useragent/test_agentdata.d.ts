/**
 * Based on UADataValues
 */
interface PartialUADataValues {
    platform: string | undefined;
    platformVersion: string | undefined;
    architecture: string | undefined;
    model: string | undefined;
    uaFullVersion: string | undefined;
    bitness: string | undefined;
    fullVersionList: NavigatorUABrandVersion[] | undefined;
}
/**
 * Returns a copy of the specified userAgentData object with functional
 * getHighEntropyValues that return the specified high-entropy values.
 * @param userAgentData The userAgentData whose synchronously available values should be present on the return value.
 * @param highEntropyData The values that should be returned when high-entropy values are requested. If a value is missing, getHighEntropyValues will return a rejected Promise if that value is requested.
 */
declare function withHighEntropyData(userAgentData: NavigatorUAData, highEntropyData: PartialUADataValues): NavigatorUAData;
export { withHighEntropyData };
export declare let INCOMPLETE_USERAGENT_DATA: NavigatorUAData;
export declare let CHROME_USERAGENT_DATA_MOBILE: NavigatorUAData;
export declare let CHROME_USERAGENT_DATA_LINUX: NavigatorUAData;
export declare let CHROME_USERAGENT_DATA_MACOS: NavigatorUAData;
export declare let CHROME_USERAGENT_DATA_WINDOWS: NavigatorUAData;
export declare let CHROME_USERAGENT_DATA_CROS: NavigatorUAData;
export declare let CHROME_USERAGENT_DATA_UNKNOWN: NavigatorUAData;
export declare let CHROME_USERAGENT_DATA_NO_PLATFORM: NavigatorUAData;
export declare let CHROME_NO_FULLVERSIONLIST_USERAGENT_DATA: NavigatorUAData;
export declare let OPERACHROMIUM_USERAGENT_DATA: NavigatorUAData;
export declare let EDGECHROMIUM_USERAGENT_DATA: NavigatorUAData;
export declare let SILK_USERAGENT_DATA: NavigatorUAData;

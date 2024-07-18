/**
 * Currently we detect the iPhone, iPod and Android mobiles (devices that have
 * both Android and Mobile in the user agent string).
 * @return Whether the user is using a mobile device.
 */
export declare function isMobile(): boolean;
/**
 * Currently we detect Kindle Fire, iPad, and Android tablets (devices that have
 * Android but not Mobile in the user agent string).
 * @return Whether the user is using a tablet.
 */
export declare function isTablet(): boolean;
export declare function isDesktop(): boolean;

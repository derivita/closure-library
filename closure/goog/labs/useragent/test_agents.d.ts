declare const testAgents: {
    ANDROID_BROWSER_235: string;
    ANDROID_BROWSER_221: string;
    ANDROID_BROWSER_233: string;
    ANDROID_BROWSER_403: string;
    ANDROID_BROWSER_403_ALT: string;
    ANDROID_BROWSER_4_4: string;
    ANDROID_WEB_VIEW_4_1_1: string;
    ANDROID_WEB_VIEW_4_4: string;
    IE_6: string;
    IE_7: string;
    IE_8: string;
    IE_8_COMPATIBILITY: string;
    IE_9: string;
    IE_9_COMPATIBILITY: string;
    IE_10: string;
    IE_10_COMPATIBILITY: string;
    /**
     * http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/10/17/getting-websites-ready-for-internet-explorer-10-on-windows-phone-8.aspx
     */
    IE_10_MOBILE: string;
    IE_11: string;
    IE_11_COMPATIBILITY_MSIE_7: string;
    IE_11_COMPATIBILITY_MSIE_9: string;
    /**
     * https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx?f=255&MSPPError=-2147217396#edge
     */
    EDGE_12_0: string;
    EDGE_12_9600: string;
    EDGE_CHROMIUM: string;
    FIREFOX_19: string;
    FIREFOX_LINUX: string;
    FIREFOX_MAC: string;
    FIREFOX_WINDOWS: string;
    FIREFOX_IPHONE: string;
    SAFARI_6: string;
    SAFARI_IPHONE_32: string;
    SAFARI_IPHONE_421: string;
    SAFARI_IPHONE_431: string;
    SAFARI_IPHONE_6: string;
    SAFARI_IPOD: string;
    SAFARI_MAC: string;
    SAFARI_WINDOWS: string;
    /**
     * The user-agent for desktop Safari and iPadOS Safari are identical and require
     * runtime examination.
     */
    SAFARI_13: string;
    /**
     * The user-agent for Safari on iPhone with iOS 14.1.1.
     */
    SAFARI_IPHONE_IOS_14: string;
    /**
     * The user-agent for Safari on iPhone with iOS 15.0.
     */
    SAFARI_IPHONE_IOS_15: string;
    /**
     * The user-agent for Safari Desktop on iOS 15.0 (which is enabled by default on
     * non-mini iPads running at >=2/3 of the screen, unless the user requests for
     * mobile site.
     */
    SAFARI_DESKTOP_IPAD_IOS_15: string;
    /**
     * The user-agent for Safari mobile on iOS 15.0 (which is enabled by default on
     * iPad mini and can be enabled on other iPads by requesting a mobile site).
     */
    SAFARI_MOBILE_IPAD_IOS_15: string;
    /**
     * The user-agent for Chrome browser on iPad running on iOS 15.0.
     */
    CHROME_IPAD_IOS_15: string;
    /**
     * The user-agent for Safari on MacOS Big Sur 11.5.2. Safari caps the Mac OS
     * version number in the user-agent string.
     * See: https://bugs.webkit.org/show_bug.cgi?id=216593.
     */
    SAFARI_MAC_OS_BIG_SUR: string;
    COAST: string;
    WEBVIEW_IPHONE: string;
    WEBVIEW_IPAD: string;
    OPERA_MINI: string;
    OPERA_10: string;
    OPERA_LINUX: string;
    OPERA_MAC: string;
    OPERA_15: string;
    IPAD_4: string;
    IPAD_5: string;
    IPAD_6: string;
    CHROME_25: string;
    CHROME_ANDROID: string;
    CHROME_ANDROID_PHONE_4_4: string;
    CHROME_ANDROID_TABLET: string;
    CHROME_ANDROID_TABLET_4_4: string;
    CHROME_HEADLESS: string;
    CHROME_IPHONE: string;
    CHROME_IPAD: string;
    CHROME_IPAD_DESKTOP: string;
    CHROME_LINUX: string;
    CHROME_LINUX_91: string;
    /**
     * We traditionally use Appversion to detect X11
     */
    CHROME_LINUX_APPVERVERSION: string;
    CHROME_MAC: string;
    CHROME_OS: string;
    CHROME_OS_910: string;
    CHROMECAST: string;
    KINDLE_FIRE: string;
    KINDLE_FIRE_SILK_93: string;
    FIREFOX_ANDROID_TABLET: string;
    KAIOS: string;
};
export { testAgents };

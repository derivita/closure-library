/**
 * A class for solving development CSS issues/emulating the CSS Compiler.
 */
export declare class DevCss {
    /**
     * A class for solving development CSS issues/emulating the CSS Compiler.
     * @param opt_userAgent The user agent, if not passed in, will be determined using userAgent.
     * @param opt_userAgentVersion The user agent's version. If not passed in, will be determined using userAgent.
     */
    constructor(opt_userAgent?: DevCss.UserAgent | null, opt_userAgentVersion?: number | string);
    private noStructuralTyping_closure_goog_debug_devcss_devcss_DevCss;
    /**
     * Rewrites the CSSOM as needed to activate any useragent-specific selectors.
     * @param opt_enableIe6ReadyHandler If true(the default), and the userAgent is ie6, we set a document "ready" event handler to walk the DOM and make combined selector className changes. Having this parameter also aids unit testing.
     */
    activateBrowserSpecificCssRules(opt_enableIe6ReadyHandler?: boolean): void;
}
export declare namespace DevCss {
    /**
     * A list of possible user agent strings.
     */
    enum UserAgent {
        OPERA = "OPERA",
        IE = "IE",
        GECKO = "GECKO",
        FIREFOX = "GECKO",
        WEBKIT = "WEBKIT",
        SAFARI = "WEBKIT",
        MOBILE = "MOBILE",
        EDGE = "EDGE"
    }
    /**
     * A list of strings that may be used for matching in CSS files/development.
     */
    enum CssToken_ {
        USERAGENT = "USERAGENT",
        SEPARATOR = "-",
        LESS_THAN = "LT",
        GREATER_THAN = "GT",
        LESS_THAN_OR_EQUAL = "LTE",
        GREATER_THAN_OR_EQUAL = "GTE",
        IE6_SELECTOR_TEXT = "goog-ie6-selector",
        IE6_COMBINED_GLUE = "_"
    }
}

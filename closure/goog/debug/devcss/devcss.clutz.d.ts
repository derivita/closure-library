//!! generated by clutz.
// Generated from debug/devcss/devcss.js
declare namespace ಠ_ಠ.clutz.goog.debug {
  /**
   * A class for solving development CSS issues/emulating the CSS Compiler.
   */
  class DevCss {
    private noStructuralTyping_goog_debug_DevCss : any;
    /**
     * A class for solving development CSS issues/emulating the CSS Compiler.
     * @param opt_userAgent The user agent, if not passed in, will be determined using goog.userAgent.
     * @param opt_userAgentVersion The user agent's version. If not passed in, will be determined using goog.userAgent.
     */
    constructor (opt_userAgent ? : ಠ_ಠ.clutz.goog.debug.DevCss.UserAgent , opt_userAgentVersion ? : number | string ) ;
    /**
     * Rewrites the CSSOM as needed to activate any useragent-specific selectors.
     * @param opt_enableIe6ReadyHandler If true(the default), and the userAgent is ie6, we set a document "ready" event handler to walk the DOM and make combined selector className changes. Having this parameter also aids unit testing.
     */
    activateBrowserSpecificCssRules (opt_enableIe6ReadyHandler ? : boolean ) : void ;
  }
}
declare module 'goog:goog.debug.DevCss' {
  import DevCss = ಠ_ಠ.clutz.goog.debug.DevCss;
  export default DevCss;
}
// Generated from debug/devcss/devcss.js
declare namespace ಠ_ಠ.clutz.goog.debug.DevCss {
  /**
   * A list of possible user agent strings.
   */
  /**
   * A list of possible user agent strings.
   */
  enum UserAgent {
    EDGE = 'EDGE' ,
    FIREFOX = 'GECKO' ,
    GECKO = 'GECKO' ,
    IE = 'IE' ,
    MOBILE = 'MOBILE' ,
    OPERA = 'OPERA' ,
    SAFARI = 'WEBKIT' ,
    WEBKIT = 'WEBKIT' ,
  }
}
declare module 'goog:goog.debug.DevCss.UserAgent' {
  import UserAgent = ಠ_ಠ.clutz.goog.debug.DevCss.UserAgent;
  export default UserAgent;
}

//!! generated by clutz.
// Generated from debug/debugwindow.js
declare namespace ಠ_ಠ.clutz.goog.debug {
  /**
   * Provides a debug DebugWindow that is bound to the goog.log.Logger.
   * It handles log messages and writes them to the DebugWindow. This doesn't
   * provide a lot of functionality that the old Gmail logging infrastructure
   * provided like saving debug logs for exporting to the server. Now that we
   * have an event-based logging infrastructure, we can encapsulate that
   * functionality in a separate class.
   */
  class DebugWindow {
    private noStructuralTyping_goog_debug_DebugWindow : any;
    /**
     * Provides a debug DebugWindow that is bound to the goog.log.Logger.
     * It handles log messages and writes them to the DebugWindow. This doesn't
     * provide a lot of functionality that the old Gmail logging infrastructure
     * provided like saving debug logs for exporting to the server. Now that we
     * have an event-based logging infrastructure, we can encapsulate that
     * functionality in a separate class.
     * @param opt_identifier Identifier for this logging class.
     * @param opt_prefix Prefix prepended to messages.
     */
    constructor (opt_identifier ? : string , opt_prefix ? : string ) ;
    /**
     * Identifier for this logging class
     */
    protected identifier : string ;
    /**
     * Array used to buffer log output
     */
    protected outputBuffer : ಠ_ಠ.clutz.goog.html.SafeHtml [] ;
    /**
     * Adds a logger name to be filtered.
     * @param loggerName the logger name to add.
     */
    addFilter (loggerName : string ) : void ;
    /**
     * Adds a log record.
     * @param logRecord the LogRecord.
     */
    addLogRecord (logRecord : ಠ_ಠ.clutz.goog.log.LogRecord | null ) : void ;
    addSeparator ( ) : void ;
    /**
     * Clears the contents of the debug window
     */
    protected clear ( ) : void ;
    /**
     * Gets the formatter for outputting to the debug window. The default formatter
     * is an instance of goog.debug.HtmlFormatter
     */
    getFormatter ( ) : ಠ_ಠ.clutz.goog.debug.Formatter | null ;
    getStyleRules ( ) : ಠ_ಠ.clutz.goog.html.SafeStyleSheet ;
    hasActiveWindow ( ) : boolean ;
    init ( ) : void ;
    /**
     * Whether we are currently capturing logger output.
     */
    isCapturing ( ) : boolean ;
    /**
     * Whether the DebugWindow is enabled. When the DebugWindow is enabled, it
     * tries to keep its window open and logs all messages to the window.  When the
     * DebugWindow is disabled, it stops logging messages to its window.
     */
    isEnabled ( ) : boolean ;
    /**
     * Timestamp for the last time the log was written to.
     */
    protected lastCall : number ;
    /**
     * Removes a logger name to be filtered.
     * @param loggerName the logger name to remove.
     */
    removeFilter (loggerName : string ) : void ;
    /**
     * Modify the size of the circular buffer. Allows the log to retain more
     * information while the window is closed.
     * @param size New size of the circular buffer.
     */
    resetBufferWithNewSize (size : number ) : void ;
    /**
     * Sets whether we are currently capturing logger output.
     * @param capturing Whether to capture logger output.
     */
    setCapturing (capturing : boolean ) : void ;
    /**
     * Sets whether the DebugWindow is enabled. When the DebugWindow is enabled, it
     * tries to keep its window open and log all messages to the window. When the
     * DebugWindow is disabled, it stops logging messages to its window. The
     * DebugWindow also saves this state to a cookie so that it's persisted across
     * application refreshes.
     * @param enable Whether the DebugWindow is enabled.
     */
    setEnabled (enable : boolean ) : void ;
    /**
     * Sets whether the debug window should be force enabled when a severe log is
     * encountered.
     * @param enableOnSevere Whether to enable on severe logs..
     */
    setForceEnableOnSevere (enableOnSevere : boolean ) : void ;
    /**
     * Sets the formatter for outputting to the debug window.
     * @param formatter The formatter to use.
     */
    setFormatter (formatter : ಠ_ಠ.clutz.goog.debug.Formatter | null ) : void ;
    /**
     * Sets the welcome message shown when the window is first opened or reset.
     * @param msg An HTML string.
     */
    setWelcomeMessage (msg : string ) : void ;
    /**
     * HTML string printed when the debug window opens
     */
    protected welcomeMessage : string ;
    /**
     * Reference to debug window
     */
    protected win : Window | null ;
    /**
     * Write to the log and maybe scroll into view.
     */
    protected writeBufferToLog ( ) : void ;
    /**
     * Writes the initial HTML of the debug window.
     */
    protected writeInitialDocument ( ) : void ;
    /**
     * Writes all saved messages to the DebugWindow.
     */
    protected writeSavedMessages ( ) : void ;
    /**
     * How long to keep the cookies for in milliseconds
     */
    static COOKIE_TIME : number ;
    /**
     * Max number of messages to be saved
     */
    static MAX_SAVED : number ;
    static isEnabled (identifier : string ) : boolean ;
  }
}
declare module 'goog:goog.debug.DebugWindow' {
  import DebugWindow = ಠ_ಠ.clutz.goog.debug.DebugWindow;
  export default DebugWindow;
}

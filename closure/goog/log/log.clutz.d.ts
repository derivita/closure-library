//!! generated by clutz.
// Generated from log/log.js
declare namespace ಠ_ಠ.clutz.goog.log {
  let ENABLED : boolean ;
  /**
   * A type that describes a function that handles logs.
   */
  type LogRecordHandler = (a : ಠ_ಠ.clutz.goog.log.LogRecord ) => any ;
  /**
   * A LogRegistryEntry_ contains data about a Logger.
   */
  class LogRegistryEntry_ {
    private noStructuralTyping_goog_log_LogRegistryEntry_ : any;
    constructor (name : string , parent ? : ಠ_ಠ.clutz.goog.log.LogRegistryEntry_ | null ) ;
    /**
     * A list of references to LogRegistryEntry_ objects that correspond to the
     * direct descendants of the Logger represented by this LogRegistryEntry_
     * object (via name, treated as a dot-separated namespace).
     */
    children : ಠ_ಠ.clutz.goog.log.LogRegistryEntry_ [] ;
    /**
     * A list of functions that will be called when the Logger corresponding to
     * this LogRegistryEntry_ is used to log a message.
     */
    handlers : ( ಠ_ಠ.clutz.goog.log.LogRecordHandler ) [] ;
    /**
     * The minimum log level that a message must be for it to be logged by the
     * Logger corresponding to this LogRegistryEntry_. If null, the parent's
     * log level is used instead.
     */
    level : ಠ_ಠ.clutz.goog.log.Level | null ;
    /**
     * A reference to the Logger itself.
     */
    logger : ಠ_ಠ.clutz.goog.log.Logger ;
    /**
     * A reference to LogRegistryEntry_ objects that correspond to the direct
     * ancestor of the Logger represented by this LogRegistryEntry_ object
     * (via name, treated as a dot-separated namespace).
     */
    parent : ಠ_ಠ.clutz.goog.log.LogRegistryEntry_ | null ;
    /**
     * Returns the effective level of the logger based on its ancestors' levels.
     */
    getEffectiveLevel ( ) : ಠ_ಠ.clutz.goog.log.Level ;
    /**
     * Calls the log handlers associated with this Logger, followed by those of
     * its parents, etc. until the root Logger's associated log handlers are
     * called.
     * @param logRecord The log record to pass to each handler.
     */
    publish (logRecord : ಠ_ಠ.clutz.goog.log.LogRecord ) : void ;
  }
  /**
   * A LogRegistry_ owns references to all loggers, and is responsible for storing
   * all the internal state needed for loggers to operate correctly.
   */
  class LogRegistry_ {
    private noStructuralTyping_goog_log_LogRegistry_ : any;
    /**
     * Per-log information retained by this LogRegistry_.
     */
    entries : { [ key: string ]: ಠ_ಠ.clutz.goog.log.LogRegistryEntry_ } ;
    /**
     * Get a list of all loggers.
     */
    getAllLoggers ( ) : ಠ_ಠ.clutz.goog.log.Logger [] ;
    /**
     * Gets the LogRegistry_ entry under the given name, creating the entry if one
     * doesn't already exist.
     * @param name The name to look up.
     * @param level If provided, override the default logging level of the returned Logger with the provided level.
     */
    getLogRegistryEntry (name : string , level ? : ಠ_ಠ.clutz.goog.log.Level | null ) : ಠ_ಠ.clutz.goog.log.LogRegistryEntry_ ;
    /**
     * A static method that always returns the same instance of LogRegistry_.
     */
    static getInstance ( ) : ಠ_ಠ.clutz.goog.log.LogRegistry_ ;
  }
  /**
   * A message value that can be handled by a goog.log.Logger.
   *
   * Functions are treated like callbacks, but are only called when the event's
   * log level is enabled. This is useful for logging messages that are expensive
   * to construct.
   */
  type Loggable = string | ( ( ) => string ) ;
  let ROOT_LOGGER_NAME : string ;
  /**
   * Adds a handler to the logger. This doesn't use the event system because
   * we want to be able to add logging to the event system.
   * @param handler Handler function to add.
   */
  function addHandler (logger : ಠ_ಠ.clutz.goog.log.Logger | null , handler : ಠ_ಠ.clutz.goog.log.LogRecordHandler ) : void ;
  /**
   * Logs a message at the goog.log.Level.SEVERE level.
   * If the logger is currently enabled for the given message level then the
   * given message is forwarded to all the registered output Handler objects.
   * @param msg The message to log.
   * @param exception An exception associated with the message.
   */
  function error (logger : ಠ_ಠ.clutz.goog.log.Logger | null , msg : string | ( ( ) => string ) , exception ? : any ) : void ;
  /**
   * Logs a message at the goog.log.Level.FINE level.
   * If the logger is currently enabled for the given message level then the
   * given message is forwarded to all the registered output Handler objects.
   * @param msg The message to log.
   * @param exception An exception associated with the message.
   */
  function fine (logger : ಠ_ಠ.clutz.goog.log.Logger | null , msg : string | ( ( ) => string ) , exception ? : any ) : void ;
  /**
   * Gets a list of all loggers.
   */
  function getAllLoggers ( ) : ಠ_ಠ.clutz.goog.log.Logger [] ;
  /**
   * Returns the effective level of the logger based on its ancestors' levels.
   */
  function getEffectiveLevel (logger : ಠ_ಠ.clutz.goog.log.Logger | null ) : ಠ_ಠ.clutz.goog.log.Level ;
  /**
   * Gets the log level specifying which message levels will be logged by this
   * logger. Message levels lower than this value will be discarded.
   * The level value goog.log.Level.OFF can be used to turn off logging. If the
   * level is null, it means that this node should inherit its level from its
   * nearest ancestor with a specific (non-null) level value.
   */
  function getLevel (logger : ಠ_ಠ.clutz.goog.log.Logger | null ) : ಠ_ಠ.clutz.goog.log.Level | null ;
  /**
   * Creates a log record. If the logger is currently enabled for the
   * given message level then the given message is forwarded to all the
   * registered output Handler objects.
   * TODO(user): Delete this method from the public API.
   * @param level One of the level identifiers.
   * @param msg The message to log.
   * @param exception An exception associated with the message.
   */
  function getLogRecord (logger : ಠ_ಠ.clutz.goog.log.Logger | null , level : ಠ_ಠ.clutz.goog.log.Level | null , msg : string , exception ? : any ) : ಠ_ಠ.clutz.goog.log.LogRecord ;
  /**
   * Finds or creates a logger for a named subsystem. If a logger has already been
   * created with the given name it is returned. Otherwise, a new logger is
   * created. If a new logger is created, it will be configured to send logging
   * output to its parent's handlers.
   * @param name A name for the logger. This should be a dot-separated name and should normally be based on the package name or class name of the subsystem, such as goog.net.BrowserChannel.
   * @param level If provided, override the default logging level with the provided level. This parameter is deprecated; prefer using goog.log.setLevel to set the logger's level instead. TODO(user): Delete this parameter.
   */
  function getLogger (name : string , level ? : ಠ_ಠ.clutz.goog.log.Level | null ) : ಠ_ಠ.clutz.goog.log.Logger | null ;
  /**
   * Returns the root logger.
   */
  function getRootLogger ( ) : ಠ_ಠ.clutz.goog.log.Logger | null ;
  /**
   * Logs a message at the goog.log.Level.INFO level.
   * If the logger is currently enabled for the given message level then the
   * given message is forwarded to all the registered output Handler objects.
   * @param msg The message to log.
   * @param exception An exception associated with the message.
   */
  function info (logger : ಠ_ಠ.clutz.goog.log.Logger | null , msg : string | ( ( ) => string ) , exception ? : any ) : void ;
  /**
   * Checks if a message of the given level would actually be logged by this
   * logger. This check is based on the goog.log.Loggers effective level, which
   * may be inherited from its parent.
   * @param level The level to check.
   */
  function isLoggable (logger : ಠ_ಠ.clutz.goog.log.Logger | null , level : ಠ_ಠ.clutz.goog.log.Level | null ) : boolean ;
  /**
   * Logs a message. If the logger is currently enabled for the
   * given message level then the given message is forwarded to all the
   * registered output Handler objects.
   * TODO(user): The level parameter should be made required.
   * @param level One of the level identifiers.
   * @param msg The message to log.
   * @param exception An exception associated with the message.
   */
  function log (logger : ಠ_ಠ.clutz.goog.log.Logger | null , level : ಠ_ಠ.clutz.goog.log.Level | null , msg : string | ( ( ) => string ) , exception ? : any ) : void ;
  /**
   * Logs a goog.log.LogRecord. If the logger is currently enabled for the
   * given message level then the given message is forwarded to all the
   * registered output Handler objects.
   * TODO(user): Delete this method from the public API.
   * @param logRecord A log record to log.
   */
  function publishLogRecord (logger : ಠ_ಠ.clutz.goog.log.Logger | null , logRecord : ಠ_ಠ.clutz.goog.log.LogRecord ) : void ;
  /**
   * Removes a handler from the logger. This doesn't use the event system because
   * we want to be able to add logging to the event system.
   * @param handler Handler function to remove.
   */
  function removeHandler (logger : ಠ_ಠ.clutz.goog.log.Logger | null , handler : ಠ_ಠ.clutz.goog.log.LogRecordHandler ) : boolean ;
  /**
   * Set the log level specifying which message levels will be logged by this
   * logger. Message levels lower than this value will be discarded.
   * The level value goog.log.Level.OFF can be used to turn off logging. If the
   * new level is null, it means that this node should inherit its level from its
   * nearest ancestor with a specific (non-null) level value.
   * @param level The new level.
   */
  function setLevel (logger : ಠ_ಠ.clutz.goog.log.Logger | null , level : ಠ_ಠ.clutz.goog.log.Level | null ) : void ;
  /**
   * Logs a message at the goog.log.Level.WARNING level.
   * If the logger is currently enabled for the given message level then the
   * given message is forwarded to all the registered output Handler objects.
   * @param msg The message to log.
   * @param exception An exception associated with the message.
   */
  function warning (logger : ಠ_ಠ.clutz.goog.log.Logger | null , msg : string | ( ( ) => string ) , exception ? : any ) : void ;
}
declare module 'goog:goog.log' {
  import log = ಠ_ಠ.clutz.goog.log;
  export = log;
}
// Generated from log/log.js
declare namespace ಠ_ಠ.clutz.goog.log {
  /**
   * The goog.log.Level class defines a set of standard logging levels that
   * can be used to control logging output.  The logging goog.log.Level objects
   * are ordered and are specified by ordered integers.  Enabling logging
   * at a given level also enables logging at all higher levels.
   * <p>
   * Clients should normally use the predefined goog.log.Level constants such
   * as goog.log.Level.SEVERE.
   * <p>
   * The levels in descending order are:
   * <ul>
   * <li>SEVERE (highest value)
   * <li>WARNING
   * <li>INFO
   * <li>CONFIG
   * <li>FINE
   * <li>FINER
   * <li>FINEST  (lowest value)
   * </ul>
   * In addition there is a level OFF that can be used to turn
   * off logging, and a level ALL that can be used to enable
   * logging of all messages.
   */
  export import Level = ಠ_ಠ.clutz.goog.debug.Logger.Level ;
}
declare module 'goog:goog.log.Level' {
  import Level = ಠ_ಠ.clutz.goog.log.Level;
  export default Level;
}
// Generated from log/log.js
declare namespace ಠ_ಠ.clutz.goog.log {
  /**
   * A buffer for log records. The purpose of this is to improve
   * logging performance by re-using old objects when the buffer becomes full and
   * to eliminate the need for each app to implement their own log buffer. The
   * disadvantage to doing this is that log handlers cannot maintain references to
   * log records and expect that they are not overwriten at a later point.
   */
  class LogBuffer {
    private noStructuralTyping_goog_log_LogBuffer : any;
    constructor (capacity ? : number ) ;
    /**
     * Adds a log record to the buffer, possibly overwriting the oldest record.
     * @param level One of the level identifiers.
     * @param msg The string message.
     * @param loggerName The name of the source logger.
     */
    addRecord (level : ಠ_ಠ.clutz.goog.log.Level , msg : string , loggerName : string ) : ಠ_ಠ.clutz.goog.log.LogRecord ;
    /**
     * Removes all buffered log records.
     */
    clear ( ) : void ;
    /**
     * Calls the given function for each buffered log record, starting with the
     * oldest one.
     * TODO(user): Make this a [Symbol.iterator] once all usages of
     * goog.debug.LogBuffer can be deleted.
     * @param func The function to call.
     */
    forEachRecord (func : ಠ_ಠ.clutz.goog.log.LogRecordHandler ) : void ;
    isBufferingEnabled ( ) : boolean ;
    isFull ( ) : boolean ;
    static CAPACITY : number ;
    /**
     * A static method that always returns the same instance of goog.log.LogBuffer.
     */
    static getInstance ( ) : ಠ_ಠ.clutz.goog.log.LogBuffer ;
    /**
     * Whether the log buffer is enabled.
     */
    static isBufferingEnabled ( ) : boolean ;
  }
}
declare module 'goog:goog.log.LogBuffer' {
  import LogBuffer = ಠ_ಠ.clutz.goog.log.LogBuffer;
  export default LogBuffer;
}
// Generated from log/log.js
declare namespace ಠ_ಠ.clutz.goog.log {
  /**
   * LogRecord objects are used to pass logging requests between the logging
   * framework and individual log handlers. These objects should not be
   * constructed or reset by application code.
   */
  export import LogRecord = ಠ_ಠ.clutz.goog.debug.LogRecord ;
}
declare module 'goog:goog.log.LogRecord' {
  import LogRecord = ಠ_ಠ.clutz.goog.log.LogRecord;
  export default LogRecord;
}
// Generated from log/log.js
declare namespace ಠ_ಠ.clutz.goog.log {
  export import Logger = ಠ_ಠ.clutz.goog.debug.Logger ;
}
declare module 'goog:goog.log.Logger' {
  import Logger = ಠ_ಠ.clutz.goog.log.Logger;
  export default Logger;
}

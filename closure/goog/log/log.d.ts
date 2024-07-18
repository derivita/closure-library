/**
 * A message value that can be handled by a Logger.
 *
 * Functions are treated like callbacks, but are only called when the event's
 * log level is enabled. This is useful for logging messages that are expensive
 * to construct.
 */
export type Loggable = string | (() => string);
export declare var ENABLED: boolean;
export declare var ROOT_LOGGER_NAME: string;
/**
 * The Level class defines a set of standard logging levels that
 * can be used to control logging output.  The logging Level objects
 * are ordered and are specified by ordered integers.  Enabling logging
 * at a given level also enables logging at all higher levels.
 * <p>
 * Clients should normally use the predefined Level constants such
 * as Level.SEVERE.
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
export declare class Level {
    constructor(name: string, value: number);
    toString(): string;
    /**
     * The name of the level
     */
    name: string;
    /**
     * The numeric value of the level
     */
    value: number;
    /**
     * OFF is a special level that can be used to turn off logging.
     * This level is initialized to <CODE>Infinity</CODE>.
     */
    static OFF: Level;
    /**
     * SHOUT is a message level for extra debugging loudness.
     * This level is initialized to <CODE>1200</CODE>.
     */
    static SHOUT: Level;
    /**
     * SEVERE is a message level indicating a serious failure.
     * This level is initialized to <CODE>1000</CODE>.
     */
    static SEVERE: Level;
    /**
     * WARNING is a message level indicating a potential problem.
     * This level is initialized to <CODE>900</CODE>.
     */
    static WARNING: Level;
    /**
     * INFO is a message level for informational messages.
     * This level is initialized to <CODE>800</CODE>.
     */
    static INFO: Level;
    /**
     * CONFIG is a message level for static configuration messages.
     * This level is initialized to <CODE>700</CODE>.
     */
    static CONFIG: Level;
    /**
     * FINE is a message level providing tracing information.
     * This level is initialized to <CODE>500</CODE>.
     */
    static FINE: Level;
    /**
     * FINER indicates a fairly detailed tracing message.
     * This level is initialized to <CODE>400</CODE>.
     */
    static FINER: Level;
    /**
     * FINEST indicates a highly detailed tracing message.
     * This level is initialized to <CODE>300</CODE>.
     */
    static FINEST: Level;
    /**
     * ALL indicates that all messages should be logged.
     * This level is initialized to <CODE>0</CODE>.
     */
    static ALL: Level;
    /**
     * The predefined levels.
     */
    static PREDEFINED_LEVELS: Level[];
    /**
     * Gets the predefined level with the given name.
     * @param name The name of the level.
     * @return The level, or null if none found.
     */
    static getPredefinedLevel(name: string): Level | null;
    /**
     * Gets the highest predefined level <= #value.
     * @param value Level value.
     * @return The level, or null if none found.
     */
    static getPredefinedLevelByValue(value: number): Level | null;
}
export interface Logger {
    /**
     * Gets the name of the Logger.
     */
    getName(): string;
}
export declare namespace Logger {
    /**
     * Only for compatibility with debug.Logger.Level, which is how many users
     * access Level.
     * TODO(user): Remove these definitions.
     */
    var Level: any;
}
/**
 * A buffer for log records. The purpose of this is to improve
 * logging performance by re-using old objects when the buffer becomes full and
 * to eliminate the need for each app to implement their own log buffer. The
 * disadvantage to doing this is that log handlers cannot maintain references to
 * log records and expect that they are not overwriten at a later point.
 */
export declare class LogBuffer {
    constructor(capacity?: number);
    /**
     * Adds a log record to the buffer, possibly overwriting the oldest record.
     */
    addRecord(level: Level, msg: string, loggerName: string): LogRecord;
    /**
     * Calls the given function for each buffered log record, starting with the
     * oldest one.
     * TODO(user): Make this a [Symbol.iterator] once all usages of
     * debug.LogBuffer can be deleted.
     */
    forEachRecord(func: LogRecordHandler): void;
    isBufferingEnabled(): boolean;
    isFull(): boolean;
    /**
     * Removes all buffered log records.
     */
    clear(): void;
    static CAPACITY: number;
    /**
     * A static method that always returns the same instance of LogBuffer.
     * @return The LogBuffer singleton instance.
     */
    static getInstance(): LogBuffer;
    /**
     * Whether the log buffer is enabled.
     */
    static isBufferingEnabled(): boolean;
}
/**
 * LogRecord objects are used to pass logging requests between the logging
 * framework and individual log handlers. These objects should not be
 * constructed or reset by application code.
 */
export declare class LogRecord {
    constructor(level: Level | null, msg: string, loggerName: string, time?: number, sequenceNumber?: number);
    /**
     * Sets all fields of the log record.
     */
    reset(level: Level, msg: string, loggerName: string, time?: number, sequenceNumber?: number): void;
    /**
     * Gets the source Logger's name.
     */
    getLoggerName(): string;
    /**
     * Sets the source Logger's name.
     */
    setLoggerName(name: string): void;
    /**
     * Gets the exception that is part of the log record.
     */
    getException(): any;
    /**
     * Sets the exception that is part of the log record.
     */
    setException(exception: any): void;
    /**
     * Gets the logging message level, for example Level.SEVERE.
     */
    getLevel(): Level;
    /**
     * Sets the logging message level, for example Level.SEVERE.
     */
    setLevel(level: Level): void;
    /**
     * Gets the "raw" log message, before localization or formatting.
     */
    getMessage(): string;
    /**
     * Sets the "raw" log message, before localization or formatting.
     */
    setMessage(msg: string): void;
    /**
     * Gets event time in milliseconds since 1970.
     */
    getMillis(): number;
    /**
     * Sets event time in milliseconds since 1970.
     */
    setMillis(time: number): void;
    /**
     * Gets the sequence number. Sequence numbers are normally assigned when a
     * LogRecord is constructed or reset in incrementally increasing order.
     */
    getSequenceNumber(): number;
}
/**
 * A type that describes a function that handles logs.
 */
export type LogRecordHandler = () => any;
/**
 * A LogRegistryEntry_ contains data about a Logger.
 */
export declare class LogRegistryEntry_ {
    constructor(name: string, parent?: LogRegistryEntry_ | null);
    /**
     * Returns the effective level of the logger based on its ancestors' levels.
     */
    getEffectiveLevel(): Level;
    /**
     * Calls the log handlers associated with this Logger, followed by those of
     * its parents, etc. until the root Logger's associated log handlers are
     * called.
     */
    publish(logRecord: LogRecord): void;
    /**
     * The minimum log level that a message must be for it to be logged by the
     * Logger corresponding to this LogRegistryEntry_. If null, the parent's
     * log level is used instead.
     */
    level: Level | null;
    /**
     * A list of functions that will be called when the Logger corresponding to
     * this LogRegistryEntry_ is used to log a message.
     */
    handlers: LogRecordHandler[];
    /**
     * A reference to LogRegistryEntry_ objects that correspond to the direct
     * ancestor of the Logger represented by this LogRegistryEntry_ object
     * (via name, treated as a dot-separated namespace).
     */
    parent: LogRegistryEntry_ | null;
    /**
     * A list of references to LogRegistryEntry_ objects that correspond to the
     * direct descendants of the Logger represented by this LogRegistryEntry_
     * object (via name, treated as a dot-separated namespace).
     */
    children: LogRegistryEntry_[];
    /**
     * A reference to the Logger itself.
     */
    logger: Logger;
}
/**
 * A LogRegistry_ owns references to all loggers, and is responsible for storing
 * all the internal state needed for loggers to operate correctly.
 */
export declare class LogRegistry_ {
    constructor();
    /**
     * Gets the LogRegistry_ entry under the given name, creating the entry if one
     * doesn't already exist.
     */
    getLogRegistryEntry(name: string, level?: Level | null): LogRegistryEntry_;
    /**
     * Get a list of all loggers.
     */
    getAllLoggers(): Logger[];
    /**
     * Per-log information retained by this LogRegistry_.
     */
    entries: {
        [key: string]: LogRegistryEntry_;
    };
    /**
     * A static method that always returns the same instance of LogRegistry_.
     * @return The LogRegistry_ singleton instance.
     */
    static getInstance(): LogRegistry_;
}
/**
 * Finds or creates a logger for a named subsystem. If a logger has already been
 * created with the given name it is returned. Otherwise, a new logger is
 * created. If a new logger is created, it will be configured to send logging
 * output to its parent's handlers.
 * @param name A name for the logger. This should be a dot-separated name and should normally be based on the package name or class name of the subsystem, such as goog.net.BrowserChannel.
 * @param level If provided, override the default logging level with the provided level. This parameter is deprecated; prefer using setLevel to set the logger's level instead. TODO(user): Delete this parameter.
 * @return The named logger, or null if logging is disabled.
 */
export declare function getLogger(name: string, level?: Level | null): Logger | null;
/**
 * Returns the root logger.
 * @return The root logger, or null if logging is disabled.
 */
export declare function getRootLogger(): Logger | null;
/**
 * Adds a handler to the logger. This doesn't use the event system because
 * we want to be able to add logging to the event system.
 * @param handler Handler function to add.
 */
export declare function addHandler(logger: Logger | null, handler: LogRecordHandler): void;
/**
 * Removes a handler from the logger. This doesn't use the event system because
 * we want to be able to add logging to the event system.
 * @param handler Handler function to remove.
 * @return Whether the handler was removed.
 */
export declare function removeHandler(logger: Logger | null, handler: LogRecordHandler): boolean;
/**
 * Set the log level specifying which message levels will be logged by this
 * logger. Message levels lower than this value will be discarded.
 * The level value Level.OFF can be used to turn off logging. If the
 * new level is null, it means that this node should inherit its level from its
 * nearest ancestor with a specific (non-null) level value.
 * @param level The new level.
 */
export declare function setLevel(logger: Logger | null, level: Level | null): void;
/**
 * Gets the log level specifying which message levels will be logged by this
 * logger. Message levels lower than this value will be discarded.
 * The level value Level.OFF can be used to turn off logging. If the
 * level is null, it means that this node should inherit its level from its
 * nearest ancestor with a specific (non-null) level value.
 * @return The level.
 */
export declare function getLevel(logger: Logger | null): Level | null;
/**
 * Returns the effective level of the logger based on its ancestors' levels.
 * @return The level.
 */
export declare function getEffectiveLevel(logger: Logger | null): Level;
/**
 * Checks if a message of the given level would actually be logged by this
 * logger. This check is based on the Loggers effective level, which
 * may be inherited from its parent.
 * @param level The level to check.
 * @return Whether the message would be logged.
 */
export declare function isLoggable(logger: Logger | null, level: Level | null): boolean;
/**
 * Gets a list of all loggers.
 */
export declare function getAllLoggers(): Logger[];
/**
 * Creates a log record. If the logger is currently enabled for the
 * given message level then the given message is forwarded to all the
 * registered output Handler objects.
 * TODO(user): Delete this method from the public API.
 * @param level One of the level identifiers.
 * @param msg The message to log.
 * @param exception An exception associated with the message.
 */
export declare function getLogRecord(logger: Logger | null, level: Level | null, msg: string, exception?: any): LogRecord;
/**
 * Logs a LogRecord. If the logger is currently enabled for the
 * given message level then the given message is forwarded to all the
 * registered output Handler objects.
 * TODO(user): Delete this method from the public API.
 * @param logRecord A log record to log.
 */
export declare function publishLogRecord(logger: Logger | null, logRecord: LogRecord): void;
/**
 * Logs a message. If the logger is currently enabled for the
 * given message level then the given message is forwarded to all the
 * registered output Handler objects.
 * TODO(user): The level parameter should be made required.
 * @param level One of the level identifiers.
 * @param msg The message to log.
 * @param exception An exception associated with the message.
 */
export declare function log(logger: Logger | null, level: Level | null, msg: Loggable, exception?: any): void;
/**
 * Logs a message at the Level.SEVERE level.
 * If the logger is currently enabled for the given message level then the
 * given message is forwarded to all the registered output Handler objects.
 * @param msg The message to log.
 * @param exception An exception associated with the message.
 */
export declare function error(logger: Logger | null, msg: Loggable, exception?: any): void;
/**
 * Logs a message at the Level.WARNING level.
 * If the logger is currently enabled for the given message level then the
 * given message is forwarded to all the registered output Handler objects.
 * @param msg The message to log.
 * @param exception An exception associated with the message.
 */
export declare function warning(logger: Logger | null, msg: Loggable, exception?: any): void;
/**
 * Logs a message at the Level.INFO level.
 * If the logger is currently enabled for the given message level then the
 * given message is forwarded to all the registered output Handler objects.
 * @param msg The message to log.
 * @param exception An exception associated with the message.
 */
export declare function info(logger: Logger | null, msg: Loggable, exception?: any): void;
/**
 * Logs a message at the Level.FINE level.
 * If the logger is currently enabled for the given message level then the
 * given message is forwarded to all the registered output Handler objects.
 * @param msg The message to log.
 * @param exception An exception associated with the message.
 */
export declare function fine(logger: Logger | null, msg: Loggable, exception?: any): void;

/**
 * The file name for the open-hand (draggable) cursor.
 */
export declare var OPENHAND_FILE: string;
/**
 * The file name for the close-hand (dragging) cursor.
 */
export declare var CLOSEDHAND_FILE: string;
/**
 * Create the style for the draggable cursor based on browser and OS.
 * The value can be extended to be '!important' if needed.
 * @param absoluteDotCurFilePath The absolute base path of 'openhand.cur' file to be used if the browser supports it.
 * @param opt_obsolete Just for compiler backward compatibility.
 * @return The "draggable" mouse cursor style value.
 */
export declare function getDraggableCursorStyle(absoluteDotCurFilePath: string, opt_obsolete?: boolean): string;
/**
 * Create the style for the dragging cursor based on browser and OS.
 * The value can be extended to be '!important' if needed.
 * @param absoluteDotCurFilePath The absolute base path of 'closedhand.cur' file to be used if the browser supports it.
 * @param opt_obsolete Just for compiler backward compatibility.
 * @return The "dragging" mouse cursor style value.
 */
export declare function getDraggingCursorStyle(absoluteDotCurFilePath: string, opt_obsolete?: boolean): string;

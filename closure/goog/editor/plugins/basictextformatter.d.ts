import { Plugin } from '../plugin.js';
import * as log from '../../log/log.js';
/**
 * Functions to style text (e.g. underline, make bold, etc.)
 */
export declare class BasicTextFormatter extends Plugin {
    /**
     * Functions to style text (e.g. underline, make bold, etc.)
     */
    constructor();
    private noStructuralTyping_closure_goog_editor_plugins_basictextformatter_BasicTextFormatter;
    getTrogClassId(): string;
    /**
     * Logging object.
     */
    logger: log.Logger | null;
    /**
     * Whether the string corresponds to a command this plugin handles.
     * @param command Command string to check.
     * @return Whether the string corresponds to a command this plugin handles.
     */
    isSupportedCommand(command: string): boolean;
    /**
     * Whether the string corresponds to a command that should be silent.
     */
    isSilentCommand(command: any): boolean;
    /**
     * Execute a user-initiated command.
     * @param command Command to execute.
     * @param var_args For color commands, this should be the hex color (with the #). For FORMAT_BLOCK, this should be the BasicTextFormatter.BLOCK_COMMAND. It will be unused for other commands.
     * @return The result of the command.
     */
    execCommandInternal(command: string, ...var_args: any[]): object | undefined | null;
    /**
     * Gets the command value.
     * @param command The command value to get.
     * @return The current value of the command in the given selection.  NOTE: This return type list is not documented in MSDN or MDC and has been constructed from experience.  Please update it if necessary.
     */
    queryCommandValue(command: string): string | boolean | null;
    prepareContentsHtml(html: any): string;
    cleanContentsDom(fieldCopy: any): void;
    cleanContentsHtml(html: any): string;
    handleKeyboardShortcut(e: any, key: any, isModifierPressed: any): boolean;
}
export declare namespace BasicTextFormatter {
    /**
     * Commands implemented by this plugin.
     */
    enum COMMAND {
        LINK = "+link",
        CREATE_LINK = "+createLink",
        FORMAT_BLOCK = "+formatBlock",
        INDENT = "+indent",
        OUTDENT = "+outdent",
        STRIKE_THROUGH = "+strikeThrough",
        HORIZONTAL_RULE = "+insertHorizontalRule",
        SUBSCRIPT = "+subscript",
        SUPERSCRIPT = "+superscript",
        UNDERLINE = "+underline",
        BOLD = "+bold",
        ITALIC = "+italic",
        FONT_SIZE = "+fontSize",
        FONT_FACE = "+fontName",
        FONT_COLOR = "+foreColor",
        BACKGROUND_COLOR = "+backColor",
        ORDERED_LIST = "+insertOrderedList",
        UNORDERED_LIST = "+insertUnorderedList",
        JUSTIFY_CENTER = "+justifyCenter",
        JUSTIFY_FULL = "+justifyFull",
        JUSTIFY_RIGHT = "+justifyRight",
        JUSTIFY_LEFT = "+justifyLeft"
    }
    /**
     * To avoid forcing the BidiPlugin code to be loaded create a simple interface
     * for the method that is needed.
     */
    interface IBidiPlugin {
    }
}

import { Plugin } from '../plugin.js';
/**
 * Plugin for generating emoticons.
 */
export declare class Emoticons extends Plugin {
    /**
     * Plugin for generating emoticons.
     */
    constructor();
    private noStructuralTyping_closure_goog_editor_plugins_emoticons_Emoticons;
    /**
     * The emoticon command.
     */
    static COMMAND: string;
    isSupportedCommand(command: any): boolean;
    /**
     * Inserts an emoticon into the editor at the cursor location. Places the
     * cursor to the right of the inserted emoticon.
     * @param command Command to execute.
     * @param opt_arg Emoji to insert.
     * @return The result of the command.
     */
    execCommandInternal(command: string, opt_arg?: any): object | undefined;
}

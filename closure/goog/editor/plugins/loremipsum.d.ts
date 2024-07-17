import { Plugin } from '../plugin.js';
/**
 * A plugin that manages lorem ipsum state of editable fields.
 */
export declare class LoremIpsum extends Plugin {
    /**
     * A plugin that manages lorem ipsum state of editable fields.
     * @param message The lorem ipsum message.
     */
    constructor(message: string);
    private noStructuralTyping_closure_goog_editor_plugins_loremipsum_LoremIpsum;
    /**
     * Handles queryCommandValue.
     * @param command The command to query.
     * @return The result.
     */
    queryCommandValue(command: string): boolean;
    /**
     * Handles execCommand.
     * @param command The command to execute. Should be CLEAR_LOREM or UPDATE_LOREM.
     * @param opt_placeCursor Whether to place the cursor in the field after clearing lorem. Should be a boolean.
     */
    execCommand(command: string, opt_placeCursor?: any): any;
    isSupportedCommand(command: any): boolean;
}

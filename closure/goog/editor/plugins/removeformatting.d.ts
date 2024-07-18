import { Plugin } from '../plugin.js';
/**
 * A plugin to handle removing formatting from selected text.
 */
export declare class RemoveFormatting extends Plugin {
    /**
     * A plugin to handle removing formatting from selected text.
     */
    constructor();
    private noStructuralTyping_closure_goog_editor_plugins_removeformatting_RemoveFormatting;
    /**
     * The editor command this plugin in handling.
     */
    static REMOVE_FORMATTING_COMMAND: string;
    getTrogClassId(): string;
    isSupportedCommand(command: any): boolean;
    execCommandInternal(command: any, var_args: any): any;
    handleKeyboardShortcut(e: any, key: any, isModifierPressed: any): boolean;
    /**
     * Handle per node special processing if necessary. If this function returns
     * null then standard cleanup is applied. Otherwise this node and all children
     * are assumed to be cleaned.
     * NOTE(user): If an alternate RemoveFormatting processor is provided
     * (setRemoveFormattingFunc()), this will no longer work.
     * @param node The node to clean.
     * @return The HTML strig representation of the cleaned data.
     */
    getValueForNode(node: Element | null): string | null;
    /**
     * Sets a function to be used for remove formatting.
     * @param removeFormattingFunc - A function that takes  a string of html and returns a string of html that does any other formatting changes desired.  Use this only if trogedit's behavior doesn't meet your needs.
     */
    setRemoveFormattingFunc(removeFormattingFunc: () => string): void;
}

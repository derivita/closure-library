import { Plugin } from '../plugin.js';
import * as log from '../../log/log.js';
/**
 * Plugin to handle splitting block quotes.  This plugin does nothing on its
 * own and should be used in conjunction with EnterHandler or one of its
 * subclasses.
 */
export declare class Blockquote extends Plugin {
    /**
     * Plugin to handle splitting block quotes.  This plugin does nothing on its
     * own and should be used in conjunction with EnterHandler or one of its
     * subclasses.
     * @param requiresClassNameToSplit Whether to split only blockquotes that have the given classname.
     * @param opt_className The classname to apply to generated blockquotes.  Defaults to 'tr_bq'.
     */
    constructor(requiresClassNameToSplit: boolean, opt_className?: string);
    private noStructuralTyping_closure_goog_editor_plugins_blockquote_Blockquote;
    /**
     * Command implemented by this plugin.
     */
    static SPLIT_COMMAND: string;
    /**
     * Class ID used to identify this plugin.
     */
    static CLASS_ID: string;
    /**
     * Logging object.
     */
    logger: log.Logger | null;
    getTrogClassId(): string;
    /**
     * Checks if a node is a blockquote which can be split. A splittable blockquote
     * meets the following criteria:
     * <ol>
     * <li>Node is a blockquote element</li>
     * <li>Node has the blockquote classname if the classname is required to
     * split</li>
     * </ol>
     * @param node DOM node in question.
     * @return Whether the node is a splittable blockquote.
     */
    isSplittableBlockquote(node: Node | null): boolean;
    /**
     * Checks if a node is a blockquote element which has been setup.
     * @param node DOM node to check.
     * @return Whether the node is a blockquote with the required class name applied.
     */
    isSetupBlockquote(node: Node | null): boolean;
    /**
     * Checks if a node is a blockquote element which has not been setup yet.
     * @param node DOM node to check.
     * @return Whether the node is a blockquote without the required class name applied.
     */
    isUnsetupBlockquote(node: Node | null): boolean;
    /**
     * Gets the class name required for setup blockquotes.
     * @return The blockquote class name.
     */
    getBlockquoteClassName(): string;
    isSupportedCommand(command: any): boolean;
    /**
     * Splits a quoted region if any.  To be called on a key press event.  When this
     * function returns true, the event that caused it to be called should be
     * canceled.
     * @param command The command to execute.
     * @param var_args Single additional argument representing the current cursor position. It is an object with a `node` key and an `offset` key.
     * @return Boolean true when the quoted region has been split, false or undefined otherwise.
     */
    execCommandInternal(command: string, ...var_args: any[]): boolean | undefined;
}

import { TagName } from '../../dom/tagname.js';
import { EnterHandler } from './enterhandler.js';
/**
 * Plugin to handle enter keys. This subclass normalizes all browsers to use
 * the given block tag on enter.
 */
export declare class TagOnEnterHandler extends EnterHandler {
    /**
     * Plugin to handle enter keys. This subclass normalizes all browsers to use
     * the given block tag on enter.
     * @param tag The type of tag to add on enter.
     */
    constructor(tag: TagName);
    private noStructuralTyping_closure_goog_editor_plugins_tagonenterhandler_TagOnEnterHandler;
    getTrogClassId(): string;
    getNonCollapsingBlankHtml(): string;
    /**
     * This plugin is active on uneditable fields so it can provide a value for
     * queryCommandValue calls asking for Command.BLOCKQUOTE.
     * @return True.
     */
    activeOnUneditableFields(...args: any[]): boolean;
    isSupportedCommand(command: any): boolean;
    queryCommandValue(command: any): any;
    handleBackspaceInternal(e: any, range: any): void;
    processParagraphTagsInternal(e: any, split: any): void;
    handleDeleteGecko(e: any): void;
    handleKeyUpInternal(e: any): void;
    handleEnterWebkitInternal(e: any): void;
    handleEnterAtCursorGeckoInternal(e: any, wasCollapsed: any, range: any): void;
}

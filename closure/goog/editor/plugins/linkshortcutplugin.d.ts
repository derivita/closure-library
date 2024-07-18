import { Plugin } from '../plugin.js';
/**
 * Plugin to add a keyboard shortcut for the link command
 */
export declare class LinkShortcutPlugin extends Plugin {
    /**
     * Plugin to add a keyboard shortcut for the link command
     */
    constructor();
    private noStructuralTyping_closure_goog_editor_plugins_linkshortcutplugin_LinkShortcutPlugin;
    getTrogClassId(): string;
    handleKeyboardShortcut(e: any, key: any, isModifierPressed: any): boolean;
}

import { Plugin } from '../plugin.js';
import type { BrowserEvent } from '../../events/browserevent.js';
/**
 * Plugin to handle tab keys. Specific tab behavior defined by subclasses.
 */
export declare class AbstractTabHandler extends Plugin {
    /**
     * Plugin to handle tab keys. Specific tab behavior defined by subclasses.
     */
    constructor();
    private noStructuralTyping_closure_goog_editor_plugins_abstracttabhandler_AbstractTabHandler;
    handleKeyboardShortcut(e: any, key: any, isModifierPressed: any): boolean;
    /**
     * Handle a tab key press.
     * @param e The key event.
     * @return Whether this event was handled by this plugin.
     */
    protected handleTabKey(e: BrowserEvent): boolean;
}

import { Plugin } from '../plugin.js';
/**
 * Applies header styles to text.
 */
export declare class HeaderFormatter extends Plugin {
    /**
     * Applies header styles to text.
     */
    constructor();
    private noStructuralTyping_closure_goog_editor_plugins_headerformatter_HeaderFormatter;
    getTrogClassId(): string;
    handleKeyboardShortcut(e: any, key: any, isModifierPressed: any): boolean;
}
export declare namespace HeaderFormatter {
    /**
     * Commands that can be passed as the optional argument to execCommand.
     */
    enum HEADER_COMMAND {
        H1 = "H1",
        H2 = "H2",
        H3 = "H3",
        H4 = "H4"
    }
}

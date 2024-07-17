import { Plugin } from '../plugin.js';
/**
 * First Strong plugin.
 */
export declare class FirstStrong extends Plugin {
    /**
     * First Strong plugin.
     */
    constructor();
    private noStructuralTyping_closure_goog_editor_plugins_firststrong_FirstStrong;
    getTrogClassId(): string;
    queryCommandValue(command: any): any;
    handleSelectionChange(e: any, node: any): boolean;
    /**
     * The name of the attribute which records the input text.
     */
    static INPUT_ATTRIBUTE: string;
    handleKeyPress(e: any): boolean;
    /**
     * Calls the flip directionality commands.  This is done here so things go into
     * the redo-undo stack at the expected order; fist enter the input, then flip
     * directionality.
     */
    handleKeyUp(e: any): boolean;
}

/**
 * A simple class that contains options for rendering a set of autocomplete
 * matches.  Used as an optional argument in the callback from the matcher.
 */
export declare class RenderOptions {
    /**
     * A simple class that contains options for rendering a set of autocomplete
     * matches.  Used as an optional argument in the callback from the matcher.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_ac_renderoptions_RenderOptions;
    /**
     *
     * @param flag The new value for the preserveHilited_ flag.
     */
    setPreserveHilited(flag: boolean): void;
    getPreserveHilited(): boolean;
    /**
     *
     * @param flag The new value for the autoHilite_ flag.
     */
    setAutoHilite(flag: boolean): void;
    getAutoHilite(): boolean | undefined;
}

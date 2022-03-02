//!! generated by clutz.
// Generated from ui/ac/remote.js
declare namespace ಠ_ಠ.clutz.goog.ui.ac {
  /**
   * Factory class for building a remote autocomplete widget that autocompletes
   * an inputbox or text area from a data array provided via ajax.
   */
  class Remote extends ಠ_ಠ.clutz.goog.ui.ac.AutoComplete {
    private noStructuralTyping_goog_ui_ac_Remote : any;
    /**
     * Factory class for building a remote autocomplete widget that autocompletes
     * an inputbox or text area from a data array provided via ajax.
     * @param url The Uri which generates the auto complete matches.
     * @param input Input element or text area.
     * @param opt_multi Whether to allow multiple entries; defaults to false.
     * @param opt_useSimilar Whether to use similar matches; e.g. "gost" => "ghost".
     */
    constructor (url : string , input : GlobalElement | null , opt_multi ? : boolean , opt_useSimilar ? : boolean ) ;
    matcher_ : any ;
    /**
     * Gets the attached InputHandler object.
     */
    getInputHandler ( ) : ಠ_ಠ.clutz.goog.ui.ac.InputHandler | null ;
    /**
     * Set the post data for the matcher.
     * @param content Post data.
     */
    setContent (content : string ) : void ;
    /**
     * Set the HTTP headers for the matcher.
     * @param headers Map of headers to add to the request.
     */
    setHeaders (headers : GlobalObject | null | ಠ_ಠ.clutz.goog.structs.Map ) : void ;
    /**
     * Set the send method ("GET", "POST") for the matcher.
     * @param method The send method; default: GET.
     */
    setMethod (method : string ) : void ;
    /**
     * Set the timeout interval for the matcher.
     * @param interval Number of milliseconds after which an incomplete request will be aborted; 0 means no timeout is set.
     */
    setTimeoutInterval (interval : number ) : void ;
    /**
     * Set whether or not standard highlighting should be used when rendering rows.
     * @param useStandardHighlighting true if standard highlighting used.
     */
    setUseStandardHighlighting (useStandardHighlighting : boolean ) : void ;
  }
}
declare module 'goog:goog.ui.ac.Remote' {
  import Remote = ಠ_ಠ.clutz.goog.ui.ac.Remote;
  export default Remote;
}

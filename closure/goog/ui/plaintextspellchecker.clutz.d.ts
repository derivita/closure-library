//!! generated by clutz.
// Generated from ui/plaintextspellchecker.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Plain text spell checker implementation.
   */
  class PlainTextSpellChecker extends ಠ_ಠ.clutz.goog.ui.AbstractSpellChecker {
    private noStructuralTyping_goog_ui_PlainTextSpellChecker : any;
    /**
     * Plain text spell checker implementation.
     * @param handler Instance of the SpellCheckHandler support object to use. A single instance can be shared by multiple editor components.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor (handler : ಠ_ಠ.clutz.goog.spell.SpellCheck | null , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    /**
     * Checks spelling for all text and displays correction UI.
     */
    check ( ) : void ;
    /**
     * Class name for corrected words.
     */
    correctedWordClassName : string ;
    /**
     * Class name for correction pane.
     */
    correctionPaneClassName : string ;
    /**
     * Creates the initial DOM representation for the component.
     */
    createDom ( ) : void ;
    disposeInternal ( ) : void ;
    enterDocument ( ) : void ;
    exitDocument ( ) : void ;
    /**
     * Returns desired element properties for the specified status.
     * @param status Status of word.
     */
    getElementProperties (status : ಠ_ಠ.clutz.goog.spell.SpellCheck.WordStatus | null ) : GlobalObject ;
    /**
     * Handles key down for overlay.
     * @param e The browser event.
     */
    handleOverlayKeyEvent (e : ಠ_ಠ.clutz.goog.events.BrowserEvent | null ) : boolean ;
    /**
     * Initializes suggestions menu. Populates menu with separator and ignore option
     * that are always valid. Suggestions are later added above the separator.
     */
    initSuggestionsMenu ( ) : void ;
    /**
     * Class name for invalid words.
     */
    invalidWordClassName : string ;
    /**
     * Handles correction menu actions.
     * @param event Action event.
     */
    onCorrectionAction (event : ಠ_ಠ.clutz.goog.events.Event | null ) : void ;
    /**
     * Processes range of text - recognized words and separators.
     * @param node Node containing separator.
     * @param text text to process.
     */
    processRange (node : Node | null , text : string ) : void ;
    /**
     * Processes word.
     * @param node Node containing word.
     * @param word Word to process.
     * @param status Status of word.
     */
    processWord (node : Node | null , word : string , status : ಠ_ಠ.clutz.goog.spell.SpellCheck.WordStatus | null ) : void ;
    /**
     * Hides correction UI.
     */
    resume ( ) : void ;
  }
}
declare module 'goog:goog.ui.PlainTextSpellChecker' {
  import PlainTextSpellChecker = ಠ_ಠ.clutz.goog.ui.PlainTextSpellChecker;
  export default PlainTextSpellChecker;
}

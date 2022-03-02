//!! generated by clutz.
// Generated from ui/richtextspellchecker.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Rich text spell checker implementation.
   */
  class RichTextSpellChecker extends ಠ_ಠ.clutz.goog.ui.AbstractSpellChecker {
    private noStructuralTyping_goog_ui_RichTextSpellChecker : any;
    /**
     * Rich text spell checker implementation.
     * @param handler Instance of the SpellCheckHandler support object to use. A single instance can be shared by multiple editor components.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor (handler : ಠ_ಠ.clutz.goog.spell.SpellCheck | null , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    /**
     * Checks spelling for all text and displays correction UI.
     */
    check ( ) : void ;
    /**
     * Creates the initial DOM representation for the component.
     */
    createDom ( ) : any ;
    /**
     * Decorates the element for the UI component.
     * @param element Element to decorate.
     */
    decorateInternal (element : GlobalElement | null ) : void ;
    disposeInternal ( ) : void ;
    enterDocument ( ) : void ;
    /**
     * Tag name portion of the marker for the text that does not need to be checked
     * for spelling.
     */
    excludeTags : ( string | undefined ) [] | null ;
    focusOnElement (element ? : any ) : void ;
    getElementByIndex (id ? : any ) : any ;
    /**
     * Returns desired element properties for the specified status.
     * @param status Status of the word.
     */
    protected getElementProperties (status : ಠ_ಠ.clutz.goog.spell.SpellCheck.WordStatus | null ) : GlobalObject ;
    /**
     * Handles keyboard events inside the editor to allow keyboard navigation
     * between misspelled words and activation of the suggestion menu.
     * @param e the key event.
     */
    protected handleRootNodeKeyEvent (e : ಠ_ಠ.clutz.goog.events.BrowserEvent | null ) : boolean ;
    initSuggestionsMenu ( ) : void ;
    /**
     * CSS Style text for invalid words. As it's set inside the rich edit iframe
     * classes defined in the parent document are not available, thus the style is
     * set inline.
     */
    invalidWordCssText : string ;
    /**
     * Returns whether the editor node is an iframe.
     */
    protected isEditorIframe ( ) : boolean ;
    onCorrectionAction (event ? : any ) : void ;
    /**
     * Processes recognized text and separators.
     * @param node Node containing separator.
     * @param text Text to process.
     */
    protected processRange (node : Node | null , text : string ) : void ;
    /**
     * Processes word.
     * @param node Node containing word.
     * @param word Word to process.
     * @param status Status of the word.
     */
    protected processWord (node : Node | null , word : string , status : ಠ_ಠ.clutz.goog.spell.SpellCheck.WordStatus | null ) : void ;
    /**
     * Hides correction UI.
     */
    resume ( ) : void ;
    setExcludeMarker (marker ? : any ) : void ;
    /**
     * Updates or replaces element based on word status.
     * @param el Word element.
     * @param word Word to update status for.
     * @param status Status of word.
     */
    protected updateElement (el : GlobalElement | null , word : string , status : ಠ_ಠ.clutz.goog.spell.SpellCheck.WordStatus | null ) : void ;
    /**
     * Class name for word spans.
     */
    wordClassName : string ;
  }
}
declare module 'goog:goog.ui.RichTextSpellChecker' {
  import RichTextSpellChecker = ಠ_ಠ.clutz.goog.ui.RichTextSpellChecker;
  export default RichTextSpellChecker;
}

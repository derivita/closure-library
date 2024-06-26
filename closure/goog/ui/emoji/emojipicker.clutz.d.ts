//!! generated by clutz.
// Generated from ui/emoji/emojipicker.js
declare namespace ಠ_ಠ.clutz.goog.ui.emoji {
  /**
   * Creates a new, empty emoji picker. An emoji picker is a grid of emoji, each
   * cell of the grid containing a single emoji. The picker may contain multiple
   * pages of emoji.
   *
   * When a user selects an emoji, by either clicking or pressing enter, the
   * picker fires a goog.ui.Component.EventType.ACTION event with the id. The
   * client listens on this event and in the handler can retrieve the id of the
   * selected emoji and do something with it, for instance, inserting an image
   * tag into a rich text control. An emoji picker does not maintain state. That
   * is, once an emoji is selected, the emoji picker does not remember which emoji
   * was selected.
   *
   * The emoji picker is implemented as a tabpane with each tabpage being a table.
   * Each of the tables are the same size to prevent jittering when switching
   * between pages.
   */
  class EmojiPicker extends ಠ_ಠ.clutz.goog.ui.Component {
    private noStructuralTyping_goog_ui_emoji_EmojiPicker : any;
    /**
     * Creates a new, empty emoji picker. An emoji picker is a grid of emoji, each
     * cell of the grid containing a single emoji. The picker may contain multiple
     * pages of emoji.
     *
     * When a user selects an emoji, by either clicking or pressing enter, the
     * picker fires a goog.ui.Component.EventType.ACTION event with the id. The
     * client listens on this event and in the handler can retrieve the id of the
     * selected emoji and do something with it, for instance, inserting an image
     * tag into a rich text control. An emoji picker does not maintain state. That
     * is, once an emoji is selected, the emoji picker does not remember which emoji
     * was selected.
     *
     * The emoji picker is implemented as a tabpane with each tabpage being a table.
     * Each of the tables are the same size to prevent jittering when switching
     * between pages.
     * @param defaultImgUrl Url of the img that should be used to fill up the cells in the emoji table, to prevent jittering. Should be the same size as the emoji.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor (defaultImgUrl : string , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    /**
     * Adds a group of emoji to the picker.
     * @param title Title for the group.
     * @param emojiGroup A new group of emoji to be added Each internal array contains [emojiUrl, emojiId].
     */
    addEmojiGroup (title : string | GlobalElement | null , emojiGroup : ( string [] | null ) [] | null ) : void ;
    /**
     * EmojiPickers cannot be used to decorate pre-existing html, since the
     * structure they build is fairly complicated.
     * @param element Element to decorate.
     */
    canDecorate (element : GlobalElement | null ) : boolean ;
    createDom ( ) : void ;
    disposeInternal ( ) : void ;
    enterDocument ( ) : void ;
    exitDocument ( ) : void ;
    getCssClass ( ) : string ;
    /**
     * Gets the number of columns per grid in the emoji picker.
     */
    getNumColumns ( ) : number ;
    /**
     * Returns the number of emoji groups in this picker.
     */
    getNumEmojiGroups ( ) : number ;
    /**
     * Gets the number of rows per grid in the emoji picker.
     */
    getNumRows ( ) : number ;
    /**
     * Returns a page from the picker. This should be considered protected, and is
     * ONLY FOR TESTING.
     * @param index Index of the page to return.
     */
    getPage (index : number ) : ಠ_ಠ.clutz.goog.ui.emoji.EmojiPalette | null ;
    /**
     * Returns all the pages from the picker. This should be considered protected,
     * and is ONLY FOR TESTING.
     */
    getPages ( ) : ( ಠ_ಠ.clutz.goog.ui.emoji.EmojiPalette | null ) [] | null ;
    /**
     * Returns the currently selected emoji from this picker. If the picker is
     * using the URL prefix optimization, allocates a new emoji object with the
     * full URL. This method is meant to be used by clients of the emojipicker,
     * e.g., in a listener on goog.ui.component.EventType.ACTION that wants to use
     * the just-selected emoji.
     */
    getSelectedEmoji ( ) : ಠ_ಠ.clutz.goog.ui.emoji.Emoji | null ;
    /**
     * Returns the tabpane if this is a multipage picker. This should be considered
     * protected, and is ONLY FOR TESTING.
     */
    getTabPane ( ) : ಠ_ಠ.clutz.goog.ui.TabPane | null ;
    /**
     * Returns true if the component is focusable, false otherwise.  The default
     * is true.  Focusable components always have a tab index and allocate a key
     * handler to handle keyboard events while focused.
     */
    isFocusable ( ) : boolean ;
    loadImages ( ) : void ;
    manuallyLoadAnimatedEmoji ( ) : void ;
    /**
     * Sets whether to automatically size the emojipicker based on the number of
     * columns and the number of emoji in each group, so as to reduce jitter.
     * @param autoSize Whether to automatically size the picker.
     */
    setAutoSizeByColumnCount (autoSize : boolean ) : void ;
    /**
     * Sets whether loading of images should be delayed until after dom creation.
     * Thus, this function must be called before {@link #createDom}. If set to true,
     * the client must call {@link #loadImages} when they wish the images to be
     * loaded.
     * @param shouldDelay Whether to delay loading the images.
     */
    setDelayedLoad (shouldDelay : boolean ) : void ;
    /**
     * Sets whether the component is focusable.  The default is true.
     * Focusable components always have a tab index and allocate a key handler to
     * handle keyboard events while focused.
     * @param focusable Whether the component is focusable.
     */
    setFocusable (focusable : boolean ) : void ;
    /**
     * Sets whether to require the caller to manually specify when to start loading
     * animated emoji. This is primarily for unittests to be able to test the
     * structure of the emojipicker palettes before and after the animated emoji
     * have been loaded. This only affects sprited emojipickers with sprite data
     * for animated emoji.
     * @param manual Whether to load animated emoji manually.
     */
    setManualLoadOfAnimatedEmoji (manual : boolean ) : void ;
    /**
     * Sets the number of columns per grid in the emoji picker. This should only be
     * called before the picker has been rendered.
     * @param numCols Number of columns per grid.
     */
    setNumColumns (numCols : number ) : void ;
    /**
     * Sets the number of rows per grid in the emoji picker. This should only be
     * called before the picker has been rendered.
     * @param numRows Number of rows per grid.
     */
    setNumRows (numRows : number ) : void ;
    /**
     * Sets the progressive rendering aspect of this emojipicker. Must be called
     * before createDom to have an effect.
     * @param progressive Whether this picker should render progressively.
     */
    setProgressiveRender (progressive : boolean ) : void ;
    /**
     * Sets the location of the tabs in relation to the emoji grids. This should
     * only be called before the picker has been rendered.
     * @param tabLocation The location of the tabs.
     */
    setTabLocation (tabLocation : ಠ_ಠ.clutz.goog.ui.TabPane.TabLocation | null ) : void ;
    /**
     * Sets the URL prefix for the emoji URLs.
     * @param urlPrefix Prefix that should be prepended to all URLs.
     */
    setUrlPrefix (urlPrefix : string ) : void ;
    /**
     * Default number of columns per grid of emoji.
     */
    static DEFAULT_NUM_COLS : number ;
    /**
     * Default number of rows per grid of emoji.
     */
    static DEFAULT_NUM_ROWS : number ;
    /**
     * Default location of the tabs in relation to the emoji grids.
     */
    static DEFAULT_TAB_LOCATION : ಠ_ಠ.clutz.goog.ui.TabPane.TabLocation | null ;
  }
}
declare module 'goog:goog.ui.emoji.EmojiPicker' {
  import EmojiPicker = ಠ_ಠ.clutz.goog.ui.emoji.EmojiPicker;
  export default EmojiPicker;
}

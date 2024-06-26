//!! generated by clutz.
// Generated from ui/editor/defaulttoolbar.js
declare namespace ಠ_ಠ.clutz.goog.ui.editor {
  type ButtonDescriptor = { caption ? : ಠ_ಠ.clutz.goog.ui.ControlContent | null , classes ? : string , command : string , factory ? : Function , queryable ? : boolean , tooltip ? : string } ;
}
declare module 'goog:goog.ui.editor.ButtonDescriptor' {
  import ButtonDescriptor = ಠ_ಠ.clutz.goog.ui.editor.ButtonDescriptor;
  export default ButtonDescriptor;
}
// Generated from ui/editor/defaulttoolbar.js
declare namespace ಠ_ಠ.clutz.goog.ui.editor.DefaultToolbar {
  /**
   * A set of built-in buttons to display in the default editor toolbar.
   */
  let DEFAULT_BUTTONS : string [] ;
  /**
   * A set of built-in buttons to display in the default editor toolbar when
   * the editor chrome is right-to-left (BiDi mode only).
   */
  let DEFAULT_BUTTONS_RTL : string [] ;
  /**
   * Initializes the given font size menu button by adding default font sizes to
   * it.
   * @param button Font size menu button.
   */
  function addDefaultFontSizes (button : ಠ_ಠ.clutz.goog.ui.Select ) : void ;
  /**
   * Initializes the given font menu button by adding default fonts to the menu.
   * If goog.ui.editor.DefaultToolbar.setLocale was called to specify a locale
   * for which locale-specific default fonts exist, those are added before
   * common fonts.
   * @param button Font menu button.
   */
  function addDefaultFonts (button : ಠ_ಠ.clutz.goog.ui.Select ) : void ;
  /**
   * Initializes the given "Format block" menu button by adding default format
   * options to the menu.
   * @param button "Format block" menu button.
   */
  function addDefaultFormatOptions (button : ಠ_ಠ.clutz.goog.ui.Select ) : void ;
  /**
   * Creates an instance of a subclass of {@link goog.ui.Button} for the given
   * {@link goog.editor.Command}, or null if no built-in button exists for the
   * command.  Note that this function is only intended to create built-in
   * buttons; please don't try to hack it!
   * @param command Editor command ID.
   * @param opt_domHelper DOM helper, used for DOM creation; defaults to the current document if unspecified.
   */
  function makeBuiltInToolbarButton (command : string , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : ಠ_ಠ.clutz.goog.ui.Button | null ;
  /**
   * Creates a {@link goog.ui.Toolbar} containing a default set of editor
   * toolbar buttons, and renders it into the given parent element.
   * @param elem Toolbar parent element.
   * @param opt_isRightToLeft Whether the editor chrome is right-to-left; defaults to the directionality of the toolbar parent element.
   */
  function makeDefaultToolbar (elem : GlobalElement , opt_isRightToLeft ? : boolean ) : ಠ_ಠ.clutz.goog.ui.Toolbar ;
  /**
   * Creates a {@link goog.ui.Toolbar} containing the specified set of
   * toolbar buttons, and renders it into the given parent element.  Each
   * item in the `items` array must either be a
   * {@link goog.editor.Command} (to create a built-in button) or a subclass
   * of {@link goog.ui.Control} (to create a custom control).
   * @param items Toolbar items; each must be a {@link goog.editor.Command} or a {@link goog.ui.Control}.
   * @param elem Toolbar parent element.
   * @param opt_isRightToLeft Whether the editor chrome is right-to-left; defaults to the directionality of the toolbar parent element.
   */
  function makeToolbar (items : ( string | ಠ_ಠ.clutz.goog.ui.Control | null ) [] , elem : GlobalElement , opt_isRightToLeft ? : boolean ) : ಠ_ಠ.clutz.goog.ui.Toolbar ;
  /**
   * Sets the locale for the font names.  If not set, defaults to 'en-us'.
   * Used only for default creation of font names name.  Must be set
   * before font name menu is created.
   * @param locale Locale to use for the toolbar font names.
   */
  function setLocale (locale : string ) : void ;
  let MSG_ALIGN_CENTER_TITLE : string ;
  let MSG_ALIGN_LEFT_TITLE : string ;
  let MSG_ALIGN_RIGHT_TITLE : string ;
  let MSG_BACKGROUND_COLOR_TITLE : string ;
  let MSG_BLOCKQUOTE_TITLE : string ;
  let MSG_BOLD_TITLE : string ;
  let MSG_DIR_LTR_TITLE : string ;
  let MSG_DIR_RTL_TITLE : string ;
  let MSG_EDIT_HTML_CAPTION : string ;
  let MSG_EDIT_HTML_TITLE : string ;
  let MSG_FONT_COLOR_TITLE : string ;
  let MSG_FONT_FACE_TITLE : string ;
  let MSG_FONT_NORMAL : string ;
  let MSG_FONT_NORMAL_SERIF : string ;
  let MSG_FONT_SIZE_HUGE : string ;
  let MSG_FONT_SIZE_LARGE : string ;
  let MSG_FONT_SIZE_NORMAL : string ;
  let MSG_FONT_SIZE_SMALL : string ;
  let MSG_FONT_SIZE_TITLE : string ;
  let MSG_FORMAT_BLOCK_CAPTION : string ;
  let MSG_FORMAT_BLOCK_TITLE : string ;
  let MSG_FORMAT_HEADING : string ;
  let MSG_FORMAT_MINOR_HEADING : string ;
  let MSG_FORMAT_NORMAL : string ;
  let MSG_FORMAT_SUBHEADING : string ;
  let MSG_IMAGE_TITLE : string ;
  let MSG_INDENT_TITLE : string ;
  let MSG_ITALIC_TITLE : string ;
  let MSG_JUSTIFY_TITLE : string ;
  let MSG_LINK_TITLE : string ;
  let MSG_ORDERED_LIST_TITLE : string ;
  let MSG_OUTDENT_TITLE : string ;
  let MSG_REDO_TITLE : string ;
  let MSG_REMOVE_FORMAT_TITLE : string ;
  let MSG_STRIKE_THROUGH_TITLE : string ;
  let MSG_SUBSCRIPT : string ;
  let MSG_SUPERSCRIPT : string ;
  let MSG_UNDERLINE_TITLE : string ;
  let MSG_UNDO_TITLE : string ;
  let MSG_UNORDERED_LIST_TITLE : string ;
}
declare module 'goog:goog.ui.editor.DefaultToolbar' {
  import DefaultToolbar = ಠ_ಠ.clutz.goog.ui.editor.DefaultToolbar;
  export = DefaultToolbar;
}

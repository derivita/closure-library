//!! generated by clutz.
// Generated from ui/editor/toolbarfactory.js
declare namespace ಠ_ಠ.clutz.goog.ui.editor.ToolbarFactory {
  /**
   * Adds a menu item to the given font menu button.  The first font listed in
   * the `value` argument is considered the font ID, so adding two items
   * whose CSS style starts with the same font may lead to unpredictable results.
   * @param button Font menu button.
   * @param caption Caption to show for the font menu.
   * @param value Value for the corresponding 'font-family' CSS style.
   */
  function addFont (button : ಠ_ಠ.clutz.goog.ui.Select , caption : string , value : string ) : void ;
  /**
   * Adds a menu item to the given font size menu button.  The `value`
   * argument must be a legacy HTML font size in the 0-7 range.
   * @param button Font size menu button.
   * @param caption Caption to show in the font size menu.
   * @param value Value for the corresponding HTML font size.
   */
  function addFontSize (button : ಠ_ಠ.clutz.goog.ui.Select , caption : string , value : number ) : void ;
  /**
   * Bulk-adds font sizes to the given font size menu button.  The argument must
   * be an array of font size descriptor objects, each of which must have the
   * following attributes:
   * <ul>
   * <li>`caption` - Caption to show in the font size menu (e.g. 'Huge')
   * <li>`value` - Value for the corresponding HTML font size (e.g. 6)
   * </ul>
   * @param button Font size menu button.
   * @param sizes Array of font size descriptors.
   */
  function addFontSizes (button : ಠ_ಠ.clutz.goog.ui.Select , sizes : { caption : string , value : number } [] ) : void ;
  /**
   * Bulk-adds fonts to the given font menu button.  The argument must be an
   * array of font descriptor objects, each of which must have the following
   * attributes:
   * <ul>
   * <li>`caption` - Caption to show in the font menu (e.g. 'Tahoma')
   * <li>`value` - Value for the corresponding 'font-family' CSS style
   * (e.g. 'Tahoma, Arial, sans-serif')
   * </ul>
   * @param button Font menu button.
   * @param fonts Array of font descriptors.
   */
  function addFonts (button : ಠ_ಠ.clutz.goog.ui.Select , fonts : { caption : string , value : string } [] ) : void ;
  /**
   * Adds a menu item to the given "Format block" menu button.
   * @param button "Format block" menu button.
   * @param caption Caption to show in the menu.
   * @param tag Corresponding block format tag.
   */
  function addFormatOption (button : ಠ_ಠ.clutz.goog.ui.Select , caption : string , tag : ಠ_ಠ.clutz.goog.dom.TagName ) : void ;
  /**
   * Bulk-adds format options to the given "Format block" menu button.  The
   * argument must be an array of format option descriptor objects, each of
   * which must have the following attributes:
   * <ul>
   * <li>`caption` - Caption to show in the menu (e.g. 'Minor heading')
   * <li>`command` - Corresponding {@link goog.dom.TagName} (e.g.
   * 'H4')
   * </ul>
   * @param button "Format block" menu button.
   * @param formats Array of format option descriptors.
   */
  function addFormatOptions (button : ಠ_ಠ.clutz.goog.ui.Select , formats : { caption : string , command : ಠ_ಠ.clutz.goog.dom.TagName } [] ) : void ;
  /**
   * Converts a pixel font size specification into an equivalent legacy size.
   * For example, {@code font-size: 32px;} is {@code &lt;font size="6"&gt;}, etc.
   * If the given pixel size doesn't exactly match one of the legacy sizes, -1 is
   * returned.
   * @param px Pixel font size.
   */
  function getLegacySizeFromPx (px : number ) : number ;
  /**
   * Takes a font spec (e.g. "Arial, Helvetica, sans-serif") and returns the
   * primary font name, normalized to lowercase (e.g. "arial").
   * @param fontSpec Font specification.
   */
  function getPrimaryFont (fontSpec : string ) : string ;
  /**
   * Converts a legacy font size specification into an equivalent pixel size.
   * For example, {@code &lt;font size="6"&gt;} is {@code font-size: 32px;}, etc.
   * @param fontSize Legacy font size spec in the 0-7 range.
   */
  function getPxFromLegacySize (fontSize : number ) : number ;
  /**
   * Creates a toolbar button with the given ID, tooltip, and caption.  Applies
   * any custom CSS class names to the button's caption element.
   * @param id Button ID; must equal a {@link goog.editor.Command} for built-in buttons, anything else for custom buttons.
   * @param tooltip Tooltip to be shown on hover.
   * @param caption Button caption.
   * @param opt_classNames CSS class name(s) to apply to the caption element.
   * @param opt_renderer Button renderer; defaults to {@link goog.ui.ToolbarButtonRenderer} if unspecified.
   * @param opt_domHelper DOM helper, used for DOM creation; defaults to the current document if unspecified.
   */
  function makeButton (id : string , tooltip : string , caption : ಠ_ಠ.clutz.goog.ui.ControlContent | null , opt_classNames ? : string , opt_renderer ? : ಠ_ಠ.clutz.goog.ui.ButtonRenderer | null , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : ಠ_ಠ.clutz.goog.ui.Button ;
  /**
   * Creates a color menu button with the given ID, tooltip, and caption.
   * Applies any custom CSS class names to the button's caption element.  The
   * button is created with a default color menu containing standard color
   * palettes.
   * @param id Button ID; must equal a {@link goog.editor.Command} for built-in toolbar buttons, but can be anything else for custom buttons.
   * @param tooltip Tooltip to be shown on hover.
   * @param caption Button caption.
   * @param opt_classNames CSS class name(s) to apply to the caption element.
   * @param opt_renderer Button renderer; defaults to {@link goog.ui.ToolbarColorMenuButtonRenderer} if unspecified.
   * @param opt_domHelper DOM helper, used for DOM creation; defaults to the current document if unspecified.
   */
  function makeColorMenuButton (id : string , tooltip : string , caption : ಠ_ಠ.clutz.goog.ui.ControlContent | null , opt_classNames ? : string , opt_renderer ? : ಠ_ಠ.clutz.goog.ui.ColorMenuButtonRenderer | null , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : ಠ_ಠ.clutz.goog.ui.ColorMenuButton ;
  /**
   * Creates a menu button with the given ID, tooltip, and caption. Applies
   * any custom CSS class names to the button's caption element.  The button
   * returned doesn't have an actual menu attached; use {@link
   * goog.ui.MenuButton#setMenu} to attach a {@link goog.ui.Menu} to the
   * button.
   * @param id Button ID; must equal a {@link goog.editor.Command} for built-in buttons, anything else for custom buttons.
   * @param tooltip Tooltip to be shown on hover.
   * @param caption Button caption.
   * @param opt_classNames CSS class name(s) to apply to the caption element.
   * @param opt_renderer Button renderer; defaults to {@link goog.ui.ToolbarMenuButtonRenderer} if unspecified.
   * @param opt_domHelper DOM helper, used for DOM creation; defaults to the current document if unspecified.
   */
  function makeMenuButton (id : string , tooltip : string , caption : ಠ_ಠ.clutz.goog.ui.ControlContent | null , opt_classNames ? : string , opt_renderer ? : ಠ_ಠ.clutz.goog.ui.ButtonRenderer | null , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : ಠ_ಠ.clutz.goog.ui.MenuButton ;
  /**
   * Creates a select button with the given ID, tooltip, and caption. Applies
   * any custom CSS class names to the button's root element.  The button
   * returned doesn't have an actual menu attached; use {@link
   * goog.ui.Select#setMenu} to attach a {@link goog.ui.Menu} containing
   * {@link goog.ui.Option}s to the select button.
   * @param id Button ID; must equal a {@link goog.editor.Command} for built-in buttons, anything else for custom buttons.
   * @param tooltip Tooltip to be shown on hover.
   * @param caption Button caption; used as the default caption when nothing is selected.
   * @param opt_classNames CSS class name(s) to apply to the button's root element.
   * @param opt_renderer Button renderer; defaults to {@link goog.ui.ToolbarMenuButtonRenderer} if unspecified.
   * @param opt_domHelper DOM helper, used for DOM creation; defaults to the current document if unspecified.
   */
  function makeSelectButton (id : string , tooltip : string , caption : ಠ_ಠ.clutz.goog.ui.ControlContent | null , opt_classNames ? : string , opt_renderer ? : ಠ_ಠ.clutz.goog.ui.MenuButtonRenderer | null , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : ಠ_ಠ.clutz.goog.ui.Select ;
  /**
   * Creates a toggle button with the given ID, tooltip, and caption. Applies
   * any custom CSS class names to the button's caption element. The button
   * returned has checkbox-like toggle semantics.
   * @param id Button ID; must equal a {@link goog.editor.Command} for built-in buttons, anything else for custom buttons.
   * @param tooltip Tooltip to be shown on hover.
   * @param caption Button caption.
   * @param opt_classNames CSS class name(s) to apply to the caption element.
   * @param opt_renderer Button renderer; defaults to {@link goog.ui.ToolbarButtonRenderer} if unspecified.
   * @param opt_domHelper DOM helper, used for DOM creation; defaults to the current document if unspecified.
   */
  function makeToggleButton (id : string , tooltip : string , caption : ಠ_ಠ.clutz.goog.ui.ControlContent | null , opt_classNames ? : string , opt_renderer ? : ಠ_ಠ.clutz.goog.ui.ButtonRenderer | null , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : ಠ_ಠ.clutz.goog.ui.Button ;
  /**
   * Creates a {@link goog.ui.Toolbar} containing the specified set of
   * toolbar buttons, and renders it into the given parent element.  Each
   * item in the `items` array must a {@link goog.ui.Control}.
   * @param items Toolbar items; each must be a {@link goog.ui.Control}.
   * @param elem Toolbar parent element.
   * @param opt_isRightToLeft Whether the editor chrome is right-to-left; defaults to the directionality of the toolbar parent element.
   */
  function makeToolbar (items : ( ಠ_ಠ.clutz.goog.ui.Control | null ) [] , elem : GlobalElement , opt_isRightToLeft ? : boolean ) : ಠ_ಠ.clutz.goog.ui.Toolbar ;
}
declare module 'goog:goog.ui.editor.ToolbarFactory' {
  import ToolbarFactory = ಠ_ಠ.clutz.goog.ui.editor.ToolbarFactory;
  export = ToolbarFactory;
}

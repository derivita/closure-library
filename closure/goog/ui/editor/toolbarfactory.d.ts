import * as dom from '../../dom/dom.js';
import { TagName } from '../../dom/tagname.js';
import { Toolbar } from '../toolbar.js';
import type { Button } from '../button.js';
import type { ButtonRenderer } from '../buttonrenderer.js';
import type { ColorMenuButton } from '../colormenubutton.js';
import type { ColorMenuButtonRenderer } from '../colormenubuttonrenderer.js';
import type { Control } from '../control.js';
import type { ControlContent } from '../controlcontent.js';
import type { MenuButton } from '../menubutton.js';
import type { MenuButtonRenderer } from '../menubuttonrenderer.js';
import type { Select } from '../select.js';
/**
 * Takes a font spec (e.g. "Arial, Helvetica, sans-serif") and returns the
 * primary font name, normalized to lowercase (e.g. "arial").
 * @param fontSpec Font specification.
 * @return The primary font name, in lowercase.
 */
export declare function getPrimaryFont(fontSpec: string): string;
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
export declare function addFonts(button: Select, fonts: {
    'caption': string;
    'value': string;
}[]): void;
/**
 * Adds a menu item to the given font menu button.  The first font listed in
 * the `value` argument is considered the font ID, so adding two items
 * whose CSS style starts with the same font may lead to unpredictable results.
 * @param button Font menu button.
 * @param caption Caption to show for the font menu.
 * @param value Value for the corresponding 'font-family' CSS style.
 */
export declare function addFont(button: Select, caption: string, value: string): void;
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
export declare function addFontSizes(button: Select, sizes: {
    'caption': string;
    'value': number;
}[]): void;
/**
 * Adds a menu item to the given font size menu button.  The `value`
 * argument must be a legacy HTML font size in the 0-7 range.
 * @param button Font size menu button.
 * @param caption Caption to show in the font size menu.
 * @param value Value for the corresponding HTML font size.
 */
export declare function addFontSize(button: Select, caption: string, value: number): void;
/**
 * Converts a legacy font size specification into an equivalent pixel size.
 * For example, {@code &lt;font size="6"&gt;} is {@code font-size: 32px;}, etc.
 * @param fontSize Legacy font size spec in the 0-7 range.
 * @return Equivalent pixel size.
 */
export declare function getPxFromLegacySize(fontSize: number): number;
/**
 * Converts a pixel font size specification into an equivalent legacy size.
 * For example, {@code font-size: 32px;} is {@code &lt;font size="6"&gt;}, etc.
 * If the given pixel size doesn't exactly match one of the legacy sizes, -1 is
 * returned.
 * @param px Pixel font size.
 * @return Equivalent legacy size spec in the 0-7 range, or -1 if none exists.
 */
export declare function getLegacySizeFromPx(px: number): number;
/**
 * Map of legacy font sizes (0-7) to equivalent pixel sizes.
 */
export declare var LEGACY_SIZE_TO_PX_MAP_: number[];
/**
 * Bulk-adds format options to the given "Format block" menu button.  The
 * argument must be an array of format option descriptor objects, each of
 * which must have the following attributes:
 * <ul>
 * <li>`caption` - Caption to show in the menu (e.g. 'Minor heading')
 * <li>`command` - Corresponding {@link TagName} (e.g.
 * 'H4')
 * </ul>
 * @param button "Format block" menu button.
 * @param formats Array of format option descriptors.
 */
export declare function addFormatOptions(button: Select, formats: {
    'caption': string;
    'command': TagName;
}[]): void;
/**
 * Adds a menu item to the given "Format block" menu button.
 * @param button "Format block" menu button.
 * @param caption Caption to show in the menu.
 * @param tag Corresponding block format tag.
 */
export declare function addFormatOption(button: Select, caption: string, tag: TagName): void;
/**
 * Creates a {@link Toolbar} containing the specified set of
 * toolbar buttons, and renders it into the given parent element.  Each
 * item in the `items` array must a {@link Control}.
 * @param items Toolbar items; each must be a {@link Control}.
 * @param elem Toolbar parent element.
 * @param opt_isRightToLeft Whether the editor chrome is right-to-left; defaults to the directionality of the toolbar parent element.
 * @return Editor toolbar, rendered into the given parent element.
 */
export declare function makeToolbar(items: (Control | null)[], elem: Element, opt_isRightToLeft?: boolean): Toolbar;
/**
 * Creates a toolbar button with the given ID, tooltip, and caption.  Applies
 * any custom CSS class names to the button's caption element.
 * @param id Button ID; must equal a {@link goog.editor.Command} for built-in buttons, anything else for custom buttons.
 * @param tooltip Tooltip to be shown on hover.
 * @param caption Button caption.
 * @param opt_classNames CSS class name(s) to apply to the caption element.
 * @param opt_renderer Button renderer; defaults to {@link ToolbarButtonRenderer} if unspecified.
 * @param opt_domHelper DOM helper, used for DOM creation; defaults to the current document if unspecified.
 * @return A toolbar button.
 */
export declare function makeButton(id: string, tooltip: string, caption: ControlContent | null, opt_classNames?: string, opt_renderer?: ButtonRenderer | null, opt_domHelper?: dom.DomHelper | null): Button;
/**
 * Creates a toggle button with the given ID, tooltip, and caption. Applies
 * any custom CSS class names to the button's caption element. The button
 * returned has checkbox-like toggle semantics.
 * @param id Button ID; must equal a {@link goog.editor.Command} for built-in buttons, anything else for custom buttons.
 * @param tooltip Tooltip to be shown on hover.
 * @param caption Button caption.
 * @param opt_classNames CSS class name(s) to apply to the caption element.
 * @param opt_renderer Button renderer; defaults to {@link ToolbarButtonRenderer} if unspecified.
 * @param opt_domHelper DOM helper, used for DOM creation; defaults to the current document if unspecified.
 * @return A toggle button.
 */
export declare function makeToggleButton(id: string, tooltip: string, caption: ControlContent | null, opt_classNames?: string, opt_renderer?: ButtonRenderer | null, opt_domHelper?: dom.DomHelper | null): Button;
/**
 * Creates a menu button with the given ID, tooltip, and caption. Applies
 * any custom CSS class names to the button's caption element.  The button
 * returned doesn't have an actual menu attached; use {@link
 * MenuButton#setMenu} to attach a {@link goog.ui.Menu} to the
 * button.
 * @param id Button ID; must equal a {@link goog.editor.Command} for built-in buttons, anything else for custom buttons.
 * @param tooltip Tooltip to be shown on hover.
 * @param caption Button caption.
 * @param opt_classNames CSS class name(s) to apply to the caption element.
 * @param opt_renderer Button renderer; defaults to {@link ToolbarMenuButtonRenderer} if unspecified.
 * @param opt_domHelper DOM helper, used for DOM creation; defaults to the current document if unspecified.
 * @return A menu button.
 */
export declare function makeMenuButton(id: string, tooltip: string, caption: ControlContent | null, opt_classNames?: string, opt_renderer?: ButtonRenderer | null, opt_domHelper?: dom.DomHelper | null): MenuButton;
/**
 * Creates a select button with the given ID, tooltip, and caption. Applies
 * any custom CSS class names to the button's root element.  The button
 * returned doesn't have an actual menu attached; use {@link
 * Select#setMenu} to attach a {@link goog.ui.Menu} containing
 * {@link Option}s to the select button.
 * @param id Button ID; must equal a {@link goog.editor.Command} for built-in buttons, anything else for custom buttons.
 * @param tooltip Tooltip to be shown on hover.
 * @param caption Button caption; used as the default caption when nothing is selected.
 * @param opt_classNames CSS class name(s) to apply to the button's root element.
 * @param opt_renderer Button renderer; defaults to {@link ToolbarMenuButtonRenderer} if unspecified.
 * @param opt_domHelper DOM helper, used for DOM creation; defaults to the current document if unspecified.
 * @return A select button.
 */
export declare function makeSelectButton(id: string, tooltip: string, caption: ControlContent | null, opt_classNames?: string, opt_renderer?: MenuButtonRenderer | null, opt_domHelper?: dom.DomHelper | null): Select;
/**
 * Creates a color menu button with the given ID, tooltip, and caption.
 * Applies any custom CSS class names to the button's caption element.  The
 * button is created with a default color menu containing standard color
 * palettes.
 * @param id Button ID; must equal a {@link goog.editor.Command} for built-in toolbar buttons, but can be anything else for custom buttons.
 * @param tooltip Tooltip to be shown on hover.
 * @param caption Button caption.
 * @param opt_classNames CSS class name(s) to apply to the caption element.
 * @param opt_renderer Button renderer; defaults to {@link ToolbarColorMenuButtonRenderer} if unspecified.
 * @param opt_domHelper DOM helper, used for DOM creation; defaults to the current document if unspecified.
 * @return A color menu button.
 */
export declare function makeColorMenuButton(id: string, tooltip: string, caption: ControlContent | null, opt_classNames?: string, opt_renderer?: ColorMenuButtonRenderer | null, opt_domHelper?: dom.DomHelper | null): ColorMenuButton;

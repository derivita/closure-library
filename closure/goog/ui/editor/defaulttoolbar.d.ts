import * as dom from '../../dom/dom.js';
import type { Button } from '../button.js';
import type { Control } from '../control.js';
import type { ControlContent } from '../controlcontent.js';
import type { Select } from '../select.js';
import type { Toolbar } from '../toolbar.js';
export declare var MSG_FONT_NORMAL: string;
export declare var MSG_FONT_NORMAL_SERIF: string;
/**
 * Sets the locale for the font names.  If not set, defaults to 'en-us'.
 * Used only for default creation of font names name.  Must be set
 * before font name menu is created.
 * @param locale Locale to use for the toolbar font names.
 */
export declare function setLocale(locale: string): void;
/**
 * Initializes the given font menu button by adding default fonts to the menu.
 * If setLocale was called to specify a locale
 * for which locale-specific default fonts exist, those are added before
 * common fonts.
 * @param button Font menu button.
 */
export declare function addDefaultFonts(button: Select): void;
export declare var MSG_FONT_SIZE_SMALL: string;
export declare var MSG_FONT_SIZE_NORMAL: string;
export declare var MSG_FONT_SIZE_LARGE: string;
export declare var MSG_FONT_SIZE_HUGE: string;
/**
 * Initializes the given font size menu button by adding default font sizes to
 * it.
 * @param button Font size menu button.
 */
export declare function addDefaultFontSizes(button: Select): void;
export declare var MSG_FORMAT_HEADING: string;
export declare var MSG_FORMAT_SUBHEADING: string;
export declare var MSG_FORMAT_MINOR_HEADING: string;
export declare var MSG_FORMAT_NORMAL: string;
/**
 * Initializes the given "Format block" menu button by adding default format
 * options to the menu.
 * @param button "Format block" menu button.
 */
export declare function addDefaultFormatOptions(button: Select): void;
/**
 * Creates a {@link Toolbar} containing a default set of editor
 * toolbar buttons, and renders it into the given parent element.
 * @param elem Toolbar parent element.
 * @param opt_isRightToLeft Whether the editor chrome is right-to-left; defaults to the directionality of the toolbar parent element.
 * @return Default editor toolbar, rendered into the given parent element.
 */
export declare function makeDefaultToolbar(elem: Element, opt_isRightToLeft?: boolean): Toolbar;
/**
 * Creates a {@link Toolbar} containing the specified set of
 * toolbar buttons, and renders it into the given parent element.  Each
 * item in the `items` array must either be a
 * {@link Command} (to create a built-in button) or a subclass
 * of {@link Control} (to create a custom control).
 * @param items Toolbar items; each must be a {@link Command} or a {@link Control}.
 * @param elem Toolbar parent element.
 * @param opt_isRightToLeft Whether the editor chrome is right-to-left; defaults to the directionality of the toolbar parent element.
 * @return Editor toolbar, rendered into the given parent element.
 */
export declare function makeToolbar(items: (string | Control | null)[], elem: Element, opt_isRightToLeft?: boolean): Toolbar;
/**
 * Creates an instance of a subclass of {@link Button} for the given
 * {@link Command}, or null if no built-in button exists for the
 * command.  Note that this function is only intended to create built-in
 * buttons; please don't try to hack it!
 * @param command Editor command ID.
 * @param opt_domHelper DOM helper, used for DOM creation; defaults to the current document if unspecified.
 * @return Toolbar button (null if no built-in button exists for the command).
 */
export declare function makeBuiltInToolbarButton(command: string, opt_domHelper?: dom.DomHelper | null): Button | null;
/**
 * A set of built-in buttons to display in the default editor toolbar.
 */
export declare var DEFAULT_BUTTONS: string[];
/**
 * A set of built-in buttons to display in the default editor toolbar when
 * the editor chrome is right-to-left (BiDi mode only).
 */
export declare var DEFAULT_BUTTONS_RTL: string[];
export declare var MSG_FORMAT_BLOCK_TITLE: string;
export declare var MSG_FORMAT_BLOCK_CAPTION: string;
export declare var MSG_UNDO_TITLE: string;
export declare var MSG_REDO_TITLE: string;
export declare var MSG_FONT_FACE_TITLE: string;
export declare var MSG_FONT_SIZE_TITLE: string;
export declare var MSG_FONT_COLOR_TITLE: string;
export declare var MSG_BOLD_TITLE: string;
export declare var MSG_ITALIC_TITLE: string;
export declare var MSG_UNDERLINE_TITLE: string;
export declare var MSG_BACKGROUND_COLOR_TITLE: string;
export declare var MSG_LINK_TITLE: string;
export declare var MSG_ORDERED_LIST_TITLE: string;
export declare var MSG_UNORDERED_LIST_TITLE: string;
export declare var MSG_OUTDENT_TITLE: string;
export declare var MSG_INDENT_TITLE: string;
export declare var MSG_ALIGN_LEFT_TITLE: string;
export declare var MSG_ALIGN_CENTER_TITLE: string;
export declare var MSG_ALIGN_RIGHT_TITLE: string;
export declare var MSG_JUSTIFY_TITLE: string;
export declare var MSG_REMOVE_FORMAT_TITLE: string;
export declare var MSG_IMAGE_TITLE: string;
export declare var MSG_STRIKE_THROUGH_TITLE: string;
export declare var MSG_DIR_LTR_TITLE: string;
export declare var MSG_DIR_RTL_TITLE: string;
export declare var MSG_BLOCKQUOTE_TITLE: string;
export declare var MSG_EDIT_HTML_TITLE: string;
export declare var MSG_SUBSCRIPT: string;
export declare var MSG_SUPERSCRIPT: string;
export declare var MSG_EDIT_HTML_CAPTION: string;
export type ButtonDescriptor = {
    'command': string;
    'tooltip': undefined | string;
    'caption': undefined | ControlContent | null;
    'classes': undefined | string;
    'factory': undefined | Function;
    'queryable': undefined | boolean;
};

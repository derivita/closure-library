import * as dom from '../dom/dom.js';
import { CharPickerData } from '../i18n/charpickerdata.js';
import { NameFetcher } from '../i18n/uchar/namefetcher.js';
import { Component } from './component.js';
/**
 * Character Picker Class. This widget can be used to pick any Unicode
 * character by traversing a category-subcategory structure or by inputing its
 * hex value.
 *
 * See charpicker.html demo for example usage.
 */
export declare class CharPicker extends Component {
    /**
     * Character Picker Class. This widget can be used to pick any Unicode
     * character by traversing a category-subcategory structure or by inputing its
     * hex value.
     *
     * See charpicker.html demo for example usage.
     * @param charPickerData Category names and charlist.
     * @param charNameFetcher Object which fetches the names of the characters that are shown in the widget. These names may be stored locally or come from an external source.
     * @param opt_recents List of characters to be displayed in resently selected characters area.
     * @param opt_initCategory Sequence number of initial category.
     * @param opt_initSubcategory Sequence number of initial subcategory.
     * @param opt_rowCount Number of rows in the grid.
     * @param opt_columnCount Number of columns in the grid.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(charPickerData: CharPickerData | null, charNameFetcher: NameFetcher, opt_recents?: string[] | null, opt_initCategory?: number, opt_initSubcategory?: number, opt_rowCount?: number, opt_columnCount?: number, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_charpicker_CharPicker;
    itempos: number;
    items: string[];
    /**
     * Category index used to index the data tables.
     */
    category: number;
    /**
     * Gets the last selected character.
     * @return The last selected character.
     */
    getSelectedChar(): string | null;
    /**
     * Gets the list of characters user selected recently.
     * @return The recent character list.
     */
    getRecentChars(): string[] | null;
    createDom(): void;
    disposeInternal(): void;
    decorateInternal(element: any): void;
    enterDocument(): void;
    /**
     * Gets the user inputed unicode character.
     * @return Unicode character inputed by user.
     */
    getInputChar(): string;
}

import { Component } from '../component.js';
import { TabPane } from '../tabpane.js';
import { Emoji } from './emoji.js';
import { EmojiPalette } from './emojipalette.js';
import type { DomHelper } from '../../dom/dom.js';
/**
 * Creates a new, empty emoji picker. An emoji picker is a grid of emoji, each
 * cell of the grid containing a single emoji. The picker may contain multiple
 * pages of emoji.
 *
 * When a user selects an emoji, by either clicking or pressing enter, the
 * picker fires a Component.ComponentEventType.ACTION event with the id. The
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
export declare class EmojiPicker extends Component {
    /**
     * Creates a new, empty emoji picker. An emoji picker is a grid of emoji, each
     * cell of the grid containing a single emoji. The picker may contain multiple
     * pages of emoji.
     *
     * When a user selects an emoji, by either clicking or pressing enter, the
     * picker fires a Component.ComponentEventType.ACTION event with the id. The
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
    constructor(defaultImgUrl: string, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_emoji_emojipicker_EmojiPicker;
    /**
     * Default number of rows per grid of emoji.
     */
    static DEFAULT_NUM_ROWS: number;
    /**
     * Default number of columns per grid of emoji.
     */
    static DEFAULT_NUM_COLS: number;
    /**
     * Default location of the tabs in relation to the emoji grids.
     */
    static DEFAULT_TAB_LOCATION: TabPane.TabLocation | null;
    /**
     * Adds a group of emoji to the picker.
     * @param title Title for the group.
     * @param emojiGroup A new group of emoji to be added Each internal array contains [emojiUrl, emojiId].
     */
    addEmojiGroup(title: string | Element | null, emojiGroup: (string[] | null)[] | null): void;
    /**
     * Gets the number of rows per grid in the emoji picker.
     * @return number of rows per grid.
     */
    getNumRows(): number;
    /**
     * Gets the number of columns per grid in the emoji picker.
     * @return number of columns per grid.
     */
    getNumColumns(): number;
    /**
     * Sets the number of rows per grid in the emoji picker. This should only be
     * called before the picker has been rendered.
     * @param numRows Number of rows per grid.
     */
    setNumRows(numRows: number): void;
    /**
     * Sets the number of columns per grid in the emoji picker. This should only be
     * called before the picker has been rendered.
     * @param numCols Number of columns per grid.
     */
    setNumColumns(numCols: number): void;
    /**
     * Sets whether to automatically size the emojipicker based on the number of
     * columns and the number of emoji in each group, so as to reduce jitter.
     * @param autoSize Whether to automatically size the picker.
     */
    setAutoSizeByColumnCount(autoSize: boolean): void;
    /**
     * Sets the location of the tabs in relation to the emoji grids. This should
     * only be called before the picker has been rendered.
     * @param tabLocation The location of the tabs.
     */
    setTabLocation(tabLocation: TabPane.TabLocation | null): void;
    /**
     * Sets whether loading of images should be delayed until after dom creation.
     * Thus, this function must be called before {@link #createDom}. If set to true,
     * the client must call {@link #loadImages} when they wish the images to be
     * loaded.
     * @param shouldDelay Whether to delay loading the images.
     */
    setDelayedLoad(shouldDelay: boolean): void;
    /**
     * Sets whether to require the caller to manually specify when to start loading
     * animated emoji. This is primarily for unittests to be able to test the
     * structure of the emojipicker palettes before and after the animated emoji
     * have been loaded. This only affects sprited emojipickers with sprite data
     * for animated emoji.
     * @param manual Whether to load animated emoji manually.
     */
    setManualLoadOfAnimatedEmoji(manual: boolean): void;
    /**
     * Returns true if the component is focusable, false otherwise.  The default
     * is true.  Focusable components always have a tab index and allocate a key
     * handler to handle keyboard events while focused.
     * @return Whether the component is focusable.
     */
    isFocusable(): boolean;
    /**
     * Sets whether the component is focusable.  The default is true.
     * Focusable components always have a tab index and allocate a key handler to
     * handle keyboard events while focused.
     * @param focusable Whether the component is focusable.
     */
    setFocusable(focusable: boolean): void;
    /**
     * Sets the URL prefix for the emoji URLs.
     * @param urlPrefix Prefix that should be prepended to all URLs.
     */
    setUrlPrefix(urlPrefix: string): void;
    /**
     * Sets the progressive rendering aspect of this emojipicker. Must be called
     * before createDom to have an effect.
     * @param progressive Whether this picker should render progressively.
     */
    setProgressiveRender(progressive: boolean): void;
    /**
     * Causes the emoji imgs to be loaded into the picker. Used for delayed loading.
     * No-op if delayed loading is not set.
     */
    loadImages(): void;
    createDom(): void;
    /**
     * Used by unittests to manually load the animated emoji for this picker.
     */
    manuallyLoadAnimatedEmoji(): void;
    /**
     * EmojiPickers cannot be used to decorate pre-existing html, since the
     * structure they build is fairly complicated.
     * @param element Element to decorate.
     * @return Returns always false.
     */
    canDecorate(element: Element | null): boolean;
    enterDocument(): void;
    exitDocument(): void;
    disposeInternal(): void;
    getCssClass(): string;
    /**
     * Returns the currently selected emoji from this picker. If the picker is
     * using the URL prefix optimization, allocates a new emoji object with the
     * full URL. This method is meant to be used by clients of the emojipicker,
     * e.g., in a listener on goog.ui.Component.ComponentEventType.ACTION that wants to use
     * the just-selected emoji.
     * @return The currently selected emoji from this picker.
     */
    getSelectedEmoji(): Emoji | null;
    /**
     * Returns the number of emoji groups in this picker.
     * @return The number of emoji groups in this picker.
     */
    getNumEmojiGroups(): number;
    /**
     * Returns a page from the picker. This should be considered protected, and is
     * ONLY FOR TESTING.
     * @param index Index of the page to return.
     * @return the page at the specified index or null if none exists.
     */
    getPage(index: number): EmojiPalette | null;
    /**
     * Returns all the pages from the picker. This should be considered protected,
     * and is ONLY FOR TESTING.
     * @return the pages in the picker or null if none exist.
     */
    getPages(): (EmojiPalette | null)[] | null;
    /**
     * Returns the tabpane if this is a multipage picker. This should be considered
     * protected, and is ONLY FOR TESTING.
     * @return the tabpane if it is a multipage picker, or null if it does not exist or is a single page picker.
     */
    getTabPane(): TabPane | null;
}

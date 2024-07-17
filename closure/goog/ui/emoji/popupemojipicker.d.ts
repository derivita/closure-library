import { Component } from '../component.js';
import { EmojiPicker } from './emojipicker.js';
import type { DomHelper } from '../../dom/dom.js';
import type { PopupBase } from '../popupbase.js';
import type { TabPane } from '../tabpane.js';
import type { Emoji } from './emoji.js';
/**
 * Constructs a popup emoji picker widget.
 */
export declare class PopupEmojiPicker extends Component {
    /**
     * Constructs a popup emoji picker widget.
     * @param defaultImgUrl Url of the img that should be used to fill up the cells in the emoji table, to prevent jittering. Should be the same size as the emoji.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(defaultImgUrl: string, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_emoji_popupemojipicker_PopupEmojiPicker;
    /**
     * Adds a group of emoji to the picker.
     * @param title Title for the group.
     * @param emojiGroup A new group of emoji to be added. Each internal array contains [emojiUrl, emojiId].
     */
    addEmojiGroup(title: string | Element | null, emojiGroup: (any[] | null)[] | null): void;
    /**
     * Sets whether the emoji picker should toggle if it is already open.
     * @param toggle The toggle mode to use.
     */
    setToggleMode(toggle: boolean): void;
    /**
     * Gets whether the emojipicker is in toggle mode
     * @return toggle.
     */
    getToggleMode(): boolean;
    /**
     * Sets whether loading of images should be delayed until after dom creation.
     * Thus, this function must be called before {@link #createDom}. If set to true,
     * the client must call {@link #loadImages} when they wish the images to be
     * loaded.
     * @param shouldDelay Whether to delay loading the images.
     */
    setDelayedLoad(shouldDelay: boolean): void;
    /**
     * Sets whether the emoji picker can accept focus.
     * @param focusable Whether the emoji picker should accept focus.
     */
    setFocusable(focusable: boolean): void;
    /**
     * Sets the URL prefix for the emoji URLs.
     * @param urlPrefix Prefix that should be prepended to all URLs.
     */
    setUrlPrefix(urlPrefix: string): void;
    /**
     * Sets the location of the tabs in relation to the emoji grids. This should
     * only be called before the picker has been rendered.
     * @param tabLocation The location of the tabs.
     */
    setTabLocation(tabLocation: TabPane.TabLocation): void;
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
     * Sets the progressive rendering aspect of this emojipicker. Must be called
     * before createDom to have an effect.
     * @param progressive Whether the picker should render progressively.
     */
    setProgressiveRender(progressive: boolean): void;
    /**
     * Returns the number of emoji groups in this picker.
     * @return The number of emoji groups in this picker.
     */
    getNumEmojiGroups(): number;
    /**
     * Causes the emoji imgs to be loaded into the picker. Used for delayed loading.
     */
    loadImages(): void;
    createDom(): void;
    disposeInternal(): void;
    /**
     * Attaches the popup emoji picker to an element.
     * @param element The element to attach to.
     */
    attach(element: Element | null): void;
    /**
     * Detatches the popup emoji picker from an element.
     * @param element The element to detach from.
     */
    detach(element: Element | null): void;
    getEmojiPicker(): EmojiPicker | null;
    /**
     * Returns whether the Popup dismisses itself when the user clicks outside of
     * it.
     * @return Whether the Popup autohides on an external click.
     */
    getAutoHide(): boolean;
    /**
     * Sets whether the Popup dismisses itself when the user clicks outside of it -
     * must be called after the Popup has been created (in createDom()),
     * otherwise it does nothing.
     * @param autoHide Whether to autohide on an external click.
     */
    setAutoHide(autoHide: boolean): void;
    /**
     * Returns the region inside which the Popup dismisses itself when the user
     * clicks, or null if it was not set. Null indicates the entire document is
     * the autohide region.
     * @return The DOM element for autohide, or null if it hasn't been set.
     */
    getAutoHideRegion(): Element | null;
    /**
     * Sets the region inside which the Popup dismisses itself when the user
     * clicks - must be called after the Popup has been created (in createDom()),
     * otherwise it does nothing.
     * @param element The DOM element for autohide.
     */
    setAutoHideRegion(element: Element | null): void;
    /**
     * Returns the {@link PopupBase} from this picker. Returns null if the
     * popup has not yet been created.
     *
     * NOTE: This should *ONLY* be called from tests. If called before createDom(),
     * this should return null.
     * @return The popup, or null if it hasn't been created.
     */
    getPopup(): PopupBase | null;
    getLastTarget(): Element | null;
    getSelectedEmoji(): Emoji | null;
}

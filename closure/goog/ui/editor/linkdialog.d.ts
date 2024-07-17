import * as dom from '../../dom/dom.js';
import { Link } from '../../editor/link.js';
import { Event } from '../../events/event.js';
import { SafeHtml } from '../../html/safehtml.js';
import { AbstractDialog } from './abstractdialog.js';
/**
 * A type of AbstractDialog for editing/creating a link.
 */
export declare class LinkDialog extends AbstractDialog {
    /**
     * A type of AbstractDialog for editing/creating a link.
     * @param domHelper DomHelper to be used to create the dialog's dom structure.
     * @param link The target link.
     */
    constructor(domHelper: dom.DomHelper | null, link: Link | null);
    private noStructuralTyping_closure_goog_ui_editor_linkdialog_LinkDialog;
    /**
     * Sets the warning message to show to users about including email addresses on
     * public web pages.
     * @param emailWarning Warning message to show users about including email addresses on the web.
     */
    setEmailWarning(emailWarning: SafeHtml): void;
    /**
     * Tells the dialog to show a checkbox where the user can choose to have the
     * link open in a new window.
     * @param startChecked Whether to check the checkbox the first time the dialog is shown. Subesquent times the checkbox will remember its previous state.
     */
    showOpenLinkInNewWindow(startChecked: boolean): void;
    /**
     * Tells the dialog to focus the text to display input instead of the url field
     * if the text to display input is empty when the dialog is opened.
     */
    focusTextToDisplayOnOpenIfEmpty(): void;
    /**
     * Tells the dialog to show a checkbox where the user can choose to add
     * 'rel=nofollow' attribute to the link.
     */
    showRelNoFollow(): void;
    show(): void;
    hide(): void;
    /**
     * Tells the dialog whether to show the 'text to display' div.
     * When the target element of the dialog is an image, there is no link text
     * to modify. This function can be used for this kind of situations.
     * @param visible Whether to make 'text to display' div visible.
     */
    setTextToDisplayVisible(visible: boolean): void;
    /**
     * Tells the plugin whether to stop leaking the page's url via the referrer
     * header when the "test this link" link is clicked.
     * @param stop Whether to stop leaking the referrer.
     */
    setStopReferrerLeaks(stop: boolean): void;
    /**
     * Tells the plugin whether to remove access to the current window object in the
     * newly created window when the "test this link" is clicked, since it can be
     * used to launch a reverse tabnabbing attack.
     * @param stop Whether to remove the reference to the current window in the new window.
     */
    setStopTabNabbing(stop: boolean): void;
    /**
     * Tells the dialog whether the autogeneration of text to display is to be
     * enabled.
     * @param enable Whether to enable the feature.
     */
    setAutogenFeatureEnabled(enable: boolean): void;
    /**
     * Checks if `str` contains {@code "nofollow"} as a separate word.
     * @param str String to be tested.  This is usually `rel` attribute of an `HTMLAnchorElement` object.
     * @return `true` if `str` contains `nofollow`.
     */
    static hasNoFollow(str: string): boolean;
    /**
     * Removes {@code "nofollow"} from `rel` if it's present as a separate
     * word.
     * @param rel Input string.  This is usually `rel` attribute of an `HTMLAnchorElement` object.
     * @return `rel` with any {@code "nofollow"} removed.
     */
    static removeNoFollow(rel: string): string;
    createDialogControl(): import("../dialog.js").Dialog;
    /**
     * Creates and returns the event object to be used when dispatching the OK
     * event to listeners based on which tab is currently selected and the contents
     * of the input fields of that tab.
     * @return The event object to be used when dispatching the OK event to listeners.
     */
    createOkEvent(): LinkDialog.OkEvent;
}
export declare namespace LinkDialog {
    /**
     * Events specific to the link dialog.
     */
    enum EventType {
        BEFORE_TEST_LINK = "beforetestlink"
    }
    /**
     * OK event object for the link dialog.
     */
    class OkEvent extends Event {
        /**
         * OK event object for the link dialog.
         * @param linkText Text the user chose to display for the link.
         * @param linkUrl Url the user chose for the link to point to.
         * @param openInNewWindow Whether the link should open in a new window when clicked.
         * @param noFollow Whether the link should have 'rel=nofollow' attribute.
         */
        constructor(linkText: string, linkUrl: string, openInNewWindow: boolean, noFollow: boolean);
        private noStructuralTyping_closure_goog_ui_editor_linkdialog_OkEvent;
        /**
         * The text of the link edited in the dialog.
         */
        linkText: string;
        /**
         * The url of the link edited in the dialog.
         */
        linkUrl: string;
        /**
         * Whether the link should open in a new window when clicked.
         */
        openInNewWindow: boolean;
        /**
         * Whether the link should have 'rel=nofollow' attribute.
         */
        noFollow: boolean;
    }
    /**
     * Event fired before testing a link by opening it in another window.
     * Calling preventDefault will stop the link from being opened.
     */
    class BeforeTestLinkEvent extends Event {
        /**
         * Event fired before testing a link by opening it in another window.
         * Calling preventDefault will stop the link from being opened.
         * @param url Url of the link being tested.
         */
        constructor(url: string);
        private noStructuralTyping_closure_goog_ui_editor_linkdialog_BeforeTestLinkEvent;
        /**
         * The url of the link being tested.
         */
        url: string;
    }
    /**
     * IDs for relevant DOM elements.
     */
    enum Id_ {
        TEXT_TO_DISPLAY = "linkdialog-text",
        TEXT_TO_DISPLAY_LABEL = "linkdialog-text-label",
        ON_WEB_TAB = "linkdialog-onweb",
        ON_WEB_INPUT = "linkdialog-onweb-tab-input",
        EMAIL_ADDRESS_TAB = "linkdialog-email",
        EMAIL_ADDRESS_INPUT = "linkdialog-email-tab-input",
        EMAIL_WARNING = "linkdialog-email-warning",
        TAB_INPUT_SUFFIX = "-tab-input"
    }
}

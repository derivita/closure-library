import * as dom from '../../dom/dom.js';
import { AbstractDialogPlugin } from './abstractdialogplugin.js';
import { EventHandler } from '../../events/eventhandler.js';
import { LinkDialog } from '../../ui/editor/linkdialog.js';
import type { Link } from '../link.js';
import type { Event } from '../../events/event.js';
import type { SafeHtml } from '../../html/safehtml.js';
/**
 * A plugin that opens the link dialog.
 */
export declare class LinkDialogPlugin extends AbstractDialogPlugin {
    /**
     * A plugin that opens the link dialog.
     */
    constructor();
    private noStructuralTyping_closure_goog_editor_plugins_linkdialogplugin_LinkDialogPlugin;
    /**
     * Link object that the dialog is editing.
     */
    protected currentLink_: Link | null;
    /**
     * Tells the plugin whether to block URLs with schemes not in the whitelist.
     * If blocking is enabled, this plugin will stop the 'Test Link' popup
     * window from being created. Blocking doesn't affect link creation--if the
     * user clicks the 'OK' button with an unsafe URL, the link will still be
     * created as normal.
     * @param blockOpeningUnsafeSchemes Whether to block non-whitelisted schemes.
     */
    setBlockOpeningUnsafeSchemes(blockOpeningUnsafeSchemes: boolean): void;
    /**
     * Sets a whitelist of allowed URL schemes that are safe to open.
     * Schemes should all be in lowercase. If the plugin is set to block opening
     * unsafe schemes, user-entered URLs will be converted to lowercase and checked
     * against this list. The whitelist has no effect if blocking is not enabled.
     * @param schemes String array of URL schemes to allow (http, https, etc.).
     */
    setSafeToOpenSchemes(schemes: string[] | null): void;
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
     * Tells the dialog to show a checkbox where the user can choose to have
     * 'rel=nofollow' attribute added to the link.
     */
    showRelNoFollow(): void;
    /**
     * Returns whether the"open link in new window" checkbox was checked last time
     * the dialog was closed.
     * @return Whether the"open link in new window" checkbox was checked last time the dialog was closed.
     */
    getOpenLinkInNewWindowCheckedState(): boolean;
    /**
     * Tells the plugin to stop leaking the page's url via the referrer header when
     * the "test this link" link is clicked. When the user clicks on a link, the
     * browser makes a request for the link url, passing the url of the current page
     * in the request headers. If the user wants the current url to be kept secret
     * (e.g. an unpublished document), the owner of the url that was clicked will
     * see the secret url in the request headers, and it will no longer be a secret.
     * Calling this method will not send a referrer header in the request, just as
     * if the user had opened a blank window and typed the url in themselves.
     */
    stopReferrerLeaks(): void;
    /**
     * Tells the plugin to stop leaving a reference to the current window in windows
     * opened when "Test this link" is clicked. Otherwise, the reference can be used
     * to launch a reverse tabnabbing attack.
     */
    stopTabNabbing(): void;
    /**
     * Sets the warning message to show to users about including email addresses on
     * public web pages.
     * @param emailWarning Warning message to show users about including email addresses on the web.
     */
    setEmailWarning(emailWarning: SafeHtml): void;
    /**
     * Handles execCommand by opening the dialog.
     * @param command The command to execute.
     * @param opt_arg {@link A Link} object representing the link being edited.
     * @return Always returns true, indicating the dialog was shown.
     */
    execCommandInternal(command: string, opt_arg?: any): any;
    /**
     * Handles when the dialog closes.
     * @param e The AFTER_HIDE event object.
     */
    handleAfterHide(e: Event | null): void;
    protected getEventHandler<T = any>(this: T): EventHandler<T | null> | null;
    protected getCurrentLink(): Link | null;
    /**
     * Creates a new instance of the dialog and registers for the relevant events.
     * @param dialogDomHelper The dom helper to be used to create the dialog.
     * @param opt_link The target link (should be a Link).
     * @return The dialog.
     */
    createDialog(dialogDomHelper: dom.DomHelper | null, opt_link?: any): LinkDialog;
    disposeInternal(): void;
    /**
     * Handles the OK event from the dialog by updating the link in the field.
     * @param e OK event object.
     */
    protected handleOk(e: LinkDialog.OkEvent | null): void;
    /**
     * Handles the CANCEL event from the dialog by clearing the anchor if needed.
     * @param e Event object.
     */
    protected handleCancel(e: Event | null): void;
    /**
     * Handles the BeforeTestLink event fired when the 'test' link is clicked.
     * @param e BeforeTestLink event object.
     */
    protected handleBeforeTestLink(e: LinkDialog.BeforeTestLinkEvent | null): void;
    /**
     * Checks whether the plugin should open the given url in a new window.
     * @param url The url to check.
     * @return If the plugin should open the given url in a new window.
     */
    protected shouldOpenUrl(url: string): boolean;
}

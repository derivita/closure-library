//!! generated by clutz.
// Generated from editor/plugins/linkdialogplugin.js
declare namespace ಠ_ಠ.clutz.goog.editor.plugins {
  /**
   * A plugin that opens the link dialog.
   */
  class LinkDialogPlugin extends ಠ_ಠ.clutz.goog.editor.plugins.AbstractDialogPlugin {
    private noStructuralTyping_goog_editor_plugins_LinkDialogPlugin : any;
    /**
     * A plugin that opens the link dialog.
     */
    constructor ( ) ;
    /**
     * Creates a new instance of the dialog and registers for the relevant events.
     * @param dialogDomHelper The dom helper to be used to create the dialog.
     * @param opt_link The target link (should be a goog.editor.Link).
     */
    protected createDialog (dialogDomHelper : ಠ_ಠ.clutz.goog.dom.DomHelper | null , opt_link ? : any ) : ಠ_ಠ.clutz.goog.ui.editor.LinkDialog ;
    /**
     * Link object that the dialog is editing.
     */
    protected currentLink_ : ಠ_ಠ.clutz.goog.editor.Link | null ;
    disposeInternal ( ) : void ;
    /**
     * Handles execCommand by opening the dialog.
     * @param command The command to execute.
     * @param opt_arg {@link A goog.editor.Link} object representing the link being edited.
     */
    protected execCommandInternal (command : string , opt_arg ? : any ) : any ;
    focusTextToDisplayOnOpenIfEmpty ( ) : void ;
    protected getCurrentLink ( ) : ಠ_ಠ.clutz.goog.editor.Link | null ;
    protected getEventHandler < T = any > (this : T ) : ಠ_ಠ.clutz.goog.events.EventHandler < T > | null ;
    /**
     * Returns whether the"open link in new window" checkbox was checked last time
     * the dialog was closed.
     */
    getOpenLinkInNewWindowCheckedState ( ) : boolean ;
    getTrogClassId ( ) : string ;
    /**
     * Handles when the dialog closes.
     * @param e The AFTER_HIDE event object.
     */
    protected handleAfterHide (e : ಠ_ಠ.clutz.goog.events.Event | null ) : void ;
    /**
     * Handles the BeforeTestLink event fired when the 'test' link is clicked.
     * @param e BeforeTestLink event object.
     */
    protected handleBeforeTestLink (e : ಠ_ಠ.clutz.goog.ui.editor.LinkDialog.BeforeTestLinkEvent | null ) : void ;
    /**
     * Handles the CANCEL event from the dialog by clearing the anchor if needed.
     * @param e Event object.
     */
    protected handleCancel (e : ಠ_ಠ.clutz.goog.events.Event | null ) : void ;
    /**
     * Handles the OK event from the dialog by updating the link in the field.
     * @param e OK event object.
     */
    protected handleOk (e : ಠ_ಠ.clutz.goog.ui.editor.LinkDialog.OkEvent | null ) : void ;
    /**
     * Tells the plugin whether to block URLs with schemes not in the whitelist.
     * If blocking is enabled, this plugin will stop the 'Test Link' popup
     * window from being created. Blocking doesn't affect link creation--if the
     * user clicks the 'OK' button with an unsafe URL, the link will still be
     * created as normal.
     * @param blockOpeningUnsafeSchemes Whether to block non-whitelisted schemes.
     */
    setBlockOpeningUnsafeSchemes (blockOpeningUnsafeSchemes : boolean ) : void ;
    /**
     * Sets the warning message to show to users about including email addresses on
     * public web pages.
     * @param emailWarning Warning message to show users about including email addresses on the web.
     */
    setEmailWarning (emailWarning : ಠ_ಠ.clutz.goog.html.SafeHtml ) : void ;
    /**
     * Sets a whitelist of allowed URL schemes that are safe to open.
     * Schemes should all be in lowercase. If the plugin is set to block opening
     * unsafe schemes, user-entered URLs will be converted to lowercase and checked
     * against this list. The whitelist has no effect if blocking is not enabled.
     * @param schemes String array of URL schemes to allow (http, https, etc.).
     */
    setSafeToOpenSchemes (schemes : string [] | null ) : void ;
    /**
     * Checks whether the plugin should open the given url in a new window.
     * @param url The url to check.
     */
    protected shouldOpenUrl (url : string ) : boolean ;
    /**
     * Tells the dialog to show a checkbox where the user can choose to have the
     * link open in a new window.
     * @param startChecked Whether to check the checkbox the first time the dialog is shown. Subesquent times the checkbox will remember its previous state.
     */
    showOpenLinkInNewWindow (startChecked : boolean ) : void ;
    showRelNoFollow ( ) : void ;
    stopReferrerLeaks ( ) : void ;
    stopTabNabbing ( ) : void ;
  }
}
declare module 'goog:goog.editor.plugins.LinkDialogPlugin' {
  import LinkDialogPlugin = ಠ_ಠ.clutz.goog.editor.plugins.LinkDialogPlugin;
  export default LinkDialogPlugin;
}

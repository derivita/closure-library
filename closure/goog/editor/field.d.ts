import * as dom from '../dom/dom.js';
import { PluginImpl } from './plugin_impl.js';
import { FieldFormatInfo } from './icontent.js';
import { EventHandler } from '../events/eventhandler.js';
import { EventTarget } from '../events/eventtarget.js';
import { SafeHtml } from '../html/safehtml.js';
import { SafeStyleSheet } from '../html/safestylesheet.js';
import * as log from '../log/log.js';
import type { Disposable } from '../disposable/disposable.js';
import type { AbstractRange } from '../dom/abstractrange.js';
import type { SavedRange } from '../dom/savedrange.js';
import type { BrowserEvent } from '../events/browserevent.js';
import type { TrustedResourceUrl } from '../html/trustedresourceurl.js';
/**
 * This class encapsulates an editable field.
 *
 * event: load Fires when the field is loaded
 * event: unload Fires when the field is unloaded (made not editable)
 *
 * event: beforechange Fires before the content of the field might change
 *
 * event: delayedchange Fires a short time after field has changed. If multiple
 * change events happen really close to each other only
 * the last one will trigger the delayedchange event.
 *
 * event: beforefocus Fires before the field becomes active
 * event: focus Fires when the field becomes active. Fires after the blur event
 * event: blur Fires when the field becomes inactive
 *
 * TODO: figure out if blur or beforefocus fires first in IE and make FF match
 */
export declare class Field extends EventTarget {
    /**
     * This class encapsulates an editable field.
     *
     * event: load Fires when the field is loaded
     * event: unload Fires when the field is unloaded (made not editable)
     *
     * event: beforechange Fires before the content of the field might change
     *
     * event: delayedchange Fires a short time after field has changed. If multiple
     * change events happen really close to each other only
     * the last one will trigger the delayedchange event.
     *
     * event: beforefocus Fires before the field becomes active
     * event: focus Fires when the field becomes active. Fires after the blur event
     * event: blur Fires when the field becomes inactive
     *
     * TODO: figure out if blur or beforefocus fires first in IE and make FF match
     * @param id An identifer for the field. This is used to find the field and the element associated with this field.
     * @param opt_doc The document that the element with the given id can be found in.  If not provided, the default document is used.
     */
    constructor(id: string, opt_doc?: Document | null);
    private noStructuralTyping_closure_goog_editor_field_Field;
    /**
     * The id for this editable field, which must match the id of the element
     * associated with this field.
     */
    id: string;
    /**
     * Dom helper for the editable node.
     */
    protected editableDomHelper: dom.DomHelper | null;
    /**
     * Additional styles to install for the editable field.
     */
    protected cssStyles: SafeStyleSheet;
    protected eventRegister: EventHandler<Field> | null;
    /**
     * The dom helper for the node to be made editable.
     */
    protected originalDomHelper: dom.DomHelper | null;
    /**
     * The original node that is being made editable, or null if it has
     * not yet been found.
     */
    protected originalElement: Element | null;
    /**
     * The editable dom node.
     */
    field: Element | null;
    /**
     * Logging object.
     */
    protected logger: log.Logger | null;
    /**
     * Sets the active field id.
     * @param fieldId The active field id.
     */
    static setActiveFieldId(fieldId: string | null): void;
    static getActiveFieldId(): string | null;
    /**
     * Sets flag to control whether to use window mouse up after seeing
     * a mouse down operation on the field.
     * @param flag True to track window mouse up.
     */
    setUseWindowMouseUp(flag: boolean): void;
    inModalMode(): boolean;
    /**
     *
     * @param inModalMode Sets whether we're in modal interaction mode.
     */
    setModalMode(inModalMode: boolean): void;
    /**
     * Returns a string usable as a hash code for this field. For field's
     * that were created with an id, the hash code is guaranteed to be the id.
     * TODO(user): I think we can get rid of this.  Seems only used from editor.
     * @return The hash code for this editable field.
     */
    getHashCode(): string;
    /**
     * Returns the editable DOM element or null if this field
     * is not editable.
     * <p>On IE or Safari this is the element with contentEditable=true
     * (in whitebox mode, the iFrame body).
     * <p>On Gecko this is the iFrame body
     * TODO(user): How do we word this for subclass version?
     * @return The editable DOM element, defined as above.
     */
    getElement(): Element | null;
    /**
     * Returns original DOM element that is being made editable by Trogedit or
     * null if that element has not yet been found in the appropriate document.
     * @return The original element.
     */
    getOriginalElement(): Element | null;
    /**
     * Registers a keyboard event listener on the field.  This is necessary for
     * Gecko since the fields are contained in an iFrame and there is no way to
     * auto-propagate key events up to the main window.
     * @param type Event type to listen for or array of event types, for example EventType.KEYDOWN.
     * @param listener Function to be used as the listener.
     * @param opt_capture Whether to use capture phase (optional, defaults to false).
     * @param opt_handler Object in whose scope to call the listener.
     */
    addListener(type: string | string[] | null, listener: Function | null, opt_capture?: boolean, opt_handler?: object | null): void;
    /**
     * Returns the registered plugin with the given classId.
     * @param classId classId of the plugin.
     * @return Registered plugin with the given classId.
     */
    getPluginByClassId(classId: string): PluginImpl | null;
    /**
     * Registers the plugin with the editable field.
     * @param plugin The plugin to register.
     */
    registerPlugin(plugin: PluginImpl): void;
    /**
     * Unregisters the plugin with this field.
     * @param plugin The plugin to unregister.
     */
    unregisterPlugin(plugin: PluginImpl | null): void;
    /**
     * Sets the value that will replace the style attribute of this field's
     * element when the field is made non-editable. This method is called with the
     * current value of the style attribute when the field is made editable.
     * @param cssText The value of the style attribute.
     */
    setInitialStyle(cssText: string): void;
    /**
     * Reset the properties on the original field element to how it was before
     * it was made editable.
     */
    resetOriginalElemProperties(): void;
    /**
     * Checks the modified state of the field.
     * Note: Changes that take place while the Field.EventType.CHANGE
     * event is stopped do not effect the modified state.
     * @param opt_useIsEverModified Set to true to check if the field has ever been modified since it was created, otherwise checks if the field has been modified since the last Field.EventType.DELAYEDCHANGE event was dispatched.
     * @return Whether the field has been modified.
     */
    isModified(opt_useIsEverModified?: boolean): boolean;
    /**
     * Number of milliseconds after a change when the change event should be fired.
     */
    static CHANGE_FREQUENCY: number;
    /**
     * Number of milliseconds between delayed change events.
     */
    static DELAYED_CHANGE_FREQUENCY: number;
    usesIframe(...args: any[]): boolean;
    isFixedHeight(...args: any[]): boolean;
    /**
     * Sets the application window.
     * @param appWindow The window where dialogs and bubbles should be rendered.
     */
    setAppWindow(appWindow: Window): void;
    /**
     * Returns the "application" window, where dialogs and bubbles
     * should be rendered.
     * @return The window.
     */
    getAppWindow(): Window;
    /**
     * Sets the zIndex that the field should be based off of.
     * TODO(user): Get rid of this completely.  Here for Sites.
     * Should this be set directly on UI plugins?
     * @param zindex The base zIndex of the editor.
     */
    setBaseZindex(zindex: number): void;
    /**
     * Returns the zindex of the base level of the field.
     * @return The base zindex of the editor.
     */
    getBaseZindex(): number;
    /**
     * Sets up the field object and window util of this field, and enables this
     * editable field with all registered plugins.
     * This is essential to the initialization of the field.
     * It must be called when the field becomes fully loaded and editable.
     * @param field The field property.
     */
    protected setupFieldObject(field: Element | null): void;
    /**
     * Stops all listeners and timers.
     */
    protected clearListeners(): void;
    disposeInternal(): void;
    /**
     * Attach an wrapper to this field, to be thrown out when the field
     * is disposed.
     * @param wrapper The wrapper to attach.
     */
    attachWrapper(wrapper: Disposable | null): void;
    /**
     * Removes all wrappers and destroys them.
     */
    removeAllWrappers(): void;
    /**
     * Sets whether activating a hyperlink in this editable field will open a new
     * window or not.
     */
    setFollowLinkInNewWindow(followLinkInNewWindow: boolean): void;
    /**
     * Keycodes that result in a selectionchange event (e.g. the cursor moving).
     */
    static SELECTION_CHANGE_KEYCODES: {
        [key: number]: number;
    };
    /**
     * Prepare the given contents, then inject them into the editable field.
     * @param contents The contents to prepare.
     * @param field The field element.
     */
    protected injectContents(contents: string | null, field: Element | null): void;
    /**
     * Returns prepared contents that can be injected into the editable field.
     * @param contents The contents to prepare.
     * @param styles A map that will be populated with styles that should be applied to the field element together with the contents.
     * @return The prepared contents.
     */
    getInjectableContents(contents: string | null, styles: object | null): string;
    /**
     * Executes an editing command as per the registered plugins.
     * @param command The command to execute.
     * @param var_args Any additional parameters needed to execute the command.
     * @return False if the command wasn't handled, otherwise, the result of the command.
     */
    execCommand(command: string, ...var_args: any[]): any;
    /**
     * Gets the value of command(s).
     * @param commands String name(s) of the command.
     * @return Value of each command. Returns false (or array of falses) if designMode is off or the field is otherwise uneditable, and there are no activeOnUneditable plugins for the command.
     */
    queryCommandValue(commands: string | string[] | null): any;
    /**
     * Fires a change event only if the attribute change effects the editiable
     * field. We ignore events that are internal browser events (ie scrollbar
     * state change)
     * @param handler The function to call if this is not an internal browser event.
     * @param browserEvent The browser event.
     */
    protected handleDomAttrChange(handler: Function | null, browserEvent: BrowserEvent | null): void;
    protected getEditableIframe(): HTMLIFrameElement | null;
    getEditableDomHelper(): dom.DomHelper | null;
    getRange(): AbstractRange | null;
    /**
     * Dispatch a selection change event, optionally caused by the given browser
     * event or selecting the given target.
     * @param opt_e Optional browser event causing this event.
     * @param opt_target The node the selection changed to.
     */
    dispatchSelectionChangeEvent(opt_e?: BrowserEvent | null, opt_target?: Node | null): void;
    /**
     * This dispatches the beforechange event on the editable field
     */
    dispatchBeforeChange(): void;
    /**
     * Temporarily ignore change events. If the time has already been set, it will
     * fire immediately now.  Further setting of the timer is stopped and
     * dispatching of events is stopped until startChangeEvents is called.
     * @param opt_stopChange Whether to ignore base change events.
     * @param opt_stopDelayedChange Whether to ignore delayed change events.
     * @param opt_cancelPendingDelayedChange Whether to prevent any pending delayed change events from firing when we disable the event.
     */
    stopChangeEvents(opt_stopChange?: boolean, opt_stopDelayedChange?: boolean, opt_cancelPendingDelayedChange?: boolean): void;
    /**
     * Start change events again and fire once if desired.
     * @param opt_fireChange Whether to fire the change event immediately.
     * @param opt_fireDelayedChange Whether to fire the delayed change event immediately.
     */
    startChangeEvents(opt_fireChange?: boolean, opt_fireDelayedChange?: boolean): void;
    /**
     * Stops the event of the given type from being dispatched.
     * @param eventType type of event to stop.
     */
    stopEvent(eventType: Field.EventType | null): void;
    /**
     * Re-starts the event of the given type being dispatched, if it had
     * previously been stopped with stopEvent().
     * @param eventType type of event to start.
     */
    startEvent(eventType: Field.EventType | null): void;
    /**
     * Block an event for a short amount of time. Intended
     * for the situation where an event pair fires in quick succession
     * (e.g., mousedown/mouseup, keydown/keyup, focus/blur),
     * and we want the second event in the pair to get "debounced."
     *
     * WARNING: This should never be used to solve race conditions or for
     * mission-critical actions. It should only be used for UI improvements,
     * where it's okay if the behavior is non-deterministic.
     * @param eventType type of event to debounce.
     */
    debounceEvent(eventType: Field.EventType | null): void;
    /**
     * Checks if the event of the given type has stopped being dispatched
     * @param eventType type of event to check.
     * @return true if the event has been stopped with stopEvent().
     */
    protected isEventStopped(eventType: Field.EventType | null): boolean;
    /**
     * Calls a function to manipulate the dom of this field. This method should be
     * used whenever Trogedit clients need to modify the dom of the field, so that
     * delayed change events are handled appropriately. Extra delayed change events
     * will cause undesired states to be added to the undo-redo stack. This method
     * will always fire at most one delayed change event, depending on the value of
     * `opt_preventDelayedChange`.
     * @param func The function to call that will manipulate the dom.
     * @param opt_preventDelayedChange Whether delayed change should be prevented after calling `func`. Defaults to always firing delayed change.
     * @param opt_handler Object in whose scope to call the listener.
     */
    manipulateDom(func: () => any, opt_preventDelayedChange?: boolean, opt_handler?: object | null): void;
    /**
     * Dispatches a command value change event.
     * @param opt_commands Commands whose state has changed.
     */
    dispatchCommandValueChange(opt_commands?: string[] | null): void;
    /**
     * Dispatches the appropriate set of change events. This only fires
     * synchronous change events in blended-mode, iframe-using mozilla. It just
     * starts the appropriate timer for Field.EventType.DELAYEDCHANGE.
     * This also starts up change events again if they were stopped.
     * @param opt_noDelay True if Field.EventType.DELAYEDCHANGE should be fired syncronously.
     */
    dispatchChange(opt_noDelay?: boolean): void;
    /**
     * Handle a change in the Editable Field.  Marks the field has modified,
     * dispatches the change event on the editable field (moz only), starts the
     * timer for the delayed change event.  Note that these actions only occur if
     * the proper events are not stopped.
     */
    handleChange(): void;
    /**
     * Don't wait for the timer and just fire the delayed change event if it's
     * pending.
     */
    clearDelayedChange(): void;
    /**
     * Dispatches a blur event.
     */
    protected dispatchBlur(): void;
    isSelectionEditable(): boolean;
    /**
     * Retrieve the HTML contents of a field.
     *
     * Do NOT just get the innerHTML of a field directly--there's a lot of
     * processing that needs to happen.
     * @return The scrubbed contents of the field.
     */
    getCleanContents(): string;
    /**
     * Get the copy of the editable field element, which has the innerHTML set
     * correctly.
     * @return The copy of the editable field.
     */
    protected getFieldCopy(): Element;
    /**
     * Sets the contents of the field.
     * @param addParas Boolean to specify whether to add paragraphs to long fields.
     * @param html html to insert.  If html=null, then this defaults to a nbsp for mozilla and an empty string for IE.
     * @param opt_dontFireDelayedChange True to make this content change not fire a delayed change event.
     * @param opt_applyLorem Whether to apply lorem ipsum styles.
     */
    setSafeHtml(addParas: boolean, html: SafeHtml | null, opt_dontFireDelayedChange?: boolean, opt_applyLorem?: boolean): void;
    /**
     * Attemps to turn on designMode for a document.  This function can fail under
     * certain circumstances related to the load event, and will throw an exception.
     */
    protected turnOnDesignModeGecko(): void;
    /**
     * Installs styles if needed. Only writes styles when they can't be written
     * inline directly into the field.
     */
    protected installStyles(): void;
    isUneditable(): boolean;
    isLoaded(): boolean;
    isLoading(): boolean;
    /**
     * Gives the field focus.
     */
    focus(): void;
    /**
     * Gives the field focus and places the cursor at the start of the field.
     */
    focusAndPlaceCursorAtStart(): void;
    /**
     * Place the cursor at the start of this field. It's recommended that you only
     * use this method (and manipulate the selection in general) when there is not
     * an existing selection in the field.
     */
    placeCursorAtStart(): void;
    /**
     * Place the cursor at the start of this field. It's recommended that you only
     * use this method (and manipulate the selection in general) when there is not
     * an existing selection in the field.
     */
    placeCursorAtEnd(): void;
    /**
     * Restore a saved range, and set the focus on the field.
     * If no range is specified, we simply set the focus.
     * @param opt_range A previously saved selected range.
     */
    restoreSavedRange(opt_range?: SavedRange | null): void;
    /**
     * Makes a field editable.
     * @param opt_iframeSrc URL to set the iframe src to if necessary.
     */
    makeEditable(opt_iframeSrc?: TrustedResourceUrl): void;
    /**
     * Handles actually making something editable - creating necessary nodes,
     * injecting content, etc.
     * @param opt_iframeSrc URL to set the iframe src to if necessary.
     */
    protected makeEditableInternal(opt_iframeSrc?: TrustedResourceUrl): void;
    /**
     * Handle the loading of the field (e.g. once the field is ready to setup).
     * TODO(user): this should probably just be moved into dispatchLoadEvent_.
     */
    protected handleFieldLoad(): void;
    /**
     * Closes the field and cancels all pending change timers.  Note that this
     * means that if a change event has not fired yet, it will not fire.  Clients
     * should check fieldOj.isModified() if they depend on the final change event.
     * Throws an error if the field is already uneditable.
     * @param opt_skipRestore True to prevent copying of editable field contents back into the original node.
     */
    makeUneditable(opt_skipRestore?: boolean): void;
    /**
     * Restores the dom to how it was before being made editable.
     */
    protected restoreDom(): void;
    /**
     * Returns true if the field needs to be loaded asynchrnously.
     * @return True if loads are async.
     */
    protected shouldLoadAsynchronously(): boolean;
    /**
     * Given the original field element, and the iframe that is destined to
     * become the editable field, styles them appropriately and add the iframe
     * to the dom.
     * @param iframe The iframe element.
     */
    protected attachIframe(iframe: HTMLIFrameElement | null): void;
    /**
     *
     * @param extraStyles A map of extra styles.
     * @return The FieldFormatInfo object for this field's configuration.
     */
    protected getFieldFormatInfo(extraStyles: object | null): FieldFormatInfo;
    /**
     * Writes the html content into the iframe.  Handles writing any aditional
     * styling as well.
     * @param iframe Iframe to write contents into.
     * @param innerHtml The html content to write into the iframe.
     * @param extraStyles A map of extra style attributes.
     */
    protected writeIframeContent(iframe: HTMLIFrameElement | null, innerHtml: string, extraStyles: object | null): void;
    /**
     * The function to call when the editable iframe loads.
     * @param iframe Iframe that just loaded.
     * @param innerHtml Html to put inside the body of the iframe.
     * @param styles Property-value map of CSS styles to install on editable field.
     */
    protected iframeFieldLoadHandler(iframe: HTMLIFrameElement | null, innerHtml: string, styles: object | null): void;
    protected getIframeAttributes(): object;
}
export declare namespace Field {
    /**
     * Event types that can be stopped/started.
     */
    enum EventType {
        COMMAND_VALUE_CHANGE = "cvc",
        LOAD = "load",
        UNLOAD = "unload",
        BEFORECHANGE = "beforechange",
        CHANGE = "change",
        DELAYEDCHANGE = "delayedchange",
        BEFOREFOCUS = "beforefocus",
        FOCUS = "focus",
        BLUR = "blur",
        BEFORETAB = "beforetab",
        IFRAME_RESIZED = "ifrsz",
        BEFORESELECTIONCHANGE = "beforeselectionchange",
        SELECTIONCHANGE = "selectionchange"
    }
    /**
     * The load state of the field.
     */
    enum LoadState_ {
        UNEDITABLE = 0,
        LOADING = 1,
        EDITABLE = 2
    }
}

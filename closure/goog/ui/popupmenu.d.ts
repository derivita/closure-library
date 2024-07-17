import { BrowserEvent } from '../events/browserevent.js';
import { Corner } from '../positioning/positioning.js';
import { Menu } from './menu.js';
import type { DomHelper } from '../dom/dom.js';
import type { Box } from '../math/box.js';
import type { AbstractPosition } from '../positioning/abstractposition.js';
import type { MenuRenderer } from './menurenderer.js';
/**
 * A basic menu class.
 */
export declare class PopupMenu extends Menu {
    /**
     * A basic menu class.
     * @param opt_domHelper Optional DOM helper.
     * @param opt_renderer Renderer used to render or decorate the container; defaults to {@link MenuRenderer}.
     */
    constructor(opt_domHelper?: DomHelper | null, opt_renderer?: MenuRenderer | null);
    private noStructuralTyping_closure_goog_ui_popupmenu_PopupMenu;
    /**
     * Decorate an existing HTML structure with the menu. Menu items will be
     * constructed from elements with classname 'goog-menuitem', separators will be
     * made from HR elements.
     * @param element Element to decorate.
     */
    decorateInternal(element: Element | null): void;
    enterDocument(): void;
    /**
     * Attaches the menu to a new popup position and anchor element.  A menu can
     * only be attached to an element once, since attaching the same menu for
     * multiple positions doesn't make sense.
     * @param element Element whose click event should trigger the menu.
     * @param opt_targetCorner Corner of the target that the menu should be anchored to.
     * @param opt_menuCorner Corner of the menu that should be anchored.
     * @param opt_contextMenu Whether the menu should show on {@link EventType.CONTEXTMENU} events, false if it should show on {@link EventType.MOUSEDOWN} events. Default is MOUSEDOWN.
     * @param opt_margin Margin for the popup used in positioning algorithms.
     */
    attach(element: Element | null, opt_targetCorner?: Corner | null, opt_menuCorner?: Corner | null, opt_contextMenu?: boolean, opt_margin?: Box | null): void;
    /**
     * Creates an object describing how the popup menu should be attached to the
     * anchoring element based on the given parameters. The created object is
     * stored, keyed by `element` and is retrievable later by invoking
     * {@link #getAttachTarget(element)} at a later point.
     *
     * Subclass may add more properties to the returned object, as needed.
     * @param element Element whose click event should trigger the menu.
     * @param opt_targetCorner Corner of the target that the menu should be anchored to.
     * @param opt_menuCorner Corner of the menu that should be anchored.
     * @param opt_contextMenu Whether the menu should show on {@link EventType.CONTEXTMENU} events, false if it should show on {@link EventType.MOUSEDOWN} events. Default is MOUSEDOWN.
     * @param opt_margin Margin for the popup used in positioning algorithms.
     * @return An object that describes how the popup menu should be attached to the anchoring element.
     */
    protected createAttachTarget(element: Element | null, opt_targetCorner?: Corner | null, opt_menuCorner?: Corner | null, opt_contextMenu?: boolean, opt_margin?: Box | null): object | null;
    /**
     * Returns the object describing how the popup menu should be attach to given
     * element or `null`. The object is created and the association is formed
     * when {@link #attach} is invoked.
     * @param element DOM element.
     * @return The object created when {@link attach} is invoked on `element`. Returns `null` if the element does not trigger the menu (i.e. {@link attach} has never been invoked on `element`).
     */
    protected getAttachTarget(element: Element | null): object | null;
    /**
     *
     * @param element Any DOM element.
     * @return Whether clicking on the given element will trigger the menu.
     */
    protected isAttachTarget(element: Element | null): boolean;
    getAttachedElement(): Element | null;
    /**
     * Detaches all listeners
     */
    detachAll(): void;
    /**
     * Detaches a menu from a given element.
     * @param element Element whose click event should trigger the menu.
     */
    detach(element: Element | null): void;
    /**
     * Sets whether the menu should toggle if it is already open.  For context
     * menus this should be false, for toolbar menus it makes more sense to be true.
     * @param toggle The new toggle mode.
     */
    setToggleMode(toggle: boolean): void;
    /**
     * Sets whether the browser context menu will override the menu activation when
     * the shift key is held down.
     */
    setShiftOverride(shiftOverride: boolean): void;
    /**
     * Gets whether the menu is in toggle mode
     * @return toggle.
     */
    getToggleMode(): boolean;
    /**
     * Gets whether the browser context menu will override the menu activation when
     * the shift key is held down.
     */
    getShiftOverride(): boolean;
    /**
     * Show the menu using given positioning object.
     * @param position The positioning instance.
     * @param opt_menuCorner The corner of the menu to be positioned.
     * @param opt_margin A margin specified in pixels.
     * @param opt_anchor The element which acts as visual anchor for this menu.
     */
    showWithPosition(position: AbstractPosition | null, opt_menuCorner?: Corner | null, opt_margin?: Box | null, opt_anchor?: Element | null): void;
    /**
     * Show the menu at a given attached target.
     * @param target Popup target.
     * @param x The client-X associated with the show event.
     * @param y The client-Y associated with the show event.
     */
    protected showMenu(target: object, x: number, y: number): void;
    /**
     * Shows the menu immediately at the given client coordinates.
     * @param x The client-X associated with the show event.
     * @param y The client-Y associated with the show event.
     * @param opt_menuCorner Corner of the menu that should be anchored.
     */
    showAt(x: number, y: number, opt_menuCorner?: Corner | null): void;
    /**
     * Shows the menu immediately attached to the given element
     * @param element The element to show at.
     * @param targetCorner The corner of the target to anchor to.
     * @param opt_menuCorner Corner of the menu that should be anchored.
     */
    showAtElement(element: Element | null, targetCorner: Corner | null, opt_menuCorner?: Corner | null): void;
    /**
     * Hides the menu.
     */
    hide(): void;
    /**
     * Returns whether the menu is currently visible or was visible within about
     * 150 ms ago.  This stops the menu toggling back on if the toggleMode == false.
     * @return Whether the popup is currently visible or was visible within about 150 ms ago.
     */
    isOrWasRecentlyVisible(): boolean;
    /**
     * Used to stop the menu toggling back on if the toggleMode == false.
     * @return Whether the menu was recently hidden.
     */
    protected wasRecentlyHidden(): boolean;
    /**
     * Handles click events that propagate to the document.
     * @param e The browser event.
     */
    protected onDocClick(e: BrowserEvent): void;
    /**
     * Handles the key event target losing focus.
     * @param e The browser event.
     */
    handleBlur(e: BrowserEvent | null): void;
    disposeInternal(): void;
}

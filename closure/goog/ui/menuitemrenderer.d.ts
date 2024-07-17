import { Role } from '../a11y/aria/roles.js';
import * as googDom from '../dom/dom.js';
import { Component } from './component.js';
import { ControlRenderer } from './controlrenderer.js';
import type { Control } from './control.js';
import type { ControlContent } from './controlcontent.js';
/**
 * Default renderer for {@link MenuItem}s.  Each item has the following
 * structure:
 *
 * <div class="goog-menuitem">
 * <div class="goog-menuitem-content">
 * ...(menu item contents)...
 * </div>
 * </div>
 */
export declare class MenuItemRenderer extends ControlRenderer {
    /**
     * Default renderer for {@link MenuItem}s.  Each item has the following
     * structure:
     *
     * <div class="goog-menuitem">
     * <div class="goog-menuitem-content">
     * ...(menu item contents)...
     * </div>
     * </div>
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_menuitemrenderer_MenuItemRenderer;
    /**
     * CSS class name the renderer applies to menu item elements.
     */
    static CSS_CLASS: string;
    getAriaRole(): Role;
    /**
     * Overrides {@link ControlRenderer#createDom} by adding extra markup
     * and stying to the menu item's element if it is selectable or checkable.
     * @param item Menu item to render.
     * @return Root element for the item.
     */
    createDom(item: Control | null): Element;
    getContentElement(element: any): Element;
    /**
     * Overrides {@link ControlRenderer#decorate} by initializing the
     * menu item to checkable based on whether the element to be decorated has
     * extra stying indicating that it should be.
     * @param item Menu item instance to decorate the element.
     * @param element Element to decorate.
     * @return Decorated element.
     */
    decorate(item: Control | null, element: Element | null): Element | null;
    /**
     * Takes a menu item's root element, and sets its content to the given text
     * caption or DOM structure.  Overrides the superclass immplementation by
     * making sure that the checkbox structure (for selectable/checkable menu
     * items) is preserved.
     * @param element The item's root element.
     * @param content Text caption or DOM structure to be set as the item's content.
     */
    setContent(element: Element | null, content: ControlContent | null): void;
    /**
     * Returns true if the element appears to have a proper menu item structure by
     * checking whether its first child has the appropriate structural class name.
     * @param element Element to check.
     * @return Whether the element appears to have a proper menu item DOM.
     */
    protected hasContentStructure(element: Element | null): boolean;
    /**
     * Wraps the given text caption or existing DOM node(s) in a structural element
     * containing the menu item's contents.
     * @param content Menu item contents.
     * @param dom DOM helper for document interaction.
     * @return Menu item content element.
     */
    protected createContent(content: ControlContent | null, dom: googDom.DomHelper | null): Element;
    /**
     * Enables/disables radio button semantics on the menu item.
     * @param item Menu item to update.
     * @param element Menu item element to update (may be null if the item hasn't been rendered yet).
     * @param selectable Whether the item should be selectable.
     */
    setSelectable(item: Control | null, element: Element | null, selectable: boolean): void;
    /**
     * Enables/disables checkbox semantics on the menu item.
     * @param item Menu item to update.
     * @param element Menu item element to update (may be null if the item hasn't been rendered yet).
     * @param checkable Whether the item should be checkable.
     */
    setCheckable(item: Control | null, element: Element | null, checkable: boolean): void;
    /**
     * Determines whether the item contains a checkbox element.
     * @param element Menu item root element.
     * @return Whether the element contains a checkbox element.
     */
    protected hasCheckBoxStructure(element: Element | null): boolean;
    /**
     * Adds or removes extra markup and CSS styling to the menu item to make it
     * selectable or non-selectable, depending on the value of the
     * `selectable` argument.
     * @param item Menu item to update.
     * @param element Menu item element to update.
     * @param enable Whether to add or remove the checkbox structure.
     */
    protected setEnableCheckBoxStructure(item: Control, element: Element, enable: boolean): void;
    /**
     * Takes a single {@link Component.State}, and returns the
     * corresponding CSS class name (null if none).  Overrides the superclass
     * implementation by using 'highlight' as opposed to 'hover' as the CSS
     * class name suffix for the HOVER state, for backwards compatibility.
     * @param state Component state.
     * @return CSS class representing the given state (undefined if none).
     */
    getClassForState(state: Component.State | null): string | undefined;
    /**
     * Takes a single CSS class name which may represent a component state, and
     * returns the corresponding component state (0x00 if none).  Overrides the
     * superclass implementation by treating 'goog-option-selected' as special,
     * for backwards compatibility.
     * @param className CSS class name, possibly representing a component state.
     * @return state Component state corresponding to the given CSS class (0x00 if none).
     */
    getStateFromClass(className: string): Component.State | null;
    getCssClass(): string;
}
export declare namespace MenuItemRenderer {
    /**
     * Constants for referencing composite CSS classes.
     */
    enum CompositeCssClassIndex_ {
        HOVER = 0,
        CHECKBOX = 1,
        CONTENT = 2
    }
}

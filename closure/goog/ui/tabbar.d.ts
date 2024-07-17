import { Component } from './component.js';
import { Container } from './container.js';
import { TabBarRenderer } from './tabbarrenderer.js';
import type { DomHelper } from '../dom/dom.js';
import type { Event } from '../events/event.js';
import type { Control } from './control.js';
/**
 * Tab bar UI component.  A tab bar contains tabs, rendered above, below,
 * before, or after tab contents.  Tabs in tab bars dispatch the following
 * events:
 * <ul>
 * <li>{@link Component.ComponentEventType.ACTION} when activated via the
 * keyboard or the mouse,
 * <li>{@link Component.ComponentEventType.SELECT} when selected, and
 * <li>{@link Component.ComponentEventType.UNSELECT} when deselected.
 * </ul>
 * Clients may listen for all of the above events on the tab bar itself, and
 * refer to the event target to identify the tab that dispatched the event.
 * When an unselected tab is clicked for the first time, it dispatches both a
 * `SELECT` event and an `ACTION` event; subsequent clicks on an
 * already selected tab only result in `ACTION` events.
 */
export declare class TabBar extends Container {
    /**
     * Tab bar UI component.  A tab bar contains tabs, rendered above, below,
     * before, or after tab contents.  Tabs in tab bars dispatch the following
     * events:
     * <ul>
     * <li>{@link Component.ComponentEventType.ACTION} when activated via the
     * keyboard or the mouse,
     * <li>{@link Component.ComponentEventType.SELECT} when selected, and
     * <li>{@link Component.ComponentEventType.UNSELECT} when deselected.
     * </ul>
     * Clients may listen for all of the above events on the tab bar itself, and
     * refer to the event target to identify the tab that dispatched the event.
     * When an unselected tab is clicked for the first time, it dispatches both a
     * `SELECT` event and an `ACTION` event; subsequent clicks on an
     * already selected tab only result in `ACTION` events.
     * @param opt_location Tab bar location; defaults to {@link TabBar.Location.TOP}.
     * @param opt_renderer Renderer used to render or decorate the container; defaults to {@link TabBarRenderer}.
     * @param opt_domHelper DOM helper, used for document interaction.
     */
    constructor(opt_location?: TabBar.Location | null, opt_renderer?: TabBarRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_tabbar_TabBar;
    enterDocument(): void;
    disposeInternal(): void;
    /**
     * Removes the tab from the tab bar.  Overrides the superclass implementation
     * by deselecting the tab being removed.  Since {@link #removeChildAt} uses
     * {@link #removeChild} internally, we only need to override this method.
     * @param tab Tab to remove.
     * @param opt_unrender Whether to call `exitDocument` on the removed tab, and detach its DOM from the document (defaults to false).
     * @return The removed tab, if any.
     */
    removeChild(tab: string | Component | null, opt_unrender?: boolean): Control | null;
    getLocation(): TabBar.Location | null;
    /**
     * Sets the location of the tab bar relative to tab contents.
     * @param location Tab bar location relative to tab contents.
     */
    setLocation(location: TabBar.Location | null): void;
    isAutoSelectTabs(): boolean;
    /**
     * Enables or disables auto-selecting tabs using the keyboard.  If auto-select
     * is enabled, keyboard navigation switches tabs immediately, otherwise it just
     * moves the highlight.
     * @param enable Whether keyboard navigation should change the selected tab, or just move the highlight.
     */
    setAutoSelectTabs(enable: boolean): void;
    /**
     * Highlights the tab at the given index in response to a keyboard event.
     * Overrides the superclass implementation by also selecting the tab if
     * {@link #isAutoSelectTabs} returns true.
     * @param index Index of tab to highlight.
     */
    setHighlightedIndexFromKeyEvent(index: number): void;
    getSelectedTab(): Control | null;
    /**
     * Selects the given tab.
     * @param tab Tab to select (null to select none).
     */
    setSelectedTab(tab: Control | null): void;
    getSelectedTabIndex(): number;
    /**
     * Selects the tab at the given index.
     * @param index Index of the tab to select (-1 to select none).
     */
    setSelectedTabIndex(index: number): void;
    /**
     * If the specified tab is the currently selected tab, deselects it, and
     * selects the closest selectable tab in the tab bar (first looking before,
     * then after the deselected tab).  Does nothing if the argument is not the
     * currently selected tab.  Called internally when a tab is removed, hidden,
     * or disabled, to ensure that another tab is selected instead.
     * @param tab Tab to deselect (if any).
     */
    protected deselectIfSelected(tab: Control | null): void;
    /**
     * Returns true if the tab is selectable, false otherwise.  Only visible and
     * enabled tabs are selectable.
     * @param tab Tab to check.
     * @return Whether the tab is selectable.
     */
    protected isSelectableTab(tab: Control | null): boolean;
    /**
     * Handles `SELECT` events dispatched by tabs as they become selected.
     * @param e Select event to handle.
     */
    protected handleTabSelect(e: Event | null): void;
    /**
     * Handles `UNSELECT` events dispatched by tabs as they become deselected.
     * @param e Unselect event to handle.
     */
    protected handleTabUnselect(e: Event | null): void;
    /**
     * Handles `DISABLE` events displayed by tabs.
     * @param e Disable event to handle.
     */
    protected handleTabDisable(e: Event | null): void;
    /**
     * Handles `HIDE` events displayed by tabs.
     * @param e Hide event to handle.
     */
    protected handleTabHide(e: Event | null): void;
    /**
     * Handles focus events dispatched by the tab bar's key event target.  If no tab
     * is currently highlighted, highlights the selected tab or the first tab if no
     * tab is selected either.
     * @param e Focus event to handle.
     */
    handleFocus(e: Event | null): void;
    /**
     * Returns the {@link Container.Orientation} that is implied by the
     * given {@link TabBar.Location}.
     * @param location Tab bar location.
     * @return Corresponding orientation.
     */
    static getOrientationFromLocation(location: TabBar.Location | null): Container.Orientation | null;
}
export declare namespace TabBar {
    /**
     * Tab bar location relative to tab contents.
     */
    enum Location {
        TOP = "top",
        BOTTOM = "bottom",
        START = "start",
        END = "end"
    }
}

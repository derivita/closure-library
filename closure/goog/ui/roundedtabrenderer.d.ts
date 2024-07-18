import * as googDom from '../dom/dom.js';
import { TabBar } from './tabbar.js';
import { TabRenderer } from './tabrenderer.js';
import type { Control } from './control.js';
import type { ControlContent } from './controlcontent.js';
/**
 * Rounded corner tab renderer for {@link Tab}s.
 */
export declare class RoundedTabRenderer extends TabRenderer {
    /**
     * Rounded corner tab renderer for {@link Tab}s.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_roundedtabrenderer_RoundedTabRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Returns the CSS class name to be applied to the root element of all tabs
     * rendered or decorated using this renderer.
     * @return Renderer-specific CSS class name.
     */
    getCssClass(): string;
    /**
     * Creates the tab's DOM structure, based on the containing tab bar's location
     * relative to tab contents.  For example, the DOM for a tab in a tab bar
     * located above tab contents would look like this:
     *
     * <div class="goog-rounded-tab" title="...">
     * <table class="goog-rounded-tab-table">
     * <tbody>
     * <tr>
     * <td nowrap>
     * <div class="goog-rounded-tab-outer-edge"></div>
     * <div class="goog-rounded-tab-inner-edge"></div>
     * </td>
     * </tr>
     * <tr>
     * <td nowrap>
     * <div class="goog-rounded-tab-caption">Hello, world</div>
     * </td>
     * </tr>
     * </tbody>
     * </table>
     * </div>
     * @param tab Tab to render.
     * @return Root element for the tab.
     */
    createDom(tab: Control | null): Element | null;
    /**
     * Decorates the element with the tab.  Overrides the superclass implementation
     * by wrapping the tab's content in a table that implements rounded corners.
     * @param tab Tab to decorate the element.
     * @param element Element to decorate.
     * @return Decorated element.
     */
    decorate(tab: Control | null, element: Element | null): Element | null;
    /**
     * Creates a table implementing a rounded corner tab.
     * @param dom DOM helper to use for element construction.
     * @param caption Text caption or DOM structure to display as the tab's caption.
     * @param location Tab bar location relative to the tab contents.
     * @return Table implementing a rounded corner tab.
     */
    protected createTab(dom: googDom.DomHelper | null, caption: ControlContent | null, location: TabBar.Location | null): Element;
    /**
     * Creates a table row implementing the tab caption.
     * @param dom DOM helper to use for element construction.
     * @param caption Text caption or DOM structure to display as the tab's caption.
     * @return Tab caption table row.
     */
    protected createCaption(dom: googDom.DomHelper | null, caption: ControlContent | null): Element;
    /**
     * Creates a table row implementing a rounded tab edge.
     * @param dom DOM helper to use for element construction.
     * @param isTopEdge Whether to create a top or bottom edge.
     * @return Rounded tab edge table row.
     */
    protected createEdge(dom: googDom.DomHelper | null, isTopEdge: boolean): Element;
    getContentElement(element: any): Element;
}

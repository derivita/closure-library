import { ContainerRenderer } from './containerrenderer.js';
import type { Control } from './control.js';
import type { Menu } from './menu.js';
/**
 * Default renderer for {@link Menu}s, based on {@link
 * ContainerRenderer}.
 */
export declare class MenuRenderer extends ContainerRenderer {
    /**
     * Default renderer for {@link Menu}s, based on {@link
     * ContainerRenderer}.
     * @param opt_ariaRole Optional ARIA role used for the element.
     */
    constructor(opt_ariaRole?: string);
    private noStructuralTyping_closure_goog_ui_menurenderer_MenuRenderer;
    /**
     * Default CSS class to be applied to the root element of toolbars rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Returns whether the element is a UL or acceptable to our superclass.
     * @param element Element to decorate.
     * @return Whether the renderer can decorate the element.
     */
    canDecorate(element: Element | null): boolean;
    /**
     * Inspects the element, and creates an instance of {@link Control} or
     * an appropriate subclass best suited to decorate it.  Overrides the superclass
     * implementation by recognizing HR elements as separators.
     * @param element Element to decorate.
     * @return A new control suitable to decorate the element (null if none).
     */
    getDecoratorForChild(element: Element | null): Control | null;
    /**
     * Returns whether the given element is contained in the menu's DOM.
     * @param menu The menu to test.
     * @param element The element to test.
     * @return Whether the given element is contained in the menu.
     */
    containsElement(menu: Menu | null, element: Element | null): boolean;
    /**
     * Returns the CSS class to be applied to the root element of containers
     * rendered using this renderer.
     * @return Renderer-specific CSS class.
     */
    getCssClass(): string;
    initializeDom(container: any): void;
}

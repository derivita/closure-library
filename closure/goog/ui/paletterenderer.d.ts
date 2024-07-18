import * as googDom from '../dom/dom.js';
import { ControlRenderer } from './controlrenderer.js';
import type { Size } from '../math/size.js';
import type { Control } from './control.js';
import type { ControlContent } from './controlcontent.js';
import type { Palette } from './palette.js';
/**
 * Default renderer for {@link Palette}s.  Renders the palette as an
 * HTML table wrapped in a DIV, with one palette item per cell:
 *
 * <div class="goog-palette">
 * <table class="goog-palette-table">
 * <tbody class="goog-palette-body">
 * <tr class="goog-palette-row">
 * <td class="goog-palette-cell">...Item 0...</td>
 * <td class="goog-palette-cell">...Item 1...</td>
 * ...
 * </tr>
 * <tr class="goog-palette-row">
 * ...
 * </tr>
 * </tbody>
 * </table>
 * </div>
 */
export declare class PaletteRenderer extends ControlRenderer {
    /**
     * Default renderer for {@link Palette}s.  Renders the palette as an
     * HTML table wrapped in a DIV, with one palette item per cell:
     *
     * <div class="goog-palette">
     * <table class="goog-palette-table">
     * <tbody class="goog-palette-body">
     * <tr class="goog-palette-row">
     * <td class="goog-palette-cell">...Item 0...</td>
     * <td class="goog-palette-cell">...Item 1...</td>
     * ...
     * </tr>
     * <tr class="goog-palette-row">
     * ...
     * </tr>
     * </tbody>
     * </table>
     * </div>
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_paletterenderer_PaletteRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Data attribute to store grid width from palette control.
     */
    static GRID_WIDTH_ATTRIBUTE: string;
    /**
     * Returns the palette items arranged in a table wrapped in a DIV, with the
     * renderer's own CSS class and additional state-specific classes applied to
     * it.
     * @param palette Palette to render.
     * @return Root element for the palette.
     */
    createDom(palette: Control | null): Element;
    /**
     * Returns the given items in a table with `size.width` columns and
     * `size.height` rows.  If the table is too big, empty cells will be
     * created as needed.  If the table is too small, the items that don't fit
     * will not be rendered.
     * @param items Palette items.
     * @param size Palette size (columns x rows); both dimensions must be specified as numbers.
     * @param dom DOM helper for document interaction.
     * @return Palette table element.
     */
    createGrid(items: (Node | null)[] | null, size: Size | null, dom: googDom.DomHelper | null): Element;
    /**
     * Returns a table element (or equivalent) that wraps the given rows.
     * @param rows Array of row elements.
     * @param dom DOM helper for document interaction.
     * @return Palette table element.
     */
    createTable(rows: (Element | null)[] | null, dom: googDom.DomHelper | null): Element;
    /**
     * Returns a table row element (or equivalent) that wraps the given cells.
     * @param cells Array of cell elements.
     * @param dom DOM helper for document interaction.
     * @return Row element.
     */
    createRow(cells: (Element | null)[] | null, dom: googDom.DomHelper | null): Element;
    /**
     * Returns a table cell element (or equivalent) that wraps the given palette
     * item (which must be a DOM node).
     * @param node Palette item.
     * @param dom DOM helper for document interaction.
     * @return Cell element.
     */
    createCell(node: Node | string | null, dom: googDom.DomHelper | null): Element;
    /**
     * Overrides {@link ControlRenderer#canDecorate} to always return false.
     * @param element Ignored.
     * @return False, since palettes don't support the decorate flow (for now).
     */
    canDecorate(element: Element | null): boolean;
    /**
     * Overrides {@link ControlRenderer#decorate} to be a no-op, since
     * palettes don't support the decorate flow (for now).
     * @param palette Ignored.
     * @param element Ignored.
     * @return Always null.
     */
    decorate(palette: Control | null, element: Element | null): null;
    /**
     * Overrides {@link ControlRenderer#setContent} for palettes.  Locates
     * the HTML table representing the palette grid, and replaces the contents of
     * each cell with a new element from the array of nodes passed as the second
     * argument.  If the new content has too many items the table will have more
     * rows added to fit, if there are less items than the table has cells, then the
     * left over cells will be empty.
     * @param element Root element of the palette control.
     * @param content Array of items to replace existing palette items.
     */
    setContent(element: Element | null, content: ControlContent | null): void;
    /**
     * Returns the item corresponding to the given node, or null if the node is
     * neither a palette cell nor part of a palette item.
     * @param palette Palette in which to look for the item.
     * @param node Node to look for.
     * @return The corresponding palette item (null if not found).
     */
    getContainingItem(palette: Palette | null, node: Node | null): Node | null;
    /**
     * Updates the highlight styling of the palette cell containing the given node
     * based on the value of the Boolean argument.
     * @param palette Palette containing the item.
     * @param node Item whose cell is to be highlighted or un-highlighted.
     * @param highlight If true, the cell is highlighted; otherwise it is un-highlighted.
     */
    highlightCell(palette: Palette | null, node: Node | null, highlight: boolean): void;
    /**
     *
     * @param node Item whose cell is to be returned.
     * @return The grid cell for the palette item.
     */
    getCellForItem(node: Node | null): Element | null;
    /**
     * Updates the selection styling of the palette cell containing the given node
     * based on the value of the Boolean argument.
     * @param palette Palette containing the item.
     * @param node Item whose cell is to be selected or deselected.
     * @param select If true, the cell is selected; otherwise it is deselected.
     */
    selectCell(palette: Palette | null, node: Node | null, select: boolean): void;
    /**
     * Returns the CSS class to be applied to the root element of components
     * rendered using this renderer.
     * @return Renderer-specific CSS class.
     */
    getCssClass(): string;
}

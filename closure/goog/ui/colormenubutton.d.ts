import { Menu } from './menu.js';
import { MenuButton } from './menubutton.js';
import type { DomHelper } from '../dom/dom.js';
import type { Event } from '../events/event.js';
import type { Control } from './control.js';
import type { ControlContent } from './controlcontent.js';
import type { MenuButtonRenderer } from './menubuttonrenderer.js';
/**
 * A color menu button control.  Extends {@link MenuButton} by adding
 * an API for getting and setting the currently selected color from a menu of
 * color palettes.
 */
export declare class ColorMenuButton extends MenuButton {
    /**
     * A color menu button control.  Extends {@link MenuButton} by adding
     * an API for getting and setting the currently selected color from a menu of
     * color palettes.
     * @param content Text caption or existing DOM structure to display as the button's caption.
     * @param opt_menu Menu to render under the button when clicked; should contain at least one {@link ColorPalette} if present.
     * @param opt_renderer Button renderer; defaults to {@link ColorMenuButtonRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(content: ControlContent | null, opt_menu?: Menu | null, opt_renderer?: MenuButtonRenderer | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_colormenubutton_ColorMenuButton;
    /**
     * Default color palettes.
     */
    static PALETTES: object;
    /**
     * Value for the "no color" menu item object in the color menu (if present).
     * The {@link ColorMenuButton#handleMenuAction} method interprets
     * ACTION events dispatched by an item with this value as meaning "clear the
     * selected color."
     */
    static NO_COLOR: string;
    /**
     * Factory method that creates and returns a new {@link Menu} instance
     * containing default color palettes.
     * @param opt_extraItems Optional extra menu items to add before the color palettes.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     * @return Color menu.
     */
    static newColorMenu(opt_extraItems?: (Control | null)[] | null, opt_domHelper?: DomHelper | null): Menu;
    /**
     * Returns the currently selected color (null if none).
     * @return The selected color.
     */
    getSelectedColor(): string;
    /**
     * Sets the selected color, or clears the selected color if the argument is
     * null or not any of the available color choices.
     * @param color New color.
     */
    setSelectedColor(color: string | null): void;
    /**
     * Sets the value associated with the color menu button.  Overrides
     * {@link goog.ui.Button#setValue} by interpreting the value as a color
     * spec string.
     * @param value New button value; should be a color spec string.
     */
    setValue(value: any): void;
    /**
     * Handles {@link Component.ComponentEventType.ACTION} events dispatched by
     * the menu item clicked by the user.  Updates the button, calls the superclass
     * implementation to hide the menu, stops the propagation of the event, and
     * dispatches an ACTION event on behalf of the button itself.  Overrides
     * {@link MenuButton#handleMenuAction}.
     * @param e Action event to handle.
     */
    handleMenuAction(e: Event | null): void;
    /**
     * Opens or closes the menu.  Overrides {@link MenuButton#setOpen} by
     * generating a default color menu on the fly if needed.
     * @param open Whether to open or close the menu.
     * @param opt_e Mousedown event that caused the menu to be opened.
     */
    setOpen(open: boolean, opt_e?: Event | null): void;
}

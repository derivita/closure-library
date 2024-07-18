import { HsvPalette } from './hsvpalette.js';
import type { DomHelper } from '../dom/dom.js';
/**
 * Creates an HSVA palette. Allows a user to select the hue, saturation,
 * value/brightness and alpha/opacity.
 */
export declare class HsvaPalette extends HsvPalette {
    /**
     * Creates an HSVA palette. Allows a user to select the hue, saturation,
     * value/brightness and alpha/opacity.
     * @param opt_domHelper Optional DOM helper.
     * @param opt_color Optional initial color, without alpha (default is red).
     * @param opt_alpha Optional initial alpha (default is 1).
     * @param opt_class Optional base for creating classnames (default is 'goog-hsva-palette').
     */
    constructor(opt_domHelper?: DomHelper | null, opt_color?: string, opt_alpha?: number, opt_class?: string);
    private noStructuralTyping_closure_goog_ui_hsvapalette_HsvaPalette;
    className: any;
    getAlpha(): number;
    /**
     * Sets which color is selected and update the UI. The passed color should be
     * in #rrggbb format. The alpha value will be set to 1.
     * @param alpha The selected alpha value, in [0, 1].
     */
    setAlpha(alpha: number): void;
    /**
     * Sets which color is selected and update the UI. The passed color should be
     * in #rrggbb format. The alpha value will be set to 1.
     * @param color The selected color.
     */
    setColor(color: string): void;
    /**
     * Gets the color that is currently selected in this color picker, in #rrggbbaa
     * format.
     * @return The string of the selected color with alpha.
     */
    getColorRgbaHex(): string;
    /**
     * Sets which color is selected and update the UI. The passed color should be
     * in #rrggbbaa format. The alpha value will be set to 1.
     * @param color The selected color with alpha.
     */
    setColorRgbaHex(color: string): void;
    createDom(): void;
    disposeInternal(): void;
    updateUi(): void;
    updateInput(): void;
    handleMouseDown(e: any): void;
    handleInput(e: any): void;
}

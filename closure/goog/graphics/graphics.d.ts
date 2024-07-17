import * as dom from '../dom/dom.js';
import type { AbstractGraphics } from './abstractgraphics.js';
/**
 * Returns an instance of AbstractGraphics that knows how to draw
 * for the current platform (A factory for the proper Graphics implementation)
 * @param width The width in pixels.  Strings expressing percentages of parent with (e.g. '80%') are also accepted.
 * @param height The height in pixels.  Strings expressing percentages of parent with (e.g. '80%') are also accepted.
 * @param opt_coordWidth The optional coordinate width - if omitted or null, defaults to same as width.
 * @param opt_coordHeight The optional coordinate height - if omitted or null, defaults to same as height.
 * @param opt_domHelper The DOM helper object for the document we want to render in.
 * @return The created instance.
 */
export declare function createGraphics(width: string | number, height: string | number, opt_coordWidth?: number | null, opt_coordHeight?: number | null, opt_domHelper?: dom.DomHelper | null): AbstractGraphics;
/**
 * Returns an instance of AbstractGraphics that knows how to draw
 * for the current platform (A factory for the proper Graphics implementation)
 * @param width The width in pixels.  Strings expressing percentages of parent with (e.g. '80%') are also accepted.
 * @param height The height in pixels.   Strings expressing percentages of parent with (e.g. '80%') are also accepted.
 * @param opt_coordWidth The optional coordinate width, defaults to same as width.
 * @param opt_coordHeight The optional coordinate height, defaults to same as height.
 * @param opt_domHelper The DOM helper object for the document we want to render in.
 * @return The created instance.
 */
export declare function createSimpleGraphics(width: string | number, height: string | number, opt_coordWidth?: number | null, opt_coordHeight?: number | null, opt_domHelper?: dom.DomHelper | null): AbstractGraphics;
/**
 * Static function to check if the current browser has Graphics support.
 * @return True if the current browser has Graphics support.
 */
export declare function isBrowserSupported(): boolean;

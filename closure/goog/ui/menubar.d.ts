import { Container } from './container.js';
import type { DomHelper } from '../dom/dom.js';
import type { ContainerRenderer } from './containerrenderer.js';
/**
 * The menuBar factory creates a new menu bar.
 * @param opt_renderer Renderer used to render or decorate the menu bar; defaults to {@link MenuBarRenderer}.
 * @param opt_domHelper DOM helper, used for document interaction.
 * @return The created menu bar.
 */
export declare function create(opt_renderer?: ContainerRenderer | null, opt_domHelper?: DomHelper | null): Container;

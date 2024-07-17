import type { InjectedDataSupplier } from './injecteddatasupplier.js';
import type { SafeHtml } from '../html/safehtml.js';
import type { SafeStyleSheet } from '../html/safestylesheet.js';
import { SanitizedContentKind } from './data.js';
import * as dom from '../dom/dom.js';
import type { SanitizedCss } from './data.js';
import type { SanitizedHtml } from './data.js';
import type { SanitizedUri } from './data.js';
/**
 * Creates a new soy renderer. Note that the renderer will only be
 * guaranteed to work correctly within the document scope provided in
 * the DOM helper.
 */
declare class Renderer {
    constructor(injectedDataSupplier?: InjectedDataSupplier | null, domHelper?: dom.DomHelper | null);
    /**
     * Renders a Soy template into a single node or a document fragment.
     * Delegates to `soy.renderAsFragment`.
     */
    renderAsFragment<ARG_TYPES = any>(template: () => any, templateData?: ARG_TYPES | null): Node;
    /**
     * Renders a Soy template into a single node. If the rendered HTML
     * string represents a single node, then that node is returned.
     * Otherwise, a DIV element is returned containing the rendered nodes.
     * Delegates to `soy.renderAsElement`.
     */
    renderAsElement<ARG_TYPES = any>(template: () => any, templateData?: ARG_TYPES | null): Element;
    /**
     * Renders a Soy template and then set the output string as the
     * innerHTML of the given element. Delegates to `soy.renderElement`.
     */
    renderElement<ARG_TYPES = any>(element: Element | null, template: () => any, templateData?: ARG_TYPES | null): void;
    /**
     * Renders a Soy template and returns the output string.
     * If the template is strict, it must be of kind HTML. To render strict
     * templates of other kinds, use `renderText` (for `kind="text"`) or
     * `renderStrictOfKind`.
     */
    render<ARG_TYPES = any>(template: () => any, templateData?: ARG_TYPES | null): string;
    /**
     * Renders a strict Soy template of kind="text" and returns the output string.
     * It is an error to use renderText on templates of kinds other than "text".
     */
    renderText<ARG_TYPES = any>(template: () => string, templateData?: ARG_TYPES | null): string;
    /**
     * Renders a strict Soy HTML template and returns the output SanitizedHtml
     * object.
     */
    renderStrict<ARG_TYPES = any>(template: () => SanitizedHtml, templateData?: ARG_TYPES | null): SanitizedHtml;
    /**
     * Renders a strict Soy template and returns the output SanitizedUri object.
     */
    renderStrictUri<ARG_TYPES = any>(template: () => SanitizedUri, templateData?: ARG_TYPES | null): SanitizedUri;
    /**
     * Renders a strict Soy template and returns the output SanitizedContent
     * object.
     */
    renderStrictOfKind<ARG_TYPES = any, RETURN_TYPE = any>(template: () => (RETURN_TYPE | null), templateData?: ARG_TYPES | null, kind?: SanitizedContentKind | null): RETURN_TYPE | null;
    /**
     * Renders a strict Soy template of kind="html" and returns the result as
     * a SafeHtml object.
     * Rendering a template that is not a strict template of kind="html" results
     * in a runtime error.
     */
    renderSafeHtml<ARG_TYPES = any>(template: () => SanitizedHtml, templateData?: ARG_TYPES | null): SafeHtml;
    /**
     * Renders a strict Soy template of kind="css" and returns the result as
     * a SafeStyleSheet object.
     * Rendering a template that is not a strict template of kind="css" results in
     * a runtime and compile-time error.
     */
    renderSafeStyleSheet<ARG_TYPES = any>(template: () => SanitizedCss, templateData?: ARG_TYPES | null): SafeStyleSheet;
    getDom(): dom.DomHelper;
    /**
     * Observes rendering of non-text templates by this renderer.
     */
    handleRender(node: Node | null, kind: SanitizedContentKind | null): void;
}
export { Renderer };

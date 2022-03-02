//!! generated by clutz.
// Generated from soy/renderer.js
declare namespace ಠ_ಠ.clutz.goog.soy {
  export import Renderer = ಠ_ಠ.clutz.module$contents$goog$soy$Renderer_Renderer ;
}
declare module 'goog:goog.soy.Renderer' {
  import Renderer = ಠ_ಠ.clutz.goog.soy.Renderer;
  export default Renderer;
}
// Generated from soy/renderer.js
declare namespace ಠ_ಠ.clutz {
  /**
   * Creates a new soy renderer. Note that the renderer will only be
   * guaranteed to work correctly within the document scope provided in
   * the DOM helper.
   */
  class module$contents$goog$soy$Renderer_Renderer {
    private noStructuralTyping_module$contents$goog$soy$Renderer_Renderer : any;
    /**
     * Creates a new soy renderer. Note that the renderer will only be
     * guaranteed to work correctly within the document scope provided in
     * the DOM helper.
     */
    constructor (injectedDataSupplier ? : ಠ_ಠ.clutz.module$exports$goog$soy$InjectedDataSupplier | null , domHelper ? : ಠ_ಠ.clutz.module$exports$goog$dom.DomHelper | null ) ;
    protected getDom ( ) : ಠ_ಠ.clutz.module$exports$goog$dom.DomHelper ;
    /**
     * Observes rendering of non-text templates by this renderer.
     * @param node Relevant node, if available. The node may or may not be in the document, depending on whether Soy is creating an element or writing into an existing one.
     * @param kind of the template, or null if it was not strict.
     */
    protected handleRender (node : Node | null , kind : ಠ_ಠ.clutz.module$exports$goog$soy$data$SanitizedContentKind | null ) : void ;
    /**
     * Renders a Soy template and returns the output string.
     * If the template is strict, it must be of kind HTML. To render strict
     * templates of other kinds, use `renderText` (for `kind="text"`) or
     * `renderStrictOfKind`.
     * @param template The Soy template to render.
     * @param templateData The data for the template.
     */
    render < ARG_TYPES = any > (template : (a : ARG_TYPES , b ? : { [ key: string ]: any } | null ) => any , templateData ? : ARG_TYPES ) : string ;
    /**
     * Renders a Soy template into a single node. If the rendered HTML
     * string represents a single node, then that node is returned.
     * Otherwise, a DIV element is returned containing the rendered nodes.
     * Delegates to `soy.renderAsElement`.
     * @param template The Soy template defining the element's content.
     * @param templateData The data for the template.
     */
    renderAsElement < ARG_TYPES = any > (template : (a : ARG_TYPES , b ? : ಠ_ಠ.clutz.module$exports$goog$soy.CompatibleIj | null ) => any , templateData ? : ARG_TYPES ) : GlobalElement ;
    /**
     * Renders a Soy template into a single node or a document fragment.
     * Delegates to `soy.renderAsFragment`.
     * @param template The Soy template defining the element's content.
     * @param templateData The data for the template.
     */
    renderAsFragment < ARG_TYPES = any > (template : (a : ARG_TYPES , b ? : ಠ_ಠ.clutz.module$exports$goog$soy.CompatibleIj | null ) => any , templateData ? : ARG_TYPES ) : Node ;
    /**
     * Renders a Soy template and then set the output string as the
     * innerHTML of the given element. Delegates to `soy.renderElement`.
     * @param element The element whose content we are rendering.
     * @param template The Soy template defining the element's content.
     * @param templateData The data for the template.
     */
    renderElement < ARG_TYPES = any > (element : GlobalElement | null , template : (a : ARG_TYPES , b ? : ಠ_ಠ.clutz.module$exports$goog$soy.CompatibleIj | null ) => any , templateData ? : ARG_TYPES ) : void ;
    /**
     * Renders a strict Soy template of kind="html" and returns the result as
     * a SafeHtml object.
     * Rendering a template that is not a strict template of kind="html" results
     * in a runtime error.
     * @param template The Soy template to render.
     * @param templateData The data for the template.
     */
    renderSafeHtml < ARG_TYPES = any > (template : (a : ARG_TYPES , b ? : { [ key: string ]: any } | null ) => ಠ_ಠ.clutz.module$exports$goog$soy$data$SanitizedHtml , templateData ? : ARG_TYPES ) : ಠ_ಠ.clutz.module$exports$goog$html$SafeHtml ;
    /**
     * Renders a strict Soy template of kind="css" and returns the result as
     * a SafeStyleSheet object.
     * Rendering a template that is not a strict template of kind="css" results in
     * a runtime and compile-time error.
     * @param template The Soy template to render.
     * @param templateData The data for the template.
     */
    renderSafeStyleSheet < ARG_TYPES = any > (template : (a : ARG_TYPES , b ? : { [ key: string ]: any } | null ) => ಠ_ಠ.clutz.module$exports$goog$soy$data$SanitizedCss , templateData ? : ARG_TYPES ) : ಠ_ಠ.clutz.module$exports$goog$html$SafeStyleSheet ;
    /**
     * Renders a strict Soy HTML template and returns the output SanitizedHtml
     * object.
     * @param template The Soy template to render.
     * @param templateData The data for the template.
     */
    renderStrict < ARG_TYPES = any > (template : (a : ARG_TYPES , b ? : { [ key: string ]: any } | null ) => ಠ_ಠ.clutz.module$exports$goog$soy$data$SanitizedHtml , templateData ? : ARG_TYPES ) : ಠ_ಠ.clutz.module$exports$goog$soy$data$SanitizedHtml ;
    /**
     * Renders a strict Soy template and returns the output SanitizedContent
     * object.
     * @param template The Soy template to render.
     * @param templateData The data for the template.
     * @param kind The output kind to assert. If null, the template must be of kind="html" (i.e., kind defaults to SanitizedContentKind.HTML).
     */
    renderStrictOfKind < ARG_TYPES = any , RETURN_TYPE = any > (template : (a : ARG_TYPES , b ? : { [ key: string ]: any } | null ) => RETURN_TYPE , templateData ? : ARG_TYPES , kind ? : ಠ_ಠ.clutz.module$exports$goog$soy$data$SanitizedContentKind | null ) : RETURN_TYPE ;
    /**
     * Renders a strict Soy template and returns the output SanitizedUri object.
     * @param template The Soy template to render.
     * @param templateData The data for the template.
     */
    renderStrictUri < ARG_TYPES = any > (template : (a : ARG_TYPES , b ? : { [ key: string ]: any } | null ) => ಠ_ಠ.clutz.module$exports$goog$soy$data$SanitizedUri , templateData ? : ARG_TYPES ) : ಠ_ಠ.clutz.module$exports$goog$soy$data$SanitizedUri ;
    /**
     * Renders a strict Soy template of kind="text" and returns the output string.
     * It is an error to use renderText on templates of kinds other than "text".
     * @param template The Soy template to render.
     * @param templateData The data for the template.
     */
    renderText < ARG_TYPES = any > (template : (a : ARG_TYPES , b ? : { [ key: string ]: any } | null ) => string , templateData ? : ARG_TYPES ) : string ;
  }
}
declare namespace ಠ_ಠ.clutz {
  export import module$exports$goog$soy$Renderer = ಠ_ಠ.clutz.module$contents$goog$soy$Renderer_Renderer ;
}

/**
 * A data structure for storing simple rendering info about a field.
 */
export declare class FieldFormatInfo {
    /**
     * A data structure for storing simple rendering info about a field.
     * @param fieldId The id of the field.
     * @param standards Whether the field should be rendered in standards mode.
     * @param blended Whether the field is in blended mode.
     * @param fixedHeight Whether the field is in fixedHeight mode.
     * @param opt_extraStyles Other style attributes for the field, represented as a map of strings.
     */
    constructor(fieldId: string, standards: boolean, blended: boolean, fixedHeight: boolean, opt_extraStyles?: object | null);
    private noStructuralTyping_closure_goog_editor_icontent_FieldFormatInfo;
}
/**
 * A data structure for storing simple info about the styles of a field.
 * Only needed in Firefox/Blended mode.
 */
export declare class FieldStyleInfo {
    /**
     * A data structure for storing simple info about the styles of a field.
     * Only needed in Firefox/Blended mode.
     * @param wrapper The wrapper div around a field.
     * @param css The css for a field.
     */
    constructor(wrapper: Element | null, css: string);
    private noStructuralTyping_closure_goog_editor_icontent_FieldStyleInfo;
}
/**
 * Sets up goog.editor.icontent to always use standards-mode iframes.
 */
export declare function forceStandardsModeIframes(): void;
/**
 * Generate the initial iframe content.
 * @param info Formatting info about the field.
 * @param bodyHtml The HTML to insert as the iframe body.
 * @param style Style info about the field, if needed.
 * @return The initial IFRAME content HTML.
 */
export declare function getInitialIframeContent_(info: FieldFormatInfo | null, bodyHtml: string, style: FieldStyleInfo | null): string;
/**
 * Write the initial iframe content in normal mode.
 * @param info Formatting info about the field.
 * @param bodyHtml The HTML to insert as the iframe body.
 * @param style Style info about the field, if needed.
 * @param iframe The iframe.
 */
export declare function writeNormalInitialBlendedIframe(info: FieldFormatInfo | null, bodyHtml: string, style: FieldStyleInfo | null, iframe: HTMLIFrameElement | null): void;
/**
 * Write the initial iframe content in normal mode.
 * @param info Formatting info about the field.
 * @param bodyHtml The HTML to insert as the iframe body.
 * @param style Style info about the field, if needed.
 * @param iframe The iframe.
 */
export declare function writeNormalInitialIframe(info: FieldFormatInfo | null, bodyHtml: string, style: FieldStyleInfo | null, iframe: HTMLIFrameElement | null): void;
/**
 * Write the initial iframe content in IE/HTTPS mode.
 * @param info Formatting info about the field.
 * @param doc The iframe document.
 * @param bodyHtml The HTML to insert as the iframe body.
 */
export declare function writeHttpsInitialIframe(info: FieldFormatInfo | null, doc: Document | null, bodyHtml: string): void;

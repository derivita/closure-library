import { Field } from './field.js';
import * as icontent from './icontent.js';
/**
 * This class encapsulates an editable field that blends in with the
 * surrounding page.
 * To see events fired by this object, please see the base class.
 */
export declare class SeamlessField extends Field {
    /**
     * This class encapsulates an editable field that blends in with the
     * surrounding page.
     * To see events fired by this object, please see the base class.
     * @param id An identifer for the field. This is used to find the field and the element associated with this field.
     * @param opt_doc The document that the element with the given id can be found it.
     */
    constructor(id: string, opt_doc?: Document | null);
    private noStructuralTyping_closure_goog_editor_seamlessfield_SeamlessField;
    /**
     * Sets the min height of this editable field's iframe. Only used in growing
     * mode when an iframe is used. This will cause an immediate field sizing to
     * update the field if necessary based on the new min height.
     * @param height The min height specified as a number of pixels, e.g., 75.
     */
    setMinHeight(height: number): void;
    isFixedHeight(): boolean;
    /**
     *
     * @param newVal Explicitly set whether the field should be of a fixed-height. This overrides auto-detection.
     */
    overrideFixedHeight(newVal: boolean): void;
    /**
     * Perform all the sizing immediately.
     */
    doFieldSizingGecko(): void;
    /**
     * Gets the css rules that should be used to style an iframe's body as if it
     * were the original element that we made editable.
     * @param opt_forceRegeneration Set to true to not read the cached copy and instead completely regenerate the css rules.
     * @return The string containing the css rules to use.
     */
    getIframeableCss(opt_forceRegeneration?: boolean): string;
    /**
     * Sets the css rules that should be used inside the editable iframe.
     * Note: to clear the css cache between makeNotEditable/makeEditable,
     * call this with "" as iframeableCss.
     * TODO(user): Unify all these css setting methods + Nick's open
     * CL.  This is getting ridiculous.
     * @param iframeableCss String containing the css rules to use.
     */
    setIframeableCss(iframeableCss: string): void;
    usesIframe(): boolean;
    handleChange(): void;
    dispatchBlur(): void;
    installStyles(): void;
    makeEditableInternal(opt_iframeSrc: any): void;
    handleFieldLoad(): void;
    getIframeAttributes(): object;
    attachIframe(iframe: any): void;
    getFieldFormatInfo(extraStyles: any): icontent.FieldFormatInfo;
    writeIframeContent(iframe: any, innerHtml: any, extraStyles: any): void;
    restoreDom(): void;
    clearListeners(): void;
}

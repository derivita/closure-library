import { Field } from './field.js';
/**
 * This class encapsulates an editable field that is just a contentEditable
 * div.
 *
 * To see events fired by this object, please see the base class.
 */
export declare class ContentEditableField extends Field {
    /**
     * This class encapsulates an editable field that is just a contentEditable
     * div.
     *
     * To see events fired by this object, please see the base class.
     * @param id An identifer for the field. This is used to find the field and the element associated with this field.
     * @param opt_doc The document that the element with the given id can be found in.
     */
    constructor(id: string, opt_doc?: Document | null);
    private noStructuralTyping_closure_goog_editor_contenteditablefield_ContentEditableField;
    usesIframe(): boolean;
    turnOnDesignModeGecko(): void;
    installStyles(): void;
    makeEditableInternal(opt_iframeSrc: any): void;
    restoreDom(): void;
}

import { Disposable } from '../disposable/disposable.js';
import * as dom from '../dom/dom.js';
import { Field } from './field.js';
/**
 * Initialize the wrapper, and begin listening to mouse events immediately.
 */
export declare class ClickToEditWrapper extends Disposable {
    /**
     * Initialize the wrapper, and begin listening to mouse events immediately.
     * @param fieldObj The editable field being wrapped.
     */
    constructor(fieldObj: Field | null);
    private noStructuralTyping_closure_goog_editor_clicktoeditwrapper_ClickToEditWrapper;
    getFieldObject(): Field | null;
    getOriginalDomHelper(): dom.DomHelper | null;
    disposeInternal(): void;
    /**
     * Initialize listeners when the uneditable field is added to the document.
     * Also sets up lorem ipsum text.
     */
    enterDocument(): void;
    /**
     * Destroy listeners when the field is removed from the document.
     */
    exitDocument(): void;
    /**
     * Returns the uneditable field element if the field is not yet editable
     * (equivalent to EditableField.getOriginalElement()), and the editable DOM
     * element if the field is currently editable (equivalent to
     * EditableField.getElement()).
     * @return The element containing the editable field contents.
     */
    getElement(): Element | null;
    /**
     * Focus on the field object.
     * @param field The field to focus.
     */
    protected focusOnFieldObj(field: Field | null): void;
    /**
     * Make the field object editable.
     * @param field The field to make editable.
     */
    protected makeFieldEditable(field: Field | null): void;
}

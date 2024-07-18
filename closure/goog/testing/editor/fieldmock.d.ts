import { LooseMock } from '../loosemock.js';
import type { AbstractRange } from '../../dom/abstractrange.js';
/**
 * Mock of Field.
 */
export declare class FieldMock extends LooseMock {
    /**
     * Mock of Field.
     * @param opt_window Window the field would edit.  Defaults to `window`.
     * @param opt_appWindow "AppWindow" of the field, which can be different from `opt_window` when mocking a field that uses an iframe. Defaults to `opt_window`.
     * @param opt_range An object (mock or real) to be returned by getRange(). If omitted, a new Range is created from the window every time getRange() is called.
     */
    constructor(opt_window?: Window | null, opt_appWindow?: Window | null, opt_range?: AbstractRange | null);
    private noStructuralTyping_closure_goog_testing_editor_fieldmock_FieldMock;
    inModalMode: boolean;
    setModalMode: any;
    isUneditable: boolean;
    setUneditable: any;
}

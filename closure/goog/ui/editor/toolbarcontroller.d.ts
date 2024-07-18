import { Field } from '../../editor/field.js';
import { EventHandler } from '../../events/eventhandler.js';
import { EventTarget } from '../../events/eventtarget.js';
import type { Event } from '../../events/event.js';
import type { Toolbar } from '../toolbar.js';
/**
 * A class for managing the editor toolbar.  Acts as a bridge between
 * a {@link Field} and a {@link Toolbar}.
 *
 * The `toolbar` argument must be an instance of {@link Toolbar}
 * or a subclass.  This class doesn't care how the toolbar was created.  As
 * long as one or more controls hosted  in the toolbar have IDs that match
 * built-in {@link goog.editor.Command}s, they will function as expected.  It is
 * the caller's responsibility to ensure that the toolbar is already rendered
 * or that it decorates an existing element.
 */
export declare class ToolbarController extends EventTarget {
    /**
     * A class for managing the editor toolbar.  Acts as a bridge between
     * a {@link Field} and a {@link Toolbar}.
     *
     * The `toolbar` argument must be an instance of {@link Toolbar}
     * or a subclass.  This class doesn't care how the toolbar was created.  As
     * long as one or more controls hosted  in the toolbar have IDs that match
     * built-in {@link goog.editor.Command}s, they will function as expected.  It is
     * the caller's responsibility to ensure that the toolbar is already rendered
     * or that it decorates an existing element.
     * @param field Editable field to be controlled by the toolbar.
     * @param toolbar Toolbar to control the editable field.
     */
    constructor(field: Field, toolbar: Toolbar);
    private noStructuralTyping_closure_goog_ui_editor_toolbarcontroller_ToolbarController;
    /**
     * Returns the Closure component ID of the control that corresponds to the
     * given {@link goog.editor.Command} constant.
     * Subclasses may override this method if they want to use a custom mapping
     * scheme from commands to controls.
     * @param command Editor command.
     * @return Closure component ID of the corresponding toolbar control, if any.
     */
    protected getComponentId(command: string): string;
    /**
     * Returns the {@link goog.editor.Command} constant
     * that corresponds to the given Closure component ID.  Subclasses may override
     * this method if they want to use a custom mapping scheme from controls to
     * commands.
     * @param id Closure component ID of a toolbar control.
     * @return Editor command or dialog constant corresponding to the toolbar control, if any.
     */
    protected getCommand(id: string): string;
    /**
     * Returns the event handler object for the editor toolbar.  Useful for classes
     * that extend `ToolbarController`.
     * @return The event handler object.
     */
    protected getHandler<T = any>(this: T): EventHandler<T | null>;
    /**
     * Returns the field instance managed by the toolbar.  Useful for
     * classes that extend `ToolbarController`.
     * @return The field managed by the toolbar.
     */
    protected getField(): Field;
    /**
     * Returns the toolbar UI component that manages the editor.  Useful for
     * classes that extend `ToolbarController`.
     * @return The toolbar UI component.
     */
    getToolbar(): Toolbar;
    isVisible(): boolean;
    /**
     * Shows or hides the toolbar.
     * @param visible Whether to show or hide the toolbar.
     */
    setVisible(visible: boolean): void;
    isEnabled(): boolean;
    /**
     * Enables or disables the toolbar.
     * @param enabled Whether to enable or disable the toolbar.
     */
    setEnabled(enabled: boolean): void;
    /**
     * Programmatically blurs the editor toolbar, un-highlighting the currently
     * highlighted item, and closing the currently open menu (if any).
     */
    blur(): void;
    disposeInternal(): void;
    /**
     * Updates the toolbar in response to editor events.  Specifically, updates
     * button states based on `COMMAND_VALUE_CHANGE` events, reflecting the
     * effective formatting of the selection.
     * @param e Editor event to handle.
     */
    protected updateToolbar(e: Event | null): void;
    /**
     * Updates the toolbar to reflect a given state.
     * @param state Object mapping editor commands to values.
     */
    updateToolbarFromState(state: object | null): void;
    /**
     * Handles `ACTION` events dispatched by toolbar buttons in response to
     * user actions by executing the corresponding field command.
     * @param e Action event to handle.
     */
    protected handleAction(e: Event | null): void;
}

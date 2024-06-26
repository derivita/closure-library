//!! generated by clutz.
// Generated from ui/checkbox.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * 3-state checkbox widget. Fires CHECK or UNCHECK events before toggled and
   * CHANGE event after toggled by user.
   * The checkbox can also be enabled/disabled and get focused and highlighted.
   */
  class Checkbox extends ಠ_ಠ.clutz.goog.ui.Control {
    private noStructuralTyping_goog_ui_Checkbox : any;
    /**
     * 3-state checkbox widget. Fires CHECK or UNCHECK events before toggled and
     * CHANGE event after toggled by user.
     * The checkbox can also be enabled/disabled and get focused and highlighted.
     * @param opt_checked Checked state to set.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     * @param opt_renderer Renderer used to render or decorate the checkbox; defaults to {@link goog.ui.CheckboxRenderer}.
     */
    constructor (opt_checked ? : ಠ_ಠ.clutz.goog.ui.Checkbox.State , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null , opt_renderer ? : ಠ_ಠ.clutz.goog.ui.CheckboxRenderer | null ) ;
    enterDocument ( ) : void ;
    getChecked ( ) : ಠ_ಠ.clutz.goog.ui.Checkbox.State ;
    handleKeyEventInternal (e ? : any ) : any ;
    isChecked ( ) : boolean ;
    isUnchecked ( ) : boolean ;
    isUndetermined ( ) : boolean ;
    /**
     * Sets the checked state of the checkbox.
     * @param checked The checked state to set.
     */
    setChecked (checked : boolean | null ) : void ;
    /**
     * Sets the checked state for the checkbox.  Unlike {@link #setChecked},
     * doesn't update the checkbox's DOM.  Considered protected; to be called
     * only by renderer code during element decoration.
     * @param checked New checkbox state.
     */
    setCheckedInternal (checked : ಠ_ಠ.clutz.goog.ui.Checkbox.State ) : void ;
    /**
     * Binds an HTML element to the checkbox which if clicked toggles the checkbox.
     * Behaves the same way as the 'label' HTML tag. The label element has to be the
     * direct or non-direct ancestor of the checkbox element because it will get the
     * focus when keyboard support is implemented.
     * Note: Control#enterDocument also sets aria-label on the element but
     * Checkbox#enterDocument sets aria-labeledby on the same element which
     * overrides the aria-label in all modern screen readers.
     * @param label The label control to set. If null, only the checkbox reacts to clicks.
     */
    setLabel (label : GlobalElement | null ) : void ;
    toggle ( ) : void ;
  }
}
declare module 'goog:goog.ui.Checkbox' {
  import Checkbox = ಠ_ಠ.clutz.goog.ui.Checkbox;
  export default Checkbox;
}
// Generated from ui/checkbox.js
declare namespace ಠ_ಠ.clutz.goog.ui.Checkbox {
  /**
   * Possible checkbox states.
   */
  type State = boolean | null &{clutzEnumBrand: never} ;
  let State : {
    CHECKED : State ,
    UNCHECKED : State ,
    UNDETERMINED : State ,
  };
}
declare module 'goog:goog.ui.Checkbox.State' {
  import State = ಠ_ಠ.clutz.goog.ui.Checkbox.State;
  export default State;
}

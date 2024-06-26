//!! generated by clutz.
// Generated from ui/registry.js
declare namespace ಠ_ಠ.clutz.goog.ui.registry {
  /**
   * Returns an instance of {@link goog.ui.Component} or a subclass suitable to
   * decorate the given element, based on its CSS class.
   *
   * TODO(nnaze): Type of element should be {!Element}.
   * @param element Element to decorate.
   */
  function getDecorator (element : GlobalElement | null ) : ಠ_ಠ.clutz.goog.ui.Component | null ;
  /**
   * Returns the {@link goog.ui.Component} instance created by the decorator
   * factory function registered for the given CSS class name, or null if no
   * decorator factory function was found.
   * @param className CSS class name.
   */
  function getDecoratorByClassName (className : string ) : ಠ_ಠ.clutz.goog.ui.Component | null ;
  /**
   * Given a {@link goog.ui.Component} constructor, returns an instance of its
   * default renderer.  If the default renderer is a singleton, returns the
   * singleton instance; otherwise returns a new instance of the renderer class.
   * @param componentCtor Component constructor function (for example `goog.ui.Button`).
   */
  function getDefaultRenderer (componentCtor : Function ) : ಠ_ಠ.clutz.goog.ui.ControlRenderer | null ;
  /**
   * Resets the global renderer and decorator registry.
   */
  function reset ( ) : void ;
  /**
   * Maps a CSS class name to a function that returns a new instance of
   * {@link goog.ui.Component} or a subclass, suitable to decorate an element
   * that has the specified CSS class.
   * @param className CSS class name.
   * @param decoratorFn No-argument function that returns a new instance of a {@link goog.ui.Component} to decorate an element.
   */
  function setDecoratorByClassName (className : string , decoratorFn : Function | null ) : void ;
  /**
   * Sets the default renderer for the given {@link goog.ui.Component}
   * constructor.
   * @param componentCtor Component constructor function (for example `goog.ui.Button`).
   * @param rendererCtor Renderer constructor function (for example `goog.ui.ButtonRenderer`).
   */
  function setDefaultRenderer (componentCtor : Function | null , rendererCtor : Function | null ) : void ;
}
declare module 'goog:goog.ui.registry' {
  import registry = ಠ_ಠ.clutz.goog.ui.registry;
  export = registry;
}

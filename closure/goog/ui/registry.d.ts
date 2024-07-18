import type { Component } from './component.js';
import type { ControlRenderer } from './controlrenderer.js';
/**
 * Given a {@link Component} constructor, returns an instance of its
 * default renderer.  If the default renderer is a singleton, returns the
 * singleton instance; otherwise returns a new instance of the renderer class.
 * @param componentCtor Component constructor function (for example `goog.ui.Button`).
 * @return Renderer instance (for example the singleton instance of `goog.ui.ButtonRenderer`), or null if no default renderer was found.
 */
export declare function getDefaultRenderer(componentCtor: Function): ControlRenderer | null;
/**
 * Sets the default renderer for the given {@link Component}
 * constructor.
 * @param componentCtor Component constructor function (for example `goog.ui.Button`).
 * @param rendererCtor Renderer constructor function (for example `goog.ui.ButtonRenderer`).
 */
export declare function setDefaultRenderer(componentCtor: Function | null, rendererCtor: Function | null): void;
/**
 * Returns the {@link Component} instance created by the decorator
 * factory function registered for the given CSS class name, or null if no
 * decorator factory function was found.
 * @param className CSS class name.
 * @return Component instance.
 */
export declare function getDecoratorByClassName(className: string): Component | null;
/**
 * Maps a CSS class name to a function that returns a new instance of
 * {@link Component} or a subclass, suitable to decorate an element
 * that has the specified CSS class.
 * @param className CSS class name.
 * @param decoratorFn No-argument function that returns a new instance of a {@link Component} to decorate an element.
 */
export declare function setDecoratorByClassName(className: string, decoratorFn: Function | null): void;
/**
 * Returns an instance of {@link Component} or a subclass suitable to
 * decorate the given element, based on its CSS class.
 *
 * TODO(nnaze): Type of element should be {!Element}.
 * @param element Element to decorate.
 * @return Component to decorate the element (null if none).
 */
export declare function getDecorator(element: Element | null): Component | null;
/**
 * Resets the global renderer and decorator registry.
 */
export declare function reset(): void;
/**
 * Map of {@link Component} constructor unique IDs to the constructors
 * of their default {@link goog.ui.Renderer}s.
 */
export declare var defaultRenderers_: object | null;
/**
 * Map of CSS class names to registry factory functions.  The keys are
 * class names.  The values are function objects that return new instances
 * of {@link goog.ui.registry} or one of its subclasses, suitable to
 * decorate elements marked with the corresponding CSS class.  Used by
 * containers while decorating their children.
 */
export declare var decoratorFunctions_: object | null;

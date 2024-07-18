import type { Component } from './component.js';
/**
 * Decorates the element with a suitable {@link Component} instance, if
 * a matching decorator is found.
 * @param element Element to decorate.
 * @return New component instance, decorating the element.
 */
export declare function decorate(element: Element | null): Component | null;

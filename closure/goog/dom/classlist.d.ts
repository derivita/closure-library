/**
 * Override this define at build-time if you know your target supports it.
 */
export declare var ALWAYS_USE_DOM_TOKEN_LIST: boolean;
/**
 * Gets an array-like object of class names on an element.
 * @param element DOM node to get the classes of.
 * @return Class names on `element`.
 */
export declare function get(element: Element | null): ArrayLike<any>;
/**
 * Sets the entire class name of an element.
 * @param element DOM node to set class of.
 * @param className Class name(s) to apply to element.
 */
export declare function set(element: Element | null, className: string): void;
/**
 * Returns true if an element has a class.  This method may throw a DOM
 * exception for an invalid or empty class name if DOMTokenList is used.
 * @param element DOM node to test.
 * @param className Class name to test for.
 * @return Whether element has the class.
 */
export declare function contains(element: Element | null, className: string): boolean;
/**
 * Adds a class to an element.  Does not add multiples of class names.  This
 * method may throw a DOM exception for an invalid or empty class name if
 * DOMTokenList is used.
 * @param element DOM node to add class to.
 * @param className Class name to add.
 */
declare function add_(element: Element | null, className: string): void;
export { add_ as add };
/**
 * Convenience method to add a number of class names at once.
 * @param element The element to which to add classes.
 * @param classesToAdd An array-like object containing a collection of class names to add to the element. This method may throw a DOM exception if classesToAdd contains invalid or empty class names.
 */
export declare function addAll(element: Element | null, classesToAdd: ArrayLike<string> | null): void;
/**
 * Removes a class from an element.  This method may throw a DOM exception
 * for an invalid or empty class name if DOMTokenList is used.
 * @param element DOM node to remove class from.
 * @param className Class name to remove.
 */
export declare function remove(element: Element | null, className: string): void;
/**
 * Removes a set of classes from an element.  Prefer this call to
 * repeatedly calling `remove` if you want to remove
 * a large set of class names at once.
 * @param element The element from which to remove classes.
 * @param classesToRemove An array-like object containing a collection of class names to remove from the element. This method may throw a DOM exception if classesToRemove contains invalid or empty class names.
 */
export declare function removeAll(element: Element | null, classesToRemove: ArrayLike<string> | null): void;
/**
 * Adds or removes a class depending on the enabled argument.  This method
 * may throw a DOM exception for an invalid or empty class name if DOMTokenList
 * is used.
 * @param element DOM node to add or remove the class on.
 * @param className Class name to add or remove.
 * @param enabled Whether to add or remove the class (true adds, false removes).
 */
export declare function enable(element: Element | null, className: string, enabled: boolean): void;
/**
 * Adds or removes a set of classes depending on the enabled argument.  This
 * method may throw a DOM exception for an invalid or empty class name if
 * DOMTokenList is used.
 * @param element DOM node to add or remove the class on.
 * @param classesToEnable An array-like object containing a collection of class names to add or remove from the element.
 * @param enabled Whether to add or remove the classes (true adds, false removes).
 */
export declare function enableAll(element: Element, classesToEnable: ArrayLike<string> | null, enabled: boolean): void;
/**
 * Switches a class on an element from one to another without disturbing other
 * classes. If the fromClass isn't removed, the toClass won't be added.  This
 * method may throw a DOM exception if the class names are empty or invalid.
 * @param element DOM node to swap classes on.
 * @param fromClass Class to remove.
 * @param toClass Class to add.
 * @return Whether classes were switched.
 */
export declare function swap(element: Element | null, fromClass: string, toClass: string): boolean;
/**
 * Removes a class if an element has it, and adds it the element doesn't have
 * it.  Won't affect other classes on the node.  This method may throw a DOM
 * exception if the class name is empty or invalid.
 * @param element DOM node to toggle class on.
 * @param className Class to toggle.
 * @return True if class was added, false if it was removed (in other words, whether element has the class after this function has been called).
 */
export declare function toggle(element: Element | null, className: string): boolean;
/**
 * Adds and removes a class of an element.  Unlike
 * {@link swap}, this method adds the classToAdd regardless
 * of whether the classToRemove was present and had been removed.  This method
 * may throw a DOM exception if the class names are empty or invalid.
 * @param element DOM node to swap classes on.
 * @param classToRemove Class to remove.
 * @param classToAdd Class to add.
 */
export declare function addRemove(element: Element | null, classToRemove: string, classToAdd: string): void;

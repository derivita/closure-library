/**
 * Sets the entire class name of an element.
 * @param element DOM node to set class of.
 * @param className Class name(s) to apply to element.
 */
export declare function set(element: Node | null, className: string): void;
/**
 * Gets an array of class names on an element
 * @param element DOM node to get class of.
 * @return Class names on `element`. Some browsers add extra properties to the array. Do not depend on any of these!
 */
export declare function get(element: Node | null): any[];
/**
 * Adds a class or classes to an element. Does not add multiples of class names.
 * @param element DOM node to add class to.
 * @param var_args Class names to add.
 * @return Whether class was added (or all classes were added).
 */
declare function add_(element: Node | null, ...var_args: string[]): boolean;
export { add_ as add };
/**
 * Removes a class or classes from an element.
 * @param element DOM node to remove class from.
 * @param var_args Class name(s) to remove.
 * @return Whether all classes in `var_args` were found and removed.
 */
export declare function remove(element: Node | null, ...var_args: string[]): boolean;
/**
 * Switches a class on an element from one to another without disturbing other
 * classes. If the fromClass isn't removed, the toClass won't be added.
 * @param element DOM node to swap classes on.
 * @param fromClass Class to remove.
 * @param toClass Class to add.
 * @return Whether classes were switched.
 */
export declare function swap(element: Node | null, fromClass: string, toClass: string): boolean;
/**
 * Adds zero or more classes to an element and removes zero or more as a single
 * operation. Unlike calling {@link add} and
 * {@link remove} separately, this is more efficient as it only
 * parses the class property once.
 *
 * If a class is in both the remove and add lists, it will be added. Thus,
 * you can use this instead of {@link swap} when you have
 * more than two class names that you want to swap.
 * @param element DOM node to swap classes on.
 * @param classesToRemove Class or classes to remove, if null no classes are removed.
 * @param classesToAdd Class or classes to add, if null no classes are added.
 */
export declare function addRemove(element: Node | null, classesToRemove: string | string[] | null, classesToAdd: string | string[] | null): void;
/**
 * Returns true if an element has a class.
 * @param element DOM node to test.
 * @param className Class name to test for.
 * @return Whether element has the class.
 */
export declare function has(element: Node | null, className: string): boolean;
/**
 * Adds or removes a class depending on the enabled argument.
 * @param element DOM node to add or remove the class on.
 * @param className Class name to add or remove.
 * @param enabled Whether to add or remove the class (true adds, false removes).
 */
export declare function enable(element: Node | null, className: string, enabled: boolean): void;
/**
 * Removes a class if an element has it, and adds it the element doesn't have
 * it.  Won't affect other classes on the node.
 * @param element DOM node to toggle class on.
 * @param className Class to toggle.
 * @return True if class was added, false if it was removed (in other words, whether element has the class after this function has been called).
 */
export declare function toggle(element: Node | null, className: string): boolean;

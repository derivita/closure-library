import { Role } from './roles.js';
import { State } from './attributes.js';
/**
 * Sets the role of an element. If the roleName is
 * empty string or null, the role for the element is removed.
 * We encourage clients to call the removeRole
 * method instead of setting null and empty string values.
 * Special handling for this case is added to ensure
 * backword compatibility with existing code.
 * @param element DOM node to set role of.
 * @param roleName role name(s).
 */
export declare function setRole(element: Element, roleName: Role | string): void;
/**
 * Gets role of an element.
 * @param element DOM element to get role of.
 * @return ARIA Role name.
 */
export declare function getRole(element: Element): Role | null;
/**
 * Removes role of an element.
 * @param element DOM element to remove the role from.
 */
export declare function removeRole(element: Element): void;
/**
 * Sets the state or property of an element.
 * @param element DOM node where we set state.
 * @param stateName State attribute being set. Automatically adds prefix 'aria-' to the state name if the attribute is not an extra attribute.
 * @param value Value for the state attribute.
 */
export declare function setState(element: Element, stateName: State | string, value: string | boolean | number | string[]): void;
/**
 * Toggles the ARIA attribute of an element.
 * Meant for attributes with a true/false value, but works with any attribute.
 * If the attribute does not have a true/false value, the following rules apply:
 * A not empty attribute will be removed.
 * An empty attribute will be set to true.
 * @param el DOM node for which to set attribute.
 * @param attr ARIA attribute being set. Automatically adds prefix 'aria-' to the attribute name if the attribute is not an extra attribute.
 */
export declare function toggleState(el: Element, attr: State | string): void;
/**
 * Remove the state or property for the element.
 * @param element DOM node where we set state.
 * @param stateName State name.
 */
export declare function removeState(element: Element, stateName: State): void;
/**
 * Gets value of specified state or property.
 * @param element DOM node to get state from.
 * @param stateName State name.
 * @return Value of the state attribute.
 */
export declare function getState(element: Element, stateName: State | string): string;
/**
 * Returns the activedescendant element for the input element by
 * using the activedescendant ARIA property of the given element.
 * @param element DOM node to get activedescendant element for.
 * @return DOM node of the activedescendant, if found.
 */
export declare function getActiveDescendant(element: Element): Element | null;
/**
 * Sets the activedescendant ARIA property value for an element.
 * If the activeElement is not null, it should have an id set.
 * @param element DOM node to set activedescendant ARIA property to.
 * @param activeElement DOM node being set as activedescendant.
 */
export declare function setActiveDescendant(element: Element, activeElement: Element | null): void;
/**
 * Gets the label of the given element.
 * @param element DOM node to get label from.
 * @return label The label.
 */
export declare function getLabel(element: Element): string;
/**
 * Sets the label of the given element.
 * @param element DOM node to set label to.
 * @param label The label to set.
 */
export declare function setLabel(element: Element, label: string): void;
/**
 * Asserts that the element has a role set if it's not an HTML element whose
 * semantics is well supported by most screen readers.
 * Only to be used internally by the ARIA library in *.
 * @param element The element to assert an ARIA role set.
 * @param allowedRoles The child roles of the roles.
 */
export declare function assertRoleIsSetInternalUtil(element: Element, allowedRoles: ArrayLike<string>): void;
/**
 * Gets the boolean value of an ARIA state/property.
 * @param element The element to get the ARIA state for.
 * @param stateName the ARIA state name.
 * @return Boolean value for the ARIA state value or null if the state value is not 'true', not 'false', or not set.
 */
export declare function getStateBoolean(element: Element, stateName: State | string): boolean | null;
/**
 * Gets the number value of an ARIA state/property.
 * @param element The element to get the ARIA state for.
 * @param stateName the ARIA state name.
 * @return Number value for the ARIA state value or null if the state value is not a number or not set.
 */
export declare function getStateNumber(element: Element, stateName: State | string): number | null;
/**
 * Gets the string value of an ARIA state/property.
 * @param element The element to get the ARIA state for.
 * @param stateName the ARIA state name.
 * @return String value for the ARIA state value or null if the state value is empty string or not set.
 */
export declare function getStateString(element: Element, stateName: State | string): string | null;
/**
 * Gets array of strings value of the specified state or
 * property for the element.
 * Only to be used internally by the ARIA library in *.
 * @param element DOM node to get state from.
 * @param stateName State name.
 * @return string Array value of the state attribute.
 */
export declare function getStringArrayStateInternalUtil(element: Element, stateName: State): ArrayLike<string>;
/**
 * Returns true if element has an ARIA state/property, false otherwise.
 * @param element The element to get the ARIA state for.
 * @param stateName the ARIA state name.
 */
export declare function hasState(element: Element, stateName: State | string): boolean;
/**
 * Returns whether the element has a container ARIA role.
 * Container roles are ARIA roles that use the aria-activedescendant property
 * to manage their active descendants or children. See
 * {@link http://www.w3.org/TR/wai-aria/states_and_properties
 * #aria-activedescendant} for more information.
 */
export declare function isContainerRole(element: Element): boolean;

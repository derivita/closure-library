/**
 * Returns the JS vendor prefix used in CSS properties. Different vendors
 * use different methods of changing the case of the property names.
 * @return The JS vendor prefix or null if there is none.
 */
export declare function getVendorJsPrefix(): string | null;
/**
 * Returns the vendor prefix used in CSS properties.
 * @return The vendor prefix or null if there is none.
 */
export declare function getVendorPrefix(): string | null;
/**
 *
 * @param propertyName A property name.
 * @param opt_object If provided, we verify if the property exists in the object.
 * @return A vendor prefixed property name, or null if it does not exist.
 */
export declare function getPrefixedPropertyName(propertyName: string, opt_object?: object): string | null;
/**
 *
 * @param eventType An event type.
 * @return A lower-cased vendor prefixed event type.
 */
export declare function getPrefixedEventType(eventType: string): string;

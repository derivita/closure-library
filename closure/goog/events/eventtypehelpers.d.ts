/**
 * Returns a prefixed event name for the current browser.
 * @param eventName The name of the event.
 * @return The prefixed event name.
 */
export declare function getVendorPrefixedName(eventName: string): string;
/**
 * Returns one of the given pointer fallback event names in order of preference:
 * 1. pointerEventName
 * 2. msPointerEventName
 * 3. fallbackEventName
 * @return The supported pointer or fallback (mouse or touch) event name.
 */
export declare function getPointerFallbackEventName(pointerEventName: string, msPointerEventName: string, fallbackEventName: string): string;

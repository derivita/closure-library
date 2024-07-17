/**
 * A typedef to represent a CSS3 transition property. Duration and delay
 * are both in seconds. Timing is CSS3 timing function string, such as
 * 'easein', 'linear'.
 *
 * Alternatively, specifying string in the form of '[property] [duration]
 * [timing] [delay]' as specified in CSS3 transition is fine too.
 */
export type Css3Property = {
    'property': string;
    'duration': number;
    'timing': string;
    'delay': number;
} | string;
/**
 * Sets the element CSS3 transition to properties.
 * @param element The element to set transition on.
 * @param properties A single CSS3 transition property or array of properties.
 */
export declare function set(element: Element | null, properties: Css3Property | (Css3Property | null)[] | null): void;
/**
 * Removes any programmatically-added CSS3 transition in the given element.
 * @param element The element to remove transition from.
 */
export declare function removeAll(element: Element | null): void;
export declare function isSupported(...args: any[]): boolean;

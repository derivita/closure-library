/**
 * Description the geometry and target of an event.
 */
export type TouchData = {
    'clientX': number;
    'clientY': number;
    'screenX': number;
    'screenY': number;
    'target': EventTarget | null;
};
/**
 * Takes a mouse or touch event and returns the relevant geometry and target
 * data.
 * @param e A mouse or touch event.
 */
export declare function getTouchData(e: Event): TouchData;

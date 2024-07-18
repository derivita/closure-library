/**
 * Sets the place where the selection should start inside a textarea or a text
 * input
 * @param textfield A textarea or text input.
 * @param pos The position to set the start of the selection at.
 */
export declare function setStart(textfield: Element | null, pos: number): void;
/**
 * Return the place where the selection starts inside a textarea or a text
 * input
 * @param textfield A textarea or text input.
 * @return The position where the selection starts or 0 if it was unable to find the position or no selection exists. Note that we can't reliably tell the difference between an element that has no selection and one where it starts at 0.
 */
export declare function getStart(textfield: Element | null): number;
/**
 * Returns the start and end points of the selection inside a textarea or a
 * text input.
 * @param textfield A textarea or text input.
 * @return An array with the start and end positions where the selection starts and ends or [0,0] if it was unable to find the positions or no selection exists. Note that we can't reliably tell the difference between an element that has no selection and one where it starts and ends at 0.
 */
export declare function getEndPoints(textfield: Element | null): number[];
/**
 * Sets the place where the selection should end inside a text area or a text
 * input
 * @param textfield A textarea or text input.
 * @param pos The position to end the selection at.
 */
export declare function setEnd(textfield: Element | null, pos: number): void;
/**
 * Returns the place where the selection ends inside a textarea or a text input
 * @param textfield A textarea or text input.
 * @return The position where the selection ends or 0 if it was unable to find the position or no selection exists.
 */
export declare function getEnd(textfield: Element | null): number;
/**
 * Sets the cursor position within a textfield.
 * @param textfield A textarea or text input.
 * @param pos The position within the text field.
 */
export declare function setCursorPosition(textfield: Element | null, pos: number): void;
/**
 * Sets the selected text inside a textarea or a text input
 * @param textfield A textarea or text input.
 * @param text The text to change the selection to.
 */
export declare function setText(textfield: Element | null, text: string): void;
/**
 * Returns the selected text inside a textarea or a text input
 * @param textfield A textarea or text input.
 * @return The selected text.
 */
export declare function getText(textfield: Element | null): string;

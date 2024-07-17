/**
 * Attempts to serialize the JSON string natively, falling back to
 * `json.serialize` if unsuccessful.
 * @param obj JavaScript object to serialize to JSON.
 * @return Resulting JSON string.
 */
export declare function stringify(obj: object): string;
/**
 * Attempts to parse the JSON string natively, falling back to
 * `json.parse` if unsuccessful.
 * @param jsonString JSON string to parse.
 * @return Resulting JSON object.
 */
export declare function parse(jsonString: string): object | null;

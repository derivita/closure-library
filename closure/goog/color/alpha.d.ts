/**
 * Parses an alpha color out of a string.
 * @param str Color in some format.
 * @return 'hex' is a string containing a hex representation of the color, and 'type' is a string containing the type of color format passed in ('hex', 'rgb', 'named').
 */
export declare function parse(str: string): {
    'hex': string;
    'type': string;
};
/**
 * Converts a hex representation of a color to RGBA.
 * @param hexColor Color to convert.
 * @return string of the form 'rgba(R,G,B,A)' which can be used in styles.
 */
export declare function hexToRgbaStyle(hexColor: string): string;
/**
 * Gets the hex color part of an alpha hex color. For example, both '#abcd' and
 * '#AABBCC12' return '#aabbcc'.
 * @param colorWithAlpha The alpha hex color to get the hex color from.
 * @return The hex color where the alpha part has been stripped off.
 */
export declare function extractHexColor(colorWithAlpha: string): string;
/**
 * Gets the alpha color part of an alpha hex color. For example, both '#123A'
 * and '#123456aa' return 'aa'. The result is always two characters long.
 * @param colorWithAlpha The alpha hex color to get the hex color from.
 * @return The two-character alpha from the given color.
 */
export declare function extractAlpha(colorWithAlpha: string): string;
/**
 * Normalize a hex representation of an alpha color.
 * @param hexColor an alpha hex color string.
 * @return hex color in the format '#rrggbbaa' with all lowercase literals.
 */
export declare function normalizeAlphaHex_(hexColor: string): string;
/**
 * Converts an 8-hex representation of a color to RGBA.
 * @param hexColor Color to convert.
 * @return array containing [r, g, b, a]. r, g, b are ints between 0 and 255, and a is a value between 0 and 1.
 */
export declare function hexToRgba(hexColor: string): number[];
/**
 * Converts a color from RGBA to hex representation.
 * @param r Amount of red, int between 0 and 255.
 * @param g Amount of green, int between 0 and 255.
 * @param b Amount of blue, int between 0 and 255.
 * @param a Amount of alpha, float between 0 and 1.
 * @return hex representation of the color.
 */
export declare function rgbaToHex(r: number, g: number, b: number, a: number): string;
/**
 * Converts a color from HSLA to hex representation.
 * @param h Amount of hue, int between 0 and 360.
 * @param s Amount of saturation, int between 0 and 100.
 * @param l Amount of lightness, int between 0 and 100.
 * @param a Amount of alpha, float between 0 and 1.
 * @return hex representation of the color.
 */
export declare function hslaToHex(h: number, s: number, l: number, a: number): string;
/**
 * Converts a color from RGBA to hex representation.
 * @param rgba Array of [r, g, b, a], with r, g, b in [0, 255] and a in [0, 1].
 * @return hex representation of the color.
 */
export declare function rgbaArrayToHex(rgba: number[]): string;
/**
 * Converts a color from RGBA to an RGBA style string.
 * @param r Value of red, in [0, 255].
 * @param g Value of green, in [0, 255].
 * @param b Value of blue, in [0, 255].
 * @param a Value of alpha, in [0, 1].
 * @return An 'rgba(r,g,b,a)' string ready for use in a CSS rule.
 */
export declare function rgbaToRgbaStyle(r: number, g: number, b: number, a: number): string;
/**
 * Converts a color from RGBA to an RGBA style string.
 * @param rgba Array of [r, g, b, a], with r, g, b in [0, 255] and a in [0, 1].
 * @return An 'rgba(r,g,b,a)' string ready for use in a CSS rule.
 */
export declare function rgbaArrayToRgbaStyle(rgba: number[] | Float32Array): string;
/**
 * Converts a color from HSLA to hex representation.
 * @param hsla Array of [h, s, l, a], where h is an integer in [0, 360], s and l are integers in [0, 100], and a is in [0, 1].
 * @return hex representation of the color, such as '#af457eff'.
 */
export declare function hslaArrayToHex(hsla: number[]): string;
/**
 * Converts a color from HSLA to an RGBA style string.
 * @param hsla Array of [h, s, l, a], where h is and integer in [0, 360], s and l are integers in [0, 100], and a is in [0, 1].
 * @return An 'rgba(r,g,b,a)' string ready for use in a CSS rule.
 */
export declare function hslaArrayToRgbaStyle(hsla: number[]): string;
/**
 * Converts a color from HSLA to an RGBA style string.
 * @param h Amount of hue, int between 0 and 360.
 * @param s Amount of saturation, int between 0 and 100.
 * @param l Amount of lightness, int between 0 and 100.
 * @param a Amount of alpha, float between 0 and 1.
 * @return An 'rgba(r,g,b,a)' string ready for use in a CSS rule. styles.
 */
export declare function hslaToRgbaStyle(h: number, s: number, l: number, a: number): string;
/**
 * Converts a color from HSLA color space to RGBA color space.
 * @param h Amount of hue, int between 0 and 360.
 * @param s Amount of saturation, int between 0 and 100.
 * @param l Amount of lightness, int between 0 and 100.
 * @param a Amount of alpha, float between 0 and 1.
 * @return [r, g, b, a] values for the color, where r, g, b are integers in [0, 255] and a is a float in [0, 1].
 */
export declare function hslaToRgba(h: number, s: number, l: number, a: number): number[];
/**
 * Converts a color from RGBA color space to HSLA color space.
 * Modified from {@link http://en.wikipedia.org/wiki/HLS_color_space}.
 * @param r Value of red, in [0, 255].
 * @param g Value of green, in [0, 255].
 * @param b Value of blue, in [0, 255].
 * @param a Value of alpha, in [0, 255].
 * @return [h, s, l, a] values for the color, with h an int in [0, 360] and s, l and a in [0, 1].
 */
export declare function rgbaToHsla(r: number, g: number, b: number, a: number): number[];
/**
 * Converts a color from RGBA color space to HSLA color space.
 * @param rgba [r, g, b, a] values for the color, each in [0, 255].
 * @return [h, s, l, a] values for the color, with h in [0, 360] and s, l and a in [0, 1].
 */
export declare function rgbaArrayToHsla(rgba: number[]): number[];
/**
 * Checks if a string is a valid alpha hex color.  We expect strings of the
 * format #RRGGBBAA (ex: #1b3d5f5b) or #RGBA (ex: #3CAF == #33CCAAFF).
 * @param str String to check.
 * @return Whether the string is a valid alpha hex color.
 */
export declare function isValidAlphaHexColor_(str: string): boolean;
/**
 * Checks if a string is a valid rgba color.  We expect strings of the format
 * '(r, g, b, a)', or 'rgba(r, g, b, a)', where r, g, b are ints in [0, 255]
 * and a is a float in [0, 1].
 * @param str String to check.
 * @return the integers [r, g, b, a] for valid colors or the empty array for invalid colors.
 */
export declare function isValidRgbaColor_(str: string): number[];
/**
 * Checks if a string is a valid hsla color.  We expect strings of the format
 * 'hsla(h, s, l, a)', where s in an int in [0, 360], s and l are percentages
 * between 0 and 100 such as '50%' or '70%', and a is a float in [0, 1].
 * @param str String to check.
 * @return the integers [h, s, l, a] for valid colors or the empty array for invalid colors.
 */
export declare function isValidHslaColor_(str: string): number[];
/**
 * Takes an array of [r, g, b, a] and converts it into a string appropriate for
 * CSS styles. The alpha channel value is rounded to 3 decimal places to make
 * sure the produced string is not too long.
 * @param rgba [r, g, b, a] with r, g, b in [0, 255] and a in [0, 1].
 * @return string of the form 'rgba(r,g,b,a)'.
 */
export declare function rgbaStyle_(rgba: number[]): string;
/**
 * Converts from h,s,v,a values to a hex string
 * @param h Hue, in [0, 1].
 * @param s Saturation, in [0, 1].
 * @param v Value, in [0, 255].
 * @param a Alpha, in [0, 1].
 * @return hex representation of the color.
 */
export declare function hsvaToHex(h: number, s: number, v: number, a: number): string;
/**
 * Converts from an HSVA array to a hex string
 * @param hsva Array of [h, s, v, a] in [[0, 1], [0, 1], [0, 255], [0, 1]].
 * @return hex representation of the color.
 */
export declare function hsvaArrayToHex(hsva: number[]): string;

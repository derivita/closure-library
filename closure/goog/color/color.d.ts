/**
 * RGB color representation. An array containing three elements [r, g, b],
 * each an integer in [0, 255], representing the red, green, and blue components
 * of the color respectively.
 */
export type Rgb = number[] | null;
/**
 * HSV color representation. An array containing three elements [h, s, v]:
 * h (hue) must be an integer in [0, 360], cyclic.
 * s (saturation) must be a number in [0, 1].
 * v (value/brightness) must be an integer in [0, 255].
 */
export type Hsv = number[] | null;
/**
 * HSL color representation. An array containing three elements [h, s, l]:
 * h (hue) must be an integer in [0, 360], cyclic.
 * s (saturation) must be a number in [0, 1].
 * l (lightness) must be a number in [0, 1].
 */
export type Hsl = number[] | null;
/**
 * Parses a color out of a string.
 * @param str Color in some format.
 * @return 'hex' is a string containing a hex representation of the color, 'type' is a string containing the type of color format passed in ('hex', 'rgb', 'named').
 */
export declare function parse(str: string): {
    'hex': string;
    'type': string;
};
/**
 * Determines if the given string can be parsed as a color.
 * {@see parse}.
 * @param str Potential color string.
 * @return True if str is in a format that can be parsed to a color.
 */
export declare function isValidColor(str: string): boolean;
/**
 * Parses red, green, blue components out of a valid rgb color string.
 * Throws Error if the color string is invalid.
 * @param str RGB representation of a color. {@see isValidRgbColor_}.
 * @return rgb representation of the color.
 */
export declare function parseRgb(str: string): Rgb;
/**
 * Converts a hex representation of a color to RGB.
 * @param hexColor Color to convert.
 * @return string of the form 'rgb(R,G,B)' which can be used in styles.
 */
export declare function hexToRgbStyle(hexColor: string): string;
/**
 * Normalize an hex representation of a color
 * @param hexColor an hex color string.
 * @return hex color in the format '#rrggbb' with all lowercase literals.
 */
export declare function normalizeHex(hexColor: string): string;
/**
 * Converts a hex representation of a color to RGB.
 * @param hexColor Color to convert.
 * @return rgb representation of the color.
 */
export declare function hexToRgb(hexColor: string): Rgb;
/**
 * Converts a color from RGB to hex representation.
 * @param r Amount of red, int between 0 and 255.
 * @param g Amount of green, int between 0 and 255.
 * @param b Amount of blue, int between 0 and 255.
 * @return hex representation of the color.
 */
export declare function rgbToHex(r: number, g: number, b: number): string;
/**
 * Converts a color from RGB to hex representation.
 * @param rgb rgb representation of the color.
 * @return hex representation of the color.
 */
export declare function rgbArrayToHex(rgb: Rgb | null): string;
/**
 * Converts a color from RGB color space to HSL color space.
 * Modified from {@link http://en.wikipedia.org/wiki/HLS_color_space}.
 * @param r Value of red, in [0, 255].
 * @param g Value of green, in [0, 255].
 * @param b Value of blue, in [0, 255].
 * @return hsl representation of the color.
 */
export declare function rgbToHsl(r: number, g: number, b: number): Hsl;
/**
 * Converts a color from RGB color space to HSL color space.
 * @param rgb rgb representation of the color.
 * @return hsl representation of the color.
 */
export declare function rgbArrayToHsl(rgb: Rgb | null): Hsl;
/**
 * Converts a color from HSL color space to RGB color space.
 * Modified from {@link http://www.easyrgb.com/math.html}
 * @param h Hue, in [0, 360].
 * @param s Saturation, in [0, 1].
 * @param l Luminosity, in [0, 1].
 * @return rgb representation of the color.
 */
export declare function hslToRgb(h: number, s: number, l: number): Rgb;
/**
 * Converts a color from HSL color space to RGB color space.
 * @param hsl hsl representation of the color.
 * @return rgb representation of the color.
 */
export declare function hslArrayToRgb(hsl: Hsl | null): Rgb;
/**
 * Checks if a string is a valid hex color.  We expect strings of the format
 * #RRGGBB (ex: #1b3d5f) or #RGB (ex: #3CA == #33CCAA).
 * @param str String to check.
 * @return Whether the string is a valid hex color.
 */
export declare function isValidHexColor_(str: string): boolean;
/**
 * Checks if a string is a valid rgb color.  We expect strings of the format
 * '(r, g, b)', or 'rgb(r, g, b)', where each color component is an int in
 * [0, 255].
 * @param str String to check.
 * @return the rgb representation of the color if it is a valid color, or the empty array otherwise.
 */
export declare function isValidRgbColor_(str: string): Rgb;
/**
 * Takes a hex value and prepends a zero if it's a single digit.
 * Small helper method for use by goog.color and friends.
 * @param hex Hex value to prepend if single digit.
 * @return hex value prepended with zero if it was single digit, otherwise the same value that was passed in.
 */
export declare function prependZeroIfNecessaryHelper(hex: string): string;
/**
 * Takes a string a prepends a '#' sign if one doesn't exist.
 * Small helper method for use by goog.color and friends.
 * @param str String to check.
 * @return The value passed in, prepended with a '#' if it didn't already have one.
 */
export declare function prependHashIfNecessaryHelper(str: string): string;
/**
 * Converts an HSV triplet to an RGB array.  V is brightness because b is
 * reserved for blue in RGB.
 * @param h Hue value in [0, 360].
 * @param s Saturation value in [0, 1].
 * @param brightness brightness in [0, 255].
 * @return rgb representation of the color.
 */
export declare function hsvToRgb(h: number, s: number, brightness: number): Rgb;
/**
 * Converts from RGB values to an array of HSV values.
 * @param red Red value in [0, 255].
 * @param green Green value in [0, 255].
 * @param blue Blue value in [0, 255].
 * @return hsv representation of the color.
 */
export declare function rgbToHsv(red: number, green: number, blue: number): Hsv;
/**
 * Converts from an array of RGB values to an array of HSV values.
 * @param rgb rgb representation of the color.
 * @return hsv representation of the color.
 */
export declare function rgbArrayToHsv(rgb: Rgb | null): Hsv;
/**
 * Converts an HSV triplet to an RGB array.
 * @param hsv hsv representation of the color.
 * @return rgb representation of the color.
 */
export declare function hsvArrayToRgb(hsv: Hsv | null): Rgb;
/**
 * Converts a hex representation of a color to HSL.
 * @param hex Color to convert.
 * @return hsl representation of the color.
 */
export declare function hexToHsl(hex: string): Hsl;
/**
 * Converts from h,s,l values to a hex string
 * @param h Hue, in [0, 360].
 * @param s Saturation, in [0, 1].
 * @param l Luminosity, in [0, 1].
 * @return hex representation of the color.
 */
export declare function hslToHex(h: number, s: number, l: number): string;
/**
 * Converts from an hsl array to a hex string
 * @param hsl hsl representation of the color.
 * @return hex representation of the color.
 */
export declare function hslArrayToHex(hsl: Hsl | null): string;
/**
 * Converts a hex representation of a color to HSV
 * @param hex Color to convert.
 * @return hsv representation of the color.
 */
export declare function hexToHsv(hex: string): Hsv;
/**
 * Converts from h,s,v values to a hex string
 * @param h Hue, in [0, 360].
 * @param s Saturation, in [0, 1].
 * @param v Value, in [0, 255].
 * @return hex representation of the color.
 */
export declare function hsvToHex(h: number, s: number, v: number): string;
/**
 * Converts from an HSV array to a hex string
 * @param hsv hsv representation of the color.
 * @return hex representation of the color.
 */
export declare function hsvArrayToHex(hsv: Hsv | null): string;
/**
 * Calculates the Euclidean distance between two color vectors on an HSL sphere.
 * A demo of the sphere can be found at:
 * http://en.wikipedia.org/wiki/HSL_color_space
 * In short, a vector for color (H, S, L) in this system can be expressed as
 * (S*L'*cos(2*PI*H), S*L'*sin(2*PI*H), L), where L' = abs(L - 0.5), and we
 * simply calculate the 1-2 distance using these coordinates
 * @param hsl1 First color in hsl representation.
 * @param hsl2 Second color in hsl representation.
 * @return Distance between the two colors, in the range [0, 1].
 */
export declare function hslDistance(hsl1: Hsl | null, hsl2: Hsl | null): number;
/**
 * Blend two colors together, using the specified factor to indicate the weight
 * given to the first color
 * @param rgb1 First color represented in rgb.
 * @param rgb2 Second color represented in rgb.
 * @param factor The weight to be given to rgb1 over rgb2. Values should be in the range [0, 1]. If less than 0, factor will be set to 0. If greater than 1, factor will be set to 1.
 * @return Combined color represented in rgb.
 */
export declare function blend(rgb1: Rgb | null, rgb2: Rgb | null, factor: number): Rgb;
/**
 * Adds black to the specified color, darkening it
 * @param rgb rgb representation of the color.
 * @param factor Number in the range [0, 1]. 0 will do nothing, while 1 will return black. If less than 0, factor will be set to 0. If greater than 1, factor will be set to 1.
 * @return Combined rgb color.
 */
export declare function darken(rgb: Rgb | null, factor: number): Rgb;
/**
 * Adds white to the specified color, lightening it
 * @param rgb rgb representation of the color.
 * @param factor Number in the range [0, 1].  0 will do nothing, while 1 will return white. If less than 0, factor will be set to 0. If greater than 1, factor will be set to 1.
 * @return Combined rgb color.
 */
export declare function lighten(rgb: Rgb | null, factor: number): Rgb;
/**
 * Find the "best" (highest-contrast) of the suggested colors for the prime
 * color. Uses W3C formula for judging readability and visual accessibility:
 * http://www.w3.org/TR/AERT#color-contrast
 * @param prime Color represented as a rgb array.
 * @param suggestions Array of colors, each representing a rgb array.
 * @return Highest-contrast color represented by an array..
 */
export declare function highContrast(prime: Rgb | null, suggestions: (Rgb | null)[] | null): Rgb;
/**
 * Calculate brightness of a color according to YIQ formula (brightness is Y).
 * More info on YIQ here: http://en.wikipedia.org/wiki/YIQ. Helper method for
 * highContrast()
 * @param rgb Color represented by a rgb array.
 * @return brightness (Y).
 */
export declare function yiqBrightness_(rgb: Rgb | null): number;
/**
 * Calculate difference in brightness of two colors. Helper method for
 * highContrast()
 * @param rgb1 Color represented by a rgb array.
 * @param rgb2 Color represented by a rgb array.
 * @return Brightness difference.
 */
export declare function yiqBrightnessDiff_(rgb1: Rgb | null, rgb2: Rgb | null): number;
/**
 * Calculate color difference between two colors. Helper method for
 * highContrast()
 * @param rgb1 Color represented by a rgb array.
 * @param rgb2 Color represented by a rgb array.
 * @return Color difference.
 */
export declare function colorDiff_(rgb1: Rgb | null, rgb2: Rgb | null): number;

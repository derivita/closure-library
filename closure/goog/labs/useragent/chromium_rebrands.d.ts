/**
 * The set of browsers that are based on Chromium, but also identify themselves
 * in UACH API surfaces with their user-recognizable brand (e.g. Chrome, Brave,
 * Opera etc). In most cases, it is better to check against the Chromium brand
 * (defined in goog.labs.userAgent.Brand) to check the underlying JS engine
 * version, or do feature detection for the specific API surface, instead
 * checking for these brands.
 */
declare enum ChromiumRebrand {
    GOOGLE_CHROME = "Google Chrome",
    BRAVE = "Brave",
    OPERA = "Opera",
    EDGE = "Microsoft Edge"
}
export { ChromiumRebrand };

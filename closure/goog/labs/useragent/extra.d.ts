/**
 * Checks whether the browser appears to be a desktop-class running on a mobile
 * device. Starting with iPadOS 13 this is the default for non-mini iPads
 * running at >=2/3 of the screen. The user agent is otherwise indistinguishable
 * from Mac Safari. The user can also force desktop on other devices. This logic
 * previously also checked for Safari, however other iOS browsers have since
 * adopted the same behavior.
 * @return Whether the runtime heuristics thinks this is Desktop Safari on a non-desktop device.
 */
declare function isSafariDesktopOnMobile(): boolean;
declare const _default: {
    isSafariDesktopOnMobile: typeof isSafariDesktopOnMobile;
};
export default _default;

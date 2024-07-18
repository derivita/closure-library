import { SafeHtml } from '../html/safehtml.js';
import { SafeScript } from '../html/safescript.js';
import { SafeStyle } from '../html/safestyle.js';
import { SafeUrl } from '../html/safeurl.js';
import { TrustedResourceUrl } from '../html/trustedresourceurl.js';
import { Const } from '../string/const.js';
export declare enum InsertAdjacentHtmlPosition {
    AFTERBEGIN = "afterbegin",
    AFTEREND = "afterend",
    BEFOREBEGIN = "beforebegin",
    BEFOREEND = "beforeend"
}
/**
 * Inserts known-safe HTML into a Node, at the specified position.
 * @param node The node on which to call insertAdjacentHTML.
 * @param position Position where to insert the HTML.
 * @param html The known-safe HTML to insert.
 */
export declare function insertAdjacentHtml(node: Node, position: InsertAdjacentHtmlPosition, html: SafeHtml): void;
/**
 * Assigns HTML to an element's innerHTML property. Helper to use only here and
 * in soy.js.
 * @param elem The element whose innerHTML is to be assigned to.
 */
export declare function unsafeSetInnerHtmlDoNotUseOrElse(elem: Element | ShadowRoot | null, html: SafeHtml): void;
/**
 * Assigns known-safe HTML to an element's innerHTML property.
 * @param elem The element whose innerHTML is to be assigned to.
 * @param html The known-safe HTML to assign.
 */
export declare function setInnerHtml(elem: Element | ShadowRoot, html: SafeHtml): void;
/**
 * Assigns constant HTML to an element's innerHTML property.
 * @param element The element whose innerHTML is to be assigned to.
 * @param constHtml The known-safe HTML to assign.
 */
export declare function setInnerHtmlFromConstant(element: Element, constHtml: Const): void;
/**
 * Assigns known-safe HTML to an element's outerHTML property.
 * @param elem The element whose outerHTML is to be assigned to.
 * @param html The known-safe HTML to assign.
 */
export declare function setOuterHtml(elem: Element, html: SafeHtml): void;
/**
 * Safely assigns a URL a form element's action property.
 *
 * If url is of type SafeUrl, its value is unwrapped and assigned to
 * form's action property.  If url is of type string however, it is first
 * sanitized using SafeUrl.sanitize.
 *
 * Example usage:
 * setFormElementAction(formEl, url);
 * which is a safe alternative to
 * formEl.action = url;
 * The latter can result in XSS vulnerabilities if url is a
 * user-/attacker-controlled value.
 * @param form The form element whose action property is to be assigned to.
 * @param url The URL to assign.
 */
export declare function setFormElementAction(form: Element, url: string | SafeUrl): void;
/**
 * Safely assigns a URL to a button element's formaction property.
 *
 * If url is of type SafeUrl, its value is unwrapped and assigned to
 * button's formaction property.  If url is of type string however, it is first
 * sanitized using SafeUrl.sanitize.
 *
 * Example usage:
 * setButtonFormAction(buttonEl, url);
 * which is a safe alternative to
 * buttonEl.action = url;
 * The latter can result in XSS vulnerabilities if url is a
 * user-/attacker-controlled value.
 * @param button The button element whose action property is to be assigned to.
 * @param url The URL to assign.
 */
export declare function setButtonFormAction(button: Element, url: string | SafeUrl): void;
/**
 * Safely assigns a URL to an input element's formaction property.
 *
 * If url is of type SafeUrl, its value is unwrapped and assigned to
 * input's formaction property.  If url is of type string however, it is first
 * sanitized using SafeUrl.sanitize.
 *
 * Example usage:
 * setInputFormAction(inputEl, url);
 * which is a safe alternative to
 * inputEl.action = url;
 * The latter can result in XSS vulnerabilities if url is a
 * user-/attacker-controlled value.
 * @param input The input element whose action property is to be assigned to.
 * @param url The URL to assign.
 */
export declare function setInputFormAction(input: Element, url: string | SafeUrl): void;
/**
 * Sets the given element's style property to the contents of the provided
 * SafeStyle object.
 */
export declare function setStyle(elem: Element, style: SafeStyle): void;
/**
 * Writes known-safe HTML to a document.
 * @param doc The document to be written to.
 * @param html The known-safe HTML to assign.
 */
export declare function documentWrite(doc: Document, html: SafeHtml): void;
/**
 * Safely assigns a URL to an anchor element's href property.
 *
 * If url is of type SafeUrl, its value is unwrapped and assigned to
 * anchor's href property.  If url is of type string however, it is first
 * sanitized using SafeUrl.sanitize.
 *
 * Example usage:
 * setAnchorHref(anchorEl, url);
 * which is a safe alternative to
 * anchorEl.href = url;
 * The latter can result in XSS vulnerabilities if url is a
 * user-/attacker-controlled value.
 * @param anchor The anchor element whose href property is to be assigned to.
 * @param url The URL to assign.
 */
export declare function setAnchorHref(anchor: HTMLAnchorElement, url: string | SafeUrl): void;
/**
 * Safely assigns a URL to a audio element's src property.
 *
 * If url is of type SafeUrl, its value is unwrapped and assigned to
 * audio's src property.  If url is of type string however, it is first
 * sanitized using SafeUrl.sanitize.
 * @param audioElement The audio element whose src property is to be assigned to.
 * @param url The URL to assign.
 */
export declare function setAudioSrc(audioElement: HTMLAudioElement, url: string | SafeUrl): void;
/**
 * Safely assigns a URL to a video element's src property.
 *
 * If url is of type SafeUrl, its value is unwrapped and assigned to
 * video's src property.  If url is of type string however, it is first
 * sanitized using SafeUrl.sanitize.
 * @param videoElement The video element whose src property is to be assigned to.
 * @param url The URL to assign.
 */
export declare function setVideoSrc(videoElement: HTMLVideoElement, url: string | SafeUrl): void;
/**
 * Safely assigns a URL to an embed element's src property.
 *
 * Example usage:
 * setEmbedSrc(embedEl, url);
 * which is a safe alternative to
 * embedEl.src = url;
 * The latter can result in loading untrusted code unless it is ensured that
 * the URL refers to a trustworthy resource.
 * @param embed The embed element whose src property is to be assigned to.
 * @param url The URL to assign.
 */
export declare function setEmbedSrc(embed: HTMLEmbedElement, url: TrustedResourceUrl): void;
/**
 * Safely assigns a URL to a frame element's src property.
 *
 * Example usage:
 * setFrameSrc(frameEl, url);
 * which is a safe alternative to
 * frameEl.src = url;
 * The latter can result in loading untrusted code unless it is ensured that
 * the URL refers to a trustworthy resource.
 * @param frame The frame element whose src property is to be assigned to.
 * @param url The URL to assign.
 */
export declare function setFrameSrc(frame: HTMLFrameElement, url: TrustedResourceUrl): void;
/**
 * Safely assigns a URL to an iframe element's src property.
 *
 * Example usage:
 * setIframeSrc(iframeEl, url);
 * which is a safe alternative to
 * iframeEl.src = url;
 * The latter can result in loading untrusted code unless it is ensured that
 * the URL refers to a trustworthy resource.
 * @param iframe The iframe element whose src property is to be assigned to.
 * @param url The URL to assign.
 */
export declare function setIframeSrc(iframe: HTMLIFrameElement, url: TrustedResourceUrl): void;
/**
 * Safely assigns HTML to an iframe element's srcdoc property.
 *
 * Example usage:
 * setIframeSrcdoc(iframeEl, safeHtml);
 * which is a safe alternative to
 * iframeEl.srcdoc = html;
 * The latter can result in loading untrusted code.
 * @param iframe The iframe element whose srcdoc property is to be assigned to.
 * @param html The HTML to assign.
 */
export declare function setIframeSrcdoc(iframe: HTMLIFrameElement, html: SafeHtml): void;
/**
 * Safely sets a link element's href and rel properties. Whether or not
 * the URL assigned to href has to be a TrustedResourceUrl
 * depends on the value of the rel property. If rel contains "stylesheet"
 * then a TrustedResourceUrl is required.
 *
 * Example usage:
 * setLinkHrefAndRel(linkEl, url, 'stylesheet');
 * which is a safe alternative to
 * linkEl.rel = 'stylesheet';
 * linkEl.href = url;
 * The latter can result in loading untrusted code unless it is ensured that
 * the URL refers to a trustworthy resource.
 * @param link The link element whose href property is to be assigned to.
 * @param url The URL to assign to the href property. Must be a TrustedResourceUrl if the value assigned to rel contains "stylesheet". A string value is sanitized with SafeUrl.sanitize.
 * @param rel The value to assign to the rel property.
 */
export declare function setLinkHrefAndRel(link: HTMLLinkElement, url: string | SafeUrl | TrustedResourceUrl, rel: string): void;
/**
 * Safely assigns a URL to an object element's data property.
 *
 * Example usage:
 * setObjectData(objectEl, url);
 * which is a safe alternative to
 * objectEl.data = url;
 * The latter can result in loading untrusted code unless setit is ensured that
 * the URL refers to a trustworthy resource.
 * @param object The object element whose data property is to be assigned to.
 * @param url The URL to assign.
 */
export declare function setObjectData(object: HTMLObjectElement, url: TrustedResourceUrl): void;
/**
 * Safely assigns a URL to a script element's src property.
 *
 * Example usage:
 * setScriptSrc(scriptEl, url);
 * which is a safe alternative to
 * scriptEl.src = url;
 * The latter can result in loading untrusted code unless it is ensured that
 * the URL refers to a trustworthy resource.
 * @param script The script element whose src property is to be assigned to.
 * @param url The URL to assign.
 */
export declare function setScriptSrc(script: HTMLScriptElement, url: TrustedResourceUrl): void;
/**
 * Safely assigns a value to a script element's content.
 *
 * Example usage:
 * setScriptContent(scriptEl, content);
 * which is a safe alternative to
 * scriptEl.text = content;
 * The latter can result in executing untrusted code unless it is ensured that
 * the code is loaded from a trustworthy resource.
 * @param script The script element whose content is being set.
 * @param content The content to assign.
 */
export declare function setScriptContent(script: HTMLScriptElement, content: SafeScript): void;
/**
 * Safely assigns a URL to a Location object's href property.
 *
 * If url is of type SafeUrl, its value is unwrapped and assigned to
 * loc's href property.  If url is of type string however, it is first sanitized
 * using SafeUrl.sanitize.
 *
 * Example usage:
 * setLocationHref(document.location, redirectUrl);
 * which is a safe alternative to
 * document.location.href = redirectUrl;
 * The latter can result in XSS vulnerabilities if redirectUrl is a
 * user-/attacker-controlled value.
 * @param loc The Location object whose href property is to be assigned to.
 * @param url The URL to assign.
 */
export declare function setLocationHref(loc: Location, url: string | SafeUrl): void;
/**
 * Safely assigns the URL of a Location object.
 *
 * If url is of type SafeUrl, its value is unwrapped and
 * passed to Location#assign. If url is of type string however, it is
 * first sanitized using SafeUrl.sanitize.
 *
 * Example usage:
 * assignLocation(document.location, newUrl);
 * which is a safe alternative to
 * document.location.assign(newUrl);
 * The latter can result in XSS vulnerabilities if newUrl is a
 * user-/attacker-controlled value.
 *
 * This has the same behaviour as setLocationHref, however some test
 * mock Location.assign instead of a property assignment.
 * @param loc The Location object which is to be assigned.
 * @param url The URL to assign.
 */
export declare function assignLocation(loc: Location, url: string | SafeUrl): void;
/**
 * Safely replaces the URL of a Location object.
 *
 * If url is of type SafeUrl, its value is unwrapped and
 * passed to Location#replace. If url is of type string however, it is
 * first sanitized using SafeUrl.sanitize.
 *
 * Example usage:
 * replaceLocation(document.location, newUrl);
 * which is a safe alternative to
 * document.location.replace(newUrl);
 * The latter can result in XSS vulnerabilities if newUrl is a
 * user-/attacker-controlled value.
 * @param loc The Location object which is to be replaced.
 * @param url The URL to assign.
 */
export declare function replaceLocation(loc: Location, url: string | SafeUrl): void;
/**
 * Safely opens a URL in a new window (via window.open).
 *
 * If url is of type SafeUrl, its value is unwrapped and passed in to
 * window.open.  If url is of type string however, it is first sanitized
 * using SafeUrl.sanitize.
 *
 * Note that this function does not prevent leakages via the referer that is
 * sent by window.open. It is advised to only use this to open 1st party URLs.
 *
 * Example usage:
 * openInWindow(url);
 * which is a safe alternative to
 * window.open(url);
 * The latter can result in XSS vulnerabilities if url is a
 * user-/attacker-controlled value.
 * @param url The URL to open.
 * @param opt_openerWin Window of which to call the .open() method. Defaults to the global window.
 * @param opt_name Name of the window to open in. Can be _top, etc as allowed by window.open(). This accepts string for legacy reasons. Pass Const if possible.
 * @param opt_specs Comma-separated list of specifications, same as in window.open().
 * @return Window the url was opened in.
 */
export declare function openInWindow(url: string | SafeUrl, opt_openerWin?: Window | null, opt_name?: Const | string, opt_specs?: string): Window | null;
/**
 * Parses the HTML as 'text/html'.
 * @param html The HTML to be parsed.
 */
export declare function parseFromStringHtml(parser: DOMParser, html: SafeHtml): Document;
/**
 * Parses the string.
 * @param content Note: We don't have a special type for XML or SVG supported by this function so we use SafeHtml.
 */
export declare function parseFromString(parser: DOMParser, content: SafeHtml, type: string): Document;
/**
 * Safely creates an HTMLImageElement from a Blob.
 *
 * Example usage:
 * createImageFromBlob(blob);
 * which is a safe alternative to
 * image.src = createObjectUrl(blob)
 * The latter can result in executing malicious same-origin scripts from a bad
 * Blob.
 * @param blob The blob to create the image from.
 * @return The image element created from the blob.
 */
export declare function createImageFromBlob(blob: Blob): HTMLImageElement;
/**
 * Creates a DocumentFragment by parsing html in the context of a Range.
 * @param range The Range object starting from the context node to create a fragment in.
 * @param html HTML to create a fragment from.
 */
export declare function createContextualFragment(range: Range, html: SafeHtml): DocumentFragment | null;
/**
 * Returns CSP script nonce, if set for any <script> tag.
 * @param opt_window The window context used to retrieve the nonce. Defaults to global context.
 * @return CSP nonce or empty string if no nonce is present.
 */
export declare function getScriptNonce(opt_window?: Window | null): string;
/**
 * Returns CSP style nonce, if set for any <style> or <link rel="stylesheet">
 * tag.
 * @param opt_window The window context used to retrieve the nonce. Defaults to global context.
 * @return CSP nonce or empty string if no nonce is present.
 */
export declare function getStyleNonce(opt_window?: Window | null): string;

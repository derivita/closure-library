import { SafeHtml } from '../html/safehtml.js';
import { SafeScript } from '../html/safescript.js';
import { SafeStyle } from '../html/safestyle.js';
import { SafeStyleSheet } from '../html/safestylesheet.js';
import { SafeUrl } from '../html/safeurl.js';
import { TrustedResourceUrl } from '../html/trustedresourceurl.js';
import { Dir } from '../i18n/bidi.js';
export /**
 * A type of textual content.
 *
 * This is an enum of type Object so that these values are unforgeable.
 */ type SanitizedContentKind = object;
export declare const SanitizedContentKind: {
    HTML: {
        sanitizedContentKindHtml: boolean;
    } | {
        sanitizedContentKindHtml?: undefined;
    };
    JS: {
        sanitizedContentJsChars: boolean;
    } | {
        sanitizedContentJsChars?: undefined;
    };
    URI: {
        sanitizedContentUri: boolean;
    } | {
        sanitizedContentUri?: undefined;
    };
    TRUSTED_RESOURCE_URI: {
        sanitizedContentTrustedResourceUri: boolean;
    } | {
        sanitizedContentTrustedResourceUri?: undefined;
    };
    ATTRIBUTES: {
        sanitizedContentHtmlAttribute: boolean;
    } | {
        sanitizedContentHtmlAttribute?: undefined;
    };
    STYLE: {
        sanitizedContentStyle: boolean;
    } | {
        sanitizedContentStyle?: undefined;
    };
    CSS: {
        sanitizedContentCss: boolean;
    } | {
        sanitizedContentCss?: undefined;
    };
};
/**
 * A string-like object that carries a content-type and a content direction.
 *
 * IMPORTANT! Do not create these directly, nor instantiate the subclasses.
 * Instead, use a trusted, centrally reviewed library as endorsed by your team
 * to generate these objects. Otherwise, you risk accidentally creating
 * SanitizedContent that is attacker-controlled and gets evaluated unescaped in
 * templates.
 */
export declare class SanitizedContent {
    /**
     * A string-like object that carries a content-type and a content direction.
     *
     * IMPORTANT! Do not create these directly, nor instantiate the subclasses.
     * Instead, use a trusted, centrally reviewed library as endorsed by your team
     * to generate these objects. Otherwise, you risk accidentally creating
     * SanitizedContent that is attacker-controlled and gets evaluated unescaped in
     * templates.
     */
    constructor();
    private noStructuralTyping_closure_goog_soy_data_SanitizedContent;
    /**
     * The context in which this content is safe from XSS attacks.
     */
    contentKind: SanitizedContentKind | null;
    /**
     * The content's direction; null if unknown and thus to be estimated when
     * necessary.
     */
    contentDir: Dir | null;
    /**
     * The already-safe content.
     */
    protected content: string;
    /**
     * Gets the already-safe content.
     */
    getContent(): string;
    toString(): any;
    /**
     * Converts sanitized content of kind HTML into SafeHtml
     */
    toSafeHtml(): SafeHtml;
    renderElement: any;
    renderAsElement: (() => Element) | undefined;
    /**
     * Converts sanitized content of kind URI into SafeUrl without modification.
     */
    toSafeUrl(): SafeUrl;
}
/**
 * Content of type {@link SanitizedContentKind.HTML}.
 *
 * The content is a string of HTML that can safely be embedded in a PCDATA
 * context in your app.  If you would be surprised to find that an HTML
 * sanitizer produced `s` (e.g.  it runs code or fetches bad URLs) and
 * you wouldn't write a template that produces `s` on security or privacy
 * grounds, then don't pass `s` here. The default content direction is
 * unknown, i.e. to be estimated when necessary.
 */
export declare class SanitizedHtml extends SanitizedContent {
    /**
     * Content of type {@link SanitizedContentKind.HTML}.
     *
     * The content is a string of HTML that can safely be embedded in a PCDATA
     * context in your app.  If you would be surprised to find that an HTML
     * sanitizer produced `s` (e.g.  it runs code or fetches bad URLs) and
     * you wouldn't write a template that produces `s` on security or privacy
     * grounds, then don't pass `s` here. The default content direction is
     * unknown, i.e. to be estimated when necessary.
     */
    constructor();
    private noStructuralTyping_closure_goog_soy_data_SanitizedHtml;
    /**
     * Checks if the value could be used as the Soy type {html}.
     */
    static isCompatibleWith(value: any): boolean;
    /**
     * Checks if the value could be used as the Soy type {html}.
     * Strict: disallows strings.
     */
    static isCompatibleWithStrict(value: any): boolean;
}
/**
 * Content of type {@link SanitizedContentKind.JS}.
 *
 * The content is JavaScript source that when evaluated does not execute any
 * attacker-controlled scripts. The content direction is LTR.
 */
export declare class SanitizedJs extends SanitizedContent {
    /**
     * Content of type {@link SanitizedContentKind.JS}.
     *
     * The content is JavaScript source that when evaluated does not execute any
     * attacker-controlled scripts. The content direction is LTR.
     */
    constructor();
    private noStructuralTyping_closure_goog_soy_data_SanitizedJs;
    /**
     * Checks if the value could be used as the Soy type {js}.
     */
    static isCompatibleWith(value: any): boolean;
    /**
     * Checks if the value could be used as the Soy type {js}.
     * Strict: disallows strings.
     */
    static isCompatibleWithStrict(value: any): boolean;
    /**
     * Converts sanitized content of kind JS into SafeScript without modification.
     */
    toSafeScript(): SafeScript;
}
/**
 * Content of type {@link SanitizedContentKind.URI}.
 *
 * The content is a URI chunk that the caller knows is safe to emit in a
 * template. The content direction is LTR.
 */
export declare class SanitizedUri extends SanitizedContent {
    /**
     * Content of type {@link SanitizedContentKind.URI}.
     *
     * The content is a URI chunk that the caller knows is safe to emit in a
     * template. The content direction is LTR.
     */
    constructor();
    private noStructuralTyping_closure_goog_soy_data_SanitizedUri;
    /**
     * Checks if the value could be used as the Soy type {uri}.
     */
    static isCompatibleWith(value: any): boolean;
    /**
     * Checks if the value could be used as the Soy type {uri}.
     * Strict: disallows strings.
     */
    static isCompatibleWithStrict(value: any): boolean;
}
/**
 * Content of type
 * {@link SanitizedContentKind.TRUSTED_RESOURCE_URI}.
 *
 * The content is a TrustedResourceUri chunk that is not under attacker control.
 * The content direction is LTR.
 */
export declare class SanitizedTrustedResourceUri extends SanitizedContent {
    /**
     * Content of type
     * {@link SanitizedContentKind.TRUSTED_RESOURCE_URI}.
     *
     * The content is a TrustedResourceUri chunk that is not under attacker control.
     * The content direction is LTR.
     */
    constructor();
    private noStructuralTyping_closure_goog_soy_data_SanitizedTrustedResourceUri;
    /**
     * Converts sanitized content into TrustedResourceUrl without modification.
     */
    toTrustedResourceUrl(): TrustedResourceUrl;
    /**
     * Checks if the value could be used as the Soy type {trusted_resource_uri}.
     */
    static isCompatibleWith(value: any): boolean;
    /**
     * Checks if the value could be used as the Soy type {trusted_resource_uri}.
     * Strict: disallows strings.
     */
    static isCompatibleWithStrict(value: any): boolean;
}
/**
 * Content of type {@link SanitizedContentKind.ATTRIBUTES}.
 *
 * The content should be safely embeddable within an open tag, such as a
 * key="value" pair. The content direction is LTR.
 */
export declare class SanitizedHtmlAttribute extends SanitizedContent {
    /**
     * Content of type {@link SanitizedContentKind.ATTRIBUTES}.
     *
     * The content should be safely embeddable within an open tag, such as a
     * key="value" pair. The content direction is LTR.
     */
    constructor();
    private noStructuralTyping_closure_goog_soy_data_SanitizedHtmlAttribute;
    /**
     * Checks if the value could be used as the Soy type {attribute}.
     */
    static isCompatibleWith(value: any): boolean;
    /**
     * Checks if the value could be used as the Soy type {attribute}.
     * Strict: disallows strings.
     */
    static isCompatibleWithStrict(value: any): boolean;
}
/**
 * Content of type {@link SanitizedContentKind.CSS}.
 *
 * The content is non-attacker-exploitable CSS, such as {@code @import url(x)}.
 * The content direction is LTR.
 */
export declare class SanitizedCss extends SanitizedContent {
    /**
     * Content of type {@link SanitizedContentKind.CSS}.
     *
     * The content is non-attacker-exploitable CSS, such as {@code @import url(x)}.
     * The content direction is LTR.
     */
    constructor();
    private noStructuralTyping_closure_goog_soy_data_SanitizedCss;
    /**
     * Checks if the value could be used as the Soy type {css}.
     */
    static isCompatibleWith(value: any): boolean;
    /**
     * Checks if the value could be used as the Soy type {css}.
     * Strict: disallows strings.
     */
    static isCompatibleWithStrict(value: any): boolean;
    /**
     * Converts SanitizedCss into SafeStyleSheet.
     * Note: SanitizedCss in Soy represents both SafeStyle and SafeStyleSheet in
     * Closure. It's about to be split so that SanitizedCss represents only
     * SafeStyleSheet.
     */
    toSafeStyleSheet(): SafeStyleSheet;
    /**
     * Converts SanitizedCss into SafeStyle.
     */
    toSafeStyle(): SafeStyle;
}

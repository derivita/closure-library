import { HtmlSanitizer } from './htmlsanitizer.js';
import { Const } from '../../string/const.js';
import type { HtmlSanitizerAttributePolicy } from './htmlsanitizer.js';
/**
 * Extends the tag whitelist with the list of tags provided. If the tag is
 * blacklisted, this method also removes it from the blacklist.
 *
 * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
 * that the new tags do not introduce untrusted code execution or unsanctioned
 * network activity.
 * @param justification A constant string explaining why the addition of these tags to the whitelist is safe. May include a security review ticket number.
 * @param builder The builder whose tag whitelist should be extended.
 * @param tags A list of additional tags to allow through the sanitizer. The tag names are case-insensitive.
 */
export declare function alsoAllowTags(justification: Const, builder: HtmlSanitizer.Builder, tags: string[]): HtmlSanitizer.Builder;
/**
 * Installs custom attribute policies for the attributes provided in the list.
 * This can be used either on non-whitelisted attributes, effectively extending
 * the attribute whitelist, or on attributes that are whitelisted and already
 * have a policy, to override their policies.
 *
 * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
 * that the new tags do not introduce untrusted code execution or unsanctioned
 * network activity.
 * @param justification A constant string explaining why the addition of these attributes to the whitelist is safe. May include a security review ticket number.
 * @param builder The builder whose attribute whitelist should be extended.
 * @param attrs A list of attributes whose policy should be overridden. Attributes can come in of two forms: - string: allow all values and just trim whitespaces for this attribute on all tags. - HtmlSanitizerAttributePolicy: allows specifying a policy for a particular tag. The tagName can be '*', which means all tags. If no policy is passed, the default is allow all values and just trim whitespaces. The tag and attribute names are case-insensitive.
 */
export declare function alsoAllowAttributes(justification: Const, builder: HtmlSanitizer.Builder, attrs: (string | HtmlSanitizerAttributePolicy)[]): HtmlSanitizer.Builder;

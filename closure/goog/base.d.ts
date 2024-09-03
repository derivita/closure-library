var COMPILED:boolean;
function JSCompiler_renameProperty(prop:string, object:unknown = undefined):string;

// Type definitions for trusted-types 2.0
// Project: https://github.com/WICG/trusted-types
// Definitions by: Jakub Vrana <https://github.com/vrana>
//                 Damien Engels <https://github.com/engelsdamien>
//                 Emanuel Tesar <https://github.com/siegrift>
//                 Bjarki <https://github.com/bjarkler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

declare namespace __TrustedTypesLib__ {
  export type FnNames = keyof TrustedTypePolicyOptions;
  export type Args<Options extends TrustedTypePolicyOptions, K extends FnNames> = Parameters<NonNullable<Options[K]>>;
}

// The Window object is augmented with the following properties in browsers that
// support Trusted Types. 

declare interface Window {
  // `trustedTypes` is left intentionally optional to make sure that
  // people handle the case when their code is running in a browser not
  // supporting trustedTypes.
  trustedTypes?: TrustedTypePolicyFactory | undefined;
  TrustedHTML: typeof TrustedHTML;
  TrustedScript: typeof TrustedScript;
  TrustedScriptURL: typeof TrustedScriptURL;
  TrustedTypePolicyFactory: typeof TrustedTypePolicyFactory;
  TrustedTypePolicy: typeof TrustedTypePolicy;
}

declare class TrustedHTML {
  private constructor(); // To prevent instantiting with 'new'.
  private brand: true; // To prevent structural typing.
}

declare class TrustedScript {
  private constructor(); // To prevent instantiting with 'new'.
  private brand: true; // To prevent structural typing.
}

declare class TrustedScriptURL {
  private constructor(); // To prevent instantiting with 'new'.
  private brand: true; // To prevent structural typing.
}

declare abstract class TrustedTypePolicyFactory {
  createPolicy<Options extends TrustedTypePolicyOptions>(
      policyName: string,
      policyOptions?: Options,
  ): Pick<TrustedTypePolicy<Options>, 'name' | Extract<keyof Options, __TrustedTypesLib__.FnNames>>;
  isHTML(value: unknown): value is TrustedHTML;
  isScript(value: unknown): value is TrustedScript;
  isScriptURL(value: unknown): value is TrustedScriptURL;
  readonly emptyHTML: TrustedHTML;
  readonly emptyScript: TrustedScript;
  getAttributeType(tagName: string, attribute: string, elementNs?: string, attrNs?: string): string | null;
  getPropertyType(tagName: string, property: string, elementNs?: string): string | null;
  readonly defaultPolicy: TrustedTypePolicy | null;
}

declare abstract class TrustedTypePolicy<Options extends TrustedTypePolicyOptions = TrustedTypePolicyOptions> {
  readonly name: string;
  createHTML(...args: __TrustedTypesLib__.Args<Options, 'createHTML'>): TrustedHTML;
  createScript(...args: __TrustedTypesLib__.Args<Options, 'createScript'>): TrustedScript;
  createScriptURL(...args: __TrustedTypesLib__.Args<Options, 'createScriptURL'>): TrustedScriptURL;
}

declare interface TrustedTypePolicyOptions {
  createHTML?: ((input: string, ...arguments: any[]) => string) | undefined;
  createScript?: ((input: string, ...arguments: any[]) => string) | undefined;
  createScriptURL?: ((input: string, ...arguments: any[]) => string) | undefined;
}

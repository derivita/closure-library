import { builders } from "ast-types";
import type * as kinds from "ast-types/lib/gen/kinds";
import {
  CLOSURE_TO_TYPESCRIPT,
  NOT_TEMPLATIZED_IN_TYPESCRIPT,
} from "./clutz_platform_symbols";

export interface ConversionOptions {
  return?: boolean;
  parens?: boolean;
  param?: boolean;
  noexpand?: boolean;
}

export const globalAliases = new Set<string>();

abstract class BaseType {
  nullable?: boolean = undefined;
  optional = false;

  abstract toTypeScript(options?: ConversionOptions): kinds.TSTypeKind;
  annotation(options: ConversionOptions = {}): kinds.TSTypeAnnotationKind {
    return builders.tsTypeAnnotation(this.toTypeScript(options));
  }
  abstract expression(): kinds.TSExpressionWithTypeArgumentsKind;

  addToParam(
    param: kinds.IdentifierKind | kinds.RestElementKind,
    isRest = false
  ): kinds.IdentifierKind | kinds.RestElementKind {
    if (param.type !== "Identifier") {
      throw new Error("Unexpected param type: " + param.type);
    }
    if (this.optional) {
      param.optional = true;
    }
    param.typeAnnotation = this.annotation({ param: true });
    return param;
  }

  abstract equals(other: ClosureType): boolean;
}

export class BasicType extends BaseType {
  public readonly kind: "basic" = "basic";

  public readonly name: string;

  constructor(name: string) {
    super();
    this.nullable = false;
    switch (name) {
      case "":
      case "*":
        // Should this be unknown?
        // Docs say : it is an error to attempt to do operations on a value of this type or access any properties on it. You also cannot assign it to any other type variable without a cast.
        this.name = "any";
        break;
      case "?":
        this.name = "any";
        break;
      case "Array":
        this.name = "any";
        // @ts-expect-error
        return new TemplateType("Array", this);
      case "Object":
        this.nullable = true;
        // Is this the best option?
        this.name = "object";
        break;
      case "void":
      case "undefined":
        this.name = "undefined";
        break;
      case "null":
        this.name = "null";
        break;
      case "number":
      case "string":
      case "boolean":
      case "symbol":
        this.name = name;
        break;
      default:
        if (CLOSURE_TO_TYPESCRIPT.hasOwnProperty(name)) {
          this.name = CLOSURE_TO_TYPESCRIPT[name];
        } else {
          this.name = name;
        }
        this.nullable = true;
    }
  }
  toTypeScript(options: ConversionOptions = {}): kinds.TSTypeKind {
    let type: kinds.TSTypeKind;
    switch (this.name) {
      case "number":
        type = builders.tsNumberKeyword();
        break;
      case "string":
        type = builders.tsStringKeyword();
        break;
      case "boolean":
        type = builders.tsBooleanKeyword();
        break;
      case "symbol":
        type = builders.tsSymbolKeyword();
        break;
      case "any":
        type = builders.tsAnyKeyword();
        break;
      case "unknown":
        type = builders.tsUnknownKeyword();
        break;
      case "void":
      case "undefined":
        type = options.return
          ? builders.tsVoidKeyword()
          : builders.tsUndefinedKeyword();
        break;
      case "null":
        type = builders.tsNullKeyword();
        break;
      case "Object":
        // Is this the best option?
        type = builders.tsObjectKeyword();
        break;
      default:
        if (globalAliases.has(this.name)) {
          type = builders.tsTypeReference(builders.identifier('Global' + this.name));
        } else {
          type = builders.tsTypeReference(builders.identifier(this.name));
        }
    }
    return nullify(type, this.nullable, this.optional, options);
  }
  expression(): kinds.TSExpressionWithTypeArgumentsKind {
    return builders.tsExpressionWithTypeArguments(
      builders.identifier(this.name)
    );
  }

  equals(other: ClosureType): boolean {
    return this.kind == other.kind && this.name == other.name;
  }
}

export const UnknownType = new BasicType("");
export const StringType = new BasicType("string");

export class TemplateType extends BaseType {
  public readonly kind: "template" = "template";
  public readonly name: string;

  constructor(name: string, public readonly params: ClosureType[]) {
    super();
    if (params.length == 0 || NOT_TEMPLATIZED_IN_TYPESCRIPT.has(name)) {
      // @ts-expect-error
      return new BasicType(name);
    }
    if (CLOSURE_TO_TYPESCRIPT.hasOwnProperty(name)) {
      this.name = CLOSURE_TO_TYPESCRIPT[name];
    } else {
      this.name = name;
    }
    this.params = params;
    this.nullable = true;
  }

  toTypeScript(options: ConversionOptions = {}): kinds.TSTypeKind {
    let type: kinds.TSTypeKind;
    if (this.name == "Array") {
      type = builders.tsArrayType(
        (this.params[0] || UnknownType).toTypeScript({ parens: true })
      );
    } else if (this.name == "Object") {
      let [keyType, valueType] = this.params;
      if (!valueType) {
        [valueType, keyType] = [keyType, StringType];
      }
      if (
        !keyType ||
        keyType.kind != "basic" ||
        ["string", "number"].indexOf(keyType.name) == -1
      ) {
        keyType = StringType;
      }
      type = builders.tsTypeLiteral([
        builders.tsIndexSignature(
          [
            builders.identifier.from({
              name: "key",
              typeAnnotation: keyType.annotation(),
            }),
          ],
          valueType.annotation()
        ),
      ]);
    } else {
      type = builders.tsTypeReference(
        builders.identifier(this.name),
        builders.tsTypeParameterInstantiation(
          this.params.map((p) => p.toTypeScript())
        )
      );
    }
    return nullify(type, this.nullable, this.optional, options);
  }

  expression(): kinds.TSExpressionWithTypeArgumentsKind {
    return builders.tsExpressionWithTypeArguments(
      builders.identifier(this.name),
      builders.tsTypeParameterInstantiation(
        this.params.map((p) => p.toTypeScript())
      )
    );
  }

  equals(other: ClosureType): boolean {
    return this.kind == other.kind && this.name == other.name && this.params.length == other.params.length && this.params.every((p, i) => p.equals(other.params[i]));
  }
}

export class UnionType extends BaseType {
  public readonly kind: "union" = "union";
  public readonly types: ClosureType[];
  constructor(types: ClosureType[]) {
    super();
    this.types = types;
    this.nullable = types.some((x) => x.nullable != false);
    this.optional = types.some((x) => x.optional);
  }
  toTypeScript(options: ConversionOptions = {}): kinds.TSTypeKind {
    const types = this.types.map((t) =>
      t.kind == "function"
        ? t.toTypeScript({ parens: true })
        : t.toTypeScript({ noexpand: true })
    );
    return nullify(types, this.nullable, this.optional, options);
  }
  expression(
    options: ConversionOptions = {}
  ): kinds.TSExpressionWithTypeArgumentsKind {
    throw new Error("can't extend/implement union types");
  }

  equals(other: ClosureType): boolean {
    return this.kind == other.kind && this.types.length == other.types.length && this.types.every((t, i) => t.equals(other.types[i]));
  }
}

export class TypeofType extends BaseType {
  public readonly kind: "typeof" = "typeof";
  public readonly name: string;
  constructor(name: string) {
    super();
    this.name = name;
    this.nullable = false;
    this.optional = false;
  }
  toTypeScript(options: ConversionOptions = {}): kinds.TSTypeKind {
    return builders.tsTypeQuery(builders.identifier(this.name));
  }
  expression(): kinds.TSExpressionWithTypeArgumentsKind {
    // TS allows extending typeof expressions, but that's not used in closure.
    throw new Error("can't extend/implement typeof types");
  }

  equals(other: ClosureType): boolean {
    return this.kind == other.kind && this.name == other.name;
  }
}

const defaultParam = builders.restElement(builders.identifier("args"));
defaultParam.typeAnnotation = builders.tsTypeAnnotation(
  builders.tsArrayType(builders.tsAnyKeyword())
);

export interface FunctionProperties {
  params?: ClosureType[];
  returnType?: ClosureType;
  templateParams?: string[];
  thisType?: ClosureType;
  newType?: ClosureType;
}

export class FunctionType extends BaseType {
  public readonly kind: "function" = "function";
  public readonly params?: ClosureType[];
  public readonly returnType?: ClosureType;
  public readonly templateParams?: string[];
  public readonly thisType?: ClosureType;
  public readonly newType?: ClosureType;

  constructor({
    params,
    returnType,
    templateParams,
    thisType,
    newType,
  }: FunctionProperties) {
    super();
    this.nullable = false;
    this.optional = false;
    this.params = params;
    this.returnType = returnType;
    this.templateParams = templateParams;
    this.thisType = thisType;
    this.newType = newType;
  }

  toTypeScript(options: ConversionOptions = {}): kinds.TSTypeKind {
    let params: (kinds.IdentifierKind | kinds.RestElementKind)[];
    if (!this.params) {
      params = [defaultParam];
    } else {
      params = this.params.map((x, i) =>
        x.addToParam(
          builders.identifier(
            i < 26 ? String.fromCharCode(97 + i) : `p${i - 26}`
          )
        )
      );
    }

    const ret = this.returnType
      ? this.returnType.toTypeScript({ parens: true, return: true })
      : builders.tsAnyKeyword();

    if (this.newType) {
      return builders.tsTypeLiteral([
        builders.tsConstructSignatureDeclaration(
          params,
          builders.tsTypeAnnotation(this.newType.toTypeScript())
        ),
      ]);
    } else {
      if (this.thisType) {
        params.unshift(
          builders.identifier.from({
            name: "this",
            typeAnnotation: builders.tsTypeAnnotation(
              this.thisType.toTypeScript({ param: true })
            ),
          })
        );
      }
      let type: kinds.TSTypeKind = builders.tsFunctionType.from({
        parameters: params,
        typeAnnotation: builders.tsTypeAnnotation(ret),
        typeParameters: this.templateParams ? builders.tsTypeParameterDeclaration(this.templateParams.map(x => builders.tsTypeParameter.from({ name: x }))) : null,
      });
      if (options.parens) {
        type = builders.tsParenthesizedType(type);
      }
      return nullify(type, this.nullable, this.optional, options);
    }
  }
  expression(): kinds.TSExpressionWithTypeArgumentsKind {
    throw new Error("can't extend/implement function types");
  }
  functionDeclaration(name:string): kinds.FunctionDeclarationKind {
    const ftype = this.toTypeScript() as kinds.TSFunctionTypeKind;
    const body = builders.returnStatement.from({
      argument: builders.nullLiteral(),
      comments: [builders.commentLine("@ts-ignore", true)]
    });
    return builders.functionDeclaration.from({
      id: builders.identifier(name),
      body: builders.blockStatement([body]),
      params: ftype.parameters || [],
      typeParameters: ftype.typeParameters || null,
      returnType: ftype.typeAnnotation || null,
    })
  }

  equals(other: ClosureType): boolean {
    return this == other;
  }
}

export class RecordType extends BaseType {
  public readonly kind: "record" = "record";
  public readonly properties: Map<string, ClosureType | undefined>;
  constructor(properties: Map<string, ClosureType | undefined>) {
    super();
    this.properties = properties;
    this.nullable = false;
    this.optional = false;
  }
  toTypeScript(options: ConversionOptions = {}): kinds.TSTypeKind {
    return builders.tsTypeLiteral(
      Array.from(this.properties.entries()).map(([k, v]) => {
        let optional = false;
        let typeAnnotation: kinds.TSTypeAnnotationKind | null = null;
        if (v?.optional) {
          optional = true;
          v.optional = false;
          typeAnnotation = v.annotation();
          v.optional = true;
        } else if (v) {
          typeAnnotation = v.annotation();
        }
        return builders.tsPropertySignature.from({
          key: builders.stringLiteral(k),
          typeAnnotation,
          optional,
        });
      })
    );
  }
  expression(): kinds.TSExpressionWithTypeArgumentsKind {
    throw new Error("can't extend/implement record types");
  }
  equals(other: ClosureType): boolean {
    return this == other;
  }
}

export class RestParamType extends BaseType {
  public readonly kind: "rest" = "rest";
  constructor(public readonly type: ClosureType) {
    super();
    this.nullable = false;
    this.optional = false;
  }
  toTypeScript(options: ConversionOptions = {}): kinds.TSTypeKind {
    return builders.tsArrayType(
      this.type.toTypeScript({ param: true, parens: true })
    );
  }
  expression(): kinds.TSExpressionWithTypeArgumentsKind {
    throw new Error("can't extend/implement rest param types");
  }
  addToParam(
    param: kinds.IdentifierKind | kinds.RestElementKind
  ): kinds.IdentifierKind | kinds.RestElementKind {
    if (param.type !== "RestElement") {
      param = builders.restElement(param);
    }
    param.typeAnnotation = this.annotation();
    return param;
  }
  equals(other: ClosureType): boolean {
    return this.kind == other.kind && this.type.equals(other.type);
  }
}

function nullify(
  type: kinds.TSTypeKind | kinds.TSTypeKind[],
  nullable: boolean | undefined,
  optional: boolean,
  options: ConversionOptions
): kinds.TSTypeKind {
  if (!Array.isArray(type)) {
    type = [type];
  }
  if (options.noexpand) {
    return makeUnion(type, options);
  } else {
    let extras: kinds.TSTypeKind[] = [];
    if (nullable != false) {
      extras.push(builders.tsNullKeyword());
    }
    if (optional && !options.param) {
      extras.push(builders.tsUndefinedKeyword());
    }
    return makeUnion([...type, ...extras], options);
  }
}

function makeUnion(
  types: kinds.TSTypeKind[],
  options: ConversionOptions
): kinds.TSTypeKind {
  if (types.length == 1) {
    return types[0];
  }
  const union = builders.tsUnionType(types.map(t => t.type == "TSFunctionType" ? builders.tsParenthesizedType(t) : t));
  return options.parens ? builders.tsParenthesizedType(union) : union;
}

export type ClosureType =
  | BasicType
  | TemplateType
  | TypeofType
  | FunctionType
  | RecordType
  | RestParamType
  | UnionType;

export function makeType(
  name: string,
  params?: ClosureType[]
): BasicType | TemplateType {
  // Iterable is also generic and used without a param, but there's also non-generic types with the same name.
  if (["IArrayLike", "IThenable", "Iterator"].includes(name) && !params) {
    params = [makeType('?')];
  }
  if (params) {
    return new TemplateType(name, params);
  } else {
    return new BasicType(name);
  }
}

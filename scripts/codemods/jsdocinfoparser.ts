/*
 * Copyright 2007 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  BasicType,
  ClosureType,
  FunctionProperties,
  FunctionType,
  RecordType,
  RestParamType,
  TemplateType,
  TypeofType,
  UnionType,
  UnknownType,
  makeType,
} from "./closure_type";
import { JsDocToken, JsDocTokenStream } from "./jsdoctokenstream";

type AnnotationInfo = null | {
  info?: string;
  type?: TypeInfo;
  templateVars?: string[];
  ttl?: Map<string, string>;
};
export interface ParameterInfo {
  name: string;
  description?: string;
  type?: TypeInfo;
}
export type TypeInfo = ClosureType;
export const Unknown = UnknownType;

export class JSDocInfo {
  description?: string;
  annotations: Map<Annotation, AnnotationInfo> = new Map();
  parameters?: ParameterInfo[];
  supressions?: Set<string>;
  visibility?: "public" | "private" | "protected" | "package";
  extendedTypes?: TypeInfo[];
  implementedTypes?: TypeInfo[];

  get type(): ClosureType | undefined {
    return this.annotations.get(Annotation.TYPE)?.type ?? undefined;
  }

  functionType(): FunctionType | undefined {
    if (this.annotations.has(Annotation.RETURN) || this.annotations.has(Annotation.PARAM)) {
      const f:FunctionProperties = {
        params:this.parameters?.map(p => p.type || Unknown),
        returnType: this.annotations.get(Annotation.RETURN)?.type,
        thisType: this.annotations.get(Annotation.THIS)?.type,
        templateParams: this.annotations.get(Annotation.TEMPLATE)?.templateVars,
      }
      return new FunctionType(f);
    }
    const type = this.type;
    if (type?.kind == "function") {
      return type;
    }
  }
}

enum State {
  SEARCHING_ANNOTATION,
  SEARCHING_NEWLINE,
  NEXT_IS_ANNOTATION,
}

enum WhitespaceOption {
  /**
   * Preserves all whitespace and formatting. Needed for licenses and purposely
   * formatted text.
   */
  PRESERVE,

  /** Preserves newlines but trims the output. */
  TRIM,

  /** Removes newlines and turns the output into a single line string. */
  SINGLE_LINE,
}

export enum Annotation {
  NG_INJECT = "ngInject",
  ABSTRACT = "abstract",
  ALTERNATE_MESSAGE_ID = "alternateMessageId",
  AUTHOR = "author",
  CLOSURE_PRIMITIVE = "closurePrimitive",
  CLOSURE_UNAWARE_CODE = "closureUnaware",
  CONSTANT = "const",
  COLLAPSIBLE_OR_BREAK_MY_CODE = "collapsibleOrBreakMyCode",
  CONSTRUCTOR = "constructor",
  CUSTOM_ELEMENT = "customElement",
  DEFINE = "define",
  DEPRECATED = "deprecated",
  DESC = "desc",
  DICT = "dict",
  REQUIRE_INLINING = "requireInlining",
  ENUM = "enum",
  ENHANCE = "enhance",
  EXPORT = "export",
  EXTENDS = "extends",
  EXTERNS = "externs",
  FILE_OVERVIEW = "fileoverview",
  FINAL = "final",
  HIDDEN = "hidden",
  IDGENERATOR = "idGenerator",
  IMPLEMENTS = "implements",
  IMPLICIT_CAST = "implicitCast",
  INHERIT_DOC = "inheritDoc",
  INTERFACE = "interface",
  RECORD = "record",
  LENDS = "lends",
  LICENSE = "license",
  LOG_TYPE_IN_COMPILER = "logTypeInCompiler",
  MEANING = "meaning",
  MIXIN_CLASS = "mixinClass",
  MIXIN_FUNCTION = "mixinFunction",
  MODIFIES = "modifies",
  MODS = "mods",
  NO_COLLAPSE = "nocollapse",
  NO_COMPILE = "nocompile",
  NO_COVERAGE = "nocoverage",
  NO_DTS = "nodts",
  NO_INLINE = "noinline",
  NO_SIDE_EFFECTS = "nosideeffects",
  OVERRIDE = "override",
  PACKAGE = "package",
  PARAM = "param",
  POLYMER = "polymer",
  POLYMER_BEHAVIOR = "polymerBehavior",
  PRESERVE = "preserve",
  PRIVATE = "private",
  PROTECTED = "protected",
  PROVIDE_GOOG = "provideGoog",
  PROVIDE_ALREADY_PROVIDED = "provideAlreadyProvided",
  PUBLIC = "public",
  PURE_OR_BREAK_MY_CODE = "pureOrBreakMyCode",
  RETURN = "return",
  SASS_GENERATED_CSS_TS = "sassGeneratedCssTs",
  SEE = "see",
  SOY_MODULE = "soyModule",
  SOY_TEMPLATE = "soyTemplate",
  STRUCT = "struct",
  SUPPRESS = "suppress",
  TEMPLATE = "template",
  THIS = "this",
  THROWS = "throws",
  TYPE = "type",
  TYPEDEF = "typedef",
  TYPE_SUMMARY = "typeSummary",
  UNRESTRICTED = "unrestricted",
  WIZACTION = "wizaction",
  TS_TYPE = "tsType",
  WIZ_ANALYZER = "wizAnalyzer",
  WIZCALLBACK = "wizcallback",
}

const annotationAliases = new Map<string, Annotation>([
  ["argument", Annotation.PARAM],
  ["constant", Annotation.CONSTANT],
  ["copyright", Annotation.LICENSE],
  ["owner", Annotation.AUTHOR],
  ["returns", Annotation.RETURN],
]);

function getAnnotation(annotation: string): Annotation | undefined {
  if (annotationAliases.has(annotation)) {
    return annotationAliases.get(annotation);
  }
  return annotation as Annotation;
}

interface ExtendedTypeInfo {
  type: TypeInfo;
  lineNo: number;
  charNo: number;
}

const primitiveTypes = new Set(["number", "string", "boolean", "symbol"]);

export class JSDocInfoParser {
  jsdoc = new JSDocInfo();
  private state = State.SEARCHING_ANNOTATION;

  constructor(
    private stream: JsDocTokenStream,
    private comment: string,
    private filename: string
  ) {}

  public parse(): boolean {
    this.state = State.SEARCHING_ANNOTATION;
    this.skipEOLs();

    let token = this.next();

    // Always record that we have a comment.
    [this.jsdoc.description, token] = this.extractBlockComment(token);

    return this.parseHelperLoop(token, []);
  }

  private parseHelperLoop(
    token: JsDocToken,
    extendedTypes: ExtendedTypeInfo[]
  ): boolean {
    while (true) {
      const name = getTokenName(token);
      switch (token) {
        case JsDocToken.ANNOTATION:
          if (this.state == State.SEARCHING_ANNOTATION) {
            this.state = State.SEARCHING_NEWLINE;
            token = this.parseAnnotation(token, extendedTypes);
          } else {
            token = this.next();
          }
          break;

        case JsDocToken.EOC:
        case JsDocToken.EOF:
          return true;

        case JsDocToken.EOL:
          if (this.state == State.SEARCHING_NEWLINE) {
            this.state = State.SEARCHING_ANNOTATION;
          }
          token = this.next();
          break;

        default:
          if (
            token == JsDocToken.STAR &&
            this.state == State.SEARCHING_ANNOTATION
          ) {
            token = this.next();
          } else {
            this.state = State.SEARCHING_NEWLINE;
            token = this.eatTokensUntilEOL();
          }
          break;
      }
    }
  }

  private parseAnnotation(
    token: JsDocToken,
    extendedTypes: ExtendedTypeInfo[]
  ): JsDocToken {
    // JSTypes are represented as Rhino AST nodes, and then resolved later.

    let type: TypeInfo | undefined = undefined;
    let lineno = this.stream.getLineno();
    let charno = this.stream.getCharno();

    let annotationName = this.stream.getString();
    let annotation = getAnnotation(annotationName);
    if (!annotation) {
      //   addParserWarning(Msg.BAD_JSDOC_TAG, annotationName);
    } else {
      // Mark the beginning of the annotation.
      //   jsdocBuilder.markAnnotation(annotationName, lineno,
      //   charno);Annotation.

      switch (annotation) {
        case Annotation.ABSTRACT:
        case Annotation.UNRESTRICTED:
        case Annotation.STRUCT:
        case Annotation.DICT:
        case Annotation.CONSTRUCTOR:
        case Annotation.INTERFACE:
        case Annotation.EXTERNS:
        case Annotation.FILE_OVERVIEW: // fileoverview does have a body, but we
        // don't care.
        case Annotation.RECORD:
        case Annotation.NO_COMPILE:
        case Annotation.NO_DTS:
        case Annotation.NO_COLLAPSE:
        case Annotation.NO_INLINE:
        case Annotation.PROVIDE_GOOG:
        case Annotation.INHERIT_DOC:
        case Annotation.OVERRIDE:
          this.jsdoc.annotations.set(annotation, null);
          return this.eatUntilEOLIfNotAnnotation();

        case Annotation.DEPRECATED:
        case Annotation.DESC:
        case Annotation.TS_TYPE:
        case Annotation.LICENSE:
        case Annotation.SEE:
        case Annotation.PRESERVE:
          // Find the reason/description, if any.
          const [info, resultToken] = this.extractMultilineTextualBlock(token);
          this.jsdoc.annotations.set(annotation, { info });
          return resultToken;

        case Annotation.ENUM:
          token = this.next();
          lineno = this.stream.getLineno();
          charno = this.stream.getCharno();

          type = undefined;
          if (token != JsDocToken.EOL && token != JsDocToken.EOC) {
            let typeNode = this.parseAndRecordTypeNode(token);
            if (typeNode != null && typeNode.kind == "basic") {
              let typeName = typeNode.name;
              if (!primitiveTypes.has(typeName)) {
                typeNode.nullable = false;
              }
            }
            type = typeNode;
          } else {
            this.restoreLookAhead(token);
          }

          if (type == null) {
            type = makeType("number");
          }
          this.jsdoc.annotations.set(annotation, { type });
          return this.eatUntilEOLIfNotAnnotation();

        case Annotation.EXTENDS:
        case Annotation.IMPLEMENTS:
          this.skipEOLs();
          token = this.next();
          lineno = this.stream.getLineno();
          charno = this.stream.getCharno();
          let matchingRc = false;

          if (token == JsDocToken.LEFT_CURLY) {
            token = this.next();
            matchingRc = true;
          }

          if (token == JsDocToken.STRING) {
            let typeNode = this.parseAndRecordTypeNode(token, true);

            lineno = this.stream.getLineno();
            charno = this.stream.getCharno();

            typeNode = this.wrapNode(JsDocToken.BANG, typeNode);
            type = typeNode;

            if (annotation == Annotation.EXTENDS) {
              this.jsdoc.extendedTypes ??= [];
              this.jsdoc.extendedTypes.push(type!);
            } else {
              this.jsdoc.implementedTypes ??= [];
              this.jsdoc.implementedTypes.push(type!);
            }
            token = this.next();
            if (matchingRc) {
              if (token == JsDocToken.RIGHT_CURLY) {
                token = this.next();
              }
            }
          }
          token = this.eatUntilEOLIfNotAnnotation(token);
          return token;

        case Annotation.LENDS:
          this.skipEOLs();

          matchingRc = false;
          if (this.match(JsDocToken.LEFT_CURLY)) {
            token = this.next();
            matchingRc = true;
          }

          if (this.match(JsDocToken.STRING)) {
            let lendsExpression = this.parseNameExpression(this.next())!;
            this.jsdoc.annotations.set(annotation, {
              type: makeType(lendsExpression),
            });
          }

          return this.eatUntilEOLIfNotAnnotation();

        case Annotation.CLOSURE_PRIMITIVE:
          this.skipEOLs();
          return this.parseClosurePrimitiveTag(this.next());

        case Annotation.THROWS: {
          lineno = this.stream.getLineno();
          charno = this.stream.getCharno();
          if (!this.lookAheadForAnnotation()) {
            let [throwsAnnotation, throwsToken] =
              this.extractMultilineTextualBlock(token);
            throwsAnnotation = throwsAnnotation.trim();
            if (throwsAnnotation.length > 0) {
              this.jsdoc.annotations.set(annotation, {
                info: throwsAnnotation,
              });
            }
            token = throwsToken;
          }
          return token;
        }

        case Annotation.PARAM:
          this.skipEOLs();
          token = this.next();
          lineno = this.stream.getLineno();
          charno = this.stream.getCharno();
          type = undefined;

          let hasParamType = false;
          this.jsdoc.parameters ??= [];

          if (token == JsDocToken.LEFT_CURLY) {
            type = this.parseAndRecordParamTypeNode(token);

            if (type == null) {
              // parsing error reported during recursive descent
              // recovering parsing
              return this.eatUntilEOLIfNotAnnotation();
            }
            this.skipEOLs();
            token = this.next();
            lineno = this.stream.getLineno();
            charno = this.stream.getCharno();
            hasParamType = true;
          }

          let name: string | undefined = undefined;
          let isBracketedParam = JsDocToken.LEFT_SQUARE == token;
          if (isBracketedParam) {
            token = this.next();
          }

          if (JsDocToken.STRING == token) {
            name = this.stream.getString();

            if (isBracketedParam) {
              token = this.next();

              // Throw out JsDocToolkit's "default" parameter
              // annotation.  It makes no sense under our type
              // system.
              if (JsDocToken.EQUALS == token) {
                token = this.next();
                if (JsDocToken.STRING == token) {
                  token = this.next();
                }
              }

              if (JsDocToken.RIGHT_SQUARE == token) {
                // Make the type expression optional, if it isn't
                // already.
                type = this.wrapNode(JsDocToken.EQUALS, type);
              }
            }
          }

          if (name == null) {
            token = this.eatUntilEOLIfNotAnnotation(token);
            return token;
          }

          let [paramDescription, paramToken] =
            this.extractMultilineTextualBlock(token);
          this.jsdoc.parameters.push({
            name,
            type,
            description: paramDescription,
          });

          token = paramToken;

          return token;

        case Annotation.SUPPRESS:
          token = this.parseSuppressTag(this.next());
          return token;

        case Annotation.TEMPLATE: {
          if (!this.jsdoc.annotations.has(Annotation.TEMPLATE)) {
            this.jsdoc.annotations.set(Annotation.TEMPLATE, {
              templateVars: [],
            });
          }
          let templateInfo = this.jsdoc.annotations.get(Annotation.TEMPLATE)!;
          if (typeof templateInfo !== "object") {
            throw new Error();
          }
          // Attempt to parse a template bound type.
          let boundTypeExpression: TypeInfo | undefined = undefined;
          if (this.match(JsDocToken.LEFT_CURLY)) {
            // addParserWarning(
            //   Msg.JSDOC_TEMPLATE_BOUNDEDGENERICS_USED,
            //   lineno,
            //   charno
            // );

            let boundTypeNode = this.parseTypeExpressionAnnotation(this.next());
            if (boundTypeNode != null) {
              boundTypeExpression = boundTypeNode;
            }
          }

          // Collect any names of template types.
          let templateNames: string[] = [];
          if (!this.match(JsDocToken.COLON)) {
            // Skip colons so as not to consume TTLs accidentally.
            // Parse a list of comma separated names.
            do {
              let templateName = this.parseNameExpression(this.next());

              if (templateName && templateName.match(/^[a-zA-Z0-9_$]+$/)) {
                templateNames.push(templateName);
              }
            } while (this.eatIfMatch(JsDocToken.COMMA));
          }

          // Look for some TTL. Always use TRIM for template TTL expressions.
          let ttlExpr: string | undefined;
          if (this.match(JsDocToken.COLON)) {
            // TODO(nickreid): Fix `extractMultilineTextualBlock` so the result
            // includes the current token. At present, it reads the stream
            // directly and bypasses any previously read tokens.
            [ttlExpr, token] = this.extractMultilineTextualBlock(
              this.current(),
              WhitespaceOption.TRIM,
              false
            );
          } else {
            token = this.eatUntilEOLIfNotAnnotation(this.current());
          }

          // Validate the number of declared template names, which depends on
          // bounds and TTL.
          switch (templateNames.length) {
            case 0:
              // addTypeWarning(Msg.JSDOC_TEMPLATE_NAME_MISSING, lineno, charno);
              return token; // There's nothing we can connect a bound or TTL
            // to.
            case 1:
              break;
            default:
              // if (boundTypeExpression != null || ttlAst != null) {
              //   addTypeWarning(
              //     Msg.JSDOC_TEMPLATE_MULTIPLEDECLARATION,
              //     lineno,
              //     charno
              //   );
              // }
              break;
          }

          if (boundTypeExpression != null && ttlExpr != null) {
            // addTypeWarning(Msg.JSDOC_TEMPLATE_BOUNDSWITHTTL, lineno, charno);
            return token; // It's undecidable what the user intent was.
          }

          // Based on the form form of the declaration, record the information
          // in the JsDocInfo.
          if (ttlExpr != null) {
            templateInfo.templateVars!.push(templateNames[0]);
            templateInfo.ttl ??= new Map();
            templateInfo.ttl.set(templateNames[0], ttlExpr);
          } else if (boundTypeExpression != null) {
            templateInfo.templateVars!.push(templateNames[0]);
          } else {
            templateInfo.templateVars!.push(...templateNames);
          }

          return token;
        }

        case Annotation.IDGENERATOR:
          token = this.parseIdGeneratorTag(this.next());
          return token;

        case Annotation.CONSTANT:
        case Annotation.FINAL:
        case Annotation.DEFINE:
        case Annotation.EXPORT:
        case Annotation.RETURN:
        case Annotation.PACKAGE:
        case Annotation.PRIVATE:
        case Annotation.PROTECTED:
        case Annotation.PUBLIC:
        case Annotation.THIS:
        case Annotation.TYPE:
        case Annotation.TYPEDEF:
          lineno = this.stream.getLineno();
          charno = this.stream.getCharno();

          let typeNode: TypeInfo | undefined;
          let hasType = this.lookAheadForType();
          let isAlternateTypeAnnotation =
            annotation == Annotation.PACKAGE ||
            annotation == Annotation.PRIVATE ||
            annotation == Annotation.PROTECTED ||
            annotation == Annotation.PUBLIC ||
            annotation == Annotation.CONSTANT ||
            annotation == Annotation.FINAL ||
            annotation == Annotation.EXPORT;
          let canSkipTypeAnnotation =
            isAlternateTypeAnnotation || annotation == Annotation.RETURN;
          type = undefined;

          // if (annotation == Annotation.RETURN && !hasType) {
          //   addMissingTypeWarning(stream.getLineno(), stream.getCharno());
          // }

          if (hasType || !canSkipTypeAnnotation) {
            this.skipEOLs();
            token = this.next();
            typeNode = this.parseAndRecordTypeNode(token);

            if (annotation == Annotation.THIS) {
              typeNode = this.wrapNode(JsDocToken.BANG, typeNode);
            }
            type = typeNode;
          }

          // The error was reported during recursive descent
          // recovering parsing
          let hasError = type == null && !canSkipTypeAnnotation;
          if (!hasError) {
            // Record types for @type.
            // If the @package, @private, @protected, or @public annotations
            // have a type attached, pretend that they actually wrote:
            // @type {type}\n@private
            // This will have some weird behavior in some cases
            // (for example, @private can now be used as a type-cast),
            // but should be mostly OK.
            if (
              (type != null && isAlternateTypeAnnotation) ||
              annotation == Annotation.TYPE
            ) {
              this.jsdoc.annotations.set(Annotation.TYPE, { type });
            }

            let isAnnotationNext = this.lookAheadForAnnotation();
            let info: string | undefined = undefined;

            switch (annotation) {
              case Annotation.CONSTANT:
              case Annotation.FINAL:
                this.jsdoc.annotations.set(annotation, null);
                break;

              case Annotation.DEFINE:
                if (!isAnnotationNext) {
                  [info, token] = this.extractMultilineTextualBlock(token);
                }
                this.jsdoc.annotations.set(annotation, { type, info });
                return token;

              case Annotation.EXPORT:
                if (isAnnotationNext) {
                  this.jsdoc.annotations.set(annotation, null);
                } else {
                  [info, token] = this.extractMultilineTextualBlock(token);
                  this.jsdoc.annotations.set(annotation, { info });
                }
                return token;

              case Annotation.PRIVATE:
              case Annotation.PACKAGE:
              case Annotation.PROTECTED:
              case Annotation.PUBLIC:
                this.jsdoc.visibility = annotation;
                if (isAnnotationNext) {
                  this.jsdoc.annotations.set(annotation, null);
                } else {
                  [info, token] = this.extractMultilineTextualBlock(token);
                  this.jsdoc.annotations.set(annotation, { info });
                  return token;
                }
                break;

              case Annotation.RETURN:
                if (type == null) {
                  type = makeType("?");
                }

                // TODO(johnlenz): The extractMultilineTextualBlock method
                // and friends look directly at the stream, regardless of
                // last token read, so we don't want to read the first
                // "STRING" out of the stream.

                // Find the return's description (if applicable).
                if (!isAnnotationNext) {
                  [info, token] = this.extractMultilineTextualBlock(token);
                } else {
                  token = this.eatUntilEOLIfNotAnnotation();
                }

                this.jsdoc.annotations.set(annotation, { type, info });
                return token;

              case Annotation.THIS:
              case Annotation.TYPEDEF:
                this.jsdoc.annotations.set(annotation, { type });
                break;

              default:
                break;
            }
          }

          return this.eatUntilEOLIfNotAnnotation();
      }
    }

    return this.next();
  }

  /**
   * Extracts the top-level block comment from the JsDoc comment, if any. This
   * method differs from the extractMultilineTextualBlock in that it terminates
   * under different conditions (it doesn't have the same prechecks), it does
   * not first read in the remaining of the current line and its conditions for
   * ignoring the "*" (STAR) are different.
   *
   * @param token The starting token.
   * @return The extraction information.
   */
  private extractBlockComment(token: JsDocToken) {
    return this.extractMultilineComment(
      token,
      WhitespaceOption.TRIM,
      false,
      false
    );
  }

  /**
   * Parse a {@code @suppress} tag of the form {@code @suppress&#123;warning1|warning2&#125;}.
   *
   * @param token The current token.
   */
  private parseSuppressTag(token: JsDocToken) {
    if (token != JsDocToken.LEFT_CURLY) {
      return token;
    } else {
      let suppressions = new Set<string>();
      while (true) {
        if (this.match(JsDocToken.STRING)) {
          let name = this.stream.getString();

          suppressions.add(this.stream.getString());
          token = this.next();
        } else {
          return token;
        }

        if (this.match(JsDocToken.PIPE, JsDocToken.COMMA)) {
          token = this.next();
        } else {
          break;
        }
      }

      if (this.match(JsDocToken.RIGHT_CURLY)) {
        token = this.next();
        // Find the suppressions' description (if applicable).
        if (token != JsDocToken.ANNOTATION) {
          let [info, resultToken] = this.extractMultilineTextualBlock(token);
          this.jsdoc.supressions = suppressions;
          this.jsdoc.annotations.set(Annotation.SUPPRESS, { info });
          token = resultToken;
        } else {
          token = this.eatUntilEOLIfNotAnnotation();
          this.jsdoc.supressions = suppressions;
        }
      }
      return token;
    }
  }

  /**
   * Parse a {@code @closurePrimitive} tag
   *
   * @param token The current token.
   */
  private parseClosurePrimitiveTag(token: JsDocToken) {
    if (token != JsDocToken.LEFT_CURLY) {
      return token;
    } else if (this.match(JsDocToken.STRING)) {
      let name = this.stream.getString();
      token = this.next();
    } else {
      return token;
    }

    if (this.match(JsDocToken.RIGHT_CURLY)) {
      token = this.next();
    }
    return this.eatUntilEOLIfNotAnnotation();
  }

  /**
   * Parse a {@code @idgenerator} tag of the form {@code @idgenerator} or
   * {@code @idgenerator&#123;consistent&#125;}.
   *
   * @param token The current token.
   */
  private parseIdGeneratorTag(token: JsDocToken) {
    let idgenKind = "unique";
    if (token == JsDocToken.LEFT_CURLY) {
      if (this.match(JsDocToken.STRING)) {
        let name = this.stream.getString();

        idgenKind = name;
        token = this.next();
      }

      if (this.match(JsDocToken.RIGHT_CURLY)) {
        token = this.next();
      }
    }
    this.jsdoc.annotations.set(Annotation.IDGENERATOR, { info: idgenKind });
    return token;
  }

  /**
   * Looks for a parameter type expression at the current token and if found, returns it. Note that
   * this method consumes input.
   *
   * @param token The current token.
   * @param lineno The line of the type expression.
   * @param startCharno The starting character position of the type expression.
   * @param matchingLC Whether the type expression starts with a "{".
   * @param onlyParseSimpleNames If true, only simple type names are parsed (via a call to
   *     parseTypeNameAnnotation instead of parseTypeExpressionAnnotation).
   * @return The type expression found or null if none.
   */
  private parseAndRecordTypeNode(
    token: JsDocToken,
    onlyParseSimpleNames = false
  ): TypeInfo | undefined {
    let type: TypeInfo | undefined;
    if (onlyParseSimpleNames) {
      type = this.parseTypeNameAnnotation(token);
    } else {
      type = this.parseTypeExpressionAnnotation(token);
    }
    if (type) {
      this.jsdoc.annotations.set(Annotation.TYPE, { type });
    }
    return type;
  }

  /**
   * Looks for a type expression at the current token and if found, returns it. Note that this
   * method consumes input.
   *
   * <p>Parameter type expressions are special for two reasons:
   *
   * <ol>
   *   <li>They must begin with '{', to distinguish type names from param names.
   *   <li>They may end in '=', to denote optionality.
   * </ol>
   *
   * @param token The current token.
   * @return The type expression found or null if none.
   */
  private parseAndRecordParamTypeNode(token: JsDocToken) {
    let lineno = this.stream.getLineno();
    let startCharno = this.stream.getCharno();

    let typeNode = this.parseParamTypeExpressionAnnotation(token);
    // recordTypeNode(lineno, startCharno, typeNode, true);
    return typeNode;
  }

  /** Converts a JSDoc token to its string representation. */
  private tokenToString(token: JsDocToken): string {
    switch (token) {
      case JsDocToken.ANNOTATION:
        return "@" + this.stream.getString();

      case JsDocToken.BANG:
        return "!";

      case JsDocToken.COMMA:
        return ",";

      case JsDocToken.COLON:
        return ":";

      case JsDocToken.RIGHT_ANGLE:
        return ">";

      case JsDocToken.LEFT_SQUARE:
        return "[";

      case JsDocToken.LEFT_CURLY:
        return "{";

      case JsDocToken.LEFT_PAREN:
        return "(";

      case JsDocToken.LEFT_ANGLE:
        return "<";

      case JsDocToken.QMARK:
        return "?";

      case JsDocToken.PIPE:
        return "|";

      case JsDocToken.RIGHT_SQUARE:
        return "]";

      case JsDocToken.RIGHT_CURLY:
        return "}";

      case JsDocToken.RIGHT_PAREN:
        return ")";

      case JsDocToken.STAR:
        return "*";

      case JsDocToken.ITER_REST:
        return "...";

      case JsDocToken.EQUALS:
        return "=";

      case JsDocToken.STRING:
        return this.stream.getString();

      default:
        throw new Error(token.toString());
    }
  }
  /**
   * Extracts the text found on the current line and all subsequent until either an annotation, end
   * of comment or end of file is reached. Note that if this method detects an end of line as the
   * first token, it will quit immediately (indicating that there is no text where it was expected).
   * Note that token = info.token; should be called after this method is used to update the token
   * properly in the parser.
   *
   * @param token The start token.
   * @param option How to handle whitespace.
   * @param includeAnnotations Whether the extracted text may include annotations. If set to false,
   *     text extraction will stop on the first encountered annotation token.
   * @return The extraction information.
   */
  private extractMultilineTextualBlock(
    token: JsDocToken,
    option = WhitespaceOption.SINGLE_LINE,
    includeAnnotations = false
  ): [string, JsDocToken] {
    if (
      token == JsDocToken.EOC ||
      token == JsDocToken.EOL ||
      token == JsDocToken.EOF
    ) {
      return ["", token];
    }
    return this.extractMultilineComment(
      token,
      option,
      true,
      includeAnnotations
    );
  }

  /**
   * Extracts text from the stream until the end of the comment, end of the
   * file, or an annotation token is encountered. If the text is being extracted
   * for a JSDoc marker, the first line in the stream will always be included in
   * the extract text.
   *
   * @param token The starting token.
   * @param option How to handle whitespace.
   * @param isMarker Whether the extracted text is for a JSDoc marker or a block
   * comment.
   * @param includeAnnotations Whether the extracted text may include
   * annotations. If set to false, text extraction will stop on the first
   * encountered annotation token.
   * @return The extraction information.
   */
  extractMultilineComment(
    token: JsDocToken,
    option: WhitespaceOption,
    isMarker: boolean,
    includeAnnotations: boolean
  ): [string, JsDocToken] {
    let builder: string[] = [];
    let startLineno = -1;
    let startCharno = -1;

    if (isMarker) {
      this.stream.update();
      startLineno = this.stream.getLineno();
      startCharno = this.stream.getCharno() + 1;

      let line = this.getRemainingJSDocLine();
      if (option != WhitespaceOption.PRESERVE) {
        line = line.trim();
      }
      builder.push(line);

      this.state = State.SEARCHING_ANNOTATION;
      token = this.next();
    }

    let ignoreStar = false;

    // Track the start of the line to count whitespace that
    // the tokenizer skipped. Because this case is rare, it's easier
    // to do this here than in the tokenizer.
    let lineStartChar = -1;

    do {
      switch (token) {
        case JsDocToken.STAR:
          if (ignoreStar) {
            // Mark the position after the star as the new start of the line.
            lineStartChar = this.stream.getCharno() + 1;
            ignoreStar = false;
          } else {
            // The star is part of the comment.
            this.padLine(builder, lineStartChar, option);
            lineStartChar = -1;
            builder.push("*");
          }

          token = this.next();
          while (token == JsDocToken.STAR) {
            if (lineStartChar != -1) {
              this.padLine(builder, lineStartChar, option);
              lineStartChar = -1;
            }
            builder.push("*");
            token = this.next();
          }
          continue;

        case JsDocToken.EOL:
          if (option != WhitespaceOption.SINGLE_LINE) {
            builder.push("\n");
          }

          ignoreStar = true;
          lineStartChar = 0;
          token = this.next();
          continue;

        default:
          ignoreStar = false;
          this.state = State.SEARCHING_ANNOTATION;

          let isEOC = token == JsDocToken.EOC;
          if (!isEOC) {
            this.padLine(builder, lineStartChar, option);
            lineStartChar = -1;
          }

          if (
            token == JsDocToken.EOC ||
            token == JsDocToken.EOF ||
            // When we're capturing a license block, annotations
            // in the block are OK.
            (token == JsDocToken.ANNOTATION && !includeAnnotations)
          ) {
            let multilineText = builder.join("");

            if (option != WhitespaceOption.PRESERVE) {
              multilineText = multilineText.trim();
            }

            if (isMarker && multilineText !== "") {
              let endLineno = this.stream.getLineno();
              let endCharno = this.stream.getCharno();
              // this.jsdoc.markText(
              //   multilineText,
              //   startLineno,
              //   startCharno,
              //   endLineno,
              //   endCharno
              // );
            }

            return [multilineText, token];
          }

          builder.push(this.tokenToString(token));

          let line = this.getRemainingJSDocLine();

          if (option != WhitespaceOption.PRESERVE) {
            line = trimEnd(line);
          }

          builder.push(line);
          token = this.next();
      }
    } while (true);
  }

  private padLine(
    builder: string[],
    lineStartChar: number,
    option: WhitespaceOption
  ): void {
    if (lineStartChar != -1 && option == WhitespaceOption.PRESERVE) {
      let numSpaces = this.stream.getCharno() - lineStartChar;
      builder.push(" ".repeat(numSpaces));
    } else if (builder.length > 0) {
      let lastString = builder[builder.length - 1];
      let lastChar = lastString[lastString.length - 1];
      if (lastChar != "\n" || option == WhitespaceOption.PRESERVE) {
        builder.push(" ");
      }
    }
  }

  // Based on ES4 grammar proposed on July 10, 2008.
  // http://wiki.ecmascript.org/doku.php?id=spec:spec
  // Deliberately written to line up with the actual grammar rules,
  // for maximum flexibility.

  // TODO(nicksantos): The current implementation tries to maintain backwards
  // compatibility with previous versions of the spec whenever we can.
  // We should try to gradually withdraw support for these.

  /** TypeExpressionAnnotation := TypeExpression | '{' TopLevelTypeExpression '}' */
  private parseTypeExpressionAnnotation(token: JsDocToken) {
    if (token == JsDocToken.LEFT_CURLY) {
      this.skipEOLs();
      let typeNode = this.parseTopLevelTypeExpression(this.next());
      if (typeNode != null) {
        this.skipEOLs();
        if (this.match(JsDocToken.RIGHT_CURLY)) {
          this.next();
        }
      }

      return typeNode;
    } else {
      return this.parseTypeExpression(token);
    }
  }

  /**
   * Parse a ParamTypeExpression:
   *
   * <pre>
   * ParamTypeExpression :=
   *     OptionalParameterType |
   *     TopLevelTypeExpression |
   *     '...' TopLevelTypeExpression
   *
   * OptionalParameterType :=
   *     TopLevelTypeExpression '='
   * </pre>
   */
  private parseParamTypeExpression(token: JsDocToken) {
    let restArg = false;
    if (token == JsDocToken.ITER_REST) {
      token = this.next();
      if (token == JsDocToken.RIGHT_CURLY) {
        this.restoreLookAhead(token);
        return this.wrapNode(JsDocToken.ITER_REST, Unknown);
      }
      restArg = true;
    }

    let typeNode = this.parseTopLevelTypeExpression(token);
    if (typeNode != null) {
      this.skipEOLs();
      if (restArg) {
        typeNode = this.wrapNode(JsDocToken.ITER_REST, typeNode);
      } else if (this.match(JsDocToken.EQUALS)) {
        this.next();
        this.skipEOLs();
        typeNode = this.wrapNode(JsDocToken.EQUALS, typeNode);
      }
    }

    return typeNode;
  }

  /** ParamTypeExpressionAnnotation := '{' ParamTypeExpression '}' */
  private parseParamTypeExpressionAnnotation(token: JsDocToken) {
    this.skipEOLs();

    let typeNode = this.parseParamTypeExpression(this.next());
    if (typeNode != null) {
      if (this.match(JsDocToken.RIGHT_CURLY)) {
        this.next();
      }
    }

    return typeNode;
  }

  /** TypeNameAnnotation := TypeName | '{' TypeName '}' */
  private parseTypeNameAnnotation(token: JsDocToken): TypeInfo | undefined {
    if (token == JsDocToken.LEFT_CURLY) {
      this.skipEOLs();
      let typeNode = this.parseTypeName(this.next());
      if (typeNode != null) {
        this.skipEOLs();
        if (this.match(JsDocToken.RIGHT_CURLY)) {
          this.next();
        }
      }
      return typeNode;
    } else {
      return this.parseTypeName(token);
    }
  }

  /**
   * TopLevelTypeExpression := TypeExpression | TypeUnionList
   *
   * <p>We made this rule up, for the sake of backwards compatibility.
   */
  private parseTopLevelTypeExpression(token: JsDocToken) {
    let typeExpr = this.parseTypeExpression(token);
    if (typeExpr != null) {
      // top-level unions are allowed
      if (this.match(JsDocToken.PIPE)) {
        this.next();
        this.skipEOLs();
        token = this.next();
        return this.parseUnionTypeWithAlternate(token, typeExpr);
      }
    }
    return typeExpr;
  }

  /**
   * TypeExpressionList := TopLevelTypeExpression | TopLevelTypeExpression ',' TypeExpressionList
   */
  private parseTypeExpressionList(
    typeName: string,
    token: JsDocToken
  ): TypeInfo[] | undefined {
    let typeExpr = this.parseTopLevelTypeExpression(token);
    if (typeExpr == null) {
      return undefined;
    }
    let typeList: TypeInfo[] = [];
    let numTypeExprs = 1;
    typeList.push(typeExpr);
    while (this.match(JsDocToken.COMMA)) {
      this.next();
      this.skipEOLs();
      typeExpr = this.parseTopLevelTypeExpression(this.next());
      if (typeExpr == null) {
        return undefined;
      }
      numTypeExprs++;
      typeList.push(typeExpr);
    }
    if (typeName == "Object" && numTypeExprs == 1) {
      // Unlike other generic types, Object<V> means Object<?, V>, not Object<V, ?>.
      typeList.unshift(makeType("?"));
    }
    return typeList;
  }

  /**
   * TypeExpression := BasicTypeExpression | '?' BasicTypeExpression | '!' BasicTypeExpression |
   * BasicTypeExpression '?' | BasicTypeExpression '!' | '?'
   */
  private parseTypeExpression(token: JsDocToken): TypeInfo | undefined {
    // Save the source position before we consume additional tokens.
    let lineno = this.stream.getLineno();
    let charno = this.stream.getCharno();
    switch (token) {
      case JsDocToken.QMARK:
        // A QMARK could mean that a type is nullable, or that it's unknown.
        // We use look-ahead 1 to determine whether it's unknown. Otherwise,
        // we assume it means nullable. There are 8 cases:
        // {?} - right curly
        // ? - EOF (possible when the parseTypeString method is given a bare type expression)
        // {?=} - equals
        // {function(?, number)} - comma
        // {function(number, ?)} - right paren
        // {function(): ?|number} - pipe
        // {Array.<?>} - greater than
        // /** ? */ - EOC (inline types)
        // I'm not a big fan of using look-ahead for this, but it makes
        // the type language a lot nicer.
        token = this.next();
        if (
          token == JsDocToken.COMMA ||
          token == JsDocToken.EQUALS ||
          token == JsDocToken.RIGHT_SQUARE ||
          token == JsDocToken.RIGHT_CURLY ||
          token == JsDocToken.RIGHT_PAREN ||
          token == JsDocToken.PIPE ||
          token == JsDocToken.RIGHT_ANGLE ||
          token == JsDocToken.EOC ||
          token == JsDocToken.EOL ||
          token == JsDocToken.EOF
        ) {
          this.restoreLookAhead(token);
          return this.newStringNode("?");
        }

        return this.wrapNode(
          JsDocToken.QMARK,
          this.parseBasicTypeExpression(token)
        );
      case JsDocToken.BANG:
        return this.wrapNode(
          JsDocToken.BANG,
          this.parseBasicTypeExpression(this.next())
        );
      default:
        let basicTypeExpr = this.parseBasicTypeExpression(token);
        lineno = this.stream.getLineno();
        charno = this.stream.getCharno();
        if (basicTypeExpr != null) {
          if (this.match(JsDocToken.QMARK)) {
            this.next();
            return this.wrapNode(JsDocToken.QMARK, basicTypeExpr);
          } else if (this.match(JsDocToken.BANG)) {
            this.next();
            return this.wrapNode(JsDocToken.BANG, basicTypeExpr);
          }
        }

        return basicTypeExpr;
    }
  }

  /**
   * ContextTypeExpression := BasicTypeExpression | '?' For expressions on the right hand side of a
   * this: or new:
   */
  private parseContextTypeExpression(token: JsDocToken) {
    if (token == JsDocToken.QMARK) {
      return this.newStringNode("?");
    } else {
      return this.parseBasicTypeExpression(token);
    }
  }

  /**
   * BasicTypeExpression := '*' | 'null' | 'undefined' | TypeName | FunctionType | UnionType |
   * RecordType | TypeofType
   */
  private parseBasicTypeExpression(token: JsDocToken): TypeInfo | undefined {
    if (token == JsDocToken.STAR) {
      return this.newStringNode("*");
    } else if (token == JsDocToken.LEFT_CURLY) {
      this.skipEOLs();
      return this.parseRecordType(this.next());
    } else if (token == JsDocToken.LEFT_PAREN) {
      this.skipEOLs();
      return this.parseUnionType(this.next());
    } else if (token == JsDocToken.STRING) {
      let string: string = this.stream.getString();
      switch (string) {
        case "function":
          this.skipEOLs();
          return this.parseFunctionType(this.next());
        case "null":
        case "undefined":
          return this.newStringNode(string);
        case "typeof":
          this.skipEOLs();
          return this.parseTypeofType(this.next());
        default:
          return this.parseTypeName(token);
      }
    }

    this.restoreLookAhead(token);
    return this.reportGenericTypeSyntaxWarning();
  }

  private parseNameExpression(token: JsDocToken): string | undefined {
    if (token != JsDocToken.STRING) {
      return undefined;
    }

    let typeName = this.stream.getString();
    while (this.match(JsDocToken.EOL) && typeName.endsWith(".")) {
      this.skipEOLs();
      if (this.match(JsDocToken.STRING)) {
        this.next();
        typeName += this.stream.getString();
      }
    }

    return typeName;
  }

  /**
   * Parse a TypeName:
   *
   * <pre>{@code
   * TypeName := NameExpression | NameExpression TypeApplication
   * TypeApplication := '.'? '<' TypeExpressionList '>'
   * }</pre>
   */
  private parseTypeName(token: JsDocToken): TypeInfo | undefined {
    let typeName: string | undefined = this.parseNameExpression(token);
    if (!typeName) {
      return;
    }

    if (this.match(JsDocToken.LEFT_ANGLE)) {
      this.next();
      this.skipEOLs();
      let memberType = this.parseTypeExpressionList(typeName, this.next());
      if (memberType != null) {
        this.skipEOLs();
        if (!this.match(JsDocToken.RIGHT_ANGLE)) {
          return this.reportTypeSyntaxWarning("JSDOC_MISSING_GT");
        }

        this.next();
      }
      return makeType(typeName, memberType);
    } else {
      return makeType(typeName);
    }
  }

  /** TypeofType := 'typeof' NameExpression | 'typeof' '(' NameExpression ')' */
  private parseTypeofType(token: JsDocToken): TypeInfo | undefined {
    if (token == JsDocToken.LEFT_CURLY) {
      return this.reportTypeSyntaxWarning("JSDOC_UNNECESSARY_BRACES");
    }

    let name = this.parseNameExpression(token);
    if (name == null) {
      return;
    }

    this.skipEOLs();
    return new TypeofType(name);
  }

  /**
   * Parse a FunctionType:
   *
   * <pre>
   * FunctionType := 'function' FunctionSignatureType
   * FunctionSignatureType :=
   *    TypeParameters '(' 'this' ':' TypeName, ParametersType ')' ResultType
   * </pre>
   *
   * <p>The Node that is produced has type Token.FUNCTION but does not look like a typical function
   * node. If there is a 'this:' or 'new:' type, that type is added as a child. Then, if there are
   * parameters, a PARAM_LIST node is added as a child. Finally, if there is a return type, it is
   * added as a child. This means that the parameters could be the first or second child, and the
   * return type could be the first, second, or third child.
   */
  private parseFunctionType(token: JsDocToken): FunctionType | undefined {
    // NOTE(nicksantos): We're not implementing generics at the moment, so
    // just throw out TypeParameters.
    if (token != JsDocToken.LEFT_PAREN) {
      this.restoreLookAhead(token);
      return this.reportTypeSyntaxWarning("JSDOC_MISSING_LP");
    }

    let functionType: FunctionProperties = {
      params: [],
    };
    let parameters: TypeInfo[] | undefined = undefined;
    this.skipEOLs();
    if (!this.match(JsDocToken.RIGHT_PAREN)) {
      token = this.next();

      let hasParams = true;
      if (token == JsDocToken.STRING) {
        let tokenStr: string = this.stream.getString();
        let isThis = "this" == tokenStr;
        let isNew = "new" == tokenStr;
        if (isThis || isNew) {
          if (this.match(JsDocToken.COLON)) {
            this.next();
            this.skipEOLs();
            let contextType = this.parseContextTypeExpression(this.next());
            if (contextType == null) {
              return;
            }
            if (isThis) {
              functionType.thisType = contextType;
            } else {
              functionType.newType = contextType;
            }
          } else {
            return this.reportTypeSyntaxWarning("JSDOC_MISSING_COLON");
          }

          if (this.match(JsDocToken.COMMA)) {
            this.next();
            this.skipEOLs();
            token = this.next();
          } else {
            hasParams = false;
          }
        }
      }

      if (hasParams) {
        let parameters = this.parseParametersType(token);
        if (parameters == null) {
          return;
        }
      }
    }

    if (parameters != null) {
      functionType.params = parameters;
    }

    this.skipEOLs();
    if (!this.match(JsDocToken.RIGHT_PAREN)) {
      return this.reportTypeSyntaxWarning("JSDOC_MISSING_RP");
    }

    this.skipEOLs();
    this.next();
    let resultType = this.parseResultType();
    if (resultType == null) {
      return;
    } else if (resultType !== Unknown) {
      functionType.returnType = resultType;
    }
    return new FunctionType(functionType);
  }

  /**
   * Parse a ParametersType:
   *
   * <pre>
   * ParametersType := RestParameterType | NonRestParametersType
   *     | NonRestParametersType ',' RestParameterType
   * RestParameterType := '...' Identifier
   * NonRestParametersType := ParameterType ',' NonRestParametersType
   *     | ParameterType
   *     | OptionalParametersType
   * OptionalParametersType := OptionalParameterType
   *     | OptionalParameterType, OptionalParametersType
   * OptionalParameterType := ParameterType=
   * ParameterType := TypeExpression | Identifier ':' TypeExpression
   * </pre>
   */
  // NOTE(nicksantos): The official ES4 grammar forces optional and rest
  // arguments to come after the required arguments. Our parser does not
  // enforce this. Instead we allow them anywhere in the function at parse-time,
  // and then warn about them during type resolution.
  //
  // In theory, it might be mathematically nicer to do the order-checking here.
  // But in practice, the order-checking for structural functions is exactly
  // the same as the order-checking for @param annotations. And the latter
  // has to happen during type resolution. Rather than duplicate the
  // order-checking in two places, we just do all of it in type resolution.
  private parseParametersType(token: JsDocToken): TypeInfo[] | undefined {
    let paramsType: TypeInfo[] = [];
    let isVarArgs = false;
    let paramType: TypeInfo | undefined = undefined;
    if (token != JsDocToken.RIGHT_PAREN) {
      do {
        if (paramType != null) {
          // skip past the comma
          this.next();
          this.skipEOLs();
          token = this.next();
        }

        if (token == JsDocToken.ITER_REST) {
          // In the latest ES4 proposal, there are no type constraints allowed
          // on variable arguments. We support the old syntax for backwards
          // compatibility, but we should gradually tear it out.
          this.skipEOLs();
          if (this.match(JsDocToken.RIGHT_PAREN)) {
            paramType = this.wrapNode(JsDocToken.ITER_REST, makeType("any"));
          } else {
            this.skipEOLs();
            paramType = this.wrapNode(
              JsDocToken.ITER_REST,
              this.parseTypeExpression(this.next())
            );
            this.skipEOLs();
          }

          isVarArgs = true;
        } else {
          paramType = this.parseTypeExpression(token);
          if (this.match(JsDocToken.EQUALS)) {
            this.skipEOLs();
            this.next();
            paramType = this.wrapNode(JsDocToken.EQUALS, paramType);
          }
        }

        if (paramType == null) {
          return;
        }
        paramsType.push(paramType);
        if (isVarArgs) {
          break;
        }
      } while (this.match(JsDocToken.COMMA));
    }

    if (isVarArgs && this.match(JsDocToken.COMMA)) {
      return this.reportTypeSyntaxWarning("JSDOC_FUNCTION_VARARGS");
    }

    // The right paren will be checked by parseFunctionType

    return paramsType;
  }

  /** ResultType := <empty> | ':' void | ':' TypeExpression */
  private parseResultType(): TypeInfo | undefined {
    this.skipEOLs();
    if (!this.match(JsDocToken.COLON)) {
      return Unknown;
    }

    this.next();
    this.skipEOLs();
    if (this.match(JsDocToken.STRING) && "void" == this.stream.getString()) {
      this.next();
      makeType("void");
    } else {
      return this.parseTypeExpression(this.next());
    }
  }

  /**
   * UnionType := '(' TypeUnionList ')' TypeUnionList := TypeExpression | TypeExpression '|'
   * TypeUnionList
   *
   * <p>We've removed the empty union type.
   */
  private parseUnionType(token: JsDocToken) {
    return this.parseUnionTypeWithAlternate(token);
  }

  /**
   * Create a new union type, with an alternate that has already been parsed. The alternate may be
   * null.
   */
  private parseUnionTypeWithAlternate(
    token: JsDocToken,
    alternate?: TypeInfo
  ): TypeInfo | undefined {
    let unionTypes: ClosureType[] = [];
    if (alternate != null) {
      unionTypes.push(alternate);
    }

    let expr: TypeInfo | undefined = undefined;
    do {
      if (expr != null) {
        this.skipEOLs();
        token = this.next();
        // this.checkState(token == JsDocToken.PIPE);

        this.skipEOLs();
        token = this.next();
      }
      expr = this.parseTypeExpression(token);
      if (expr == null) {
        return;
      }

      unionTypes.push(expr);
    } while (this.match(JsDocToken.PIPE));

    if (alternate == null) {
      this.skipEOLs();
      if (!this.match(JsDocToken.RIGHT_PAREN)) {
        return this.reportTypeSyntaxWarning("JSDOC_MISSING_RP");
      }
      this.next();
    }
    if (unionTypes.length == 1) {
      return unionTypes[0];
    }
    return new UnionType(unionTypes);
  }

  /** RecordType := '{' FieldTypeList '}' */
  private parseRecordType(token: JsDocToken): RecordType | undefined {
    let fieldTypeList = this.parseFieldTypeList(token);

    if (fieldTypeList == null) {
      return this.reportGenericTypeSyntaxWarning();
    }

    this.skipEOLs();
    if (!this.match(JsDocToken.RIGHT_CURLY)) {
      return this.reportTypeSyntaxWarning("JSDOC_MISSING_RC");
    }

    this.next();

    return new RecordType(fieldTypeList);
  }

  /** FieldTypeList := FieldType | FieldType ',' FieldTypeList */
  private parseFieldTypeList(
    token: JsDocToken
  ): Map<string, TypeInfo | undefined> | undefined {
    let fieldTypeList = new Map<string, TypeInfo | undefined>();

    do {
      let fieldType = this.parseFieldType(token);

      if (fieldType == null) {
        return;
      }

      let [name, type] = fieldType;
      fieldTypeList.set(name, type);

      this.skipEOLs();
      if (!this.match(JsDocToken.COMMA)) {
        break;
      }

      // Move to the comma token.
      this.next();

      // Move to the token past the comma
      this.skipEOLs();

      if (this.match(JsDocToken.RIGHT_CURLY)) {
        // Allow trailing comma (ie, right curly following the comma)
        break;
      }

      token = this.next();
    } while (true);

    return fieldTypeList;
  }

  /** FieldType := FieldName | FieldName ':' TypeExpression */
  private parseFieldType(token: JsDocToken): [string, TypeInfo?] | undefined {
    let fieldName = this.parseFieldName(token);

    if (fieldName == null) {
      return;
    }

    this.skipEOLs();
    if (!this.match(JsDocToken.COLON)) {
      return [fieldName];
    }

    // Move to the colon.
    this.next();

    // Move to the token after the colon and parse
    // the type expression.
    this.skipEOLs();
    let typeExpression = this.parseTypeExpression(this.next());

    if (typeExpression == null) {
      return;
    }
    return [fieldName, typeExpression];
  }

  /** FieldName := NameExpression | StringLiteral | NumberLiteral | ReservedIdentifier */
  private parseFieldName(token: JsDocToken): string | undefined {
    if (token != JsDocToken.STRING) {
      return;
    }
    return this.stream.getString();
  }

  private wrapNode(type: JsDocToken, t: TypeInfo | undefined) {
    if (!t) {
      return;
    }
    switch (type) {
      case JsDocToken.BANG:
        t.nullable = false;
        break;
      case JsDocToken.QMARK:
        t.nullable = true;
        break;
      case JsDocToken.ITER_REST:
        return new RestParamType(t);
      case JsDocToken.EQUALS:
        t.optional = true;
        break;
      default:
        throw new Error("Unknown wrapNode type: " + type);
    }
    return t;
  }

  private newStringNode(s: string): BasicType | TemplateType {
    return makeType(s);
  }

  private reportTypeSyntaxWarning(msg: string) {
    console.log(
      `${
        this.filename
      }:${this.stream.getLineno()}:${this.stream.getCharno()} ${msg}`
    );
    return undefined;
  }

  private reportGenericTypeSyntaxWarning() {
    return this.reportTypeSyntaxWarning("type syntax error");
  }

  private eatUntilEOLIfNotAnnotation(token = this.next()): JsDocToken {
    if (token == JsDocToken.ANNOTATION) {
      this.state = State.SEARCHING_ANNOTATION;
      return token;
    }
    return this.eatTokensUntilEOL(token);
  }

  /**
   * Eats tokens until {@link JsDocToken#EOL} included, and switches back the
   * state to {@link State#SEARCHING_ANNOTATION}.
   */
  private eatTokensUntilEOL(token = this.next()): JsDocToken {
    do {
      if (
        token == JsDocToken.EOL ||
        token == JsDocToken.EOC ||
        token == JsDocToken.EOF
      ) {
        this.state = State.SEARCHING_ANNOTATION;
        return token;
      }
      token = this.next();
    } while (true);
  }

  private unreadToken?: JsDocToken;

  /** Restores the lookahead token to the token stream */
  private restoreLookAhead(token: JsDocToken) {
    this.unreadToken = token;
  }

  /** Tests whether the next symbol of the token stream matches the specific
   * token. */
  private match(token1: JsDocToken, token2?: JsDocToken): boolean {
    this.unreadToken = this.next();
    return this.unreadToken == token1 || this.unreadToken == token2;
  }

  /** If the next token matches {@code expected}, consume it and return {@code
   * true}. */
  private eatIfMatch(token: JsDocToken): boolean {
    if (this.match(token)) {
      this.next();
      return true;
    }
    return false;
  }

  /**
   * Gets the next token of the token stream or the buffered token if a matching
   * was previously made.
   */
  private next(): JsDocToken {
    if (!this.unreadToken) {
      return this.stream.getJsDocToken();
    } else {
      return this.current();
    }
  }

  /** Gets the current token, invalidating it in the process. */
  private current(): JsDocToken {
    const t = this.unreadToken;
    if (t == null) {
      throw new Error("No token available");
    }
    this.unreadToken = undefined;
    return t;
  }

  /**
   * Skips all EOLs and all empty lines in the JSDoc. Call this method if you
   * want the JSDoc entry to span multiple lines.
   */
  private skipEOLs() {
    while (this.match(JsDocToken.EOL)) {
      this.next();
      if (this.match(JsDocToken.STAR)) {
        this.next();
      }
    }
  }

  /** Returns the remainder of the line. */
  private getRemainingJSDocLine(): string {
    let result = this.stream.getRemainingJSDocLine();
    this.unreadToken = undefined;
    return result;
  }

  /**
   * Look ahead for a type annotation by advancing the character stream. Does not modify the token
   * stream. This is kind of a hack, and is only necessary because we use the token stream to parse
   * types, but need the underlying character stream to get JsDoc descriptions.
   *
   * @return Whether we found a type annotation.
   */
  private lookAheadForType() {
    return this.lookAheadFor("{");
  }

  private lookAheadForAnnotation() {
    return this.lookAheadFor("@");
  }

  /**
   * Look ahead by advancing the character stream. Does not modify the token stream.
   *
   * @return Whether we found the char.
   */
  private lookAheadFor(expect: string) {
    let matched = false;
    let c: string | -1;
    while (true) {
      c = this.stream.getChar();
      if (c == " ") {
        continue;
      } else if (c == expect) {
        matched = true;
        break;
      } else {
        break;
      }
    }
    this.stream.ungetChar(c);
    return matched;
  }
}

/**
 * Trim characters from only the end of a string. This method will remove all
 * whitespace characters (defined by TokenUtil.isWhitespace(char), in addition
 * to the characters provided, from the end of the provided string.
 *
 * @param s String to be trimmed
 * @return String with whitespace and characters in extraChars removed from the
 * end.
 */
function trimEnd(s: string) {
  let trimCount = 0;
  while (trimCount < s.length) {
    let ch = s.charAt(s.length - trimCount - 1);
    if (/\s/.test(ch)) {
      trimCount++;
    } else {
      break;
    }
  }

  if (trimCount == 0) {
    return s;
  }
  return s.substring(0, s.length - trimCount);
}

function getTokenName(token: JsDocToken): string {
  return JsDocToken[token];
}

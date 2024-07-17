// This performas a very rough conversion of JS to TS.
// The code is not intended to be executable or to pass type checking.
// It is only intended to be enough for TypeScript to generate the .d.ts file.

import { JSDocInfo, JSDocInfoParser, Annotation } from "./jsdocinfoparser";
import { JsDocTokenStream } from "./jsdoctokenstream";
import { builders as B, namedTypes as T } from "ast-types";
import type { ASTNode } from "ast-types";
import type * as kinds from "ast-types/lib/gen/kinds";
import type { NodePath } from "ast-types/lib/node-path";
import type { Path } from "ast-types/lib/path";
import {
  CLOSURE_TO_TYPESCRIPT,
  NOT_TEMPLATIZED_IN_TYPESCRIPT,
} from "./clutz_platform_symbols";
import * as fs from "fs";
import * as filepath from "path";
import { globalAliases } from "./closure_type";

const provides = JSON.parse(fs.readFileSync("provides.json", "utf8"));
const exports = JSON.parse(fs.readFileSync("exports.json", "utf8"));

// TODO:
// - implement @override (find parent class and copy jsdoc from it)
// - handle static namespaces aliasing global sybols (e.g. Iterator in closure/goog/date/daterange.ts)apko_bazelrc
// - handle @return/@param on a property (should be prop with function type)
// - convert decl; export {decl} to export decl
// - sort to match clutz order?
// - convert properties with function type to methods
// - improve emptyFunctionBody
// - output `{[key:string]:any}` instead of `object`?

const cleanedComment = Symbol();
export function clutzTranspile(root, j, path) {
  globalAliases.clear();
  // TODO: convert goog.requireType to `import type`;
  const defaultParams = B.restElement(B.identifier("args"));
  defaultParams.typeAnnotation = B.tsTypeAnnotation(
    B.tsArrayType(B.tsAnyKeyword())
  );
  const privateNS = B.tsModuleBlock([]);

  crudeDescope(root, j, path);
  cleanGoogisms();
  stripComments();
  createNamespaces(root, j, path);
  convertRequireType();
  const firstStmt = root.get("program").node.body[0];
  firstStmt.comments ??= [];
  firstStmt.comments.push(
    B.commentLine(
      `/ <reference path="${filepath.relative(
        filepath.dirname(path),
        "closure/goog/base.clutz.d.ts"
      )}" />`
    )
  );

  function stripComments() {
    root.find(j.Comment).forEach((p) => p.prune());
  }

  function cleanGoogisms() {
    root
      .find(j.MemberExpression, {
        object: { name: "goog" },
        property: { name: "global" },
      })
      .forEach((p) => p.replace(B.identifier("globalThis")));
    root
      .find(j.CallExpression, {
        callee: {
          object: { name: "goog" },
          property: { name: "getCssName" },
        },
      })
      .forEach((p) => p.replace(p.node.arguments[0]));
    root
      .find(j.CallExpression, {
        callee: {
          object: { name: "goog" },
          property: { name: "getMsg" },
        },
      })
      .forEach((p) => p.replace(p.node.arguments[0]));
    root
      .find(j.CallExpression, {
        callee: {
          object: { name: "goog" },
          property: { name: "define" },
        },
      })
      .forEach((p) => p.replace(p.node.arguments[1]));
    root
      .find(j.CallExpression, {
        callee: {
          object: { name: "object" },
          property: { name: "transpose" },
        },
      })
      .forEach((p) => (p.node.arguments[0] = B.nullLiteral()));
    root
      .find(j.CallExpression, {
        callee: {
          object: { name: "object" },
          property: { name: "createSet" },
        },
      })
      .forEach((p) => (p.node.arguments = []));
    root
      .find(j.CallExpression, (e) => /assert[A-Z]/.test(e.callee.name))
      .forEach((p) => p.prune());
  }

  function createNamespaces(root: NodePath<kinds.FileKind>, j, path) {
    const body: Path<kinds.StatementKind[]> = root.get("program", "body");
    const namespacedProps: {
      id: kinds.MemberExpressionKind;
      value: NodePath;
      doc: JSDocInfo;
      stmt: NodePath;
    }[] = [];
    const bodies: Map<string, kinds.ClassBodyKind | kinds.TSInterfaceBodyKind> =
      new Map();
    const staticNamespaces = new Map<
      string,
      kinds.TSModuleBlockKind | kinds.ObjectExpressionKind
    >();
    body.each((stmt: NodePath<kinds.StatementKind>) => {
      const doc = getJSDoc(stmt, j, path);
      switch (stmt.node.type) {
        case "DoWhileStatement":
        case "WhileStatement":
        case "ForStatement":
        case "ForInStatement":
        case "ForOfStatement":
        case "ForAwaitStatement":
        case "SwitchStatement":
        case "IfStatement":
          stmt.prune();
          return;
        case "ExpressionStatement":
          switch (stmt.node.expression.type) {
            case "CallExpression":
              stmt.prune();
              return;
          }
      }
      let isExported = T.ExportNamedDeclaration.check(stmt.node);
      let name: string | kinds.MemberExpressionKind;
      let value: NodePath | undefined = undefined;
      let decl: NodePath = stmt;
      let defaultExported = false;
      if (isExported) {
        decl = stmt.get("declaration");
        if (doc && T.VariableDeclaration.check(decl.node)) {
          name = decl.node.declarations[0].id.name;
          value = decl.get("declarations", "0", "init");
        } else if (T.FunctionDeclaration.check(decl.node)) {
          name = decl.node.id!.name as string;
          value = decl;
        } else if (T.ClassDeclaration.check(decl.node)) {
          name = decl.node.id!.name as string;
          value = decl;
        } else {
          if (doc) {
            throw new Error(
              `${path}:${stmt.node.loc?.start.line}  Unknown typed export`
            );
          }
          return;
        }
      } else {
        if (doc && T.VariableDeclaration.check(decl.node)) {
          name = decl.node.declarations[0].id.name;
          value = decl.get("declarations", "0", "init");
        } else if (T.FunctionDeclaration.check(decl.node)) {
          name = decl.node.id!.name as string;
          value = decl;
        } else if (T.ClassDeclaration.check(decl.node)) {
          name = decl.node.id?.name as string;
          value = decl;
        } else if (T.ExpressionStatement.check(decl.node)) {
          let id:
            | NodePath<
                kinds.MemberExpressionKind | kinds.IdentifierKind,
                kinds.MemberExpressionKind | kinds.IdentifierKind
              >
            | undefined;
          if (T.MemberExpression.check(decl.node.expression)) {
            id = decl.get("expression");
          } else if (
            T.AssignmentExpression.check(decl.node.expression) &&
            T.MemberExpression.check(decl.node.expression.left)
          ) {
            id = decl.get("expression", "left");
            value = decl.get("expression", "right");
          } else if (
            T.AssignmentExpression.check(decl.node.expression) &&
            T.Identifier.check(decl.node.expression.left)
          ) {
            id = decl.get("expression", "left");
            value = decl.get("expression", "right");
          }
          if (!id) {
            if (doc && doc.annotations.size) {
              throw new Error(
                `${path}:${stmt.node.loc?.start.line}  Unknown typed expression: ${decl.node.expression.type}`
              );
            }
            return;
          }
          name = id.node.type === "Identifier" ? id.node.name : id.node;
        } else if (T.ExportDefaultDeclaration.check(decl.node)) {
          const value = decl.get("declaration");
          const result = addTypes("__default__", value, doc);
          if (result !== value.node) {
            decl.node.declaration = B.identifier("__default__");
            if (Array.isArray(result)) {
              maybeEmitJSDoc(result[0], doc);
              for (let r of result) {
                decl.insertBefore(r);
              }
            } else {
              decl.insertBefore(result);
              maybeEmitJSDoc(result, doc);
            }
          } else {
            maybeEmitJSDoc(stmt.node, doc);
          }
          return;
        } else {
          doc?.annotations.delete(Annotation.SUPPRESS);
          if (doc?.annotations.size) {
            console.log(
              `${path}:${stmt.node.loc?.start.line}  Unknown statement: ${stmt.node.type}`
            );
          }
          return;
        }
      }
      if (typeof name === "string") {
        const typed = addTypes(name, value, doc);
        if (Array.isArray(typed)) {
          maybeEmitJSDoc(typed[0], doc);
          for (let t of typed) {
            if (isExported) {
              t = B.exportNamedDeclaration(t);
            }
            stmt.insertBefore(t);
          }
          stmt.prune();
          return;
        }
        if (!typed) {
          maybeEmitJSDoc(stmt.node, doc);
          return;
        }
        let typeInfo = doc?.annotations.get(Annotation.TYPE);
        if (
          decl.node.type == "VariableDeclaration" &&
          typeInfo &&
          typeInfo.type &&
          typed === value?.node
        ) {
          maybeEmitJSDoc(stmt.node, doc);
          stmt.node.comments ||= [];
          stmt.node.comments.push(B.commentLine("@ts-ignore", true));
          const vdecl = decl.node
            .declarations[0] as kinds.VariableDeclaratorKind;
          (vdecl.id as kinds.IdentifierKind).typeAnnotation =
            typeInfo.type.annotation();
          vdecl.init = undefined;
          return;
        }
        if (
          typed.type === "ClassDeclaration" ||
          typed.type === "TSInterfaceDeclaration" ||
          typed.type === "TSEnumDeclaration" ||
          T.FunctionDeclaration.check(typed)
        ) {
          const decl:
            | kinds.ClassDeclarationKind
            | kinds.TSInterfaceDeclarationKind = typed as any;
          bodies.set(name, decl.body);
          const staticBody = B.tsModuleBlock([]);
          const namespace = B.tsModuleDeclaration(
            B.identifier(name),
            staticBody
          );
          staticNamespaces.set(name, staticBody);
          if (isExported) {
            stmt.insertAfter(B.exportNamedDeclaration(namespace));
          } else {
            stmt.insertAfter(namespace);
          }
        }
        if (typed.type === "ObjectExpression") {
          staticNamespaces.set(name, typed as kinds.ObjectExpressionKind);
        }
        if (typed !== value?.node) {
          if (isExported) {
            (stmt.node as kinds.ExportNamedDeclarationKind).declaration = typed;
            maybeEmitJSDoc(stmt.node, doc, T.Function.check(typed));
          } else {
            typed.comments = stmt.comments;
            maybeEmitJSDoc(typed, doc, T.Function.check(typed));
            stmt.replace(typed);
          }
          root
            .find(j.VariableDeclaration, { declarations: [{ id: { name } }] })
            .forEach((p) => p.prune());
        } else {
          maybeEmitJSDoc(stmt.node, doc, T.Function.check(typed));
        }
      } else if (name?.type === "MemberExpression") {
        let values = addTypes(
          (name.property as kinds.IdentifierKind).name,
          value,
          doc
        );
        if (moveToNamespace(name, values, doc)) {
          stmt.prune();
        } else if (name.property.type === "Identifier") {
          if (!["package", "private"].includes(doc?.visibility)) {
            console.log(
              `${path}:${stmt.node.loc?.start.line}  Unknown member expression: ${name.property.name}`
            );
          }
        }
      }
    });
    root.find(j.TSModuleDeclaration).forEach((block) => {
      if (block.node.body.body.length === 0) {
        if (block.parent?.node.type === "ExportNamedDeclaration") {
          block.parent.prune();
        } else {
          block.prune();
        }
      }
    });

    function moveToNamespace(
      idExpr: kinds.MemberExpressionKind,
      value:
        | kinds.ExpressionKind
        | kinds.StatementKind
        | undefined
        | kinds.StatementKind[],
      doc: JSDocInfo
    ): boolean {
      const [name, nsName, ns, isStatic] = findNS(
        idExpr,
        canBeMember(value, doc)
      );
      if (name == " ") return true;
      if (["goog", "goog.global", "globalThis"].includes(nsName)) return true;
      if (!ns) return false;
      let values = Array.isArray(value) ? value : [value];
      let i = -1;
      for (const value of values) {
        i++;
        if (ns.type === "ObjectExpression") {
          const prop = B.objectProperty(B.identifier(name), value);
          maybeEmitJSDoc(prop, doc);
          ns.properties.push(prop);
        } else if (ns.type === "TSModuleBlock") {
          if (T.Declaration.check(value)) {
            let decl = B.exportNamedDeclaration(value as kinds.DeclarationKind);
            ns.body.push(decl);
            if (i == 0) {
              maybeEmitJSDoc(decl, doc, T.Function.check(value));
            }
          } else if (!name) {
            return true;
          } else {
            let varType = doc.annotations.has(Annotation.CONSTANT)
              ? "const"
              : "var";
            const varname = B.identifier(name);
            if (doc?.type) {
              varname.typeAnnotation = doc.type.annotation();
            }
            const decl = B.exportNamedDeclaration(
              B.variableDeclaration(varType, [
                B.variableDeclarator(varname, value ?? null),
              ])
            );
            maybeEmitJSDoc(decl, doc, T.Function.check(value));
            ns.body.push(decl);
          }
          if (
            value?.type === "ClassDeclaration" ||
            value?.type === "TSInterfaceDeclaration"
          ) {
            const newNS = `${nsName}.${name}`;
            bodies.set(newNS, value.body);
            const staticBody = B.tsModuleBlock([]);
            const namespace = B.tsModuleDeclaration(
              B.identifier(name),
              staticBody
            );
            staticNamespaces.set(newNS, staticBody);
            ns.body.push(B.exportNamedDeclaration(namespace));
          }
        } else if (ns.type === "ClassBody") {
          let member:
            | kinds.ClassMethodKind
            | kinds.ClassPropertyKind
            | kinds.TSDeclareMethodKind;
          if (
            value?.type == "FunctionDeclaration" ||
            value?.type == "FunctionExpression"
          ) {
            emptyFunctionBody(value, name, doc);
            const cm: kinds.ClassMethodKind = B.classMethod(
              "method",
              name ? B.identifier(name) : idExpr.property,
              value.params,
              value.body,
              name == null,
              isStatic
            );
            member = cm;
            cm.returnType = value.returnType;
            cm.typeParameters = value.typeParameters;

            // Should we add readonly for Annotation.CONSTANT?
            if (!isStatic && doc.annotations.has(Annotation.ABSTRACT)) {
              member = j.tsDeclareMethod.from({
                abstract: true,
                key: B.identifier(name),
                kind: "method",
                params: value.params,
                returnType: value.returnType || null,
                typeParameters: value.typeParameters,
              });
            }
            maybeEmitJSDoc(member, doc, true);
          } else {
            if (
              doc?.annotations.has(Annotation.OVERRIDE) &&
              doc.annotations.size == 1
            ) {
              return true;
            }
            let tsType = doc?.type?.toTypeScript();

            member = B.classProperty(
              B.identifier(name),
              value ?? null,
              tsType ? B.tsTypeAnnotation(tsType) : null,
              isStatic
            );
            maybeEmitJSDoc(member, doc);
          }
          if (doc?.visibility == "package" || doc?.visibility == "private") {
            bodies.set(`${nsName}.${name}`, privateNS);
            staticNamespaces.set(`${nsName}.${name}`, privateNS);
            return true;
          } else if (
            doc?.visibility &&
            !doc.annotations.has(Annotation.OVERRIDE)
          ) {
            member.access = doc.visibility;
          }
          ns.body.push(member);
        } else if (ns.type === "TSInterfaceBody") {
          let member:
            | kinds.TSMethodSignatureKind
            | kinds.TSPropertySignatureKind;
          if (
            value?.type == "FunctionDeclaration" ||
            value?.type == "FunctionExpression"
          ) {
            member = B.tsMethodSignature(
              B.identifier(name),
              value.params,
              value.returnType
            );
            member.typeParameters = value.typeParameters;
            maybeEmitJSDoc(member, doc, true);
          } else {
            let typeInfo = doc.annotations.get(Annotation.TYPE);
            let tsType = typeInfo?.type?.annotation() ?? null;

            member = B.tsPropertySignature(B.identifier(name), tsType);
            maybeEmitJSDoc(member, doc);
          }
          ns.body.push(member);
        }
      }

      return true;
    }

    function canBeMember(
      value: kinds.ExpressionKind | kinds.StatementKind | undefined | unknown[],
      doc?: JSDocInfo
    ): boolean {
      if (
        [
          Annotation.ENUM,
          Annotation.TYPEDEF,
          Annotation.CONSTRUCTOR,
          Annotation.INTERFACE,
          Annotation.RECORD,
        ].some((a) => doc?.annotations.has(a))
      ) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      return !value || T.Function.check(value) || T.Expression.check(value);
    }

    function findNS(
      idExpr: kinds.MemberExpressionKind,
      canBeMember = false
    ): [
      string,
      string,
      (
        | kinds.ClassBodyKind
        | kinds.TSInterfaceBodyKind
        | kinds.TSModuleBlockKind
        | kinds.ObjectExpressionKind
        | undefined
      ),
      boolean
    ] {
      const [nsName, isStatic] = parseName(idExpr.object);
      const name =
        idExpr.property.type === "Identifier"
          ? idExpr.property.name
          : idExpr.property.value;
      let ns = isStatic ? staticNamespaces.get(nsName) : bodies.get(nsName);
      if (canBeMember && isStatic && bodies.get(nsName)?.type === "ClassBody") {
        ns = bodies.get(nsName);
      }
      return [name, nsName, ns, isStatic];
    }
  }

  function addTypes(
    name: string,
    value: NodePath<kinds.ExpressionKind | kinds.StatementKind> | undefined,
    doc?: JSDocInfo
  ): ASTNode | ASTNode[] | undefined {
    let node = value?.node;
    if (
      (node?.type === "MemberExpression" &&
        node.object.name === "goog" &&
        node.property.name === "abstractMethod" &&
        !doc?.annotations.has(Annotation.OVERRIDE)) ||
      (!node && (doc?.annotations.has(Annotation.RETURN) || doc?.parameters))
    ) {
      const params = doc?.parameters?.map((p) => B.identifier(p.name)) || [];
      node = B.functionDeclaration(
        B.identifier(name),
        params,
        B.blockStatement([B.throwStatement(B.nullLiteral())])
      );
    }
    if (node?.type === "ConditionalExpression") {
      if (T.Function.check(node.consequent)) {
        node = node.consequent;
      } else if (T.Function.check(node.alternate)) {
        node = node.alternate;
      }
    }
    let ftype = doc?.functionType();
    if (
      !T.Function.check(node) &&
      ftype &&
      !doc?.annotations.has(Annotation.TYPEDEF)
    ) {
      node = ftype.functionDeclaration(name);
    }

    const isFunction = T.Function.check(node);
    if (isFunction) {
      let func = node as kinds.FunctionKind;
      if (func !== value?.node && !T.Statement.check(func)) {
        func = B.functionDeclaration(
          B.identifier(name),
          func.params,
          func.body
        );
        node = func as kinds.FunctionDeclarationKind;
      }
      func.params.forEach((param, i) => {
        if (
          param.type == "AssignmentPattern" &&
          param.left.type == "Identifier"
        ) {
          param = param.left;
          param.optional = true;
        }
        if (param.type !== "Identifier" && param.type !== "RestElement") return;
        let name =
          param.type == "Identifier"
            ? param.name
            : (param.argument as kinds.IdentifierKind).name;
        const closureType = doc?.parameters?.find((p) => p.name === name);
        if (closureType?.type) {
          // FIXME: handle rest params. Probably do need a RestParamType.
          func.params[i] = closureType.type.addToParam(param);
        }
      });
      const closureReturnInfo = doc?.annotations.get(Annotation.RETURN);
      const templateInfo = doc?.annotations.get(Annotation.TEMPLATE);
      const thisType = doc?.annotations.get(Annotation.THIS)?.type;
      let removedThis = false;
      if (closureReturnInfo?.type) {
        if (
          closureReturnInfo.type.kind === "basic" &&
          templateInfo?.templateVars?.includes(closureReturnInfo.type.name) &&
          thisType?.equals(closureReturnInfo.type)
        ) {
          func.returnType = B.tsTypeAnnotation(B.tsThisType());
        } else {
          func.returnType = closureReturnInfo.type.annotation({ return: true });
        }
      }
      if (templateInfo && templateInfo.templateVars) {
        let templateVars = templateInfo.templateVars;
        if (
          thisType?.kind === "basic" &&
          templateVars.includes(thisType.name)
        ) {
          if (
            closureReturnInfo?.type?.equals(thisType) &&
            !doc?.parameters?.some((p) => p.type?.equals(thisType))
          ) {
            removedThis = true;
            templateVars = templateVars.filter((v) => v != thisType.name);
          }
        }
        if (templateVars.length > 0) {
          func.typeParameters = B.tsTypeParameterDeclaration(
            templateInfo.templateVars.map((n) =>
              B.tsTypeParameter(n, undefined, B.tsAnyKeyword())
            )
          );
        }
        if (templateInfo.ttl) {
          func.comments = func.comments || [];
          func.comments.push(
            B.commentLine(
              "function contained TTE, type is probably wrong",
              true
            )
          );
        }
      }
      if (!removedThis && thisType) {
        func.params.unshift(
          B.identifier.from({
            name: "this",
            typeAnnotation: thisType.annotation(),
          })
        );
      }
      if (doc?.annotations.has(Annotation.CONSTRUCTOR)) {
        return makeConstructor(name, func, doc);
      } else if (
        doc?.annotations.has(Annotation.INTERFACE) ||
        doc?.annotations.has(Annotation.RECORD)
      ) {
        const params = {
          id: B.identifier(name),
          body: j.tsInterfaceBody([]),
        };
        if (doc.extendedTypes) {
          params.extends = doc.extendedTypes.map((x) => x.expression());
        }
        const templateInfo = doc.annotations.get(Annotation.TEMPLATE);
        if (templateInfo && templateInfo.templateVars) {
          params.typeParameters = j.tsTypeParameterDeclaration(
            templateInfo.templateVars.map((n) =>
              j.tsTypeParameter(n, undefined, j.tsAnyKeyword())
            )
          );
        }
        return j.tsInterfaceDeclaration.from(params);
      }
      emptyFunctionBody(func, name, doc);
    } else if (
      value?.node.type == "ClassExpression" ||
      value?.node.type == "ClassDeclaration"
    ) {
      if (doc?.implementedTypes) {
        value.node.implements = doc.implementedTypes.map((x) => x.expression());
      }
      const templateInfo = doc?.annotations.get(Annotation.TEMPLATE);
      if (templateInfo && templateInfo.templateVars) {
        value.node.typeParameters = j.tsTypeParameterDeclaration(
          templateInfo.templateVars.map((n) =>
            j.tsTypeParameter(n, undefined, j.tsAnyKeyword())
          )
        );
      }
      const classBodyPath = value.get("body", "body");
      classBodyPath.each((member) => {
        const memberDoc = getJSDoc(member, j, path);
        let isConstructor = false;
        if (
          (member.node.type == "ClassMethod" ||
            member.node.type == "MethodDefinition") &&
          member.node.kind == "constructor"
        ) {
          const properties = extractConstructorProperties(member.node);
          classBodyPath.push(...properties);
          isConstructor = true;
        }
        if (isConstructor) {
          if (
            doc?.annotations.has(Annotation.INTERFACE) ||
            doc?.annotations.has(Annotation.RECORD)
          ) {
            member.prune();
            return;
          }
        } else if (
          memberDoc?.visibility == "private" ||
          memberDoc?.visibility == "package"
        ) {
          member.prune();
          return;
        }
        if (member.node.type == "ClassMethod") {
          addTypes(member.node.key.name, member, memberDoc);
          maybeEmitJSDoc(member.node, memberDoc);
        } else if (member.node.type == "MethodDefinition") {
          addTypes(member.node.key.name, member.get("value"), memberDoc);
          maybeEmitJSDoc(member.node, memberDoc);
        } else if (member.node.type == "ClassProperty" && memberDoc) {
          if (
            memberDoc.visibility == "private" ||
            memberDoc.visibility == "package" ||
            // ignore overrides because they're usually missing type information
            (memberDoc.annotations.has(Annotation.OVERRIDE) &&
              !memberDoc.annotations.size == 1)
          ) {
            member.node.prune();
            return;
          }
          const type = memberDoc.annotations.get(Annotation.TYPE);
          if (type && type.type) {
            member.node.typeAnnotation = type.type.toTypeScript();
          }
          maybeEmitJSDoc(member.node, memberDoc);
        }
      });
      if (
        doc?.annotations.has(Annotation.INTERFACE) ||
        doc?.annotations.has(Annotation.RECORD)
      ) {
        const members = classBodyPath.value.map((p) => {
          let member;
          if (p.type == "ClassMethod") {
            member = j.tsMethodSignature(p.key, p.params, p.returnType ?? null);
            member.computed = p.computed;
          } else if (p.type == "MethodDefinition") {
            const params = p.value.params.map((param) => {
              if (param.type === "AssignmentPattern") {
                param.left.optional = true;
                param.left.properties.forEach((prop, i) => {
                  if (prop.type === "AssignmentPattern") {
                    param.left.properties[i].optional = j.objectProperty(
                      prop.key
                    );
                  }
                });
                return param.left;
              }
              return param;
            });
            member = j.tsMethodSignature(
              p.key,
              params,
              p.value.returnType ?? null
            );
            member.computed = p.computed;
          } else {
            member = j.tsPropertySignature.from({
              key: p.key,
              typeAnnotation: p.typeAnnotation || null,
              computed: p.computed,
            });
          }
          member.comments = p.comments;
          return member;
        });
        const replacement = j.tsInterfaceDeclaration(
          j.identifier(name),
          j.tsInterfaceBody(members)
        );
        replacement.typeParameters = value.node.typeParameters;
        if (doc.extendedTypes) {
          replacement.extends = doc.extendedTypes.map((x) => x.expression());
        }
        return replacement;
      } else {
        if (doc?.extendedTypes) {
          const expr = doc.extendedTypes[0].expression();
          value.node.superClass = expr.expression;
          value.node.superTypeParameters = expr.typeParameters;
        }
      }
      if (value.node.type == "ClassExpression") {
        value.node.id = j.identifier(name);
        (value.node as any).type = "ClassDeclaration";
      }
    } else if (doc?.annotations.has(Annotation.TYPEDEF)) {
      return j.tsTypeAliasDeclaration(
        j.identifier(name),
        doc.annotations.get(Annotation.TYPEDEF)!.type!.toTypeScript()
      );
    } else if (doc?.annotations.has(Annotation.ENUM)) {
      const enumType = doc.annotations
        .get(Annotation.ENUM)!
        .type!.toTypeScript();
      const literalTypes = ["Literal", "StringLiteral", "NumericLiteral"];
      let enumable =
        value?.node.type == "ObjectExpression" &&
        value.node.properties.every((p) => {
          return (
            (p.type == "Property" &&
              literalTypes.includes(p.value.type) &&
              ["Identifier", "StringLiteral"].includes(p.key.type)) ||
            (p.type == "ObjectProperty" &&
              literalTypes.includes(p.value.type) &&
              ["Identifier", "StringLiteral"].includes(p.key.type))
          );
        });
      if (
        enumable &&
        (enumType.type == "TSNumberKeyword" ||
          enumType.type == "TSStringKeyword")
      ) {
        if (value.node.type != "ObjectExpression") {
          return value?.node;
        }

        const members = value.node.properties.map((p) => {
          if (p.type != "Property") {
            throw new Error(
              `${path}:${value.node.loc.start.line}: Expected object property, but was ${p.type}`
            );
          }
          return j.tsEnumMember(p.key, p.value);
        });
        return j.tsEnumDeclaration(j.identifier(name), members);
      } else {
        return [
          j.tsTypeAliasDeclaration(j.identifier(name), enumType),
          j.variableDeclaration("const", [
            j.variableDeclarator(j.identifier(name), value.node),
          ]),
        ];
      }
    }
    if (node?.extra?.parenthesized) {
      const comment = node.comments?.[0] ?? node.leadingComments?.[0];
      const doc = comment && parseJSDoc(comment, path);
      if (doc?.type) {
        return B.tsAsExpression(node, doc.type.toTypeScript());
      }
    }
    return node;
  }

  function extractConstructorProperties(func: kinds.FunctionKind) {
    const properties: (kinds.ClassPropertyKind | kinds.ClassMethodKind)[] = [];
    j(func)
      .find(j.MemberExpression, {
        object: { type: "ThisExpression" },
        property: { type: "Identifier" },
      })
      .forEach((p) => {
        const jsdoc = getJSDoc(p, j, path);
        if (jsdoc) {
          const typeInfo = jsdoc.annotations.get(Annotation.TYPE);
          let type = typeInfo?.type?.toTypeScript();
          const prop: kinds.ClassPropertyKind = j.classProperty(
            j.identifier(p.value.property.name),
            null,
            type ? j.tsTypeAnnotation(type) : null
          );
          if (jsdoc.visibility == "package" || jsdoc.visibility == "private") {
            return;
          }
          properties.push(prop);
          if (jsdoc.visibility && !jsdoc.annotations.has(Annotation.OVERRIDE)) {
            prop.access = jsdoc.visibility;
          }
          maybeEmitJSDoc(prop, jsdoc, false);
        }
      });
    return properties;
  }

  function makeConstructor(
    name: string,
    func: kinds.FunctionKind,
    doc: JSDocInfo
  ) {
    const properties = extractConstructorProperties(func);
    const ctor = j.classMethod(
      "constructor",
      j.identifier("constructor"),
      func.params,
      j.blockStatement([
        j.expressionStatement(
          j.callExpression.from({
            callee: j.super(),
            arguments: [],
            comments: [j.commentLine("@ts-ignore", true)],
          })
        ),
      ])
    );
    maybeEmitJSDoc(ctor, doc, true);
    properties.unshift(
      j.classProperty.from({
        key: j.identifier(
          `noStructuralTyping_${path
            .replaceAll("/", "_")
            .replace(".js", "")
            .replace(/\W/g, "_")}_${name}`
        ),
        value: null,
        access: "private",
        typeAnnotation: j.tsTypeAnnotation(j.tsUnknownKeyword()),
      })
    );
    properties.unshift(ctor);
    if (
      doc.implementedTypes?.some(
        (t) => t.kind == "template" && t.name == "ArrayLike"
      )
    ) {
      properties.push(
        j.tsIndexSignature(
          [
            j.identifier.from({
              name: "key",
              typeAnnotation: j.tsTypeAnnotation(j.tsNumberKeyword()),
            }),
          ],
          j.tsTypeAnnotation(j.tsNumberKeyword())
        )
      );
    }

    const superClass =
      (doc.extendedTypes && doc.extendedTypes[0].expression()) ?? null;
    const implementedTypes =
      doc.implementedTypes && doc.implementedTypes.map((x) => x.expression());
    const templateInfo = doc.annotations.get(Annotation.TEMPLATE);
    const typeParameters =
      templateInfo &&
      templateInfo.templateVars &&
      j.tsTypeParameterDeclaration(
        templateInfo.templateVars.map((n) =>
          j.tsTypeParameter(n, undefined, j.tsAnyKeyword())
        )
      );
    const decl = j.classDeclaration.from({
      id: j.identifier(name),
      implements: implementedTypes ?? [],
      superClass: superClass?.expression ?? null,
      superTypeParameters: superClass?.typeParameters ?? null,
      typeParameters: typeParameters ?? null,
      body: j.classBody(properties),
    });
    decl.abstract = doc.annotations.has(Annotation.ABSTRACT);
    return decl;
  }

  function maybeEmitJSDoc(node: any, jsdoc?: JSDocInfo, func = false) {
    if (!jsdoc || jsdoc.annotations.has(Annotation.FILE_OVERVIEW)) {
      return;
    }
    if (
      jsdoc.annotations.has(Annotation.LICENSE) ||
      !((jsdoc.parameters && func) || jsdoc.description)
    ) {
      return;
    }
    const resultLines = ["*", ...(jsdoc.description?.split("\n") || [])];
    if (func && jsdoc.parameters) {
      for (const param of jsdoc.parameters) {
        if (param.name && param.description) {
          resultLines.push(`@param ${param.name} ${param.description}`);
        }
      }
    }
    const returnInfo = jsdoc.annotations.get(Annotation.RETURN);
    if (func && returnInfo?.info) {
      resultLines.push(`@return ${returnInfo.info}`);
    }
    const comment = j.commentBlock(resultLines.join("\n * ") + "\n ");
    comment[cleanedComment] = true;
    if (node.comments) {
      node.comments.push(comment);
    } else {
      node.comments = [comment];
    }
  }

  function emptyFunctionBody(
    f: kinds.FunctionKind,
    name: string,
    doc?: JSDocInfo
  ) {
    let forceConstructor = name === "constructor";
    if (forceConstructor || f.id?.name == "constructor") {
      f.body = j.blockStatement([
        j.expressionStatement(
          j.callExpression.from({
            callee: j.super(),
            arguments: [],
            comments: [j.commentLine("@ts-ignore", true)],
          })
        ),
      ]);
    } else if (f.returnType) {
      f.body = j.blockStatement([
        j.returnStatement.from({
          argument: null,
          comments: [j.commentLine("@ts-ignore", true)],
        }),
      ]);
    } else if (
      name &&
      (doc?.annotations.has(Annotation.OVERRIDE) ||
        doc?.annotations.has(Annotation.INHERIT_DOC))
    ) {
      f.body = B.blockStatement([
        B.returnStatement.from({
          argument: B.callExpression(
            B.memberExpression(B.super(), B.identifier(name)),
            []
          ),
          comments: [j.commentLine("@ts-ignore", true)],
        }),
      ]);
    } else {
      const returns = j(f)
        .find(j.ReturnStatement)
        .filter((x) => {
          if (!x.node.argument) {
            return false;
          }
          if (j(x).closest(j.Function).get() !== f) {
            return false;
          }
          return true;
        });
      if (returns.length == 0) {
        f.body = j.blockStatement([]);
      }
    }
  }

  function convertRequireType() {
    root
      .find(j.CallExpression, {
        callee: { object: { name: "goog" }, property: { name: "requireType" } },
      })
      .forEach((call) => {
        const parent = call.parent as NodePath<kinds.VariableDeclaratorKind>;
        if (parent.node.type !== "VariableDeclarator") {
          return;
        }
        const id = parent.node.id;
        const arg = call.node.arguments[0].value;
        let key = `closure/${arg.replace(/\./g, "/")}.js`;
        if (!exports[key]) {
          key = provides[arg];
          if (!key) {
            throw new Error(`No provides for ${arg}`);
          }
          key = `closure/goog${key.substring(1)}`.replace(
            "closure/goog/../../",
            ""
          );
        }
        if (!exports[key]) {
          throw new Error(`No exports for ${key}`);
        }
        let defaultExport = exports[key].includes("default");
        let relative = filepath.relative(filepath.dirname(path), key);
        if (!relative.startsWith(".")) {
          relative = "./" + relative;
        }
        const source = j.literal(relative);
        if (id.type == "Identifier") {
          if (defaultExport) {
            parent.parent.replace(
              j.importDeclaration(
                [j.importDefaultSpecifier(id)],
                source,
                "type"
              )
            );
          } else {
            parent.parent.replace(
              j.importDeclaration(
                [j.importNamespaceSpecifier(id)],
                source,
                "type"
              )
            );
          }
        } else {
          const obj = id as kinds.ObjectPatternKind;
          const specifiers = obj.properties.map((prop) => {
            if (prop.type != "Property") {
              throw new Error(
                `${path}:${call.value.loc.start.line}: Not an object property : ${prop.type}`
              );
            }
            return j.importSpecifier(
              prop.key,
              prop.shorthand ? null : prop.value
            );
          });
          parent.parent.replace(
            j.importDeclaration(specifiers, source, "type")
          );
        }
      });
  }
}

function crudeDescope(root, j, path) {
  root
    .find(j.CallExpression, {
      callee: { object: { name: "goog" }, property: { name: "scope" } },
    })
    .forEach((scope) => {
      const scopestmt = scope.parentPath;
      const scopebody = scope.value.arguments[0].body.body;
      scopebody.forEach((s) => scopestmt.insertBefore(s));
      scopestmt.prune();
    });
}

function getJSDoc(path: NodePath, j, filename: string): JSDocInfo | undefined {
  let klass: kinds.ClassDeclarationKind | kinds.ClassExpressionKind | undefined;
  while (path && !T.Statement.check(path.value)) {
    if (
      path.name == "init" ||
      path.name == "arguments" ||
      path.name == "right"
    ) {
      return;
    }
    if (T.ClassExpression.check(path.value)) {
      klass = path.value;
    }
    path = path.parentPath;
  }
  if (!path) {
    return;
  }
  if (T.ClassDeclaration.check(path.value)) {
    klass = path.value;
  }
  const isConst =
    T.VariableDeclaration.check(path.value) && path.value.kind == "const";
  const comments: kinds.CommentBlockKind[] =
    path?.value?.original.leadingComments?.filter(
      (c) => c.type === "CommentBlock" && c.value.startsWith("*")
    );
  if (comments) {
    for (const comment of comments) {
      const jsdoc = parseJSDoc(comment, filename);
      if (
        jsdoc &&
        !jsdoc.annotations.has(Annotation.FILE_OVERVIEW) &&
        !jsdoc.annotations.has(Annotation.LICENSE)
      ) {
        return jsdoc;
      }
    }
  }
  if (klass) {
    // TODO: do we need any more info?
    const type: JSDocInfo = new JSDocInfo();
    type.annotations.set(Annotation.CONSTRUCTOR, null);
    return type;
  }
  if (isConst) {
    const type: JSDocInfo = new JSDocInfo();
    type.annotations.set(Annotation.CONSTANT, null);
    return type;
  }
}

// Based on maybeEmitJsDoc
function cleanJSDoc(root, j, filename) {
  root.find(j.Comment).forEach((comment) => {
    if (comment.value[cleanedComment]) {
      return;
    }

    const jsdoc = parseJSDoc(comment.value, filename);
    if (!jsdoc || !jsdoc.description || jsdoc.annotations.size == 0) {
      comment.prune();
      return;
    }
    const match = comment.value.value.match(/\n(\s+)/);
    const indent = /*match ? match[1] :*/ " ";
    const resultLines = jsdoc.description
      .split("\n")
      .map((l) => (l === "" ? l : " " + l));
    resultLines.unshift("*");
    if (jsdoc.parameters) {
      for (const param of jsdoc.parameters) {
        if (param.name && param.description) {
          resultLines.push(` @param ${param.name} ${param.description}`);
        }
      }
    }
    const returnInfo = jsdoc.annotations.get(Annotation.RETURN);
    if (typeof returnInfo === "object" && returnInfo.info) {
      resultLines.push(` @return ${returnInfo.info}`);
    }
    // resultLines.push("");
    comment.value.value = resultLines.join(`\n${indent}*`) + "\n";
  });
}

function parseJSDoc(commentNode: kinds.CommentBlockKind, filename) {
  if (!commentNode.value.startsWith("*")) return;
  const comment = commentNode.value.substring(1);
  const stream = new JsDocTokenStream(comment, commentNode.loc?.start?.line);
  const parser = new JSDocInfoParser(stream, comment, filename);

  if (!parser.parse()) return;

  return parser.jsdoc;
}

export default (fileInfo, api) => {
  debugger;
  const j = api.jscodeshift;
  const dry = api.stats.length > 0;
  const root = j(fileInfo.source);
  clutzTranspile(root, j, fileInfo.path);
  if (dry) {
    return root.toSource({ quote: "single" });
  } else {
    let tsFile = fileInfo.path.replace(".js", ".ts");
    fs.writeFileSync(tsFile, root.toSource({ quote: "single" }));
  }
};

function parseName(name: kinds.ExpressionKind): [string, boolean] {
  if (name.type === "Identifier") {
    return [name.name, true];
  } else if (name.type === "MemberExpression") {
    const [obj] = parseName(name.object);
    const prop = name.property.name as string;
    if (prop === "prototype") {
      return [obj, false];
    } else {
      return [`${obj}.${prop}`, true];
    }
  }
  throw new Error(`Unexpected name ${JSON.stringify(name)}`);
}

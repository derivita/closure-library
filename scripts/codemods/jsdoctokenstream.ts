/*
 * Copyright 2015 The Closure Compiler Authors.
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
export enum JsDocToken {
  // Tokens recycled from Rhino
  EOF, // end of file token - (not EOF_CHAR)
  EOL, // end of line
  LEFT_ANGLE,
  RIGHT_ANGLE,
  STRING,
  LEFT_SQUARE,
  RIGHT_SQUARE,
  LEFT_CURLY,
  RIGHT_CURLY,
  LEFT_PAREN,
  RIGHT_PAREN,
  COMMA, // comma operator
  COLON,
  ITER_REST,
  // JsDoc-only tokens
  ANNOTATION,
  PIPE,
  STAR,
  EOC,
  QMARK,
  BANG,
  EQUALS,
}
const EOF_CHAR = -1;
type char = string | typeof EOF_CHAR;

export class JsDocTokenStream {
  constructor(
    private readonly sourceString: string,
    private lineno: number = 0,
    private readonly initCharno: number = 0
  ) {
    this.sourceEnd = sourceString.length;
    this.sourceCursor = this.cursor = 0;
    this.initLineno = lineno;
  }

  /**
   * Tokenizes JSDoc comments.
   */
  getJsDocToken(): JsDocToken {
    let c: char;
    for (;;) {
      // eat white spaces
      for (;;) {
        this.charno = -1;
        c = this.getChar();
        if (c == EOF_CHAR) {
          return JsDocToken.EOF;
        } else if (c == "\n") {
          return JsDocToken.EOL;
        } else if (!isJSSpace(c)) {
          break;
        }
      }

      switch (c) {
        // annotation, e.g. @type or @constructor
        case "@":
          do {
            c = this.getChar();
            if (isAlpha(c)) {
              this.addToString(c);
            } else {
              this.ungetChar(c);
              this.string = this.getStringFromBuffer();
              return JsDocToken.ANNOTATION;
            }
          } while (true);

        case "*":
          if (this.matchChar("/")) {
            return JsDocToken.EOC;
          } else {
            return JsDocToken.STAR;
          }

        case ",":
          return JsDocToken.COMMA;

        case ">":
          return JsDocToken.RIGHT_ANGLE;

        case "(":
          return JsDocToken.LEFT_PAREN;

        case ")":
          return JsDocToken.RIGHT_PAREN;

        case "{":
          return JsDocToken.LEFT_CURLY;

        case "}":
          return JsDocToken.RIGHT_CURLY;

        case "[":
          return JsDocToken.LEFT_SQUARE;

        case "]":
          return JsDocToken.RIGHT_SQUARE;

        case "?":
          return JsDocToken.QMARK;

        case "!":
          return JsDocToken.BANG;

        case ":":
          return JsDocToken.COLON;

        case "=":
          return JsDocToken.EQUALS;

        case "|":
          return JsDocToken.PIPE;

        case "<":
          return JsDocToken.LEFT_ANGLE;

        case ".":
          c = this.getChar();
          if (c == "<") {
            return JsDocToken.LEFT_ANGLE;
          } else {
            if (c == ".") {
              c = this.getChar();
              if (c == ".") {
                return JsDocToken.ITER_REST;
              } else {
                this.addToString(".");
              }
            }
            // we may backtrack across line boundary
            this.ungetBuffer[this.ungetCursor++] = c;
            c = ".";
          }
        // fall through

        default: {
          // recognize a JsDoc string but discard last . if it is followed by
          // a non-JsDoc comment char, e.g. Array.<
          let c1: char = c;
          this.addToString(c);
          let c2: char = this.getChar();
          if (!isJSDocString(c2)) {
            this.ungetChar(c2);
            this.string = this.getStringFromBuffer();
            return JsDocToken.STRING;
          } else {
            do {
              c1 = c2;
              c2 = this.getChar();
              if (c1 == "." && c2 == "<") {
                this.ungetChar(c2);
                this.ungetChar(c1);
                this.string = this.getStringFromBuffer();
                return JsDocToken.STRING;
              } else {
                if (isJSDocString(c2)) {
                  this.addToString(c1);
                } else {
                  this.ungetChar(c2);
                  this.addToString(c1);
                  this.string = this.getStringFromBuffer();
                  return JsDocToken.STRING;
                }
              }
            } while (true);
          }
        }
      }
    }
  }

  /**
   * Gets the remaining JSDoc line without the {@link JsDocToken#EOL},
   * {@link JsDocToken#EOF} or {@link JsDocToken#EOC}.
   */
  getRemainingJSDocLine(): string {
    let c: char;
    for (;;) {
      c = this.getChar();
      switch (c) {
        case "*":
          if (this.peekChar() != "/") {
            this.addToString(c);
            break;
          }
        // fall through
        case EOF_CHAR:
        case "\n":
          this.ungetChar(c);
          this.string = this.getStringFromBuffer();
          return this.string;

        default:
          this.addToString(c);
          break;
      }
    }
  }

  getLineno(): number {
    return this.lineno;
  }

  getCharno(): number {
    return this.lineno == this.initLineno
      ? this.initCharno + this.charno
      : this.charno;
  }

  getString(): string {
    return this.string;
  }

  private getStringFromBuffer(): string {
    const result = this.stringBuffer.join("");
    this.stringBuffer.length = 0;
    return result;
  }

  private addToString(c: char) {
    if (c == EOF_CHAR) {
      throw new Error("Unexpected end of line");
    }
    this.stringBuffer.push(c);
  }

  ungetChar(c: char): void {
    // can not unread past across line boundary
    if (
      this.ungetCursor > 0 &&
      this.ungetBuffer[this.ungetCursor - 1] == "\n"
    ) {
      throw new Error("Cannot unget across line boundary");
    }
    this.ungetBuffer[this.ungetCursor++] = c;
    this.cursor--;
  }

  private matchChar(test: string): boolean {
    let c: char = this.getCharIgnoreLineEnd();
    if (c == test) {
      return true;
    } else {
      this.ungetCharIgnoreLineEnd(c);
      return false;
    }
  }

  /**
   * Allows the JSDocParser to update the character offset
   * so that getCharno() returns a valid character position.
   */
  update(): void {
    this.charno = this.getLineOffset();
  }

  private peekChar(): char {
    let c: char = this.getChar();
    this.ungetChar(c);
    return c;
  }

  getChar(): char {
    if (this.ungetCursor != 0) {
      this.cursor++;
      --this.ungetCursor;
      if (this.charno == -1) {
        this.charno = this.getLineOffset();
      }
      return this.ungetBuffer[this.ungetCursor];
    }

    for (;;) {
      let c: char;
      if (this.sourceCursor == this.sourceEnd) {
        if (this.charno == -1) {
          this.charno = this.getLineOffset();
        }
        return EOF_CHAR;
      }
      this.cursor++;
      c = this.sourceString[this.sourceCursor++];

      if (typeof this.lineEndChar === "string") {
        if (this.lineEndChar == "\r" && c == "\n") {
          this.lineEndChar = "\n";
          continue;
        }
        this.lineEndChar = -1;
        this.lineStart = this.sourceCursor - 1;
        this.lineno++;
      }

      if (c <= "\x7F") {
        if (c == "\n" || c == "\r") {
          this.lineEndChar = c;
          c = "\n";
        }
      } else {
        if (isJSFormatChar(c)) {
          continue;
        }
        if (isJSLineTerminator(c)) {
          this.lineEndChar = c;
          c = "\n";
        }
      }

      if (this.charno == -1) {
        this.charno = this.getLineOffset();
      }

      return c;
    }
  }

  private getCharIgnoreLineEnd(): char {
    if (this.ungetCursor != 0) {
      this.cursor++;
      --this.ungetCursor;
      if (this.charno == -1) {
        this.charno = this.getLineOffset();
      }
      return this.ungetBuffer[this.ungetCursor];
    }

    for (;;) {
      let c: char;
      if (this.sourceCursor == this.sourceEnd) {
        if (this.charno == -1) {
          this.charno = this.getLineOffset();
        }
        return EOF_CHAR;
      }
      this.cursor++;
      c = this.sourceString.charAt(this.sourceCursor++);

      if (c <= "\x7F") {
        if (c == "\n" || c == "\r") {
          this.lineEndChar = c;
          c = "\n";
        }
      } else {
        if (isJSFormatChar(c)) {
          continue;
        }
        if (isJSLineTerminator(c)) {
          this.lineEndChar = c;
          c = "\n";
        }
      }

      if (this.charno == -1) {
        this.charno = this.getLineOffset();
      }

      return c;
    }
  }

  private ungetCharIgnoreLineEnd(c: char): void {
    this.ungetBuffer[this.ungetCursor++] = c;
    this.cursor--;
  }

  /** Returns the offset into the current line. */
  private getLineOffset(): number {
    return this.sourceCursor - this.lineStart - this.ungetCursor - 1;
  }

  public getCursor(): number {
    return this.cursor;
  }

  // Set this to an initial non-null value so that the Parser has
  // something to retrieve even if an error has occurred and no
  // string is found.  Fosters one class of error, but saves lots of
  // code.
  private string = "";

  private stringBuffer: string[] = [];

  // Room to backtrace from to < on failed match of the last - in <!--
  private readonly ungetBuffer: char[] = [];
  private ungetCursor = 0;

  private lineStart: number = 0;
  private lineEndChar: char = -1;
  private charno: number = -1;
  private readonly initLineno: number;

  private readonly sourceEnd: number;

  // sourceCursor is an index into a small buffer that keeps a
  // sliding window of the source stream.
  private sourceCursor: number = 0;

  // cursor is a monotonically increasing index into the original
  // source stream, tracking exactly how far scanning has progressed.
  // Its value is the index of the next character to be scanned.
  private cursor: number = 0;
}

function isAlpha(c: char): boolean {
  if (c == EOF_CHAR) {
    return false;
  }
  // Use 'Z' < 'a'
  if (c <= "Z") {
    return "A" <= c;
  } else {
    return "a" <= c && c <= "z";
  }
}

function isJSDocString(c: char): boolean {
  switch (c) {
    case "@":
    case "*":
    case ",":
    case "<":
    case ">":
    case ":":
    case "(":
    case ")":
    case "{":
    case "}":
    case "[":
    case "]":
    case "?":
    case "!":
    case "|":
    case "=":
    case EOF_CHAR:
    case "\n":
      return false;

    default:
      return !isJSSpace(c);
  }
}

function isJSSpace(c: string) {
  return c === " " || c === "\t" || c === "\f" || c === "\v" || c === "\xa0";
}

function isJSLineTerminator(c: string): boolean {
  // Optimization for faster check for eol character:
  // they do not have 0xDFD0 bits set
  if ((c.charCodeAt(0) & 0xdfd0) != 0) {
    return false;
  }
  return c === "\n" || c === "\r" || c === "\u2028" || c === "\u2029";
}

function isJSFormatChar(c: char): boolean {
  return c > "\x7F";
}

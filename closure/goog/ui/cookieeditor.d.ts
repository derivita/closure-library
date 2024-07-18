import * as dom from '../dom/dom.js';
import { Component } from './component.js';
/**
 * Displays and edits the value of a cookie.
 */
export declare class CookieEditor extends Component {
    constructor(opt_domHelper?: dom.DomHelper | null);
    /**
     * Sets the cookie which this component will edit.
     */
    selectCookie(cookieKey: string): void;
    canDecorate(): boolean;
    createDom(): void;
    enterDocument(): void;
    disposeInternal(): void;
}

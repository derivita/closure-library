/**
 * Interface for the common parts of XMLHttpRequest.
 *
 * Mostly copied from externs/w3c_xml.js.
 */
export interface XhrLike {
    onreadystatechange: (() => any) | null | undefined;
    response: ArrayBuffer | Blob | Document | object | string | null;
    responseText: string;
    responseType: string;
    responseXML: Document | null;
    readyState: number;
    status: number;
    statusText: string;
    /**
     *
     */
    open(method: string, url: string, opt_async?: boolean | null, opt_user?: string | null, opt_password?: string | null): any;
    /**
     *
     */
    send(opt_data?: ArrayBuffer | ArrayBufferView | Blob | Document | FormData | string | null): any;
    abort(): any;
    /**
     *
     */
    setRequestHeader(header: string, value: string): any;
    /**
     *
     */
    getResponseHeader(header: string): string | null;
    getAllResponseHeaders(): string;
    setTrustToken(trustTokenAttribute: any): any;
}
export declare namespace XhrLike {
    /**
     * Typedef that refers to either native or custom-implemented XHR objects.
     */
    type OrNative = XhrLike | XMLHttpRequest;
}

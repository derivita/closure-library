import { Disposable } from '../disposable/disposable.js';
/**
 * Class for unit testing code that uses googUserAgent.
 */
export declare class MockUserAgent extends Disposable {
    /**
     * Class for unit testing code that uses googUserAgent.
     */
    constructor();
    private noStructuralTyping_closure_goog_testing_mockuseragent_MockUserAgent;
    /**
     * Installs this MockUserAgent.
     */
    install(): void;
    getUserAgentString(): string | null;
    /**
     *
     * @param userAgent The desired userAgent string to use.
     */
    setUserAgentString(userAgent: string): void;
    getNavigator(): object | null;
    getNavigatorTyped(): Navigator | null;
    /**
     *
     * @param navigator The desired Navigator object to use.
     */
    setNavigator(navigator: object | null): void;
    getDocumentMode(): number | undefined;
    /**
     *
     * @param documentMode The desired documentMode to use.
     */
    setDocumentMode(documentMode: number): void;
    /**
     * Uninstalls the MockUserAgent.
     */
    uninstall(): void;
    disposeInternal(): void;
}

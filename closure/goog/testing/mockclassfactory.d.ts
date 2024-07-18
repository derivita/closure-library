import { LooseMock } from './loosemock.js';
import { StrictMock } from './strictmock.js';
/**
 * A record that represents all the data associated with a mock replacement of
 * a given class.
 */
export declare class MockClassRecord {
    /**
     * A record that represents all the data associated with a mock replacement of
     * a given class.
     * @param namespace The namespace in which the mocked class resides.
     * @param className The name of the class within the namespace.
     * @param originalClass The original class implementation before it was replaced by a proxy.
     * @param proxy The proxy that replaced the original class.
     */
    constructor(namespace: object | null, className: string, originalClass: Function | null, proxy: Function | null);
    private noStructuralTyping_closure_goog_testing_mockclassfactory_MockClassRecord;
    /**
     * A getter for this record's namespace.
     * @return The namespace.
     */
    getNamespace(): object | null;
    /**
     * A getter for this record's class name.
     * @return The name of the class referenced by this record.
     */
    getClassName(): string;
    /**
     * A getter for the original class.
     * @return The original class implementation before mocking.
     */
    getOriginalClass(): Function | null;
    /**
     * A getter for the proxy being used as a replacement for the original class.
     * @return The proxy.
     */
    getProxy(): Function | null;
    /**
     * A getter for the static mock.
     * @return The static mock associated with this record.
     */
    getStaticMock(): StrictMock | LooseMock | null | null;
    /**
     * A setter for the static mock.
     * @param staticMock A mock to associate with the static functions for the referenced class.
     */
    setStaticMock(staticMock: StrictMock | LooseMock | null): void;
    /**
     * Adds a new mock instance mapping.  The mapping connects a set of function
     * arguments to a specific mock instance.
     * @param args An array of function arguments.
     * @param mock A mock associated with the supplied arguments.
     */
    addMockInstance(args: any[] | null, mock: StrictMock | LooseMock | null): void;
    /**
     * Finds the mock corresponding to a given argument set.  Throws an error if
     * there is no appropriate match found.
     * @param args An array of function arguments.
     * @return The mock corresponding to a given argument set.
     */
    findMockInstance(args: any[] | null): StrictMock | LooseMock | null | null;
    /**
     * Resets this record by reverting all the mocked classes back to the original
     * implementation and clearing out the mock instance list.
     */
    reset(): void;
}
/**
 * A factory used to create new mock class instances.  It is able to generate
 * both static and loose mocks.  The MockClassFactory is a singleton since it
 * tracks the classes that have been mocked internally.
 */
export declare class MockClassFactory {
    /**
     * A factory used to create new mock class instances.  It is able to generate
     * both static and loose mocks.  The MockClassFactory is a singleton since it
     * tracks the classes that have been mocked internally.
     */
    constructor();
    private noStructuralTyping_closure_goog_testing_mockclassfactory_MockClassFactory;
    /**
     * Gets a strict mock for a given class.
     * @param namespace A javascript namespace (e.g. goog.testing).
     * @param classToMock The class that will be mocked.
     * @param var_args The arguments associated with this instance's constructor.
     * @return The mock created for the provided class.
     */
    getStrictMockClass(namespace: object | null, classToMock: Function | null, ...var_args: any[]): StrictMock;
    /**
     * Gets a loose mock for a given class.
     * @param namespace A javascript namespace (e.g. goog.testing).
     * @param classToMock The class that will be mocked.
     * @param var_args The arguments associated with this instance's constructor.
     * @return The mock created for the provided class.
     */
    getLooseMockClass(namespace: object | null, classToMock: Function | null, ...var_args: any[]): LooseMock | null;
    /**
     * Gets a strict mock for the static functions of a given class.
     * @param namespace A javascript namespace (e.g. goog.testing).
     * @param classToMock The class whose static functions will be mocked.  This should be the original class and not the proxy.
     * @return The mock created for the static functions of the provided class.
     */
    getStrictStaticMock(namespace: object | null, classToMock: Function | null): StrictMock | null;
    /**
     * Gets a loose mock for the static functions of a given class.
     * @param namespace A javascript namespace (e.g. goog.testing).
     * @param classToMock The class whose static functions will be mocked.  This should be the original class and not the proxy.
     * @return The mock created for the static functions of the provided class.
     */
    getLooseStaticMock(namespace: object | null, classToMock: Function | null): LooseMock | null;
    /**
     * Resests the factory by reverting all mocked classes to their original
     * implementations and removing all MockClassRecords.
     */
    reset(): void;
}

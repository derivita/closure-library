import * as iter from '../../iter/iter.js';
import { IterableMechanism } from './iterablemechanism.js';
/**
 * Wraps an iterable storage mechanism and creates artificial namespaces.
 */
export declare class PrefixedMechanism extends IterableMechanism {
    /**
     * Wraps an iterable storage mechanism and creates artificial namespaces.
     * @param mechanism Underlying iterable storage mechanism.
     * @param prefix Prefix for creating an artificial namespace.
     */
    constructor(mechanism: IterableMechanism, prefix: string);
    private noStructuralTyping_closure_goog_storage_mechanism_prefixedmechanism_PrefixedMechanism;
    set(key: any, value: any): any;
    get(key: any): string;
    remove(key: any): any;
    __iterator__(opt_keys: any): iter.Iterator<any>;
}

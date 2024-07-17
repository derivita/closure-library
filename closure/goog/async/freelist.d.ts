declare class FreeList<ITEM = any> {
    constructor(create: () => (ITEM | null), reset: any, limit: number);
    get(): ITEM | null;
    put(item: ITEM | null): void;
}
export { FreeList };

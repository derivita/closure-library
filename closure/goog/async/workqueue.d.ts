/**
 * A low GC workqueue. The key elements of this design:
 * - avoids the need for goog.bind or equivalent by carrying scope
 * - avoids the need for array reallocation by using a linked list
 * - minimizes work entry objects allocation by recycling objects
 */
declare class WorkQueue {
    constructor();
    add(fn: () => any, scope: object | null | undefined | null): void;
    remove(): WorkItem | null;
    returnUnused(item: WorkItem): void;
    static DEFAULT_MAX_UNUSED: number;
}
declare class WorkItem {
    constructor();
    set(fn: () => any, scope: object | null | undefined | null): void;
    /**
     * Reset the work item so they don't prevent GC before reuse
     */
    reset(): void;
    fn: (() => any) | null;
    scope: object | null | undefined | null;
    next: WorkItem | null;
}
export { WorkQueue };

declare class ModuleLoadFailure {
    constructor(type: ModuleLoadFailure.Type, status?: number);
    toString(): string;
    type: ModuleLoadFailure.Type;
    status: number | undefined;
}
declare namespace ModuleLoadFailure {
    /**
     * The possible reasons for a module load failure callback being fired.
     */
    enum Type {
        UNAUTHORIZED = 0,
        CONSECUTIVE_FAILURES = 1,
        TIMEOUT = 2,
        OLD_CODE_GONE = 3,
        INIT_ERROR = 4
    }
}
export { ModuleLoadFailure };

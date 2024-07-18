type Task_ = {
    'id': number;
    'fn': Function;
    'context': object | undefined;
};
type TaskSet_ = {
    'measureTask': Task_ | null;
    'mutateTask': Task_ | null;
    'state': object | undefined;
    'args': any[] | undefined;
    'isScheduled': boolean;
};
export type Spec = {
    'measure': Function | undefined;
    'mutate': Function | undefined;
};
/**
 * A type to represent state. Users may add properties as desired.
 */
export declare class State {
    /**
     * A type to represent state. Users may add properties as desired.
     */
    constructor();
    private noStructuralTyping_closure_goog_dom_animationframe_animationframe_State;
}
/**
 * Saves a set of tasks to be executed in the next requestAnimationFrame phase.
 * This list is initialized once before any event firing occurs. It is not
 * affected by the fired events or the requestAnimationFrame processing (unless
 * a new event is created during the processing).
 */
export declare var tasks_: (TaskSet_ | null)[][];
/**
 * Whether we have already requested an animation frame that hasn't happened
 * yet.
 */
export declare var requestedFrame_: boolean;
/**
 * Returns a function that schedules the two passed-in functions to be run upon
 * the next animation frame. Calling the function again during the same
 * animation frame does nothing.
 *
 * The function under the "measure" key will run first and together with all
 * other functions scheduled under this key and the function under "mutate" will
 * run after that.
 * @param opt_context Context in which to run the function.
 */
export declare function createTask<THIS = any>(spec: {
    'measure': ((this: THIS | null) => any) | undefined;
    'mutate': ((this: THIS | null) => any) | undefined;
}, opt_context?: THIS | null): () => any;
export declare function isRunning(): boolean;
export {};

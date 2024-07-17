/**
 * Class used for singleton Trace.  Used for timing slow points in
 * the code. Based on the java Tracer class but optimized for javascript.
 * See com.google.common.tracing.Tracer.
 * It is also possible to bridge from this class to other tracer classes via
 * adding listeners.
 */
declare class Trace_ {
    /**
     * Class used for singleton Trace.  Used for timing slow points in
     * the code. Based on the java Tracer class but optimized for javascript.
     * See com.google.common.tracing.Tracer.
     * It is also possible to bridge from this class to other tracer classes via
     * adding listeners.
     */
    constructor();
    private noStructuralTyping_closure_goog_debug_tracer_Trace_;
    /**
     * Maximum size of the trace before we discard events
     */
    MAX_TRACE_SIZE: number;
    /**
     * Removes all registered callback functions. Mainly used for testing.
     */
    removeAllListeners(): void;
    /**
     * Adds up to three callback functions which are called on `startTracer`,
     * `stopTracer`, `clearOutstandingEvents_` and `addComment` in
     * order to bridge from the Closure tracer singleton object to any tracer class.
     * @param callbacks An object literal containing the callback functions.
     */
    addTraceCallbacks(callbacks: Trace_.TracerCallbacks): void;
    /**
     * Add the ability to explicitly set the start time. This is useful for example
     * for measuring initial load time where you can set a variable as soon as the
     * main page of the app is loaded and then later call this function when the
     * Tracer code has been loaded.
     * @param startTime The start time to set.
     */
    setStartTime(startTime: number): void;
    /**
     * Initializes and resets the current trace
     * @param defaultThreshold The default threshold below which the tracer output will be suppressed. Can be overridden on a per-Tracer basis.
     */
    initCurrentTrace(defaultThreshold: number): void;
    /**
     * Clears the current trace
     */
    clearCurrentTrace(): void;
    /**
     * Resets the trace.
     * @param defaultThreshold The default threshold below which the tracer output will be suppressed. Can be overridden on a per-Tracer basis.
     */
    reset(defaultThreshold: number): void;
    /**
     * Starts a tracer
     * @param comment A comment used to identify the tracer. Does not need to be unique.
     * @param opt_type Type used to identify the tracer. If a Trace is given a type (the first argument to the constructor) and multiple Traces are done on that type then a "TOTAL line will be produced showing the total number of traces and the sum of the time ("TOTAL Database 2 (37 ms)" in our example). These traces should be mutually exclusive or else the sum won't make sense (the time will be double counted if the second starts before the first ends).
     * @return The identifier for the tracer that should be passed to the the stopTracer method.
     */
    startTracer(comment: string, opt_type?: string): number;
    /**
     * Stops a tracer
     * @param id The id of the tracer that is ending.
     * @param opt_silenceThreshold Threshold below which the tracer is silenced.
     * @return The elapsed time for the tracer or null if the tracer identitifer was not recognized.
     */
    stopTracer(id: number | undefined | null, opt_silenceThreshold?: number): number | null;
    /**
     * Adds a comment to the trace. Makes it possible to see when a specific event
     * happened in relation to the traces.
     * @param comment A comment that is inserted into the trace.
     * @param opt_type Type used to identify the tracer. If a comment is given a type and multiple comments are done on that type then a "TOTAL line will be produced showing the total number of comments of that type.
     * @param opt_timeStamp The timestamp to insert the comment. If not specified, the current time wil be used.
     */
    addComment(comment: string, opt_type?: string | null, opt_timeStamp?: number | null): void;
    /**
     * Returns a formatted string for the current trace
     * @return A formatted string that shows the timings of the current trace.
     */
    getFormattedTrace(): string;
    /**
     * Returns a formatted string that describes the thread trace.
     * @return A formatted string.
     */
    toString(): string;
    /**
     * Returns the current time. Done through a wrapper function so it can be
     * overridden by application code. Gmail has an ActiveX extension that provides
     * higher precision timing info.
     * @return The current time in milliseconds.
     */
    static now(): number;
}
declare namespace Trace_ {
    /**
     * Event type supported by tracer
     */
    enum EventType {
        START = 0,
        STOP = 1,
        COMMENT = 2
    }
    /**
     * Class to keep track of a stat of a single tracer type. Stores the count
     * and cumulative time.
     */
    class Stat_ {
        /**
         * Class to keep track of a stat of a single tracer type. Stores the count
         * and cumulative time.
         */
        constructor();
        private noStructuralTyping_closure_goog_debug_tracer_Stat_;
        /**
         * Number of tracers
         */
        count: number;
        /**
         * Cumulative time of traces
         */
        time: number;
        type: string | null | undefined;
        toString(): string;
    }
    /**
     * Private class used to encapsulate a single event, either the start or stop
     * of a tracer.
     */
    class Event_ {
        /**
         * Private class used to encapsulate a single event, either the start or stop
         * of a tracer.
         */
        constructor();
        private noStructuralTyping_closure_goog_debug_tracer_Event_;
        type: string | null | undefined;
        eventType: Trace_.EventType | undefined | null;
        id: number | undefined;
        comment: string | undefined;
        eventTime: number | undefined;
        startTime: number | undefined;
        stopTime: number | undefined;
        /**
         * Returns a formatted string for the event.
         * @param startTime The start time of the trace to generate relative times.
         * @param prevTime The completion time of the previous event or -1.
         * @param indent Extra indent for the message if there was no previous event.
         * @return The formatted tracer string.
         */
        toTraceString(startTime: number, prevTime: number, indent: string): string;
        toString(): string;
    }
    /**
     * A class to specify the types of the callback functions used by
     * `addTraceCallbacks`.
     */
    interface TracerCallbacks {
    }
    namespace TracerCallbacks {
        /**
         * A function that combines two function with the same parameters in a sequence.
         * @param fn1 The first function to be combined.
         * @param fn2 The second function to be combined.
         * @return A function that calls the inputs in sequence.
         */
        var sequence_: Function | undefined;
    }
}
/**
 * Singleton trace object
 */
export declare var Trace: Trace_ | null;
/**
 * The detail of calling the stop callback for a trace.
 */
export interface StopTraceDetail {
}
export {};

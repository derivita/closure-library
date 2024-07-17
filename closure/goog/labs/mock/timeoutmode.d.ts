export declare class TimeoutMode {
    constructor(duration: number);
    duration: number;
}
/**
 *
 * @param duration Timeout duration in milliseconds.
 */
export declare function timeout(duration: number): TimeoutMode;

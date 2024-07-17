import { EventTarget } from '../events/eventtarget.js';
/**
 * Creates a range model
 */
export declare class RangeModel extends EventTarget {
    /**
     * Creates a range model
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_rangemodel_RangeModel;
    /**
     * Sets the model to mute / unmute.
     * @param muteValue Whether or not to mute the range, i.e., suppress any CHANGE events.
     */
    setMute(muteValue: boolean): void;
    /**
     * Sets the value.
     * @param value The new value.
     */
    setValue(value: number): void;
    getValue(): number;
    /**
     * Sets the extent. The extent is the 'size' of the value.
     * @param extent The new extent.
     */
    setExtent(extent: number): void;
    getExtent(): number;
    /**
     * Sets the minimum
     * @param minimum The new minimum.
     */
    setMinimum(minimum: number): void;
    getMinimum(): number;
    /**
     * Sets the maximum
     * @param maximum The new maximum.
     */
    setMaximum(maximum: number): void;
    getMaximum(): number;
    /**
     * Returns the step value. The step value is used to determine how to round the
     * value.
     * @return The maximimum value for the range model.
     */
    getStep(): number | null;
    /**
     * Sets the step. The step value is used to determine how to round the value.
     * @param step The step size.
     */
    setStep(step: number | null): void;
    /**
     * Rounds to the closest step using the minimum value as the base.
     * @param value The number to round.
     * @return The number rounded to the closest step.
     */
    roundToStepWithMin(value: number): number;
    /**
     * Rounds to the closest step.
     * @param value The number to round.
     * @return The number rounded to the closest step.
     */
    roundToStep(value: number): number;
}

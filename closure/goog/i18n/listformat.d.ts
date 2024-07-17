/**
 * Choices for options bag 'type' in ListFormat's constructor.
 */
declare enum ListFormatType {
    AND = "conjunction",
    OR = "disjunction",
    UNIT = "unit"
}
export { ListFormatType };
/**
 * Choices for options bag 'style' in ListFormat's constructor,
 * applied for type UNIT.
 */
declare enum ListFormatStyle {
    LONG = "long",
    SHORT = "short",
    NARROW = "narrow"
}
export { ListFormatStyle };
/**
 * Options bag parameter for constructor.
 */
type ListOptions = {
    'type': ListFormatType | undefined;
    'style': ListFormatStyle | undefined;
};
declare class ListFormat {
    /**
     * Returns the listformatter for the locale given by goog.LOCALE.
     * specified, a listformatter for the user's locale will be returned.
     * The single optional string parameter may have one of the enums
     * given in ListFormatType, which is either AND ('conjunction')
     * or OR ('disjunction'). These gives locale-specific lists formatted
     * using AND / OR respectively.
     */
    constructor(listOptions?: ListOptions | null);
    /**
     * Formats a list of items in either conjunctive or disjunctive form
     * with locale-specific punctuation and joining words.
     */
    format(items: (string | number)[]): string;
}
export { ListFormat };

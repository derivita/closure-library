/**
 * Constructor of MessageFormat.
 */
export declare class MessageFormat {
    /**
     * Constructor of MessageFormat.
     * @param pattern The pattern we parse and apply positional parameters to.
     */
    constructor(pattern: string);
    private noStructuralTyping_closure_goog_i18n_messageformat_MessageFormat;
    /**
     * Formats a message, treating '#' with special meaning representing
     * the number (plural_variable - offset).
     * @param namedParameters Parameters that either influence the formatting or are used as actual data. I.e. in call to fmt.format({'NUM_PEOPLE': 5, 'NAME': 'Angela'}), object {'NUM_PEOPLE': 5, 'NAME': 'Angela'} holds positional parameters. 1st parameter could mean 5 people, which could influence plural format, and 2nd parameter is just a data to be printed out in proper position.
     * @return Formatted message.
     */
    format(namedParameters: object): string;
    /**
     * Formats a message, treating '#' as literary character.
     * @param namedParameters Parameters that either influence the formatting or are used as actual data. I.e. in call to fmt.format({'NUM_PEOPLE': 5, 'NAME': 'Angela'}), object {'NUM_PEOPLE': 5, 'NAME': 'Angela'} holds positional parameters. 1st parameter could mean 5 people, which could influence plural format, and 2nd parameter is just a data to be printed out in proper position.
     * @return Formatted message.
     */
    formatIgnoringPound(namedParameters: object): string;
}
export declare namespace MessageFormat {
    /**
     * Marks a string and block during parsing.
     */
    enum Element_ {
        STRING = 0,
        BLOCK = 1
    }
    /**
     * Block type.
     */
    enum BlockType_ {
        PLURAL = 0,
        ORDINAL = 1,
        SELECT = 2,
        SIMPLE = 3,
        STRING = 4,
        UNKNOWN = 5
    }
    type TypeVal_ = {
        'type': MessageFormat.Element_;
        'value': any;
    };
    type BlockTypeVal_ = {
        'type': MessageFormat.BlockType_;
        'value': any;
    };
}

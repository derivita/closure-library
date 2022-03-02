//!! generated by clutz.
// Generated from i18n/relativedatetimeformat.js
declare namespace ಠ_ಠ.clutz {
  class module$exports$goog$i18n$RelativeDateTimeFormat {
    private noStructuralTyping_module$exports$goog$i18n$RelativeDateTimeFormat : any;
    constructor (opt_numeric ? : ಠ_ಠ.clutz.module$exports$goog$i18n$RelativeDateTimeFormat.NumericOption , opt_style ? : ಠ_ಠ.clutz.module$exports$goog$i18n$RelativeDateTimeFormat.Style , opt_relativeDateTimeSymbols ? : ಠ_ಠ.clutz.module$exports$goog$i18n$relativeDateTimeSymbols.RelativeDateTimeSymbols ) ;
    /**
     * Formats a string with the amount and relative unit. If data for the quantity
     * is not available in the requested style, then it falls back to next style. If
     * not available in any style, then it reverts to formatNumeric for the same
     * unit.
     * @param quantity A desired offset from current time, negative for past, 0 for now, positive for future.
     * @param relativeUnit Type such as HOUR, YEAR, QUARTER.
     */
    format (quantity : number , relativeUnit : ಠ_ಠ.clutz.module$exports$goog$i18n$RelativeDateTimeFormat.Unit ) : string ;
    /**
     * Returns the style set for this formatter.
     */
    getFormatStyle ( ) : number ;
    /**
     * Returns the status of the alwaysNumeric field.
     */
    getNumericMode ( ) : ಠ_ಠ.clutz.module$exports$goog$i18n$RelativeDateTimeFormat.NumericOption ;
    /**
     * Returns relative field for an offset of a given value unit
     * if it is defined for the current style.
     * If the value does not exist, return undefined.
     * For example, is there a -2 offset for DAY in the current locale and style.
     * Note: This data is not available in an ECMAScript implementation.
     */
    isOffsetDefinedForUnit (unit : ಠ_ಠ.clutz.module$exports$goog$i18n$RelativeDateTimeFormat.Unit , offset : string | number ) : string | undefined ;
  }
}
// Generated from i18n/relativedatetimeformat.js
declare namespace ಠ_ಠ.clutz.module$exports$goog$i18n$RelativeDateTimeFormat {
  /**
   * Values for setting the numeric mode in the constructor.
   */
  enum NumericOption {
    ALWAYS = 'always' ,
    AUTO = 'auto' ,
  }
  /**
   * Collection of public style symbols.
   */
  enum Style {
    LONG = 0.0 ,
    NARROW = 2.0 ,
    SHORT = 1.0 ,
  }
  /**
   * Relative unit constants for public use.
   */
  enum Unit {
    DAY = 4.0 ,
    HOUR = 5.0 ,
    MINUTE = 6.0 ,
    MONTH = 2.0 ,
    QUARTER = 1.0 ,
    SECOND = 7.0 ,
    WEEK = 3.0 ,
    YEAR = 0.0 ,
  }
}
declare module 'goog:goog.i18n.RelativeDateTimeFormat' {
  import RelativeDateTimeFormat = ಠ_ಠ.clutz.module$exports$goog$i18n$RelativeDateTimeFormat;
  export default RelativeDateTimeFormat;
}

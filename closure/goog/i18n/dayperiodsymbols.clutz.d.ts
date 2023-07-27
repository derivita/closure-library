//!! generated by clutz.
// Generated from i18n/dayperiodsymbols.js
declare namespace ಠ_ಠ.clutz.goog.i18n.DayPeriods {
  type DayPeriodInfo = { DayPeriodInfo : any } ;
  type DayPeriods = { DayPeriods : any } ;
  /**
   * Data for dayperiods by locale.
   */
  let DayPeriods_zh_Hant : ಠ_ಠ.clutz.module$contents$goog$i18n$DayPeriods_DayPeriods ;
  /**
   * Returns the DayPeriod for the given locale. This may be undefined or null.
   */
  function getDayPeriods ( ) : ಠ_ಠ.clutz.module$contents$goog$i18n$DayPeriods_DayPeriods | null ;
  /**
   * Sets the default ListFormatSymbols
   */
  function setDayPeriods (newDayPeriods : ಠ_ಠ.clutz.module$contents$goog$i18n$DayPeriods_DayPeriods | null ) : void ;
}
declare module 'goog:goog.i18n.DayPeriods' {
  import DayPeriods = ಠ_ಠ.clutz.goog.i18n.DayPeriods;
  export = DayPeriods;
}
// Generated from i18n/dayperiodsymbols.js
declare namespace ಠ_ಠ.clutz {
  /**
   * Information on periods of the day for a locale
   */
  type module$contents$goog$i18n$DayPeriods_DayPeriods = { afternoon1 ? : ಠ_ಠ.clutz.module$contents$goog$i18n$DayPeriods_DayPeriodInfo | null , afternoon2 ? : ಠ_ಠ.clutz.module$contents$goog$i18n$DayPeriods_DayPeriodInfo | null , evening1 ? : ಠ_ಠ.clutz.module$contents$goog$i18n$DayPeriods_DayPeriodInfo | null , evening2 ? : ಠ_ಠ.clutz.module$contents$goog$i18n$DayPeriods_DayPeriodInfo | null , midnight ? : ಠ_ಠ.clutz.module$contents$goog$i18n$DayPeriods_DayPeriodInfo | null , morning1 ? : ಠ_ಠ.clutz.module$contents$goog$i18n$DayPeriods_DayPeriodInfo | null , morning2 ? : ಠ_ಠ.clutz.module$contents$goog$i18n$DayPeriods_DayPeriodInfo | null , night1 ? : ಠ_ಠ.clutz.module$contents$goog$i18n$DayPeriods_DayPeriodInfo | null , night2 ? : ಠ_ಠ.clutz.module$contents$goog$i18n$DayPeriods_DayPeriodInfo | null , noon ? : ಠ_ಠ.clutz.module$contents$goog$i18n$DayPeriods_DayPeriodInfo | null } ;
}
// Generated from i18n/dayperiodsymbols.js
declare namespace ಠ_ಠ.clutz {
  /**
   * Fields for each day period
   * formatNames 1-3 styles: wide (default), narrow, & abbreviated
   * standaloneNames 1-3 styles:  wide (default), narrow, & abbreviated
   */
  type module$contents$goog$i18n$DayPeriods_DayPeriodInfo = { at ? : string , before ? : string , formatNames ? : string [] , from ? : string , periodName : string , standaloneNames ? : string [] } ;
}
declare namespace ಠ_ಠ.clutz.module$exports$goog$i18n$DayPeriods {
  export import DayPeriods = ಠ_ಠ.clutz.null ;
}

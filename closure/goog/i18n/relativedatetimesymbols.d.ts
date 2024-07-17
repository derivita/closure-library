/**
 * Collection of relative date time unit symbols for a locale.
 */
export type RelativeDateTimeSymbols = {
    'YEAR': RelativeDateTimeFormatStyles;
    'QUARTER': RelativeDateTimeFormatStyles;
    'MONTH': RelativeDateTimeFormatStyles;
    'WEEK': RelativeDateTimeFormatStyles;
    'DAY': RelativeDateTimeFormatStyles;
    'HOUR': RelativeDateTimeFormatStyles;
    'MINUTE': RelativeDateTimeFormatStyles;
    'SECOND': RelativeDateTimeFormatStyles;
};
/**
 * Collection of date interval symbols for each relative unit.
 */
export type RelativeDateTimeFormatStyles = {
    'LONG': StyleElement;
    'SHORT': StyleElement | undefined;
    'NARROW': StyleElement | undefined;
};
/**
 * Collection of relative symbols for a given style.
 * Field names are single character to save space.
 * R: relative fields for named relative times, e.g., "yesteday", "vorgestern", "maana"
 * F: plural format for future numeric differences, e.g., "in 3 days", "hace 3 horas"
 * P: plural format for past numeric differences, e.g., "3 seconds ago", "vor 17 Min."
 */
export type StyleElement = {
    'R': RelativeDateTimeDirectionMap;
    'F': string;
    'P': string;
};
/**
 * Map of direction options for RELATIVE data with integer keys.
 */
export type RelativeDateTimeDirectionMap = {
    [key: string]: string;
};
/**
 * Returns the default RelativeDateTimeSymbols.
 */
export declare function getRelativeDateTimeSymbols(): RelativeDateTimeSymbols;
/**
 * Sets the default RelativeDateTimeSymbols.
 */
export declare function setRelativeDateTimeSymbols(symbols: RelativeDateTimeSymbols): void;
export declare let RelativeDateTimeSymbols_af: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_am: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ar: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ar_DZ: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ar_EG: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_az: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_be: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_bg: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_bn: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_br: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_bs: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ca: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_chr: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_cs: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_cy: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_da: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_de: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_de_AT: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_de_CH: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_el: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_en: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_en_AU: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_en_CA: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_en_GB: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_en_IE: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_en_IN: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_en_SG: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_en_US: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_en_ZA: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_es: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_es_419: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_es_ES: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_es_MX: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_es_US: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_et: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_eu: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_fa: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_fi: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_fil: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_fr: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_fr_CA: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ga: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_gl: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_gsw: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_gu: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_haw: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_he: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_hi: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_hr: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_hu: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_hy: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_id: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_in: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_is: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_it: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_iw: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ja: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ka: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_kk: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_km: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_kn: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ko: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ky: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ln: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_lo: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_lt: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_lv: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_mk: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ml: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_mn: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_mo: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_mr: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ms: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_mt: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_my: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_nb: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ne: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_nl: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_no: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_no_NO: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_or: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_pa: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_pl: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_pt: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_pt_BR: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_pt_PT: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ro: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ru: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_sh: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_si: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_sk: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_sl: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_sq: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_sr: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_sr_Latn: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_sv: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_sw: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ta: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_te: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_th: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_tl: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_tr: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_uk: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_ur: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_uz: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_vi: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_zh: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_zh_CN: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_zh_HK: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_zh_TW: RelativeDateTimeSymbols;
export declare let RelativeDateTimeSymbols_zu: RelativeDateTimeSymbols;

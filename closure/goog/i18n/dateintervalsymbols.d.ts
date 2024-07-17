/**
 * Map containing the interval pattern for every calendar field.
 */
export type DateIntervalPatternMap = {
    [key: string]: string;
};
/**
 * Collection of date interval symbols.
 */
export type DateIntervalSymbols = {
    'FULL_DATE': DateIntervalPatternMap;
    'LONG_DATE': DateIntervalPatternMap;
    'MEDIUM_DATE': DateIntervalPatternMap;
    'SHORT_DATE': DateIntervalPatternMap;
    'FULL_TIME': DateIntervalPatternMap;
    'LONG_TIME': DateIntervalPatternMap;
    'MEDIUM_TIME': DateIntervalPatternMap;
    'SHORT_TIME': DateIntervalPatternMap;
    'FULL_DATETIME': DateIntervalPatternMap;
    'LONG_DATETIME': DateIntervalPatternMap;
    'MEDIUM_DATETIME': DateIntervalPatternMap;
    'SHORT_DATETIME': DateIntervalPatternMap;
    'FALLBACK': string;
};
/**
 * Returns the default DateIntervalSymbols.
 */
export declare function getDateIntervalSymbols(): DateIntervalSymbols;
/**
 * Sets the default DateIntervalSymbols.
 */
export declare function setDateIntervalSymbols(symbols: DateIntervalSymbols): void;
export declare let DateIntervalSymbols_af: DateIntervalSymbols;
export declare let DateIntervalSymbols_am: DateIntervalSymbols;
export declare let DateIntervalSymbols_ar: DateIntervalSymbols;
export declare let DateIntervalSymbols_ar_DZ: DateIntervalSymbols;
export declare let DateIntervalSymbols_ar_EG: DateIntervalSymbols;
export declare let DateIntervalSymbols_az: DateIntervalSymbols;
export declare let DateIntervalSymbols_be: DateIntervalSymbols;
export declare let DateIntervalSymbols_bg: DateIntervalSymbols;
export declare let DateIntervalSymbols_bn: DateIntervalSymbols;
export declare let DateIntervalSymbols_br: DateIntervalSymbols;
export declare let DateIntervalSymbols_bs: DateIntervalSymbols;
export declare let DateIntervalSymbols_ca: DateIntervalSymbols;
export declare let DateIntervalSymbols_chr: DateIntervalSymbols;
export declare let DateIntervalSymbols_cs: DateIntervalSymbols;
export declare let DateIntervalSymbols_cy: DateIntervalSymbols;
export declare let DateIntervalSymbols_da: DateIntervalSymbols;
export declare let DateIntervalSymbols_de: DateIntervalSymbols;
export declare let DateIntervalSymbols_de_AT: DateIntervalSymbols;
export declare let DateIntervalSymbols_de_CH: DateIntervalSymbols;
export declare let DateIntervalSymbols_el: DateIntervalSymbols;
export declare let DateIntervalSymbols_en: DateIntervalSymbols;
export declare let DateIntervalSymbols_en_AU: DateIntervalSymbols;
export declare let DateIntervalSymbols_en_CA: DateIntervalSymbols;
export declare let DateIntervalSymbols_en_GB: DateIntervalSymbols;
export declare let DateIntervalSymbols_en_IE: DateIntervalSymbols;
export declare let DateIntervalSymbols_en_IN: DateIntervalSymbols;
export declare let DateIntervalSymbols_en_SG: DateIntervalSymbols;
export declare let DateIntervalSymbols_en_US: DateIntervalSymbols;
export declare let DateIntervalSymbols_en_ZA: DateIntervalSymbols;
export declare let DateIntervalSymbols_es: DateIntervalSymbols;
export declare let DateIntervalSymbols_es_419: DateIntervalSymbols;
export declare let DateIntervalSymbols_es_ES: DateIntervalSymbols;
export declare let DateIntervalSymbols_es_MX: DateIntervalSymbols;
export declare let DateIntervalSymbols_es_US: DateIntervalSymbols;
export declare let DateIntervalSymbols_et: DateIntervalSymbols;
export declare let DateIntervalSymbols_eu: DateIntervalSymbols;
export declare let DateIntervalSymbols_fa: DateIntervalSymbols;
export declare let DateIntervalSymbols_fi: DateIntervalSymbols;
export declare let DateIntervalSymbols_fil: DateIntervalSymbols;
export declare let DateIntervalSymbols_fr: DateIntervalSymbols;
export declare let DateIntervalSymbols_fr_CA: DateIntervalSymbols;
export declare let DateIntervalSymbols_ga: DateIntervalSymbols;
export declare let DateIntervalSymbols_gl: DateIntervalSymbols;
export declare let DateIntervalSymbols_gsw: DateIntervalSymbols;
export declare let DateIntervalSymbols_gu: DateIntervalSymbols;
export declare let DateIntervalSymbols_haw: DateIntervalSymbols;
export declare let DateIntervalSymbols_he: DateIntervalSymbols;
export declare let DateIntervalSymbols_hi: DateIntervalSymbols;
export declare let DateIntervalSymbols_hr: DateIntervalSymbols;
export declare let DateIntervalSymbols_hu: DateIntervalSymbols;
export declare let DateIntervalSymbols_hy: DateIntervalSymbols;
export declare let DateIntervalSymbols_id: DateIntervalSymbols;
export declare let DateIntervalSymbols_in: DateIntervalSymbols;
export declare let DateIntervalSymbols_is: DateIntervalSymbols;
export declare let DateIntervalSymbols_it: DateIntervalSymbols;
export declare let DateIntervalSymbols_iw: DateIntervalSymbols;
export declare let DateIntervalSymbols_ja: DateIntervalSymbols;
export declare let DateIntervalSymbols_ka: DateIntervalSymbols;
export declare let DateIntervalSymbols_kk: DateIntervalSymbols;
export declare let DateIntervalSymbols_km: DateIntervalSymbols;
export declare let DateIntervalSymbols_kn: DateIntervalSymbols;
export declare let DateIntervalSymbols_ko: DateIntervalSymbols;
export declare let DateIntervalSymbols_ky: DateIntervalSymbols;
export declare let DateIntervalSymbols_ln: DateIntervalSymbols;
export declare let DateIntervalSymbols_lo: DateIntervalSymbols;
export declare let DateIntervalSymbols_lt: DateIntervalSymbols;
export declare let DateIntervalSymbols_lv: DateIntervalSymbols;
export declare let DateIntervalSymbols_mk: DateIntervalSymbols;
export declare let DateIntervalSymbols_ml: DateIntervalSymbols;
export declare let DateIntervalSymbols_mn: DateIntervalSymbols;
export declare let DateIntervalSymbols_mo: DateIntervalSymbols;
export declare let DateIntervalSymbols_mr: DateIntervalSymbols;
export declare let DateIntervalSymbols_ms: DateIntervalSymbols;
export declare let DateIntervalSymbols_mt: DateIntervalSymbols;
export declare let DateIntervalSymbols_my: DateIntervalSymbols;
export declare let DateIntervalSymbols_nb: DateIntervalSymbols;
export declare let DateIntervalSymbols_ne: DateIntervalSymbols;
export declare let DateIntervalSymbols_nl: DateIntervalSymbols;
export declare let DateIntervalSymbols_no: DateIntervalSymbols;
export declare let DateIntervalSymbols_no_NO: DateIntervalSymbols;
export declare let DateIntervalSymbols_or: DateIntervalSymbols;
export declare let DateIntervalSymbols_pa: DateIntervalSymbols;
export declare let DateIntervalSymbols_pl: DateIntervalSymbols;
export declare let DateIntervalSymbols_pt: DateIntervalSymbols;
export declare let DateIntervalSymbols_pt_BR: DateIntervalSymbols;
export declare let DateIntervalSymbols_pt_PT: DateIntervalSymbols;
export declare let DateIntervalSymbols_ro: DateIntervalSymbols;
export declare let DateIntervalSymbols_ru: DateIntervalSymbols;
export declare let DateIntervalSymbols_sh: DateIntervalSymbols;
export declare let DateIntervalSymbols_si: DateIntervalSymbols;
export declare let DateIntervalSymbols_sk: DateIntervalSymbols;
export declare let DateIntervalSymbols_sl: DateIntervalSymbols;
export declare let DateIntervalSymbols_sq: DateIntervalSymbols;
export declare let DateIntervalSymbols_sr: DateIntervalSymbols;
export declare let DateIntervalSymbols_sr_Latn: DateIntervalSymbols;
export declare let DateIntervalSymbols_sv: DateIntervalSymbols;
export declare let DateIntervalSymbols_sw: DateIntervalSymbols;
export declare let DateIntervalSymbols_ta: DateIntervalSymbols;
export declare let DateIntervalSymbols_te: DateIntervalSymbols;
export declare let DateIntervalSymbols_th: DateIntervalSymbols;
export declare let DateIntervalSymbols_tl: DateIntervalSymbols;
export declare let DateIntervalSymbols_tr: DateIntervalSymbols;
export declare let DateIntervalSymbols_uk: DateIntervalSymbols;
export declare let DateIntervalSymbols_ur: DateIntervalSymbols;
export declare let DateIntervalSymbols_uz: DateIntervalSymbols;
export declare let DateIntervalSymbols_vi: DateIntervalSymbols;
export declare let DateIntervalSymbols_zh: DateIntervalSymbols;
export declare let DateIntervalSymbols_zh_CN: DateIntervalSymbols;
export declare let DateIntervalSymbols_zh_HK: DateIntervalSymbols;
export declare let DateIntervalSymbols_zh_TW: DateIntervalSymbols;
export declare let DateIntervalSymbols_zu: DateIntervalSymbols;

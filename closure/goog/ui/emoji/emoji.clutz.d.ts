//!! generated by clutz.
// Generated from ui/emoji/emoji.js
declare namespace ಠ_ಠ.clutz.goog.ui.emoji {
  /**
   * Creates an emoji.
   *
   * A simple wrapper for an emoji.
   */
  class Emoji {
    private noStructuralTyping_goog_ui_emoji_Emoji : any;
    /**
     * Creates an emoji.
     *
     * A simple wrapper for an emoji.
     * @param url URL pointing to the source image for the emoji.
     * @param id The id of the emoji, e.g., 'std.1'.
     * @param opt_height The height of the emoji, if undefined the natural height of the emoji is used.
     * @param opt_width The width of the emoji, if undefined the natural width of the emoji is used.
     * @param opt_altText The alt text for the emoji image, eg. the unicode character representation of the emoji.
     */
    constructor (url : string , id : string , opt_height ? : number , opt_width ? : number , opt_altText ? : string ) ;
    getAltText ( ) : string | null ;
    getHeight ( ) : number | null ;
    getId ( ) : string ;
    getUrl ( ) : string ;
    getWidth ( ) : number | null ;
    /**
     * The name of the goomoji attribute, used for emoji image elements.
     */
    static ATTRIBUTE : string ;
    /**
     * The name of the goomoji data-attribute, used for emoji image elements. Data
     * attributes are the preferred way in HTML5 to set custom attributes.
     */
    static DATA_ATTRIBUTE : string ;
  }
}
declare module 'goog:goog.ui.emoji.Emoji' {
  import Emoji = ಠ_ಠ.clutz.goog.ui.emoji.Emoji;
  export default Emoji;
}

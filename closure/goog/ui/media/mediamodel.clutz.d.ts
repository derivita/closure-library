//!! generated by clutz.
// Generated from ui/media/mediamodel.js
declare namespace ಠ_ಠ.clutz.goog.ui.media {
  /**
   * An base data value class for all media data models.
   *
   * MediaModels are exact matches to the fields defined in the Yahoo RSS media
   * specification {@link http://search.yahoo.com/mrss/}.
   *
   * The current common data shared by medias is to have URLs, mime types,
   * captions, descriptions, thumbnails and players. Some of these may not be
   * available, or applications may not want to render them, so `null`
   * values are allowed. `goog.ui.media.MediaRenderer` checks whether the
   * values are available before creating DOMs for them.
   */
  class MediaModel {
    private noStructuralTyping_goog_ui_media_MediaModel : any;
    /**
     * An base data value class for all media data models.
     *
     * MediaModels are exact matches to the fields defined in the Yahoo RSS media
     * specification {@link http://search.yahoo.com/mrss/}.
     *
     * The current common data shared by medias is to have URLs, mime types,
     * captions, descriptions, thumbnails and players. Some of these may not be
     * available, or applications may not want to render them, so `null`
     * values are allowed. `goog.ui.media.MediaRenderer` checks whether the
     * values are available before creating DOMs for them.
     * @param opt_url An optional URL of the media.
     * @param opt_caption An optional caption of the media.
     * @param opt_description An optional description of the media.
     * @param opt_type The type of the media.
     * @param opt_medium The medium of the media.
     * @param opt_duration The duration of the media in seconds.
     * @param opt_width The width of the media in pixels.
     * @param opt_height The height of the media in pixels.
     */
    constructor (opt_url ? : string , opt_caption ? : string , opt_description ? : string , opt_type ? : ಠ_ಠ.clutz.goog.ui.media.MediaModel.MimeType , opt_medium ? : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Medium , opt_duration ? : number , opt_width ? : number , opt_height ? : number ) ;
    /**
     * Finds the first category with the given scheme.
     * @param scheme The scheme to search for.
     */
    findCategoryWithScheme (scheme : string ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Category | null ;
    /**
     * Finds all credits with the given role.
     * @param role The role to search for.
     */
    findCreditsWithRole (role : string ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit [] ;
    /**
     * Gets the caption of this media.
     */
    getCaption ( ) : string | undefined ;
    /**
     * Gets the categories of the media.
     */
    getCategories ( ) : ( ಠ_ಠ.clutz.goog.ui.media.MediaModel.Category | null ) [] | null ;
    /**
     * Gets the credits of the media.
     */
    getCredits ( ) : ( ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit | null ) [] ;
    /**
     * Gets the description of this media.
     */
    getDescription ( ) : string | undefined ;
    /**
     * Gets the duration of the media.
     */
    getDuration ( ) : number | undefined ;
    /**
     * Gets the height of the media in pixels.
     */
    getHeight ( ) : number | undefined ;
    /**
     * Gets the media medium.
     */
    getMedium ( ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Medium | undefined ;
    /**
     * Gets the player data.
     */
    getPlayer ( ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Player | null | undefined ;
    /**
     * Gets the subtitles for the media.
     */
    getSubTitles ( ) : ( ಠ_ಠ.clutz.goog.ui.media.MediaModel.SubTitle | null ) [] | null ;
    /**
     * Gets the thumbnail urls.
     */
    getThumbnails ( ) : ( ಠ_ಠ.clutz.goog.ui.media.MediaModel.Thumbnail | null ) [] | null ;
    /**
     * Gets the media mime type.
     */
    getType ( ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.MimeType | undefined ;
    /**
     * Gets the URL of this media.
     */
    getUrl ( ) : string | undefined ;
    /**
     * Gets the width of the media in pixels.
     */
    getWidth ( ) : number | undefined ;
    /**
     * Sets the caption of this media.
     * @param caption The caption of the media.
     */
    setCaption (caption : string ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel ;
    /**
     * Sets the categories of the media
     * @param categories The categories of the media.
     */
    setCategories (categories : ( ಠ_ಠ.clutz.goog.ui.media.MediaModel.Category | null ) [] | null ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel ;
    /**
     * Sets the credits of the media
     * @param credits The credits of the media.
     */
    setCredits (credits : ( ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit | null ) [] ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel ;
    /**
     * Sets the description of this media.
     * @param description The description of the media.
     */
    setDescription (description : string ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel ;
    /**
     * Sets duration of the media.
     * @param duration The duration of the media, in seconds.
     */
    setDuration (duration : number ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel ;
    /**
     * Sets the height of the media.
     * @param height The height of the media, in pixels.
     */
    setHeight (height : number ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel ;
    /**
     * Sets the media medium.
     * @param medium The media medium.
     */
    setMedium (medium : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Medium ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel ;
    /**
     * Sets the player data.
     * @param player The media player data.
     */
    setPlayer (player : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Player | null ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel ;
    /**
     * Sets the subtitles for the media
     * @param subtitles The subtitles.
     */
    setSubTitles (subtitles : ( ಠ_ಠ.clutz.goog.ui.media.MediaModel.SubTitle | null ) [] | null ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel ;
    /**
     * Sets the thumbnail list.
     * @param thumbnails The list of thumbnail.
     */
    setThumbnails (thumbnails : ( ಠ_ಠ.clutz.goog.ui.media.MediaModel.Thumbnail | null ) [] | null ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel ;
    /**
     * Sets the media mime type.
     * @param type The media mime type.
     */
    setType (type : ಠ_ಠ.clutz.goog.ui.media.MediaModel.MimeType ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel ;
    /**
     * Sets the URL of this media.
     * @param url The URL of the media.
     */
    setUrl (url : string ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel ;
    /**
     * Sets the width of the media.
     * @param width The width of the media, in pixels.
     */
    setWidth (width : number ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel ;
  }
}
declare module 'goog:goog.ui.media.MediaModel' {
  import MediaModel = ಠ_ಠ.clutz.goog.ui.media.MediaModel;
  export default MediaModel;
}
// Generated from ui/media/mediamodel.js
declare namespace ಠ_ಠ.clutz.goog.ui.media.MediaModel {
  /**
   * A taxonomy to be set that gives an indication of the type of media content,
   * and its particular contents.
   */
  class Category {
    private noStructuralTyping_goog_ui_media_MediaModel_Category : any;
    /**
     * A taxonomy to be set that gives an indication of the type of media content,
     * and its particular contents.
     * @param scheme The URI that identifies the categorization scheme.
     * @param value The value of the category.
     * @param opt_label The human readable label that can be displayed in end user applications.
     */
    constructor (scheme : string , value : string , opt_label ? : string ) ;
    /**
     * Gets the label of the category.
     */
    getLabel ( ) : string ;
    /**
     * Gets the category scheme.
     */
    getScheme ( ) : string ;
    /**
     * Gets the categor's value.
     */
    getValue ( ) : string ;
    /**
     * Sets the label of the category.
     * @param label The label of the category.
     */
    setLabel (label : string ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Category ;
    /**
     * Sets the category scheme.
     * @param scheme The category's scheme.
     */
    setScheme (scheme : string ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Category ;
    /**
     * Sets the category value.
     * @param value The category value to be set.
     */
    setValue (value : string ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Category ;
  }
}
declare module 'goog:goog.ui.media.MediaModel.Category' {
  import Category = ಠ_ಠ.clutz.goog.ui.media.MediaModel.Category;
  export default Category;
}
// Generated from ui/media/mediamodel.js
declare namespace ಠ_ಠ.clutz.goog.ui.media.MediaModel {
  /**
   * Indicates an entity that has contributed to a media object. Based on
   * 'media.credit' in the rss spec.
   */
  class Credit {
    private noStructuralTyping_goog_ui_media_MediaModel_Credit : any;
    /**
     * Indicates an entity that has contributed to a media object. Based on
     * 'media.credit' in the rss spec.
     * @param value The name of the entity being credited.
     * @param opt_role The role the entity played.
     * @param opt_scheme The URI that identifies the role scheme.
     */
    constructor (value : string , opt_role ? : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit.Role , opt_scheme ? : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit.Scheme ) ;
    /**
     * Gets the role of the entity being credited.
     */
    getRole ( ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit.Role | undefined ;
    /**
     * Gets the scheme of the credit object.
     */
    getScheme ( ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit.Scheme | undefined ;
    /**
     * Gets the name of the entity being credited.
     */
    getValue ( ) : string ;
    /**
     * Sets the role of the credit object.
     * @param role The role.
     */
    setRole (role : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit.Role ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit ;
    /**
     * Sets the scheme of the credit object.
     * @param scheme The scheme.
     */
    setScheme (scheme : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit.Scheme ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit ;
    /**
     * Sets the value of the credit object.
     * @param value The value.
     */
    setValue (value : string ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit ;
  }
}
declare module 'goog:goog.ui.media.MediaModel.Credit' {
  import Credit = ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit;
  export default Credit;
}
// Generated from ui/media/mediamodel.js
declare namespace ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit {
  /**
   * The types of known roles.
   */
  /**
   * The types of known roles.
   */
  enum Role {
    OWNER = 'owner' ,
    UPLOADER = 'uploader' ,
  }
}
declare module 'goog:goog.ui.media.MediaModel.Credit.Role' {
  import Role = ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit.Role;
  export default Role;
}
// Generated from ui/media/mediamodel.js
declare namespace ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit {
  /**
   * The types of known schemes.
   */
  /**
   * The types of known schemes.
   */
  enum Scheme {
    EUROPEAN_BROADCASTING = 'urn:ebu' ,
    YAHOO = 'urn:yvs' ,
    YOUTUBE = 'urn:youtube' ,
  }
}
declare module 'goog:goog.ui.media.MediaModel.Credit.Scheme' {
  import Scheme = ಠ_ಠ.clutz.goog.ui.media.MediaModel.Credit.Scheme;
  export default Scheme;
}
// Generated from ui/media/mediamodel.js
declare namespace ಠ_ಠ.clutz.goog.ui.media.MediaModel {
  /**
   * Supported mediums, found here:
   * {@link http://video.search.yahoo.com/mrss}
   */
  /**
   * Supported mediums, found here:
   * {@link http://video.search.yahoo.com/mrss}
   */
  enum Medium {
    AUDIO = 'audio' ,
    DOCUMENT = 'document' ,
    EXECUTABLE = 'executable' ,
    IMAGE = 'image' ,
    VIDEO = 'video' ,
  }
}
declare module 'goog:goog.ui.media.MediaModel.Medium' {
  import Medium = ಠ_ಠ.clutz.goog.ui.media.MediaModel.Medium;
  export default Medium;
}
// Generated from ui/media/mediamodel.js
declare namespace ಠ_ಠ.clutz.goog.ui.media.MediaModel {
  /**
   * The supported media mime types, a subset of the media types found here:
   * {@link http://www.iana.org/assignments/media-types/} and here
   * {@link http://en.wikipedia.org/wiki/Internet_media_type}
   */
  /**
   * The supported media mime types, a subset of the media types found here:
   * {@link http://www.iana.org/assignments/media-types/} and here
   * {@link http://en.wikipedia.org/wiki/Internet_media_type}
   */
  enum MimeType {
    FLASH = 'application\/x-shockwave-flash' ,
    GIF = 'image\/gif' ,
    HTML = 'text\/html' ,
    JPEG = 'image\/jpeg' ,
    PLAIN = 'text\/plain' ,
    PNG = 'image\/png' ,
  }
}
declare module 'goog:goog.ui.media.MediaModel.MimeType' {
  import MimeType = ಠ_ಠ.clutz.goog.ui.media.MediaModel.MimeType;
  export default MimeType;
}
// Generated from ui/media/mediamodel.js
declare namespace ಠ_ಠ.clutz.goog.ui.media.MediaModel {
  /**
   * Constructs a player containing details of the player's URL and
   * optionally its size.
   */
  class Player {
    private noStructuralTyping_goog_ui_media_MediaModel_Player : any;
    /**
     * Constructs a player containing details of the player's URL and
     * optionally its size.
     * @param url The URL of the player.
     * @param opt_vars Optional map of arguments to the player.
     * @param opt_size The size of the player if known.
     */
    constructor (url : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl , opt_vars ? : GlobalObject | null , opt_size ? : ಠ_ಠ.clutz.goog.math.Size | null ) ;
    /**
     * Gets the size of the player.
     */
    getSize ( ) : ಠ_ಠ.clutz.goog.math.Size | null ;
    /**
     * Gets the player URL.
     */
    getTrustedResourceUrl ( ) : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl ;
    /**
     * Gets the player URL.
     */
    getUrl ( ) : string ;
    /**
     * Gets the player arguments.
     */
    getVars ( ) : GlobalObject | null ;
    /**
     * Sets the size of the player.
     * @param size The size of the player.
     */
    setSize (size : ಠ_ಠ.clutz.goog.math.Size | null ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Player ;
    /**
     * Sets the player URL.
     * @param url The player's URL.
     */
    setUrl (url : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Player ;
    /**
     * Sets the player arguments.
     * @param vars The media player arguments.
     */
    setVars (vars : GlobalObject | null ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Player ;
  }
}
declare module 'goog:goog.ui.media.MediaModel.Player' {
  import Player = ಠ_ಠ.clutz.goog.ui.media.MediaModel.Player;
  export default Player;
}
// Generated from ui/media/mediamodel.js
declare namespace ಠ_ಠ.clutz.goog.ui.media.MediaModel {
  /**
   * A reference to the subtitle URI for a media object.
   * Implements the 'media.subTitle' in the rss spec.
   */
  class SubTitle {
    private noStructuralTyping_goog_ui_media_MediaModel_SubTitle : any;
    /**
     * A reference to the subtitle URI for a media object.
     * Implements the 'media.subTitle' in the rss spec.
     * @param href The subtitle's URI. to fetch the subtitle file.
     * @param lang An RFC 3066 language.
     * @param type The MIME type of the URI.
     */
    constructor (href : string , lang : string , type : string ) ;
    /**
     * Get the href for the subtitle object.
     */
    getHref ( ) : string ;
    /**
     * Get the lang for the subtitle object.
     */
    getLang ( ) : string ;
    /**
     * Get the type for the subtitle object.
     */
    getType ( ) : string ;
    /**
     * Sets the href for the subtitle object.
     * @param href The subtitle's URI.
     */
    setHref (href : string ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.SubTitle ;
    /**
     * Sets the language for the subtitle object.
     * @param lang The RFC 3066 language.
     */
    setLang (lang : string ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.SubTitle ;
    /**
     * Sets the type for the subtitle object.
     * @param type The MIME type.
     */
    setType (type : string ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.SubTitle ;
  }
}
declare module 'goog:goog.ui.media.MediaModel.SubTitle' {
  import SubTitle = ಠ_ಠ.clutz.goog.ui.media.MediaModel.SubTitle;
  export default SubTitle;
}
// Generated from ui/media/mediamodel.js
declare namespace ಠ_ಠ.clutz.goog.ui.media.MediaModel {
  /**
   * Constructs a thumbnail containing details of the thumbnail's image URL and
   * optionally its size.
   */
  class Thumbnail {
    private noStructuralTyping_goog_ui_media_MediaModel_Thumbnail : any;
    /**
     * Constructs a thumbnail containing details of the thumbnail's image URL and
     * optionally its size.
     * @param url The URL of the thumbnail's image.
     * @param opt_size The size of the thumbnail's image if known.
     */
    constructor (url : string , opt_size ? : ಠ_ಠ.clutz.goog.math.Size | null ) ;
    /**
     * Gets the thumbnail size.
     */
    getSize ( ) : ಠ_ಠ.clutz.goog.math.Size | null ;
    /**
     * Gets the thumbnail URL.
     */
    getUrl ( ) : string ;
    /**
     * Sets the thumbnail size.
     * @param size The size of the thumbnail's image.
     */
    setSize (size : ಠ_ಠ.clutz.goog.math.Size | null ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Thumbnail ;
    /**
     * Sets the thumbnail URL.
     * @param url The thumbnail's image URL.
     */
    setUrl (url : string ) : ಠ_ಠ.clutz.goog.ui.media.MediaModel.Thumbnail ;
  }
}
declare module 'goog:goog.ui.media.MediaModel.Thumbnail' {
  import Thumbnail = ಠ_ಠ.clutz.goog.ui.media.MediaModel.Thumbnail;
  export default Thumbnail;
}

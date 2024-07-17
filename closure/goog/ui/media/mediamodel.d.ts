import { TrustedResourceUrl } from '../../html/trustedresourceurl.js';
import type { Size } from '../../math/size.js';
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
export declare class MediaModel {
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
    constructor(opt_url?: string, opt_caption?: string, opt_description?: string, opt_type?: MediaModel.MimeType | null, opt_medium?: MediaModel.Medium | null, opt_duration?: number, opt_width?: number, opt_height?: number);
    private noStructuralTyping_closure_goog_ui_media_mediamodel_MediaModel;
    /**
     * Gets the URL of this media.
     * @return The URL of the media.
     */
    getUrl(): string | undefined;
    /**
     * Sets the URL of this media.
     * @param url The URL of the media.
     * @return The object itself, used for chaining.
     */
    setUrl(url: string): MediaModel;
    /**
     * Gets the caption of this media.
     * @return The caption of the media.
     */
    getCaption(): string | undefined;
    /**
     * Sets the caption of this media.
     * @param caption The caption of the media.
     * @return The object itself, used for chaining.
     */
    setCaption(caption: string): MediaModel;
    /**
     * Gets the media mime type.
     * @return The media mime type.
     */
    getType(): MediaModel.MimeType | undefined | null;
    /**
     * Sets the media mime type.
     * @param type The media mime type.
     * @return The object itself, used for chaining.
     */
    setType(type: MediaModel.MimeType | null): MediaModel;
    /**
     * Gets the media medium.
     * @return The media medium.
     */
    getMedium(): MediaModel.Medium | undefined | null;
    /**
     * Sets the media medium.
     * @param medium The media medium.
     * @return The object itself, used for chaining.
     */
    setMedium(medium: MediaModel.Medium | null): MediaModel;
    /**
     * Gets the description of this media.
     * @return The description of the media.
     */
    getDescription(): string | undefined;
    /**
     * Sets the description of this media.
     * @param description The description of the media.
     * @return The object itself, used for chaining.
     */
    setDescription(description: string): MediaModel;
    /**
     * Gets the thumbnail urls.
     * @return The list of thumbnails.
     */
    getThumbnails(): (MediaModel.Thumbnail | null)[] | null;
    /**
     * Sets the thumbnail list.
     * @param thumbnails The list of thumbnail.
     * @return The object itself, used for chaining.
     */
    setThumbnails(thumbnails: (MediaModel.Thumbnail | null)[] | null): MediaModel;
    /**
     * Gets the duration of the media.
     * @return The duration in seconds.
     */
    getDuration(): number | undefined;
    /**
     * Sets duration of the media.
     * @param duration The duration of the media, in seconds.
     * @return The object itself, used for chaining.
     */
    setDuration(duration: number): MediaModel;
    /**
     * Gets the width of the media in pixels.
     * @return The width in pixels.
     */
    getWidth(): number | undefined;
    /**
     * Sets the width of the media.
     * @param width The width of the media, in pixels.
     * @return The object itself, used for chaining.
     */
    setWidth(width: number): MediaModel;
    /**
     * Gets the height of the media in pixels.
     * @return The height in pixels.
     */
    getHeight(): number | undefined;
    /**
     * Sets the height of the media.
     * @param height The height of the media, in pixels.
     * @return The object itself, used for chaining.
     */
    setHeight(height: number): MediaModel;
    /**
     * Gets the player data.
     * @return The media player data.
     */
    getPlayer(): MediaModel.Player | undefined | null;
    /**
     * Sets the player data.
     * @param player The media player data.
     * @return The object itself, used for chaining.
     */
    setPlayer(player: MediaModel.Player | null): MediaModel;
    /**
     * Gets the categories of the media.
     * @return The categories of the media.
     */
    getCategories(): (MediaModel.Category | null)[] | null;
    /**
     * Sets the categories of the media
     * @param categories The categories of the media.
     * @return The object itself, used for chaining.
     */
    setCategories(categories: (MediaModel.Category | null)[] | null): MediaModel;
    /**
     * Finds the first category with the given scheme.
     * @param scheme The scheme to search for.
     * @return The category that has the given scheme. May be null.
     */
    findCategoryWithScheme(scheme: string): MediaModel.Category | null;
    /**
     * Gets the credits of the media.
     * @return The credits of the media.
     */
    getCredits(): (MediaModel.Credit | null)[];
    /**
     * Sets the credits of the media
     * @param credits The credits of the media.
     * @return The object itself, used for chaining.
     */
    setCredits(credits: (MediaModel.Credit | null)[]): MediaModel;
    /**
     * Finds all credits with the given role.
     * @param role The role to search for.
     * @return An array of credits with the given role. May be empty.
     */
    findCreditsWithRole(role: string): MediaModel.Credit[];
    /**
     * Gets the subtitles for the media.
     * @return The subtitles.
     */
    getSubTitles(): (MediaModel.SubTitle | null)[] | null;
    /**
     * Sets the subtitles for the media
     * @param subtitles The subtitles.
     * @return The object itself.
     */
    setSubTitles(subtitles: (MediaModel.SubTitle | null)[] | null): MediaModel;
}
export declare namespace MediaModel {
    /**
     * The supported media mime types, a subset of the media types found here:
     * {@link http://www.iana.org/assignments/media-types/} and here
     * {@link http://en.wikipedia.org/wiki/Internet_media_type}
     */
    enum MimeType {
        HTML = "text/html",
        PLAIN = "text/plain",
        FLASH = "application/x-shockwave-flash",
        JPEG = "image/jpeg",
        GIF = "image/gif",
        PNG = "image/png"
    }
    /**
     * Supported mediums, found here:
     * {@link http://video.search.yahoo.com/mrss}
     */
    enum Medium {
        IMAGE = "image",
        AUDIO = "audio",
        VIDEO = "video",
        DOCUMENT = "document",
        EXECUTABLE = "executable"
    }
    /**
     * Constructs a thumbnail containing details of the thumbnail's image URL and
     * optionally its size.
     */
    class Thumbnail {
        /**
         * Constructs a thumbnail containing details of the thumbnail's image URL and
         * optionally its size.
         * @param url The URL of the thumbnail's image.
         * @param opt_size The size of the thumbnail's image if known.
         */
        constructor(url: string, opt_size?: Size | null);
        private noStructuralTyping_closure_goog_ui_media_mediamodel_Thumbnail;
        /**
         * Gets the thumbnail URL.
         * @return The thumbnail's image URL.
         */
        getUrl(): string;
        /**
         * Sets the thumbnail URL.
         * @param url The thumbnail's image URL.
         * @return The object itself, used for chaining.
         */
        setUrl(url: string): MediaModel.Thumbnail;
        /**
         * Gets the thumbnail size.
         * @return The size of the thumbnail's image if known.
         */
        getSize(): Size | null;
        /**
         * Sets the thumbnail size.
         * @param size The size of the thumbnail's image.
         * @return The object itself, used for chaining.
         */
        setSize(size: Size | null): MediaModel.Thumbnail;
    }
    /**
     * Constructs a player containing details of the player's URL and
     * optionally its size.
     */
    class Player {
        /**
         * Constructs a player containing details of the player's URL and
         * optionally its size.
         * @param url The URL of the player.
         * @param opt_vars Optional map of arguments to the player.
         * @param opt_size The size of the player if known.
         */
        constructor(url: TrustedResourceUrl, opt_vars?: object | null, opt_size?: Size | null);
        private noStructuralTyping_closure_goog_ui_media_mediamodel_Player;
        /**
         * Gets the player URL.
         * @return The player's URL.
         */
        getTrustedResourceUrl(): TrustedResourceUrl;
        /**
         * Gets the player URL.
         * @return The player's URL.
         */
        getUrl(): string;
        /**
         * Sets the player URL.
         * @param url The player's URL.
         * @return The object itself, used for chaining.
         */
        setUrl(url: TrustedResourceUrl): MediaModel.Player;
        /**
         * Gets the player arguments.
         * @return The media player arguments.
         */
        getVars(): object | null;
        /**
         * Sets the player arguments.
         * @param vars The media player arguments.
         * @return The object itself, used for chaining.
         */
        setVars(vars: object | null): MediaModel.Player;
        /**
         * Gets the size of the player.
         * @return The size of the player if known.
         */
        getSize(): Size | null;
        /**
         * Sets the size of the player.
         * @param size The size of the player.
         * @return The object itself, used for chaining.
         */
        setSize(size: Size | null): MediaModel.Player;
    }
    /**
     * A taxonomy to be set that gives an indication of the type of media content,
     * and its particular contents.
     */
    class Category {
        /**
         * A taxonomy to be set that gives an indication of the type of media content,
         * and its particular contents.
         * @param scheme The URI that identifies the categorization scheme.
         * @param value The value of the category.
         * @param opt_label The human readable label that can be displayed in end user applications.
         */
        constructor(scheme: string, value: string, opt_label?: string);
        private noStructuralTyping_closure_goog_ui_media_mediamodel_Category;
        /**
         * Gets the category scheme.
         * @return The category scheme URI.
         */
        getScheme(): string;
        /**
         * Sets the category scheme.
         * @param scheme The category's scheme.
         * @return The object itself, used for chaining.
         */
        setScheme(scheme: string): MediaModel.Category;
        /**
         * Gets the categor's value.
         * @return The category's value.
         */
        getValue(): string;
        /**
         * Sets the category value.
         * @param value The category value to be set.
         * @return The object itself, used for chaining.
         */
        setValue(value: string): MediaModel.Category;
        /**
         * Gets the label of the category.
         * @return The label of the category.
         */
        getLabel(): string;
        /**
         * Sets the label of the category.
         * @param label The label of the category.
         * @return The object itself, used for chaining.
         */
        setLabel(label: string): MediaModel.Category;
    }
    /**
     * Indicates an entity that has contributed to a media object. Based on
     * 'media.credit' in the rss spec.
     */
    class Credit {
        /**
         * Indicates an entity that has contributed to a media object. Based on
         * 'media.credit' in the rss spec.
         * @param value The name of the entity being credited.
         * @param opt_role The role the entity played.
         * @param opt_scheme The URI that identifies the role scheme.
         */
        constructor(value: string, opt_role?: MediaModel.Credit.Role | null, opt_scheme?: MediaModel.Credit.Scheme | null);
        private noStructuralTyping_closure_goog_ui_media_mediamodel_Credit;
        /**
         * Gets the name of the entity being credited.
         * @return The name of the entity.
         */
        getValue(): string;
        /**
         * Sets the value of the credit object.
         * @param value The value.
         * @return The object itself.
         */
        setValue(value: string): MediaModel.Credit;
        /**
         * Gets the role of the entity being credited.
         * @return The role of the entity.
         */
        getRole(): MediaModel.Credit.Role | undefined | null;
        /**
         * Sets the role of the credit object.
         * @param role The role.
         * @return The object itself.
         */
        setRole(role: MediaModel.Credit.Role | null): MediaModel.Credit;
        /**
         * Gets the scheme of the credit object.
         * @return The URI that identifies the role scheme.
         */
        getScheme(): MediaModel.Credit.Scheme | undefined | null;
        /**
         * Sets the scheme of the credit object.
         * @param scheme The scheme.
         * @return The object itself.
         */
        setScheme(scheme: MediaModel.Credit.Scheme | null): MediaModel.Credit;
    }
    namespace Credit {
        /**
         * The types of known roles.
         */
        enum Role {
            UPLOADER = "uploader",
            OWNER = "owner"
        }
        /**
         * The types of known schemes.
         */
        enum Scheme {
            EUROPEAN_BROADCASTING = "urn:ebu",
            YAHOO = "urn:yvs",
            YOUTUBE = "urn:youtube"
        }
    }
    /**
     * A reference to the subtitle URI for a media object.
     * Implements the 'media.subTitle' in the rss spec.
     */
    class SubTitle {
        /**
         * A reference to the subtitle URI for a media object.
         * Implements the 'media.subTitle' in the rss spec.
         * @param href The subtitle's URI. to fetch the subtitle file.
         * @param lang An RFC 3066 language.
         * @param type The MIME type of the URI.
         */
        constructor(href: string, lang: string, type: string);
        private noStructuralTyping_closure_goog_ui_media_mediamodel_SubTitle;
        /**
         * Sets the href for the subtitle object.
         * @param href The subtitle's URI.
         * @return The object itself.
         */
        setHref(href: string): MediaModel.SubTitle;
        /**
         * Get the href for the subtitle object.
         * @return href The subtitle's URI.
         */
        getHref(): string;
        /**
         * Sets the language for the subtitle object.
         * @param lang The RFC 3066 language.
         * @return The object itself.
         */
        setLang(lang: string): MediaModel.SubTitle;
        /**
         * Get the lang for the subtitle object.
         * @return lang The RFC 3066 language.
         */
        getLang(): string;
        /**
         * Sets the type for the subtitle object.
         * @param type The MIME type.
         * @return The object itself.
         */
        setType(type: string): MediaModel.SubTitle;
        /**
         * Get the type for the subtitle object.
         * @return type The MIME type.
         */
        getType(): string;
    }
}

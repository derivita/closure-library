import { TrustedResourceUrl } from '../../html/trustedresourceurl.js';
import { MediaModel } from './mediamodel.js';
/**
 * The `goog.ui.media.Youtube` media data model. It stores a required
 * `videoId` field, sets the youtube URL, and allows a few optional
 * parameters.
 */
export declare class YoutubeModel extends MediaModel {
    /**
     * The `goog.ui.media.Youtube` media data model. It stores a required
     * `videoId` field, sets the youtube URL, and allows a few optional
     * parameters.
     * @param videoId The youtube video id.
     * @param opt_caption An optional caption of the youtube video.
     * @param opt_description An optional description of the youtube video.
     */
    constructor(videoId: string, opt_caption?: string, opt_description?: string);
    private noStructuralTyping_closure_goog_ui_media_youtube_YoutubeModel;
    /**
     * A auxiliary static method that parses a youtube URL, extracting the ID of the
     * video, and builds a YoutubeModel.
     * @param youtubeUrl A youtube URL.
     * @param opt_caption An optional caption of the youtube video.
     * @param opt_description An optional description of the youtube video.
     * @return The data model that represents the youtube URL.
     */
    static newInstance(youtubeUrl: string, opt_caption?: string, opt_description?: string): YoutubeModel;
    /**
     * The opposite of `goog.ui.media.Youtube.newInstance`: it takes a videoId
     * and returns a youtube URL.
     * @param videoId The youtube video ID.
     * @return The youtube URL.
     */
    static buildUrl(videoId: string): string;
    /**
     * A static auxiliary method that builds a static image URL with a preview of
     * the youtube video.
     *
     * NOTE(goto): patterned after Gmail's gadgets/youtube,
     *
     * TODO(goto): how do I specify the width/height of the resulting image on the
     * url ? is there an official API for https://ytimg.com ?
     * @param youtubeId The youtube video ID.
     * @return An URL that contains an image with a preview of the youtube movie.
     */
    static getThumbnailUrl(youtubeId: string): string;
    /**
     * A static auxiliary method that builds URL of the flash movie to be embedded,
     * out of the youtube video id.
     * @param videoId The youtube video ID.
     * @param opt_autoplay Whether the flash movie should start playing as soon as it is shown, or if it should show a 'play' button.
     * @return The flash URL to be embedded on the page.
     */
    static getFlashUrl(videoId: string, opt_autoplay?: boolean): TrustedResourceUrl;
    /**
     * Gets the Youtube video id.
     * @return The Youtube video id.
     */
    getVideoId(): string;
}

//!! generated by clutz.
// Generated from net/filedownloader.js
declare namespace ಠ_ಠ.clutz.goog.net {
  /**
   * A class for downloading remote files and storing them locally using the
   * HTML5 filesystem API.
   */
  class FileDownloader extends ಠ_ಠ.clutz.goog.Disposable {
    private noStructuralTyping_goog_net_FileDownloader : any;
    /**
     * A class for downloading remote files and storing them locally using the
     * HTML5 filesystem API.
     * @param dir The directory in which the downloaded files are stored. This directory should be solely managed by FileDownloader.
     * @param opt_pool The pool of XhrIo objects to use for downloading files.
     */
    constructor (dir : ಠ_ಠ.clutz.goog.fs.DirectoryEntry , opt_pool ? : ಠ_ಠ.clutz.goog.net.XhrIoPool | null ) ;
    disposeInternal ( ) : void ;
    /**
     * Download a remote file and save its contents to the filesystem. A given file
     * is uniquely identified by its URL string; this means that the relative and
     * absolute URLs for a single file are considered different for the purposes of
     * the FileDownloader.
     *
     * Returns a Deferred that will contain the downloaded blob. If there's an error
     * while downloading the URL, this Deferred will be passed the
     * {@link goog.net.FileDownloader.Error} object as an errback.
     *
     * If a download is already in progress for the given URL, this will return the
     * deferred blob for that download. If the URL has already been downloaded, this
     * will fail once it tries to save the downloaded blob.
     *
     * When a download is in progress, all Deferreds returned for that download will
     * be branches of a single parent. If all such branches are cancelled, or if one
     * is cancelled with opt_deepCancel set, then the download will be cancelled as
     * well.
     * @param url The URL of the file to download.
     */
    download (url : string ) : ಠ_ಠ.clutz.goog.async.Deferred ;
    /**
     * Load a downloaded blob from the filesystem. Will fire a deferred error if the
     * given URL has not yet been downloaded.
     * @param url The URL of the blob to load.
     */
    getDownloadedBlob (url : string ) : ಠ_ಠ.clutz.goog.async.Deferred ;
    /**
     * Get the local filesystem: URL for a downloaded file. This is different from
     * the blob: URL that's available from getDownloadedBlob(). If the end user
     * accesses the filesystem: URL, the resulting file's name will be determined by
     * the download filename as opposed to an arbitrary GUID. In addition, the
     * filesystem: URL is connected to a filesystem location, so if the download is
     * removed then that URL will become invalid.
     *
     * Warning: in Chrome 12, some filesystem: URLs are opened inline. This means
     * that e.g. HTML pages given to the user via filesystem: URLs will be opened
     * and processed by the browser.
     * @param url The URL of the file to get the URL of.
     */
    getLocalUrl (url : string ) : ಠ_ಠ.clutz.goog.async.Deferred ;
    /**
     * Return (deferred) whether or not a URL has been downloaded. Will fire a
     * deferred error if something goes wrong when determining this.
     * @param url The URL to check.
     */
    isDownloaded (url : string ) : ಠ_ಠ.clutz.goog.async.Deferred ;
    /**
     * Returns whether or not there is an active download for a given URL.
     * @param url The URL of the download to check.
     */
    isDownloading (url : string ) : boolean ;
    /**
     * Remove a URL from the FileDownloader.
     *
     * This returns a Deferred. If the removal is completed successfully, its
     * callback will be called without any value. If the removal fails, its errback
     * will be called with the {@link goog.fs.Error}.
     * @param url The URL to remove.
     */
    remove (url : string ) : ಠ_ಠ.clutz.goog.async.Deferred ;
    /**
     * Save a blob for a given URL. This works just as through the blob were
     * downloaded form that URL, except you specify the blob and no HTTP request is
     * made.
     *
     * If the URL is currently being downloaded, it's indeterminate whether the blob
     * being set or the blob being downloaded will end up in the filesystem.
     * Whichever one doesn't get saved will have an error. To ensure that one or the
     * other takes precedence, use {@link #waitForDownload} to allow the download to
     * complete before setting the blob.
     * @param url The URL at which to set the blob.
     * @param blob The blob to set.
     * @param opt_name The name of the file. If this isn't given, it's determined from the URL.
     */
    setBlob (url : string , blob : Blob , opt_name ? : string ) : ಠ_ಠ.clutz.goog.async.Deferred ;
    /**
     * Return a Deferred that will fire once no download is active for a given URL.
     * If there's no download active for that URL when this is called, the deferred
     * will fire immediately; otherwise, it will fire once the download is complete,
     * whether or not it succeeds.
     * @param url The URL of the download to wait for.
     */
    waitForDownload (url : string ) : ಠ_ಠ.clutz.goog.async.Deferred ;
  }
}
// Generated from net/filedownloader.js
declare namespace ಠ_ಠ.clutz.goog.net.FileDownloader {
  class Download_ extends ಠ_ಠ.clutz.goog.Disposable {
    private noStructuralTyping_goog_net_FileDownloader_Download_ : any;
    /**
     * The downloaded blob. Only set once the XHR has completed, if it completed
     * successfully.
     */
    blob : Blob | null ;
    /**
     * Whether this download has been cancelled by the user.
     */
    cancelled : boolean ;
    /**
     * The Deferred that will be fired when the download is complete.
     */
    deferred : ಠ_ಠ.clutz.goog.async.Deferred ;
    /**
     * The file entry where the blob is to be stored. Only set once it's been
     * loaded from the filesystem.
     */
    file : ಠ_ಠ.clutz.goog.fs.FileEntry | null ;
    /**
     * The name of the blob being downloaded. Only sey once the XHR has completed,
     * if it completed successfully.
     */
    name : string | null ;
    /**
     * The URL for the file being downloaded.
     */
    url : string ;
    /**
     * The file writer for writing the blob to the filesystem. Only set once it's
     * been loaded from the filesystem.
     */
    writer : ಠ_ಠ.clutz.goog.fs.FileWriter | null ;
    /**
     * The XhrIo object for downloading the file. Only set once it's been
     * retrieved from the pool.
     */
    xhr : ಠ_ಠ.clutz.goog.net.XhrIo | null ;
    disposeInternal ( ) : void ;
  }
}
declare module 'goog:goog.net.FileDownloader' {
  import FileDownloader = ಠ_ಠ.clutz.goog.net.FileDownloader;
  export default FileDownloader;
}
// Generated from net/filedownloader.js
declare namespace ಠ_ಠ.clutz.goog.net.FileDownloader {
  /**
   * The error object for FileDownloader download errors.
   */
  class Error extends ಠ_ಠ.clutz.goog.debug.Error {
    private noStructuralTyping_goog_net_FileDownloader_Error : any;
    /**
     * The error object for FileDownloader download errors.
     * @param download The download object for the download in question.
     * @param opt_fsErr The file error object, if this was a file error.
     */
    constructor (download : ಠ_ಠ.clutz.goog.net.FileDownloader.Download_ , opt_fsErr ? : ಠ_ಠ.clutz.goog.fs.Error | null ) ;
    message : string ;
    /**
     * The URL the event relates to.
     */
    url : string ;
    /**
     * The file API error. Only set if the error was caused by the file API.
     */
    fileError ? : ಠ_ಠ.clutz.goog.fs.Error | null ;
    /**
     * The error code of the XHR. Only set if the error was caused by an XHR
     * failure.
     */
    xhrErrorCode ? : ಠ_ಠ.clutz.goog.net.ErrorCode | null ;
    /**
     * The status of the XHR. Only set if the error was caused by an XHR failure.
     */
    xhrStatus ? : number ;
  }
}
declare module 'goog:goog.net.FileDownloader.Error' {
  import Error = ಠ_ಠ.clutz.goog.net.FileDownloader.Error;
  export default Error;
}

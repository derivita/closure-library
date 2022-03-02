//!! generated by clutz.
// Generated from streams/lite_impl.js
declare namespace ಠ_ಠ.clutz.module$exports$goog$streams$liteImpl {
  /**
   * The lite implementation of ReadableStream.
   *
   * Supports the getReader() method and locked property.
   *
   * The only method of underlying sources that is supported is enqueueing,
   * closing, and erroring.
   *
   * Pulling (including backpressure and sizes) and cancellation are not
   * supported.
   */
  class ReadableStream < T = any > implements ಠ_ಠ.clutz.module$exports$goog$streams$liteTypes.ReadableStream < T > {
    private noStructuralTyping_module$exports$goog$streams$liteImpl_ReadableStream : any;
    storedError : any ;
    /**
     * Returns a ReadableStreamDefaultReader that enables reading chunks from
     * the source.
     * https://streams.spec.whatwg.org/#rs-get-reader
     */
    getReader ( ) : ಠ_ಠ.clutz.module$exports$goog$streams$liteImpl.ReadableStreamDefaultReader < T > ;
    /**
     * Returns true if the ReadableStream has been locked to a reader.
     * https://streams.spec.whatwg.org/#rs-locked
     */
    locked : boolean ;
  }
  /**
   * A controller for a lite ReadableStream.
   *
   * Provides the enqueue(), error(), and close() methods.
   */
  class ReadableStreamDefaultController < T = any > implements ಠ_ಠ.clutz.module$exports$goog$streams$liteTypes.ReadableStreamDefaultController < T > {
    private noStructuralTyping_module$exports$goog$streams$liteImpl_ReadableStreamDefaultController : any;
    /**
     * A controller for a lite ReadableStream.
     *
     * Provides the enqueue(), error(), and close() methods.
     */
    constructor (stream : ಠ_ಠ.clutz.module$exports$goog$streams$liteImpl.ReadableStream < any > ) ;
    /**
     * Signals that the ReadableStream should close. The ReadableStream will
     * actually close once all of its chunks have been read.
     * https://streams.spec.whatwg.org/#rs-default-controller-close
     */
    close ( ) : void ;
    protected dequeueFromQueue ( ) : T ;
    /**
     * Enqueues a new chunk into the stream that can be read.
     * https://streams.spec.whatwg.org/#rs-default-controller-enqueue
     */
    enqueue (chunk : T ) : void ;
    protected enqueueIntoQueue (chunk : T ) : void ;
    /**
     * Closes the stream with an error. Any future interactions with the
     * controller will throw an error.
     * https://streams.spec.whatwg.org/#rs-default-controller-error
     */
    error (e : any ) : void ;
    protected resetQueue ( ) : void ;
  }
  /**
   * A reader for a lite ReadableStream.
   *
   * Supports the read() and releaseLock() methods, along with the closed
   * property.
   */
  class ReadableStreamDefaultReader < T = any > implements ಠ_ಠ.clutz.module$exports$goog$streams$liteTypes.ReadableStreamDefaultReader < T > {
    private noStructuralTyping_module$exports$goog$streams$liteImpl_ReadableStreamDefaultReader : any;
    /**
     * A reader for a lite ReadableStream.
     *
     * Supports the read() and releaseLock() methods, along with the closed
     * property.
     */
    constructor (stream : ಠ_ಠ.clutz.module$exports$goog$streams$liteImpl.ReadableStream < any > ) ;
    /**
     * Returns a Promise that resolves when the Stream closes or is errored, or if
     * the reader releases its lock.
     * https://streams.spec.whatwg.org/#default-reader-closed
     */
    closed : Promise < undefined > ;
    /**
     * Returns a Promise that resolves with an IIterableResult providing the next
     * chunk or that the stream is closed. The Promise may reject if the stream
     * is errored.
     * https://streams.spec.whatwg.org/#default-reader-read
     */
    read ( ) : Promise < IteratorResult < T > > ;
    /**
     * Release the lock on the stream. Any further calls to read() will error,
     * and the stream can create another reader.
     * https://streams.spec.whatwg.org/#default-reader-release-lock
     */
    releaseLock ( ) : void ;
  }
  /**
   * Creates and returns a new ReadableStream.
   *
   * The underlying source should only have a start() method, and no other
   * properties.
   */
  function newReadableStream < T = any > (underlyingSource : ಠ_ಠ.clutz.module$exports$goog$streams$liteTypes.ReadableStreamUnderlyingSource < T > ) : ಠ_ಠ.clutz.module$exports$goog$streams$liteImpl.ReadableStream < T > ;
}
declare module 'goog:goog.streams.liteImpl' {
  import liteImpl = ಠ_ಠ.clutz.module$exports$goog$streams$liteImpl;
  export = liteImpl;
}

//!! generated by clutz.
// Generated from streams/full_impl.js
declare namespace ಠ_ಠ.clutz.module$exports$goog$streams$fullImpl {
  /**
   * The implemenation of ReadableStream.
   */
  class ReadableStream < T = any > extends ಠ_ಠ.clutz.module$exports$goog$streams$liteImpl.ReadableStream implements ಠ_ಠ.clutz.module$exports$goog$streams$fullTypes.ReadableStream < T > {
    private noStructuralTyping_module$exports$goog$streams$fullImpl_ReadableStream : any;
    /**
     * The implemenation of ReadableStream.
     */
    constructor ( ) ;
    /**
     * Cancels the ReadableStream with an optional reason.
     * https://streams.spec.whatwg.org/#rs-cancel
     */
    cancel (reason : any ) : Promise < undefined > ;
    /**
     * Returns an AyncIterator over the ReadableStream.
     *
     * If preventCancel is passed as an option, calling the return() method on the
     * iterator will terminate the iterator, but will not cancel the
     * ReadableStream.
     * https://streams.spec.whatwg.org/#rs-get-iterator
     */
    getIterator (a ? : { preventCancel : boolean } ) : AsyncIterator < T > ;
    /**
     * Returns a ReadableStreamDefaultReader that enables reading chunks from
     * the source.
     * https://streams.spec.whatwg.org/#rs-get-reader
     */
    getReader ( ) : ಠ_ಠ.clutz.module$exports$goog$streams$fullImpl.ReadableStreamDefaultReader < T > ;
    /**
     * Returns an Array with two elements, both new ReadableStreams that contain
     * the same data as this ReadableStream. This stream will become permanently
     * locked.
     * https://streams.spec.whatwg.org/#rs-tee
     */
    tee ( ) : ಠ_ಠ.clutz.module$exports$goog$streams$fullImpl.ReadableStream < any > [] ;
  }
  class ReadableStreamAsyncIterator < T = any > implements ಠ_ಠ.clutz.module$exports$goog$streams$fullTypes.ReadableStreamAsyncIterator < T > {
    private noStructuralTyping_module$exports$goog$streams$fullImpl_ReadableStreamAsyncIterator : any;
    constructor (asyncIteratorReader : ಠ_ಠ.clutz.module$exports$goog$streams$fullImpl.ReadableStreamDefaultReader < any > , preventCancel : boolean ) ;
    /**
     * Gets the next value from the ReadableStream.
     * https://streams.spec.whatwg.org/#rs-asynciterator-prototype-next
     */
    next ( ) : any ;
    /**
     * Cancels the underlying stream and resolves with the value.
     */
    return (value : any ) : Promise < IteratorResult < T > > ;
  }
  /**
   * The controller for a ReadableStream. Adds cancellation and backpressure onto
   * the liteImpl DefaultController.
   */
  class ReadableStreamDefaultController < T = any > extends ಠ_ಠ.clutz.module$exports$goog$streams$liteImpl.ReadableStreamDefaultController implements ಠ_ಠ.clutz.module$exports$goog$streams$fullTypes.ReadableStreamDefaultController {
    private noStructuralTyping_module$exports$goog$streams$fullImpl_ReadableStreamDefaultController : any;
    /**
     * The controller for a ReadableStream. Adds cancellation and backpressure onto
     * the liteImpl DefaultController.
     */
    constructor (stream : ಠ_ಠ.clutz.module$exports$goog$streams$fullImpl.ReadableStream < any > , cancelAlgorithm : ( ಠ_ಠ.clutz.module$contents$goog$streams$fullImpl_CancelAlgorithm ) | undefined , pullAlgorithm : ( ಠ_ಠ.clutz.module$contents$goog$streams$fullImpl_PullAlgorithm ) | undefined , strategyHWM : number , strategySizeAlgorithm : ( (a : T ) => number ) | undefined ) ;
    callPullIfNeeded ( ) : void ;
    clearAlgorithms ( ) : void ;
    dequeueFromQueue ( ) : any ;
    /**
     * Returns the desired size to fill the controlled stream's internal queue. It
     * can be negative if the queue is full.
     * https://streams.spec.whatwg.org/#rs-default-controller-desired-size
     */
    desiredSize : number | null ;
    enqueueIntoQueue (chunk ? : any ) : void ;
    resetQueue ( ) : void ;
    started ( ) : void ;
  }
  /**
   * The DefaultReader for a ReadableStream. Adds cancellation onto the liteImpl
   * DefaultReader.
   */
  class ReadableStreamDefaultReader < T = any > extends ಠ_ಠ.clutz.module$exports$goog$streams$liteImpl.ReadableStreamDefaultReader implements ಠ_ಠ.clutz.module$exports$goog$streams$fullTypes.ReadableStreamDefaultReader < T > {
    private noStructuralTyping_module$exports$goog$streams$fullImpl_ReadableStreamDefaultReader : any;
    /**
     * The DefaultReader for a ReadableStream. Adds cancellation onto the liteImpl
     * DefaultReader.
     */
    constructor ( ...a : any [] ) ;
    /**
     * Cancels the ReadableStream with an optional reason.
     * https://streams.spec.whatwg.org/#default-reader-cancel
     */
    cancel (reason : any ) : Promise < undefined > ;
  }
  /**
   * Creates and returns a new ReadableStream.
   *
   * The underlying source should only have a start() method, and no other
   * properties.
   */
  function newReadableStream < T = any > (underlyingSource ? : ಠ_ಠ.clutz.module$exports$goog$streams$fullTypes.ReadableStreamUnderlyingSource < T > , strategy ? : ಠ_ಠ.clutz.module$exports$goog$streams$fullTypes.ReadableStreamStrategy < T > ) : ಠ_ಠ.clutz.module$exports$goog$streams$fullImpl.ReadableStream < any > ;
}
declare module 'goog:goog.streams.fullImpl' {
  import fullImpl = ಠ_ಠ.clutz.module$exports$goog$streams$fullImpl;
  export = fullImpl;
}
// Generated from streams/full_impl.js
declare namespace ಠ_ಠ.clutz {
  type module$contents$goog$streams$fullImpl_CancelAlgorithm = (a : any ) => Promise < undefined > ;
}
// Generated from streams/full_impl.js
declare namespace ಠ_ಠ.clutz {
  type module$contents$goog$streams$fullImpl_PullAlgorithm = (a : ಠ_ಠ.clutz.module$exports$goog$streams$fullImpl.ReadableStreamDefaultController < any > ) => Promise < undefined > ;
}

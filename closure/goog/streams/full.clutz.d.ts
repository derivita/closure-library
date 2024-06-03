//!! generated by clutz.
// Generated from streams/full.js
declare namespace ಠ_ಠ.clutz.module$exports$goog$streams$full {
  /**
   * Creates and returns a new ReadableStream.
   *
   * The underlying source should only have a start() method, and no other
   * properties.
   */
  function newReadableStream < T = any > (underlyingSource ? : ಠ_ಠ.clutz.module$exports$goog$streams$fullTypes.ReadableStreamUnderlyingSource < T > , strategy ? : ಠ_ಠ.clutz.module$exports$goog$streams$fullTypes.ReadableStreamStrategy < T > ) : ಠ_ಠ.clutz.module$exports$goog$streams$fullTypes.ReadableStream < T > ;
  let ReadableStream : any ;
  let ReadableStreamAsyncIterator : any ;
  let ReadableStreamDefaultController : any ;
  let ReadableStreamDefaultReader : any ;
  let ReadableStreamStrategy : any ;
  let ReadableStreamUnderlyingSource : any ;
}
declare module 'goog:goog.streams.full' {
  import full = ಠ_ಠ.clutz.module$exports$goog$streams$full;
  export = full;
}

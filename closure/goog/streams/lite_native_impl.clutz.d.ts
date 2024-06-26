//!! generated by clutz.
// Generated from streams/lite_native_impl.js
declare namespace ಠ_ಠ.clutz.module$exports$goog$streams$liteNativeImpl {
  class NativeReadableStream < T = any > implements ಠ_ಠ.clutz.module$exports$goog$streams$liteTypes.ReadableStream < T > {
    private noStructuralTyping_module$exports$goog$streams$liteNativeImpl_NativeReadableStream : any;
    constructor (stream : ReadableStream ) ;
    protected stream : ReadableStream ;
    getReader ( ) : any ;
    locked : any ;
  }
  class NativeReadableStreamDefaultController < T = any > implements ಠ_ಠ.clutz.module$exports$goog$streams$liteTypes.ReadableStreamDefaultController < T > {
    private noStructuralTyping_module$exports$goog$streams$liteNativeImpl_NativeReadableStreamDefaultController : any;
    constructor (controller : ಠ_ಠ.clutz.ReadableStreamDefaultController ) ;
    protected controller : ಠ_ಠ.clutz.ReadableStreamDefaultController ;
    close ( ) : void ;
    enqueue (chunk ? : any ) : void ;
    error (e ? : any ) : void ;
  }
  class NativeReadableStreamDefaultReader < T = any > implements ಠ_ಠ.clutz.module$exports$goog$streams$liteTypes.ReadableStreamDefaultReader < T > {
    private noStructuralTyping_module$exports$goog$streams$liteNativeImpl_NativeReadableStreamDefaultReader : any;
    constructor (reader : ಠ_ಠ.clutz.ReadableStreamDefaultReader ) ;
    protected reader : ಠ_ಠ.clutz.ReadableStreamDefaultReader ;
    closed : any ;
    read ( ) : any ;
    releaseLock ( ) : void ;
  }
  function newReadableStream < T = any > (underlyingSource : ಠ_ಠ.clutz.module$exports$goog$streams$liteTypes.ReadableStreamUnderlyingSource < T > ) : ಠ_ಠ.clutz.module$exports$goog$streams$liteNativeImpl.NativeReadableStream < T > ;
}
declare module 'goog:goog.streams.liteNativeImpl' {
  import liteNativeImpl = ಠ_ಠ.clutz.module$exports$goog$streams$liteNativeImpl;
  export = liteNativeImpl;
}

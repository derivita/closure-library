//!! generated by clutz.
// Generated from collections/maps.js
declare namespace ಠ_ಠ.clutz.goog.collections.maps {
  export import MapLike = ಠ_ಠ.clutz.module$contents$goog$collections$maps_MapLike ;
  function equals < K = any , V1 = any , V2 = any > (map : module$contents$goog$collections$maps_MapLike < K , V1 > , otherMap : module$contents$goog$collections$maps_MapLike < K , V2 > , valueEqualityFn ? : (a : V1 , b : V2 ) => boolean ) : boolean ;
  function hasValue < V1 = any , V2 = any > (map : module$contents$goog$collections$maps_MapLike < any , V1 > , val : V2 , valueEqualityFn ? : (a : V1 , b : V2 ) => boolean ) : boolean ;
  function setAll < K = any , V = any > (map : module$contents$goog$collections$maps_MapLike < K , V > , entries : Iterable < ( K | V ) [] > | null ) : void ;
  function toObject < K = any , V = any > (map : module$contents$goog$collections$maps_MapLike < K , V > ) : { [ /* warning: coerced from K */ key: string ]: V } ;
  function transpose < K = any , V = any > (map : module$contents$goog$collections$maps_MapLike < K , V > ) : Map < V , K > ;
}
declare module 'goog:goog.collections.maps' {
  import maps = ಠ_ಠ.clutz.goog.collections.maps;
  export = maps;
}
// Generated from collections/maps.js
declare namespace ಠ_ಠ.clutz {
  /**
   * A MapLike implements the same public interface as an ES6 Map, without tying
   * the underlying code directly to the implementation. Any additions to this
   * type should also be present on ES6 Maps.
   */
  interface module$contents$goog$collections$maps_MapLike < K = any , V = any > {
    size : number ;
    get (key : K ) : V | undefined ;
    has (key : K ) : boolean ;
    keys ( ) : IterableIterator < K > ;
    set (key : K , val : V ) : void ;
    values ( ) : IterableIterator < V > ;
  }
}
declare namespace ಠ_ಠ.clutz.module$exports$goog$collections$maps {
  export import MapLike = ಠ_ಠ.clutz.module$contents$goog$collections$maps_MapLike ;
}

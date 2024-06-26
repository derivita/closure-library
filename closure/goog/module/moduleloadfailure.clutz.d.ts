//!! generated by clutz.
// Generated from module/moduleloadfailure.js
declare namespace ಠ_ಠ.clutz.goog.module {
  export import ModuleLoadFailure = ಠ_ಠ.clutz.module$contents$goog$module$ModuleLoadFailure_ModuleLoadFailure ;
}
declare module 'goog:goog.module.ModuleLoadFailure' {
  import ModuleLoadFailure = ಠ_ಠ.clutz.goog.module.ModuleLoadFailure;
  export default ModuleLoadFailure;
}
// Generated from module/moduleloadfailure.js
declare namespace ಠ_ಠ.clutz {
  class module$contents$goog$module$ModuleLoadFailure_ModuleLoadFailure {
    private noStructuralTyping_module$contents$goog$module$ModuleLoadFailure_ModuleLoadFailure : any;
    constructor (type : module$contents$goog$module$ModuleLoadFailure_Type , status ? : number ) ;
    status ? : number ;
    type : module$contents$goog$module$ModuleLoadFailure_Type ;
    toString ( ) : string ;
  }
}
// Generated from unknown file
declare namespace ಠ_ಠ.clutz.module$contents$goog$module$ModuleLoadFailure_ModuleLoadFailure {
  //!! Type aliases enum module$contents$goog$module$ModuleLoadFailure_Type
  export import Type = module$contents$goog$module$ModuleLoadFailure_Type ;
}
// Generated from module/moduleloadfailure.js
declare namespace ಠ_ಠ.clutz {
  /**
   * The possible reasons for a module load failure callback being fired.
   */
  /**
   * The possible reasons for a module load failure callback being fired.
   */
  enum module$contents$goog$module$ModuleLoadFailure_Type {
    CONSECUTIVE_FAILURES = 1.0 ,
    INIT_ERROR = 4.0 ,
    OLD_CODE_GONE = 3.0 ,
    TIMEOUT = 2.0 ,
    UNAUTHORIZED = 0.0 ,
  }
}
declare namespace ಠ_ಠ.clutz {
  export import module$exports$goog$module$ModuleLoadFailure = ಠ_ಠ.clutz.module$contents$goog$module$ModuleLoadFailure_ModuleLoadFailure ;
}
declare namespace ಠ_ಠ.clutz.module$exports$goog$module$ModuleLoadFailure {
  export import Type = ಠ_ಠ.clutz.module$contents$goog$module$ModuleLoadFailure_Type ;
}

//!! generated by clutz.
// Generated from functions/functions.js
declare namespace ಠ_ಠ.clutz.goog.functions {
  let CACHE_RETURN_VALUE : boolean ;
  /**
   * Always returns `undefined` (loosely-typed version).
   */
  function EMPTY ( ...a : any [] ) : any ;
  /**
   * Always returns false.
   */
  function FALSE ( ...a : any [] ) : boolean ;
  /**
   * Always returns `null`.
   */
  function NULL ( ...a : any [] ) : null ;
  /**
   * Always returns true.
   */
  function TRUE ( ...a : any [] ) : boolean ;
  /**
   * Always returns `undefined`.
   */
  function UNDEFINED ( ...a : any [] ) : void ;
  /**
   * Creates a function that returns true if each of its components evaluates
   * to true. The components are evaluated in order, and the evaluation will be
   * short-circuited as soon as a function returns false.
   * For example, (goog.functions.and(f, g))(x) is equivalent to f(x) && g(x).
   * @param var_args A list of functions.
   */
  function and ( ...var_args : ( Function | null ) [] ) : ( ...a : any [] ) => boolean ;
  /**
   * Gives a wrapper function that caches the return value of a parameterless
   * function when first called.
   *
   * When called for the first time, the given function is called and its
   * return value is cached (thus this is only appropriate for idempotent
   * functions).  Subsequent calls will return the cached return value. This
   * allows the evaluation of expensive functions to be delayed until first used.
   *
   * To cache the return values of functions with parameters, see goog.memoize.
   * @param fn A function to lazily evaluate.
   */
  function cacheReturnValue < T = any > (fn : ( ) => T ) : ( ) => T ;
  /**
   * Creates the composition of the functions passed in.
   * For example, (goog.functions.compose(f, g))(a) is equivalent to f(g(a)).
   * @param fn The final function.
   * @param var_args A list of functions.
   */
  function compose < T = any > (fn : ( ...a : any [] ) => T ,  ...var_args : ( Function | null ) [] ) : ( ...a : any [] ) => T ;
  /**
   * Creates a function that always returns the same value.
   * @param retValue The value to return.
   */
  function constant < T = any > (retValue : T ) : ( ) => T ;
  /**
   * Generic factory function to construct an object given the constructor
   * and the arguments. Intended to be bound to create object factories.
   *
   * Example:
   *
   * var factory = goog.partial(goog.functions.create, Class);
   * @param constructor The constructor for the Object.
   * @param var_args The arguments to be passed to the constructor.
   */
  function create < T = any > (constructor : { new ( ...a : any [] ) : T } ,  ...var_args : any [] ) : T ;
  /**
   * Wraps a function to allow it to be called, at most, once per interval
   * (specified in milliseconds). If the wrapper function is called N times within
   * that interval, only the Nth call will go through.
   *
   * This is particularly useful for batching up repeated actions where the
   * last action should win. This can be used, for example, for refreshing an
   * autocomplete pop-up every so often rather than updating with every keystroke,
   * since the final text typed by the user is the one that should produce the
   * final autocomplete results. For more stateful debouncing with support for
   * pausing, resuming, and canceling debounced actions, use
   * `goog.async.Debouncer`.
   * @param f Function to call.
   * @param interval Interval over which to debounce. The function will only be called after the full interval has elapsed since the last call.
   * @param opt_scope Object in whose scope to call the function.
   */
  function debounce < SCOPE = any > (f : (this : SCOPE ,  ...a : any [] ) => any , interval : number , opt_scope ? : SCOPE ) : ( ...a : any [] ) => void ;
  /**
   * Creates a function that returns whether its argument equals the given value.
   *
   * Example:
   * var key = goog.object.findKey(obj, goog.functions.equalTo('needle'));
   * @param value The value to compare to.
   * @param opt_useLooseComparison Whether to use a loose (==) comparison rather than a strict (===) one. Defaults to false.
   */
  function equalTo (value : any , opt_useLooseComparison ? : boolean ) : (a : any ) => boolean ;
  /**
   * Creates a function that always throws an error with the given message.
   * @param message The error message.
   */
  function error (message : string ) : Function ;
  /**
   * Creates a function that throws the given object.
   * @param err An object to be thrown.
   */
  function fail (err : any ) : Function ;
  /**
   * A simple function that returns the first argument of whatever is passed
   * into it.
   * @param opt_returnValue The single value that will be returned.
   * @param var_args Optional trailing arguments. These are ignored.
   */
  function identity < T = any > (opt_returnValue ? : T ,  ...var_args : any [] ) : T ;
  /**
   * Returns true if the specified value is a function.
   * @param val Variable to test.
   */
  function isFunction (val : any ) : boolean ;
  /**
   * Given a function, create a function that keeps opt_numArgs arguments and
   * silently discards all additional arguments.
   * @param f The original function.
   * @param opt_numArgs The number of arguments to keep. Defaults to 0.
   */
  function lock (f : Function | null , opt_numArgs ? : number ) : Function ;
  /**
   * Creates a function that returns the Boolean opposite of a provided function.
   * For example, (goog.functions.not(f))(x) is equivalent to !f(x).
   * @param f The original function.
   */
  function not (f : Function ) : ( ...a : any [] ) => boolean ;
  /**
   * Creates a function that returns its nth argument.
   * @param n The position of the return argument.
   */
  function nth (n : number ) : Function ;
  /**
   * Wraps a function to allow it to be called, at most, once. All
   * additional calls are no-ops.
   *
   * This is particularly useful for initialization functions
   * that should be called, at most, once.
   * @param f Function to call.
   */
  function once (f : ( ) => any ) : ( ) => void ;
  /**
   * Creates a function that returns true if any of its components evaluates
   * to true. The components are evaluated in order, and the evaluation will be
   * short-circuited as soon as a function returns true.
   * For example, (goog.functions.or(f, g))(x) is equivalent to f(x) || g(x).
   * @param var_args A list of functions.
   */
  function or ( ...var_args : ( Function | null ) [] ) : ( ...a : any [] ) => boolean ;
  /**
   * Like goog.partial(), except that arguments are added after arguments to the
   * returned function.
   *
   * Usage:
   * function f(arg1, arg2, arg3, arg4) { ... }
   * var g = goog.functions.partialRight(f, arg3, arg4);
   * g(arg1, arg2);
   * @param fn A function to partially apply.
   * @param var_args Additional arguments that are partially applied to fn at the end.
   */
  function partialRight (fn : Function ,  ...var_args : any [] ) : Function ;
  /**
   * Wraps a function to allow it to be called, at most, once per interval
   * (specified in milliseconds). If the wrapper function is called N times within
   * that interval, only the 1st call will go through.
   *
   * This is particularly useful for limiting repeated user requests where the
   * first request is guaranteed to have all the data required to perform the
   * final action, so there's no need to wait until the end of the interval before
   * sending the request out.
   * @param f Function to call.
   * @param interval Interval over which to rate-limit. The function will only be called once per interval, and ignored for the remainer of the interval.
   * @param opt_scope Object in whose scope to call the function.
   */
  function rateLimit < SCOPE = any > (f : (this : SCOPE ,  ...a : any [] ) => any , interval : number , opt_scope ? : SCOPE ) : ( ...a : any [] ) => void ;
  /**
   * Creates a function that calls the functions passed in in sequence, and
   * returns the value of the last function. For example,
   * (goog.functions.sequence(f, g))(x) is equivalent to f(x),g(x).
   * @param var_args A list of functions.
   */
  function sequence ( ...var_args : ( Function | null ) [] ) : Function ;
  /**
   * Wraps a function to allow it to be called, at most, once per interval
   * (specified in milliseconds). If the wrapper function is called N times in
   * that interval, both the 1st and the Nth calls will go through.
   *
   * This is particularly useful for limiting repeated user requests where the
   * the last action should win, but you also don't want to wait until the end of
   * the interval before sending a request out, as it leads to a perception of
   * slowness for the user.
   * @param f Function to call.
   * @param interval Interval over which to throttle. The function can only be called once per interval.
   * @param opt_scope Object in whose scope to call the function.
   */
  function throttle < SCOPE = any > (f : (this : SCOPE ,  ...a : any [] ) => any , interval : number , opt_scope ? : SCOPE ) : ( ...a : any [] ) => void ;
  /**
   * Given a function, create a new function that swallows its return value
   * and replaces it with a new one.
   * @param f A function.
   * @param retValue A new return value.
   */
  function withReturnValue < T = any > (f : Function | null , retValue : T ) : ( ...a : any [] ) => T ;
}
declare module 'goog:goog.functions' {
  import functions = ಠ_ಠ.clutz.goog.functions;
  export = functions;
}

//!! generated by clutz.
// Generated from style/transition.js
declare namespace ಠ_ಠ.clutz.goog.style.transition {
  function isSupported ( ) : boolean ;
  /**
   * Removes any programmatically-added CSS3 transition in the given element.
   * @param element The element to remove transition from.
   */
  function removeAll (element : GlobalElement | null ) : void ;
  /**
   * Sets the element CSS3 transition to properties.
   * @param element The element to set transition on.
   * @param properties A single CSS3 transition property or array of properties.
   */
  function set (element : GlobalElement | null , properties : { delay : number , duration : number , property : string , timing : string } | string | ( { delay : number , duration : number , property : string , timing : string } | string ) [] | null ) : void ;
}
declare module 'goog:goog.style.transition' {
  import transition = ಠ_ಠ.clutz.goog.style.transition;
  export = transition;
}
// Generated from style/transition.js
declare namespace ಠ_ಠ.clutz.goog.style.transition {
  /**
   * A typedef to represent a CSS3 transition property. Duration and delay
   * are both in seconds. Timing is CSS3 timing function string, such as
   * 'easein', 'linear'.
   *
   * Alternatively, specifying string in the form of '[property] [duration]
   * [timing] [delay]' as specified in CSS3 transition is fine too.
   */
  type Css3Property = { delay : number , duration : number , property : string , timing : string } | string ;
}
declare module 'goog:goog.style.transition.Css3Property' {
  import Css3Property = ಠ_ಠ.clutz.goog.style.transition.Css3Property;
  export default Css3Property;
}

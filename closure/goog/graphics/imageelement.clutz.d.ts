//!! generated by clutz.
// Generated from graphics/imageelement.js
declare namespace ಠ_ಠ.clutz.goog.graphics {
  /**
   * Interface for a graphics image element.
   * You should not construct objects from this constructor. Instead,
   * you should use `goog.graphics.Graphics.drawImage` and it
   * will return an implementation of this interface for you.
   */
  class ImageElement extends ಠ_ಠ.clutz.goog.graphics.Element {
    private noStructuralTyping_goog_graphics_ImageElement : any;
    /**
     * Interface for a graphics image element.
     * You should not construct objects from this constructor. Instead,
     * you should use `goog.graphics.Graphics.drawImage` and it
     * will return an implementation of this interface for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     */
    constructor (element : GlobalElement | null , graphics : ಠ_ಠ.clutz.goog.graphics.AbstractGraphics | null ) ;
    /**
     * Update the position of the image.
     * @param x X coordinate (left).
     * @param y Y coordinate (top).
     */
    setPosition (a : number , b : number ) : any ;
    /**
     * Update the size of the image.
     * @param width Width of image.
     * @param height Height of image.
     */
    setSize (a : number , b : number ) : any ;
    /**
     * Update the source of the image.
     * @param src Source of the image.
     */
    setSource (a : string ) : any ;
  }
}
declare module 'goog:goog.graphics.ImageElement' {
  import ImageElement = ಠ_ಠ.clutz.goog.graphics.ImageElement;
  export default ImageElement;
}

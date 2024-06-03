//!! generated by clutz.
// Generated from graphics/ext/graphics.js
declare namespace ಠ_ಠ.clutz.goog.graphics.ext {
  /**
   * Wrapper for a graphics surface.
   */
  class Graphics extends ಠ_ಠ.clutz.goog.graphics.ext.Group {
    private noStructuralTyping_goog_graphics_ext_Graphics : any;
    /**
     * Wrapper for a graphics surface.
     * @param width The width in pixels.  Strings expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param height The height in pixels.  Strings expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param opt_coordWidth The coordinate width - if omitted or null, defaults to same as width.
     * @param opt_coordHeight The coordinate height. - if omitted or null, defaults to same as height.
     * @param opt_domHelper The DOM helper object for the document we want to render in.
     * @param opt_isSimple Flag used to indicate the graphics object will be drawn to in a single pass, and the fastest implementation for this scenario should be favored.  NOTE: Setting to true may result in degradation of text support.
     */
    constructor (width : string | number , height : string | number , opt_coordWidth ? : number | null , opt_coordHeight ? : number | null , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null , opt_isSimple ? : boolean ) ;
    getCoordOrigin ( ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
    getCoordSize ( ) : ಠ_ಠ.clutz.goog.math.Size | null ;
    getElement ( ) : GlobalElement | null ;
    getHeight ( ) : number ;
    getImplementation ( ) : ಠ_ಠ.clutz.goog.graphics.AbstractGraphics | null ;
    getPixelScaleX ( ) : number ;
    getPixelScaleY ( ) : number ;
    getPixelSize ( ) : ಠ_ಠ.clutz.goog.math.Size | null ;
    getWidth ( ) : number ;
    /**
     * Called from the parent class, this method resets any pre-computed positions
     * and sizes.
     */
    protected redraw ( ) : void ;
    /**
     * Renders the underlying graphics.
     * @param parentElement Parent element to render the component into.
     */
    render (parentElement : GlobalElement | null ) : void ;
    /**
     * Changes the coordinate system position.
     * @param left The coordinate system left bound.
     * @param top The coordinate system top bound.
     */
    setCoordOrigin (left : number , top : number ) : void ;
    /**
     * Changes the coordinate size.
     * @param coordWidth The coordinate width.
     * @param coordHeight The coordinate height.
     */
    setCoordSize (coordWidth : number , coordHeight : number ) : void ;
    /**
     * Change the size of the canvas.
     * @param pixelWidth The width in pixels.
     * @param pixelHeight The height in pixels.
     */
    setPixelSize (pixelWidth : number , pixelHeight : number ) : void ;
    /**
     * Never transform a surface.
     */
    transform ( ) : void ;
  }
}
declare module 'goog:goog.graphics.ext.Graphics' {
  import Graphics = ಠ_ಠ.clutz.goog.graphics.ext.Graphics;
  export default Graphics;
}

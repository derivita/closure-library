//!! generated by clutz.
// Generated from graphics/svggraphics.js
declare namespace ಠ_ಠ.clutz.goog.graphics {
  /**
   * A Graphics implementation for drawing using SVG.
   */
  class SvgGraphics extends ಠ_ಠ.clutz.goog.graphics.AbstractGraphics {
    private noStructuralTyping_goog_graphics_SvgGraphics : any;
    /**
     * A Graphics implementation for drawing using SVG.
     * @param width The width in pixels.  Strings expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param height The height in pixels.  Strings expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param opt_coordWidth The coordinate width - if omitted or null, defaults to same as width.
     * @param opt_coordHeight The coordinate height - if omitted or null, defaults to same as height.
     * @param opt_domHelper The DOM helper object for the document we want to render in.
     */
    constructor (width : string | number , height : string | number , opt_coordWidth ? : number | null , opt_coordHeight ? : number | null , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    /**
     * Adds a definition of an element to the global definitions.
     * @param defKey This is a key that should be unique in a way that if two definitions are equal the should have the same key.
     * @param defElement DOM element to add as a definition. It must have an id attribute set.
     */
    addDef (defKey : string , defElement : GlobalElement | null ) : string ;
    /**
     * Remove all drawing elements from the graphics.
     */
    clear ( ) : void ;
    /**
     * Creates the DOM representation of the graphics area.
     */
    createDom ( ) : void ;
    /**
     * Create an empty group of drawing elements.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     */
    createGroup (opt_group ? : ಠ_ಠ.clutz.goog.graphics.GroupElement | null ) : ಠ_ಠ.clutz.goog.graphics.GroupElement ;
    /**
     * Disposes of the component by removing event handlers, detacing DOM nodes from
     * the document body, and removing references to them.
     */
    protected disposeInternal ( ) : void ;
    /**
     * Draw an ellipse.
     * @param cx Center X coordinate.
     * @param cy Center Y coordinate.
     * @param rx Radius length for the x-axis.
     * @param ry Radius length for the y-axis.
     * @param stroke Stroke object describing the stroke.
     * @param fill Fill object describing the fill.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     */
    drawEllipse (cx : number , cy : number , rx : number , ry : number , stroke : ಠ_ಠ.clutz.goog.graphics.Stroke | null , fill : ಠ_ಠ.clutz.goog.graphics.Fill | null , opt_group ? : ಠ_ಠ.clutz.goog.graphics.GroupElement | null ) : ಠ_ಠ.clutz.goog.graphics.EllipseElement ;
    /**
     * Draw an image.
     * @param x X coordinate (left).
     * @param y Y coordinate (top).
     * @param width Width of the image.
     * @param height Height of the image.
     * @param src The source fo the image.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     */
    drawImage (x : number , y : number , width : number , height : number , src : string , opt_group ? : ಠ_ಠ.clutz.goog.graphics.GroupElement | null ) : ಠ_ಠ.clutz.goog.graphics.ImageElement ;
    /**
     * Draw a path.
     * @param path The path object to draw.
     * @param stroke Stroke object describing the stroke.
     * @param fill Fill object describing the fill.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     */
    drawPath (path : ಠ_ಠ.clutz.goog.graphics.Path , stroke : ಠ_ಠ.clutz.goog.graphics.Stroke | null , fill : ಠ_ಠ.clutz.goog.graphics.Fill | null , opt_group ? : ಠ_ಠ.clutz.goog.graphics.GroupElement | null ) : ಠ_ಠ.clutz.goog.graphics.PathElement ;
    /**
     * Draw a rectangle.
     * @param x X coordinate (left).
     * @param y Y coordinate (top).
     * @param width Width of rectangle.
     * @param height Height of rectangle.
     * @param stroke Stroke object describing the stroke.
     * @param fill Fill object describing the fill.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     */
    drawRect (x : number , y : number , width : number , height : number , stroke : ಠ_ಠ.clutz.goog.graphics.Stroke | null , fill : ಠ_ಠ.clutz.goog.graphics.Fill | null , opt_group ? : ಠ_ಠ.clutz.goog.graphics.GroupElement | null ) : ಠ_ಠ.clutz.goog.graphics.RectElement ;
    /**
     * Draw a text string vertically centered on a given line.
     * @param text The text to draw.
     * @param x1 X coordinate of start of line.
     * @param y1 Y coordinate of start of line.
     * @param x2 X coordinate of end of line.
     * @param y2 Y coordinate of end of line.
     * @param align Horizontal alignment: left (default), center, right.
     * @param font Font describing the font properties.
     * @param stroke Stroke object describing the stroke.
     * @param fill Fill object describing the fill.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     */
    drawTextOnLine (text : string , x1 : number , y1 : number , x2 : number , y2 : number , align : string , font : ಠ_ಠ.clutz.goog.graphics.Font | null , stroke : ಠ_ಠ.clutz.goog.graphics.Stroke | null , fill : ಠ_ಠ.clutz.goog.graphics.Fill | null , opt_group ? : ಠ_ಠ.clutz.goog.graphics.GroupElement | null ) : ಠ_ಠ.clutz.goog.graphics.TextElement ;
    enterDocument ( ) : void ;
    exitDocument ( ) : void ;
    /**
     * Returns the id of a definition element.
     * @param defKey This is a key that should be unique in a way that if two definitions are equal the should have the same key.
     */
    getDef (defKey : string ) : string | null ;
    getPixelSize ( ) : any ;
    /**
     * Measure and return the width (in pixels) of a given text string.
     * Text measurement is needed to make sure a text can fit in the allocated area.
     * The way text length is measured is by writing it into a div that is after
     * the visible area, measure the div width, and immediately erase the written
     * value.
     */
    getTextWidth (text ? : any , font ? : any ) : any ;
    isDomClonable ( ) : any ;
    /**
     * Removes a definition of an elemnt from the global definitions.
     * @param defKey This is a key that should be unique in a way that if two definitions are equal they should have the same key.
     */
    removeDef (defKey : string ) : void ;
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
     * Set the transformation of an element.
     * @param element The element wrapper.
     * @param affineTransform The transformation applied to this element.
     */
    setElementAffineTransform (element : ಠ_ಠ.clutz.goog.graphics.Element | null , affineTransform : ಠ_ಠ.clutz.goog.graphics.AffineTransform ) : void ;
    /**
     * Sets properties to an SVG element. Used internally and by different
     * SVG elements.
     * @param element The svg element.
     * @param attributes Map of name-value pairs for attributes.
     */
    setElementAttributes (element : GlobalElement | null , attributes : GlobalObject | null ) : void ;
    /**
     * Sets the fill of the given element.
     * @param element The element wrapper.
     * @param fill The fill object.
     */
    setElementFill (element : ಠ_ಠ.clutz.goog.graphics.StrokeAndFillElement | null , fill : ಠ_ಠ.clutz.goog.graphics.Fill | null ) : void ;
    /**
     * Sets the stroke of the given element.
     * @param element The element wrapper.
     * @param stroke The stroke object.
     */
    setElementStroke (element : ಠ_ಠ.clutz.goog.graphics.StrokeAndFillElement | null , stroke : ಠ_ಠ.clutz.goog.graphics.Stroke | null ) : void ;
    /**
     * Set the translation and rotation of an element.
     *
     * If a more general affine transform is needed than this provides
     * (e.g. skew and scale) then use setElementAffineTransform.
     * @param element The element wrapper.
     * @param x The x coordinate of the translation transform.
     * @param y The y coordinate of the translation transform.
     * @param angle The angle of the rotation transform.
     * @param centerX The horizontal center of the rotation transform.
     * @param centerY The vertical center of the rotation transform.
     */
    setElementTransform (element : ಠ_ಠ.clutz.goog.graphics.Element | null , x : number , y : number , angle : number , centerX : number , centerY : number ) : void ;
    /**
     * Change the size of the canvas.
     * @param pixelWidth The width in pixels.
     * @param pixelHeight The height in pixels.
     */
    setSize (pixelWidth : number , pixelHeight : number ) : void ;
    /**
     * Returns a string representation of a logical path suitable for use in
     * an SVG element.
     * @param path The logical path.
     */
    static getSvgPath (path : ಠ_ಠ.clutz.goog.graphics.Path | null ) : string ;
  }
}
declare module 'goog:goog.graphics.SvgGraphics' {
  import SvgGraphics = ಠ_ಠ.clutz.goog.graphics.SvgGraphics;
  export default SvgGraphics;
}

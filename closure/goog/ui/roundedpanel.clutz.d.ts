//!! generated by clutz.
// Generated from ui/roundedpanel.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Base class for the hierarchy of RoundedPanel classes. Do not
   * instantiate directly. Instead, call goog.ui.RoundedPanel.create().
   * The HTML structure for the RoundedPanel is:
   * <pre>
   * - div (Contains the background and content. Class name: goog-roundedpanel)
   * - div (Contains the background/rounded corners. Class name:
   * goog-roundedpanel-bg)
   * - div (Contains the content. Class name: goog-roundedpanel-content)
   * </pre>
   */
  class BaseRoundedPanel extends ಠ_ಠ.clutz.goog.ui.Component {
    private noStructuralTyping_goog_ui_BaseRoundedPanel : any;
    /**
     * Base class for the hierarchy of RoundedPanel classes. Do not
     * instantiate directly. Instead, call goog.ui.RoundedPanel.create().
     * The HTML structure for the RoundedPanel is:
     * <pre>
     * - div (Contains the background and content. Class name: goog-roundedpanel)
     * - div (Contains the background/rounded corners. Class name:
     * goog-roundedpanel-bg)
     * - div (Contains the content. Class name: goog-roundedpanel-content)
     * </pre>
     * @param radius The radius of the rounded corner(s), in pixels.
     * @param borderWidth The thickness of the border, in pixels.
     * @param borderColor The border color of the panel.
     * @param opt_backgroundColor The background color of the panel.
     * @param opt_corners The corners of the panel to be rounded. Any corners not specified will be rendered as square corners. Will default to all square corners if not specified.
     * @param opt_domHelper The DOM helper object for the document we want to render in.
     */
    constructor (radius : number , borderWidth : number , borderColor : string , opt_backgroundColor ? : string , opt_corners ? : number , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    /**
     * This method performs all the necessary DOM manipulation to create the panel.
     * Overrides {@link goog.ui.Component#decorateInternal}.
     * @param element The element to decorate.
     */
    protected decorateInternal (element : GlobalElement | null ) : void ;
    disposeInternal ( ) : void ;
    /**
     * Returns the DOM element containing the actual content.
     */
    getContentElement ( ) : GlobalElement | null ;
  }
}
declare module 'goog:goog.ui.BaseRoundedPanel' {
  import BaseRoundedPanel = ಠ_ಠ.clutz.goog.ui.BaseRoundedPanel;
  export default BaseRoundedPanel;
}
// Generated from ui/roundedpanel.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * RoundedPanel class specifically for browsers that support CSS attributes
   * for elements with rounded borders (ex. Safari 3.0+, Firefox 3.0+). Do not
   * instantiate directly. Instead, call goog.ui.RoundedPanel.create().
   */
  class CssRoundedPanel extends ಠ_ಠ.clutz.goog.ui.BaseRoundedPanel {
    private noStructuralTyping_goog_ui_CssRoundedPanel : any;
    /**
     * RoundedPanel class specifically for browsers that support CSS attributes
     * for elements with rounded borders (ex. Safari 3.0+, Firefox 3.0+). Do not
     * instantiate directly. Instead, call goog.ui.RoundedPanel.create().
     * @param radius The radius of the rounded corner(s), in pixels.
     * @param borderWidth The thickness of the border, in pixels.
     * @param borderColor The border color of the panel.
     * @param opt_backgroundColor The background color of the panel.
     * @param opt_corners The corners of the panel to be rounded. Any corners not specified will be rendered as square corners. Will default to all square corners if not specified.
     * @param opt_domHelper The DOM helper object for the document we want to render in.
     */
    constructor (radius : number , borderWidth : number , borderColor : string , opt_backgroundColor ? : string , opt_corners ? : number , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    /**
     * This method performs all the necessary DOM manipulation to create the panel.
     * Overrides {@link goog.ui.Component#decorateInternal}.
     * @param element The element to decorate.
     */
    protected decorateInternal (element : GlobalElement | null ) : void ;
  }
}
declare module 'goog:goog.ui.CssRoundedPanel' {
  import CssRoundedPanel = ಠ_ಠ.clutz.goog.ui.CssRoundedPanel;
  export default CssRoundedPanel;
}
// Generated from ui/roundedpanel.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * RoundedPanel class that uses goog.graphics to create the rounded corners.
   * Do not instantiate directly. Instead, call goog.ui.RoundedPanel.create().
   */
  class GraphicsRoundedPanel extends ಠ_ಠ.clutz.goog.ui.BaseRoundedPanel {
    private noStructuralTyping_goog_ui_GraphicsRoundedPanel : any;
    /**
     * RoundedPanel class that uses goog.graphics to create the rounded corners.
     * Do not instantiate directly. Instead, call goog.ui.RoundedPanel.create().
     * @param radius The radius of the rounded corner(s), in pixels.
     * @param borderWidth The thickness of the border, in pixels.
     * @param borderColor The border color of the panel.
     * @param opt_backgroundColor The background color of the panel.
     * @param opt_corners The corners of the panel to be rounded. Any corners not specified will be rendered as square corners. Will default to all square corners if not specified.
     * @param opt_domHelper The DOM helper object for the document we want to render in.
     */
    constructor (radius : number , borderWidth : number , borderColor : string , opt_backgroundColor ? : string , opt_corners ? : number , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    /**
     * This method performs all the necessary DOM manipulation to create the panel.
     * Overrides {@link goog.ui.Component#decorateInternal}.
     * @param element The element to decorate.
     */
    protected decorateInternal (element : GlobalElement | null ) : void ;
    disposeInternal ( ) : void ;
  }
}
declare module 'goog:goog.ui.GraphicsRoundedPanel' {
  import GraphicsRoundedPanel = ಠ_ಠ.clutz.goog.ui.GraphicsRoundedPanel;
  export default GraphicsRoundedPanel;
}
// Generated from ui/roundedpanel.js
declare namespace ಠ_ಠ.clutz.goog.ui.RoundedPanel {
  /**
   * Factory method that returns an instance of a BaseRoundedPanel.
   * @param radius The radius of the rounded corner(s), in pixels.
   * @param borderWidth The thickness of the border, in pixels.
   * @param borderColor The border color of the panel.
   * @param opt_backgroundColor The background color of the panel.
   * @param opt_corners The corners of the panel to be rounded. Any corners not specified will be rendered as square corners. Will default to all square corners if not specified.
   * @param opt_domHelper The DOM helper object for the document we want to render in.
   */
  function create (radius : number , borderWidth : number , borderColor : string , opt_backgroundColor ? : string , opt_corners ? : number , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : ಠ_ಠ.clutz.goog.ui.BaseRoundedPanel ;
}
declare module 'goog:goog.ui.RoundedPanel' {
  import RoundedPanel = ಠ_ಠ.clutz.goog.ui.RoundedPanel;
  export = RoundedPanel;
}
// Generated from ui/roundedpanel.js
declare namespace ಠ_ಠ.clutz.goog.ui.RoundedPanel {
  /**
   * Enum for specifying which corners to render.
   */
  /**
   * Enum for specifying which corners to render.
   */
  enum Corner {
    ALL = 15.0 ,
    BOTTOM = 3.0 ,
    BOTTOM_LEFT = 2.0 ,
    BOTTOM_RIGHT = 1.0 ,
    LEFT = 6.0 ,
    NONE = 0.0 ,
    RIGHT = 9.0 ,
    TOP = 12.0 ,
    TOP_LEFT = 4.0 ,
    TOP_RIGHT = 8.0 ,
  }
}
declare module 'goog:goog.ui.RoundedPanel.Corner' {
  import Corner = ಠ_ಠ.clutz.goog.ui.RoundedPanel.Corner;
  export default Corner;
}

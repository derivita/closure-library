import { Uri } from '../uri/uri.js';
import { Component } from './component.js';
import type { DomHelper } from '../dom/dom.js';
/**
 * Will construct a chart using Google's chartserver.
 */
export declare class ServerChart extends Component {
    /**
     * Will construct a chart using Google's chartserver.
     * @param type The chart type.
     * @param opt_width The width of the chart.
     * @param opt_height The height of the chart.
     * @param opt_domHelper Optional DOM Helper.
     * @param opt_uri Optional uri used to connect to the chart server, if different than ServerChart.CHART_SERVER_SCHEME_INDEPENDENT_URI.
     */
    constructor(type: ServerChart.ChartType | null, opt_width?: number, opt_height?: number, opt_domHelper?: DomHelper | null, opt_uri?: string);
    private noStructuralTyping_closure_goog_ui_serverchart_ServerChart;
    /**
     * Base scheme-independent URI for the chart renderer.
     */
    static CHART_SERVER_SCHEME_INDEPENDENT_URI: string;
    /**
     * Base HTTP URI for the chart renderer.
     */
    static CHART_SERVER_HTTP_URI: string;
    /**
     * Base HTTPS URI for the chart renderer.
     */
    static CHART_SERVER_HTTPS_URI: string;
    /**
     * Base URI for the chart renderer.
     */
    static CHART_SERVER_URI: string;
    /**
     * The 0 - 1.0 ("fraction of the range") value to use when getMinValue() ==
     * getMaxValue(). This determines, for example, the vertical position
     * of the line in a flat line-chart.
     */
    static DEFAULT_NORMALIZATION: number;
    /**
     * Creates the DOM node (image) needed for the Chart
     */
    createDom(): void;
    /**
     * Decorate an image already in the DOM.
     * Expects the following structure:
     * <pre>
     * - img
     * </pre>
     * @param img Image to decorate.
     */
    decorateInternal(img: Element | null): void;
    /**
     * Updates the image if any of the data or settings have changed.
     */
    updateChart(): void;
    /**
     * Sets the URI of the chart.
     * @param uri The chart URI.
     */
    setUri(uri: Uri | null): void;
    /**
     * Returns the URI of the chart.
     * @return The chart URI.
     */
    getUri(): Uri | null;
    /**
     * Returns the upper limit on the length of the chart image URI, after encoding.
     * If the URI's length equals or exceeds it, ServerChart.UriTooLongEvent
     * is dispatched on the ServerChart object.
     * @return The chart URI length limit.
     */
    getUriLengthLimit(): number;
    /**
     * Sets the upper limit on the length of the chart image URI, after encoding.
     * If the URI's length equals or exceeds it, ServerChart.UriTooLongEvent
     * is dispatched on the ServerChart object.
     * @param uriLengthLimit The chart URI length limit.
     */
    setUriLengthLimit(uriLengthLimit: number): void;
    /**
     * Sets the 'chg' parameter of the chart Uri.
     * This is used by various types of charts to specify Grids.
     * @param value Value for the 'chg' parameter in the chart Uri.
     */
    setGridParameter(value: string): void;
    /**
     * Returns the 'chg' parameter of the chart Uri.
     * This is used by various types of charts to specify Grids.
     * @return The 'chg' parameter of the chart Uri.
     */
    getGridParameter(): string | undefined;
    /**
     * Sets the 'chm' parameter of the chart Uri.
     * This is used by various types of charts to specify Markers.
     * @param value Value for the 'chm' parameter in the chart Uri.
     */
    setMarkerParameter(value: string): void;
    /**
     * Returns the 'chm' parameter of the chart Uri.
     * This is used by various types of charts to specify Markers.
     * @return The 'chm' parameter of the chart Uri.
     */
    getMarkerParameter(): string | undefined;
    /**
     * Sets the 'chp' parameter of the chart Uri.
     * This is used by various types of charts to specify certain options.
     * e.g., finance charts use this to designate which line is the 0 axis.
     * @param value Value for the 'chp' parameter in the chart Uri.
     */
    setMiscParameter(value: string | number): void;
    /**
     * Returns the 'chp' parameter of the chart Uri.
     * This is used by various types of charts to specify certain options.
     * e.g., finance charts use this to designate which line is the 0 axis.
     * @return The 'chp' parameter of the chart Uri.
     */
    getMiscParameter(): string | undefined;
    /**
     * Sets the background fill.
     * @param fill An array of background fill specification objects. Each object may have the following properties: {string} area The area to fill, either 'bg' for background or 'c' for chart area.  The default is 'bg'. {string} color (required) The color of the background fill. // TODO(user): Add support for gradient/stripes, which requires // a different object structure.
     */
    setBackgroundFill(fill: (object | null)[] | null): void;
    /**
     * Returns the background fill.
     * @return An array of background fill specifications. If the fill specification string is in an unsupported format, the method returns an empty array.
     */
    getBackgroundFill(): (object | null)[];
    /**
     * Sets the encoding type.
     * @param type Desired data encoding type.
     */
    setEncodingType(type: ServerChart.EncodingType | null): void;
    /**
     * Gets the encoding type.
     * @return The encoding type.
     */
    getEncodingType(): ServerChart.EncodingType | null;
    /**
     * Sets the chart type.
     * @param type The desired chart type.
     */
    setType(type: ServerChart.ChartType | null): void;
    /**
     * Returns the chart type.
     * @return The chart type.
     */
    getType(): ServerChart.ChartType | null;
    /**
     * Sets the chart size.
     * @param opt_width Optional chart width, defaults to 300.
     * @param opt_height Optional chart height, defaults to 150.
     */
    setSize(opt_width?: number, opt_height?: number): void;
    /**
     * Returns the chart size.
     * @return [Width, Height].
     */
    getSize(): string[];
    /**
     * Sets the minimum value of the chart.
     * @param minValue The minimum value of the chart.
     */
    setMinValue(minValue: number): void;
    getMinValue(): number;
    /**
     * Sets the maximum value of the chart.
     * @param maxValue The maximum value of the chart.
     */
    setMaxValue(maxValue: number): void;
    getMaxValue(): number;
    /**
     * Sets the chart margins.
     * @param leftMargin The size in pixels of the left margin.
     * @param rightMargin The size in pixels of the right margin.
     * @param topMargin The size in pixels of the top margin.
     * @param bottomMargin The size in pixels of the bottom margin.
     */
    setMargins(leftMargin: number, rightMargin: number, topMargin: number, bottomMargin: number): void;
    /**
     * Sets the number of grid lines along the X-axis.
     * @param gridlines The number of X-axis grid lines.
     */
    setGridX(gridlines: number): void;
    getGridX(): number;
    /**
     * Sets the number of grid lines along the Y-axis.
     * @param gridlines The number of Y-axis grid lines.
     */
    setGridY(gridlines: number): void;
    getGridY(): number;
    /**
     * Sets the X Labels for the chart.
     * @param labels The X Labels for the chart.
     */
    setXLabels(labels: string[] | null): void;
    getXLabels(): string[] | null;
    isBarChart(): boolean;
    isPieChart(): boolean;
    isGroupedBarChart(): boolean;
    isHorizontalBarChart(): boolean;
    isLineChart(): boolean;
    isMap(): boolean;
    isStackedBarChart(): boolean;
    isVerticalBarChart(): boolean;
    /**
     * Sets the Left Labels for the chart.
     * NOTE: The array should start with the lowest value, and then
     * move progessively up the axis. So if you want labels
     * from 0 to 100 with 0 at bottom of the graph, then you would
     * want to pass something like [0,25,50,75,100].
     * @param labels The Left Labels for the chart.
     */
    setLeftLabels(labels: string[] | null): void;
    getLeftLabels(): string[] | null;
    /**
     * Sets the given ChartServer parameter.
     * @param key The ChartServer parameter to set.
     * @param value The value to set for the ChartServer parameter.
     */
    setParameterValue(key: ServerChart.UriParam | null, value: string): void;
    /**
     * Removes the given ChartServer parameter.
     * @param key The ChartServer parameter to remove.
     */
    removeParameter(key: ServerChart.UriParam | null): void;
    /**
     * Sets the Right Labels for the chart.
     * NOTE: The array should start with the lowest value, and then
     * move progessively up the axis. So if you want labels
     * from 0 to 100 with 0 at bottom of the graph, then you would
     * want to pass something like [0,25,50,75,100].
     * @param labels The Right Labels for the chart.
     */
    setRightLabels(labels: string[] | null): void;
    getRightLabels(): string[] | null;
    /**
     * Sets the position relative to the chart where the legend is to be displayed.
     * @param value Legend position.
     */
    setLegendPosition(value: ServerChart.LegendPosition | null): void;
    /**
     * Returns the position relative to the chart where the legend is to be
     * displayed.
     * @return Legend position.
     */
    getLegendPosition(): ServerChart.LegendPosition | null;
    /**
     * Sets the number of "visible" data sets. All data sets that come after
     * the visible data set are not drawn as part of the chart. Instead, they
     * are available for positioning markers.
     * @param n The number of visible data sets, or null if all data sets are to be visible.
     */
    setNumVisibleDataSets(n: number | null): void;
    /**
     * Returns the number of "visible" data sets. All data sets that come after
     * the visible data set are not drawn as part of the chart. Instead, they
     * are available for positioning markers.
     * @return The number of visible data sets, or null if all data sets are visible.
     */
    getNumVisibleDataSets(): number | null;
    /**
     * Sets the weight function for a Venn Diagram along with the associated
     * colors and legend text. Weights are assigned as follows:
     * weights[0] is relative area of circle A.
     * weights[1] is relative area of circle B.
     * weights[2] is relative area of circle C.
     * weights[3] is relative area of overlap of circles A and B.
     * weights[4] is relative area of overlap of circles A and C.
     * weights[5] is relative area of overlap of circles B and C.
     * weights[6] is relative area of overlap of circles A, B and C.
     * For a two circle Venn Diagram the weights are assigned as follows:
     * weights[0] is relative area of circle A.
     * weights[1] is relative area of circle B.
     * weights[2] is relative area of overlap of circles A and B.
     * @param weights The relative weights of the circles.
     * @param opt_legendText The legend labels for the circles.
     * @param opt_colors The colors for the circles.
     */
    setVennSeries(weights: number[] | null, opt_legendText?: string[] | null, opt_colors?: string[] | null): void;
    /**
     * Sets the title of the chart.
     * @param title The chart title.
     */
    setTitle(title: string): void;
    /**
     * Sets the size of the chart title.
     * @param size The title size, in points.
     */
    setTitleSize(size: number): void;
    getTitleSize(): number;
    /**
     * Sets the color of the chart title.
     *
     * NOTE: The color string should NOT have a '#' at the beginning of it.
     * @param color The hex value for the title color.
     */
    setTitleColor(color: string): void;
    getTitleColor(): string;
    /**
     * Adds a legend to the chart.
     * @param legend The legend to add.
     */
    setLegend(legend: string[] | null): void;
    /**
     * Sets the data scaling.
     * NOTE: This also changes the encoding type because data scaling will
     * only work with `ServerChart.EncodingType.TEXT`
     * encoding.
     * @param minimum The lowest number to apply to the data.
     * @param maximum The highest number to apply to the data.
     */
    setDataScaling(minimum: number, maximum: number): void;
    /**
     * Sets the widths of the bars and the spaces between the bars in a bar
     * chart.
     * NOTE: If the space between groups is specified but the space between
     * bars is left undefined, the space between groups will be interpreted
     * as the space between bars because this is the behavior exposed
     * in the external developers guide.
     * @param barWidth The width of a bar in pixels.
     * @param opt_spaceBars The width of the space between bars in a group in pixels.
     * @param opt_spaceGroups The width of the space between groups.
     */
    setBarSpaceWidths(barWidth: number, opt_spaceBars?: number, opt_spaceGroups?: number): void;
    /**
     * Specifies that the bar width in a bar chart should be calculated
     * automatically given the space available in the chart, while optionally
     * setting the spaces between the bars.
     * NOTE: If the space between groups is specified but the space between
     * bars is left undefined, the space between groups will be interpreted
     * as the space between bars because this is the behavior exposed
     * in the external developers guide.
     * @param opt_spaceBars The width of the space between bars in a group in pixels.
     * @param opt_spaceGroups The width of the space between groups.
     */
    setAutomaticBarWidth(opt_spaceBars?: number, opt_spaceGroups?: number): void;
    /**
     * Adds a multi-axis to the chart, and sets its type. Multiple axes of the same
     * type can be added.
     * @param axisType The desired axis type.
     * @return The index of the newly inserted axis, suitable for feeding to the setMultiAxis*() functions.
     */
    addMultiAxis(axisType: ServerChart.MultiAxisType | null): number;
    /**
     * Returns the axis type for the given axis, or all of them in an array if the
     * axis number is not given.
     * @param opt_axisNumber The axis index, as returned by addMultiAxis.
     * @return The axis type for the given axis, or all of them in an array if the axis number is not given.
     */
    getMultiAxisType(opt_axisNumber?: number): ServerChart.MultiAxisType | (ServerChart.MultiAxisType | null)[] | null;
    /**
     * Sets the label text (usually multiple values) for a given axis, overwriting
     * any existing values.
     * @param axisNumber The axis index, as returned by addMultiAxis.
     * @param labelText The actual label text to be added.
     */
    setMultiAxisLabelText(axisNumber: number, labelText: string[] | null): void;
    /**
     * Returns the label text, or all of them in a two-dimensional array if the
     * axis number is not given.
     * @param opt_axisNumber The axis index, as returned by addMultiAxis.
     * @return The label text, or all of them in a two-dimensional array if the axis number is not given.
     */
    getMultiAxisLabelText(opt_axisNumber?: number): object | string[] | null;
    /**
     * Sets the label positions for a given axis, overwriting any existing values.
     * The label positions are assumed to be floating-point numbers within the
     * range of the axis.
     * @param axisNumber The axis index, as returned by addMultiAxis.
     * @param labelPosition The actual label positions to be added.
     */
    setMultiAxisLabelPosition(axisNumber: number, labelPosition: number[] | null): void;
    /**
     * Returns the label positions for a given axis number, or all of them in a
     * two-dimensional array if the axis number is not given.
     * @param opt_axisNumber The axis index, as returned by addMultiAxis.
     * @return The label positions for a given axis number, or all of them in a two-dimensional array if the axis number is not given.
     */
    getMultiAxisLabelPosition(opt_axisNumber?: number): object | number[] | null;
    /**
     * Sets the label range for a given axis, overwriting any existing range.
     * The default range is from 0 to 100. If the start value is larger than the
     * end value, the axis direction is reversed.  rangeStart and rangeEnd must
     * be two different finite numbers.
     * @param axisNumber The axis index, as returned by addMultiAxis.
     * @param rangeStart The new start of the range.
     * @param rangeEnd The new end of the range.
     * @param opt_interval The interval between axis labels.
     */
    setMultiAxisRange(axisNumber: number, rangeStart: number, rangeEnd: number, opt_interval?: number): void;
    /**
     * Returns the label range for a given axis number as a two-element array of
     * (range start, range end), or all of them in a two-dimensional array if the
     * axis number is not given.
     * @param opt_axisNumber The axis index, as returned by addMultiAxis.
     * @return The label range for a given axis number as a two-element array of (range start, range end), or all of them in a two-dimensional array if the axis number is not given.
     */
    getMultiAxisRange(opt_axisNumber?: number): object | number[] | null;
    /**
     * Sets the label style for a given axis, overwriting any existing style.
     * The default style is as follows: Default is x-axis labels are centered, left
     * hand y-axis labels are right aligned, right hand y-axis labels are left
     * aligned. The font size and alignment are optional parameters.
     *
     * NOTE: The color string should NOT have a '#' at the beginning of it.
     * @param axisNumber The axis index, as returned by addMultiAxis.
     * @param color The hex value for this label's color.
     * @param opt_fontSize The label font size, in pixels.
     * @param opt_alignment The label alignment.
     * @param opt_axisDisplay The axis line and ticks.
     */
    setMultiAxisLabelStyle(axisNumber: number, color: string, opt_fontSize?: number, opt_alignment?: ServerChart.MultiAxisAlignment | null, opt_axisDisplay?: ServerChart.AxisDisplayType | null): void;
    /**
     * Returns the label style for a given axis number as a one- to three-element
     * array, or all of them in a two-dimensional array if the axis number is not
     * given.
     * @param opt_axisNumber The axis index, as returned by addMultiAxis.
     * @return The label style for a given axis number as a one- to three-element array, or all of them in a two-dimensional array if the axis number is not given.
     */
    getMultiAxisLabelStyle(opt_axisNumber?: number): object | number[] | null;
    /**
     * Adds a data set.
     * NOTE: The color string should NOT have a '#' at the beginning of it.
     * @param data An array of numbers (values can be NaN or null).
     * @param color The hex value for this data set's color.
     * @param opt_legendText The legend text, if any, for this data series. NOTE: If specified, all previously added data sets must also have a legend text.
     */
    addDataSet(data: (number | null)[] | null, color: string, opt_legendText?: string): void;
    /**
     * Clears the data sets from the graph. All data, including the colors and
     * legend text, is cleared.
     */
    clearDataSets(): void;
    /**
     * Returns the given data set or all of them in a two-dimensional array if
     * the set number is not given.
     * @param opt_setNumber Optional data set number to get.
     * @return The given data set or all of them in a two-dimensional array if the set number is not given.
     */
    getData(opt_setNumber?: number): any[] | null;
    /**
     * Array of possible ChartServer data values
     */
    static CHART_VALUES: string;
    /**
     * Array of extended ChartServer data values
     */
    static CHART_VALUES_EXTENDED: string;
    /**
     * Upper bound for extended values
     */
    static EXTENDED_UPPER_BOUND: number;
    disposeInternal(): void;
}
export declare namespace ServerChart {
    /**
     * Enum of chart data encoding types
     */
    enum EncodingType {
        AUTOMATIC = "",
        EXTENDED = "e",
        SIMPLE = "s",
        TEXT = "t"
    }
    /**
     * Enum of chart types with their short names used by the chartserver.
     */
    enum ChartType {
        BAR = "br",
        CLOCK = "cf",
        CONCENTRIC_PIE = "pc",
        FILLEDLINE = "lr",
        FINANCE = "lfi",
        GOOGLEOMETER = "gom",
        HORIZONTAL_GROUPED_BAR = "bhg",
        HORIZONTAL_STACKED_BAR = "bhs",
        LINE = "lc",
        MAP = "t",
        MAPUSA = "tuss",
        MAPWORLD = "twoc",
        PIE = "p",
        PIE3D = "p3",
        RADAR = "rs",
        SCATTER = "s",
        SPARKLINE = "ls",
        VENN = "v",
        VERTICAL_GROUPED_BAR = "bvg",
        VERTICAL_STACKED_BAR = "bvs",
        XYLINE = "lxy"
    }
    /**
     * Enum of multi-axis types.
     */
    enum MultiAxisType {
        X_AXIS = "x",
        LEFT_Y_AXIS = "y",
        RIGHT_Y_AXIS = "r",
        TOP_AXIS = "t"
    }
    /**
     * Enum of multi-axis alignments.
     */
    type MultiAxisAlignment = number;
    const MultiAxisAlignment: {
        ALIGN_LEFT: number;
        ALIGN_CENTER: number;
        ALIGN_RIGHT: number;
    };
    /**
     * Enum of legend positions.
     */
    enum LegendPosition {
        TOP = "t",
        BOTTOM = "b",
        LEFT = "l",
        RIGHT = "r"
    }
    /**
     * Enum of line and tick options for an axis.
     */
    enum AxisDisplayType {
        LINE_AND_TICKS = "lt",
        LINE = "l",
        TICKS = "t"
    }
    /**
     * Enum of chart maximum values in pixels, as listed at:
     * http://code.google.com/apis/chart/basics.html
     */
    enum MaximumValue {
        WIDTH = 1000,
        HEIGHT = 1000,
        MAP_WIDTH = 440,
        MAP_HEIGHT = 220,
        TOTAL_AREA = 300000
    }
    /**
     * Enum of ChartServer URI parameters.
     */
    enum UriParam {
        BACKGROUND_FILL = "chf",
        BAR_HEIGHT = "chbh",
        DATA = "chd",
        DATA_COLORS = "chco",
        DATA_LABELS = "chld",
        DATA_SCALING = "chds",
        DIGITAL_SIGNATURE = "sig",
        GEOGRAPHICAL_REGION = "chtm",
        GRID = "chg",
        LABEL_COLORS = "chlc",
        LEFT_Y_LABELS = "chly",
        LEGEND = "chdl",
        LEGEND_POSITION = "chdlp",
        LEGEND_TEXTS = "chdl",
        LINE_STYLES = "chls",
        MARGINS = "chma",
        MARKERS = "chm",
        MISC_PARAMS = "chp",
        MULTI_AXIS_LABEL_POSITION = "chxp",
        MULTI_AXIS_LABEL_TEXT = "chxl",
        MULTI_AXIS_RANGE = "chxr",
        MULTI_AXIS_STYLE = "chxs",
        MULTI_AXIS_TYPES = "chxt",
        RIGHT_LABELS = "chlr",
        RIGHT_LABEL_POSITIONS = "chlrp",
        SIZE = "chs",
        TITLE = "chtt",
        TITLE_FORMAT = "chts",
        TYPE = "cht",
        X_AXIS_STYLE = "chx",
        X_LABELS = "chl"
    }
    /**
     * Event types dispatched by the ServerChart object
     */
    enum Event {
        URI_TOO_LONG = "uritoolong"
    }
    /**
     * Class for the event dispatched on the ServerChart when the resulting URI
     * exceeds the URI length limit.
     */
    class UriTooLongEvent extends Event {
        /**
         * Class for the event dispatched on the ServerChart when the resulting URI
         * exceeds the URI length limit.
         * @param uri The overly-long URI string.
         */
        constructor(uri: string);
        private noStructuralTyping_closure_goog_ui_serverchart_UriTooLongEvent;
        /**
         * The overly-long URI string.
         */
        uri: string;
    }
}

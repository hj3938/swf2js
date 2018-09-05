/**
 * @constructor
 */
var Graphics = function ()
{
    OriginalObject.call(this);

    // origin param
    this._$id   = graphicsId++;
    this._$keys = [];

    // reset
    this.clear();

    // DisplayObject
    this._$displayObject = null;
};

/**
 * @type {number}
 */
Graphics.MOVE_TO = 0;

/**
 * @type {number}
 */
Graphics.CURVE_TO = 1;

/**
 * @type {number}
 */
Graphics.LINE_TO = 2;

/**
 * @type {number}
 */
Graphics.CUBIC = 3;

/**
 * @type {number}
 */
Graphics.ARC = 4;

/**
 * @type {number}
 */
Graphics.FILL_STYLE = 5;

/**
 * @type {number}
 */
Graphics.STROKE_STYLE = 6;

/**
 * @type {number}
 */
Graphics.END_FILL = 7;

/**
 * @type {number}
 */
Graphics.END_STROKE = 8;

/**
 * @type {number}
 */
Graphics.LINE_WIDTH = 9;

/**
 * @type {number}
 */
Graphics.LINE_CAP = 10;

/**
 * @type {number}
 */
Graphics.LINE_JOIN = 11;

/**
 * @type {number}
 */
Graphics.MITER_LIMIT = 12;

/**
 * @type {number}
 */
Graphics.BEGIN_PATH = 13;


/**
 * extends
 * @type {OriginalObject}
 */
Graphics.prototype = Object.create(OriginalObject.prototype);
Graphics.prototype.constructor = Graphics;

/**
 * @param  {array}   matrix
 * @param  {array}   color_transform
 * @param  {boolean} is_clip
 * @param  {boolean} visible
 * @return void
 */
Graphics.prototype._$draw = function (matrix, color_transform, is_clip, visible)
{

    var ctx = this._$displayObject.stage.player.preContext;

    if (is_clip) {

        ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
        this._$doDraw(ctx, this.$min(matrix[0], matrix[3]), color_transform, is_clip);

        return ;
    }

    var alpha = +(color_transform[3] + (color_transform[7] / 255));
    if (visible && alpha) {

        var xScale = +(this.$sqrt(matrix[0] * matrix[0] + matrix[1] * matrix[1]));
        var yScale = +(this.$sqrt(matrix[2] * matrix[2] + matrix[3] * matrix[3]));
        xScale = +(this.$pow(this.$SQRT2, this.$ceil(this.$log(xScale) / this.$LN2_2 - this.$LOG1P)));
        yScale = +(this.$pow(this.$SQRT2, this.$ceil(this.$log(yScale) / this.$LN2_2 - this.$LOG1P)));

        var bounds = this._$getBounds();
        var xMax   = +bounds.xMax;
        var xMin   = +bounds.xMin;
        var yMax   = +bounds.yMax;
        var yMin   = +bounds.yMin;

        var width  = this.$abs(this.$ceil((xMax - xMin) * xScale))|0;
        var height = this.$abs(this.$ceil((yMax - yMin) * yScale))|0;

        if (width > 0 || height > 0) {

            // matrix
            var m = null;

            // get cache
            var cacheKey = this.$cacheStore.generateKey(this._$id, color_transform);
            var cache    = this.$cacheStore.getCache(cacheKey);

            // cache is small
            if (cache && (width > cache.canvas.width || height > cache.canvas.height)) {
                cache = null;
            }

            // cache is not
            if (!cache) {

                var canvas    = this.$cacheStore.getCanvas();
                canvas.width  = width;
                canvas.height = height;
                cache         = canvas.getContext("2d");

                cache.setTransform(xScale, 0, 0, yScale, -xMin * xScale, -yMin * yScale);

                this._$doDraw(cache, this.$min(xScale, yScale), color_transform, false);

                this._$keys[cacheKey] = 1;
                this.$cacheStore.setCache(cacheKey, cache);

            }

            if (cache) {

                m = this.$multiplicationMatrix(matrix, [1 / xScale, 0, 0, 1 / yScale, xMin, yMin]);

                ctx.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);

                if (this.$isAndroid4x && !this.$isChrome) {
                    ctx.fillStyle = stage.context.createPattern(cache.canvas, "no-repeat");
                    ctx.fillRect(0, 0, width, height);
                } else {
                    ctx.drawImage(cache.canvas, 0, 0, width, height);
                }

            } else {

                ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                this._$doDraw(ctx, this.$min(matrix[0], matrix[3]), color_transform, false);

            }
        }
    }
};

/**
 * @param  {CanvasRenderingContext2D} ctx
 * @param  {number}                   min_scale
 * @param  {array}                    color_transform
 * @param  {boolean}                  is_clip
 * @return void
 */
Graphics.prototype._$doDraw = function (ctx, min_scale, color_transform, is_clip)
{

    if (this._$getBounds() !== null) {

        // build command
        if (this._$command === null) {

            this._$command = this._$buildCommand();

        }

        ctx.beginPath();
        this._$command(ctx, color_transform, is_clip, min_scale);

        // rendering
        switch (is_clip) {

            case true:
                ctx.clip();
                break;

            default:

                if (this._$doFill) {
                    ctx.fill();
                }

                if (this._$doLine) {
                    ctx.stroke();
                }

                break;
        }
    }

    var resetCss    = "rgba(0,0,0,1)";
    ctx.strokeStyle = resetCss;
    ctx.fillStyle   = resetCss;
    ctx.globalAlpha = 1;
};

/**
 * @return {Function}
 */
Graphics.prototype._$buildCommand = function ()
{
    var length = this._$lines.length;
    if (length) {

        var i = 0;
        while (length > i) {

            this._$fills[this._$fills.length] = this._$lines[i];

            i = (i + 1)|0;
        }

        this._$lines = [];
    }

    return this.$vtc.buildCommand(this._$fills);
};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {array}  matrix
 * @return {boolean}
 */
Graphics.prototype._$hit = function (x, y, matrix)
{
    var hit = false;
    if (this._$getBounds() !== null) {

        var ctx = this._$displayObject.stage.player.hitContext;

        ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);

        // build command
        if (this._$command === null) {

            this._$command = this._$buildCommand();

        }

        ctx.beginPath();
        this._$command(ctx, [1,1,1,1,0,0,0,0], false, this.$min(matrix[0], matrix[3]));

        hit = ctx.isPointInPath(x, y);
        if (hit) {
            return hit;
        }

        if ("isPointInStroke" in ctx) {
            hit = ctx.isPointInStroke(x, y);
            if (hit) {
                return hit;
            }
        }

    }

    return hit;
};

/**
 * @return {null|object}
 */
Graphics.prototype._$getBounds = function ()
{
    return this._$bounds;
};

/**
 * @param {number} x
 * @param {number} y
 */
Graphics.prototype._$setBounds = function (x, y)
{
    // init
    if (this._$bounds === null) {

        var no = this.$Number.MAX_VALUE;
        this._$bounds = {xMin: no, xMax: -no, yMin: no, yMax: -no};

    }

    var bounds  = this._$bounds;
    bounds.xMin = this.$min(bounds.xMin, x);
    bounds.xMax = this.$max(bounds.xMax, x);
    bounds.yMin = this.$min(bounds.yMin, y);
    bounds.yMax = this.$max(bounds.yMax, y);
};

/**
 * @return void
 */
Graphics.prototype._$restart = function ()
{
    // command restart
    this._$command = null;

    // cache restart
    var keys = this._$keys;
    for (var idx in keys) {

        if (!keys.hasOwnProperty(idx)) {
            continue;
        }

        this.$cacheStore.removeCache(keys[idx]);
    }

    // cache key reset
    this._$keys = [];
};

/**
 * @return {string}
 */
Graphics.prototype.toString = function ()
{
    return "[object Graphics]";
};

/**
 * TODO
 * @param {BitmapData} bitmap
 * @param {Matrix}     matrix
 * @param {boolean}    repeat
 * @param {boolean}    smooth
 */
Graphics.prototype.beginBitmapFill = function (bitmap, matrix, repeat, smooth)
{
    // restart
    this._$restart();
};

/**
 * @param  {string|number} color
 * @param  {number} alpha
 * @return {Graphics}
 */
Graphics.prototype.beginFill = function (color, alpha)
{
    if (typeof color === "string") {
        color = this.$colorStringToInt(color);
    }

    // alpha
    alpha = +alpha;
    switch (typeof alpha) {
        case "number":

            alpha = alpha * 100;
            if (alpha > 100) {
                alpha = 100;
            }

            break;

        default:

            alpha = 100;
            break;
    }

    if (this._$doFill) {
        this._$fills[this._$fills.length] = [Graphics.END_FILL];
    }

    // beginPath
    this._$fills[this._$fills.length] = [Graphics.BEGIN_PATH];

    // add Fill Style
    var rgba = this.$intToRGBA(color, alpha);
    this._$fills[this._$fills.length] = [Graphics.FILL_STYLE, rgba.R, rgba.G, rgba.B, rgba.A];

    // restart
    this._$restart();

    // start
    this._$doFill = true;

    return this;
};

/**
 * TODO
 * @param  {string} type
 * @param  {array}  colors
 * @param  {array}  alphas
 * @param  {array}  ratios
 * @param  {Matrix} matrix
 * @param  {string} spread_method
 * @param  {string} interpolation_method
 * @param  {number} focal_point_ratio
 * @return void
 */
Graphics.prototype.beginGradientFill = function (
    type, colors, alphas, ratios, matrix,
    spread_method, interpolation_method, focal_point_ratio
) {

};

/**
 * @param  {Shader} shader
 * @param  {Matrix} matrix
 * @return void
 */
Graphics.prototype.beginShaderFill = function (shader, matrix)
{
    // TODO

    // restart
    this._$restart();
};

/**
 * @return void
 */
Graphics.prototype.clear = function ()
{
    // origin param clear
    this._$fills   = [];
    this._$lines   = [];
    this._$bounds  = null;
    this._$doFill  = false;
    this._$doLine  = false;

    // restart
    this._$restart();
};

/**
 * @param  {Graphics} source_graphics
 * @return void
 */
Graphics.prototype.copyFrom = function (source_graphics)
{
    if (source_graphics instanceof Graphics) {

        this.clear();

        // command
        this._$command = source_graphics._$buildCommand();
        this._$fills   = this.$cloneArray(source_graphics._$fills);

        // bounds
        this._$bounds = {};
        this._$bounds.xMin = source_graphics._$bounds.xMin;
        this._$bounds.xMax = source_graphics._$bounds.xMax;
        this._$bounds.yMin = source_graphics._$bounds.yMin;
        this._$bounds.yMax = source_graphics._$bounds.yMax;

        // flag
        this._$doFill = source_graphics._$doFill;
        this._$doLine = source_graphics._$doLine;

    }
};

/**
 * @param  {number} control_x1
 * @param  {number} control_y1
 * @param  {number} control_x2
 * @param  {number} control_y2
 * @param  {number} anchor_x
 * @param  {number} anchor_y
 * @return {Graphics}
 */
Graphics.prototype.cubicCurveTo = function (
    control_x1, control_y1, control_x2, control_y2,
    anchor_x, anchor_y
) {

    if (typeof control_x1 !== "number") {
        control_x1 = control_x1|0;
    }

    if (typeof control_y1 !== "number") {
        control_y1 = control_y1|0;
    }

    if (typeof control_x2 !== "number") {
        control_x2 = control_x2|0;
    }

    if (typeof control_y2 !== "number") {
        control_y2 = control_y2|0;
    }

    if (typeof anchor_x !== "number") {
        anchor_x = anchor_x|0;
    }

    if (typeof anchor_y !== "number") {
        anchor_y = anchor_y|0;
    }


    if (this._$doFill || this._$doLine) {

        control_x1 = +(control_x1 * 20);
        control_y1 = +(control_y1 * 20);
        control_x2 = +(control_x2 * 20);
        control_y2 = +(control_y2 * 20);
        anchor_x   = +(anchor_x   * 20);
        anchor_y   = +(anchor_y   * 20);

        // set bounds
        this._$setBounds(anchor_x,   anchor_y);
        this._$setBounds(control_x1, control_y1);
        this._$setBounds(control_x2, control_y2);

        var data = [
            Graphics.CUBIC,
            control_x1, control_y1, control_x2, control_y2,
            anchor_x, anchor_y
        ];

        if (this._$doFill) {
            this._$fills[this._$fills.length] = data;
        }

        if (this._$doLine) {
            this._$lines[this._$lines.length] = data;
        }
    }

    return this;
};

/**
 * @param  {number} control_x
 * @param  {number} control_y
 * @param  {number} anchor_x
 * @param  {number} anchor_y
 * @return {Graphics}
 */
Graphics.prototype.curveTo = function (control_x, control_y, anchor_x, anchor_y)
{

    if (typeof control_x !== "number") {
        control_x = control_x|0;
    }

    if (typeof control_y !== "number") {
        control_y = control_y|0;
    }

    if (typeof anchor_x !== "number") {
        anchor_x = anchor_x|0;
    }

    if (typeof anchor_y !== "number") {
        anchor_y = anchor_y|0;
    }

    if (this._$doFill || this._$doLine) {

        control_x = +(control_x * 20);
        control_y = +(control_y * 20);
        anchor_x  = +(anchor_x  * 20);
        anchor_y  = +(anchor_y  * 20);

        this._$setBounds(control_x, control_y);
        this._$setBounds(anchor_x,  anchor_y);

        var data = [Graphics.CURVE_TO, control_x, control_y, anchor_x, anchor_y];

        if (this._$doFill) {
            this._$fills[this._$fills.length] = data;
        }

        if (this._$doLine) {
            this._$lines[this._$lines.length] = data;
        }

    }

    return this;
};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {number} radius
 * @return {Graphics}
 */
Graphics.prototype.drawCircle = function (x, y, radius)
{

    // valid
    if (typeof x !== "number") {
        x = x|0;
    }

    if (typeof y !== "number") {
        y = y|0;
    }

    if (typeof radius !== "number") {
        radius = radius|0;
    }

    if (this._$doFill || this._$doLine) {

        x      = +(x * 20);
        y      = +(y * 20);
        radius = +(radius * 20);

        this._$setBounds(x - radius, y - radius);
        this._$setBounds(x + radius, y + radius);

        var data = [Graphics.ARC, x, y, radius];

        // fills
        if (this._$doFill) {
            this._$fills[this._$fills.length] = data;
        }

        // lines
        if (this._$doLine) {
            this._$lines[this._$lines.length] = data;
        }

    }

    return this;
};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {number} width
 * @param  {number} height
 * @return {Graphics}
 */
Graphics.prototype.drawRect = function (x, y, width, height)
{
    // valid
    if (typeof x !== "number") {
        x = x|0;
    }

    if (typeof y !== "number") {
        y = y|0;
    }

    if (typeof width !== "number") {
        width = width|0;
    }

    if (typeof height !== "number") {
        height = height|0;
    }

    if (this._$doFill || this._$doLine) {

        this
            .moveTo(x, y)
            .lineTo(x + width, y)
            .lineTo(x + width, y + height)
            .lineTo(x, y + height)
            .lineTo(x, y);

    }

    return this;

};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {number} width
 * @param  {number} height
 * @return {Graphics}
 */
Graphics.prototype.drawEllipse = function (x, y, width, height)
{

    // valid
    if (typeof x !== "number") {
        x = x|0;
    }

    if (typeof y !== "number") {
        y = y|0;
    }

    if (typeof width !== "number") {
        width = width|0;
    }

    if (typeof height !== "number") {
        height = height|0;
    }

    if (this._$doFill || this._$doLine) {

        var hw = +(width  / 2); // half width
        var hh = +(height / 2); // half height
        var x0 = +(x + hw);
        var y0 = +(y + hh);
        var x1 = +(x + width);
        var y1 = +(y + height);
        var c  = +(4 / 3 * (this.$SQRT2 - 1));
        var cw = +(c * hw);
        var ch = +(c * hh);

        this.moveTo(x0, y);
        this.cubicCurveTo(x0 + cw, y,       x1,      y0 - ch, x1, y0);
        this.cubicCurveTo(x1,      y0 + ch, x0 + cw, y1,      x0, y1);
        this.cubicCurveTo(x0 - cw, y1,      x,       y0 + ch, x,  y0);
        this.cubicCurveTo(x,       y0 - ch, x0 - cw, y,       x0, y );

    }

    return this;

};

/**
 * @param {*} graphics_data
 */
Graphics.prototype.drawGraphicsData = function (graphics_data)
{
    // TODO
};

/**
 * @param  {Vector} commands
 * @param  {Vector} data
 * @param  {string} winding
 * @return {Graphics}
 */
Graphics.prototype.drawPath = function (commands, data, winding)
{
    if (this._$doFill || this._$doLine) {

        var idx = 0;
        var length = commands.length;
        if (length) {

            var no = 0;
            while (length > no) {

                switch (commands[no]) {

                    case GraphicsPathCommand.NO_OP:

                        break;

                    case GraphicsPathCommand.MOVE_TO:

                        this.moveTo(data[idx], data[idx + 1]);

                        idx = (idx + 2)|0;

                        break;

                    case GraphicsPathCommand.LINE_TO:

                        this.lineTo(data[idx], data[idx + 1]);

                        idx = (idx + 2)|0;

                        break;

                    case GraphicsPathCommand.CURVE_TO:


                        this.curveTo(data[idx], data[idx + 1], data[idx + 2], data[idx + 3]);

                        idx = (idx + 4)|0;

                        break;

                    case GraphicsPathCommand.WIDE_MOVE_TO:

                        break;

                    case GraphicsPathCommand.WIDE_LINE_TO:

                        break;

                    case GraphicsPathCommand.CUBIC_CURVE_TO:

                        this.cubicCurveTo(
                            data[idx], data[idx + 1], data[idx + 2],
                            data[idx + 3], data[idx + 4], data[idx + 5]
                        );

                        idx = (idx + 6)|0;

                        break;

                }

                no = (no + 1)|0;
            }

            this.endFill();

        }

    }

    return this;
};

/**
 * @return {Graphics}
 */
Graphics.prototype.endFill = function ()
{
    if (this._$doFill) {
        this._$fills[this._$fills.length] = [Graphics.END_FILL];
    }

    return this;
};

/**
 * @param   {number} x
 * @param   {number} y
 * @returns {Graphics}
 */
Graphics.prototype.lineTo = function (x, y)
{
    // valid
    if (typeof x !== "number") {
        x = x|0;
    }

    if (typeof y !== "number") {
        y = y|0;
    }

    if (this._$doFill || this._$doLine) {
        x = +(x * 20);
        y = +(y * 20);
        this._$setBounds(x, y);
    }

    var data = [Graphics.LINE_TO, x, y];

    // fills
    if (this._$doFill) {
        this._$fills[this._$fills.length] = data;
    }

    // lines
    if (this._$doLine) {
        this._$lines[this._$lines.length] = data;
    }

    return this;
};

/**
 * @param   {number} x
 * @param   {number} y
 * @returns {Graphics}
 */
Graphics.prototype.moveTo = function (x, y)
{
    // valid
    if (typeof x !== "number") {
        x = x|0;
    }

    if (typeof y !== "number") {
        y = y|0;
    }

    if (this._$doFill || this._$doLine) {
        x = +(x * 20);
        y = +(y * 20);
        this._$setBounds(x, y);
    }

    var data = [Graphics.MOVE_TO, x, y];

    // fills
    if (this._$doFill) {
        this._$fills[this._$fills.length] = data;
    }

    // lines
    if (this._$doLine) {
        this._$lines[this._$lines.length] = data;
    }

    return this;
};



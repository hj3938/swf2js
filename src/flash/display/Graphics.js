/**
 * @constructor
 */
var Graphics = function ()
{
    OriginalObject.call(this);

    // origin param
    this._$id           = graphicsId++;
    this._$keys         = [];
    this._$fills        = [];
    this._$lines        = [];
    this._$fillStyles   = [];
    this._$lineStyles   = [];
    this._$lineStack    = [];
    this._$lineWidth    = 0;
    this._$miterLimit   = 0;
    this._$caps         = null;
    this._$bounds       = null;
    this._$edgeBounds   = null;
    this._$fillBounds   = null;
    this._$lineBounds   = null;
    this._$doFill       = false;
    this._$doLine       = false;
    this._$pointer      = {x: 0, y:0};
    this._$lineStart    = {x: 0, y:0};

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
Graphics.BEGIN_PATH = 9;

/**
 * @type {number}
 */
Graphics.GRADIENT = 10;

/**
 * @type {number}
 */
Graphics.CLOSE_PATH = 11;


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
    if (!this._$doFill && !this._$doLine) {
        return ;
    }

    var ctx = this._$displayObject.stage.player.preContext;

    if (is_clip) {

        ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
        this._$doDraw(ctx, this.$min(matrix[0], matrix[3]), color_transform, is_clip);

        return ;
    }

    var alpha = +(color_transform[3] + (color_transform[7] / 255));
    if (visible && alpha > 0) {

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

            // get cache
            var cacheKey = this.$cacheStore.generateKey("g_"+ this._$id, color_transform);
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

                // execute
                cache.setTransform(xScale, 0, 0, yScale, -xMin * xScale, -yMin * yScale);
                this._$doDraw(cache, this.$min(xScale, yScale), color_transform, false);

                // set cache
                this._$keys[cacheKey] = 1;
                this.$cacheStore.setCache(cacheKey, cache);

            }

            // draw
            var m = this.$multiplicationMatrix(matrix, [1 / xScale, 0, 0, 1 / yScale, xMin, yMin]);
            ctx.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);

            if (this.$isAndroid4x && !this.$isChrome) {

                ctx.fillStyle = stage.context.createPattern(cache.canvas, "no-repeat");
                ctx.fillRect(0, 0, width, height);

            } else {

                ctx.drawImage(cache.canvas, 0, 0, width, height);

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

    // build command
    if (this._$command === null) {

        this._$command = this._$buildCommand();

    }

    // execute
    this._$command(ctx, color_transform, is_clip, min_scale);

    
    // clip or filter and blend
    if (is_clip) {

        ctx.clip();
    }

};

/**
 * @return {Function}
 */
Graphics.prototype._$buildCommand = function ()
{

    var length, idx;

    var recodes = [];

    // fill recode
    length = this._$fills.length;
    if (length) {

        idx = 0;
        while (length > idx) {

            recodes[recodes.length] = this._$fills[idx];

            idx = (idx + 1)|0;
        }

        this._$fills = [];

    }


    // fill style
    if (this._$fillStyles.length) {

        recodes[recodes.length] = this._$fillStyles.pop();

        recodes[recodes.length] = [Graphics.END_FILL];

        // reset
        this._$fillStyles = [];

    }


    // line recode
    length = this._$lines.length;
    if (length) {

        idx = 0;
        while (length > idx) {

            recodes[recodes.length] = this._$lines[idx];

            idx = (idx + 1)|0;
        }

        this._$lines = [];
    }


    // line style
    length = this._$lineStyles.length;
    if (length) {

        idx = 0;
        while (length > idx) {

            var lineStyle = this.$cloneArray(this._$lineStyles[idx]);

            recodes[recodes.length] = lineStyle;

            switch (lineStyle[0]) {

                case Graphics.STROKE_STYLE:

                    recodes[recodes.length] = [Graphics.END_STROKE];

                    break;

            }

            idx = (idx + 1)|0;
        }

        // reset
        this._$lineWidth  = 0;
        this._$miterLimit = 0;
        this._$caps       = null;
        this._$lineStyles = [];
        this._$lineStack  = [];

    }

    // reset
    this._$pointer   = {x:0, y:0};
    this._$lineStart = {x:0, y:0};

    return this.$vtc.buildCommand(recodes);

};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {array}  matrix
 * @return {boolean}
 */
Graphics.prototype._$hit = function (x, y, matrix)
{
    if (this._$getBounds() !== null) {

        var ctx = this._$displayObject.stage.player.hitContext;

        ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);

        // build command
        if (this._$command === null) {

            this._$command = this._$buildCommand();

        }

        this._$command(ctx, [1,1,1,1,0,0,0,0], true, this.$min(matrix[0], matrix[3]));

        if (ctx.isPointInPath(x, y)) {
            return true;
        }

        if ("isPointInStroke" in ctx) {
            if (ctx.isPointInStroke(x, y)) {
                return true;
            }
        }

    }

    return false;
};

/**
 * @param  {number} x
 * @param  {number} y
 * @return void
 */
Graphics.prototype._$setEdgeBounds = function (x, y)
{
    if (this._$miterLimit) {
        this._$lineStack[this._$lineStack.length] = { x: x, y: y };
    }

    var length = this._$lineStack.length|0;
    if (length) {

        var obj;
        var idx = 0;
        while (length > (idx + 3)) {

            // point1
            obj = this._$lineStack[idx];
            var x1 = obj.x;
            var y1 = obj.y;

            // point2
            obj = this._$lineStack[idx + 1];
            var x2 = obj.x;
            var y2 = obj.y;

            // point3
            obj = this._$lineStack[idx + 2];
            var x3 = obj.x;
            var y3 = obj.y;

            // calc
            var xa = x1 - x2;
            var ya = y1 - y2;
            var xc = x3 - x2;
            var yc = y3 - y2;

            // inner
            var a = (xa * xc) + (ya * yc);
            var b = (xa * xa) + (ya * ya);
            var c = (xc * xc) + (yc * yc);

            // square root
            var root = this.$sqrt(this.$abs(b * c));
            if (!root) {
                root = 1;
            }

            // console.log("angle", this.$acos(a / root) * 180 / this.$PI);
            var distance = (this._$lineWidth / 2) / this.$tan(this.$acos(a / root) / 2);


            var radian = this.$atan2(y2 - y1, x2 - x1) * 2;
            var angle  = radian * 180 / this.$PI;
            var sign   = (angle < 0) ? -1 : 1;
            // console.log("vec", angle);

            var mx = x2 + this.$cos(radian) * distance;
            var my = y2 + this.$sin(radian) * distance * sign;
            // console.log(
            //     "cos", this.$cos(radian),
            //     "sin", this.$sin(radian),
            //     "x1", x1/20, "x2", x2/20, "mx", mx/20,
            //     "y1", y1/20, "y2", y2/20, "my", my/20,
            //     "radian", radian,
            //     "distance", distance/20,
            //     "sign", sign
            // );


            // set edge bounds
            if (this._$lineBounds === null) {

                var no = this.$Number.MAX_VALUE;
                this._$lineBounds = {xMin: no, xMax: -no, yMin: no, yMax: -no};

            }

            this._$lineBounds = {
                xMin: this.$min(this._$lineBounds.xMin, mx),
                xMax: this.$max(this._$lineBounds.xMax, mx),
                yMin: this.$min(this._$lineBounds.yMin, my),
                yMax: this.$max(this._$lineBounds.yMax, my)
            };


            idx = (idx + 1)|0;
        }

        // delete stack
        if (idx) {
            this._$lineStack.shift();
        }

    }
};

/**
 * @return {null|object}
 */
Graphics.prototype._$getBounds = function ()
{

    if (this._$fillBounds === null && this._$lineBounds === null) {
        return null;
    }

    // build bounds
    if (this._$bounds === null) {

        // init
        var no = this.$Number.MAX_VALUE;
        this._$bounds = {
            xMin: no,
            xMax: -no,
            yMin: no,
            yMax: -no
        };

        // fill bounds
        if (this._$fillBounds !== null) {

            this._$bounds = {
                xMin: this.$min(this._$bounds.xMin, this._$fillBounds.xMin),
                xMax: this.$max(this._$bounds.xMax, this._$fillBounds.xMax),
                yMin: this.$min(this._$bounds.yMin, this._$fillBounds.yMin),
                yMax: this.$max(this._$bounds.yMax, this._$fillBounds.yMax)
            };

        }

        // line bounds
        if (this._$lineBounds !== null) {

            this._$bounds = {
                xMin: this.$min(this._$bounds.xMin, this._$lineBounds.xMin),
                xMax: this.$max(this._$bounds.xMax, this._$lineBounds.xMax),
                yMin: this.$min(this._$bounds.yMin, this._$lineBounds.yMin),
                yMax: this.$max(this._$bounds.yMax, this._$lineBounds.yMax)
            };

        }

    }

    return this._$bounds;
};

/**
 * @param {number} x
 * @param {number} y
 */
Graphics.prototype._$setBounds = function (x, y)
{
    this._$setFillBounds(x, y);
    this._$setLineBounds(x, y);
};

/**
 * @param  {number} x
 * @param  {number} y
 * @return void
 */
Graphics.prototype._$setFillBounds = function (x, y)
{
    // init
    if (this._$fillBounds === null) {

        var no = this.$Number.MAX_VALUE;
        this._$fillBounds = {xMin: no, xMax: -no, yMin: no, yMax: -no};

    }

    this._$fillBounds = {
        xMin: this.$min(this._$fillBounds.xMin, x),
        xMax: this.$max(this._$fillBounds.xMax, x),
        yMin: this.$min(this._$fillBounds.yMin, y),
        yMax: this.$max(this._$fillBounds.yMax, y)
    };
};

/**
 * @param  {number} x
 * @param  {number} y
 * @return void
 */
Graphics.prototype._$setLineBounds = function (x, y)
{
    // init
    if (this._$lineBounds === null) {

        var no = this.$Number.MAX_VALUE;
        this._$lineBounds = {xMin: no, xMax: -no, yMin: no, yMax: -no};

    }

    // vector
    var radian1 = this.$atan2(y - this._$pointer.y, x - this._$pointer.x);
    var radian2 = this.$atan2(this._$pointer.y - y, this._$pointer.x - x);

    // point
    var half      = this._$lineWidth / 2;
    var radian270 = 270 * this.$PI / 180;
    var radian90  = 90  * this.$PI / 180;

    // default
    var pointX1 = x;
    var pointY1 = y;
    var pointX2 = this._$pointer.x;
    var pointY2 = this._$pointer.y;

    // square
    if (this._$caps === CapsStyle.SQUARE) {
        pointX1 = x + this.$cos(radian1) * half;
        pointY1 = y + this.$sin(radian1) * half;
        pointX2 = this._$pointer.x + this.$cos(radian2) * half;
        pointY2 = this._$pointer.y + this.$sin(radian2) * half;
    }

    // correction
    var x1 = pointX1 + this.$cos(radian1 + radian270) * half;
    var x2 = pointX1 + this.$cos(radian1 + radian90)  * half;
    var y1 = pointY1 + this.$sin(radian1 + radian270) * half * -1;
    var y2 = pointY1 + this.$sin(radian1 + radian90)  * half * -1;
    var x3 = pointX2 + this.$cos(radian2 + radian270) * half;
    var x4 = pointX2 + this.$cos(radian2 + radian90)  * half;
    var y3 = pointY2 + this.$sin(radian2 + radian270) * half * -1;
    var y4 = pointY2 + this.$sin(radian2 + radian90)  * half * -1;

    // set
    this._$lineBounds = {
        xMin: this.$min(this._$lineBounds.xMin, this.$min(x1, this.$min(x2, this.$min(x3, x4)))),
        xMax: this.$max(this._$lineBounds.xMax, this.$max(x1, this.$max(x2, this.$max(x3, x4)))),
        yMin: this.$min(this._$lineBounds.yMin, this.$min(y1, this.$min(y2, this.$min(y3, y4)))),
        yMax: this.$max(this._$lineBounds.yMax, this.$max(y1, this.$max(y2, this.$max(y3, y4))))
    };
};

/**
 * @return {null|object}
 */
Graphics.prototype._$getRect = function ()
{
    if (this._$edgeBounds === null) {

        // init
        var no = this.$Number.MAX_VALUE;
        this._$edgeBounds = {
            xMin: no,
            xMax: -no,
            yMin: no,
            yMax: -no
        };

        // set
        this._$edgeBounds = {
            xMin: this.$min(this._$edgeBounds.xMin, this._$fillBounds.xMin),
            xMax: this.$max(this._$edgeBounds.xMax, this._$fillBounds.xMax),
            yMin: this.$min(this._$edgeBounds.yMin, this._$fillBounds.yMin),
            yMax: this.$max(this._$edgeBounds.yMax, this._$fillBounds.yMax)
        };

    }

    return this._$edgeBounds;
};

/**
 * @return void
 */
Graphics.prototype._$restart = function ()
{
    this._$command    = null;
    this._$bounds     = null;
    this._$edgeBounds = null;

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
 * @return void
 */
Graphics.prototype._$beginFill = function ()
{

    this.endFill();

    this._$fillStyles = [];

};

/**
 * @return void
 */
Graphics.prototype._$beginLine = function ()
{

    var length = this._$lineStyles.length;
    if (length) {

        var idx = 0;
        while (length > idx) {

            var lineStyle = this.$cloneArray(this._$lineStyles[idx]);

            this._$lines[this._$lines.length] = lineStyle;

            switch (lineStyle[0]) {

                case Graphics.STROKE_STYLE:

                    this._$lines[this._$lines.length] = [Graphics.END_STROKE];

                    break;

            }

            idx = (idx + 1)|0;
        }

    }

    this._$lineStyles = [];
    this._$lineStack  = [];
};

/**
 * @return void
 */
Graphics.prototype._$closeLine = function ()
{
    this._$lines[this._$lines.length] = [Graphics.CLOSE_PATH];

    var clone = this._$lineStack[0];
    this._$setEdgeBounds(clone.x, clone.y);
    this._$setEdgeBounds(this._$lineStart.x, this._$lineStart.y);

    // reset
    this._$lineStack = [{ x: this._$lineStart.x, y: this._$lineStart.y }];
};

/**
 * @param  {string} style
 * @param  {string} type
 * @param  {array}  colors
 * @param  {array}  alphas
 * @param  {array}  ratios
 * @param  {Matrix} matrix
 * @param  {string} spread_method
 * @param  {string} interpolation_method
 * @param  {number} focal_point_ratio
 * @return {array}
 */
Graphics.prototype._$beginGradient = function (
    style, type, colors, alphas, ratios, matrix,
    spread_method, interpolation_method, focal_point_ratio
) {

    // start gradient
    var data = [];
    data[data.length] = Graphics.GRADIENT;

    // matrix
    data[data.length] = (matrix instanceof Matrix) ? matrix._$matrix : [1, 0, 0, 1, 0, 0];

    // focal point ratio
    if (typeof focal_point_ratio !== "number") {
        focal_point_ratio = 0;
    }

    if (focal_point_ratio > 1) {
        focal_point_ratio = 1;
    }

    if (focal_point_ratio < -1) {
        focal_point_ratio = -1;
    }

    // set focal point ratio
    data[data.length] = focal_point_ratio;

    // type
    data[data.length] = type;

    // style
    data[data.length] = style;

    // interpolation_method
    switch (interpolation_method) {

        case InterpolationMethod.LINEAR_RGB:
            break;

        default:
            interpolation_method = InterpolationMethod.RGB;
            break;
    }

    data[data.length] = interpolation_method;

    // length
    var length = this.$min(this.$min(colors.length, alphas.length), ratios.length);
    data[data.length] = length;

    var idx = 0;
    while (length > idx) {

        data[data.length] = colors[idx];
        data[data.length] = alphas[idx] * 100;
        data[data.length] = ratios[idx] / 255;

        idx = (idx + 1)|0;

    }

    return data;

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
    // init fill style
    this._$beginFill();


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

    // init fill style
    this._$beginFill();

    // beginPath
    this._$fills[this._$fills.length] = [Graphics.BEGIN_PATH];

    // add Fill Style
    var rgba = this.$intToRGBA(color, alpha);
    this._$fillStyles[this._$fillStyles.length] = [Graphics.FILL_STYLE, rgba.R, rgba.G, rgba.B, rgba.A];

    // restart
    this._$restart();

    // start
    this._$doFill = true;

    return this;
};

/**
 * @param  {string} type
 * @param  {array}  colors
 * @param  {array}  alphas
 * @param  {array}  ratios
 * @param  {Matrix} matrix
 * @param  {string} spread_method
 * @param  {string} interpolation_method
 * @param  {number} focal_point_ratio
 * @return {Graphics}
 */
Graphics.prototype.beginGradientFill = function (
    type, colors, alphas, ratios, matrix,
    spread_method, interpolation_method, focal_point_ratio
) {

    if (!this.$isArray(colors) || !this.$isArray(alphas) || !this.$isArray(ratios)) {
        return this;
    }

    // init fill style
    this._$beginFill();

    // beginPath
    this._$fills[this._$fills.length] = [Graphics.BEGIN_PATH];

    // build gradient data
    this._$fillStyles[this._$fillStyles.length] = this._$beginGradient(
        "fill",
        type, colors, alphas, ratios, matrix,
        spread_method, interpolation_method, focal_point_ratio
    );

    // start
    this._$doFill = true;

    // restart
    this._$restart();

    return this;

};

/**
 * TODO
 * @param  {Shader} shader
 * @param  {Matrix} matrix
 * @return void
 */
Graphics.prototype.beginShaderFill = function (shader, matrix)
{
    // init fill style
    this._$beginFill();



    // restart
    this._$restart();
};

/**
 * @return void
 */
Graphics.prototype.clear = function ()
{
    // origin param clear
    this._$fills        = [];
    this._$lines        = [];
    this._$fillStyles   = [];
    this._$lineStyles   = [];
    this._$lineWidth    = 0;
    this._$caps         = null;
    this._$fillBounds   = null;
    this._$lineBounds   = null;
    this._$doFill       = false;
    this._$doLine       = false;
    this._$pointer      = {x:0, y:0};
    this._$lineStart    = {x:0, y:0};

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

        // recodes
        this._$fills      = this.$cloneArray(source_graphics._$fills);
        this._$lines      = this.$cloneArray(source_graphics._$lines);
        this._$fillStyles = this.$cloneArray(source_graphics._$fillStyles);
        this._$lineStyles = this.$cloneArray(source_graphics._$lineStyles);
        this._$lineWidth  = source_graphics._$lineWidth;
        this._$miterLimit = source_graphics._$miterLimit;
        this._$caps       = source_graphics._$caps;

        // fill bounds
        if (source_graphics._$fillBounds) {
            this._$fillBounds = {
                xMin: source_graphics._$fillBounds.xMin,
                xMax: source_graphics._$fillBounds.xMax,
                yMin: source_graphics._$fillBounds.yMin,
                yMax: source_graphics._$fillBounds.yMax
            };
        }

        // line bounds
        if (source_graphics._$lineBounds) {
            this._$lineBounds = {
                xMin: source_graphics._$lineBounds.xMin,
                xMax: source_graphics._$lineBounds.xMax,
                yMin: source_graphics._$lineBounds.yMin,
                yMax: source_graphics._$lineBounds.yMax
            };
        }

        // pointer
        this._$pointer.x = source_graphics._$pointer.x;
        this._$pointer.y = source_graphics._$pointer.y;

        // line start point
        this._$lineStart.x = source_graphics._$lineStart.x;
        this._$lineStart.y = source_graphics._$lineStart.y;

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

    // valid
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

    control_x1 = +(control_x1 * 20);
    control_y1 = +(control_y1 * 20);
    control_x2 = +(control_x2 * 20);
    control_y2 = +(control_y2 * 20);
    anchor_x   = +(anchor_x   * 20);
    anchor_y   = +(anchor_y   * 20);

    // set bounds
    this._$setBounds(anchor_x,     anchor_y);
    this._$setBounds(control_x1,   control_y1);
    this._$setBounds(control_x2,   control_y2);
    this._$setEdgeBounds(anchor_x, anchor_y);

    if (this._$doFill || this._$doLine) {

        var data = [
            Graphics.CUBIC,
            control_x1, control_y1,
            control_x2, control_y2,
            anchor_x, anchor_y
        ];

        if (this._$doFill) {
            this._$fills[this._$fills.length] = data;
        }

        if (this._$doLine) {
            this._$lines[this._$lines.length] = data;

            // line close
            if (this._$lineStart.x === anchor_x && this._$lineStart.y === anchor_y) {
                this._$closeLine();
            }
        }

    }

    this._$pointer = {x: anchor_x, y: anchor_y};

    // restart
    this._$restart();

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

    // valid
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

    control_x = +(control_x * 20);
    control_y = +(control_y * 20);
    anchor_x  = +(anchor_x  * 20);
    anchor_y  = +(anchor_y  * 20);

    this._$setBounds(control_x,    control_y);
    this._$setBounds(anchor_x,     anchor_y);
    this._$setEdgeBounds(anchor_x, anchor_y);

    if (this._$doFill || this._$doLine) {

        var data = [Graphics.CURVE_TO, control_x, control_y, anchor_x, anchor_y];

        if (this._$doFill) {
            this._$fills[this._$fills.length] = data;
        }

        if (this._$doLine) {
            this._$lines[this._$lines.length] = data;

            // line close
            if (this._$lineStart.x === anchor_x && this._$lineStart.y === anchor_y) {
                this._$closeLine();
            }
        }

    }

    this._$pointer = {x: anchor_x, y: anchor_y};

    // restart
    this._$restart();

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

    x      = +(x * 20);
    y      = +(y * 20);
    radius = +(radius * 20);

    this._$setBounds(x - radius, y - radius);
    this._$setBounds(x + radius, y + radius);

    if (this._$doFill || this._$doLine) {

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

    this._$pointer = {x: x, y: y};

    // restart
    this._$restart();

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

    return this;

};

/**
 * TODO
 * @param {*} graphics_data
 */
Graphics.prototype.drawGraphicsData = function (graphics_data)
{
};

/**
 * @param  {Vector} commands
 * @param  {Vector} data
 * @param  {string} winding
 * @return {Graphics}
 */
Graphics.prototype.drawPath = function (commands, data, winding)
{

    if (commands instanceof Vector &&
        data instanceof Vector &&
        (this._$doFill || this._$doLine)
    ) {

        switch (winding) {

            case GraphicsPathWinding.EVEN_ODD:
            case GraphicsPathWinding.NON_ZERO:
                break;

            default:
                winding = GraphicsPathWinding.EVEN_ODD;
                break;

        }

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

    this
        .moveTo(x,         y)
        .lineTo(x + width, y)
        .lineTo(x + width, y + height)
        .lineTo(x,         y + height)
        .lineTo(x,         y);

    return this;

};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {number} width
 * @param  {number} height
 * @param  {number} ellipse_width
 * @param  {number} ellipse_height
 * @return {Graphics}
 */
Graphics.prototype.drawRoundRect = function (x, y, width, height, ellipse_width, ellipse_height)
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

    if (typeof ellipse_width !== "number") {
        ellipse_width = ellipse_width|0;
    }

    if (typeof ellipse_height !== "number") {
        ellipse_height = ellipse_height|0;
    }

    var hew = +(ellipse_width / 2);
    var heh = +(ellipse_height / 2);
    var c   = +(4 / 3 * (this.$SQRT2 - 1));
    var cw  = +(c * hew);
    var ch  = +(c * heh);

    var dx0 = +(x   + hew);
    var dx1 = +(x   + width);
    var dx2 = +(dx1 - hew);

    var dy0 = +(y   + heh);
    var dy1 = +(y   + height);
    var dy2 = +(dy1 - heh);

    this.moveTo(dx0, y);
    this.lineTo(dx2, y);
    this.cubicCurveTo(dx2 + cw, y, dx1, dy0 - ch, dx1, dy0);
    this.lineTo(dx1, dy2);
    this.cubicCurveTo(dx1, dy2 + ch, dx2 + cw, dy1, dx2, dy1);
    this.lineTo(dx0, dy1);
    this.cubicCurveTo(dx0 - cw, dy1, x, dy2 + ch, x, dy2);
    this.lineTo(x, dy0);
    this.cubicCurveTo(x, dy0 - ch, dx0 - cw, y, dx0, y);

    return this;
};

/**
 * TODO
 * @param  {Vector} vertices
 * @param  {Vector} indices
 * @param  {Vector} uvt_data
 * @param  {string} culling
 * @return {Graphics}
 */
Graphics.prototype.drawTriangles = function (vertices, indices, uvt_data, culling)
{
    if (vertice instanceof Vector && (this._$doFill || this._$doLine)) {

        var length = vertices.length;
        if (length && length % 3 === 0) {

            var i = 0;
            var count = 0;
            if (indices) {

                length = indices.length;
                if (length && length % 3 === 0) {
                    i = 0;
                    while (i < length) {
                        var idx = indices[i];
                        if (count === 0) {
                            this.moveTo(vertices[idx], vertices[idx + 1]);
                        } else {
                            this.lineTo(vertices[idx], vertices[idx + 1]);
                        }

                        count++;
                        if (count % 3 === 0) {
                            count = 0;
                        }

                        i = (i + 1) | 0;
                    }
                }

            } else {

                i = 0;
                while (i < length) {
                    if (count === 0) {
                        this.moveTo(vertices[i++], vertices[i]);
                    } else {
                        this.lineTo(vertices[i++], vertices[i]);
                    }

                    count++;
                    if (count % 3 === 0) {
                        count = 0;
                    }

                    i = (i + 1) | 0;
                }

            }
        }
    }

    // restart
    this._$restart();

    return this;

};

/**
 * @return {Graphics}
 */
Graphics.prototype.endFill = function ()
{
    if (this._$doFill) {

        if (this._$fillStyles.length) {

            var fillStyle = this._$fillStyles.pop();

            this._$fills[this._$fills.length] = fillStyle;

            switch (fillStyle[0]) {

                case Graphics.FILL_STYLE:

                    this._$fills[this._$fills.length] = [Graphics.END_FILL];

                    break;

            }
        }
    }

    // restart
    this._$restart();

    return this;
};

/**
 * TODO
 * @param {BitmapData} bitmap
 * @param {Matrix}     matrix
 * @param {boolean}    repeat
 * @param {boolean}    smooth
 */
Graphics.prototype.lineBitmapStyle = function (bitmap, matrix, repeat, smooth)
{

    // restart
    this._$restart();
};

/**
 * @param {string} type
 * @param {array}  colors
 * @param {array}  alphas
 * @param {array}  ratios
 * @param {Matrix} matrix
 * @param {string} spread_method
 * @param {string} interpolation_method
 * @param {number} focal_point_ratio
 */
Graphics.prototype.lineGradientStyle = function (
    type, colors, alphas, ratios, matrix,
    spread_method, interpolation_method, focal_point_ratio
) {

    if (!this.$isArray(colors) || !this.$isArray(alphas) || !this.$isArray(ratios)) {
        return this;
    }

    // beginPath
    this._$doLine = true;
    this._$lines[this._$lines.length] = [Graphics.BEGIN_PATH];
    this._$lines[this._$lines.length] = [Graphics.MOVE_TO, this._$pointer.x, this._$pointer.y];
    this._$setBounds(this._$pointer.x, this._$pointer.y);

    // build gradient data
    this._$lineStyles[this._$lineStyles.length] = this._$beginGradient(
        "line",
        type, colors, alphas, ratios, matrix,
        spread_method, interpolation_method, focal_point_ratio
    );

    // restart
    this._$restart();

    return this;

};

/**
 * @param  {number}  thickness
 * @param  {number}  color
 * @param  {number}  alpha
 * @param  {boolean} pixel_hinting
 * @param  {string}  scale_mode
 * @param  {string}  caps
 * @param  {string}  joints
 * @param  {number}  miter_limit
 * @return {Graphics}
 */
Graphics.prototype.lineStyle = function (
    thickness, color, alpha,  pixel_hinting,
    scale_mode, caps,  joints, miter_limit
) {

    switch (arguments.length) {

        // end line style
        case 0:

            // init
            this._$beginLine();

            // reset
            this._$lineWidth  = 0;
            this._$miterLimit = 0;
            this._$caps       = null;
            this._$doLine     = false;

            break;

        // start line style
        default:

            // init
            this._$beginLine();


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

            // build rgba
            var rgba = this.$intToRGBA(color, alpha);


            // line width
            if (typeof thickness !== "number") {
                thickness = thickness|0;
            }

            if (thickness < 0) {
                thickness = 0;
            }

            if (thickness > 255) {
                thickness = 255;
            }
            thickness = thickness * 20;


            // line cap
            switch (caps) {
                case CapsStyle.NONE:
                    caps = "butt";
                    break;
                case CapsStyle.SQUARE:
                    break;
                default:
                    caps = CapsStyle.ROUND;
                    break;
            }
            this._$caps = caps;

            // line join
            switch (joints) {
                case JointStyle.BEVEL:
                case JointStyle.MITER:
                    break;
                default:
                    joints = JointStyle.ROUND;
                    break;
            }


            // miter limit
            if (miter_limit === undefined) {
                miter_limit = 10;
            }

            if (typeof miter_limit !== "number") {
                miter_limit = miter_limit|0;
            }

            if (miter_limit < 1) {
                miter_limit = 1;
            }

            if (miter_limit > 255) {
                miter_limit = 255;
            }

            // set miter limit
            if (joints === JointStyle.MITER) {
                this._$miterLimit = miter_limit;
            }


            // scale flag
            switch (scale_mode) {
                case LineScaleMode.HORIZONTAL:
                case LineScaleMode.NONE:
                case LineScaleMode.NORMAL:
                case LineScaleMode.VERTICAL:
                    break;
                default:
                    scale_mode = LineScaleMode.NORMAL;
                    break;
            }


            // set data
            var data = [Graphics.STROKE_STYLE,
                rgba.R, rgba.G, rgba.B, rgba.A,
                thickness, caps, joints, miter_limit
            ];


            // set style
            this._$lineWidth  = thickness;
            this._$lineStyles[this._$lineStyles.length] = data;

            // init line
            this._$doLine = true;
            this._$lines[this._$lines.length] = [Graphics.BEGIN_PATH];
            this._$lines[this._$lines.length] = [Graphics.MOVE_TO, this._$pointer.x, this._$pointer.y];

            // line start point
            this._$lineStart.x = this._$pointer.x;
            this._$lineStart.y = this._$pointer.y;

            this._$setBounds(this._$pointer.x, this._$pointer.y);

            break;
    }

    // restart
    this._$restart();

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

    x = +(x * 20);
    y = +(y * 20);
    this._$setBounds(x, y);
    this._$setEdgeBounds(x, y);

    if (this._$doFill || this._$doLine) {

        var data = [Graphics.LINE_TO, x, y];

        // fills
        if (this._$doFill) {
            this._$fills[this._$fills.length] = data;
        }

        // lines
        if (this._$doLine) {
            this._$lines[this._$lines.length] = data;

            // line close
            if (this._$lineStart.x === x && this._$lineStart.y === y) {
                this._$closeLine();
            }
        }
    }

    this._$pointer = {x: x, y: y};

    // restart
    this._$restart();

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

    x = +(x * 20);
    y = +(y * 20);
    this._$setBounds(x, y);
    this._$setEdgeBounds(x, y);

    if (this._$doFill || this._$doLine) {

        var data = [Graphics.MOVE_TO, x, y];

        // fills
        if (this._$doFill) {
            this._$fills[this._$fills.length] = data;
        }

        // lines
        if (this._$doLine) {
            this._$lines[this._$lines.length] = data;

            // restart
            this._$lineStart = { x: x, y: y };
            this._$lineStack = [{ x: x, y: y }];
        }

    }

    this._$pointer = {x: x, y: y};

    // restart
    this._$restart();

    return this;
};

/**
 * TODO
 * @param  {boolean} recurse
 * @return {Vector}
 */
Graphics.prototype.readGraphicsData = function (recurse)
{
    if (typeof recurse !== "boolean") {
        recurse = true;
    }

    return new Vector();
};
/**
 * @constructor
 */
var Shape = function ()
{
    DisplayObject.call(this);

    this._$data     = null;
    this._$graphics = new Graphics();

    var no = this.$Number.MAX_VALUE;
    this._$bounds = {
        xMin: no,
        xMax: -no,
        yMin: no,
        yMax: -no
    };
};

/**
 * extends
 * @type {DisplayObject}
 */
Shape.prototype = Object.create(DisplayObject.prototype);
Shape.prototype.constructor = Shape;

/**
 * properties
 */
Object.defineProperties(Shape.prototype, {
    graphics: {
        /**
         * @returns {Graphics}
         */
        get: function () {
            return this._$graphics;
        },
        /**
         * readonly
         */
        set: function () {}
    }
});

/**
 * @returns {string}
 */
Shape.prototype.toString = function ()
{
    return "[object Shape]";
};

/**
 * TODO
 * @param   {array|null|undefined} matrix
 * @returns {object}
 */
Shape.prototype._$getBounds = function (matrix)
{
    var bounds, gBounds;

    var graphics = this.graphics;
    var isDraw   = graphics.isDraw;

    if (matrix) {
        bounds = this.boundsMatrix(this._$bounds, matrix);
        if (isDraw) {
            gBounds = this.boundsMatrix(graphics.getBounds(), matrix);
            bounds.xMin = +this.$min(gBounds.xMin, bounds.xMin);
            bounds.xMax = +this.$max(gBounds.xMax, bounds.xMax);
            bounds.yMin = +this.$min(gBounds.yMin, bounds.yMin);
            bounds.yMax = +this.$max(gBounds.yMax, bounds.yMax);
        }

        for (var name in bounds) {

            if (!bounds.hasOwnProperty(name)) {
                continue;
            }

            var value    = +bounds[name];
            bounds[name] = +(value / 20);
        }

    } else {

        bounds = this._$bounds;
        if (isDraw) {
            gBounds = graphics.getBounds();
            bounds.xMin = +this.$min(gBounds.xMin, bounds.xMin);
            bounds.xMax = +this.$max(gBounds.xMax, bounds.xMax);
            bounds.yMin = +this.$min(gBounds.yMin, bounds.yMin);
            bounds.yMax = +this.$max(gBounds.yMax, bounds.yMax);
        }
    }

    return bounds;
};

/**
 * @param   {MovieClip} parent
 * @param   {number}    index
 * @param   {object}    tag
 * @param   {boolean}   shouldAction
 * @returns {Shape}
 */
Shape.prototype._$build = function (parent, index, tag, shouldAction)
{
    var shape = new Shape();

    // init
    shape.id          = index;
    shape.characterId = this.characterId;
    shape.parent      = parent;
    shape.stage       = parent.stage;
    shape._$data      = this._$data;
    shape._$bounds    = this._$bounds;

    // mask
    if (tag.PlaceFlagHasClipDepth === 1) {
        shape._$clipDepth = tag.ClipDepth;
    }

    // build PlaceObject
    shape._$buildPlaceObject(parent, tag);

    return shape;
};

/**
 * @param   {array}   matrix
 * @param   {array}   colorTransform
 * @param   {boolean} isClip
 * @param   {boolean} visible
 * @returns void
 */
Shape.prototype._$draw = function (matrix, colorTransform, isClip, visible)
{

    // pre context
    var ctx = this.parent.stage.player.preContext;

    if (isClip || this._$clipDepth) {

        ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
        this._$doDraw(ctx, this.$min(matrix[0], matrix[3]), colorTransform, isClip);

        return ;
    }

    var alpha = +(colorTransform[3] + (colorTransform[7] / 255));
    if (visible && alpha) {

        var xScale = +(this.$sqrt(matrix[0] * matrix[0] + matrix[1] * matrix[1]));
        var yScale = +(this.$sqrt(matrix[2] * matrix[2] + matrix[3] * matrix[3]));
        xScale = +(this.$pow(this.$SQRT2, this.$ceil(this.$log(xScale) / this.$LN2_2 - this.$LOG1P)));
        yScale = +(this.$pow(this.$SQRT2, this.$ceil(this.$log(yScale) / this.$LN2_2 - this.$LOG1P)));

        var bounds = this._$getBounds(null);
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
            var cacheKey = this.$cacheStore.generateKey(this.characterId, colorTransform);
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

                this._$doDraw(cache, this.$min(xScale, yScale), colorTransform, isClip);

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
                this._$doDraw(ctx, this.$min(matrix[0], matrix[3]), colorTransform, isClip);

            }
        }

    }
};

/**
 *
 * @param   {CanvasRenderingContext2D} ctx
 * @param   {number}  minScale
 * @param   {array}   colorTransform
 * @param   {boolean} isClip
 * @retuens void
 */
Shape.prototype._$doDraw = function (ctx, minScale, colorTransform, isClip)
{

    var shapes = this._$data;
    if (shapes) {

        var color, css, canvas;

        var idx    = 0;
        var length = shapes.length|0;
        while (idx < length) {

            // data set
            var data = shapes[idx];
            idx = (idx + 1)|0;

            // params
            var width    = 0;
            var height   = 0;
            var matrix   = null;
            var obj      = data.obj;
            var styleObj = (!obj.HasFillFlag) ? obj : obj.FillType;
            var isStroke = (obj.Width !== undefined);

            if (this._$clipDepth) {
                if (isStroke) {
                    continue;
                }

                data.cmd(ctx);
                continue;
            }

            // render
            ctx.beginPath();
            data.cmd(ctx);

            var styleType = styleObj.fillStyleType|0;
            switch (styleType) {

                // normal
                case 0x00:

                    color = this.$generateColorTransform(styleObj.Color, colorTransform);
                    css   = "rgba(" + color.R + "," + color.G + "," + color.B + "," + color.A + ")";

                    if (isStroke) {

                        ctx.strokeStyle = css;
                        ctx.lineWidth   = +this.$max(obj.Width, 1 / minScale);
                        ctx.lineCap     = "round";
                        ctx.lineJoin    = "round";
                        ctx.stroke();

                    } else {

                        ctx.fillStyle = css;
                        ctx.fill();

                    }

                    break;

                // gradient
                case 0x10:
                case 0x12:
                case 0x13:
                    // matrix
                    matrix = styleObj.gradientMatrix;

                    var type = styleObj.fillStyleType|0;
                    if (type !== 16) {

                        ctx.save();
                        ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);

                        css = ctx.createRadialGradient(0, 0, 0, 0, 0, 16384);

                    } else {

                        var xy = this.$linearGradientXY(matrix);
                        css = ctx.createLinearGradient(xy[0], xy[1], xy[2], xy[3]);

                    }

                    var records = styleObj.gradient.GradientRecords;
                    var rLength = records.length|0;
                    var rIdx    = 0;
                    while (rIdx < rLength) {

                        var record = records[rIdx];

                        color = this.$generateColorTransform(record.Color, colorTransform);

                        var rgba   = "rgba(" + color.R + "," + color.G + "," + color.B + "," + color.A + ")";
                        css.addColorStop(record.Ratio, rgba);

                        rIdx = (rIdx + 1)|0;
                    }

                    if (isStroke) {

                        ctx.strokeStyle = css;
                        ctx.lineWidth   = this.$max(obj.Width, 1 / minScale);
                        ctx.lineCap     = "round";
                        ctx.lineJoin    = "round";
                        ctx.stroke();

                    } else {

                        ctx.fillStyle = css;
                        ctx.fill();

                    }

                    if (type !== 16) {

                        ctx.restore();

                    }

                    break;

                // bitmap
                case 0x40:
                case 0x41:
                case 0x42:
                case 0x43:

                    // matrix
                    matrix = styleObj.bitmapMatrix;

                    var bitmapId = styleObj.bitmapId|0;
                    var repeat   = (styleType === 0x40 || styleType === 0x42) ? "repeat" : "no-repeat";

                    var cacheKey = this.$cacheStore.generateKey(
                        bitmapId + "_" + this.characterId + "_" + repeat,
                        undefined,
                        colorTransform
                    );

                    var image = this.$cacheStore.getCache(cacheKey);
                    if (image === undefined) {

                        image = this.stage._$characters[bitmapId];
                        if (!image) {
                            break;
                        }

                        if (colorTransform[0] !== 1 ||
                            colorTransform[1] !== 1 ||
                            colorTransform[2] !== 1 ||
                            colorTransform[4] ||
                            colorTransform[5] ||
                            colorTransform[6]
                        ) {

                            var imgCanvas = image.canvas;
                            width         = imgCanvas.width|0;
                            height        = imgCanvas.height|0;

                            if (width > 0 && height > 0) {
                                canvas           = this.$cacheStore.getCanvas();
                                canvas.width     = width;
                                canvas.height    = height;

                                var imageContext = canvas.getContext("2d");
                                imageContext.drawImage(image.canvas, 0, 0, width, height);

                                image = this.$generateImageTransform(imageContext, colorTransform);

                                this.$cacheStore.setCache(cacheKey, image);
                            }

                        } else {
                            ctx.globalAlpha = +(this.$max(0, this.$min((255 * colorTransform[3]) + colorTransform[7], 255)) / 255);
                        }
                    }

                    if (image) {

                        ctx.save();

                        canvas = image.canvas;
                        width  = canvas.width|0;
                        height = canvas.height|0;

                        if (width > 0 && height > 0) {

                            switch (styleType) {
                                case 0x41:
                                case 0x43:

                                    ctx.clip();
                                    ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                                    ctx.drawImage(canvas, 0, 0, width, height);

                                    break;

                                default:

                                    ctx.fillStyle = this.stage.player.context.createPattern(canvas, repeat);
                                    ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                                    ctx.fill();

                                    break;

                            }
                        }

                        ctx.restore();
                    }

                    break;

            }
        }

        // shape mask
        if (this._$clipDepth && !isClip) {

            ctx.clip();

            // android bug
            if (this.$isAndroid && this.$isChrome) {

                if (!canvas) {
                    canvas = ctx.canvas;
                }

                width  = canvas.width|0;
                height = canvas.height|0;

                var tmpCanvas    = this.$cacheStore.getCanvas();
                var tmpContext   = tmpCanvas.getContext("2d");

                canvas           = ctx.canvas;
                tmpCanvas.width  = width;
                tmpCanvas.height = height;
                tmpContext.drawImage(canvas, 0, 0, width, height);

                ctx.save();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.beginPath();
                ctx.clearRect(0, 0, width + 1, height + 1);
                ctx.drawImage(tmpCanvas, 0, 0, width, height);
                ctx.restore();

                tmpContext.setTransform(1, 0, 0, 1, 0, 0);
                tmpContext.clearRect(0, 0, width + 1, height + 1);
            }
        }

        // reset
        var resetCSS    = "rgba(0,0,0,1)";
        ctx.strokeStyle = resetCSS;
        ctx.fillStyle   = resetCSS;
        ctx.globalAlpha = 1;

    }
};
/**
 * @constructor
 */
var ConvolutionFilter = function ()
{
    BitmapFilter.call(this);
    this.filterId = 5;

    // default
    this._matrixX       = 0;
    this._matrixY       = 0;
    this._matrix        = null;
    this._divisor       = 1.0;
    this._bias          = 0.0;
    this._preserveAlpha = true;
    this._clamp         = true;
    this._color         = 0;
    this._alpha         = 0.0;

    var arg = arguments;
    this.matrixX       = arg[0];
    this.matrixY       = arg[1];
    this.matrix        = arg[2];
    this.divisor       = arg[3];
    this.bias          = arg[4];
    this.preserveAlpha = arg[5];
    this.clamp         = arg[6];
    this.color         = arg[7];
    this.alpha         = arg[8];
};

/**
 * extends
 * @type {BitmapFilter}
 */
ConvolutionFilter.prototype = Object.create(BitmapFilter.prototype);
ConvolutionFilter.prototype.constructor = ConvolutionFilter;

/**
 * properties
 */
Object.defineProperties(ConvolutionFilter.prototype, {
    matrixX: {
        get: function () {
            return this._matrixX;
        },
        set: function (matrixX) {
            if (!this.$isNaN(matrixX)) {
                this._matrixX = matrixX;
            }
        }
    },
    matrixY: {
        get: function () {
            return this._matrixY;
        },
        set: function (matrixY) {
            if (!this.$isNaN(matrixY)) {
                this._matrixY = matrixY;
            }
        }
    },
    matrix: {
        get: function () {
            return this._matrix;
        },
        set: function (matrix) {
            if (matrix instanceof Array) {
                this._matrix = matrix;
            }
        }
    },
    divisor: {
        get: function () {
            return this._divisor;
        },
        set: function (divisor) {
            if (!this.$isNaN(divisor)) {
                this._divisor = divisor;
            }
        }
    },
    bias: {
        get: function () {
            return this._bias;
        },
        set: function (bias) {
            if (!this.$isNaN(bias)) {
                bias = (bias > 255) ? 255 : (-255 > bias) ? -255: bias;
                this._bias = bias;
            }
        }
    },
    preserveAlpha: {
        get: function () {
            return this._preserveAlpha;
        },
        set: function (preserveAlpha) {
            if (typeof preserveAlpha === "boolean") {
                this._preserveAlpha = preserveAlpha;
            }
        }
    },
    clamp: {
        get: function () {
            return this._clamp;
        },
        set: function (clamp) {
            if (typeof clamp === "boolean") {
                this._clamp = clamp;
            }
        }
    },
    color: {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (color) {
                this._color = this.$toColorInt(color);
            }
        }
    },
    alpha: {
        get: function () {
            return this._alpha;
        },
        set: function (alpha) {
            if (!this.$isNaN(alpha) && 0 <= alpha && 1 >= alpha) {
                this._alpha = alpha;
            }
        }
    }
});


/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
ConvolutionFilter.prototype.render = function (cache, colorTransform, stage)
{
    var bias    = this.bias;
    var matrix  = this.matrix;
    var divisor = this.divisor;
    var preserveAlpha = this.preserveAlpha;

    var canvas = cache.canvas;
    var width  = canvas.width|0;
    var height = canvas.height|0;
    var pxData = cache.getImageData(0, 0, width, height);
    var data   = pxData.data;

    var w    = this.matrixX;
    var h    = this.matrixY;
    var half = (h / 2)|0;

    var tmp    = this.$cacheStore.getCanvas();
    tmp.width  = width;
    tmp.height = height;
    var ctx    = tmp.getContext("2d");
    var pxOut  = ctx.createImageData(width, height);
    var out    = pxOut.data;

    var y = 0;
    while (y < height) {
        var step = (y * width);

        var x = 0;
        while (x < width) {
            var px = (step + x) << 2;

            var r = 0;
            var g = 0;
            var b = 0;
            var a = 0;

            var cy = 0;
            while (cy < h) {
                var cx = 0;
                while (cx < w) {
                    var scy = this.$min(height - 1, this.$max(0, y + cy - half));
                    var scx = this.$min(width  - 1, this.$max(0, x + cx - half));
                    var cpx = (scy * width + scx) << 2;

                    var idx = cy * h + cx;
                    r = (r + data[cpx    ] * matrix[idx])|0;
                    g = (g + data[cpx + 1] * matrix[idx])|0;
                    b = (b + data[cpx + 2] * matrix[idx])|0;
                    a = (!preserveAlpha) ? (a + data[cpx + 3] * matrix[idx])|0 : 0;

                    cx = (cx + 1)|0;
                }

                cy = (cy + 1)|0;
            }

            r = (r / divisor)|0;
            g = (g / divisor)|0;
            b = (b / divisor)|0;

            r = (r > 255) ? 255 : (r < 0) ? 0 : r;
            g = (g > 255) ? 255 : (g < 0) ? 0 : g;
            b = (b > 255) ? 255 : (b < 0) ? 0 : b;

            if (preserveAlpha) {
                a = data[px + 3];
            } else {
                a = (a / divisor)|0;
                a = (a > 255) ? 255 : (a < 0) ? 0 : a;
                a = (a + bias)|0;
            }

            out[px    ] = (r + bias)|0;
            out[px + 1] = (g + bias)|0;
            out[px + 2] = (b + bias)|0;
            out[px + 3] = a;

            x = (x + 1)|0;
        }

        y = (y + 1)|0;
    }

    var offset = 0;
    if (!this.clamp) {
        offset = 2;
        width  = (width  + 4)|0;
        height = (height + 4)|0;

        // resize
        tmp.width  = width;
        tmp.height = height;
        ctx = tmp.getContext("2d");

        // execute
        var color = this.$intToRGBA(this.color, this.alpha * 100);
        var cRGBA = this.$generateColorTransform(color, colorTransform);
        ctx.strokeStyle = "rgba("+ cRGBA.R +", "+ cRGBA.G +", "+ cRGBA.B +", "+ cRGBA.A +")";
        ctx.moveTo(0, 0);
        ctx.lineTo(width, 0);
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.lineTo(0, 0);
        ctx.stroke();
    }

    ctx.putImageData(pxOut, offset, offset);
    ctx = this.$generateImageTransform(ctx, colorTransform);
    ctx._offsetX = cache._offsetX + offset;
    ctx._offsetY = cache._offsetY + offset;

    return ctx;
};
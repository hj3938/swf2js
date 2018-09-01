/**
 * @constructor
 */
var DropShadowFilter = function ()
{
    BitmapFilter.call(this);

    // id
    this.filterId = 0;

    // default
    this._$distance   = 4;
    this._$angle      = 45;
    this._$color      = 0;
    this._$alpha      = 1;
    this._$blurX      = 4;
    this._$blurY      = 4;
    this._$strength   = 1;
    this._$quality    = 1;
    this._$inner      = false;
    this._$knockout   = false;
    this._$hideObject = false;

    // init
    this.distance     = arguments[0];
    this.angle        = arguments[1];
    this.color        = arguments[2];
    this.alpha        = arguments[3];
    this.blurX        = arguments[4];
    this.blurY        = arguments[5];
    this.strength     = arguments[6];
    this.quality      = arguments[7];
    this.inner        = arguments[8];
    this.knockout     = arguments[9];
    this.hideObject   = arguments[10];

};

/**
 * extends
 * @type {BitmapFilter}
 */
DropShadowFilter.prototype = Object.create(BitmapFilter.prototype);
DropShadowFilter.prototype.constructor = DropShadowFilter;

/**
 * properties
 */
Object.defineProperties(DropShadowFilter.prototype, {
    distance: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$distance;
        },
        /**
         * @param  distance
         * @return void
         */
        set: function (distance) {
            if (typeof distance === "number") {
                this._$distance = distance;
            }
        }
    },
    angle: {
        get: function () {
            return this._$angle;
        },
        set: function (angle) {
            if (!this.$isNaN(angle) && 0 <= angle && 360 >= angle) {
                this._$angle = angle % 360;
            }
        }
    },
    color: {
        get: function () {
            return this._$color;
        },
        set: function (color) {
            if (color) {
                this._$color = this.$toColorInt(color);
            }
        }
    },
    alpha: {
        get: function () {
            return this._$alpha;
        },
        set: function (alpha) {
            if (!this.$isNaN(alpha) && 0 <= alpha && 1 >= alpha) {
                this._$alpha = alpha;
            }
        }
    },
    blurX: {
        get: function () {
            return this._$blurX;
        },
        set: function (blurX) {
            if (!this.$isNaN(blurX) && 0 <= blurX && 256 > blurX) {
                this._$blurX = blurX;
            }
        }
    },
    blurY: {
        get: function () {
            return this._$blurY;
        },
        set: function (blurY) {
            if (!this.$isNaN(blurY) && 0 <= blurY && 256 > blurY) {
                this._$blurY = blurY;
            }
        }
    },
    strength: {
        get: function () {
            return this._$strength;
        },
        set: function (strength) {
            if (!this.$isNaN(strength) && 0 <= strength && 256 > strength) {
                this._$strength = strength;
            }
        }
    },
    quality: {
        get: function () {
            return this._$quality;
        },
        set: function (quality) {
            if (0 < quality && 16 > quality) {
                this._$quality = quality;
            }
        }
    },
    inner: {
        get: function () {
            return this._$inner;
        },
        set: function (inner) {
            if (typeof inner === "boolean") {
                this._$inner = inner;
            }
        }
    },
    knockout: {
        get: function () {
            return this._$knockout;
        },
        set: function (knockout) {
            if (typeof knockout === "boolean") {
                this._$knockout = knockout;
            }
        }
    },
    hideObject: {
        get: function () {
            return this._$hideObject;
        },
        set: function (hideObject) {
            if (typeof hideObject === "boolean") {
                this._$hideObject = hideObject;
            }
        }
    }
});


/**
 * @param  {CanvasRenderingContext2D} context
 * @param  {array} colorTransform
 * @param  {Player} player
 * @return {CanvasRenderingContext2D}
 */
DropShadowFilter.prototype._$applyFilter = function (context, colorTransform, player)
{
    if (this.strength <= 0) {
        return context;
    }

    // radian
    var r = +(this.angle * this.$PI / 180);

    // blur filter
    var blurFilter = new BlurFilter(this.blurX, this.blurY, this.quality);
    var ctx        = blurFilter._$applyFilter(context, colorTransform, stage);

    // dropShadow
    var filterColor = this.$intToRGBA(this.color);
    var color       = this.$generateColorTransform(filterColor, colorTransform);
    ctx             = this.coatOfColor(ctx, color, this.inner, this.strength);

    // synthesis
    var cacheOffsetX = context._$offsetX;
    var cacheOffsetY = context._$offsetY;
    var _offsetX     = ctx._offsetX;
    var _offsetY     = ctx._offsetY;

    var canvas = ctx.canvas;
    var width  = (canvas.width  + cacheOffsetX)|0;
    var height = (canvas.height + cacheOffsetY)|0;

    var x = this.$ceil(this.$cos(r) * this.distance * player.scale * player.ratio)|0;
    var y = this.$ceil(this.$sin(r) * this.distance * player.scale * player.ratio)|0;

    width  = (width  + this.$abs(x))|0;
    height = (height + this.$abs(y))|0;

    var cx = _offsetX;
    var cy = _offsetY;
    var dx = 0;
    var dy = 0;
    if (x < 0) {
        cx = (cx - x)|0;
    } else if (x > 0) {
        dx = x|0;
    }

    if (y < 0) {
        cy = (cy - y)|0;
    } else if (y > 0) {
        dy = y|0;
    }

    var synCanvas    = this.$cacheStore.getCanvas();
    synCanvas.width  = width|0;
    synCanvas.height = height|0;

    var synCtx = synCanvas.getContext("2d");
    synCtx.drawImage(context.canvas, cx, cy);
    synCtx.globalAlpha = this.alpha;
    if (this.strength < 1) {
        synCtx.globalAlpha = +(synCtx.globalAlpha * this.strength);
    }

    synCtx.globalCompositeOperation = this.filterOperation(this.inner, this.knockout, this.hideObject);

    if (this.inner) {
        var innerCanvas    = this.$cacheStore.getCanvas();
        innerCanvas.width  = width;
        innerCanvas.height = height;
        var innerCtx       = innerCanvas.getContext("2d");

        // back
        innerCtx.fillStyle = "rgba(" +
            filterColor.R + "," +
            filterColor.G + "," +
            filterColor.B + "," +
            filterColor.A + ")";
        innerCtx.fillRect(0, 0, width, height);

        // mask
        innerCtx.globalCompositeOperation = "destination-out";
        innerCtx.fillStyle = "black";
        innerCtx.fillRect(cacheOffsetX + dx, cacheOffsetY + dy, canvas.width, canvas.height);

        innerCtx.globalCompositeOperation = "source-over";
        innerCtx.drawImage(canvas, cacheOffsetX + dx, cacheOffsetY + dy);

        synCtx.drawImage(innerCtx.canvas, 0, 0);

        // destroy
        this.$cacheStore.destroy(innerCtx);

    } else {

        synCtx.drawImage(canvas, cacheOffsetX + dx, cacheOffsetY + dy);

    }

    synCtx._offsetX = +(cacheOffsetX + cx);
    synCtx._offsetY = +(cacheOffsetY + cy);

    // destroy
    this.$cacheStore.destroy(ctx);

    return synCtx;
};
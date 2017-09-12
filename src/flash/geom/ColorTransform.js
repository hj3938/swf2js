/**
 * @param redMultiplier
 * @param greenMultiplier
 * @param blueMultiplier
 * @param alphaMultiplier
 * @param redOffset
 * @param greenOffset
 * @param blueOffset
 * @param alphaOffset
 * @constructor
 */
var ColorTransform = function (
    redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier,
    redOffset, greenOffset, blueOffset, alphaOffset
) {
    // default
    this._colorTransform  = [1.0, 1.0, 1.0, 1.0, 0, 0, 0, 0];

    // init
    this.redMultiplier    = redMultiplier;
    this.greenMultiplier  = greenMultiplier;
    this.blueMultiplier   = blueMultiplier;
    this.alphaMultiplier  = alphaMultiplier;
    this.redOffset        = redOffset;
    this.greenOffset      = greenOffset;
    this.blueOffset       = blueOffset;
    this.alphaOffset      = alphaOffset;
};


/**
 * extends
 */
ColorTransform.prototype = Object.create(OriginalObject.prototype);
ColorTransform.prototype.constructor = ColorTransform;

/**
 * properties
 */
Object.defineProperties(ColorTransform.prototype, {
    redMultiplier: {
        get: function () {
            return this._colorTransform[0];
        },
        set: function (redMultiplier) {
            if (!this.$isNaN(redMultiplier) && 0 <= redMultiplier && 1 >= redMultiplier) {
                this._colorTransform[0] = redMultiplier;
            }
        }
    },
    greenMultiplier: {
        get: function () {
            return this._colorTransform[1];
        },
        set: function (greenMultiplier) {
            if (!this.$isNaN(greenMultiplier)
                && 0 <= greenMultiplier && 1 >= greenMultiplier
            ) {
                this._colorTransform[1] = greenMultiplier;
            }
        }
    },
    blueMultiplier: {
        get: function () {
            return this._colorTransform[2];
        },
        set: function (blueMultiplier) {
            if (!this.$isNaN(blueMultiplier)
                && 0 <= blueMultiplier && 1 >= blueMultiplier
            ) {
                this._colorTransform[2] = blueMultiplier;
            }
        }
    },
    alphaMultiplier: {
        get: function () {
            return this._colorTransform[3];
        },
        set: function (alphaMultiplier) {
            if (!this.$isNaN(alphaMultiplier)
                && 0 <= alphaMultiplier && 1 >= alphaMultiplier
            ) {
                this._colorTransform[3] = alphaMultiplier;
            }
        }
    },
    redOffset: {
        get: function () {
            return this._colorTransform[4];
        },
        set: function (redOffset) {
            if (!this.$isNaN(redOffset)
                && -255 <= redOffset && 255 >= redOffset
            ) {
                this._colorTransform[4] = redOffset;
            }
        }
    },
    greenOffset: {
        get: function () {
            return this._colorTransform[5];
        },
        set: function (greenOffset) {
            if (!this.$isNaN(greenOffset)
                && -255 <= greenOffset && 255 >= greenOffset
            ) {
                this._colorTransform[5] = greenOffset;
            }
        }
    },
    blueOffset: {
        get: function () {
            return this._colorTransform[6];
        },
        set: function (blueOffset) {
            if (!this.$isNaN(blueOffset)
                && -255 <= blueOffset && 255 >= blueOffset
            ) {
                this._colorTransform[6] = blueOffset;
            }
        }
    },
    alphaOffset: {
        get: function () {
            return this._colorTransform[7];
        },
        set: function (alphaOffset) {
            if (!this.$isNaN(alphaOffset)
                && -255 <= alphaOffset && 255 >= alphaOffset
            ) {
                this._colorTransform[7] = alphaOffset;
            }
        }
    },
    color: {
        get: function () {
            return this.$rgbToInt(this.redOffset, this.greenOffset, this.blueOffset);
        },
        set: function (value) {
            var obj = null;
            if (typeof value === "number") {
                obj = this.$intToRGBA(value);
            } else {
                obj = this.$intToRGBA(this.$colorStringToInt(value));
            }

            if (obj !== null) {
                this.redOffset   = obj.R;
                this.greenOffset = obj.G;
                this.blueOffset  = obj.B;
                this.alphaOffset = obj.A * 255;
            }
        }
    }
});

/**
 * @param {ColorTransform} second
 * @returns void
 */
ColorTransform.prototype.concat = function (second)
{
    this._colorTransform = this.$multiplicationColor(
        this._colorTransform,
        second._colorTransform
    );
};

/**
 * @returns {string}
 */
ColorTransform.prototype.toString = function ()
{
    return "("
        + "redMultiplier="   + this.redMultiplier   + ", "
        + "greenMultiplier=" + this.greenMultiplier + ", "
        + "blueMultiplier="  + this.blueMultiplier  + ", "
        + "alphaMultiplier=" + this.alphaMultiplier + ", "
        + "redOffset="       + this.redOffset       + ", "
        + "greenOffset="     + this.greenOffset     + ", "
        + "blueOffset="      + this.blueOffset      + ", "
        + "alphaOffset="     + this.alphaOffset
        + ")";
};
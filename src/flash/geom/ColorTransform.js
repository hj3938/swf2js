/**
 * @param {number|undefined} redMultiplier
 * @param {number|undefined} greenMultiplier
 * @param {number|undefined} blueMultiplier
 * @param {number|undefined} alphaMultiplier
 * @param {number|undefined} redOffset
 * @param {number|undefined} greenOffset
 * @param {number|undefined} blueOffset
 * @param {number|undefined} alphaOffset
 * @constructor
 */
var ColorTransform = function (
    redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier,
    redOffset, greenOffset, blueOffset, alphaOffset
) {

    OriginalObject.call(this);

    // default
    this._$colorTransform  = [1, 1, 1, 1, 0, 0, 0, 0];

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
 * @type {OriginalObject}
 */
ColorTransform.prototype = Object.create(OriginalObject.prototype);
ColorTransform.prototype.constructor = ColorTransform;


/**
 * properties
 */
Object.defineProperties(ColorTransform.prototype, {
    redMultiplier: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[0];
        },
        /**
         * @param {number} redMultiplier
         */
        set: function (redMultiplier) {
            if (!this.$isNaN(redMultiplier) &&
                -1 <= redMultiplier && 1 >= redMultiplier
            ) {
                this._$colorTransform[0] = redMultiplier;
            }
        }
    },
    greenMultiplier: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[1];
        },
        /**
         * @param  {number} greenMultiplier
         * @return void
         */
        set: function (greenMultiplier) {
            if (!this.$isNaN(greenMultiplier) &&
                -1 <= greenMultiplier && 1 >= greenMultiplier
            ) {
                this._$colorTransform[1] = greenMultiplier;
            }
        }
    },
    blueMultiplier: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[2];
        },
        /**
         * @param  {number} blueMultiplier
         * @return void
         */
        set: function (blueMultiplier) {
            if (!this.$isNaN(blueMultiplier) &&
                -1 <= blueMultiplier && 1 >= blueMultiplier
            ) {
                this._$colorTransform[2] = blueMultiplier;
            }
        }
    },
    alphaMultiplier: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[3];
        },
        /**
         * @param  {number} alphaMultiplier
         * @return void
         */
        set: function (alphaMultiplier) {
            if (!this.$isNaN(alphaMultiplier) &&
                -1 <= alphaMultiplier && 1 >= alphaMultiplier
            ) {
                this._$colorTransform[3] = alphaMultiplier;
            }
        }
    },
    redOffset: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[4];
        },
        /**
         * @param  {number} redOffset
         * @return void
         */
        set: function (redOffset) {
            if (!this.$isNaN(redOffset) &&
                -256 < redOffset && 256 > redOffset
            ) {
                this._$colorTransform[4] = redOffset|0;
            }
        }
    },
    greenOffset: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[5];
        },
        /**
         * @param  {number} greenOffset
         * @return void
         */
        set: function (greenOffset) {
            if (!this.$isNaN(greenOffset) &&
                -256 < greenOffset && 256 > greenOffset
            ) {
                this._$colorTransform[5] = greenOffset|0;
            }
        }
    },
    blueOffset: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[6];
        },
        /**
         * @param  {number} blueOffset
         * @return void
         */
        set: function (blueOffset) {
            if (!this.$isNaN(blueOffset) &&
                -256 < blueOffset && 256 > blueOffset
            ) {
                this._$colorTransform[6] = blueOffset|0;
            }
        }
    },
    alphaOffset: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[7];
        },
        /**
         * @param  {number} alphaOffset
         * @return void
         */
        set: function (alphaOffset) {
            if (!this.$isNaN(alphaOffset) &&
                -256 < alphaOffset && 256 > alphaOffset
            ) {
                this._$colorTransform[7] = alphaOffset|0;
            }
        }
    },
    color: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$getColor();
        },
        /**
         * @param  {string|number} value
         * @return void
         */
        set: function (value) {
            this._$setColor(value);
        }
    },
    rgb: { // AS2
        /**
         * @return {number}
         */
        get: function () {
            return this._$getColor();
        },
        /**
         * @param  {string|number} value
         * @return void
         */
        set: function (value) {
            this._$setColor(value);
        }
    }
});


/**
 * @returns {string}
 */
ColorTransform.prototype.toString = function ()
{
    return "(" +
        "redMultiplier="   + this.redMultiplier   + ", " +
        "greenMultiplier=" + this.greenMultiplier + ", " +
        "blueMultiplier="  + this.blueMultiplier  + ", " +
        "alphaMultiplier=" + this.alphaMultiplier + ", " +
        "redOffset="       + this.redOffset       + ", " +
        "greenOffset="     + this.greenOffset     + ", " +
        "blueOffset="      + this.blueOffset      + ", " +
        "alphaOffset="     + this.alphaOffset     + ")";
};

/**
 * @param   {ColorTransform} second
 * @returns void
 */
ColorTransform.prototype.concat = function (second)
{
    this._$colorTransform = this.$multiplicationColor(
        this._$colorTransform,
        second._$colorTransform
    );
};

/**
 * @returns {number}
 */
ColorTransform.prototype._$getColor = function ()
{
    return this.$rgbToInt(this.redOffset, this.greenOffset, this.blueOffset);
};

/**
 * @param   {string|number} value
 * @returns void
 */
ColorTransform.prototype._$setColor = function (value)
{
    var obj = (typeof value === "number")
        ? this.$intToRGBA(value)
        : this.$intToRGBA(this.$colorStringToInt(value));

    this.redOffset       = obj.R;
    this.greenOffset     = obj.G;
    this.blueOffset      = obj.B;

    this.redMultiplier   = 0;
    this.greenMultiplier = 0;
    this.blueMultiplier  = 0;
};

/**
 * @returns {ColorTransform}
 */
ColorTransform.prototype._$clone = function ()
{
    return new ColorTransform(
        this.redMultiplier,
        this.greenMultiplier,
        this.blueMultiplier,
        this.alphaMultiplier,
        this.redOffset,
        this.greenOffset,
        this.blueOffset,
        this.alphaOffset
    );
};
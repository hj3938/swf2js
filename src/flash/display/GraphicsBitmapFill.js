/**
 * @param {BitmapData} bitmap_data
 * @param {Matrix}     matrix
 * @param {boolean}    repeat
 * @param {boolean}    smooth
 * @constructor
 */
var GraphicsBitmapFill = function (bitmap_data, matrix, repeat, smooth)
{
    this._$bitmapData = null;
    this._$matrix     = null;
    this._$repeat     = true;
    this._$smooth     = false;


};

/**
 * extends
 * @type {OriginalObject}
 */
GraphicsBitmapFill.prototype = Object.create(OriginalObject.prototype);
GraphicsBitmapFill.prototype.constructor = GraphicsBitmapFill;

/**
 * properties
 */
Object.defineProperties(GraphicsBitmapFill.prototype, {
    bitmapData: {
        /**
         * @return {BitmapData|null}
         */
        get: function () {
            return this._$bitmapData;
        },
        /**
         * @param {BitmapData} bitmap_data
         */
        set: function (bitmap_data) {
            if (bitmap_data instanceof BitmapData) {
                this._$bitmapData = bitmap_data;
            }
        }
    },
    matrix: {
        /**
         * @return {Matrix|null}
         */
        get: function () {
            return this._$matrix;
        },
        /**
         * @param {Matrix} matrix
         */
        set: function (matrix) {
            if (matrix instanceof Matrix) {
                this._$matrix = matrix;
            }
        }
    },
    repeat: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$repeat;
        },
        /**
         * @param {boolean} repeat
         */
        set: function (repeat) {
            if (typeof repeat === "boolean") {
                this._$repeat = repeat;
            }
        }
    },
    smooth: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$smooth;
        },
        /**
         * @param {boolean} smooth
         */
        set: function (smooth) {
            if (typeof smooth === "boolean") {
                this._$smooth = smooth;
            }
        }
    }
});
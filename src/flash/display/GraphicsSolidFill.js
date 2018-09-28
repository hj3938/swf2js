/**
 * @param {number} color
 * @param {number} alpha
 * @constructor
 */
var GraphicsSolidFill = function (color, alpha)
{
    // default
    this._$color = 0;
    this._$alpha = 1;

    // init
    this.color = color;
    this.alpha = alpha;
};

/**
 * extends
 * @type {OriginalObject}
 */
GraphicsSolidFill.prototype = Object.create(OriginalObject.prototype);
GraphicsSolidFill.prototype.constructor = GraphicsSolidFill;

/**
 * properties
 */
Object.defineProperties(GraphicsSolidFill.prototype, {
    alpha: {
        /**
         * @returns {number}
         */
        get: function () {
            return +(this._$alpha / 100);
        },
        /**
         * @param  {number} alpha
         * @return void
         */
        set: function (alpha) {

            alpha = +alpha;
            if (this.$isNaN(alpha)) {
                alpha = 1;
            }

            alpha = +(alpha * 100);
            if (alpha > 100) {
                alpha = 100;
            }

            this._$alpha = +alpha;

        }
    },
    color: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$color;
        },
        /**
         * @param  {number|string} color
         * @return void
         */
        set: function (color) {

            if (typeof color === "string") {
                color = this.$colorStringToInt(color);
            }

            this._$color = color|0;
        }
    }
});

/**
 * @return {string}
 */
GraphicsSolidFill.prototype.toString = function ()
{
    return "[object GraphicsSolidFill]";
};

/**
 * @return {{R: number, G: number, B: number, A: number}}
 */
GraphicsSolidFill.prototype._$toRGBA = function ()
{
    return this.$intToRGBA(this.color, this.alpha * 100);
};
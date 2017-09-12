/**
 * @param x
 * @param y
 * @constructor
 */
var Point = function (x, y)
{
    this._x = 0;
    this._y = 0;

    this.x = x;
    this.y = y;
};

/**
 * util
 */
Point.prototype = Object.create(OriginalObject.prototype);
Point.prototype.constructor = Point;

/**
 * properties
 */
Object.defineProperties(Point.prototype, {
    x: {
        get: function () {
            return this._x;
        },
        set: function (x) {
            if (!this.$isNaN(x)) {
                this._x = x;
            }
        }
    },
    y: {
        get: function () {
            return this._y;
        },
        set: function (y) {
            if (!this.$isNaN(y)) {
                this._y = y;
            }
        }
    },
    length: {
        get: function () {
            return this.$sqrt(this.$pow(this.x, 2) + this.$pow(this.y, 2));
        },
        set: function (length) {}
    }
});

/**
 * @param {number} v
 * @returns {Point}
 */
Point.prototype.add = function (v)
{
    // todo
    return this;
};

/**
 * @returns {Point}
 */
Point.prototype.clone = function ()
{
    return new Point(this.x, this.y);
};

/**
 * @returns {string}
 */
Point.prototype.toString = function ()
{
    return "(x="+ this.x +", y="+ this.y +")";
};
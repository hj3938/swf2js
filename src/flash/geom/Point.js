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
            return this._x / 20;
        },
        set: function (x) {
            if (!this.$isNaN(x)) {
                this._x = x * 20;
            }
        }
    },
    y: {
        get: function () {
            return this._y / 20;
        },
        set: function (y) {
            if (!this.$isNaN(y)) {
                this._y = y * 20;
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
 * @param {Point} v
 * @returns {Point}
 */
Point.prototype.add = function (v)
{
    return new Point(this.x + v.x, this.y + v.y);
};

/**
 * @returns {Point}
 */
Point.prototype.clone = function ()
{
    return new Point(this.x, this.y);
};

/**
 * @param sourcePoint
 * @returns void
 */
Point.prototype.copyFrom = function (sourcePoint)
{
    this.x = sourcePoint.x;
    this.y = sourcePoint.y;
};

/**
 * @param {Point} pt1
 * @param {Point} pt2
 * @returns {number}
 */
Point.distance = function (pt1, pt2)
{
    return Math.sqrt(Math.pow(pt1.x - pt2.x, 2) + Math.pow(pt1.y - pt2.y, 2));
};

/**
 *
 * @param {Point} toCompare
 * @returns {boolean}
 */
Point.prototype.equals = function (toCompare)
{
    return (this.x === toCompare.x && this.y === toCompare.y);
};

/**
 * @param {Point} pt1
 * @param {Point} pt2
 * @param {number} f
 * @returns {Point}
 */
Point.prototype.interpolate = function (pt1, pt2, f)
{
    // todo
    return new Point();
};

/**
 * @param {number} thickness
 * @returns void
 */
Point.prototype.normalize = function (thickness)
{
    // todo
};

/**
 * @param {number} dx
 * @param {number} dy
 * @returns {Point}
 */
Point.prototype.offset = function (dx, dy)
{
    // todo
};

/**
 * @param {number} len
 * @param {number} angle
 * @returns {Point}
 */
Point.prototype.polar = function (len, angle)
{
    // todo
    return new Point();
};

/**
 * @param {number} xa
 * @param {number} ya
 * @returns void
 */
Point.prototype.setTo = function (xa, ya)
{
    // todo
};

/**
 * @param {Point} v
 * @returns {Point}
 */
Point.prototype.subtract = function (v)
{
    // todo
    return new Point();
};

/**
 * @returns {string}
 */
Point.prototype.toString = function ()
{
    return "(x="+ this.x +", y="+ this.y +")";
};
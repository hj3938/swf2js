/**
 * @param x
 * @param y
 * @param width
 * @param height
 * @constructor
 */
var Rectangle = function (x, y, width, height)
{
    // default
    this._x      = 0;
    this._y      = 0;
    this._width  = 0;
    this._height = 0;

    // init
    this.x      = x;
    this.y      = y;
    this.width  = width;
    this.height = height;
};

/**
 * extends
 */
Rectangle.prototype = Object.create(OriginalObject.prototype);
Rectangle.prototype.constructor = Rectangle;

/**
 * properties
 */
Object.defineProperties(Rectangle.prototype, {
    bottom: {
        get: function () {
            return this._bottom;
        },
        set: function (bottom) {
        }
    },
    bottomRight: {
        get: function () {
            return this._bottom;
        },
        set: function (bottom) {
        }
    },
    height: {
        get: function () {
            return this._height;
        },
        set: function (height) {
        }
    },
    left: {
        get: function () {
            return this._bottom;
        },
        set: function (bottom) {
        }
    },
    right: {
        get: function () {
            return this._bottom;
        },
        set: function (bottom) {
        }
    },
    size: {
        get: function () {
            return this._bottom;
        },
        set: function (bottom) {
        }
    },
    top: {
        get: function () {
            return this._bottom;
        },
        set: function (bottom) {
        }
    },
    topLeft: {
        get: function () {
            return this._bottom;
        },
        set: function (bottom) {
        }
    },
    width: {
        get: function () {
            return this._width;
        },
        set: function (width) {
        }
    },
    x: {
        get: function () {
            return this._x;
        },
        set: function (x) {
        }
    },
    y: {
        get: function () {
            return this._y;
        },
        set: function (y) {
        }
    }
});

/**
 * @returns {Rectangle}
 */
Rectangle.prototype.clone = function ()
{
    return new Rectangle(this.x, this.y, this.width, this.height);
};

/**
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
Rectangle.prototype.contains = function (x, y)
{
    // todo
    return true;
};

/**
 * @param {Point} point
 * @returns {boolean}
 */
Rectangle.prototype.containsPoint = function (point)
{
    // todo
    return true;
};

/**
 *
 * @param {Rectangle} rect
 * @returns {boolean}
 */
Rectangle.prototype.containsRect = function (rect)
{
    // todo
    return true;
};

/**
 * @param {Rectangle} sourceRect
 */
Rectangle.prototype.copyFrom = function (sourceRect)
{
    // todo
};

/**
 * @param {Rectangle} toCompare
 * @returns {boolean}
 */
Rectangle.prototype.equals = function (toCompare)
{
    // todo
    return true;
};

/**
 * @param {number} dx
 * @param {number} dy
 * @returns void
 */
Rectangle.prototype.inflate = function (dx, dy)
{
    // todo
};

/**
 * @param {Point} point
 * @returns void
 */
Rectangle.prototype.inflatePoint = function (point)
{
    // todo
};

/**
 * @param {Rectangle} toIntersect
 * @returns {Rectangle}
 */
Rectangle.prototype.intersection = function (toIntersect)
{
    // todo
    return new Rectangle();
};

/**
 * @param {Rectangle} toIntersect
 * @returns {boolean}
 */
Rectangle.prototype.intersects = function (toIntersect)
{
    // todo
    return true;
};

/**
 * @returns {boolean}
 */
Rectangle.prototype.isEmpty = function ()
{
    // todo
    return true;
};

/**
 *
 * @param {number} dx
 * @param {number} dy
 * @returns void
 */
Rectangle.prototype.offset = function (dx ,dy)
{
    // todo
};

/**
 * @param {Point} point
 * @returns void
 */
Rectangle.prototype.offsetPoint = function (point)
{
    // todo
};

/**
 * @returns void
 */
Rectangle.prototype.setEmpty = function ()
{
    // todo
};

/**
 *
 * @param {number} xa
 * @param {number} ya
 * @param {number} widtha
 * @param {number} heighta
 * @returns void
 */
Rectangle.prototype.setTo = function (xa, ya, widtha, heighta)
{
    // todo
};

/**
 * @returns {string}
 */
Rectangle.prototype.toString = function ()
{
    // todo
    return "";
};

/**
 * @param {Rectangle} toUnion
 * @returns {Rectangle}
 */
Rectangle.prototype.union = function (toUnion)
{
    // todo
    return new Rectangle();
};

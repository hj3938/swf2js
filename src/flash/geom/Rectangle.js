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

    // origin
    this._readOnly = false;
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
            return this.y + this.height;
        },
        set: function (bottom) {
            if (!this._readOnly) {
                this.height = +(bottom - this.y);
            }
        }
    },
    bottomRight: {
        get: function () {
            return new Point(this.right, this.bottom);
        },
        set: function (value) {
            if (!this._readOnly) {
                this.right  = value.x;
                this.bottom = value.y;
            }
        }
    },
    height: {
        get: function () {
            return this._height;
        },
        set: function (height) {
            if (!this._readOnly) {
                this._height = +height;
            }
        }
    },
    left: {
        get: function () {
            return this.x;
        },
        set: function (left) {
            if (!this._readOnly) {
                this.width = +(this.right - left);
                this.x     = left;
            }
        }
    },
    right: {
        get: function () {
            return +(this.x + this.width);
        },
        set: function (right) {
            if (!this._readOnly) {
                this.width = +(right - this.x);
            }
        }
    },
    size: {
        get: function () {
            return new Point(this.width, this.height);
        },
        set: function (value) {
            if (!this._readOnly) {
                this.width  = value.x;
                this.height = value.y;
            }
        }
    },
    top: {
        get: function () {
            return this.y;
        },
        set: function (top) {
            if (!this._readOnly) {
                this.height = +(this.bottom - top);
                this.y      = top;
            }
        }
    },
    topLeft: {
        get: function () {
            return new Point(this.x, this.y);
        },
        set: function (value) {
            if (!this._readOnly) {
                this.left = value.x;
                this.top  = value.y;
            }
        }
    },
    width: {
        get: function () {
            return this._width;
        },
        set: function (width) {
            if (!this._readOnly) {
                this._width = +width;
            }
        }
    },
    x: {
        get: function () {
            return this._x;
        },
        set: function (x) {
            if (!this._readOnly) {
                this._x = +x;
            }
        }
    },
    y: {
        get: function () {
            return this._y;
        },
        set: function (y) {
            if (!this._readOnly) {
                this._y = +y;
            }
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
    return (this.x <= x && this.y <= y && this.right > x && this.bottom > y);
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
    return "(x="+ this.x +", y="+ this.y +", w="+ this.width +", h="+ this.height +")";
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

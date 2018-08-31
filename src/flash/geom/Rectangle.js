/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @constructor
 */
var Rectangle = function (x, y, width, height)
{
    OriginalObject.call(this);

    // default
    this._$x      = 0;
    this._$y      = 0;
    this._$width  = 0;
    this._$height = 0;

    // init
    this.x      = x||0;
    this.y      = y||0;
    this.width  = width||0;
    this.height = height||0;
};

/**
 * extends
 * @type {OriginalObject}
 */
Rectangle.prototype = Object.create(OriginalObject.prototype);
Rectangle.prototype.constructor = Rectangle;

/**
 * properties
 */
Object.defineProperties(Rectangle.prototype, {
    bottom: {
        /**
         * @return {number}
         */
        get: function () {
            return this.$abs(this.y) + this.height;
        },
        /**
         * @param  {number} bottom
         * @return void
         */
        set: function (bottom) {
            this.height = +(bottom - this.y);
        }
    },
    bottomRight: {
        /**
         * @return {Point}
         */
        get: function () {
            return new Point(this.right, this.bottom);
        },
        /**
         * @param  {Point} value
         * @return void
         */
        set: function (value) {
            this.right  = value.x;
            this.bottom = value.y;
        }
    },
    height: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$height / 20;
        },
        /**
         * @param  {number} height
         * @return void
         */
        set: function (height) {
            this._$height = +(height * 20);
        }
    },
    left: {
        /**
         * @return {number}
         */
        get: function () {
            return this.x;
        },
        /**
         * @param  {number} left
         * @return void
         */
        set: function (left) {
            this.width = +(this.right - left);
            this.x     = left;
        }
    },
    right: {
        /**
         * @return {number}
         */
        get: function () {
            return +(this.$abs(this.x) + this.width);
        },
        /**
         * @param  {number} right
         * @return void
         */
        set: function (right) {
            this.width = +(right - this.x);
        }
    },
    size: {
        /**
         * @return {Point}
         */
        get: function () {
            return new Point(this.width, this.height);
        },
        /**
         * @param  {Point} value
         * @return void
         */
        set: function (value) {
            this.width  = value.x;
            this.height = value.y;
        }
    },
    top: {
        /**
         * @return {number}
         */
        get: function () {
            return this.y;
        },
        /**
         * @param  {number} top
         * @return void
         */
        set: function (top) {
            this.height = +(this.bottom - top);
            this.y      = top;
        }
    },
    topLeft: {
        /**
         * @return {Point}
         */
        get: function () {
            return new Point(this.x, this.y);
        },
        /**
         * @param  {Point} value
         * @return void
         */
        set: function (value) {
            this.left = value.x;
            this.top  = value.y;
        }
    },
    width: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$width / 20;
        },
        /**
         * @param  {number} width
         * @return void
         */
        set: function (width) {
            this._$width = +(width * 20);
        }
    },
    x: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$x / 20;
        },
        /**
         * @param  {number} x
         * @return void
         */
        set: function (x) {
            this._$x = +(x * 20);
        }
    },
    y: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$y / 20;
        },
        /**
         * @param  {number} y
         * @return void
         */
        set: function (y) {
            this._$y = +(y * 20);
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
 * @param   {number} x
 * @param   {number} y
 * @returns {boolean}
 */
Rectangle.prototype.contains = function (x, y)
{
    return (this.x <= x && this.y <= y && this.right > x && this.bottom > y);
};

/**
 * @param   {Point}   point
 * @returns {boolean}
 */
Rectangle.prototype.containsPoint = function (point)
{
    return (this.x <= point.x && this.y <= point.y &&
        this.right > point.x && this.bottom > point.y);
};

/**
 *
 * @param   {Rectangle} rect
 * @returns {boolean}
 */
Rectangle.prototype.containsRect = function (rect)
{
    return (this.x <= rect.x && this.y <= rect.y &&
        this.right >= rect.right && this.bottom >= rect.bottom);
};

/**
 * @param   {Rectangle} sourceRect
 * @returns void
 */
Rectangle.prototype.copyFrom = function (sourceRect)
{
    this.x      = sourceRect.x;
    this.y      = sourceRect.y;
    this.width  = sourceRect.width;
    this.height = sourceRect.height;
};

/**
 * @param   {Rectangle} toCompare
 * @returns {boolean}
 */
Rectangle.prototype.equals = function (toCompare)
{
    return (this.x === toCompare.x && this.y === toCompare.y &&
        this.width === toCompare.width && this.height === toCompare.height);
};

/**
 * @param   {number} dx
 * @param   {number} dy
 * @returns void
 */
Rectangle.prototype.inflate = function (dx, dy)
{
    this.x      = +(this.x - dx);
    this.width  = +(this.width + 2 * dx);

    this.y      = +(this.y - dy);
    this.height = +(this.height + 2 * dy);
};

/**
 * @param   {Point} point
 * @returns void
 */
Rectangle.prototype.inflatePoint = function (point)
{
    this.x      = +(this.x - point.x);
    this.width  = +(this.width + 2 * point.x);

    this.y      = +(this.y - point.y);
    this.height = +(this.height + 2 * point.y);
};

/**
 * @param   {Rectangle} toIntersect
 * @returns {Rectangle}
 */
Rectangle.prototype.intersection = function (toIntersect)
{
    var sx = +this.$max(this.x, toIntersect.x);
    var sy = +this.$max(this.y, toIntersect.y);
    var ex = +this.$min(this.right,  toIntersect.right);
    var ey = +this.$min(this.bottom, toIntersect.bottom);

    var w = +(ex - sx);
    var h = +(ey - sy);
    return (w > 0 && h > 0) ? new Rectangle(sx, sy, w, h) : new Rectangle();
};

/**
 * @param   {Rectangle} toIntersect
 * @returns {boolean}
 */
Rectangle.prototype.intersects = function (toIntersect)
{
    var sx = +this.$max(this.x, toIntersect.x);
    var sy = +this.$max(this.y, toIntersect.y);
    var ex = +this.$min(this.right,  toIntersect.right);
    var ey = +this.$min(this.bottom, toIntersect.bottom);

    var w = +(ex - sx);
    var h = +(ey - sy);
    return (w > 0 && h > 0);
};

/**
 * @returns {boolean}
 */
Rectangle.prototype.isEmpty = function ()
{
    return (this.width <= 0 || this.height <= 0);
};

/**
 *
 * @param   {number} dx
 * @param   {number} dy
 * @returns void
 */
Rectangle.prototype.offset = function (dx ,dy)
{
    this.x = +(this.x + dx);
    this.y = +(this.y + dy);
};

/**
 * @param   {Point} point
 * @returns void
 */
Rectangle.prototype.offsetPoint = function (point)
{
    this.x = +(this.x + point.x);
    this.y = +(this.y + point.y);
};

/**
 * @returns void
 */
Rectangle.prototype.setEmpty = function ()
{
    this.x      = 0;
    this.y      = 0;
    this.width  = 0;
    this.height = 0;
};

/**
 *
 * @param   {number} xa
 * @param   {number} ya
 * @param   {number} widtha
 * @param   {number} heighta
 * @returns void
 */
Rectangle.prototype.setTo = function (xa, ya, widtha, heighta)
{
    this.x      = xa;
    this.y      = ya;
    this.width  = widtha;
    this.height = heighta;
};

/**
 * @returns {string}
 */
Rectangle.prototype.toString = function ()
{
    return "(x="+ this.x +", y="+ this.y +", w="+ this.width +", h="+ this.height +")";
};

/**
 * @param   {Rectangle} toUnion
 * @returns {Rectangle}
 */
Rectangle.prototype.union = function (toUnion)
{
    switch (true) {

        case this.isEmpty():
            return toUnion.clone();

        case toUnion.isEmpty():
            return this.clone();

        default:
            return new Rectangle(
                this.$min(this.x, toUnion.x),
                this.$min(this.y, toUnion.y),
                this.$max(this.right,  toUnion.right),
                this.$max(this.bottom, toUnion.bottom)
            );

    }
};

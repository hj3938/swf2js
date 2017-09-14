/**
 * @param width
 * @param height
 * @param transparent
 * @param fillColor
 * @constructor
 */
var BitmapData = function (width, height, transparent, fillColor)
{
    this._width       = width|0;
    this._height      = height|0;
    this._transparent = true;
    this._fillColor   = 0xFFFFFFFF;
    this._rect        = new Rectangle(0, 0, this._width, this._height);
};

/**
 * extends
 */
BitmapData.prototype = Object.create(OriginalObject.prototype);
BitmapData.prototype.constructor = BitmapData;

/**
 * properties
 */
Object.defineProperties(BitmapData.prototype, {
    width: {
        get: function () {
            return this._width;
        },
        set: function () {}
    },
    height: {
        get: function () {
            return this._height;
        },
        set: function () {}
    },
    transparent: {
        get: function () {
            return this._transparent;
        },
        set: function () {}
    },
    rect: {
        get: function () {
            return this._rect;
        },
        set: function () {}
    }
});
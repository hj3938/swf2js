/**
 * @constructor
 */
var Bitmap = function (bitmapData, pixelSnapping, smoothing)
{
    EventDispatcher.call(this);

    // init
    this._bitmapData    = bitmapData||null;
    this._pixelSnapping = pixelSnapping||"auto";
    this._smoothing     = smoothing||false;
};

/**
 * extends
 */
Bitmap.prototype = Object.create(DisplayObject.prototype);
Bitmap.prototype.constructor = Bitmap;

/**
 * properties
 */
Object.defineProperties(Bitmap.prototype, {
    bitmapData: {
        get: function () {
            return this._bitmapData;
        },
        set: function (bitmapData) {
            this._bitmapData = bitmapData;
        }
    },
    pixelSnapping: {
        get: function () {
            return this._pixelSnapping;
        },
        set: function (pixelSnapping) {
            this._pixelSnapping = pixelSnapping;
        }
    },
    smoothing: {
        get: function () {
            return this._smoothing;
        },
        set: function (smoothing) {
            this._smoothing = smoothing;
        }
    }
});
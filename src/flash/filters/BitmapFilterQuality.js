/**
 * @constructor
 */
var BitmapFilterQuality = function ()
{
    OriginalObject.call(this);
};

BitmapFilterQuality.LOW    = 1;
BitmapFilterQuality.MEDIUM = 2;
BitmapFilterQuality.HIGH   = 3;

/**
 * extends
 */
BitmapFilterQuality.prototype = Object.create(OriginalObject.prototype);
BitmapFilterQuality.prototype.constructor = BitmapFilterQuality;
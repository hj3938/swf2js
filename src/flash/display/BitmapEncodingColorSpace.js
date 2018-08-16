/**
 * @constructor
 */
var BitmapEncodingColorSpace = function ()
{
    OriginalObject.call(this);
};

BitmapEncodingColorSpace.COLORSPACE_4_2_0 = "4:2:0";
BitmapEncodingColorSpace.COLORSPACE_4_2_2 = "4:2:2";
BitmapEncodingColorSpace.COLORSPACE_4_4_4 = "4:4:4";
BitmapEncodingColorSpace.COLORSPACE_AUTO  = "auto";

/**
 * extends
 */
BitmapEncodingColorSpace.prototype = Object.create(OriginalObject.prototype);
BitmapEncodingColorSpace.prototype.constructor = BitmapEncodingColorSpace;
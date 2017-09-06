/**
 * @constructor
 */
var BitmapDataChannel = function () {};

BitmapDataChannel.ALPHA = 8;
BitmapDataChannel.BLUE  = 4;
BitmapDataChannel.GREEN = 2;
BitmapDataChannel.RED   = 1;

/**
 * extends
 */
BitmapDataChannel.prototype = Object.create(OriginalObject.prototype);
BitmapDataChannel.prototype.constructor = BitmapDataChannel;
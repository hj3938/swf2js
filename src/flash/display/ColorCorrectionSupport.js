/**
 * @constructor
 */
var ColorCorrectionSupport = function () {};

ColorCorrectionSupport.DEFAULT_OFF  = "defaultOff";
ColorCorrectionSupport.DEFAULT_ON   = "defaultOn";
ColorCorrectionSupport.UNSUPPORTED  = "unsupported";

/**
 * extends
 */
ColorCorrectionSupport.prototype = Object.create(OriginalObject.prototype);
ColorCorrectionSupport.prototype.constructor = ColorCorrectionSupport;
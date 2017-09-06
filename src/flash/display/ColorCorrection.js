/**
 * @constructor
 */
var ColorCorrection = function () {};

ColorCorrection.DEFAULT = "default";
ColorCorrection.OFF     = "off";
ColorCorrection.ON      = "on";

/**
 * extends
 */
ColorCorrection.prototype = Object.create(OriginalObject.prototype);
ColorCorrection.prototype.constructor = ColorCorrection;
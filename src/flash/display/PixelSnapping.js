/**
 * @constructor
 */
var PixelSnapping = function () {};

PixelSnapping.ALWAYS = "always";
PixelSnapping.AUTO   = "auto";
PixelSnapping.NEVER  = "never";

/**
 * extends
 */
PixelSnapping.prototype = Object.create(OriginalObject.prototype);
PixelSnapping.prototype.constructor = PixelSnapping;
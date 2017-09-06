/**
 * @constructor
 */
var GradientType = function () {};

GradientType.LINEAR = "linear";
GradientType.RADIAL = "radial";

/**
 * extends
 */
GradientType.prototype = Object.create(OriginalObject.prototype);
GradientType.prototype.constructor = GradientType;
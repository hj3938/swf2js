/**
 * @constructor
 */
var InterpolationMethod = function () {};

InterpolationMethod.LINEAR_RGB = "linearRGB";
InterpolationMethod.RGB        = "rgb";

/**
 * extends
 */
InterpolationMethod.prototype = Object.create(OriginalObject.prototype);
InterpolationMethod.prototype.constructor = InterpolationMethod;
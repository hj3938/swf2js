/**
 * @constructor
 */
var SpreadMethod = function () {};

SpreadMethod.PAD     = "pad";
SpreadMethod.REFLECT = "reflect";
SpreadMethod.REPEAT  = "repeat";

/**
 * extends
 */
SpreadMethod.prototype = Object.create(OriginalObject.prototype);
SpreadMethod.prototype.constructor = SpreadMethod;
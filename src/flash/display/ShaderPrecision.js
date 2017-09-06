/**
 * @constructor
 */
var ShaderPrecision = function () {};

ShaderPrecision.FAST = "fast";
ShaderPrecision.FULL = "full";

/**
 * extends
 */
ShaderPrecision.prototype = Object.create(OriginalObject.prototype);
ShaderPrecision.prototype.constructor = ShaderPrecision;
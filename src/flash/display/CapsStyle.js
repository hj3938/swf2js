/**
 * @constructor
 */
var CapsStyle = function () {};

CapsStyle.NONE   = "none";
CapsStyle.ROUND  = "round";
CapsStyle.SQUARE = "square";

/**
 * extends
 */
CapsStyle.prototype = Object.create(OriginalObject.prototype);
CapsStyle.prototype.constructor = CapsStyle;
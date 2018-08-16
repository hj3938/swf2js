/**
 * @constructor
 */
var CapsStyle = function ()
{
    OriginalObject.call(this);
};

CapsStyle.NONE   = "none";
CapsStyle.ROUND  = "round";
CapsStyle.SQUARE = "square";

/**
 * extends
 */
CapsStyle.prototype = Object.create(OriginalObject.prototype);
CapsStyle.prototype.constructor = CapsStyle;
/**
 * @constructor
 */
var StageAlign = function () {};

StageAlign.BOTTOM       = "B";
StageAlign.BOTTOM_LEFT  = "BL";
StageAlign.BOTTOM_RIGHT = "BR";
StageAlign.LEFT         = "L";
StageAlign.RIGHT        = "R";
StageAlign.TOP          = "T";
StageAlign.TOP_LEFT     = "TL";
StageAlign.TOP_RIGHT    = "TR";

/**
 * extends
 */
StageAlign.prototype = Object.create(OriginalObject.prototype);
StageAlign.prototype.constructor = StageAlign;
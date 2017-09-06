/**
 * @constructor
 */
var LineScaleMode = function () {};

LineScaleMode.HORIZONTAL = "horizontal";
LineScaleMode.NONE       = "none";
LineScaleMode.NORMAL     = "normal";
LineScaleMode.VERTICAL   = "vertical";

/**
 * extends
 */
LineScaleMode.prototype = Object.create(OriginalObject.prototype);
LineScaleMode.prototype.constructor = LineScaleMode;
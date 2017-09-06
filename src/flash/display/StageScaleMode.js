/**
 * @constructor
 */
var StageScaleMode = function () {};

StageScaleMode.EXACT_FIT = "exactFit";
StageScaleMode.NO_BORDER = "noBorder";
StageScaleMode.NO_SCALE  = "noScale";
StageScaleMode.SHOW_ALL  = "showAll";

/**
 * extends
 */
StageScaleMode.prototype = Object.create(OriginalObject.prototype);
StageScaleMode.prototype.constructor = StageScaleMode;
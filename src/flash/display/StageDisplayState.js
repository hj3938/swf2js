/**
 * @constructor
 */
var StageDisplayState = function () {};

StageDisplayState.FULL_SCREEN             = "fullScreen";
StageDisplayState.FULL_SCREEN_INTERACTIVE = "fullScreenInteractive";
StageDisplayState.NORMAL                  = "normal";

/**
 * extends
 */
StageDisplayState.prototype = Object.create(OriginalObject.prototype);
StageDisplayState.prototype.constructor = StageDisplayState;
/**
 * @constructor
 */
var StageQuality = function () {};

StageQuality.BEST              = "best";
StageQuality.HIGH              = "high";
StageQuality.HIGH_16X16        = "16x16";
StageQuality.HIGH_16X16_LINEAR = "16x16linear";
StageQuality.HIGH_8X8          = "8x8";
StageQuality.HIGH_8X8_LINEAR   = "8x8linear";
StageQuality.LOW               = "low";
StageQuality.MEDIUM            = "medium";

/**
 * extends
 */
StageQuality.prototype = Object.create(OriginalObject.prototype);
StageQuality.prototype.constructor = StageQuality;
/**
 * @constructor
 */
var CollatorMode = function () {};

CollatorMode.MATCHING = "matching";
CollatorMode.SORTING  = "sorting";

/**
 * extends
 */
CollatorMode.prototype = Object.create(OriginalObject.prototype);
CollatorMode.prototype.constructor = CollatorMode;
/**
 * @constructor
 */
var CollatorMode = function ()
{
    OriginalObject.call(this);
};

CollatorMode.MATCHING = "matching";
CollatorMode.SORTING  = "sorting";

/**
 * extends
 */
CollatorMode.prototype = Object.create(OriginalObject.prototype);
CollatorMode.prototype.constructor = CollatorMode;
/**
 * @constructor
 */
var OriginalObject = function ()
{
    Util.call(this);
};

/**
 * util
 */
OriginalObject.prototype = Object.create(Util.prototype);
OriginalObject.prototype.constructor = OriginalObject;

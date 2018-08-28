/**
 * @constructor
 */
var OriginalObject = function ()
{
    Util.call(this);
};

/**
 * extends
 * @type {Util}
 */
OriginalObject.prototype = Object.create(Util.prototype);
OriginalObject.prototype.constructor = OriginalObject;

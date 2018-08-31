/**
 * @constructor
 */
var Graphics = function ()
{
    OriginalObject.call(this);
};

/**
 * extends
 * @type {OriginalObject}
 */
Graphics.prototype = Object.create(OriginalObject.prototype);
Graphics.prototype.constructor = Graphics;


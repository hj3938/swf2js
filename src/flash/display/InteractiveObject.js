/**
 * @constructor
 */
var InteractiveObject = function ()
{
    DisplayObject.call(this);
};

/**
 * extends
 * @type {DisplayObject}
 */
InteractiveObject.prototype = Object.create(DisplayObject.prototype);
InteractiveObject.prototype.constructor = InteractiveObject;
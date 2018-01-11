/**
 * @constructor
 */
var InteractiveObject = function ()
{
    DisplayObject.call(this);
};

/**
 * extends
 */
InteractiveObject.prototype = Object.create(DisplayObject.prototype);
InteractiveObject.prototype.constructor = InteractiveObject;
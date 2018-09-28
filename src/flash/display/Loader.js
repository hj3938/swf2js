/**
 * @constructor
 */
var Loader = function ()
{
    DisplayObjectContainer.call(this);
};

/**
 * extends
 * @type {DisplayObjectContainer}
 */
Loader.prototype = Object.create(DisplayObjectContainer.prototype);
Loader.prototype.constructor = Loader;

/**
 * @param  {array}   matrix
 * @param  {array}   color_transform
 * @param  {boolean} is_clip
 * @param  {boolean} visible
 * @return void
 */
Loader.prototype._$draw = function (matrix, color_transform, is_clip, visible)
{

};
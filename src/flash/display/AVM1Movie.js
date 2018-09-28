/**
 * @constructor
 */
var AVM1Movie = function () {};

/**
 * extends
 * @type {DisplayObject}
 */
AVM1Movie.prototype = Object.create(DisplayObject.prototype);
AVM1Movie.prototype.constructor = AVM1Movie;

/**
 * @param  {array}   matrix
 * @param  {array}   color_transform
 * @param  {boolean} is_clip
 * @param  {boolean} visible
 * @return void
 */
AVM1Movie.prototype._$draw = function (matrix, color_transform, is_clip, visible)
{

};
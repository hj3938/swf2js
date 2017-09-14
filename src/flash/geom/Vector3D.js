/**
 * @param x
 * @param y
 * @param z
 * @param w
 * @constructor
 */
var Vector3D = function (x, y, z, w)
{
    this._x = 0;
    this._y = 0;
    this._z = 0;
    this._w = 0;
};

/**
 * extends
 */
Vector3D.prototype = Object.create(OriginalObject.prototype);
Vector3D.prototype.constructor = Vector3D;